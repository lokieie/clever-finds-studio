import { useState, useEffect } from "react";
import { Search, FileText, ShoppingBag, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { searchAll } from "@/data/content";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = searchAll(query);
  const hasResults = results.articles.length > 0 || results.products.length > 0;

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onOpenChange]);

  const goTo = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <div className="flex items-center border-b border-border px-4">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles & products..."
            className="flex-1 px-3 py-4 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {query.length > 0 && (
          <div className="max-h-80 overflow-y-auto p-2">
            {!hasResults && (
              <p className="text-sm text-muted-foreground text-center py-8">
                No results found for "{query}"
              </p>
            )}

            {results.articles.length > 0 && (
              <div className="mb-2">
                <p className="text-xs font-semibold text-muted-foreground px-2 py-1.5 uppercase tracking-wider">
                  Articles
                </p>
                {results.articles.map((a) => (
                  <button
                    key={a.slug}
                    onClick={() => goTo(`/blog/${a.slug}`)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted text-left transition-colors"
                  >
                    <FileText className="w-4 h-4 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {results.products.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground px-2 py-1.5 uppercase tracking-wider">
                  Products
                </p>
                {results.products.map((p) => (
                  <button
                    key={p.title}
                    onClick={() => goTo(`/category/${p.categorySlug}`)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted text-left transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4 text-cta shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="border-t border-border px-4 py-2 flex items-center justify-end">
          <span className="text-xs text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px] font-mono">⌘K</kbd> to search
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;

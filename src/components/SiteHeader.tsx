import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import SearchDialog from "./SearchDialog";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
];

const categories = [
  { label: "Desk Setups", to: "/category/desk-setups" },
  { label: "Urban Gardening", to: "/category/urban-gardening" },
  { label: "Kitchen Gadgets", to: "/category/kitchen-gadgets" },
];

const navLinksAfter = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display text-xl md:text-2xl font-semibold text-primary leading-tight">
            Smart Home<br className="md:hidden" /> Finds
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Categories dropdown - hover */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
                Categories <ChevronDown className="w-4 h-4" />
              </button>
              {categoriesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
                    {categories.map((cat) => (
                      <Link
                        key={cat.to}
                        to={cat.to}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={() => setCategoriesOpen(false)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinksAfter.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button
              aria-label="Search"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              aria-label="Search"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-foreground hover:text-primary py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile categories - click to expand */}
              <button
                className="flex items-center justify-between text-sm font-medium text-foreground hover:text-primary py-2"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                Categories <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
              </button>
              {categoriesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.to}
                      to={cat.to}
                      className="text-sm text-muted-foreground hover:text-primary py-1.5"
                      onClick={() => { setMobileOpen(false); setCategoriesOpen(false); }}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}

              {navLinksAfter.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-foreground hover:text-primary py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default SiteHeader;

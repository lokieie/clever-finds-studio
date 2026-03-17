import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import AdPlaceholder from "./AdPlaceholder";

const popularPosts = [
  { title: "10 Must-Have Desk Setup Gadgets", slug: "desk-setup-gadgets" },
  { title: "The Ultimate Guide to Urban Indoor Gardening", slug: "urban-indoor-gardening" },
  { title: "5 Kitchen Gadgets That Actually Save You Time", slug: "kitchen-gadgets-save-time" },
];

const BlogSidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2.5 pr-10 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-card rounded-lg p-6 shadow-card">
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">Top Picks</h3>
        <ul className="space-y-3">
          {popularPosts.map((post, i) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="flex items-start gap-3 group"
              >
                <span className="text-2xl font-bold text-muted-foreground/40 font-display">{i + 1}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug pt-1">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Mini */}
      <div className="bg-muted rounded-lg p-6">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">Get weekly product picks</p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2.5 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm mb-3"
        />
        <button className="w-full py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
          Subscribe
        </button>
      </div>

      <AdPlaceholder slot="sidebar-ad" />
    </aside>
  );
};

export default BlogSidebar;

import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">Smart Home Finds</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Discover smart gadgets and tools that upgrade your everyday home life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Affiliate Disclosure", to: "/affiliate-disclosure" },
                { label: "Privacy Policy", to: "/privacy-policy" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Categories</h4>
            <ul className="space-y-2">
              {[
                { label: "Desk Setup", to: "/category/desk-setup" },
                { label: "Indoor Plants", to: "/category/indoor-plants" },
                { label: "Kitchen Gadgets", to: "/category/kitchen-gadgets" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              {/* Pinterest */}
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.38.04-3.41l1.4-5.93s-.36-.72-.36-1.78c0-1.67.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.2 0 1.03.4 2.13.89 2.73a.36.36 0 0 1 .08.34l-.33 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.4 2.97 7.4 6.93 0 4.13-2.6 7.46-6.22 7.46-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Smart Home Finds. All rights reserved.</p>
          <p className="mt-1">Amazon Associate Disclosure: We earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

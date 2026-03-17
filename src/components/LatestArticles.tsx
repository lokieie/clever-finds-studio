import { ArrowRight, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { articles as allArticles, type Article } from "@/data/content";

interface LatestArticlesProps {
  categorySlug?: string;
}

const LatestArticles = ({ categorySlug }: LatestArticlesProps) => {
  const filtered = categorySlug
    ? allArticles.filter((a) => a.categorySlug === categorySlug)
    : allArticles;

  if (filtered.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Latest Articles
          </h2>
          <p className="text-muted-foreground">
            Expert reviews and guides to help you make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  {article.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1"><User className="w-3.5 h-3.5" /> {article.author}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

import { ArrowRight, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedPost } from "@/lib/posts";

const FeaturedArticle = () => {
  const post = getFeaturedPost();
  if (!post) return null;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Featured Article
        </h2>

        <Link
          to={`/blog/${post.slug}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group block"
        >
          <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              {post.category}
            </span>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
              Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticle;

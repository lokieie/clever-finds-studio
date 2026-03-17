import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, User, Clock, Star, Check, X as XIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BlogSidebar from "@/components/BlogSidebar";
import AdPlaceholder from "@/components/AdPlaceholder";
import { getPostBySlug, getAllPosts, type PostProduct } from "@/lib/posts";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import ProductHighlight from "@/components/ProductHighlight";
import { useRef } from "react";


const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} className={`w-4 h-4 ${star <= Math.floor(rating) ? "fill-cta text-cta" : "text-border"}`} />
    ))}
    <span className="text-sm text-muted-foreground ml-1">{rating}</span>
  </div>
);

const ProductCard = ({ product }: { product: PostProduct }) => (
  <div className="bg-card rounded-lg border border-border overflow-hidden my-8">
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-0">
      <div className="aspect-square md:aspect-auto overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{product.title}</h3>
        <StarRating rating={product.rating} />
        <p className="text-2xl font-bold text-foreground mt-2">{product.price}</p>
        <p className="text-sm text-muted-foreground mt-3 mb-4 leading-relaxed">{product.description}</p>

        {(product.pros.length > 0 || product.cons.length > 0) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {product.pros.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Pros</h4>
                <ul className="space-y-1">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.cons.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Cons</h4>
                <ul className="space-y-1">
                  {product.cons.map((con, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <XIcon className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <a
          href={product.affiliateUrl}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cta text-cta-foreground font-medium hover:bg-cta/90 transition-colors"
        >
          Check Price on Amazon <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");
  const allPosts = getAllPosts();
  const productIndexRef = useRef(0);

  // Reset product index on each render
  productIndexRef.current = 0;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="py-16 text-center">
          <h1 className="font-display text-3xl text-foreground">Post not found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">← Back to Blog</Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean);

  const canonicalUrl = `https://smarthomefinds.com/blog/${post.slug}`;
  const pageTitle = `${post.title} | Smart Home Finds`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>
      <SiteHeader />
      <main className="py-8 md:py-12">
        <div className="container">
          {/* Affiliate Disclosure */}
          <div className="bg-muted rounded-lg px-6 py-4 mb-8 text-sm text-muted-foreground">
            <strong>Affiliate Disclosure:</strong> This post contains Amazon affiliate links. We may earn a commission at no extra cost to you.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <article className="max-w-[800px]">
              {/* Header */}
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2 mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="inline-flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                <span>Updated {post.date}</span>
              </div>

              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <img src={post.image} alt={post.title} className="w-full object-cover" />
              </div>

              {/* Markdown Content */}
              <div className="prose-custom">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[
                    rehypeRaw,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }]
                  ]}
                  components={{
                    h2: ({ node, ...props }) => (
                      <h2
                        {...props}
                        className="font-display text-2xl font-semibold text-foreground mt-10 mb-4"
                      />
                    ),
                    h3: ({ node, children, ...props }) => {
                      const index = productIndexRef.current;
                      const product = post.products[index];
                      if (product) productIndexRef.current++;
                    
                      return (
                        <>
                          <h3
                            {...props}
                            className="font-display text-xl font-semibold text-foreground mt-10 mb-4"
                          >
                            {children}
                          </h3>
                    
                          {product && <ProductHighlight product={product} />}
                        </>
                      );
                    },
                    p: ({ children }) => (
                      <p className="text-foreground/90 leading-relaxed mb-4">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside space-y-2 text-foreground/90 mb-4">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-foreground/90 leading-relaxed">{children}</li>
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto my-6">
                        <table className="w-full border-collapse">{children}</table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-muted">{children}</thead>
                    ),
                    th: ({ children }) => (
                      <th className="text-left p-3 text-sm font-semibold text-foreground">{children}</th>
                    ),
                    td: ({ children }) => (
                      <td className="p-3 text-sm text-foreground border-b border-border">{children}</td>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">{children}</strong>
                    ),
                    a: ({ href, children }) => {
                      const isAmazonCTA =
                        typeof children === "string" &&
                        children.toLowerCase().includes("check price");
                    
                      if (isAmazonCTA) {
                        return (
                          <a
                            href={href}
                            target="_blank"
                            rel="nofollow sponsored"
                            className="inline-block bg-cta hover:bg-cta/90 text-cta-foreground font-medium px-5 py-2 rounded-full mt-3 transition"
                          >
                            {children}
                          </a>
                        );
                      }
                    
                      return (
                        <a href={href} className="text-primary hover:underline">
                          {children}
                        </a>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="bg-muted border border-border rounded-lg p-5 my-6">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              <AdPlaceholder slot="in-article" />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Related Posts</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp!.slug}
                        to={`/blog/${rp!.slug}`}
                        className="bg-card rounded-lg p-4 border border-border hover:shadow-card-hover transition-all group block"
                      >
                        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {rp!.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground mt-2">
                          Read More <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <BlogSidebar />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogPost;

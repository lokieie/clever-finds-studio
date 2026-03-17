import { getAllPosts, searchPosts as searchPostsFn, type Post } from "@/lib/posts";

// Re-export Post type for backward compatibility
export type Article = {
  category: string;
  categorySlug: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
};

export type Product = {
  title: string;
  description: string;
  rating: number;
  price: string;
  image: string;
  categorySlug: string;
  affiliateUrl: string;
};

// Derive articles from markdown posts
export const articles: Article[] = getAllPosts().map((p) => ({
  category: p.category,
  categorySlug: p.categorySlug,
  title: p.title,
  excerpt: p.excerpt,
  author: p.author,
  readTime: p.readTime,
  image: p.image,
  slug: p.slug,
}));

// Derive unique products from all posts
const productMap = new Map<string, Product>();
getAllPosts().forEach((post) => {
  post.products.forEach((prod) => {
    if (!productMap.has(prod.title)) {
      productMap.set(prod.title, {
        title: prod.title,
        description: prod.description,
        rating: prod.rating,
        price: prod.price,
        image: prod.image,
        categorySlug: post.categorySlug,
        affiliateUrl: prod.affiliateUrl,
      });
    }
  });
});
export const products: Product[] = Array.from(productMap.values());

export const searchAll = (query: string) => {
  const q = query.toLowerCase().trim();
  if (!q) return { articles: [], products: [] };

  const matchedArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q)
  );

  const matchedProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );

  return { articles: matchedArticles, products: matchedProducts };
};

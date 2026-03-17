import { Buffer } from "buffer";
(globalThis as any).Buffer = Buffer;

import matter from "gray-matter";

// Import all markdown files at build time
const postFiles = import.meta.glob("/src/posts/*.md", {
  query: "?raw",
  eager: true,
  import: "default",
}) as Record<string, string>;

// Import all asset images for resolution
const assetImages = import.meta.glob("/src/assets/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function resolveImage(imagePath: string): string {
  // Convert "@/assets/foo.jpg" → "/src/assets/foo.jpg"
  const normalized = imagePath.replace("@/assets/", "/src/assets/");
  return assetImages[normalized] || imagePath;
}

export type PostProduct = {
  title: string;
  description: string;
  rating: number;
  price: string;
  image: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  author: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  featured: boolean;
  products: PostProduct[];
  relatedSlugs: string[];
  content: string;
};

function parsePost(filePath: string, raw: string): Post {
  const { data, content } = matter(raw);
  const slug = filePath.split("/").pop()!.replace(".md", "");

  const products: PostProduct[] = (data.products || []).map((p: any) => ({
    ...p,
    image: resolveImage(p.image || ""),
    pros: p.pros || [],
    cons: p.cons || [],
  }));

  return {
    slug,
    title: data.title || "",
    category: data.category || "",
    categorySlug: data.categorySlug || "",
    author: data.author || "",
    readTime: data.readTime || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    image: resolveImage(data.image || ""),
    featured: data.featured || false,
    products,
    relatedSlugs: data.relatedSlugs || [],
    content,
  };
}

// Parse all posts once
const allPosts: Post[] = Object.entries(postFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return allPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedPost(): Post | undefined {
  return allPosts.find((p) => p.featured) || allPosts[0];
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return allPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

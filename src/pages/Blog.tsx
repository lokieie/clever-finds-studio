import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LatestArticles from "@/components/LatestArticles";
import BlogSidebar from "@/components/BlogSidebar";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main className="py-12 md:py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8">Blog</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div>
            <LatestArticles />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Blog;

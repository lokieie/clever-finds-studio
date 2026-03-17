import { useParams } from "react-router-dom";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LatestArticles from "@/components/LatestArticles";
import RecommendedProducts from "@/components/RecommendedProducts";

const categoryInfo: Record<string, { title: string; description: string; postSlug: string }> = {
  "desk-setups": {
    title: "Desk Setups",
    description:
      "Upgrade your workspace with the best desk accessories, monitors, keyboards, and productivity tools.",
    postSlug: "desk-setups",
  },
  "urban-gardening": {
    title: "Urban Gardening",
    description:
      "Everything you need to create a thriving indoor garden — smart planters, grow lights, and plant care tools.",
    postSlug: "urban-gardening",
  },
  "kitchen-gadgets": {
    title: "Kitchen Gadgets",
    description:
      "Revolutionary kitchen tools that save time, reduce effort, and make cooking more enjoyable.",
    postSlug: "kitchen-gadgets",
  },
};

const CategoryPage = () => {
  const { slug } = useParams();
  const info = categoryInfo[slug || ""] || {
    title: "Category",
    description: "",
    postSlug: "",
  };

  const filterSlug = info.postSlug || slug;

  // Tab state
  const [tab, setTab] = useState<"articles" | "products">("articles");

  const heroImages: Record<string, string> = {
    "desk-setups": "/products/desk-setup-hero.png",
    "urban-gardening": "/products/urban-plants-hero.png",
    "kitchen-gadgets": "/products/kitchen-hero.png"
  };
  
  const heroImage = heroImages[slug || ""];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Category Header */}
        <section
          className="py-24 md:py-32 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50"></div>
          
          <div className="container relative text-center text-white">
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              {info.title}
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {info.description}
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="container flex justify-center mt-8 mb-8">
          <div className="inline-flex rounded-lg bg-muted p-1 shadow">
            <button
              className={`px-6 py-2 font-medium rounded-md transition-colors ${
                tab === "articles"
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:bg-background"
              }`}
              onClick={() => setTab("articles")}
            >
              Articles
            </button>

            <button
              className={`px-6 py-2 font-medium rounded-md transition-colors ${
                tab === "products"
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:bg-background"
              }`}
              onClick={() => setTab("products")}
            >
              Top Products
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <section className="container mb-12">
          {tab === "articles" && (
            <LatestArticles categorySlug={filterSlug} />
          )}

          {tab === "products" && (
            <RecommendedProducts categorySlug={filterSlug} />
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default CategoryPage;
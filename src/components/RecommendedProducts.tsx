import { ArrowRight, Star } from "lucide-react";
import { products as allProducts } from "@/data/content";
import { useState } from "react";

interface RecommendedProductsProps {
  categorySlug?: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? "fill-cta text-cta" : star - 0.5 <= rating ? "fill-cta/50 text-cta" : "text-border"}`}
        />
      ))}
      <span className="text-sm text-muted-foreground ml-1">{rating}</span>
    </div>
  );
};

const RecommendedProducts = ({ categorySlug }: RecommendedProductsProps) => {

  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = categorySlug
    ? allProducts.filter((p) => p.categorySlug === categorySlug)
    : allProducts;

  if (filtered.length === 0) return null;

  const trendingProducts = filtered.slice(0, 3);

  const searchedProducts = filtered.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

  const ProductCard = ({ product }: any) => (
    <a
      href={product.affiliateUrl}
      className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition group block"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold mb-2">
          {product.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-3">
          {product.description}
        </p>

        <StarRating rating={product.rating} />

        <p className="text-2xl font-bold mt-3 mb-4">
          {product.price}
        </p>

        <span className="inline-flex items-center justify-center w-full py-3 rounded-full bg-cta text-cta-foreground">
          View on Amazon
        </span>
      </div>
    </a>
  );
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            {categorySlug ? "Top Products" : "Recommended Products"}
          </h2>
          <p className="text-muted-foreground">Our top picks for upgrading your home</p>
        </div>

                {/* Trending Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {trendingProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filtered.length > 3 && (
          <div className="text-center mb-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-full bg-cta text-cta-foreground font-medium hover:bg-cta/90 transition"
            >
              Show More Products
            </button>
          </div>
        )}

        {/* All Products */}
        {showAll && (
          <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">All Products</h3>

              <input
                type="text"
                placeholder="Search products..."
                className="mt-3 md:mt-0 px-4 py-2 border rounded-md bg-background"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedProducts.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default RecommendedProducts;

import { ArrowRight, Star } from "lucide-react";
import { PostProduct } from "@/lib/posts";

interface Props {
  product: PostProduct;
}

export default function ProductHighlight({ product }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-card border border-border p-4 rounded-lg mb-6 items-start">
      <img
        src={product.image}
        alt={product.title}
        className="w-full sm:w-32 h-32 object-cover rounded shrink-0"
      />

      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-lg text-foreground">{product.title}</p>

        <div className="flex items-center gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`w-4 h-4 ${s <= Math.floor(product.rating) ? "fill-cta text-cta" : "text-border"}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
          <span className="text-sm font-semibold text-foreground ml-2">{product.price}</span>
        </div>

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored"
          className="inline-flex items-center gap-2 bg-cta hover:bg-cta/90 text-cta-foreground font-medium px-5 py-2 rounded-full mt-3 transition-colors text-sm"
        >
          Check Price on Amazon <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

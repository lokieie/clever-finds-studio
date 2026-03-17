import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import categoryDesk from "@/assets/category-desk.jpg";
import categoryPlants from "@/assets/category-plants.jpg";
import categoryKitchen from "@/assets/category-kitchen.jpg";

const categories = [
  {
    title: "Desk Setup & Productivity Gadgets",
    description: "Upgrade your workspace with smart desk accessories and productivity tools",
    image: categoryDesk,
    to: "/category/desk-setup",
  },
  {
    title: "Urban Gardening / Indoor Plants",
    description: "Bring nature indoors with smart gardening tools and beautiful plant accessories",
    image: categoryPlants,
    to: "/category/indoor-plants",
  },
  {
    title: "Kitchen Gadgets",
    description: "Revolutionary kitchen tools that make cooking easier and more enjoyable",
    image: categoryKitchen,
    to: "/category/kitchen-gadgets",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Explore Categories
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover curated collections of smart gadgets for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group relative rounded-lg overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                <h3 className="font-display text-xl font-semibold mb-1">{cat.title}</h3>
                <p className="text-sm text-card/80 mb-3">{cat.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

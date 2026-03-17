import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-card/70 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center px-4 py-20 animate-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary mb-4 leading-tight">
          Smart Home Finds
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
          Smart gadgets and tools that upgrade your everyday home life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Explore Reviews <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/category/desk-setup"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-200"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedArticle from "@/components/FeaturedArticle";
import LatestArticles from "@/components/LatestArticles";
import RecommendedProducts from "@/components/RecommendedProducts";
import NewsletterSignup from "@/components/NewsletterSignup";
import AdPlaceholder from "@/components/AdPlaceholder";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <div className="container py-6">
          <AdPlaceholder slot="top-banner" />
        </div>
        <CategoriesSection />
        <FeaturedArticle />
        <LatestArticles />
        <div className="container py-6">
          <AdPlaceholder slot="mid-content" />
        </div>
        <RecommendedProducts />
        <NewsletterSignup />
        <div className="container py-6">
          <AdPlaceholder slot="footer-banner" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;

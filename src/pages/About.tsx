import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const About = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">About Us</h1>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>Smart Home Finds is your trusted source for honest, in-depth reviews of the best home gadgets and tools available on Amazon. We cover three exciting niches: desk setup & productivity, urban gardening & indoor plants, and kitchen gadgets.</p>
          <p>Our team of passionate reviewers personally tests every product we recommend. We believe in transparency — that's why every review includes both pros and cons, and we always disclose our affiliate relationships.</p>
          <p>Founded in 2024, our mission is to help you discover smart products that genuinely upgrade your everyday home life, without the hype or bias.</p>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default About;

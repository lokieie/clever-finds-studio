import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const AffiliateDisclosure = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">Affiliate Disclosure</h1>
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Smart Home Finds is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for website owners to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.</p>

          <p>This means that when you click on certain links on our site and make a purchase on Amazon, we may earn a small commission at no additional cost to you. These commissions help us maintain and improve this website, allowing us to continue providing honest, in-depth reviews and recommendations.</p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Our Commitment</h2>
            <p>We only recommend products we genuinely believe in and have researched thoroughly. Our opinions are our own and are not influenced by affiliate partnerships. We strive to provide accurate, unbiased information to help you make informed purchasing decisions.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">How It Works</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>When you click a product link on our site, you may be redirected to Amazon.com.</li>
              <li>If you make a purchase within a certain timeframe, we earn a small referral fee.</li>
              <li>This does not affect the price you pay — you pay the same price as any other Amazon customer.</li>
              <li>We are not responsible for changes in product pricing, availability, or descriptions on Amazon.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">FTC Compliance</h2>
            <p>In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that Smart Home Finds may receive compensation for products reviewed or linked on this site. We are committed to full transparency in all our recommendations.</p>
          </section>

          <p>If you have any questions about our affiliate relationships, please feel free to <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default AffiliateDisclosure;

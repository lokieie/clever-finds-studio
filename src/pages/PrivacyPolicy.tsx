import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p className="text-muted-foreground">Last updated: March 15, 2026</p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>When you visit Smart Home Finds, we may collect certain information automatically, including your IP address, browser type, operating system, referring URLs, and pages viewed. If you subscribe to our newsletter or use our contact form, we collect the personal information you provide, such as your name and email address.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Cookies</h2>
            <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect certain features of the site.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Third-Party Links</h2>
            <p>Smart Home Finds contains links to third-party websites, including Amazon.com and other retailers. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit through links on our website.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Amazon Associates Program</h2>
            <p>Smart Home Finds is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As part of this program, our site may use cookies provided by Amazon to track referrals and earn commissions on qualifying purchases. These cookies do not collect personally identifiable information beyond what is necessary for the affiliate program.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect to operate and improve our website, send newsletters (if you opt in), respond to inquiries, and analyze site usage to provide better content and recommendations.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Data Security</h2>
            <p>We take reasonable measures to protect the information we collect. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your data.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
          </section>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default PrivacyPolicy;

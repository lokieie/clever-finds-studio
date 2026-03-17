import { useState } from "react";
import { Send } from "lucide-react";
import { CheckCircle } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

    const res = await fetch("https://formspree.io/f/xreyaaal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSuccess(true);
      setEmail("");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
          Never Miss a Find
        </h2>
        <p className="text-muted-foreground mb-8">
          Get the latest product discoveries and reviews delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Subscribe <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
      {success && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full shadow-xl animate-in zoom-in-95">

      <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />

      <h3 className="text-xl font-semibold mb-2">
        Subscription Successful
      </h3>

      <p className="text-muted-foreground mb-6">
        Thank you for subscribing to Smart Home Finds!
      </p>

      <button
        onClick={() => setSuccess(false)}
        className="px-6 py-2 bg-primary text-white rounded-full hover:opacity-90"
      >
        You're Welcome
      </button>

    </div>
  </div>
)}
    </section>
  );
};

export default NewsletterSignup;

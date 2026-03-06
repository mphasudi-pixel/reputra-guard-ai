import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    subtitle: "Brand Monitoring",
    features: ["Social media monitoring", "Mention tracking", "Basic sentiment analysis", "Email alerts"],
    highlighted: false,
  },
  {
    name: "Professional",
    subtitle: "Risk Intelligence",
    features: [
      "Everything in Basic",
      "AI threat detection",
      "Reputation scoring",
      "Bot network detection",
      "Risk dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "Full AI Suite",
    features: [
      "Everything in Professional",
      "Deepfake detection",
      "Dark web intelligence",
      "Crisis simulation",
      "Automated takedowns",
      "SIEM integrations",
      "Dedicated success manager",
    ],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-display font-semibold text-primary uppercase tracking-widest">
          Pricing
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 tracking-tight">
          Plans that scale with your risk profile
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl border p-8 flex flex-col ${
              p.highlighted
                ? "border-primary/40 glow-border bg-card"
                : "border-border bg-card"
            }`}
          >
            <div className="mb-6">
              <h3 className="text-xl font-display font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.subtitle}</p>
            </div>
            <div className="text-sm font-display font-semibold text-primary mb-6">
              Contact for Pricing
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className="w-full font-display font-semibold"
              variant={p.highlighted ? "default" : "outline"}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;

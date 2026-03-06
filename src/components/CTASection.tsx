import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section id="contact" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-grid opacity-10" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center rounded-2xl border border-primary/20 bg-card p-12 md:p-16 glow-border"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
          Don't wait for a crisis to find you
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          We don't just monitor your brand — we model its digital future and protect it before crisis becomes reality.
        </p>
        <Button size="lg" className="font-display font-semibold text-base px-8 gap-2">
          Request a Demo <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

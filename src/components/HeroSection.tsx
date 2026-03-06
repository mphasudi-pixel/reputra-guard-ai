import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8"
        >
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-xs font-display font-medium text-primary">
            AI-Powered Reputation Intelligence
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6">
          Protect your reputation{" "}
          <span className="text-gradient-hero">before crisis strikes</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Reputra detects misinformation, deepfakes, and coordinated attacks in real time — giving you the intelligence to act before damage is done.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="font-display font-semibold text-base px-8 gap-2">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-display font-semibold text-base px-8 border-primary/30 text-primary hover:bg-primary/10"
          >
            Watch Overview
          </Button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-8 border-t border-border/50"
        >
          {[
            ["24/7", "Monitoring"],
            ["<5min", "Alert Time"],
            ["99.2%", "Accuracy"],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">{val}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

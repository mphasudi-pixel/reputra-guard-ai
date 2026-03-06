import { motion } from "framer-motion";
import { Radar, Cpu, Bell, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Radar,
    num: "01",
    title: "Ingest",
    desc: "Continuous data collection from social platforms, news, forums, and dark web intelligence sources.",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Analyze",
    desc: "AI-powered NLP, sentiment analysis, entity extraction, and anomaly detection in real time.",
  },
  {
    icon: Bell,
    num: "03",
    title: "Alert",
    desc: "Instant notifications with risk scoring, crisis probability, and narrative cluster analysis.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Mitigate",
    desc: "Automated response recommendations, takedown workflows, and crisis simulation modeling.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-display font-semibold text-primary uppercase tracking-widest">
          How It Works
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 tracking-tight">
          From signal to shield in minutes
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative text-center"
          >
            <div className="text-5xl font-display font-bold text-primary/10 mb-2">{s.num}</div>
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

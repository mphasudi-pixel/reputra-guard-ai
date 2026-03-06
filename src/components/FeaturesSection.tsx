import { motion } from "framer-motion";
import {
  Eye, Bot, ShieldAlert, Fingerprint, Brain, BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    desc: "Track mentions across social media, news, forums, and dark web sources 24/7.",
  },
  {
    icon: Bot,
    title: "Bot Network Detection",
    desc: "AI identifies coordinated bot amplification and fake account campaigns.",
  },
  {
    icon: ShieldAlert,
    title: "Deepfake Detection",
    desc: "Detect AI-generated synthetic media targeting your executives and brand.",
  },
  {
    icon: Fingerprint,
    title: "Impersonation Alerts",
    desc: "Spot fake profiles, domains, and accounts impersonating your organization.",
  },
  {
    icon: Brain,
    title: "Predictive Crisis Modeling",
    desc: "AI forecasts crisis probability so you can act before damage escalates.",
  },
  {
    icon: BarChart3,
    title: "Reputation Intelligence Score",
    desc: "Live scoring across sentiment, risk exposure, and narrative volatility.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section id="features" className="py-24 md:py-32 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-display font-semibold text-primary uppercase tracking-widest">
          Core Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 tracking-tight">
          Intelligence that stays ahead of threats
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="group rounded-xl border border-border bg-card p-6 card-hover"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;

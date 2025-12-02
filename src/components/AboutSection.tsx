import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Code, Cloud, Globe, ChevronRight } from "lucide-react";

const specialties = [
  { icon: Globe, label: "Web Application Security" },
  { icon: Cloud, label: "Cloud Security (AWS/Azure)" },
  { icon: Code, label: "API Security Testing" },
  { icon: Target, label: "Vulnerability Research" },
];

const timeline = [
  { year: "2024", event: "Senior Security Researcher" },
  { year: "2023", event: "3 CVEs Published" },
  { year: "2022", event: "Bug Bounty Hall of Fame" },
  { year: "2021", event: "Started Bug Bounty Journey" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider">About</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Security Through Precision,
              <br />
              <span className="gradient-text">Methodology, and Results</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an offensive security practitioner who enjoys breaking applications, 
                analyzing systems, and uncovering vulnerabilities that matter. My work spans 
                web applications, cloud environments, and modern infrastructure.
              </p>
              <p>
                I focus on practical methodology, technical depth, and delivering results 
                backed by valid proof-of-concept. Every finding comes with clear reproducible 
                steps and actionable remediation guidance.
              </p>
            </div>

            {/* Specialties */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {specialties.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/30 hover:border-primary/30 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Terminal-style card */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">timeline.sh</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="font-mono text-sm text-muted-foreground mb-4">
                  <span className="text-primary">$</span> cat milestones.log
                </div>

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full border-2 border-primary bg-background" />
                        {index < timeline.length - 1 && (
                          <div className="w-px h-12 bg-border" />
                        )}
                      </div>
                      <div className="-mt-1">
                        <span className="font-mono text-xs text-primary">{item.year}</span>
                        <p className="text-foreground font-medium mt-1">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View full experience
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

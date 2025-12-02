import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, AlertTriangle, Shield, Clock, Tag } from "lucide-react";
import { Button } from "./ui/button";

const filters = ["All", "Web", "API", "Cloud", "Mobile", "Research"];

const caseStudies = [
  {
    id: 1,
    title: "Critical IDOR in Enterprise SaaS Platform",
    category: "Web",
    severity: "Critical",
    cvss: "9.1",
    timeline: "2024",
    summary: "Discovered an Insecure Direct Object Reference vulnerability allowing unauthorized access to any user's sensitive data.",
    role: "Bug Bounty Hunter",
    impact: "Full account takeover potential affecting 100k+ users",
    tools: ["Burp Suite", "SQLMap", "Custom Scripts"],
    bounty: "$5,000",
    tags: ["IDOR", "Authorization", "Data Exposure"],
  },
  {
    id: 2,
    title: "AWS S3 Misconfiguration Chain",
    category: "Cloud",
    severity: "High",
    cvss: "8.2",
    timeline: "2024",
    summary: "Identified a chain of misconfigurations in AWS S3 buckets leading to sensitive data exposure and potential privilege escalation.",
    role: "Security Researcher",
    impact: "Exposed internal documents and credentials",
    tools: ["AWS CLI", "S3Scanner", "Pacu"],
    bounty: "$3,500",
    tags: ["AWS", "S3", "Misconfiguration"],
  },
  {
    id: 3,
    title: "Authentication Bypass via JWT Manipulation",
    category: "API",
    severity: "Critical",
    cvss: "9.8",
    timeline: "2023",
    summary: "Exploited weak JWT implementation to forge admin tokens and gain unauthorized administrative access.",
    role: "Penetration Tester",
    impact: "Complete authentication bypass, admin access",
    tools: ["jwt_tool", "Burp Suite", "Python"],
    bounty: "$7,500",
    tags: ["JWT", "Authentication", "Token Forgery"],
  },
  {
    id: 4,
    title: "Server-Side Request Forgery (SSRF) to RCE",
    category: "Web",
    severity: "Critical",
    cvss: "9.8",
    timeline: "2023",
    summary: "Chained SSRF vulnerability with internal service exploitation to achieve remote code execution on production servers.",
    role: "Bug Bounty Hunter",
    impact: "Remote Code Execution on production infrastructure",
    tools: ["Burp Suite", "Collaborator", "Custom Payloads"],
    bounty: "$10,000",
    tags: ["SSRF", "RCE", "Cloud Metadata"],
  },
];

const severityColors: Record<string, string> = {
  Critical: "text-red-400 bg-red-400/10 border-red-400/30",
  High: "text-orange-400 bg-orange-400/10 border-orange-400/30",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  Low: "text-blue-400 bg-blue-400/10 border-blue-400/30",
};

export const CaseStudiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Case Studies</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Selected Security
              <span className="gradient-text"> Research</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated collection of high-impact vulnerability discoveries and security research projects.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${severityColors[study.severity]}`}>
                      {study.severity} • CVSS {study.cvss}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {study.timeline}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-card border border-border text-muted-foreground">
                    {study.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Impact */}
                  <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-muted/30 border border-border">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground block mb-1">Impact</span>
                      <span className="text-sm text-foreground">{study.impact}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-primary/5 text-primary border border-primary/20"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                    <Shield className="w-4 h-4" />
                    <span>Tools: {study.tools.join(", ")}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-primary">{study.bounty}</span>
                    <div className="flex items-center gap-2">
                      <Button variant="cyber-ghost" size="sm">
                        <Github className="w-4 h-4" />
                        PoC
                      </Button>
                      <Button variant="cyber-outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

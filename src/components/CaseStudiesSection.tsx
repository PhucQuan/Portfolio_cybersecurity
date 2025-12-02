import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Shield, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const caseStudies = [
  {
    id: 1,
    title: "Critical IDOR in Enterprise SaaS Platform",
    summary: "Discovered an Insecure Direct Object Reference vulnerability allowing unauthorized access to any user's sensitive data.",
    tools: ["Burp Suite", "SQLMap", "Custom Scripts"],
    target: "User Authorization System",
    impact: "Full account takeover potential affecting 100k+ users",
    approach: "Analyzed API endpoints for parameter tampering, identified sequential ID patterns, validated access control bypass.",
    result: "Vulnerability patched within 48 hours, awarded $5,000 bounty.",
  },
  {
    id: 2,
    title: "AWS S3 Misconfiguration Chain",
    summary: "Identified a chain of misconfigurations in AWS S3 buckets leading to sensitive data exposure.",
    tools: ["AWS CLI", "S3Scanner", "Pacu"],
    target: "Cloud Storage Infrastructure",
    impact: "Exposed internal documents and credentials",
    approach: "Enumerated public buckets, analyzed ACL policies, chained access to escalate privileges.",
    result: "Security controls implemented, awarded $3,500 bounty.",
  },
  {
    id: 3,
    title: "Authentication Bypass via JWT Manipulation",
    summary: "Exploited weak JWT implementation to forge admin tokens and gain unauthorized administrative access.",
    tools: ["jwt_tool", "Burp Suite", "Python"],
    target: "Authentication System",
    impact: "Complete authentication bypass, admin access",
    approach: "Analyzed JWT structure, tested algorithm confusion, forged tokens with modified claims.",
    result: "JWT validation hardened, awarded $7,500 bounty.",
  },
  {
    id: 4,
    title: "Server-Side Request Forgery to RCE",
    summary: "Chained SSRF vulnerability with internal service exploitation to achieve remote code execution.",
    tools: ["Burp Suite", "Collaborator", "Custom Payloads"],
    target: "Internal Service Communication",
    impact: "Remote Code Execution on production infrastructure",
    approach: "Identified SSRF endpoint, accessed cloud metadata, pivoted to internal services.",
    result: "Critical patch deployed, awarded $10,000 bounty.",
  },
];

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-muted/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Projects / Case Studies
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Selected security research and vulnerability discoveries.
            </p>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className="p-6 space-y-5">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Summary */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Details Grid */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground w-28 flex-shrink-0">Tools</span>
                      <span className="text-foreground">{study.tools.join(", ")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground w-28 flex-shrink-0">Target</span>
                      <span className="text-foreground">{study.target}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground w-28 flex-shrink-0">Impact</span>
                      <span className="text-foreground">{study.impact}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground w-28 flex-shrink-0">What I Did</span>
                      <span className="text-foreground">{study.approach}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground w-28 flex-shrink-0">Result</span>
                      <span className="text-primary font-medium">{study.result}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-border">
                    <Button variant="cyber-ghost" size="sm" className="group/btn">
                      Read Full Case Study
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
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

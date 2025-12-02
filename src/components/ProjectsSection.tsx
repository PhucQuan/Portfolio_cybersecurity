import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Code } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    name: "VulnScanner",
    description: "Automated vulnerability scanner for web applications with custom detection rules and reporting.",
    tech: ["Python", "Burp API", "SQLite"],
    stars: 245,
    forks: 52,
    github: "#",
    demo: "#",
    tags: ["Tool", "Automation"],
  },
  {
    id: 2,
    name: "JWT-Cracker",
    description: "High-performance JWT secret key brute-forcer with wordlist support and algorithm detection.",
    tech: ["Rust", "OpenSSL"],
    stars: 189,
    forks: 34,
    github: "#",
    tags: ["PoC", "JWT"],
  },
  {
    id: 3,
    name: "CloudEnum",
    description: "Multi-cloud asset enumeration tool supporting AWS, Azure, and GCP resource discovery.",
    tech: ["Go", "AWS SDK", "Azure SDK"],
    stars: 312,
    forks: 78,
    github: "#",
    tags: ["Cloud", "Recon"],
  },
  {
    id: 4,
    name: "SSRF-Detector",
    description: "Browser extension and proxy plugin for detecting and exploiting SSRF vulnerabilities.",
    tech: ["JavaScript", "Python", "Burp API"],
    stars: 156,
    forks: 29,
    github: "#",
    tags: ["Extension", "SSRF"],
  },
  {
    id: 5,
    name: "APIFuzzer",
    description: "Intelligent API fuzzing framework with OpenAPI spec parsing and mutation-based testing.",
    tech: ["Python", "FastAPI", "Docker"],
    stars: 203,
    forks: 45,
    github: "#",
    tags: ["Fuzzing", "API"],
  },
  {
    id: 6,
    name: "SubdomainHunter",
    description: "Fast subdomain enumeration tool with recursive brute-forcing and DNS resolution.",
    tech: ["Go", "DNS Libraries"],
    stars: 178,
    forks: 41,
    github: "#",
    tags: ["Recon", "DNS"],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-xs font-mono text-secondary uppercase tracking-wider">Projects & Tools</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Open Source
              <span className="gradient-text-purple"> Security Tools</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Custom-built tools and utilities for security research, penetration testing, and vulnerability discovery.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-secondary/30 transition-all hover:shadow-[0_0_30px_hsl(var(--secondary)/0.1)]"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                    <Code className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {project.forks}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs bg-secondary/5 text-secondary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <Button variant="cyber-ghost" size="sm" asChild className="flex-1">
                    <a href={project.github}>
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="cyber-purple" size="sm" asChild className="flex-1">
                      <a href={project.demo}>
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="cyber-outline" size="lg" asChild>
              <a href="#">
                <Github className="w-5 h-5" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

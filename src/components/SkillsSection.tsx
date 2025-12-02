import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, Code, Terminal, Bug, Database, Search, 
  Globe, Server, FileCode, Boxes, GitBranch, Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity Skills",
    skills: [
      { name: "Web Exploitation", icon: Globe },
      { name: "XSS", icon: Bug },
      { name: "Bug Bounty Analysis", icon: Search },
      { name: "SQL Injection", icon: Database },
      { name: "Burp Suite Repeater", icon: Shield },
      { name: "SQLMap", icon: Terminal },
      { name: "Reconnaissance", icon: Search },
      { name: "Linux Security", icon: Server },
      { name: "OWASP Top 10", icon: Shield },
    ],
  },
  {
    title: "Programming Skills",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "C++", icon: Code },
      { name: "C#", icon: Code },
      { name: "Java", icon: Code },
      { name: "JavaScript", icon: FileCode },
      { name: "Bash", icon: Terminal },
      { name: "Linux CLI", icon: Terminal },
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Globe },
      { name: "Ruby", icon: FileCode },
      { name: "PHP", icon: FileCode },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Linux", icon: Terminal },
      { name: "Docker", icon: Boxes },
      { name: "Git/GitHub", icon: GitBranch },
      { name: "Nmap", icon: Search },
      { name: "Burp Suite", icon: Shield },
      { name: "VS Code", icon: Code },
      { name: "Postman", icon: Server },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
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
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A comprehensive toolkit for security research, development, and automation.
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                      className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all"
                    >
                      <skill.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

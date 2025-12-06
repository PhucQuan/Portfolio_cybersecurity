import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Shield,
    Code2,
    Database,
    Terminal,
    Cloud,
    Server,
    Wifi,
    FileCode,
    Braces,
    Bug,
    Search,
    Globe
} from "lucide-react";

// Technology skills with icons - Updated with accurate levels
const technologies = [
    { name: "HTML/CSS", icon: Globe, color: "text-orange-400", level: "Expert" },
    { name: "JavaScript", icon: FileCode, color: "text-yellow-400", level: "Advanced" },
    { name: "Python", icon: Code2, color: "text-blue-400", level: "Advanced" },
    { name: "C++", icon: Code2, color: "text-purple-400", level: "Advanced" },
    { name: "Bash/Shell", icon: Terminal, color: "text-green-400", level: "Advanced" },
    { name: "SQL", icon: Database, color: "text-cyan-400", level: "Advanced" },
    { name: "PHP", icon: FileCode, color: "text-indigo-400", level: "Beginner" },
    { name: "Ruby", icon: Code2, color: "text-red-500", level: "Beginner" },
    { name: "Golang", icon: Braces, color: "text-cyan-400", level: "Beginner" },
];

const securityTools = [
    { name: "Burp Suite", icon: Bug, color: "text-orange-400", level: "Expert" },
    { name: "Wireshark", icon: Wifi, color: "text-cyan-400", level: "Advanced" },
    { name: "SQLMap", icon: Database, color: "text-green-400", level: "Intermediate" },
    { name: "Nmap", icon: Search, color: "text-blue-400", level: "Beginner" },
    { name: "Metasploit", icon: Terminal, color: "text-red-400", level: "Beginner" },
    { name: "OWASP ZAP", icon: Shield, color: "text-purple-400", level: "Beginner" },
];

const platforms = [
    { name: "AWS", icon: Cloud, color: "text-orange-400", level: "Advanced" },
    { name: "Linux", icon: Terminal, color: "text-yellow-400", level: "Intermediate" },
    { name: "Docker", icon: Server, color: "text-blue-400", level: "Intermediate" },
    { name: "Kubernetes", icon: Server, color: "text-cyan-400", level: "Intermediate" },
];

export const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const SkillCard = ({ skill, index, delay }: any) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-neon/20 to-cyber-purple/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative flex items-center gap-3 p-4 rounded-lg border border-cyber-gray/20 glass hover:glass-strong hover:border-cyber-neon/50 transition-all magnetic">
                <div className={`p-2 rounded-lg bg-cyber-navy/50 border border-cyber-gray/30 group-hover:border-cyber-neon/50 transition-colors`}>
                    <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-mono text-foreground group-hover:text-cyber-neon transition-colors">
                        {skill.name}
                    </p>
                    {skill.level && (
                        <p className="text-xs text-muted-foreground font-mono">{skill.level}</p>
                    )}
                </div>
                <div className="w-2 h-2 rounded-full bg-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity pulse-glow"></div>
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy/50 via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-cyber-neon/30 bg-cyber-neon/5 mb-6 glass">
                        <span className="w-1.5 h-1.5 rounded-none bg-cyber-neon animate-pulse" />
                        <span className="text-xs font-mono text-cyber-neon uppercase tracking-wider">./kha_nang</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
                        Tech <span className="text-cyber-neon">Stack</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
                        &gt; Comprehensive toolkit for security assessments and development.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Programming Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-cyber-neon/10 border border-cyber-neon/30">
                                <Code2 className="w-5 h-5 text-cyber-neon" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground font-mono">Programming Languages</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-cyber-gray/30 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {technologies.map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} delay={0.3} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Security Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30">
                                <Shield className="w-5 h-5 text-cyber-purple" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground font-mono">Security Tools</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-cyber-gray/30 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {securityTools.map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} delay={0.5} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Platforms & Infrastructure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                                <Server className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground font-mono">Platforms & Infrastructure</h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-cyber-gray/30 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {platforms.map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} delay={0.7} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

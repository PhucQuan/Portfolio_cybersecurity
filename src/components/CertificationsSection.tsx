import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";

const certifications = [
    {
        name: "CEH",
        fullName: "Certified Ethical Hacker",
        issuer: "EC-Council",
        date: "Đang Học",
        id: "In Progress",
        color: "text-red-500",
        border: "border-red-500/20",
        bg: "bg-red-500/5",
        status: "learning"
    },
    {
        name: "CompTIA Security+",
        fullName: "Security+ Certification",
        issuer: "CompTIA",
        date: "Đang Học",
        id: "In Progress",
        color: "text-green-500",
        border: "border-green-500/20",
        bg: "bg-green-500/5",
        status: "learning"
    },
    {
        name: "CompTIA PenTest+",
        fullName: "PenTest+ Certification",
        issuer: "CompTIA",
        date: "Đang Học",
        id: "In Progress",
        color: "text-blue-500",
        border: "border-blue-500/20",
        bg: "bg-blue-500/5",
        status: "learning"
    },
    {
        name: "AWS Cloud Practitioner",
        fullName: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "Đang Học",
        id: "In Progress",
        color: "text-yellow-500",
        border: "border-yellow-500/20",
        bg: "bg-yellow-500/5",
        status: "learning"
    },
];


export const CertificationsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="certifications" className="py-24 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-cyber-neon/30 bg-cyber-neon/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-none bg-cyber-neon animate-pulse" />
                        <span className="text-xs font-mono text-cyber-neon uppercase tracking-wider">./chung_chi</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
                        Professional <span className="text-cyber-purple">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-6 rounded-lg border ${cert.border} ${cert.bg} backdrop-blur-md hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--cert-color),0.2)]`}
                        >
                            <div className="absolute top-0 right-0 p-2">
                                <ShieldCheck className={`w-6 h-6 ${cert.color} opacity-50`} />
                            </div>

                            <div className="mb-4">
                                <Award className={`w-10 h-10 ${cert.color} mb-2`} />
                                <h3 className="text-lg font-bold text-foreground font-mono">{cert.name}</h3>
                                <p className="text-xs text-muted-foreground font-mono mb-1">{cert.fullName}</p>
                                <p className="text-sm text-muted-foreground font-mono">{cert.issuer}</p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <span className="px-2 py-1 rounded-none text-xs font-mono bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                    📚 {cert.date}
                                </span>
                                <span className="text-xs font-mono text-muted-foreground">{cert.id}</span>
                            </div>

                            <div className="absolute bottom-2 right-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

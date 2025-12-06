import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Code, Cloud, Globe, Bug, Lock } from "lucide-react";

const specialties = [
  { icon: Globe, label: "Bảo Mật Ứng Dụng Web" },
  { icon: Cloud, label: "Bảo Mật Đám Mây (AWS/Azure)" },
  { icon: Bug, label: "Phân Tích Mã Độc & Reverse Engineering" },
  { icon: Lock, label: "Cryptography & Mật Mã Học" },
  { icon: Target, label: "Nghiên Cứu Lỗ Hổng" },
];

const timeline = [
  { year: "2025", event: "Bắt đầu Bug Bounty Hunting" },
  { year: "2024", event: "Tham gia các cuộc thi CTF" },
  { year: "2023", event: "Bắt đầu học Công Nghệ Phần Mềm" },
  { year: "2022", event: "Khám phá lập trình và bảo mật" },
];


export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-purple/5 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-cyber-neon/30 bg-cyber-neon/5 mb-6 glass">
              <span className="w-1.5 h-1.5 rounded-none bg-cyber-neon animate-pulse" />
              <span className="text-xs font-mono text-cyber-neon uppercase tracking-wider">./toi_la_ai</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-mono">
              <span className="text-cyber-neon">&gt;</span> Học Tập & Phát Triển
              <br />
              <span className="text-cyber-purple">Kỹ Năng Bảo Mật</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed font-mono text-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-4 rounded-lg border border-cyber-gray/20 hover:border-cyber-neon/30 transition-colors"
              >
                <span className="text-cyber-neon">&gt; student@portfolio:~$</span> Mình là sinh viên chuyên ngành Công Nghệ Phần Mềm,
                đam mê tìm hiểu về bảo mật ứng dụng web, phân tích lỗ hổng và xây dựng các công cụ
                bảo mật. Mình thích nghiên cứu cách thức hoạt động của hệ thống và cách bảo vệ chúng.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass p-4 rounded-lg border border-cyber-gray/20 hover:border-cyber-purple/30 transition-colors"
              >
                <span className="text-cyber-neon">&gt; student@portfolio:~$</span> Mình tập trung vào việc học hỏi các kỹ thuật thực tế,
                tham gia các cuộc thi CTF và làm các dự án cá nhân để nâng cao kỹ năng. Mỗi dự án
                đều giúp mình hiểu sâu hơn về bảo mật và cách áp dụng kiến thức vào thực tế.
              </motion.p>
            </div>

            {/* Specialties */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {specialties.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-none border border-cyber-gray/20 glass hover:glass-strong hover:border-cyber-neon/50 transition-all group magnetic shimmer"
                >
                  <item.icon className="w-5 h-5 text-cyber-neon group-hover:text-cyber-purple transition-colors" />
                  <span className="text-sm text-foreground font-mono">{item.label}</span>
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
            <div className="rounded-lg border border-cyber-gray/30 glass-strong overflow-hidden shadow-2xl backdrop-blur-md hover:border-cyber-neon/30 transition-colors">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-cyber-surface border-b border-cyber-gray/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 pulse-glow" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">bash — 80x24</span>
              </div>

              {/* Content */}
              <div className="p-6 font-mono">
                <div className="text-sm text-muted-foreground mb-6">
                  <span className="text-cyber-neon">user@cyber-portfolio:~/su_nghiep$</span> ./hien_thi_timeline.sh
                </div>

                <div className="space-y-6 relative pl-4 border-l border-cyber-gray/20 ml-2">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="relative pl-6 group"
                    >
                      <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 border-cyber-neon bg-cyber-navy group-hover:bg-cyber-neon transition-colors pulse-glow" />

                      <div className="flex flex-col">
                        <span className="text-xs text-cyber-neon mb-1">[{item.year}]</span>
                        <p className="text-foreground text-sm group-hover:text-cyber-neon transition-colors">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-cyber-gray/20">
                  <div className="flex items-center gap-2 text-cyber-neon animate-pulse">
                    <span className="text-xs">_</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


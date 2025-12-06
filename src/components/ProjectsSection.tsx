import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Folder, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    name: "Phishing Detection System",
    description: "Hệ thống nhận diện email phishing và số điện thoại lừa đảo sử dụng BERT model. Đạt độ chính xác 94% trên tập test với 10,000+ mẫu.",
    tech: ["Python", "BERT", "TensorFlow", "Flask"],
    stars: 28,
    forks: 7,
    github: "#",
    demo: "#",
    tags: ["AI/ML", "NLP", "Security"],
    status: "Hoàn Thành"
  },
  {
    id: 2,
    name: "AI Code Vulnerability Auditor",
    description: "Công cụ SAST sử dụng Machine Learning để phân tích mã nguồn và phát hiện lỗ hổng bảo mật (Injection, XSS, Logic Flaw) dựa trên OWASP Top 10.",
    tech: ["Python", "NLP", "Scikit-learn", "AST"],
    stars: 15,
    forks: 4,
    github: "#",
    tags: ["AI/ML", "SAST", "OWASP"],
    status: "Đang Phát Triển"
  },
  {
    id: 3,
    name: "Serverless Security Scanner",
    description: "Quét lỗi cấu hình AWS Serverless (Lambda, S3, DynamoDB). Phát hiện IAM overprivileged, public buckets, và sensitive environment variables.",
    tech: ["Python", "Boto3", "AWS SDK"],
    stars: 12,
    forks: 3,
    github: "#",
    tags: ["Cloud", "AWS", "DevSecOps"],
    status: "Đang Phát Triển"
  },
  {
    id: 4,
    name: "Vulnerable Microservices Lab",
    description: "Môi trường microservices với Docker/K8s chứa các lỗ hổng phức tạp (SSRF, Deserialization, API Gateway flaws) để thực hành pentesting.",
    tech: ["Docker", "Kubernetes", "Go", "Node.js"],
    stars: 20,
    forks: 8,
    github: "#",
    tags: ["DevSecOps", "Pentest", "CTF"],
    status: "Đang Phát Triển"
  },
  {
    id: 5,
    name: "VulnScanner-Lite",
    description: "Công cụ quét lỗ hổng cơ bản cho website, phát hiện SQL Injection và XSS.",
    tech: ["Python", "Requests", "BeautifulSoup"],
    stars: 15,
    forks: 5,
    github: "#",
    tags: ["Scanner", "OWASP"],
    status: "Đang Phát Triển"
  },
  {
    id: 6,
    name: "PortScanner",
    description: "Công cụ quét cổng mạng nhanh với phát hiện dịch vụ và báo cáo chi tiết.",
    tech: ["Python", "Socket", "Threading"],
    stars: 9,
    forks: 3,
    github: "#",
    tags: ["Network", "Recon"],
    status: "Đang Phát Triển"
  },
];



export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-cyber-navy/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-cyber-neon/30 bg-cyber-neon/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-none bg-cyber-neon animate-pulse" />
              <span className="text-xs font-mono text-cyber-neon uppercase tracking-wider">./hoat_dong</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-mono">
              Featured <span className="text-cyber-purple">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
              &gt; Security research tools and utilities for vulnerability discovery.
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
                className="group relative rounded-lg border border-cyber-gray/20 bg-gradient-to-br from-cyber-surface/50 to-cyber-navy/30 backdrop-blur-md p-6 hover:border-cyber-neon/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.15)] hover:scale-[1.02]"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-none bg-cyber-navy border border-cyber-neon/20">
                    <Folder className="w-5 h-5 text-cyber-neon" />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-500" />
                      {project.stars}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-none bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/20">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyber-neon transition-colors font-mono">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-mono">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-none text-xs bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 border-t border-cyber-gray/10 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 text-xs text-muted-foreground font-mono"
                    >
                      <Terminal className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-cyber-gray/20">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="flex-1 rounded-none hover:bg-cyber-neon/10 hover:text-cyber-neon font-mono"
                  >
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      Mã Nguồn
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="flex-1 rounded-none hover:bg-cyber-purple/10 hover:text-cyber-purple font-mono"
                    >
                      <a href={project.demo}>
                        <ExternalLink className="w-4 h-4 mr-2" />
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
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-none border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-cyber-navy font-mono"
            >
              <a href="#">
                <Github className="w-5 h-5 mr-2" />
                Truy Cập Tất Cả Kho Lưu Trữ
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

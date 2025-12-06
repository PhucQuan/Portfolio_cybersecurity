import { motion } from "framer-motion";
import { ArrowRight, Download, Shield, Bug, Award, ExternalLink, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { TypeAnimation } from 'react-type-animation';
import { ParticleBackground } from "./ParticleBackground";

const stats = [
  { icon: Shield, label: "TryHackMe", value: "Active", link: "https://tryhackme.com/p/emwinthichhat" },
  { icon: Bug, label: "HackTheBox", value: "Active", link: "https://app.hackthebox.com/users/2196994" },
  { icon: Award, label: "CTF Player", value: "2024", link: "#" },
];


export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-neon/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyber-neon/5 to-cyber-purple/5 rounded-full blur-[100px] animated-gradient" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Terminal-style intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-neon/30 bg-cyber-navy/80 backdrop-blur-sm mb-8 shadow-neon glass"
            >
              <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
              <span className="font-mono text-sm text-cyber-neon">
                root@cyber-portfolio:~$ ./khoi_tao_he_thong.sh
              </span>
            </motion.div>

            {/* Main Headline with Typewriter */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
            >
              <span className="text-foreground">Xin chào, tôi là</span>
              <br />
              <span className="relative inline-block">
                <TypeAnimation
                  sequence={[
                    'Penetration Tester',
                    2000,
                    'Bug Bounty Hunter',
                    2000,
                    'Security Researcher',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-neon via-cyber-purple to-cyber-neon bg-[length:200%_auto] animate-gradient"
                  repeat={Infinity}
                />
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyber-neon to-cyber-purple blur-sm"></span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyber-neon mb-6 tracking-wide"
            >
              Phát Hiện • Khai Thác • Báo Cáo Lỗ Hổng
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 font-mono leading-relaxed"
            >
              Tập trung vào kiểm thử xâm nhập và săn lỗi bảo mật web.
              Phân tích, khai thác và báo cáo lỗ hổng theo quy trình chuyên nghiệp.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            >
              <Button
                className="group bg-cyber-neon text-cyber-navy hover:bg-cyber-neon/80 font-mono text-base px-6 py-6 rounded-none border-2 border-transparent hover:border-cyber-neon hover:bg-transparent hover:text-cyber-neon transition-all duration-300 shadow-neon magnetic"
                asChild
              >
                <a href="#homework" className="flex items-center gap-2">
                  <span className="mr-1">[</span>
                  Xem Bài Tập
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span className="ml-1">]</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="group border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white font-mono text-base px-6 py-6 rounded-none transition-all duration-300 shadow-purple magnetic"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Tải CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground font-mono">Kết nối:</span>
              <a href="https://github.com/PhucQuan" target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-cyber-gray/30 hover:border-cyber-neon/50 hover:bg-cyber-neon/10 transition-all magnetic group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-cyber-neon transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/ph%C3%BAc-qu%C3%A2n-355548190/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-cyber-gray/30 hover:border-cyber-purple/50 hover:bg-cyber-purple/10 transition-all magnetic group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-cyber-purple transition-colors" />
              </a>
              <a href="https://tryhackme.com/p/emwinthichhat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-cyber-gray/30 hover:border-green-500/50 hover:bg-green-500/10 transition-all magnetic group" title="TryHackMe">
                <Shield className="w-5 h-5 text-muted-foreground group-hover:text-green-500 transition-colors" />
              </a>
              <a href="https://app.hackthebox.com/users/2196994" target="_blank" rel="noopener noreferrer" className="p-2 rounded-none border border-cyber-gray/30 hover:border-green-400/50 hover:bg-green-400/10 transition-all magnetic group" title="HackTheBox">
                <Bug className="w-5 h-5 text-muted-foreground group-hover:text-green-400 transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group transform-3d">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-neon via-cyber-purple to-cyber-neon rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-gradient bg-[length:200%_auto]"></div>

              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyber-neon/20 to-cyber-purple/20 rounded-2xl blur-2xl pulse-glow"></div>

              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-cyber-neon/30 glass-strong shimmer w-full max-w-[480px] mx-auto lg:mx-0">
                <img
                  src="/profile.jpg"
                  alt="Professional Profile"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  style={{ maxHeight: '580px', objectFit: 'cover' }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-navy/80 via-transparent to-transparent opacity-60"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-lg p-4 border border-cyber-neon/30 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-cyber-neon font-mono mb-1">STATUS</p>
                      <p className="text-sm font-bold text-foreground">Available for Work</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-cyber-neon animate-pulse shadow-neon"></div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyber-neon opacity-50"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyber-purple opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyber-purple opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyber-neon opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats/Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.a
              key={stat.label}
              href={stat.link}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              className="group flex items-center gap-3 px-5 py-3 rounded-none border border-cyber-gray/30 glass hover:border-cyber-neon/50 hover:glass-strong transition-all magnetic shimmer"
            >
              <stat.icon className="w-5 h-5 text-cyber-neon group-hover:text-cyber-purple transition-colors" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-mono">{stat.label}</p>
                <p className="text-lg font-bold text-foreground font-mono">{stat.value}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-cyber-neon/50">CUON_XUONG</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyber-neon/0 via-cyber-neon to-cyber-neon/0" />
        </motion.div>
      </motion.div>
    </section>
  );
};


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Lock, Terminal, Loader2, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    toast({
      title: "Đã Gửi Truyền Tải",
      description: "Tin nhắn mã hóa của bạn đã được gửi an toàn.",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-cyber-neon/30 bg-cyber-neon/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-none bg-cyber-neon animate-pulse" />
              <span className="text-xs font-mono text-cyber-neon uppercase tracking-wider">./kenh_lien_lac</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
              Get In <span className="text-cyber-neon">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
              &gt; Secure channel open. Encrypted transmission protocol active.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative p-6 rounded-none border border-cyber-gray/20 bg-cyber-surface/50 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyber-neon/50" />
                <h3 className="text-xl font-bold text-foreground mb-4 font-mono flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyber-neon" />
                  Connection Details
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-none bg-cyber-navy border border-cyber-neon/20">
                      <Mail className="w-5 h-5 text-cyber-neon" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-1">EMAIL_PROTOCOL</p>
                      <a href="mailto:quan610ll@gmail.com" className="text-foreground hover:text-cyber-neon transition-colors font-mono">
                        quan610ll@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-none bg-cyber-navy border border-cyber-neon/20">
                      <MapPin className="w-5 h-5 text-cyber-neon" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-1">LOCATION</p>
                      <p className="text-foreground font-mono">Remote / Global</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-none border border-cyber-purple/20 bg-cyber-purple/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-5 h-5 text-cyber-purple" />
                  <h4 className="font-bold text-foreground font-mono">End-to-End Encryption</h4>
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  All communications secured with PGP 4096-bit encryption.
                  Public key available upon request.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-neon/20 to-cyber-purple/20 rounded-none blur opacity-20" />
              <form onSubmit={handleSubmit} className="relative p-8 rounded-none border border-cyber-gray/20 bg-cyber-surface/80 backdrop-blur-md space-y-6">
                <div className="flex items-center justify-between mb-6 border-b border-cyber-gray/20 pb-4">
                  <span className="text-xs font-mono text-cyber-neon animate-pulse">● LIEN_KET_AN_TOAN_DA_THIET_LAP</span>
                  <span className="text-xs font-mono text-muted-foreground">TLS 1.3</span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground">DANH_TINH</label>
                  <Input
                    placeholder="Nhập tên của bạn..."
                    className="bg-cyber-navy border-cyber-gray/30 focus:border-cyber-neon/50 font-mono rounded-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground">DUONG_DAN_HOI_DAP</label>
                  <Input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    className="bg-cyber-navy border-cyber-gray/30 focus:border-cyber-neon/50 font-mono rounded-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground">NOI_DUNG</label>
                  <Textarea
                    placeholder="Nhập tin nhắn..."
                    className="min-h-[150px] bg-cyber-navy border-cyber-gray/30 focus:border-cyber-neon/50 font-mono rounded-none resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyber-neon text-cyber-navy hover:bg-cyber-neon/80 font-mono font-bold rounded-none h-12"
                  disabled={isSubmitting || submitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      DANG_MA_HOA...
                    </>
                  ) : submitted ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      TRUYEN_TAI_HOAN_TAT
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      TRUYEN_DU_LIEU
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

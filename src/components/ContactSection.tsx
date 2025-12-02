import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Github, Twitter, Linkedin, Key, Calendar, ExternalLink, Check, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#", username: "@phucquan" },
  { icon: Twitter, label: "Twitter / X", href: "#", username: "@phucquan_sec" },
  { icon: Linkedin, label: "LinkedIn", href: "#", username: "phucquan" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24 relative">
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
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Contact</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Work
              <span className="gradient-text"> Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Available for security consulting, penetration testing engagements, and vulnerability research collaborations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground">contact.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="pentest">Penetration Testing</option>
                      <option value="consulting">Security Consulting</option>
                      <option value="bugbounty">Bug Bounty Program</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Describe your project or inquiry..."
                    />
                  </div>

                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Button 
                    type="submit" 
                    variant="cyber" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting || submitted}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Email */}
              <a
                href="mailto:hello@phucquan.sec"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    hello@phucquan.sec
                  </p>
                </div>
              </a>

              {/* PGP Key */}
              <a
                href="#"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Key className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">PGP Public Key</p>
                  <p className="text-foreground font-mono text-sm group-hover:text-primary transition-colors">
                    0x1234ABCD...
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              {/* Schedule Call */}
              <a
                href="#"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-secondary/30 hover:bg-card/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Schedule a Call</p>
                  <p className="text-foreground font-medium group-hover:text-secondary transition-colors">
                    Book a 30-min consultation
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all group"
                    >
                      <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.username}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Terminal, Github, Twitter, Linkedin, FileText, Shield } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 text-foreground">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-semibold">phucquan</span>
              <span className="text-primary font-mono text-sm">.sec</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Offensive Security Researcher specializing in vulnerability discovery and responsible disclosure.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Resume Download */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            >
              <FileText className="w-4 h-4" />
              Résumé
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Phuc Quan. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Responsible Disclosure
            </a>
            <span className="text-border">•</span>
            <span className="text-xs font-mono">No tracking • Privacy first</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

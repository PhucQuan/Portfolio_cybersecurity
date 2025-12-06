import { Terminal, Github, Linkedin, FileText, Shield } from "lucide-react";

const footerLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Dự án", href: "#projects" },
  { label: "Liên hệ", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/PhucQuan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/phúc-quân-355548190/", label: "LinkedIn" },
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
              Chuyên Gia Nghiên Cứu Bảo Mật Tấn Công chuyên về phát hiện lỗ hổng và công bố có trách nhiệm.
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
              Tải CV
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
          <p>© {new Date().getFullYear()} Phuc Quan. Đã đăng ký bản quyền.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Công Bố Có Trách Nhiệm
            </a>
            <span className="text-border">•</span>
            <span className="text-xs font-mono">Không theo dõi • Bảo mật là trên hết</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

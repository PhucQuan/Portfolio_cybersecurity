import { motion } from "framer-motion";

export const CyberBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy via-cyber-surface to-cyber-navy" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--cyber-neon) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--cyber-neon) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Radial glow - top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--cyber-neon) / 0.08) 0%, transparent 70%)',
        }}
      />
      
      {/* Radial glow - bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--cyber-purple) / 0.06) 0%, transparent 70%)',
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-32 h-32 border border-primary/10 rotate-45"
        animate={{ 
          rotate: [45, 55, 45],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-[10%] w-24 h-24 border border-secondary/10 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-[5%] w-16 h-16 border border-primary/5"
        animate={{ 
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

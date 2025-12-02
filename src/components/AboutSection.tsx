import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I focus on vulnerability research, web exploitation, and automating security workflows. 
              I enjoy solving complex problems and breaking down how systems truly work. My approach 
              combines methodical analysis with hands-on testing to uncover critical security flaws.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollAnimation({ children, className }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [30, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={cn("w-full relative", className)}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;

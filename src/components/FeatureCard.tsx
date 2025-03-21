
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  className,
  delay = 0 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "p-6 rounded-2xl glass-morphism group",
        className
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 border border-halvi-100/20 dark:border-halvi-800/20 text-halvi-600 dark:text-halvi-300 transition-transform duration-300 group-hover:scale-110 group-hover:bg-halvi-100/20 dark:group-hover:bg-halvi-900/20 backdrop-blur-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;

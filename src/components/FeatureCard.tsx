
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
        "p-6 lg:p-8 rounded-2xl lg:rounded-3xl glass-morphism group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
        className
      )}
    >
      <div className="mb-4 lg:mb-6 inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 dark:bg-black/20 border border-halvi-100/20 dark:border-halvi-800/20 text-halvi-600 dark:text-halvi-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-halvi-100/20 dark:group-hover:bg-halvi-900/20 backdrop-blur-sm">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-3 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;

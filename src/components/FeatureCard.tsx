
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative p-8 lg:p-10 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl hover:shadow-halvi-500/10 dark:hover:shadow-halvi-500/20 transition-all duration-500 cursor-pointer overflow-hidden",
        className
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-halvi-50/50 via-transparent to-orange-50/30 dark:from-halvi-950/50 dark:to-orange-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating background decoration */}
      <motion.div
        className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-halvi-200/20 to-orange-200/20 dark:from-halvi-800/20 dark:to-orange-800/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10">
        {/* Enhanced icon container */}
        <motion.div 
          className="mb-6 lg:mb-8 inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-halvi-100 to-halvi-50 dark:from-halvi-900 dark:to-halvi-950 border border-halvi-200/50 dark:border-halvi-800/50 text-halvi-600 dark:text-halvi-300 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        {/* Enhanced title */}
        <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-gray-100 group-hover:text-halvi-600 dark:group-hover:text-halvi-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Enhanced description */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base lg:text-lg mb-6">
          {description}
        </p>

        {/* Call-to-action arrow */}
        <motion.div
          className="flex items-center text-halvi-600 dark:text-halvi-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span className="mr-2">Learn more</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.div>
      </div>

      {/* Hover border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-halvi-300/0 dark:border-halvi-700/0 group-hover:border-halvi-300/50 dark:group-hover:border-halvi-700/50 transition-all duration-500"
        initial={false}
        whileHover={{
          boxShadow: "0 0 0 1px rgba(74, 97, 251, 0.1), 0 0 20px rgba(74, 97, 251, 0.1)"
        }}
      />
    </motion.div>
  );
}

export default FeatureCard;

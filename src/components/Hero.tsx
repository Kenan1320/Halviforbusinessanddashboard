
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "./AuroraBackground";
import AutoSwipeDemo from "./AutoSwipeDemo";

export function Hero() {
  return (
    <AuroraBackground showRadialGradient>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:max-w-2xl"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-halvi-50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800">
            <span className="text-sm font-medium text-halvi-700 dark:text-halvi-300">
              Your Halal Village
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Discover the <span className="text-gradient">Halvi</span> Experience
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            Your one-stop platform for all Halal products and services. 
            Connecting communities with verified halal businesses, products, 
            food delivery, and transportation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/business">For Businesses</Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-0"
        >
          <AutoSwipeDemo />
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

export default Hero;

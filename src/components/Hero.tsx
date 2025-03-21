
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "./AuroraBackground";

export function Hero() {
  return (
    <AuroraBackground showRadialGradient>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-halvi-50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800">
            <span className="text-sm font-medium text-halvi-700 dark:text-halvi-300">
              Your Halal Village
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Discover the <span className="text-gradient">Halvi</span> Experience
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your one-stop platform for all Halal products and services. 
            Connecting communities with verified halal businesses, products, 
            food delivery, and transportation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          className="mt-16 sm:mt-24 w-full max-w-5xl"
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-halvi-600/10 to-halvi-400/10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-medium text-white">Halvi Platform Demo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

export default Hero;


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "./AuroraBackground";

export function Hero() {
  return (
    <AuroraBackground showRadialGradient>
      <div className="flex flex-col items-center justify-between min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-medium mb-2 text-gray-700 dark:text-gray-300">
            Grow{" "}
            <Link to="/grow-more" className="inline-block">
              <motion.span
                className="text-gradient font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 1.5 
                }}
              >
                More
              </motion.span>
            </Link>
            {" "}with Halvi
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-center">
            The <span className="text-gradient">Hal Vi</span>llage
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Welcome to Halvi—America's premier platform for halal businesses and services. 
            Powered by intelligent software, Halvi connects communities with verified halal 
            groceries, restaurants, local shops, e-commerce stores providing shipping, local 
            delivery services, ride-sharing, and professional services such as therapists and 
            others. Whether you're a customer, driver, or business owner, Halvi enhances 
            visibility, accessibility, and convenience for all. Join us in shaping a stronger 
            halal economy for businesses and all.
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
      </div>
    </AuroraBackground>
  );
}

export default Hero;

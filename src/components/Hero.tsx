import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "./AuroraBackground";
import { BookOpen, Calendar } from "lucide-react";
import BusinessModeSelector from "./BusinessModeSelector";
import VibratingButton from "./VibratingButton";

export function Hero() {
  return (
    <AuroraBackground showRadialGradient>
      <div className="flex flex-col items-center justify-between min-h-screen py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center w-full mx-auto"
        >
          {/* Business Mode Selector - full screen width */}
          <BusinessModeSelector />
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-2 text-gray-700 dark:text-gray-300">
              Grow{" "}
              <Link to="/grow-more" className="inline-block relative group">
                <motion.span
                  className="text-gradient font-bold relative z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: ["0 0 0px rgba(74, 97, 251, 0)", "0 0 10px rgba(74, 97, 251, 0.5)", "0 0 0px rgba(74, 97, 251, 0)"]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 1.5 
                  }}
                >
                  More
                </motion.span>
                {/* Animated underline */}
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-halvi-400 to-halvi-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 1.5,
                    delay: 0.5
                  }}
                />
                {/* Hover effect - pulsing glow */}
                <motion.div 
                  className="absolute -inset-1 rounded-lg bg-halvi-500/20 opacity-0 group-hover:opacity-100 z-0"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2
                  }}
                />
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
            
            <div className="mt-4">
              <Button asChild size="lg" variant="ghost" className="rounded-full px-8 flex items-center gap-2">
                <Link to="/schedule-meeting">
                  <Calendar className="h-4 w-4" />
                  Schedule your Onboarding Meeting
                </Link>
              </Button>
              
              {/* Affiliate Section */}
              <div className="mt-4 space-y-3">
                <VibratingButton 
                  text="Become an Affiliate - Passive Income" 
                  link="/affiliates"
                  className="shadow-lg shadow-amber-500/20"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

export default Hero;

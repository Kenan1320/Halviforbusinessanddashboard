
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "./AuroraBackground";
import { BookOpen, Calendar, ArrowRight, Zap } from "lucide-react";
import BusinessModeSelector from "./BusinessModeSelector";
import VibratingButton from "./VibratingButton";

export function Hero() {
  return (
    <AuroraBackground showRadialGradient>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-halvi-400/30 rounded-full"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-400/40 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-center w-full mx-auto relative z-10"
        >
          {/* Enhanced Business Mode Selector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BusinessModeSelector />
          </motion.div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            {/* Enhanced subtitle with animation */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl sm:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300"
            >
              Grow{" "}
              <Link to="/grow-more" className="inline-block relative group">
                <motion.span
                  className="text-gradient font-bold relative z-10"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                >
                  More
                </motion.span>
                
                {/* Enhanced animated underline */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-halvi-400 via-halvi-500 to-halvi-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 2,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Enhanced hover glow */}
                <motion.div 
                  className="absolute -inset-2 rounded-lg bg-halvi-500/20 opacity-0 group-hover:opacity-100 z-0 blur-sm"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
              </Link>
              {" "}with Halvi
            </motion.h2>
            
            {/* Enhanced main title */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-center leading-none"
            >
              The{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Hal Vi</span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-halvi-400/20 to-orange-400/20 blur-lg rounded-lg"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
              <br />
              llage
            </motion.h1>
            
            {/* Enhanced description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Welcome to Halvi—America's premier platform for halal businesses and services. 
              Powered by intelligent software, Halvi connects communities with verified halal 
              groceries, restaurants, local shops, e-commerce, delivery services, ride-sharing, 
              and professional services. Join us in shaping a stronger halal economy.
            </motion.p>
            
            {/* Enhanced call-to-action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="relative rounded-full px-10 py-6 text-lg font-semibold bg-gradient-to-r from-halvi-600 to-halvi-700 hover:from-halvi-700 hover:to-halvi-800 shadow-xl shadow-halvi-500/25 hover:shadow-2xl hover:shadow-halvi-500/40 transition-all duration-300">
                  <Link to="/signup" className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg font-semibold border-2 border-halvi-300 dark:border-halvi-700 hover:bg-halvi-50 dark:hover:bg-halvi-950 transition-all duration-300">
                  <Link to="/business">For Businesses</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Enhanced secondary actions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
              >
                <Button asChild size="lg" variant="ghost" className="rounded-full px-8 py-4 flex items-center gap-3 text-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300">
                  <Link to="/schedule-meeting">
                    <Calendar className="h-5 w-5" />
                    Schedule your Onboarding Meeting
                  </Link>
                </Button>
              </motion.div>
              
              {/* Enhanced Affiliate Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="space-y-4"
              >
                <VibratingButton 
                  text="Become an Affiliate - Passive Income" 
                  link="/affiliates"
                  className="shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

export default Hero;


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative w-full bg-gradient-to-r from-halvi-600/90 via-halvi-500/90 to-halvi-400/90 backdrop-blur-sm text-white py-4 px-4 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="inline-block w-3 h-3 bg-orange-400 rounded-full animate-pulse"></span>
              <p className="text-sm sm:text-base font-medium">
                Business owners, affiliates, and drivers—leverage Halvi's growing network to expand your reach. 
                <span className="ml-1 font-semibold">We have something coming up for Halvi professionals!</span>
              </p>
            </div>
            
            <Button 
              asChild 
              variant="ghost" 
              className="mt-2 sm:mt-0 text-white hover:text-white hover:bg-white/10 group"
              size="sm"
            >
              <Link to="/professional">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnnouncementBanner;

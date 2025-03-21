
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export function BusinessAnnouncementCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="w-full overflow-hidden bg-gradient-to-r from-halvi-600/90 via-halvi-500/90 to-halvi-400/90 border-none shadow-xl">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="inline-block w-3 h-3 bg-orange-400 rounded-full animate-pulse mr-3"></span>
                <h3 className="text-xl md:text-2xl font-bold text-white">Special Announcement</h3>
              </div>
              <p className="text-white/90 text-lg mb-4">
                Business owners, affiliates, and drivers—leverage Halvi's growing network to expand your reach. 
                We have something coming up for Halvi professionals!
              </p>
              <Button 
                asChild 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 group"
              >
                <Link to="/professional">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="hidden md:block">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="bg-white/10 rounded-full p-6"
              >
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-4xl">Halvi</span>
                </div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default BusinessAnnouncementCard;

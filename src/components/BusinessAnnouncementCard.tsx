
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BusinessAnnouncementCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-halvi-700/90 via-halvi-600/90 to-halvi-500/90 text-white"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-halvi-400/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-halvi-800/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl"></div>
      
      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Business owners, affiliates, and drivers—leverage Halvi's growing network to expand your reach
          </h2>
          
          {/* Animated text reveal effect */}
          <div className="overflow-hidden mb-8">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white/90"
            >
              We have something coming up for Halvi professionals. Join our network today to stay updated on new opportunities.
            </motion.p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-white text-halvi-700 hover:bg-white/90 hover:text-halvi-800">
              <Link to="/business/apply">
                Apply as a Business <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/professional">
                Professional Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BusinessAnnouncementCard;

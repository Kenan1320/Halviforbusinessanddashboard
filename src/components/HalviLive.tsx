
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data - would be replaced with real API calls
const generateRandomMetrics = () => {
  return {
    signupInterval: Math.floor(Math.random() * 2) + 5, // 5-7 minutes
    shopsActive: Math.floor(Math.random() * 7) + 83, // 83-90%
    visitToSignup: Math.floor(Math.random() * 8) + 38, // 38-46%
    ordersLast24h: Math.floor(Math.random() * 50) + 290, // 290-340
  };
};

type MetricType = "shopsActive" | "visitToSignup" | "ordersLast24h";

export function HalviLive() {
  const [metrics, setMetrics] = useState(generateRandomMetrics());
  const [currentMetric, setCurrentMetric] = useState<MetricType>("shopsActive");
  const [lastPing, setLastPing] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);

  // Simulate metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(generateRandomMetrics());
    }, 3 * 60 * 60 * 1000); // 3 hours
    
    return () => clearInterval(interval);
  }, []);

  // Simulate ping updates
  useEffect(() => {
    const pingInterval = setInterval(() => {
      setLastPing(Math.floor(Math.random() * 30) + 1); // 1-30 seconds
      
      // Create a pulse effect when ping updates
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1000);
    }, 10000); // Every 10 seconds
    
    return () => clearInterval(pingInterval);
  }, []);

  // Rotate through metrics automatically
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setCurrentMetric((prev) => {
        if (prev === "shopsActive") return "visitToSignup";
        if (prev === "visitToSignup") return "ordersLast24h";
        return "shopsActive";
      });
    }, 6000); // Every 6 seconds
    
    return () => clearInterval(rotateInterval);
  }, []);

  // Rendering helpers
  const getMetricValue = () => {
    switch (currentMetric) {
      case "shopsActive":
        return `${metrics.shopsActive}%`;
      case "visitToSignup":
        return `${metrics.visitToSignup}%`;
      case "ordersLast24h":
        return metrics.ordersLast24h.toString();
    }
  };
  
  const getMetricLabel = () => {
    switch (currentMetric) {
      case "shopsActive":
        return "Shops Active Today";
      case "visitToSignup":
        return "Visit-to-Signup Rate";
      case "ordersLast24h":
        return "Orders in Last 24h";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "max-w-lg mx-auto w-full",
        "bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black",
        "shadow-lg border border-gray-800/50",
        isGlowing ? "shadow-halvi-500/20" : ""
      )}
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: "radial-gradient(circle at center, rgba(74, 97, 251, 0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <svg className="w-full h-full opacity-20">
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(74, 97, 251, 0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <motion.div
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">HalviLive</span>
          </div>
          <div className="flex items-center space-x-1">
            <Activity className="h-3 w-3 text-green-500" />
            <span className="text-xs text-green-400">LIVE</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Halvi Business Live Dash
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Left Metric */}
          <div className="bg-gray-800/30 backdrop-blur rounded-lg p-4 border border-gray-700/30">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                Every {metrics.signupInterval} mins
              </div>
              <div className="text-xs text-gray-400 mt-1">New Customer Signup</div>
            </div>
          </div>

          {/* Right Metric (Rotating) */}
          <div className="bg-gray-800/30 backdrop-blur rounded-lg p-4 border border-gray-700/30 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMetric}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {getMetricValue()}
                </div>
                <div className="text-xs text-gray-400 mt-1">{getMetricLabel()}</div>
              </motion.div>
            </AnimatePresence>
            
            {/* Indicator dots */}
            <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-1">
              {["shopsActive", "visitToSignup", "ordersLast24h"].map((metric) => (
                <div
                  key={metric}
                  className={cn(
                    "h-1 w-1 rounded-full",
                    currentMetric === metric ? "bg-halvi-400" : "bg-gray-600"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span className="text-xs">Last ping: <span className="text-gray-300">{lastPing}</span> seconds ago</span>
          </div>
          <Link
            to="/onboarding"
            className="flex items-center text-halvi-400 hover:text-halvi-300 transition-colors text-sm font-medium"
          >
            Onboard <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default HalviLive;

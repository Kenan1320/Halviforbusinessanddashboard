
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BusinessModeSelector = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<'challenge' | 'regular'>('challenge');

  const handleModeSelect = (value: 'challenge' | 'regular') => {
    setSelectedMode(value);
  };

  return (
    <div className="w-full mb-8">
      {/* Full width glass-like container with improved styling */}
      <div className="w-full backdrop-blur-md bg-white/10 dark:bg-gray-800/30 border-t border-b border-gray-200/30 dark:border-gray-700/30 rounded-full overflow-hidden">
        <div className="w-full flex">
          <motion.button
            whileHover={{ backgroundColor: "rgba(var(--halvi-200), 0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleModeSelect('challenge')}
            className={`flex-1 py-4 px-6 relative overflow-hidden ${
              selectedMode === 'challenge' ? 'bg-white/20 dark:bg-gray-700/30' : ''
            }`}
          >
            <span className={`font-medium relative z-10 ${
              selectedMode === 'challenge' 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              4-Day Special Challenge
            </span>
            
            <motion.div
              className="absolute inset-0 bg-halvi-100/40 dark:bg-halvi-900/30 z-0"
              initial={{ opacity: selectedMode === 'challenge' ? 1 : 0 }}
              animate={{ opacity: selectedMode === 'challenge' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Animated line underneath */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-halvi-500"
              initial={{ 
                width: selectedMode === 'challenge' ? '100%' : '0%',
              }}
              animate={{ 
                width: selectedMode === 'challenge' ? '100%' : '0%',
                x: selectedMode === 'challenge' ? [0, 5, 0] : 0
              }}
              transition={{ 
                width: { duration: 0.3 },
                x: { repeat: selectedMode === 'challenge' ? Infinity : 0, repeatType: "reverse", duration: 1.5 }
              }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ backgroundColor: "rgba(var(--halvi-200), 0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleModeSelect('regular')}
            className={`flex-1 py-4 px-6 relative overflow-hidden ${
              selectedMode === 'regular' ? 'bg-white/20 dark:bg-gray-700/30' : ''
            }`}
          >
            <span className={`font-medium relative z-10 ${
              selectedMode === 'regular' 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              Affiliate Program
            </span>
            
            <motion.div
              className="absolute inset-0 bg-halvi-100/40 dark:bg-halvi-900/30 z-0"
              initial={{ opacity: selectedMode === 'regular' ? 1 : 0 }}
              animate={{ opacity: selectedMode === 'regular' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Animated line underneath */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-halvi-500"
              initial={{ 
                width: selectedMode === 'regular' ? '100%' : '0%',
              }}
              animate={{ 
                width: selectedMode === 'regular' ? '100%' : '0%',
                x: selectedMode === 'regular' ? [0, 5, 0] : 0
              }}
              transition={{ 
                width: { duration: 0.3 },
                x: { repeat: selectedMode === 'regular' ? Infinity : 0, repeatType: "reverse", duration: 1.5 }
              }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BusinessModeSelector;

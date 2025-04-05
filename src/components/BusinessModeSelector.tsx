
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BusinessModeSelector = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<'new' | 'existing'>('new');
  const [showDashboardAccess, setShowDashboardAccess] = useState<boolean>(false);

  const handleModeSelect = (mode: 'new' | 'existing') => {
    setSelectedMode(mode);
    if (mode === 'existing') {
      setShowDashboardAccess(true);
    } else {
      setShowDashboardAccess(false);
    }
  };

  return (
    <div className="w-full mb-8">
      {/* Full width glass-like container */}
      <div className="w-full backdrop-blur-md bg-white/10 dark:bg-gray-800/30 border border-gray-200/30 dark:border-gray-700/30 rounded-lg overflow-hidden">
        <div className="w-full flex">
          <motion.button
            whileHover={{ backgroundColor: "rgba(var(--halvi-200), 0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleModeSelect('new')}
            className={`flex-1 py-5 relative overflow-hidden group ${
              selectedMode === 'new' ? 'bg-white/20 dark:bg-gray-700/30' : ''
            }`}
          >
            <span className={`font-medium relative z-10 ${
              selectedMode === 'new' 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              New Businesses
            </span>
            
            <motion.div
              className="absolute inset-0 bg-halvi-100/40 dark:bg-halvi-900/30 z-0"
              initial={{ opacity: selectedMode === 'new' ? 1 : 0 }}
              animate={{ opacity: selectedMode === 'new' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Animated line underneath */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-halvi-500"
              initial={{ 
                width: selectedMode === 'new' ? '100%' : '0%',
              }}
              animate={{ 
                width: selectedMode === 'new' ? '100%' : '0%',
                x: selectedMode === 'new' ? [0, 5, 0] : 0
              }}
              transition={{ 
                width: { duration: 0.3 },
                x: { repeat: selectedMode === 'new' ? Infinity : 0, repeatType: "reverse", duration: 1.5 }
              }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ backgroundColor: "rgba(var(--halvi-200), 0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleModeSelect('existing')}
            className={`flex-1 py-5 relative overflow-hidden group ${
              selectedMode === 'existing' ? 'bg-white/20 dark:bg-gray-700/30' : ''
            }`}
          >
            <span className={`font-medium relative z-10 ${
              selectedMode === 'existing' 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              Existing Businesses
            </span>
            
            <motion.div
              className="absolute inset-0 bg-halvi-100/40 dark:bg-halvi-900/30 z-0"
              initial={{ opacity: selectedMode === 'existing' ? 1 : 0 }}
              animate={{ opacity: selectedMode === 'existing' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Animated line underneath */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-halvi-500"
              initial={{ 
                width: selectedMode === 'existing' ? '100%' : '0%',
              }}
              animate={{ 
                width: selectedMode === 'existing' ? '100%' : '0%',
                x: selectedMode === 'existing' ? [0, 5, 0] : 0
              }}
              transition={{ 
                width: { duration: 0.3 },
                x: { repeat: selectedMode === 'existing' ? Infinity : 0, repeatType: "reverse", duration: 1.5 }
              }}
            />
          </motion.button>
        </div>
      </div>
      
      {/* Dashboard access section with animation */}
      {selectedMode === 'existing' && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 py-6 px-4 bg-white/5 backdrop-blur-sm dark:bg-gray-800/20 rounded-xl border border-gray-200/30 dark:border-gray-700/30"
        >
          <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Access Your Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Manage your existing business, track orders, and analyze performance all in one place.
          </p>
          <Button 
            onClick={() => navigate('/dashboard')}
            className="bg-halvi-500 hover:bg-halvi-600 text-white"
          >
            Go to Dashboard
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default BusinessModeSelector;


import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BusinessModeSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2">
          <motion.button
            whileHover={{ backgroundColor: "rgba(var(--halvi-200), 0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {}}
            className="py-4 px-6 text-center border-r border-gray-200 dark:border-gray-700 relative overflow-hidden group"
          >
            <span className="font-medium text-gray-900 dark:text-white relative z-10">New Businesses</span>
            <motion.div
              className="absolute inset-0 bg-halvi-100 dark:bg-halvi-900/50 z-0"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-halvi-500"
              initial={{ scaleX: 1 }}
              whileHover={{ scaleX: [1, 1.05, 1] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 1.5 
              }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ backgroundColor: "rgba(var(--halvi-200), 0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/dashboard")}
            className="py-4 px-6 text-center relative overflow-hidden group"
          >
            <span className="font-medium text-gray-600 dark:text-gray-300 relative z-10 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
              Existing Businesses
            </span>
            <motion.div
              className="absolute inset-0 bg-transparent z-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: "rgba(var(--halvi-100), 0.5)" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-0 h-1 bg-halvi-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BusinessModeSelector;

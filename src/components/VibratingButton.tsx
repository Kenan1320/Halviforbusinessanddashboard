
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Vibrate, ChevronDown } from "lucide-react";

interface VibratingButtonProps {
  text: string | React.ReactNode;
  link: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: {
    text: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}

const VibratingButton = ({ 
  text, 
  link, 
  icon, 
  className = "", 
  onClick,
  fullWidth = false,
  hasDropdown = false,
  dropdownItems = []
}: VibratingButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className={`relative ${fullWidth ? "w-full block" : "inline-block"}`}>
      <Link to={link} onClick={handleClick} className={fullWidth ? "w-full block" : ""}>
        <motion.div
          className={`relative inline-flex items-center gap-2 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full cursor-pointer shadow-lg shadow-amber-500/20 dark:shadow-amber-500/10 ${fullWidth ? "w-full justify-center" : ""} ${className}`}
          whileHover={{ scale: 1.05 }}
          animate={{
            y: [0, -3, 0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {icon || <Vibrate className="h-5 w-5 flex-shrink-0" />}
          <div className="font-semibold text-center">{text}</div>
          {hasDropdown && <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
          <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></span>
        </motion.div>
      </Link>
      
      {/* Dropdown Menu */}
      {hasDropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 mt-2 w-full min-w-[200px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="py-2">
                {dropdownItems.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.link}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-gray-800 dark:text-gray-200 transition-colors"
                  >
                    {item.icon && <div className="text-amber-500">{item.icon}</div>}
                    <span className="font-medium">{item.text}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default VibratingButton;

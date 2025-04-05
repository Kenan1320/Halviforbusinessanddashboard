
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Vibrate } from "lucide-react";

interface VibratingButtonProps {
  text: string | React.ReactNode;
  link: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const VibratingButton = ({ 
  text, 
  link, 
  icon, 
  className = "", 
  onClick,
  fullWidth = false
}: VibratingButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
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
        <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></span>
      </motion.div>
    </Link>
  );
};

export default VibratingButton;

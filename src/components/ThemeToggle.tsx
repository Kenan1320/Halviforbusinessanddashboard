
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-full p-0 flex items-center justify-center bg-transparent"
    >
      <motion.div
        animate={{ 
          rotate: theme === "dark" ? 0 : 180,
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 0.5, 
          scale: { 
            repeat: 0,
            duration: 0.3
          }
        }}
        className="relative w-5 h-5"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: theme === "dark" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500/90" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: theme === "dark" ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] text-halvi-600/90" />
        </motion.div>
      </motion.div>
    </Button>
  );
}

export default ThemeToggle;

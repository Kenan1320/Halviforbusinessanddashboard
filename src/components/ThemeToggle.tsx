
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure theme toggle only appears after hydration to avoid UI flicker
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  if (!mounted) {
    return null;
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <motion.div
        animate={{ 
          rotate: theme === "dark" ? 0 : 180,
        }}
        transition={{ 
          duration: 0.5
        }}
        className="relative w-4 h-4"
      >
        <motion.div
          initial={false}
          animate={{ opacity: theme === "dark" ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-[1rem] w-[1rem] text-amber-400" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: theme === "dark" ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-[1rem] w-[1rem] text-slate-700" />
        </motion.div>
      </motion.div>
    </Button>
  );
}

export default ThemeToggle;

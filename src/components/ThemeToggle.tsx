
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure theme toggle only appears after hydration to avoid UI flicker
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    toast.success(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`, {
      duration: 1500,
      position: "bottom-right"
    });
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
      className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 overflow-hidden"
    >
      <motion.div 
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative w-4 h-4"
      >
        {theme === "dark" ? (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Moon className="h-4 w-4 text-gray-100" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Sun className="h-4 w-4 text-amber-400" />
          </motion.div>
        )}
      </motion.div>
    </Button>
  );
}

export default ThemeToggle;

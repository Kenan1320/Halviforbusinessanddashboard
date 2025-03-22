
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full p-0 flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative w-5 h-5"
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] absolute top-0 left-0" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] absolute top-0 left-0" />
        )}
      </motion.div>
    </Button>
  );
}

export default ThemeToggle;

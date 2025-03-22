
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="px-3 flex items-center gap-2"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-[1rem] w-[1rem]" />
          <span className="text-sm">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-[1rem] w-[1rem]" />
          <span className="text-sm">Dark</span>
        </>
      )}
    </Button>
  );
}

export default ThemeToggle;

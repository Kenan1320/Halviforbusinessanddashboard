
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[366px]", className)}>
      <div className="absolute inset-y-0 left-0 right-0 z-10 mx-auto w-full max-w-[366px] rounded-[3rem] border-[14px] border-black bg-black shadow-xl dark:border-gray-800">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-1/3 -translate-x-1/2 rounded-b-[1rem] bg-black dark:bg-gray-800"></div>
        <div className="absolute left-1/2 top-[0.375rem] z-20 h-1.5 w-16 -translate-x-1/2 rounded-[0.25rem] bg-gray-800 dark:bg-gray-700"></div>
        <div className="absolute bottom-1 left-1/2 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-gray-800 dark:bg-gray-700"></div>

        <div className="overflow-hidden rounded-[2rem] bg-white transition-colors duration-200 dark:bg-gray-950">
          <div className="relative aspect-[9/19] w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneFrame;

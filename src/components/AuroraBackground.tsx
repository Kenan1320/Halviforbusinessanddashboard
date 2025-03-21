
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  className?: string;
  fullHeight?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  fullHeight = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-white dark:bg-black text-slate-950 dark:text-white transition-all",
        fullHeight && "min-h-screen",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "aurora-bg w-full h-full",
            showRadialGradient && "radial-mask"
          )}
        ></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;

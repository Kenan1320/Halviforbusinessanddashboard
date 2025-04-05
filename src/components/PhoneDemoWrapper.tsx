
import React from "react";
import AutoSwipeDemo from "./AutoSwipeDemo";

interface PhoneDemoWrapperProps {
  children?: React.ReactNode;
}

export default function PhoneDemoWrapper({ children }: PhoneDemoWrapperProps) {
  return (
    <div className="relative">
      {/* The phone demo */}
      <AutoSwipeDemo />
      
      {/* Increased space buffer to prevent content overlap - doubled from before */}
      <div className="h-[192px] md:h-[256px]"></div>
      
      {/* Optional additional content */}
      {children}
    </div>
  );
}

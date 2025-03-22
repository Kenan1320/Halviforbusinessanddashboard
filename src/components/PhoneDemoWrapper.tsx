
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
      
      {/* Space buffer to prevent content overlap */}
      <div className="h-32 md:h-40"></div>
      
      {/* Optional additional content */}
      {children}
    </div>
  );
}

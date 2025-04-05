
import React from "react";
import AutoSwipeDemo from "./AutoSwipeDemo";
import { useLocation } from "react-router-dom";

interface PhoneDemoWrapperProps {
  children?: React.ReactNode;
}

export default function PhoneDemoWrapper({ children }: PhoneDemoWrapperProps) {
  const location = useLocation();
  
  // Don't show phone demo on any affiliate pages
  if (location.pathname === "/affiliates" || 
      location.pathname === "/affiliate" || 
      location.pathname.includes("affiliate")) {
    return <div>{children}</div>;
  }
  
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

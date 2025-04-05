
import React, { useState, useEffect } from "react";
import AutoSwipeDemo from "./AutoSwipeDemo";
import { useLocation, useNavigate } from "react-router-dom";
import ComingSoonPopup from "./ComingSoonPopup";

interface PhoneDemoWrapperProps {
  children?: React.ReactNode;
}

export default function PhoneDemoWrapper({ children }: PhoneDemoWrapperProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showComingSoonPopup, setShowComingSoonPopup] = useState(false);
  const [serviceName, setServiceName] = useState("");
  
  useEffect(() => {
    // Check if current path needs a coming soon popup
    const comingSoonRoutes = {
      "/professional": "Halvi Professionals",
      "/professionals": "Halvi Professionals",
      "/therapist": "Halvi Professionals",
      "/counselor": "Halvi Professionals",
      "/lawyer": "Halvi Professionals",
      "/rides": "Halvi Drivers",
      "/eats": "Halvi Eats"
    };
    
    const currentPath = location.pathname;
    
    if (comingSoonRoutes[currentPath as keyof typeof comingSoonRoutes]) {
      setServiceName(comingSoonRoutes[currentPath as keyof typeof comingSoonRoutes]);
      setShowComingSoonPopup(true);
    } else {
      setShowComingSoonPopup(false);
    }
  }, [location]);
  
  const handleClosePopup = () => {
    setShowComingSoonPopup(false);
    navigate('/');
  };
  
  // Don't show phone demo on these pages
  const excludedRoutes = ["/affiliates", "/affiliate", "/affiliate-program"];
  
  if (excludedRoutes.includes(location.pathname)) {
    return <div>{children}</div>;
  }
  
  return (
    <div className="relative">
      {/* The phone demo */}
      <AutoSwipeDemo />
      
      {/* Increased space buffer to prevent content overlap */}
      <div className="h-[192px] md:h-[256px]"></div>
      
      {/* Optional additional content */}
      {children}
      
      {/* Coming Soon Popup */}
      {showComingSoonPopup && (
        <ComingSoonPopup 
          serviceName={serviceName} 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
}

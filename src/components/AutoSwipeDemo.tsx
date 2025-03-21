
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

interface DemoScreen {
  id: number;
  image: string;
  title: string;
  color: string;
  logo?: boolean;
  description?: string;
}

const demoScreens: DemoScreen[] = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Halvi Local",
    color: "bg-blue-600",
    logo: true,
    description: "Discover halal businesses near you"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Halvi Mall",
    color: "bg-purple-600",
    logo: true,
    description: "Shop halal products online"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Halvi Eats",
    color: "bg-rose-600",
    logo: true,
    description: "Order halal food delivery"
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "Halvi Rides",
    color: "bg-emerald-600",
    logo: true,
    description: "Book halal-friendly rides"
  },
];

export function AutoSwipeDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + direction;
        if (nextIndex >= demoScreens.length - 1) {
          setDirection(-1);
          return demoScreens.length - 1;
        } else if (nextIndex <= 0) {
          setDirection(1);
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold mb-3">Experience Halvi</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          See how our platform connects communities with verified halal businesses and services
        </p>
      </div>
      
      <PhoneFrame>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="absolute inset-0 flex flex-col"
          >
            <div className={`flex-1 flex flex-col ${demoScreens[currentIndex].color} text-white`}>
              <div className="h-14 flex items-center justify-center border-b border-white/10">
                <span className="text-white font-medium text-lg">
                  {demoScreens[currentIndex].title}
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                {demoScreens[currentIndex].logo && (
                  <img
                    src="/logo.png"
                    alt="Halvi Logo"
                    className="w-24 h-24 mb-6"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{demoScreens[currentIndex].title}</h3>
                <p className="text-white/80">{demoScreens[currentIndex].description}</p>
                
                <div className="mt-10 w-full">
                  {currentIndex === 0 && (
                    <>
                      <div className="bg-white/10 rounded-lg p-3 mb-3 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                        <div>
                          <div className="h-3 w-24 bg-white/20 rounded-full mb-2"></div>
                          <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 mb-3 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                        <div>
                          <div className="h-3 w-20 bg-white/20 rounded-full mb-2"></div>
                          <div className="h-2 w-14 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {currentIndex === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 rounded-lg p-2 flex flex-col items-center">
                          <div className="w-full h-20 bg-white/20 rounded-md mb-2"></div>
                          <div className="h-2 w-12 bg-white/20 rounded-full mb-1"></div>
                          <div className="h-2 w-8 bg-white/10 rounded-full"></div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2 flex flex-col items-center">
                          <div className="w-full h-20 bg-white/20 rounded-md mb-2"></div>
                          <div className="h-2 w-12 bg-white/20 rounded-full mb-1"></div>
                          <div className="h-2 w-8 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {currentIndex === 2 && (
                    <>
                      <div className="bg-white/10 rounded-lg p-3 mb-3 flex items-center">
                        <div className="w-16 h-16 rounded-md bg-white/20 mr-3"></div>
                        <div>
                          <div className="h-3 w-24 bg-white/20 rounded-full mb-2"></div>
                          <div className="h-2 w-20 bg-white/10 rounded-full mb-2"></div>
                          <div className="h-4 w-12 bg-white/30 rounded-md"></div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {currentIndex === 3 && (
                    <>
                      <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/40"></div>
                      </div>
                      <div className="h-3 w-32 bg-white/20 rounded-full mx-auto mb-3"></div>
                      <div className="h-2 w-40 bg-white/10 rounded-full mx-auto"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </PhoneFrame>
      
      <div className="flex justify-center mt-8 space-x-2">
        {demoScreens.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-halvi-600 dark:bg-halvi-400"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoSwipeDemo;

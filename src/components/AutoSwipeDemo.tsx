
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

interface DemoScreen {
  id: number;
  image: string;
  title: string;
}

const demoScreens: DemoScreen[] = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Halvi Local",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Halvi Mall",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Halvi Eats",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "Halvi Rides",
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
    <div className="relative py-20">
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
            <div className="flex-1 bg-halvi-50 dark:bg-halvi-950 flex flex-col">
              <div className="h-12 bg-halvi-600 dark:bg-halvi-800 flex items-center justify-center">
                <span className="text-white font-medium">
                  {demoScreens[currentIndex].title}
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <img
                  src={demoScreens[currentIndex].image}
                  alt={demoScreens[currentIndex].title}
                  className="max-w-full max-h-full object-contain"
                />
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


import React from "react";
import { motion } from "framer-motion";

interface BusinessLogo {
  name: string;
  id: number;
  logoSvg: React.ReactNode;
}

const businessLogos: BusinessLogo[] = [
  {
    id: 1,
    name: "Shawarma Press",
    logoSvg: (
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-xl fill-current">
          SHAWARMA PRESS
        </text>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Baraka Supermarket",
    logoSvg: (
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-xl fill-current">
          BARAKA
        </text>
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" className="font-semibold text-lg fill-current">
          SUPERMARKET
        </text>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Khalil Center",
    logoSvg: (
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-xl fill-current">
          KHALIL CENTER
        </text>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Yellow Cab",
    logoSvg: (
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-xl fill-current">
          YELLOW CAB
        </text>
      </svg>
    ),
  },
  {
    id: 5,
    name: "Ride For Relief",
    logoSvg: (
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-xl fill-current">
          RIDE FOR RELIEF
        </text>
      </svg>
    ),
  },
  {
    id: 6,
    name: "Al-Noor Meat & Grocery",
    logoSvg: (
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-xl fill-current">
          AL-NOOR
        </text>
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" className="font-semibold text-lg fill-current">
          MEAT & GROCERY
        </text>
      </svg>
    ),
  },
];

export default function BusinessLogoCarousel() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Built on Trust. Driven by Halvi to Scale
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Trusted by leading halal businesses across the community
          </p>
        </div>

        <div className="relative">
          {/* Scrolling logos row */}
          <div className="flex w-full overflow-hidden my-12">
            <motion.div 
              className="flex items-center justify-around gap-16 animate-none"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 25,
                ease: "linear"
              }}
            >
              {businessLogos.map((logo) => (
                <LogoItem key={logo.id} logo={logo} />
              ))}
              {businessLogos.map((logo) => (
                <LogoItem key={`repeat-${logo.id}`} logo={logo} />
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ logo }: { logo: BusinessLogo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center h-24 w-44 sm:h-28 sm:w-56 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
    >
      {logo.logoSvg}
    </motion.div>
  );
}

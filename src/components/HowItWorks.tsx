
import React from "react";
import { motion } from "framer-motion";
import { SearchIcon, CreditCard, Truck, ThumbsUp } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export function HowItWorks() {
  const steps = [
    {
      icon: <SearchIcon className="w-6 h-6" />,
      title: "Discover",
      description: "Find halal businesses, products, food, and transportation options near you.",
      delay: 0.1,
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Order & Pay",
      description: "Place orders and make secure payments for products and services.",
      delay: 0.2,
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Delivery",
      description: "Get your orders delivered right to your doorstep by our trusted drivers.",
      delay: 0.3,
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Enjoy & Review",
      description: "Enjoy your halal experience and help others by leaving reviews.",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16 lg:mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
              >
                How It Works
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Using Halvi is simple and intuitive. Follow these steps to get started.
              </motion.p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            {/* Connection line for larger screens */}
            <div className="absolute top-8 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-halvi-400 to-transparent hidden lg:block"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center group">
                    <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-halvi-200 dark:group-hover:bg-halvi-800 shadow-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm lg:text-base max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

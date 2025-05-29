
import React from "react";
import { Store, ShoppingBag, Utensils, Car } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import FeatureCard from "./FeatureCard";

export function Features() {
  const features = [
    {
      icon: <Store className="w-6 h-6" />,
      title: "Halvi Local",
      description: "Connect with verified halal businesses in your local area.",
      href: "/local",
      delay: 0.1,
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Halvi Mall",
      description: "Shop for verified halal products from trusted sellers.",
      href: "/mall",
      delay: 0.2,
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Halvi Eats",
      description: "Order delicious halal food from restaurants near you.",
      href: "/eats",
      delay: 0.3,
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Halvi Rides",
      description: "Book safe and reliable transportation services.",
      href: "/rides",
      delay: 0.4,
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white dark:bg-gray-950">
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
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Explore the complete Halvi ecosystem designed to connect you with halal products and services.
              </motion.p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

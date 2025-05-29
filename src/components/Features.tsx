
import React from "react";
import { Store, ShoppingBag, Utensils, Car } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import FeatureCard from "./FeatureCard";

export function Features() {
  const features = [
    {
      icon: <Store className="w-7 h-7" />,
      title: "Halvi Local",
      description: "Connect with verified halal businesses in your local area for authentic products and services.",
      href: "/local",
      delay: 0.1,
    },
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      title: "Halvi Mall",
      description: "Shop for verified halal products from trusted sellers with convenient delivery options.",
      href: "/mall",
      delay: 0.2,
    },
    {
      icon: <Utensils className="w-7 h-7" />,
      title: "Halvi Eats",
      description: "Order delicious halal food from restaurants near you with fast, reliable delivery.",
      href: "/eats",
      delay: 0.3,
    },
    {
      icon: <Car className="w-7 h-7" />,
      title: "Halvi Rides",
      description: "Book safe and reliable transportation services with trusted drivers in your community.",
      href: "/rides",
      delay: 0.4,
    },
  ];

  return (
    <section id="features" className="relative py-20 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-halvi-100/30 dark:bg-halvi-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-orange-100/30 dark:bg-orange-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-20 lg:mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-3 rounded-full bg-halvi-50 dark:bg-halvi-950 border border-halvi-200 dark:border-halvi-800 mb-8"
              >
                <span className="text-halvi-600 dark:text-halvi-400 font-semibold text-sm uppercase tracking-wider">
                  Our Services
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Everything You Need
                </span>
                <br />
                <span className="bg-gradient-to-r from-halvi-600 via-halvi-500 to-halvi-400 bg-clip-text text-transparent">
                  In One Platform
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Explore the complete Halvi ecosystem designed to connect you with halal products, services, and experiences.
              </motion.p>
            </div>
          </ScrollAnimation>

          {/* Enhanced grid with staggered animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: feature.delay,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                  className="h-full border border-gray-200/50 dark:border-gray-800/50 hover:border-halvi-300/50 dark:hover:border-halvi-700/50 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Enhanced call-to-action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              whileInView={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to experience the future of halal services?
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-halvi-600 to-halvi-700 hover:from-halvi-700 hover:to-halvi-800 text-white rounded-full font-semibold shadow-xl shadow-halvi-500/25 hover:shadow-2xl hover:shadow-halvi-500/40 transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;

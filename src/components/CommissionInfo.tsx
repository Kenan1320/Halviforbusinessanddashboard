
import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import GlassCard from "./GlassCard";

const commissionInfo = [
  {
    title: "Halvi Local",
    description: "For local businesses listed on our platform.",
    rates: [
      { tier: "Standard", rate: "10%", description: "For businesses just starting on Halvi" },
      { tier: "Premium", rate: "8%", description: "For businesses with high customer ratings" },
      { tier: "Elite", rate: "5%", description: "For high-volume, long-term partners" },
    ],
    delay: 0.1,
  },
  {
    title: "Halvi Mall",
    description: "For sellers listing products on our marketplace.",
    rates: [
      { tier: "Standard", rate: "15%", description: "For new sellers on Halvi Mall" },
      { tier: "Premium", rate: "12%", description: "For sellers with 100+ products" },
      { tier: "Elite", rate: "8%", description: "For top-performing sellers" },
    ],
    delay: 0.2,
  },
  {
    title: "Halvi Eats",
    description: "For restaurants offering food delivery.",
    rates: [
      { tier: "Standard", rate: "20%", description: "For new restaurants" },
      { tier: "Premium", rate: "18%", description: "For restaurants with 4+ star ratings" },
      { tier: "Elite", rate: "15%", description: "For high-volume restaurants" },
    ],
    delay: 0.3,
  },
  {
    title: "Halvi Rides",
    description: "For drivers providing transportation services.",
    rates: [
      { tier: "Standard", rate: "20%", description: "For new drivers" },
      { tier: "Premium", rate: "15%", description: "For drivers with 4.8+ ratings" },
      { tier: "Elite", rate: "10%", description: "For drivers completing 100+ rides monthly" },
    ],
    delay: 0.4,
  },
];

export function CommissionInfo() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Commission Structure
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
            >
              Transparent and competitive commission rates for all our services.
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commissionInfo.map((info) => (
            <GlassCard key={info.title} delay={info.delay}>
              <h3 className="text-xl font-semibold mb-2 text-halvi-600 dark:text-halvi-400">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{info.description}</p>
              
              <div className="space-y-3">
                {info.rates.map((rate) => (
                  <div key={rate.tier} className="border-b border-gray-200 dark:border-gray-800 pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{rate.tier}</span>
                      <span className="text-lg font-bold text-halvi-600 dark:text-halvi-400">{rate.rate}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{rate.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommissionInfo;

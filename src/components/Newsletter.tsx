
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="aurora-bg w-full h-full opacity-50"></div>
            </div>
            
            <div className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-md p-8 lg:p-12 rounded-2xl lg:rounded-3xl">
              <div className="text-center max-w-2xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
                >
                  Stay Updated
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-300 mb-8 text-base lg:text-lg leading-relaxed"
                >
                  Subscribe to our newsletter to receive the latest updates, promotions, and news from Halvi.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-halvi-500 transition-all duration-300"
                  />
                  <Button className="bg-halvi-600 hover:bg-halvi-700 text-white px-6 py-2 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </Button>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-4 text-sm text-gray-500 dark:text-gray-400"
                >
                  We respect your privacy. Unsubscribe at any time.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

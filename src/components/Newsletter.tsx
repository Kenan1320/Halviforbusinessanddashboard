
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="aurora-bg w-full h-full opacity-50"></div>
          </div>
          
          <div className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-md p-8 md:p-12 rounded-2xl">
            <div className="text-center max-w-2xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl"
              >
                Stay Updated
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 text-gray-600 dark:text-gray-300"
              >
                Subscribe to our newsletter to receive the latest updates, promotions, and news from Halvi.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 flex flex-col sm:flex-row gap-2 justify-center"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="sm:min-w-[300px] bg-white dark:bg-gray-800"
                />
                <Button>Subscribe</Button>
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
    </section>
  );
}

export default Newsletter;


import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, TrendingUp, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const RegularAffiliate = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-8 rounded-xl border border-amber-100 dark:border-amber-900">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-amber-500/5 rounded-lg transform group-hover:scale-95 transition-all duration-300"></div>
            <div className="relative z-10 p-6">
              <DollarSign className="h-10 w-10 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">20% Commission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn 20% commission on all orders from every business you refer.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-amber-500/5 rounded-lg transform group-hover:scale-95 transition-all duration-300"></div>
            <div className="relative z-10 p-6">
              <TrendingUp className="h-10 w-10 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Up to 40K Orders</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn commissions on up to 40,000 orders from each referred business.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-amber-500/5 rounded-lg transform group-hover:scale-95 transition-all duration-300"></div>
            <div className="relative z-10 p-6">
              <Users className="h-10 w-10 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Unlimited Referrals</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No cap on how many businesses you can refer and earn from.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="relative my-16">
          <h2 className="text-2xl font-bold mb-10 text-center">How It Works</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-300 to-orange-300 z-0"></div>
            
            <div className="space-y-24 relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 border-4 border-amber-200 dark:border-amber-700 shadow-lg">
                  <div className="bg-amber-100 dark:bg-amber-900 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-300">1</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 ml-auto w-full md:w-1/2 md:ml-1/2">
                  <h3 className="font-semibold text-lg mb-2">Apply</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out our application to join the affiliate program. We review applications quickly to help you get started.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 border-4 border-amber-200 dark:border-amber-700 shadow-lg">
                  <div className="bg-amber-100 dark:bg-amber-900 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-300">2</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mr-auto w-full md:w-1/2">
                  <h3 className="font-semibold text-lg mb-2">Get Approved</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We'll review your application and provide you with affiliate tools, tracking links, and promotional materials.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 border-4 border-amber-200 dark:border-amber-700 shadow-lg">
                  <div className="bg-amber-100 dark:bg-amber-900 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-300">3</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 ml-auto w-full md:w-1/2 md:ml-1/2">
                  <h3 className="font-semibold text-lg mb-2">Refer Businesses</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Share your unique affiliate link with businesses in your network. Help them discover the benefits of joining Halvi.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 border-4 border-amber-200 dark:border-amber-700 shadow-lg">
                  <div className="bg-amber-100 dark:bg-amber-900 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-300">4</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mr-auto w-full md:w-1/2">
                  <h3 className="font-semibold text-lg mb-2">Get Paid</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Earn 20% commission on orders from your referred businesses (up to 40K orders each). Payments are processed monthly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-6">Join Our Affiliate Program</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Earn passive income by referring businesses to Halvi. With 20% commission on up to 40,000 orders per business, your earning potential is substantial.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-600">
            <a href="#apply">Apply as Affiliate</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegularAffiliate;


import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const RegularAffiliate = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <DollarSign className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">20% Commission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Earn 20% commission on all orders from every business you refer.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <TrendingUp className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Up to 40K Orders</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Earn commissions on up to 40,000 orders from each referred business.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <Users className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Unlimited Referrals</h3>
          <p className="text-gray-600 dark:text-gray-300">
            No cap on how many businesses you can refer and earn from.
          </p>
        </motion.div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Apply</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fill out our application to join the affiliate program.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Get Approved</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We'll review your application and provide you with affiliate tools.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Refer Businesses</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Share your unique affiliate link with businesses in your network.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="font-semibold mb-2">Get Paid</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Earn 20% commission on orders from your referred businesses (up to 40K orders each).
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Join Our Affiliate Program</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Earn passive income by referring businesses to Halvi. With 20% commission on up to 40,000 orders per business, your earning potential is substantial.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-600">
          <a href="#apply">Apply as Affiliate</a>
        </Button>
      </div>
    </div>
  );
};

export default RegularAffiliate;


import React from "react";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Users, TrendingUp, Share2 } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Affiliate() {
  const benefits = [
    {
      title: "Earn Commission",
      description: "Earn 10% of the first month's commission for every business you refer",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Customer Rewards",
      description: "Earn 5% of the customer's first purchase (up to $10)",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "No Cap on Earnings",
      description: "There's no limit to how much you can earn through referrals",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Easy Sharing",
      description: "Get custom referral links and promo codes to share with your network",
      icon: <Share2 className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground>
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Halvi Affiliate</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Earn commission by referring businesses and customers to Halvi.
                Join our affiliate program and grow with us.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Affiliate Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Why you should join our affiliate program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-halvi-50 dark:bg-halvi-900/30 rounded-lg text-halvi-600 dark:text-halvi-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">How Our Affiliate Program Works</h2>
              
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Apply",
                    description: "Fill out our online application form to join the program."
                  },
                  {
                    number: "02",
                    title: "Get Approved",
                    description: "Our team will review your application and approve it."
                  },
                  {
                    number: "03",
                    title: "Receive Materials",
                    description: "Get access to marketing materials, referral links, and promo codes."
                  },
                  {
                    number: "04",
                    title: "Start Referring",
                    description: "Share Halvi with businesses and customers in your network."
                  },
                  {
                    number: "05",
                    title: "Earn Commission",
                    description: "Earn commission for successful referrals. Payments are made monthly."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="mr-6 flex-shrink-0">
                      <span className="text-3xl font-bold text-halvi-500 dark:text-halvi-400">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Apply as an Affiliate</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="first-name">
                        First Name
                      </label>
                      <input 
                        id="first-name"
                        type="text" 
                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="last-name">
                        Last Name
                      </label>
                      <input 
                        id="last-name"
                        type="text" 
                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input 
                      id="phone"
                      type="tel" 
                      className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="website">
                      Website/Social Media (optional)
                    </label>
                    <input 
                      id="website"
                      type="url" 
                      className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="referral-plan">
                      How do you plan to refer businesses/customers?
                    </label>
                    <textarea 
                      id="referral-plan"
                      rows={4}
                      className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}


import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, Utensils, TrendingUp, Clock, Star } from "lucide-react";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";
import { motion } from "framer-motion";

export default function Eats() {
  const benefits = [
    {
      title: "More Orders",
      description: "Increase your daily orders and revenue through our platform",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "New Customers",
      description: "Reach customers specifically looking for halal dining options",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Efficient Deliveries",
      description: "Our delivery network ensures your food reaches customers promptly",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Restaurant Visibility",
      description: "Get featured in our app and gain visibility in your area",
      icon: <Utensils className="h-6 w-6" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Halvi Eats</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Partner with Halvi to offer food delivery from your halal restaurant.
                Reach more customers and grow your business with our platform.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Restaurant Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Why halal restaurants choose to partner with Halvi Eats
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
          
          <div className="text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/business/apply">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <AutoSwipeDemo />
        </div>
      </div>
      
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How Halvi Eats Works</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Easy Registration",
                    description: "Complete our online application process in minutes."
                  },
                  {
                    title: "Menu Integration",
                    description: "We help you set up your menu on our platform, optimized for online ordering."
                  },
                  {
                    title: "Tablet Installation",
                    description: "Receive a tablet to manage orders directly in your restaurant."
                  },
                  {
                    title: "Delivery Network",
                    description: "Access our network of delivery drivers to fulfill customer orders."
                  },
                  {
                    title: "Weekly Payments",
                    description: "Receive weekly payments for all completed orders."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-halvi-500 pl-4"
                  >
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <Button asChild className="mt-8 rounded-full px-8">
                <Link to="/business/restaurant">Apply Now</Link>
              </Button>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Commission Rates</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our competitive commission structure helps you maximize profits while expanding your customer base.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Standard Commission</span>
                    <span className="text-xl font-bold text-halvi-600 dark:text-halvi-400">15%</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Base rate for all restaurant partners</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Volume Discount</span>
                    <span className="text-xl font-bold text-halvi-600 dark:text-halvi-400">12%</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">For restaurants with 100+ orders per month</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Promotional Rate</span>
                    <span className="text-xl font-bold text-halvi-600 dark:text-halvi-400">10%</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">First 3 months for new restaurant partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-16">
        <BusinessAnnouncementCard />
      </div>
      
      <Footer />
    </div>
  );
}


import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, Building, MapPin, Star, CheckCircle, Clock } from "lucide-react";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";
import { motion } from "framer-motion";

export default function Local() {
  const benefits = [
    {
      title: "Increased Visibility",
      description: "Get discovered by thousands of customers looking for halal services in your area",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Verified Listings",
      description: "Stand out with a verified halal business listing that customers can trust",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Business Analytics",
      description: "Track performance and customer engagement through our business dashboard",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "24/7 Support",
      description: "Access our support team anytime you need assistance with your listing",
      icon: <Clock className="h-6 w-6" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Halvi Local</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                List your halal business on America's premier platform for halal businesses.
                Get discovered by customers looking specifically for halal services and products.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Halvi Local?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with customers specifically looking for halal businesses like yours
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
              <Link to="/business/apply">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Getting started with Halvi Local is easy
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 md:ml-px w-0.5 bg-gradient-to-b from-halvi-400 to-halvi-600"></div>
            
            {[
              {
                title: "Apply Online",
                description: "Fill out our simple online application with your business details.",
              },
              {
                title: "Verification",
                description: "Our team verifies your halal certification and business information.",
              },
              {
                title: "Create Profile",
                description: "Set up your business profile with photos, services, and details.",
              },
              {
                title: "Go Live",
                description: "Your business goes live on the Halvi Local platform for customers to discover.",
              },
              {
                title: "Grow Your Business",
                description: "Use Halvi tools to engage with customers and grow your business.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex md:items-center mb-12"
              >
                <div className="flex flex-col md:flex-row md:w-full items-start md:items-center">
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-halvi-100 dark:bg-halvi-900 border-2 border-halvi-500 text-halvi-600 dark:text-halvi-300 md:mx-auto">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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

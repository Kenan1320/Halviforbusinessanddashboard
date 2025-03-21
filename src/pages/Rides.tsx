
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, Car, DollarSign, Clock, Shield, Headphones } from "lucide-react";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Rides() {
  const driverBenefits = [
    {
      title: "Flexible Hours",
      description: "Work when you want — be your own boss",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Competitive Earnings",
      description: "Earn competitive rates with bonuses during peak hours",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Safety First",
      description: "Our platform prioritizes driver safety at all times",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "24/7 Support",
      description: "Access to support team whenever you need assistance",
      icon: <Headphones className="h-6 w-6" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Halvi Rides</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join our team of drivers and earn money on your own schedule.
                Be part of our mission to provide safe and reliable transportation.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Drive With Halvi</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                As a Halvi driver, you'll enjoy flexible hours, competitive earnings, and the satisfaction of helping connect communities with halal-friendly transportation options.
              </p>
              
              <div className="space-y-4 mb-8">
                {driverBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-2 bg-halvi-50 dark:bg-halvi-900/30 rounded-lg text-halvi-600 dark:text-halvi-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/business/driver">Apply to Drive <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Driver Requirements</h3>
                <ul className="space-y-4">
                  {[
                    "21 years or older",
                    "Valid driver's license",
                    "At least 1 year of driving experience",
                    "Clean driving record",
                    "Smartphone with iOS 13+ or Android 8+",
                    "Vehicle that's 15 years old or newer",
                    "Valid vehicle registration and insurance"
                  ].map((requirement, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="mr-3 flex-shrink-0 text-halvi-500 dark:text-halvi-400">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
              Getting started as a Halvi driver is simple
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Complete our online application with your information and documents."
              },
              {
                step: "02",
                title: "Background Check",
                description: "We'll verify your driving record and conduct a background check."
              },
              {
                step: "03",
                title: "Get Approved",
                description: "Once approved, download the Halvi Driver app and start accepting rides."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
              >
                <div className="text-4xl font-bold text-halvi-500 dark:text-halvi-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
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

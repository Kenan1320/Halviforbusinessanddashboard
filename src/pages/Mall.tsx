
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, ShoppingBag, Package, TrendingUp, Users } from "lucide-react";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";
import { motion } from "framer-motion";

export default function Mall() {
  const sellerBenefits = [
    {
      title: "Easy Storefront Setup",
      description: "Create your online store quickly with our user-friendly tools",
      icon: <ShoppingBag className="h-6 w-6" />
    },
    {
      title: "Secure Payments",
      description: "Process payments securely with multiple payment options",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Growth Opportunities",
      description: "Reach new customers and expand your business reach",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Community Connection",
      description: "Connect with a community specifically looking for halal products",
      icon: <Users className="h-6 w-6" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Halvi Mall</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Start selling your halal products online and reach customers across America.
                Join Halvi Mall to expand your business and connect with halal-conscious shoppers.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seller Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Why sellers choose Halvi Mall to grow their business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sellerBenefits.map((benefit, index) => (
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
              <Link to="/business/apply">Become a Seller <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
              Starting your online store on Halvi Mall is simple
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Apply to Sell",
                  description: "Complete our online application and submit your business details.",
                },
                {
                  number: "02",
                  title: "Verification Process",
                  description: "We verify your halal certification and business credentials.",
                },
                {
                  number: "03",
                  title: "Set Up Your Store",
                  description: "Create your online storefront and upload your products.",
                },
                {
                  number: "04",
                  title: "Start Selling",
                  description: "Once approved, your products become available to Halvi Mall customers.",
                },
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
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-16">
        <BusinessAnnouncementCard />
      </div>
      
      <Footer />
    </div>
  );
}

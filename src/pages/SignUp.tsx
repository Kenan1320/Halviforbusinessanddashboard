
import React from "react";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUp() {
  const benefits = [
    "Access to exclusive halal businesses and services",
    "Real-time tracking of orders and deliveries",
    "Save favorite restaurants and stores",
    "Exclusive promotions and discounts",
    "Secure payment methods for all transactions",
    "24/7 customer support",
    "Rate and review businesses to help the community"
  ];

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground>
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Halvi</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Create your account to access America's premier platform for halal services.
                Connect with verified halal businesses in your community.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white dark:bg-gray-800 shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
                  
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
                      <label className="block text-sm font-medium mb-1" htmlFor="password">
                        Password
                      </label>
                      <input 
                        id="password"
                        type="password" 
                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="confirm-password">
                        Confirm Password
                      </label>
                      <input 
                        id="confirm-password"
                        type="password" 
                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                      />
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Create Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  
                  <div className="text-center mt-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      Already have an account?{" "}
                      <Link to="/signin" className="text-halvi-600 dark:text-halvi-400 font-medium">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Benefits of Joining Halvi</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="mr-3 flex-shrink-0 p-1 bg-halvi-100 dark:bg-halvi-900/30 rounded-full text-halvi-600 dark:text-halvi-300">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-6 mt-8">
                <h4 className="font-semibold text-lg mb-3">Looking to grow your business?</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you're a business owner interested in partnering with Halvi, visit our business page to learn about our partnership opportunities.
                </p>
                <Button asChild variant="outline">
                  <Link to="/business">Business Opportunities <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Halvi?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of users who are already enjoying the convenience of verified halal services.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link to="/local" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-all">
                <h3 className="font-semibold mb-1">Halvi Local</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Discover halal businesses</p>
                <ArrowRight className="h-4 w-4 text-halvi-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/mall" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-all">
                <h3 className="font-semibold mb-1">Halvi Mall</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Shop halal products</p>
                <ArrowRight className="h-4 w-4 text-halvi-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/eats" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-all">
                <h3 className="font-semibold mb-1">Halvi Eats</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Order halal food</p>
                <ArrowRight className="h-4 w-4 text-halvi-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

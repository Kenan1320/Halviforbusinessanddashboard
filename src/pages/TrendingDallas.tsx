
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, MapPin, Building, ShoppingBag, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

export default function TrendingDallas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <AuroraBackground className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">Trending in Dallas</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Halvi is Launching in <span className="text-gradient">Dallas</span>!
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Halvi is coming to Dallas—and we're starting with businesses that we'll grant highest visibility as Halvi 
              reaches new heights every month. Halvi is expected to be the go-to Halal Economy exchange locally and the 
              online halal stores marketplace with millions of weekly visitors.
            </p>
            
            <p className="text-xl font-medium mb-12">
              Be among the first to get our exclusive{" "}
              <Link to="/grow-more" className="inline-block relative">
                <motion.span
                  className="text-gradient font-bold"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: ["0 0 0px rgba(74, 97, 251, 0)", "0 0 10px rgba(74, 97, 251, 0.5)", "0 0 0px rgba(74, 97, 251, 0)"]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 1.5 
                  }}
                >
                  growth
                </motion.span>
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-halvi-400 to-halvi-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 1.5,
                    delay: 0.5
                  }}
                />
              </Link>
              {" "}opportunities.
            </p>
            
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/business/apply" className="inline-flex items-center gap-2">
                Claim Your Spot <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </AuroraBackground>
      
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What Halvi Offers Dallas Businesses</h2>
            
            <div className="space-y-16">
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">1. Local Visibility That Matters</h3>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Halvi puts local Dallas businesses at the forefront. When someone searches for halal food, services, or shops, 
                  they'll see local, not national. Not ads. Not noise. Just businesses like yours.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  It's about connecting you to the right audience—quickly, clearly, and without barriers.
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
              </section>
              
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">2. A Platform Designed Around You</h3>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  We know that running a business is already a full-time effort. That's why Halvi is built to fit into 
                  your workflow, not add more to it.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Whether you're running a restaurant, managing a small grocery, offering services, or selling products, 
                  Halvi provides:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-halvi-500 mt-2"></div>
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      A professional storefront that's easy to set up and update
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-halvi-500 mt-2"></div>
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Order management tools for in-store, delivery, or pickup
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-halvi-500 mt-2"></div>
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Clean design and mobile access—so you're in control, even on the go
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-halvi-500 mt-2"></div>
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      A dashboard that simplifies your day-to-day operations
                    </span>
                  </li>
                </ul>
                
                <div className="bg-halvi-50 dark:bg-halvi-900/20 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-semibold mb-4">Your Halvi dashboard gives you:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Shop Management:</strong> Control your shop profile, update business hours, and upload halal certification
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Product Management:</strong> Add/edit products, organize categories, manage inventory, and display clear availability
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Order Management:</strong> See new orders in real time, update order status, and issue invoices
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Payments & Earnings:</strong> Track revenue, view commission deductions, and manage payouts through Stripe or your chosen method
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Customer Communication:</strong> Respond to questions, address reviews, and build trust directly through chat
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-halvi-600 dark:text-halvi-400 mt-1">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Analytics & Reports:</strong> Understand what's selling, when, and to whom—with clear insights to help you grow
                      </span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  By joining Halvi, your business is placed in front of a built-in audience that shares your values and is actively seeking businesses like yours.
                </p>
              </section>
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-flex gap-3 items-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4 rounded-2xl mb-8">
                <Lightbulb className="h-8 w-8 text-amber-500" />
                <p className="text-lg font-medium">Be part of Dallas's growing halal economy</p>
              </div>
              
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/business/apply">Apply for Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}


import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight } from "lucide-react";

export default function TrendingDallas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AuroraBackground showRadialGradient>
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Halvi is Launching in Dallas!
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Halvi is coming to Dallas—and we're starting with businesses that we'll grant highest visibility 
                as Halvi reaches new heights every month.
              </motion.p>
              
              <motion.p 
                className="text-lg mb-10 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Halvi is expected to be the go-to Halal Economy exchange locally and the online 
                halal stores marketplace with millions of weekly visitors. Be among the first to 
                get our exclusive{" "}
                <Link 
                  to="/grow-more"
                  className="relative inline-block group"
                >
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
                </Link>{" "}
                opportunities.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/business">Join Halvi Business</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AuroraBackground>
        
        <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What Halvi Offers Dallas Businesses</h2>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6">1. Local Visibility That Matters</h3>
                  <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    Halvi puts local Dallas businesses at the forefront. When someone searches for halal food, 
                    services, or shops, they'll see local, not national. Not ads. Not noise. Just businesses like yours.
                  </p>
                  <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    It's about connecting you to the right audience—quickly, clearly, and without barriers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">2. A Platform Designed Around You</h3>
                  <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    We know that running a business is already a full-time effort. That's why Halvi is built 
                    to fit into your workflow, not add more to it.
                  </p>
                  <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    Whether you're running a restaurant, managing a small grocery, offering services, or selling 
                    products, Halvi provides:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>A professional storefront that's easy to set up and update</li>
                    <li>Order management tools for in-store, delivery, or pickup</li>
                    <li>Clean design and mobile access—so you're in control, even on the go</li>
                    <li>A dashboard that simplifies your day-to-day operations</li>
                  </ul>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4">Your Halvi dashboard gives you:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                      <li>Shop Management: Control your shop profile, update business hours, and upload halal certification</li>
                      <li>Product Management: Add/edit products, organize categories, manage inventory, and display clear availability</li>
                      <li>Order Management: See new orders in real time, update order status, and issue invoices</li>
                      <li>Payments & Earnings: Track revenue, view commission deductions, and manage payouts through Stripe or your chosen method</li>
                      <li>Customer Communication: Respond to questions, address reviews, and build trust directly through chat</li>
                      <li>Analytics & Reports: Understand what's selling, when, and to whom—with clear insights to help you grow</li>
                    </ul>
                    <p className="mt-4 text-lg italic text-gray-700 dark:text-gray-300">
                      By joining Halvi, your business is placed in front of a built-in audience that shares your values and is actively seeking businesses like yours.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <Link 
                  to="/grow-more" 
                  className="inline-flex items-center text-lg font-medium text-halvi-600 dark:text-halvi-400 hover:text-halvi-700 dark:hover:text-halvi-300"
                >
                  Learn more about growing with Halvi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/business/apply">Apply for Early Access</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

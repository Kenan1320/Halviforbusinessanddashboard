
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Utensils, Search, Clock, Truck, ShoppingBag, ArrowRight } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import ScrollAnimation from "@/components/ScrollAnimation";
import FeatureCard from "@/components/FeatureCard";
import GlassCard from "@/components/GlassCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const cuisineTypes = [
  "Middle Eastern", "South Asian", "Mediterranean", "Turkish", 
  "African", "Malaysian", "Indonesian", "American Halal"
];

export default function Eats() {
  return (
    <>
      <Navbar />
      
      <AuroraBackground className="pt-24 pb-16">
        <div className="pt-16 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-halvi-50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800 text-halvi-700 dark:text-halvi-300">
              Halvi Eats
            </span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              <span className="text-gradient">Halal Food</span> Delivery
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Order delicious halal food from verified restaurants near you. 
              Enjoy fast delivery and a wide variety of cuisines.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/order">Order Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/business/restaurant">Partner with Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative w-full rounded-lg overflow-hidden h-[400px] shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-halvi-600/10 to-halvi-400/10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-medium text-white">Halvi Eats App Demo</span>
          </div>
        </div>
      </AuroraBackground>
      
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                How Halvi Eats Works
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Ordering halal food has never been easier.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="Browse Restaurants"
              description="Discover halal restaurants and browse their menus."
              delay={0.1}
            />
            <FeatureCard
              icon={<ShoppingBag className="w-6 h-6" />}
              title="Place Your Order"
              description="Select your items and customize them to your liking."
              delay={0.2}
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Track Your Order"
              description="Get real-time updates on your order status."
              delay={0.3}
            />
            <FeatureCard
              icon={<Truck className="w-6 h-6" />}
              title="Fast Delivery"
              description="Receive your food delivered to your doorstep."
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Cuisines
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Explore a variety of halal cuisines from around the world.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cuisineTypes.map((cuisine, index) => (
              <motion.div
                key={cuisine}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-gray-900 dark:text-white font-medium">{cuisine}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <GlassCard>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  For Restaurant Owners
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Partner with Halvi Eats to reach more customers and grow your business.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>Reach more customers and increase your revenue</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>Easy-to-use tablet for order management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>Marketing support to promote your restaurant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>Access to delivery drivers network</span>
                  </li>
                </ul>
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/business/restaurant">Partner with Us</Link>
                </Button>
              </GlassCard>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative z-10 rounded-lg overflow-hidden shadow-xl h-[400px]"
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-halvi-500/10">
                    <Utensils className="w-16 h-16 text-halvi-500 opacity-50" />
                  </div>
                </motion.div>
                <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-halvi-200 dark:border-halvi-800 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <Truck className="w-12 h-12 mx-auto mb-6 text-halvi-500" />
              <h2 className="text-3xl font-bold mb-6">Become a Delivery Driver</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Join our team of delivery drivers and earn money on your own schedule.
                Flexible hours, competitive pay, and weekly payouts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/business/driver">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/driver-info">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
      <Footer />
    </>
  );
}

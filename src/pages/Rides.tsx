
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, CreditCard, Star, ArrowRight } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import ScrollAnimation from "@/components/ScrollAnimation";
import FeatureCard from "@/components/FeatureCard";
import GlassCard from "@/components/GlassCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const rideTypes = [
  "Standard", "Premium", "Family", "Group"
];

export default function Rides() {
  return (
    <>
      <Navbar />
      
      <AuroraBackground className="pt-24 pb-16">
        <div className="pt-16 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-halvi-50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800 text-halvi-700 dark:text-halvi-300">
              Halvi Rides
            </span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Safe & Reliable <span className="text-gradient">Transportation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Book safe, reliable, and comfortable rides with verified drivers. 
              Travel with peace of mind knowing your journey is in good hands.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/book-ride">Book a Ride</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/business/driver">Become a Driver</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative w-full rounded-lg overflow-hidden h-[400px] shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-halvi-600/10 to-halvi-400/10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-medium text-white">Halvi Rides App Demo</span>
          </div>
        </div>
      </AuroraBackground>
      
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                How Halvi Rides Works
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Booking a ride has never been easier.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="Set Your Location"
              description="Enter your pickup and drop-off locations."
              delay={0.1}
            />
            <FeatureCard
              icon={<Car className="w-6 h-6" />}
              title="Choose Your Ride"
              description="Select from various ride options based on your needs."
              delay={0.2}
            />
            <FeatureCard
              icon={<CreditCard className="w-6 h-6" />}
              title="Pay Securely"
              description="Pay with your preferred payment method."
              delay={0.3}
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Track Your Ride"
              description="Track your driver's location in real-time."
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
                Ride Types
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Choose the perfect ride for your needs.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {rideTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <Car className="w-10 h-10 mx-auto mb-4 text-halvi-500" />
                <span className="text-xl font-medium text-gray-900 dark:text-white">{type}</span>
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
                  For Drivers
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join our team of drivers and earn on your own schedule.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>Flexible hours - work when you want</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>Competitive earnings with weekly payouts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>User-friendly driver app with navigation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4 text-halvi-600 dark:text-halvi-400" />
                    </div>
                    <span>Dedicated support team for drivers</span>
                  </li>
                </ul>
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/business/driver">Apply Now</Link>
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
                    <Car className="w-16 h-16 text-halvi-500 opacity-50" />
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
              <Star className="w-12 h-12 mx-auto mb-6 text-halvi-500" />
              <h2 className="text-3xl font-bold mb-6">Safety & Quality</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                At Halvi Rides, safety is our top priority. All our drivers undergo thorough 
                background checks and training. Our vehicles are regularly inspected to ensure 
                they meet our quality standards.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/safety">Learn About Safety</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/download">Download App</Link>
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

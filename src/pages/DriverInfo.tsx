
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Car, Clock, DollarSign, MapPin, Shield, CalendarClock, ThumbsUp, Check } from "lucide-react";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";

export default function DriverInfo() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground showRadialGradient fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
              <Car className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Halvi Driver</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Earn money on your own schedule by delivering food, groceries, and providing rides through the Halvi platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/driver">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Drive with Halvi?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Clock className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Flexible Hours",
                description: "Work whenever it fits your schedule - full-time, part-time, or just a few hours a week."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Competitive Pay",
                description: "Earn competitive rates plus tips, with transparent payment tracking."
              },
              {
                icon: <MapPin className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Multiple Services",
                description: "Choose to deliver food, groceries, or provide rides based on your preferences."
              },
              {
                icon: <Shield className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Safety First",
                description: "Our platform prioritizes driver safety with verified customers and safety features."
              },
              {
                icon: <CalendarClock className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Fast Payments",
                description: "Get paid quickly with weekly payouts and instant cash-out options."
              },
              {
                icon: <ThumbsUp className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Driver Support",
                description: "Access 24/7 support and resources to help you succeed."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-halvi-50 dark:bg-halvi-900 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Requirements to Become a Driver</h3>
            <ul className="space-y-3">
              {[
                "Valid driver's license",
                "At least 21 years of age",
                "Vehicle insurance (if using your own vehicle)",
                "Clean driving record",
                "Background check clearance",
                "Smartphone compatible with the Halvi Driver app"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-halvi-600 dark:text-halvi-400" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The application process is simple and you could be earning in as little as a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/driver">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">Schedule a Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

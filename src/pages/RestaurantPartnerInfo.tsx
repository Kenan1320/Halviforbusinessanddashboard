
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Utensils, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";

export default function RestaurantPartnerInfo() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground showRadialGradient fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
              <Utensils className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Restaurant Partnership</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Expand your restaurant's reach by partnering with Halvi Eats for food delivery and takeout orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/business/apply">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits for Restaurant Partners</h2>
          
          <div className="grid gap-8 mb-12">
            {[
              {
                title: "Reach More Customers",
                description: "Connect with Halvi's growing user base looking specifically for halal dining options."
              },
              {
                title: "Increase Revenue",
                description: "Add a new revenue stream with delivery and takeout orders through our platform."
              },
              {
                title: "Seamless Integration",
                description: "Our system integrates easily with your existing ordering setup and POS systems."
              },
              {
                title: "Marketing Support",
                description: "Benefit from our targeted marketing campaigns promoting halal restaurants."
              },
              {
                title: "Halal Verification",
                description: "Stand out with our 'Verified Halal' badge that builds customer trust."
              },
              {
                title: "Reliable Delivery",
                description: "Our delivery network ensures your food reaches customers promptly and in excellent condition."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-halvi-600 dark:text-halvi-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Join Halvi Eats Today</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team will help you get set up quickly and start receiving orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/business/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

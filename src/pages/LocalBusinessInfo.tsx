
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Store, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";

export default function LocalBusinessInfo() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground showRadialGradient fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
              <Store className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Local Business Partnership</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join Halvi's growing network of verified halal local businesses and connect with customers in your area.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Why Partner with Halvi?</h2>
          
          <div className="grid gap-8 mb-12">
            {[
              {
                title: "Increase Your Visibility",
                description: "Get discovered by customers specifically looking for halal businesses in your area."
              },
              {
                title: "Verified Halal Status",
                description: "Stand out with our 'Verified Halal' badge that builds customer trust and confidence."
              },
              {
                title: "Marketing Support",
                description: "Access marketing tools and campaigns that promote your business to our growing user base."
              },
              {
                title: "Simple Integration",
                description: "Easily integrate with our platform with minimal technical requirements."
              },
              {
                title: "Dedicated Support",
                description: "Our business success team will help you optimize your Halvi presence."
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
            <h2 className="text-2xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The application process is simple and our team will guide you through every step.
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


import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, ShieldCheck, BookOpen } from "lucide-react";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to Halvi Onboarding
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-12 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join the Halvi community and get started with your account setup.
              We're here to guide you through every step of the process.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-halvi-600 dark:text-halvi-300" />
                  </div>
                  <h3 className="text-xl font-semibold">For Individuals</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-halvi-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create your personal profile</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-halvi-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access halal services in your community</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-halvi-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Connect with Muslim-friendly businesses</span>
                  </li>
                </ul>
                <Link to="/schedule-meeting">
                  <Button className="w-full bg-halvi-600 hover:bg-halvi-700">
                    Get Started
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-left">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-4">
                    <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                  </div>
                  <h3 className="text-xl font-semibold">For Businesses</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Register your halal business</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Upload necessary certifications</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reach Muslim customers in your area</span>
                  </li>
                </ul>
                <Link to="/schedule-meeting">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Register Your Business
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8 text-left">
                  <h3 className="text-2xl font-bold mb-2">Need Personalized Help?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Schedule a one-on-one meeting with our onboarding team to get
                    personalized assistance with your account setup.
                  </p>
                  <div className="flex items-center text-halvi-600 dark:text-halvi-400">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-medium">30-minute session</span>
                  </div>
                </div>
                <Link to="/schedule-meeting">
                  <Button 
                    size="lg" 
                    className="bg-halvi-600 hover:bg-halvi-700 px-6"
                  >
                    Schedule an Onboarding Meeting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Not ready to schedule?</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg mb-4 text-center">
                Explore our resources to learn more about Halvi and how it can benefit you
                or your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline">Watch Demo</Button>
                <Button variant="outline">Read FAQ</Button>
                <Button variant="outline">View Tutorials</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

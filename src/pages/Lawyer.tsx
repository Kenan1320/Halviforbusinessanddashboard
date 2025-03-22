
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Users, BadgeCheck, CalendarCheck, CreditCard, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

export default function Lawyer() {
  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Targeted Client Acquisition",
      description: "Connect with clients specifically seeking legal services with cultural and religious sensitivity."
    },
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      title: "Trust & Credibility",
      description: "Gain instant credibility with a verified Halvi professional badge that resonates with the community."
    },
    {
      icon: <CalendarCheck className="w-5 h-5" />,
      title: "Streamlined Consultations",
      description: "Our platform handles scheduling, reminders, and initial consultations, saving you administrative time."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Payments",
      description: "Get paid promptly with our integrated, Shariah-compliant payment system."
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Practice Your Specialty",
      description: "Focus on Islamic finance, family law, business law, or other specialties relevant to our community."
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Practice Growth",
      description: "Build a sustainable practice with clients who value your expertise and cultural understanding."
    }
  ];

  const areas = [
    "Family Law",
    "Business & Commercial Law",
    "Islamic Finance",
    "Immigration",
    "Civil Rights",
    "Real Estate",
    "Estate Planning",
    "Intellectual Property",
    "Employment Law"
  ];

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Halvi <span className="text-gradient">Legal Services</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
              Join our network of legal professionals providing services with cultural understanding and religious 
              sensitivity. Expand your practice by connecting with clients seeking your specific expertise.
            </p>
            
            <div className="inline-block mb-12 px-6 py-3 rounded-full bg-halvi-50/50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800">
              <span className="text-base font-medium text-halvi-700 dark:text-halvi-300">
                Pre-Launch Opportunity — Limited spots available
              </span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center mb-6 text-halvi-600 dark:text-halvi-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 bg-white dark:bg-gray-800 rounded-3xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-halvi-50 dark:bg-halvi-900/30">
                <h2 className="text-2xl font-bold mb-6">Legal Practice Areas in Demand</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-halvi-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">How Halvi Works for Legal Professionals</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Create a professional profile highlighting your expertise, credentials, and areas of practice
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Our team verifies your credentials and approves your profile for the platform
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Clients discover you through targeted searches based on their specific legal needs
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold">
                      4
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Schedule consultations, manage client communications, and receive payments through our platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Halvi's Legal Network</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Apply today to be among the first legal professionals on the Halvi platform. 
              Early applicants receive priority placement and reduced platform fees.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/professional/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </AuroraBackground>
      
      <Footer />
    </div>
  );
}

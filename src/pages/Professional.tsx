
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, Stethoscope, Brain, FileSpreadsheet, PencilRuler, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";
import FeatureCard from "@/components/FeatureCard";

export default function Professional() {
  const professionalTypes = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "Healthcare Professionals",
      description: "Connect with patients seeking halal-compliant healthcare services."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Therapists & Counselors",
      description: "Offer faith-sensitive mental health services to the community."
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: "Financial Advisors",
      description: "Provide halal financial planning and investment consultation."
    },
    {
      icon: <PencilRuler className="w-5 h-5" />,
      title: "Creative Professionals",
      description: "Connect with clients needing design, writing, and other creative services."
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Legal Services",
      description: "Offer legal expertise with understanding of cultural and religious considerations."
    },
    {
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      title: "Business Consultants",
      description: "Help businesses grow while adhering to halal principles."
    }
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
              Halvi <span className="text-gradient">Professionals</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
              Connecting skilled professionals with the halal-conscious community. 
              Expand your client base while serving the unique needs of our community.
            </p>
            
            <div className="inline-block mb-16 px-6 py-3 rounded-full bg-halvi-50/50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800">
              <span className="text-base font-medium text-halvi-700 dark:text-halvi-300">
                Coming Soon — Join our waitlist to be the first to know!
              </span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {professionalTypes.map((professional, index) => (
              <FeatureCard
                key={index}
                icon={professional.icon}
                title={professional.title}
                description={professional.description}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Ready to grow your practice?</h2>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/professional/apply">Join the Waitlist</Link>
            </Button>
          </motion.div>
        </div>
      </AuroraBackground>
      
      <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Join Halvi as a Professional?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
              Halvi creates a specialized marketplace connecting you with clients who are looking 
              specifically for professionals who understand their values and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center mb-6">
                <span className="text-halvi-600 dark:text-halvi-400 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Targeted Visibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reach clients specifically looking for professionals who understand their cultural and religious considerations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center mb-6">
                <span className="text-halvi-600 dark:text-halvi-400 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Simple Booking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our platform handles appointments, reminders, and payments, so you can focus on providing excellent service.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center mb-6">
                <span className="text-halvi-600 dark:text-halvi-400 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Trust</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Being part of the Halvi platform gives you instant credibility with our community of users.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

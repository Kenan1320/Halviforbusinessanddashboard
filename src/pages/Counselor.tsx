
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Fingerprint, Star, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

export default function Counselor() {
  const benefits = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Faith-Centered Approach",
      description: "Connect with clients seeking faith-sensitive counseling with a deep understanding of Islamic values."
    },
    {
      icon: <Fingerprint className="w-5 h-5" />,
      title: "Cultural Competence",
      description: "Serve a community that values counselors who understand their cultural context and religious perspectives."
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Exclusive Visibility",
      description: "Gain visibility among clients specifically seeking halal-conscious counseling services."
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Verified Profile",
      description: "Showcase your credentials with a verified Halvi professional badge that builds immediate trust."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Efficient Scheduling",
      description: "Our platform handles booking, reminders, and payments so you can focus on providing care."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Specialized Community",
      description: "Join a network of professionals focused on serving the unique mental health needs of the Muslim community."
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
              Halvi <span className="text-gradient">Counselors</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
              Provide faith-sensitive counseling services to clients seeking guidance that respects their 
              values and cultural background. Expand your practice with Halvi's dedicated platform.
            </p>
            
            <div className="inline-block mb-12 px-6 py-3 rounded-full bg-halvi-50/50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800">
              <span className="text-base font-medium text-halvi-700 dark:text-halvi-300">
                Pre-Launch Access — Join our waitlist for exclusive benefits
              </span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center mb-4 text-halvi-600 dark:text-halvi-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 bg-halvi-50 dark:bg-halvi-900/20 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How Halvi Works for Counselors</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold border border-halvi-100 dark:border-halvi-800">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Create Your Professional Profile</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Set up your profile with your credentials, specializations, approach, availability, and pricing. 
                      Highlight your expertise in faith-sensitive counseling to attract the right clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold border border-halvi-100 dark:border-halvi-800">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Get Verified by Halvi</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our team reviews your credentials and approves your profile, granting you the verified 
                      Halvi professional badge that builds trust with clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold border border-halvi-100 dark:border-halvi-800">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Connect With Clients</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Clients seeking faith-sensitive counseling will discover you through the Halvi app. 
                      Our platform facilitates the entire process from discovery to booking to payment.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-halvi-600 dark:text-halvi-400 font-bold border border-halvi-100 dark:border-halvi-800">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Grow Your Practice</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      As you help clients and receive positive reviews, your visibility on the platform increases, 
                      helping you build a sustainable practice within our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to join as a Halvi Counselor?</h2>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/professional/apply">Apply Now</Link>
            </Button>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Early applicants receive priority placement and reduced platform fees
            </p>
          </div>
        </div>
      </AuroraBackground>
      
      <Footer />
    </div>
  );
}

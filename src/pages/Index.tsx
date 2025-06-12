
import React from "react";
import { Toaster } from "sonner";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BusinessCTA from "@/components/BusinessCTA";
import Testimonials from "@/components/Testimonials";
import CommissionInfo from "@/components/CommissionInfo";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import HalviLive from "@/components/HalviLive";
import BusinessLogoCarousel from "@/components/BusinessLogoCarousel";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneDemoWrapper from "@/components/PhoneDemoWrapper";

export default function Index() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <Hero />
      
      {/* Enhanced App Experience Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium mb-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Link to="/trending-dallas" className="flex items-center gap-2">
                  Trending in Dallas <ArrowRight size={16} />
                </Link>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Experience the Halvi App
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                See how Halvi connects customers with businesses, services, and professionals in your community.
              </p>
            </motion.div>
            
            {/* Testimonials Marquee with better spacing */}
            <div className="mb-20">
              <TestimonialsMarquee />
            </div>
            
            {/* Phone Demo with improved layout */}
            <div className="mb-16">
              <PhoneDemoWrapper>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <a 
                    href="https://placeholder.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-halvi-600 to-halvi-700 hover:from-halvi-700 hover:to-halvi-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Download className="h-5 w-5" />
                    Download the App
                  </a>
                </motion.div>
              </PhoneDemoWrapper>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features with enhanced spacing */}
      <Features />
      
      {/* How It Works with better visual hierarchy */}
      <HowItWorks />
      
      {/* Commission Info with improved design */}
      <CommissionInfo />
      
      {/* Business CTA with enhanced visual appeal */}
      <BusinessCTA />
      
      {/* Testimonials section */}
      <Testimonials />
      
      {/* FAQ section */}
      <FAQ />
      
      {/* Newsletter with better responsive design */}
      <Newsletter />
      
      {/* Business sections with improved spacing */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BusinessAnnouncementCard />
            <div className="mt-16">
              <HalviLive />
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Logo Carousel */}
      <BusinessLogoCarousel />
      
      <Footer />
    </div>
  );
}

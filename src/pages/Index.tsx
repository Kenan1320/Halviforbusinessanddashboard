
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
import AutoSwipeDemo from "@/components/AutoSwipeDemo";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import HalviLive from "@/components/HalviLive";
import BusinessLogoCarousel from "@/components/BusinessLogoCarousel";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneDemoWrapper from "@/components/PhoneDemoWrapper";

export default function Index() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <Hero />
      
      <div className="container mx-auto px-4 py-12 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium mb-3 cursor-pointer hover:shadow-lg transition-all">
              <Link to="/trending-dallas" className="flex items-center gap-2">
                Trending in Dallas <ArrowRight size={16} />
              </Link>
            </span>
            <h2 className="text-3xl font-bold mb-4">Experience the Halvi App</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how Halvi connects customers with businesses, services, and professionals in your community.
            </p>
          </motion.div>
          
          {/* Testimonials Marquee */}
          <TestimonialsMarquee />
          
          <div className="mt-24">
            {/* Using the PhoneDemoWrapper for increased spacing */}
            <PhoneDemoWrapper>
              <div className="flex justify-center mb-16">
                <a 
                  href="https://placeholder.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-halvi-600 hover:bg-halvi-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Download the App
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                </a>
              </div>
            </PhoneDemoWrapper>
          </div>
        </div>
      </div>
      
      <Features />
      <HowItWorks />
      <CommissionInfo />
      <BusinessCTA />
      <Testimonials />
      <FAQ />
      <Newsletter />
      
      <div className="container mx-auto px-4 pb-16">
        <BusinessAnnouncementCard />
        <div className="mt-16 max-w-3xl mx-auto">
          <HalviLive />
        </div>
      </div>
      
      {/* Business Logo Carousel */}
      <BusinessLogoCarousel />
      
      <Footer />
    </div>
  );
}

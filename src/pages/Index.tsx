
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
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneDemoWrapper from "@/components/PhoneDemoWrapper";

export default function Index() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <Hero />
      
      {/* Enhanced App Experience Section with better visual hierarchy */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-halvi-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-halvi-950/30">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-halvi-200/20 dark:bg-halvi-800/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-orange-200/20 dark:bg-orange-800/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced header with better spacing and animations */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              {/* Trending badge with enhanced design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-8"
              >
                <Link 
                  to="/trending-dallas" 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 transform hover:scale-105"
                >
                  <Sparkles className="h-5 w-5 animate-pulse" />
                  <span>Trending in Dallas</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </Link>
              </motion.div>
              
              {/* Enhanced main heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Experience the
                </span>
                <br />
                <span className="bg-gradient-to-r from-halvi-600 via-halvi-500 to-halvi-400 bg-clip-text text-transparent">
                  Halvi Revolution
                </span>
              </motion.h2>
              
              {/* Enhanced description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Discover how Halvi seamlessly connects customers with businesses, services, and professionals in your community through intelligent technology.
              </motion.p>
            </motion.div>
            
            {/* Enhanced Testimonials Marquee with better spacing */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <TestimonialsMarquee />
            </motion.div>
            
            {/* Enhanced Phone Demo with improved layout */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <PhoneDemoWrapper>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-12"
                >
                  <a 
                    href="https://placeholder.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-halvi-600 via-halvi-700 to-halvi-800 hover:from-halvi-700 hover:via-halvi-800 hover:to-halvi-900 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-halvi-500/25 hover:shadow-halvi-500/40"
                  >
                    <Download className="h-6 w-6 group-hover:animate-bounce" />
                    <span>Download the App</span>
                    
                    {/* Animated ring effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                  </a>
                </motion.div>
              </PhoneDemoWrapper>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Features section */}
      <Features />
      
      {/* Enhanced How It Works section */}
      <HowItWorks />
      
      {/* Enhanced Commission Info */}
      <CommissionInfo />
      
      {/* Enhanced Business CTA */}
      <BusinessCTA />
      
      {/* Enhanced Testimonials */}
      <Testimonials />
      
      {/* Enhanced FAQ */}
      <FAQ />
      
      {/* Enhanced Newsletter */}
      <Newsletter />
      
      {/* Enhanced Business sections with improved spacing and animations */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-gray-100 to-halvi-50/20 dark:from-gray-900 dark:via-gray-950 dark:to-halvi-950/20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-halvi-300/10 dark:bg-halvi-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-300/10 dark:bg-orange-700/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BusinessAnnouncementCard />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <HalviLive />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Business Logo Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <BusinessLogoCarousel />
      </motion.div>
      
      <Footer />
    </div>
  );
}

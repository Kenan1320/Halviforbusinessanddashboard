
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
import AnnouncementBanner from "@/components/AnnouncementBanner";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";

export default function Index() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <AnnouncementBanner />
      <Navbar />
      
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <AutoSwipeDemo />
        </div>
      </div>
      
      <Features />
      <HowItWorks />
      <CommissionInfo />
      <BusinessCTA />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

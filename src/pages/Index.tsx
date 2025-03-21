
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

export default function Index() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
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


import React, { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AffiliateHero from "@/components/affiliate/AffiliateHero";
import RegularAffiliate from "@/components/affiliate/RegularAffiliate";
import SpecialChallenge from "@/components/affiliate/SpecialChallenge";
import AffiliateForm from "@/components/affiliate/AffiliateForm";
import AffiliateFAQSection from "@/components/affiliate/AffiliateFAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function AffiliateProgram() {
  // Sample app data
  const daysRemaining = 4;
  const challenges = [
    { position: 1, name: "Ahmed M.", referrals: 8, earnings: "$1,600" },
    { position: 2, name: "Sarah K.", referrals: 6, earnings: "$1,200" },
    { position: 3, name: "Yusuf A.", referrals: 5, earnings: "$1,000" },
  ];

  // FAQ content specific to affiliates
  const affiliateFaqs = [
    {
      question: "How does the Halvi affiliate program work?",
      answer: "Our affiliate program is simple: refer businesses to join Halvi, and earn up to 20% commission on their platform fees for a full year. Plus, participate in special challenges to earn higher commission rates and bonuses. Once approved, you'll get a unique referral link to track your referrals and earnings."
    },
    {
      question: "Can I refer a local or online business?",
      answer: "Yes, you can refer both local and online businesses to Halvi. Whether it's your favorite neighborhood shop or an inspiring online brand, your referral can help them grow—and earn you real rewards. Every business you refer strengthens the halal economy, supports your community to facilitate online ordering for easy pick up or shipping, and brings you closer to your affiliate partner status, commissions, and potential Creator Partner. It's a win for them, a win for you, and a win for the entire halal movement."
    },
    {
      question: "How much can I earn as an affiliate?",
      answer: "Standard affiliates earn 20% of the platform fees for each business they refer, for a full year. With the average Halvi business generating $2,000 in annual platform fees, that's $400 per successful referral. Special Challenge winners can earn 40% commission rates, potentially doubling your earnings."
    },
    {
      question: "What is the Special Affiliate Challenge?",
      answer: "Every month, we run a 4-day Special Affiliate Challenge where participants compete to refer the most businesses. The winner receives Special Affiliate status, earning 40% commission instead of 20% for a full year. This challenge is designed to reward our most active community advocates."
    },
    {
      question: "How and when do I get paid?",
      answer: "Affiliates receive monthly payments via bank transfer or PayPal, provided their balance exceeds $100. Earnings are calculated based on the platform fees paid by your referred businesses during the previous month."
    }
  ];
  
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AffiliateHero />
      
      <div className="container mx-auto px-4 py-16">
        {/* Get Familiar Button - positioned above the tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <Button asChild variant="secondary" size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600">
            <Link to="/affiliate-get-familiar" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Get Familiar with the Affiliate Program
            </Link>
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Learn more about how our affiliate program works
          </p>
        </motion.div>

        <Tabs defaultValue="regular" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="regular" className="text-lg py-3">Regular Affiliate</TabsTrigger>
            <TabsTrigger value="challenge" className="text-lg py-3">Special Challenge</TabsTrigger>
          </TabsList>
          
          <TabsContent value="regular">
            <RegularAffiliate />
          </TabsContent>
          
          <TabsContent value="challenge">
            <SpecialChallenge daysRemaining={daysRemaining} challenges={challenges} />
          </TabsContent>
        </Tabs>
        
        <AffiliateForm />
        
        <AffiliateFAQSection faqs={affiliateFaqs} />
      </div>
      
      <Footer />
    </div>
  );
}

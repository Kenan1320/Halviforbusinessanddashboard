
import React, { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AffiliateHero from "@/components/affiliate/AffiliateHero";
import RegularAffiliate from "@/components/affiliate/RegularAffiliate";
import SpecialChallenge from "@/components/affiliate/SpecialChallenge";
import AffiliateForm from "@/components/affiliate/AffiliateForm";
import AffiliateFAQSection from "@/components/affiliate/AffiliateFAQSection";

export default function AffiliateProgram() {
  // Sample app data
  const daysRemaining = 4;
  const challenges = [
    { position: 1, name: "Ahmed M.", referrals: 8, earnings: "$1,600" },
    { position: 2, name: "Sarah K.", referrals: 6, earnings: "$1,200" },
    { position: 3, name: "Yusuf A.", referrals: 5, earnings: "$1,000" },
  ];
  
  // Challenge overview data
  const spotsTotal = 50;
  const spotsFilled = 32;
  const spotsRemaining = spotsTotal - spotsFilled;

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
    <div className="overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <Toaster position="top-right" />
      <Navbar />
      
      <AffiliateHero />
      
      {/* Challenge Overview Section */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-center">Challenge Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Days Remaining</p>
                  <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{daysRemaining}</p>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Spots Remaining</p>
                  <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{spotsRemaining}</p>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg text-center relative">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Spots Filled</p>
                  <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{spotsFilled}/{spotsTotal}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-amber-600 h-2.5 rounded-full" 
                      style={{ width: `${(spotsFilled/spotsTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:from-amber-600 hover:to-orange-700 transition-all"
                >
                  Register for Next Challenge
                </button>
                <p className="text-sm text-gray-500 mt-2">Next challenge starts in 5 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Display sections in a flowing, continuous layout */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Regular Affiliate Program</h2>
          <div className="max-w-6xl mx-auto">
            <RegularAffiliate />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Special Affiliate Challenge</h2>
          <div className="max-w-6xl mx-auto">
            <SpecialChallenge daysRemaining={daysRemaining} challenges={challenges} />
          </div>
        </section>
        
        <div className="max-w-6xl mx-auto">
          <AffiliateForm />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <AffiliateFAQSection faqs={affiliateFaqs} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

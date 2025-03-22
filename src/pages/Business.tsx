
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, ShoppingBag, Utensils, Car, ArrowRight, ChevronRight, Calendar, MessageCircle } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import GlassCard from "@/components/GlassCard";
import CommissionInfo from "@/components/CommissionInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Business() {
  const businessOptions = [
    {
      icon: <Store className="w-12 h-12" />,
      title: "Halvi Local",
      description: "List your halal business on our local directory.",
      benefits: [
        "Increase your visibility to halal-conscious customers",
        "Get featured in search results and recommendations",
        "Manage your business profile and updates",
        "Respond to customer reviews and messages"
      ],
      href: "/business/local",
      buttonText: "Apply as Local Business",
      delay: 0.1,
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Halvi Mall",
      description: "Sell your halal products on our online marketplace.",
      benefits: [
        "Reach thousands of potential customers",
        "Easy-to-use dashboard to manage products and orders",
        "Secure payment processing and order management",
        "Marketing support to boost your sales"
      ],
      href: "/business/seller",
      buttonText: "Apply as Seller",
      delay: 0.2,
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: "Halvi Eats",
      description: "Partner with us for food delivery services.",
      benefits: [
        "Expand your customer base beyond your physical location",
        "Increase your order volume and revenue",
        "Easy-to-use tablet for order management",
        "Access to delivery drivers network"
      ],
      href: "/business/restaurant",
      buttonText: "Apply as Restaurant",
      delay: 0.3,
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Halvi Rides",
      description: "Join our team of drivers for ride-sharing services.",
      benefits: [
        "Flexible working hours - work when you want",
        "Competitive earnings with weekly payouts",
        "User-friendly driver app with navigation",
        "Dedicated support team for drivers"
      ],
      href: "/business/driver",
      buttonText: "Apply as Driver",
      delay: 0.4,
    },
  ];

  return (
    <>
      <Navbar />
      
      <AuroraBackground className="pt-24 pb-16">
        <div className="pt-16 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-halvi-50 dark:bg-halvi-900/30 border border-halvi-100 dark:border-halvi-800 text-halvi-700 dark:text-halvi-300">
              For Businesses
            </span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              Grow Your Business with <span className="text-gradient">Halvi</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Partner with Halvi to reach more customers, increase your revenue, 
              and grow your business in the halal market.
            </motion.p>
          </div>
        </div>
      </AuroraBackground>
      
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Partnership Options
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the partnership option that best suits your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessOptions.map((option) => (
              <GlassCard key={option.title} delay={option.delay}>
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="rounded-full p-1 flex-shrink-0 bg-halvi-100 dark:bg-halvi-900 mr-3 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-halvi-600 dark:text-halvi-400" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button asChild variant="outline">
                      <Link to="/schedule-meeting" className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Demo
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link to={option.href} className="flex items-center">
                        {option.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      <CommissionInfo />
      
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Our streamlined application process makes it easy to get started.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 md:ml-px w-0.5 bg-gradient-to-b from-halvi-400 to-halvi-600"></div>
            
            {[
              {
                title: "Application Submission",
                description: "Fill out our simple online application form with your business details.",
                delay: 0.1,
              },
              {
                title: "Document Verification",
                description: "Submit required documents for halal certification and business verification.",
                delay: 0.2,
              },
              {
                title: "Account Setup",
                description: "Once approved, set up your account and customize your profile or listings.",
                delay: 0.3,
              },
              {
                title: "Training & Onboarding",
                description: "Complete our brief onboarding process to learn how to use our platform.",
                delay: 0.4,
              },
              {
                title: "Go Live",
                description: "Launch your business on Halvi and start connecting with customers.",
                delay: 0.5,
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: step.delay }}
                viewport={{ once: true }}
                className="relative flex md:items-center mb-12"
              >
                <div className="flex flex-col md:flex-row md:w-full items-start md:items-center">
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-halvi-100 dark:bg-halvi-900 border-2 border-halvi-500 text-halvi-600 dark:text-halvi-300 md:mx-auto">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Join thousands of businesses on Halvi and start growing today.
                Our team is ready to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/business/apply">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/schedule-meeting" className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Affiliate Program
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Earn commission by referring businesses and customers to Halvi.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <h3 className="text-2xl font-bold mb-4">Become an Affiliate</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join our affiliate program and earn commission for every successful referral.
                We offer competitive rates and provide all the marketing materials you need.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Business Referrals</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Earn 10% of the first month's commission for every business you refer.
                  </p>
                  <span className="text-xl font-bold text-halvi-600 dark:text-halvi-400">10%</span>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Customer Referrals</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Earn 5% of the customer's first purchase (up to $10).
                  </p>
                  <span className="text-xl font-bold text-halvi-600 dark:text-halvi-400">5%</span>
                </div>
              </div>
              
              <Button asChild className="w-full sm:w-auto">
                <Link to="/affiliate">Apply to Affiliate Program</Link>
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>
      
      <FAQ />
      <Footer />
    </>
  );
}

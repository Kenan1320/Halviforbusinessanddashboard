
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, Check, ArrowRight, DollarSign, TrendingUp, Zap, Monitor, Share2, Award } from "lucide-react";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";

export default function AffiliateInfo() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground showRadialGradient fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Halvi Affiliate</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Earn commissions by promoting Halvi's platform to businesses and users in your network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/affiliate">Join Our Affiliate Program</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How Our Affiliate Program Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <DollarSign className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Generous Commissions",
                description: "Earn competitive commissions on every business or user you refer to the Halvi platform."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Recurring Revenue",
                description: "Receive ongoing commissions for as long as your referrals remain active on the platform."
              },
              {
                icon: <Zap className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Quick Activation",
                description: "Get started quickly with a simple application process and rapid approval."
              },
              {
                icon: <Monitor className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Marketing Resources",
                description: "Access ready-to-use marketing materials, banners, and email templates."
              },
              {
                icon: <Share2 className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Easy Tracking",
                description: "Monitor your referrals and earnings with our comprehensive dashboard."
              },
              {
                icon: <Award className="h-8 w-8 text-halvi-600 dark:text-halvi-400" />,
                title: "Performance Bonuses",
                description: "Earn additional rewards and bonuses for exceptional performance."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-halvi-50 dark:bg-halvi-900 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Who Can Become an Affiliate?</h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Community Leaders",
                  description: "Mosque administrators, halal certification bodies, and community organizers."
                },
                {
                  title: "Content Creators",
                  description: "Bloggers, social media influencers, and YouTubers focused on halal lifestyle."
                },
                {
                  title: "Business Consultants",
                  description: "Professionals who work with halal businesses and can recommend our platform."
                },
                {
                  title: "Event Organizers",
                  description: "Coordinators of halal expos, food festivals, and business networking events."
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-halvi-600 dark:text-halvi-400 mt-1" />
                  <div>
                    <span className="font-medium">{item.title}:</span> {item.description}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Start Earning?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join our affiliate program today and become part of the Halvi success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/affiliate">
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">Schedule a Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

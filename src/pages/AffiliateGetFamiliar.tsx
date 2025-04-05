
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import AffiliateChallenge from "@/components/affiliate/AffiliateChallenge";
import CreatorPartners from "@/components/affiliate/CreatorPartners";
import { BookOpen, Users, ArrowLeft, Sparkles, Gift, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import GlassCard from "@/components/GlassCard";

const FeatureHighlight = ({ 
  title, 
  description, 
  icon, 
  index 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  index: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 * index }}
    className="flex gap-4"
  >
    <div className="mt-1">
      <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default function AffiliateGetFamiliar() {
  const [mode, setMode] = useState("challenge");
  
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-6 shadow-lg shadow-amber-500/20"
            >
              <BookOpen className="w-8 h-8" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Welcome to Halvi's <span className="text-gradient">Affiliate Program</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Learn about our special affiliate programs and how you can participate to earn passive income
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 group">
                <Link to="/affiliate" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Affiliate Program
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
      
      {/* Program Overview with Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Halvi Affiliate Programs Overview
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard delay={0.1} className="transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-white">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">4-Day Challenge</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Participate in our special 4-day affiliate challenge to win exclusive benefits and double commission rates.
              </p>
              <Button onClick={() => setMode("challenge")} className="rounded-full px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                Learn More
              </Button>
            </GlassCard>
            
            <GlassCard delay={0.2} className="transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 bg-gradient-to-br from-halvi-400 to-halvi-600 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-white">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Creator Partners</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join our exclusive program for content creators and influencers with special perks and higher commission rates.
              </p>
              <Button onClick={() => setMode("creator")} className="rounded-full px-6 bg-gradient-to-r from-halvi-500 to-halvi-600 hover:from-halvi-600 hover:to-halvi-700">
                Learn More
              </Button>
            </GlassCard>
          </div>
          
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureHighlight 
                    icon={<Gift className="h-5 w-5" />}
                    title="Passive Income"
                    description="Earn up to 40% of our platform fees from every business you refer for an entire year."
                    index={0}
                  />
                  <FeatureHighlight 
                    icon={<CheckCircle className="h-5 w-5" />}
                    title="Simple Process"
                    description="Easy application process and user-friendly dashboard to track your referrals and earnings."
                    index={1}
                  />
                  <FeatureHighlight 
                    icon={<Clock className="h-5 w-5" />}
                    title="Long-Term Earnings"
                    description="Continue to earn from your referrals for a full year, regardless of when you make the introduction."
                    index={2}
                  />
                  <FeatureHighlight 
                    icon={<Users className="h-5 w-5" />}
                    title="No Referral Limit"
                    description="Refer as many businesses as you want. There's no cap on how much you can earn."
                    index={3}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-8 rounded-xl border border-amber-100 dark:border-amber-900 text-center mb-16"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of Halvi affiliates who are earning passive income by referring businesses to our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-500">
                <Link to="/affiliate#apply">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <Tabs value={mode} onValueChange={setMode} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="challenge" className="text-lg py-3">Affiliate Challenge</TabsTrigger>
            <TabsTrigger value="creator" className="text-lg py-3">Creator Partners</TabsTrigger>
          </TabsList>
          
          <TabsContent value="challenge">
            <AffiliateChallenge />
          </TabsContent>
          
          <TabsContent value="creator">
            <CreatorPartners />
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
}

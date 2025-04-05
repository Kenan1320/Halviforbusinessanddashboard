
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
import { BookOpen, Users, ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";

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
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-6 shadow-lg shadow-amber-500/30"
            >
              <BookOpen className="w-8 h-8" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get Familiar with Halvi's <span className="text-gradient">Affiliate Programs</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Learn about our special affiliate programs and how you can participate and earn passive income.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/affiliate">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Affiliate Program
                </Link>
              </Button>
              
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-8 rounded-xl border border-amber-100 dark:border-amber-900 text-center mb-10 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Special 4-Day Challenge</h2>
              <p className="text-lg mb-6">
                Participate in our special 4-day challenge to become a Special Affiliate and earn <span className="font-bold text-amber-600 dark:text-amber-400">40% commission</span> - double the standard rate!
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-600">
                <a href="#challenge">Learn More About the Challenge</a>
              </Button>
            </motion.div>
          </div>
          
          <Tabs value={mode} onValueChange={setMode} id="challenge" className="max-w-4xl mx-auto">
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
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Become an Affiliate?</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-600">
                <Link to="/affiliate">Apply Now</Link>
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
      </div>
      
      <Footer />
    </div>
  );
}

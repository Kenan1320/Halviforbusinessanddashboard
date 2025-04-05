
import React, { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import AffiliateChallenge from "@/components/affiliate/AffiliateChallenge";
import CreatorPartners from "@/components/affiliate/CreatorPartners";
import { BookOpen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AffiliateGetFamiliar() {
  const [mode, setMode] = useState("affiliatePrograms");
  
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
                <Link to="/affiliates">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Become an Affiliate - Passive Income
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
              <h2 className="text-2xl font-bold mb-4">Affiliate Programs Overview</h2>
              <p className="text-lg mb-6">
                Halvi offers two affiliate programs: our standard affiliate program where you earn 20% commission, and our special 4-day challenge which lets you earn <span className="font-bold text-amber-600 dark:text-amber-400">40% commission</span> as a Special Affiliate!
              </p>
            </motion.div>
          </div>
          
          <Card className="mb-8 overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <Tabs value={mode} onValueChange={setMode} className="w-full">
                <TabsList className="w-full grid grid-cols-2 rounded-none h-14">
                  <TabsTrigger 
                    value="affiliatePrograms" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500/10 data-[state=active]:to-orange-500/10 data-[state=active]:border-b-2 data-[state=active]:border-amber-500 rounded-none h-full text-base font-medium transition-all"
                  >
                    Affiliate Programs
                  </TabsTrigger>
                  <TabsTrigger 
                    value="creator" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500/10 data-[state=active]:to-orange-500/10 data-[state=active]:border-b-2 data-[state=active]:border-amber-500 rounded-none h-full text-base font-medium transition-all"
                  >
                    Creator Partners
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="affiliatePrograms" className="pt-6 px-6 pb-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Our Affiliate Programs</h3>
                      
                      <Tabs defaultValue="challenge" className="mt-6">
                        <TabsList className="w-full grid grid-cols-2 mb-6">
                          <TabsTrigger value="challenge" className="text-base py-3">
                            4-Day Special Affiliate Challenge
                          </TabsTrigger>
                          <TabsTrigger value="regular" className="text-base py-3">
                            Regular Affiliates
                          </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="challenge">
                          <Card className="border border-amber-100 dark:border-amber-900/40">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold mb-3 text-amber-700 dark:text-amber-400">Special Challenge Program</h3>
                              <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Compete with other affiliates over a 4-day period to refer the most businesses to Halvi. The winner earns Special Affiliate status with 40% commission for 16 months!
                              </p>
                              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                                <h4 className="font-medium mb-2">Benefits:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>40% commission rate (double the standard)</li>
                                  <li>Special recognition on our platform</li>
                                  <li>Priority support for your referred businesses</li>
                                  <li>Exclusive access to special promotions</li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="regular">
                          <Card className="border border-amber-100 dark:border-amber-900/40">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold mb-3 text-amber-700 dark:text-amber-400">Regular Affiliate Program</h3>
                              <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Refer businesses to join Halvi and earn a 20% commission on Halvi's profit from each business for a full year, up to $40,000 in orders.
                              </p>
                              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                                <h4 className="font-medium mb-2">Benefits:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>20% commission on all referred businesses</li>
                                  <li>No cap on the number of businesses you can refer</li>
                                  <li>Monthly payments via bank transfer or PayPal</li>
                                  <li>Access to marketing materials and support</li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border border-amber-100 dark:border-amber-900/40">
                          <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-xl font-bold text-amber-600 dark:text-amber-400">1</span>
                            </div>
                            <h4 className="font-semibold mb-2">Apply</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Submit your application through our affiliate form</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-amber-100 dark:border-amber-900/40">
                          <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-xl font-bold text-amber-600 dark:text-amber-400">2</span>
                            </div>
                            <h4 className="font-semibold mb-2">Share</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Get your unique referral link and share with businesses</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-amber-100 dark:border-amber-900/40">
                          <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-xl font-bold text-amber-600 dark:text-amber-400">3</span>
                            </div>
                            <h4 className="font-semibold mb-2">Earn</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Collect your commission on every successful referral</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="creator" className="pt-6 px-6 pb-8">
                  <CreatorPartners />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

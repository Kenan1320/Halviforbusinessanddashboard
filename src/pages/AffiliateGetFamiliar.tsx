
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { BookOpen, ArrowLeft, CheckCircle, Clock, Trophy, DollarSign, User, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function AffiliateGetFamiliar() {
  const [mode, setMode] = useState("affiliatePrograms");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Simulate login process
    toast.loading("Logging in...");
    
    // Simulate API call
    setTimeout(() => {
      toast.dismiss();
      toast.success("Login successful!");
      navigate("/creator-partners-dashboard");
    }, 1500);
  };

  const handleGuestAccess = () => {
    toast.loading("Accessing guest mode...");
    
    setTimeout(() => {
      toast.dismiss();
      navigate("/creator-partners-dashboard");
    }, 1000);
  };
  
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
              className="flex justify-center"
            >
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/affiliates">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Affiliate Programs
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Tabs value={mode} onValueChange={setMode} id="challenge" className="max-w-4xl mx-auto">
            <TabsList className="w-full mb-8 bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-900/20 dark:to-orange-900/20 p-1.5 rounded-xl shadow-lg">
              <TabsTrigger 
                value="affiliatePrograms" 
                className="text-lg py-3 px-6 rounded-lg transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm"
              >
                Affiliate Programs
              </TabsTrigger>
              <TabsTrigger 
                value="creatorPartners" 
                className="text-lg py-3 px-6 rounded-lg transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm"
              >
                Creator Partners
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="affiliatePrograms">
              <div className="space-y-10">
                <section>
                  <h2 className="text-3xl font-bold mb-6 text-center">Affiliate Programs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-100 dark:border-amber-900 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-6 w-6 text-amber-600" />
                          4-Day Special Challenge
                        </CardTitle>
                        <CardDescription>
                          Compete to earn double commission rates
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Refer the most businesses in 4 days</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Win Special Affiliate status for 16 months</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm"><span className="font-bold">40% commission rate</span> - double the standard!</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Commissions on all orders for 16 months</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          Perfect for those who can refer multiple businesses quickly!
                        </p>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-gray-200 dark:border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-halvi-600" />
                          Regular Affiliate Program
                        </CardTitle>
                        <CardDescription>
                          Our standard affiliate program with great benefits
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm"><span className="font-bold">20% commission</span> on all orders</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">No time pressure - refer at your own pace</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Earn commissions on all referred shop orders</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Commissions on up to 40K orders per shop</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ideal for steady, long-term participation
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
                
                <section className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-6">How Commission Works</h3>
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-2">Regular Affiliates (20% Commission)</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        For each business you refer, you earn 20% commission on all orders placed through their shop. 
                        This applies to up to 40,000 orders per referred business, providing substantial earning potential.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-2">Special Challenge Winners (40% Commission)</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        If you win our 4-day challenge by referring the most businesses, you'll receive Special Affiliate status 
                        with a 40% commission rate for 16 months. This applies to all orders from businesses you refer during that period.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-2">Payment Details</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Payments are processed monthly via bank transfer or PayPal when your balance exceeds $100. 
                        Commissions are calculated based on the actual orders placed through your referred businesses in the previous month.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </TabsContent>
            
            <TabsContent value="creatorPartners">
              <div className="space-y-8">
                <section>
                  <div className="flex justify-center mb-8">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                          <LogIn className="mr-2 h-5 w-5" />
                          Login to Your Dashboard
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Creator Partner Dashboard</DialogTitle>
                          <DialogDescription>
                            Access your exclusive dashboard to manage your partnership with Halvi.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Tabs defaultValue="login" className="w-full">
                            <TabsList className="grid grid-cols-2 mb-4">
                              <TabsTrigger value="login">Partner Login</TabsTrigger>
                              <TabsTrigger value="guest">Guest Mode</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="login" className="space-y-4">
                              <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                  <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                  />
                                </div>
                                
                                <div>
                                  <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                                  <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                  />
                                </div>
                                
                                <Button type="submit" className="w-full">Login to Dashboard</Button>
                              </form>
                              <p className="text-sm text-center text-gray-500">
                                Don't have login credentials yet? Apply to become a Creator Partner.
                              </p>
                            </TabsContent>
                            
                            <TabsContent value="guest" className="space-y-4 text-center">
                              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                                <User className="h-12 w-12 mx-auto text-purple-600 dark:text-purple-400 mb-2" />
                                <h4 className="font-medium mb-2">Guest Access</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Preview the Creator Partners Dashboard without requiring login credentials.
                                </p>
                              </div>
                              <Button onClick={handleGuestAccess} className="w-full">
                                Access Guest Mode
                              </Button>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-center">Creator Partners Program</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border-purple-100 dark:border-purple-900 shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>Become a Creator Partner</CardTitle>
                        <CardDescription>
                          For content creators and influencers
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">10% commission on all orders from referred affiliates</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Earn from up to 40,000 orders per business</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Access to exclusive promotional materials</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Featured promotion on Halvi platforms</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          For influencers with established audiences
                        </p>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>Requirements</CardTitle>
                        <CardDescription>
                          What we look for in Creator Partners
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Minimum 5,000 followers on at least one social platform</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Regularly create content relevant to businesses or consumers</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">Engaged audience with good interaction rates</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Applications reviewed on a case-by-case basis
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
                
                <section className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Creator Partner Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-0 bg-transparent shadow-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Commission Structure</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          Creator Partners receive 10% commission on all orders from businesses referred by their affiliates, up to 40,000 orders per business.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 bg-transparent shadow-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Co-Marketing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          We promote your content through our channels and provide exclusive promotional assets to maximize your affiliate network.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 bg-transparent shadow-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Early Access</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          Get early access to new Halvi features and services before they're released to the public.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

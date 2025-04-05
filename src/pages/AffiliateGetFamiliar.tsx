import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, Trophy, DollarSign, User, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { HeroGeometric } from "@/components/ui/HeroGeometric";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <Toaster position="top-right" />
      <Navbar />
      
      <HeroGeometric badge="Affiliate Programs" title1="Get Familiar with" title2="Halvi's Programs">
        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-amber-400 hover:bg-amber-100 hover:text-amber-800">
            <Link to="/affiliates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Affiliate Programs
            </Link>
          </Button>
        </div>
      </HeroGeometric>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => setMode("affiliatePrograms")}
                    className={`text-lg py-3 px-8 ${
                      mode === "affiliatePrograms" 
                        ? "bg-amber-100 text-amber-900 font-medium"
                        : "hover:bg-amber-100/50"
                    }`}
                  >
                    Affiliate Programs
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => setMode("creatorPartners")}
                    className={`text-lg py-3 px-8 ${
                      mode === "creatorPartners" 
                        ? "bg-amber-100 text-amber-900 font-medium"
                        : "hover:bg-amber-100/50"
                    }`}
                  >
                    Creator Partners
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem className={mode === "creatorPartners" ? "block" : "hidden"}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="ml-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login to Dashboard
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
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <User className="h-12 w-12 mx-auto text-amber-600 mb-2" />
                              <h4 className="font-medium mb-2">Guest Access</h4>
                              <p className="text-sm text-gray-600">
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
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {mode === "affiliatePrograms" ? (
            <div className="space-y-24">
              <section>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold mb-4">Affiliate Programs</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose from our two affiliate programs and start earning commissions by referring businesses to Halvi.
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <ScrollAnimation>
                    <div className="bg-gradient-to-br from-white to-amber-50 border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full rounded-xl overflow-hidden">
                      <div className="relative p-8">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full z-0"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="bg-amber-100 p-3 rounded-full">
                              <Clock className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-2xl font-bold">4-Day Special Challenge</h3>
                          </div>
                          <p className="text-amber-700 text-base mb-6">
                            Compete to earn double commission rates
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Refer the most businesses in 4 days</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Win Special Affiliate status for 16 months</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p><span className="font-bold text-amber-800">40% commission rate</span> - double the standard!</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Commissions on all orders for 16 months</p>
                            </div>
                          </div>
                          
                          <div className="border-t border-amber-100/50 pt-4 mt-6">
                            <p className="text-sm text-amber-700">
                              Perfect for those who can refer multiple businesses quickly!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation className="delay-300">
                    <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full rounded-xl overflow-hidden">
                      <div className="relative p-8">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gray-500/5 rounded-bl-full z-0"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="bg-amber-100 p-3 rounded-full">
                              <DollarSign className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-2xl font-bold">Regular Affiliate Program</h3>
                          </div>
                          <p className="text-gray-600 text-base mb-6">
                            Our standard affiliate program with great benefits
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p><span className="font-bold">20% commission</span> on all orders</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>No time pressure - refer at your own pace</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Earn commissions on all referred shop orders</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Commissions on up to 40K orders per shop</p>
                            </div>
                          </div>
                          
                          <div className="border-t border-gray-100 pt-4 mt-6">
                            <p className="text-sm text-gray-600">
                              Ideal for steady, long-term participation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </section>
              
              <section>
                <ScrollAnimation>
                  <div className="relative p-8 rounded-2xl shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white z-0"></div>
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-300 to-orange-300"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-8 text-center">How Commission Works</h3>
                      
                      <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                          <div className="flex-shrink-0 bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center">
                            <span className="text-lg font-bold text-amber-800">1</span>
                          </div>
                          <div className="bg-white rounded-xl shadow-sm p-6 border border-amber-100 flex-grow">
                            <h4 className="text-xl font-bold mb-3">Regular Affiliates</h4>
                            <p className="text-gray-600">
                              For each business you refer, you earn <span className="font-bold text-amber-700">20% commission</span> on all orders placed through their shop. 
                              This applies to up to 40,000 orders per referred business.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-6 items-start">
                          <div className="flex-shrink-0 bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center">
                            <span className="text-lg font-bold text-amber-800">2</span>
                          </div>
                          <div className="bg-white rounded-xl shadow-sm p-6 border border-amber-100 flex-grow">
                            <h4 className="text-xl font-bold mb-3">Challenge Winners</h4>
                            <p className="text-gray-600">
                              Win our 4-day challenge by referring the most businesses and receive <span className="font-bold text-amber-700">40% commission</span> for 16 months on all orders from businesses you refer.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-6 items-start">
                          <div className="flex-shrink-0 bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center">
                            <span className="text-lg font-bold text-amber-800">3</span>
                          </div>
                          <div className="bg-white rounded-xl shadow-sm p-6 border border-amber-100 flex-grow">
                            <h4 className="text-xl font-bold mb-3">Payment Details</h4>
                            <p className="text-gray-600">
                              Payments are processed monthly via bank transfer or PayPal when your balance exceeds $100, based on the previous month's orders.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </section>
            </div>
          ) : (
            <div className="space-y-24">
              <section>
                <ScrollAnimation>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full rounded-xl overflow-hidden">
                      <div className="relative p-8">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full z-0"></div>
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold mb-2">Become a Creator Partner</h3>
                          <p className="text-purple-700 text-base mb-6">
                            For content creators and influencers
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p><span className="font-bold text-purple-800">10% commission</span> on all orders from referred affiliates</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Earn from up to 40,000 orders per business</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Access to exclusive promotional materials</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Featured promotion on Halvi platforms</p>
                            </div>
                          </div>
                          
                          <div className="border-t border-purple-100/50 pt-4 mt-6">
                            <p className="text-sm text-purple-600">
                              For influencers with established audiences
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full rounded-xl overflow-hidden">
                      <div className="relative p-8">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gray-500/5 rounded-bl-full z-0"></div>
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold mb-2">Requirements</h3>
                          <p className="text-gray-600 text-base mb-6">
                            What we look for in Creator Partners
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Minimum 5,000 followers on at least one social platform</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Regularly create content relevant to businesses or consumers</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p>Engaged audience with good interaction rates</p>
                            </div>
                          </div>
                          
                          <div className="border-t border-gray-100 pt-4 mt-6">
                            <p className="text-sm text-gray-600">
                              Applications reviewed on a case-by-case basis
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </section>
              
              <section>
                <ScrollAnimation>
                  <div className="relative p-8 rounded-2xl shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0"></div>
                    <div className="absolute inset-0 w-1 bg-gradient-to-b from-purple-300 to-blue-300"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-8 text-center">Creator Partner Benefits</h3>
                      
                      <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="bg-white rounded-xl shadow-sm p-6 border border-purple-100 md:w-1/3">
                            <h4 className="text-xl font-bold mb-3">Commission Structure</h4>
                            <p className="text-gray-600">
                              Creator Partners receive 10% commission on all orders from businesses referred by their affiliates, up to 40,000 orders per business.
                            </p>
                          </div>
                          
                          <div className="bg-white rounded-xl shadow-sm p-6 border border-purple-100 md:w-1/3">
                            <h4 className="text-xl font-bold mb-3">Co-Marketing</h4>
                            <p className="text-gray-600">
                              We promote your content through our channels and provide exclusive promotional assets to maximize your affiliate network.
                            </p>
                          </div>
                          
                          <div className="bg-white rounded-xl shadow-sm p-6 border border-purple-100 md:w-1/3">
                            <h4 className="text-xl font-bold mb-3">Early Access</h4>
                            <p className="text-gray-600">
                              Get early access to new Halvi features and services before they're released to the public.
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-center mt-8">
                          <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-purple-500 to-blue-500">
                            <a href="#apply">Apply as Creator Partner</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </section>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

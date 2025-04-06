
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, Trophy, DollarSign, User, LogIn, Share2, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { HeroGeometric } from "@/components/ui/HeroGeometric";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollAnimation from "@/components/ScrollAnimation";

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

  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    referralPlan: "",
    introduction: ""
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm({
      ...applicationForm,
      [name]: value
    });
  };
  
  const handleSubmitApplication = (e, type) => {
    e.preventDefault();
    
    // Validation
    if (!applicationForm.fullName || !applicationForm.email || !applicationForm.referralPlan) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.loading(`Submitting ${type} application...`);
    
    // Simulate API call
    setTimeout(() => {
      toast.dismiss();
      toast.success(`${type} application submitted successfully!`);
    }, 1500);
  };
  
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-amber-50 to-white">
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
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Login Button for Creator Partners */}
          {mode === "creatorPartners" && (
            <div className="flex justify-center mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login to Creator Partners Dashboard
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
            </div>
          )}
          
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

                {/* Content displayed in a continuous flow */}
                <div className="space-y-16">
                  {/* 4-Day Special Challenge */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 to-orange-300 z-0"></div>
                      
                      <div className="pl-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="absolute -left-3 bg-amber-100 p-3 rounded-full border border-amber-200">
                            <Clock className="h-6 w-6 text-amber-600" />
                          </div>
                          <h3 className="text-2xl font-bold">4-Day Special Challenge</h3>
                        </div>
                        <p className="text-amber-700 text-base mb-6">
                          Compete to earn double commission rates
                        </p>
                        
                        <div className="space-y-6">
                          {[
                            { text: "Refer the most businesses in 4 days" },
                            { text: "Win Special Affiliate status for 16 months" },
                            { text: "40% commission rate - double the standard!" },
                            { text: "Commissions on all orders for 16 months" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{item.text}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-8">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                                Apply for Special Challenge
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-lg">
                              <DialogHeader>
                                <DialogTitle>Apply for 4-Day Special Challenge</DialogTitle>
                                <DialogDescription>
                                  Fill out this form to participate in our next 4-Day Special Affiliate Challenge.
                                </DialogDescription>
                              </DialogHeader>
                              
                              <form className="space-y-4 py-4" onSubmit={(e) => handleSubmitApplication(e, 'Special Challenge')}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm font-medium mb-1">First Name</label>
                                    <Input 
                                      name="fullName" 
                                      value={applicationForm.fullName} 
                                      onChange={handleInputChange}
                                      required 
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Email Address</label>
                                    <Input 
                                      type="email" 
                                      name="email" 
                                      value={applicationForm.email} 
                                      onChange={handleInputChange}
                                      required 
                                    />
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                                  <Input 
                                    type="tel" 
                                    name="phone" 
                                    value={applicationForm.phone} 
                                    onChange={handleInputChange}
                                    required 
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">How many businesses do you plan to refer?</label>
                                  <Input 
                                    type="number" 
                                    required 
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-medium mb-1">How are you planning to refer businesses to Halvi?</label>
                                  <Textarea 
                                    name="referralPlan" 
                                    value={applicationForm.referralPlan} 
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Describe your referral strategy..."
                                  />
                                </div>
                                
                                <Button 
                                  type="submit"
                                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                                >
                                  Submit Application
                                </Button>
                              </form>
                            </DialogContent>
                          </Dialog>
                          <p className="text-sm text-amber-700 mt-2">
                            Perfect for those who can refer multiple businesses quickly!
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Regular Affiliate Program */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 to-orange-300 z-0"></div>
                      
                      <div className="pl-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="absolute -left-3 bg-amber-100 p-3 rounded-full border border-amber-200">
                            <DollarSign className="h-6 w-6 text-amber-600" />
                          </div>
                          <h3 className="text-2xl font-bold">Regular Affiliate Program</h3>
                        </div>
                        <p className="text-gray-600 text-base mb-6">
                          Our standard affiliate program with great benefits
                        </p>
                        
                        <div className="space-y-6">
                          {[
                            { text: "20% commission on all orders" },
                            { text: "No time pressure - refer at your own pace" },
                            { text: "Earn commissions on all referred shop orders" },
                            { text: "Commissions on up to 40K orders per shop" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{item.text}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-8">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                                Apply for Regular Program
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-lg">
                              <DialogHeader>
                                <DialogTitle>Apply for Regular Affiliate Program</DialogTitle>
                                <DialogDescription>
                                  Fill out this form to join our standard affiliate program with 20% commission.
                                </DialogDescription>
                              </DialogHeader>
                              
                              <form className="space-y-4 py-4" onSubmit={(e) => handleSubmitApplication(e, 'Regular Affiliate')}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Full Name</label>
                                    <Input 
                                      name="fullName" 
                                      value={applicationForm.fullName} 
                                      onChange={handleInputChange}
                                      required 
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Email Address</label>
                                    <Input 
                                      type="email" 
                                      name="email" 
                                      value={applicationForm.email} 
                                      onChange={handleInputChange}
                                      required 
                                    />
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                                  <Input 
                                    type="tel" 
                                    name="phone" 
                                    value={applicationForm.phone} 
                                    onChange={handleInputChange}
                                    required 
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">Website or Social Media (optional)</label>
                                  <Input 
                                    type="url"
                                    name="instagram"
                                    value={applicationForm.instagram}
                                    onChange={handleInputChange}
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-medium mb-1">How are you planning to refer businesses to Halvi?</label>
                                  <Textarea 
                                    name="referralPlan" 
                                    value={applicationForm.referralPlan} 
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Describe your referral strategy..."
                                  />
                                </div>
                                
                                <Button 
                                  type="submit"
                                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                                >
                                  Submit Application
                                </Button>
                              </form>
                            </DialogContent>
                          </Dialog>
                          <p className="text-sm text-gray-600 mt-2">
                            Ideal for steady, long-term participation
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  {/* How Commission Works */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 to-orange-300 z-0"></div>
                      
                      <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-8">How Commission Works</h3>
                        
                        <div className="space-y-8">
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                          >
                            <div className="absolute -left-8 bg-amber-100 rounded-full h-8 w-8 flex items-center justify-center">
                              <span className="text-lg font-bold text-amber-800">1</span>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-amber-100 ml-4">
                              <h4 className="text-xl font-bold mb-3">Regular Affiliates</h4>
                              <p className="text-gray-600">
                                For each business you refer, you earn <span className="font-bold text-amber-700">20% commission</span> on all orders placed through their shop. 
                                This applies to up to 40,000 orders per referred business.
                              </p>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative"
                          >
                            <div className="absolute -left-8 bg-amber-100 rounded-full h-8 w-8 flex items-center justify-center">
                              <span className="text-lg font-bold text-amber-800">2</span>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-amber-100 ml-4">
                              <h4 className="text-xl font-bold mb-3">Challenge Winners</h4>
                              <p className="text-gray-600">
                                Win our 4-day challenge by referring the most businesses and receive <span className="font-bold text-amber-700">40% commission</span> for 16 months on all orders from businesses you refer.
                              </p>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                          >
                            <div className="absolute -left-8 bg-amber-100 rounded-full h-8 w-8 flex items-center justify-center">
                              <span className="text-lg font-bold text-amber-800">3</span>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-amber-100 ml-4">
                              <h4 className="text-xl font-bold mb-3">Payment Details</h4>
                              <p className="text-gray-600">
                                Payments are processed monthly via bank transfer or PayPal when your balance exceeds $100, based on the previous month's orders.
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Access Your Affiliate Dashboard */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 to-orange-300 z-0"></div>
                      
                      <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-6">Access Your Affiliate Dashboard</h3>
                        <p className="text-gray-600 mb-6">
                          Track your referrals, commissions, and affiliate status through our dedicated dashboard.
                        </p>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                              <LogIn className="mr-2 h-4 w-4" />
                              Access Affiliate Dashboard
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Affiliate Dashboard Access</DialogTitle>
                              <DialogDescription>
                                Login to access your affiliate dashboard or try guest mode.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <Tabs defaultValue="login" className="w-full">
                                <TabsList className="grid grid-cols-2 mb-4">
                                  <TabsTrigger value="login">Login</TabsTrigger>
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
                                </TabsContent>
                                
                                <TabsContent value="guest" className="space-y-4 text-center">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <User className="h-12 w-12 mx-auto text-amber-600 mb-2" />
                                    <h4 className="font-medium mb-2">Guest Access</h4>
                                    <p className="text-sm text-gray-600">
                                      Preview the Affiliate Dashboard without requiring login credentials.
                                    </p>
                                  </div>
                                  <Button 
                                    onClick={() => navigate("/affiliate-dashboard")} 
                                    className="w-full"
                                  >
                                    Access Guest Mode
                                  </Button>
                                </TabsContent>
                              </Tabs>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-24">
              <section>
                {/* Creator Partners Content in a continuous flow */}
                <div className="space-y-16">
                  {/* Creator Partners Program */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-300 to-blue-300 z-0"></div>
                      
                      <div className="pl-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="absolute -left-3 bg-purple-100 p-3 rounded-full border border-purple-200">
                            <Trophy className="h-6 w-6 text-purple-600" />
                          </div>
                          <h3 className="text-2xl font-bold">Become a Creator Partner</h3>
                        </div>
                        <p className="text-purple-700 text-base mb-6">
                          For content creators and influencers
                        </p>
                        
                        <div className="space-y-6">
                          {[
                            { text: "10% commission on all orders from referred affiliates" },
                            { text: "Earn from up to 40,000 orders per business" },
                            { text: "Access to exclusive promotional materials" },
                            { text: "Featured promotion on Halvi platforms" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{item.text}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-8">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                                Apply as Creator Partner
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-lg">
                              <DialogHeader>
                                <DialogTitle>Apply to be a Creator Partner</DialogTitle>
                                <DialogDescription>
                                  Fill out this form to apply for our Creator Partner program.
                                </DialogDescription>
                              </DialogHeader>
                              
                              <form className="space-y-4 py-4" onSubmit={(e) => handleSubmitApplication(e, 'Creator Partner')}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Full Name</label>
                                    <Input 
                                      name="fullName" 
                                      value={applicationForm.fullName} 
                                      onChange={handleInputChange}
                                      required 
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Email Address</label>
                                    <Input 
                                      type="email" 
                                      name="email" 
                                      value={applicationForm.email} 
                                      onChange={handleInputChange}
                                      required 
                                    />
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">Social Media Handles</label>
                                  <Input 
                                    required 
                                    name="instagram" 
                                    value={applicationForm.instagram} 
                                    onChange={handleInputChange}
                                    placeholder="Instagram, YouTube, TikTok, etc." 
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">Follower Count</label>
                                  <Input 
                                    type="number" 
                                    required 
                                    placeholder="Total followers across platforms" 
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">How are you planning to refer businesses to Halvi?</label>
                                  <Textarea 
                                    name="referralPlan" 
                                    value={applicationForm.referralPlan} 
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Describe your approach to promoting Halvi to businesses..."
                                  />
                                </div>
                                
                                <Button 
                                  type="submit"
                                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" 
                                >
                                  Submit Application
                                </Button>
                              </form>
                            </DialogContent>
                          </Dialog>
                          <p className="text-sm text-purple-600 mt-2">
                            For influencers with established audiences
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Creator Partners Requirements */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-300 to-blue-300 z-0"></div>
                      
                      <div className="pl-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="absolute -left-3 bg-purple-100 p-3 rounded-full border border-purple-200">
                            <User className="h-6 w-6 text-purple-600" />
                          </div>
                          <h3 className="text-2xl font-bold">Requirements</h3>
                        </div>
                        <p className="text-gray-600 text-base mb-6">
                          What we look for in Creator Partners
                        </p>
                        
                        <div className="space-y-6">
                          {[
                            { text: "Minimum 5,000 followers on at least one social platform" },
                            { text: "Regularly create content relevant to businesses or consumers" },
                            { text: "Engaged audience with good interaction rates" },
                            { text: "Ability to create authentic content that resonates with your audience" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{item.text}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        <p className="text-sm text-gray-600 mt-6">
                          Applications reviewed on a case-by-case basis
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Creator Partner Benefits */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-300 to-blue-300 z-0"></div>
                      
                      <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-8">Creator Partner Benefits</h3>
                        
                        <div className="space-y-8">
                          <div className="relative">
                            <div className="absolute -left-8 bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center">
                              <Share2 className="h-4 w-4 text-purple-600" />
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-purple-100 ml-4">
                              <h4 className="text-xl font-bold mb-3">Commission Structure</h4>
                              <p className="text-gray-600">
                                Creator Partners receive 10% commission on all orders from businesses referred by their affiliates, up to 40,000 orders per business.
                              </p>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute -left-8 bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center">
                              <TrendingUp className="h-4 w-4 text-purple-600" />
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-purple-100 ml-4">
                              <h4 className="text-xl font-bold mb-3">Co-Marketing</h4>
                              <p className="text-gray-600">
                                We promote your content through our channels and provide exclusive promotional assets to maximize your affiliate network.
                              </p>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute -left-8 bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center">
                              <Zap className="h-4 w-4 text-purple-600" />
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-purple-100 ml-4">
                              <h4 className="text-xl font-bold mb-3">Early Access</h4>
                              <p className="text-gray-600">
                                Get early access to new Halvi features and services before they're released to the public.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Access Your Dashboard */}
                  <ScrollAnimation>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-300 to-blue-300 z-0"></div>
                      
                      <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-6">Access Your Creator Dashboard</h3>
                        <p className="text-gray-600 mb-6">
                          Track your network performance, commission earnings, and access exclusive content.
                        </p>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                              <LogIn className="mr-2 h-4 w-4" />
                              Access Creator Dashboard
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Creator Dashboard Access</DialogTitle>
                              <DialogDescription>
                                Login to access your creator dashboard or try guest mode.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <Tabs defaultValue="login" className="w-full">
                                <TabsList className="grid grid-cols-2 mb-4">
                                  <TabsTrigger value="login">Login</TabsTrigger>
                                  <TabsTrigger value="guest">Guest Mode</TabsTrigger>
                                </TabsList>
                                
                                <TabsContent value="login" className="space-y-4">
                                  <form onSubmit={handleLogin} className="space-y-4">
                                    <div>
                                      <label htmlFor="creator-email" className="block text-sm font-medium mb-1">Email</label>
                                      <Input
                                        id="creator-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                      />
                                    </div>
                                    
                                    <div>
                                      <label htmlFor="creator-password" className="block text-sm font-medium mb-1">Password</label>
                                      <Input
                                        id="creator-password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                      />
                                    </div>
                                    
                                    <Button type="submit" className="w-full">Login to Dashboard</Button>
                                  </form>
                                </TabsContent>
                                
                                <TabsContent value="guest" className="space-y-4 text-center">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <User className="h-12 w-12 mx-auto text-purple-600 mb-2" />
                                    <h4 className="font-medium mb-2">Guest Access</h4>
                                    <p className="text-sm text-gray-600">
                                      Preview the Creator Dashboard without requiring login credentials.
                                    </p>
                                  </div>
                                  <Button 
                                    onClick={() => navigate("/creator-partners-dashboard")} 
                                    className="w-full"
                                  >
                                    Access Guest Mode
                                  </Button>
                                </TabsContent>
                              </Tabs>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

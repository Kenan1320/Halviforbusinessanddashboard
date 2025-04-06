
import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, DollarSign, Users, TrendingUp, Share2, 
  ChevronDown, Clock, Award, Zap, LogIn, Calendar, BookOpen 
} from "lucide-react";
import { HeroGeometric } from "@/components/ui/HeroGeometric";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import VibratingButton from "@/components/VibratingButton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Affiliate() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.9], [0, 100]);
  
  const scrollLineRef = useRef(null);
  const howItWorksRef = useRef(null);
  const howItWorksInView = useInView(howItWorksRef, { once: false });
  const challengeRef = useRef(null);
  const challengeInView = useInView(challengeRef, { once: false });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: false });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [countdownTime, setCountdownTime] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 33
  });
  const [registeredCount, setRegisteredCount] = useState(7);
  const [activeTab, setActiveTab] = useState("challenge");
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [leaderboardUpdateTime, setLeaderboardUpdateTime] = useState(new Date());
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime(prevTime => {
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        if (newDays < 0) {
          return {
            days: 3,
            hours: 12,
            minutes: 45,
            seconds: 33
          };
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setLeaderboardUpdateTime(new Date());
    }, 60000);
    
    return () => clearInterval(updateInterval);
  }, []);

  const benefits = [
    {
      title: "Earn Commission",
      description: "Earn 20% of Halvi's profit from every business you refer (up to $40K in orders)",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Special Affiliate Status",
      description: "Win challenges to become a Special Affiliate and earn 40% for 16 months",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "No Cap on Referrals",
      description: "There's no limit to how many businesses you can refer",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "4-Day Challenges",
      description: "Compete in regular 4-day challenges for bonus rewards and recognition",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted! Check your email for login details.", {
        description: "We'll review your application and send you access to your affiliate dashboard.",
        duration: 5000
      });
      
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  const handleRegisterForChallenge = () => {
    const is4thDay = countdownTime.days === 0 && countdownTime.hours < 17;
    
    if (!is4thDay) {
      setShowRegistrationPopup(true);
    } else {
      if (registeredCount < 10) {
        setRegisteredCount(prev => prev + 1);
        toast.success("You've been registered for the challenge!");
      } else {
        toast.error("Sorry, all spots are filled for this challenge.");
      }
    }
  };
  
  const addToGoogleCalendar = () => {
    const challengeDate = new Date();
    challengeDate.setDate(challengeDate.getDate() + countdownTime.days);
    challengeDate.setHours(7, 0, 0, 0);
    
    const startTime = challengeDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endTime = new Date(challengeDate.getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    
    const eventDetails = {
      action: 'TEMPLATE',
      text: 'Halvi Affiliate Challenge Registration',
      dates: `${startTime}/${endTime}`,
      details: 'Register for the 4-Day Special Affiliate Challenge on Halvi to earn Special Affiliate status and 40% commission.',
      location: 'https://halvi.app/affiliates',
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?${Object.entries(eventDetails)
      .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
      .join('&')}`;
    
    window.open(googleCalendarUrl, '_blank');
    toast.success("Challenge added to your Google Calendar!");
  };
  
  const handleAccessDashboard = () => {
    setShowLoginDialog(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <Toaster position="top-right" />
      <Navbar />
      
      <div 
        ref={scrollLineRef}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 h-1/2 w-1 bg-gray-200/30 dark:bg-gray-700/30 rounded-full hidden lg:block z-10"
      >
        <motion.div 
          className="absolute top-0 left-0 w-full bg-amber-500 rounded-full"
          style={{ height: scrollYProgress, transformOrigin: "top" }}
        />
        
        <motion.div 
          className={`absolute w-4 h-4 rounded-full -left-1.5 bg-white border-2 border-amber-500 transition-all duration-300 ${howItWorksInView ? 'scale-150' : ''}`}
          style={{ top: y1 }}
        />
        
        <motion.div 
          className={`absolute w-4 h-4 rounded-full -left-1.5 bg-white border-2 border-amber-500 transition-all duration-300 ${challengeInView ? 'scale-150' : ''}`}
          style={{ top: y2 }}
        />
        
        <motion.div 
          className={`absolute w-4 h-4 rounded-full -left-1.5 bg-white border-2 border-amber-500 transition-all duration-300 ${faqInView ? 'scale-150' : ''}`}
          style={{ top: y3 }}
        />
      </div>
      
      <HeroGeometric 
        badge="Halvi Affiliate" 
        title1="Join Our" 
        title2="Affiliate Program" 
      >
        <div className="flex flex-col items-center space-y-4 mt-8">
          <VibratingButton 
            text={
              <div className="flex flex-col">
                <span>Access Your Dashboard</span>
                <span>Track Your Earnings</span>
              </div>
            }
            link="#"
            icon={<LogIn className="ml-2 h-5 w-5" />}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleAccessDashboard}
          />
          
          <Button asChild variant="secondary" size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600 mt-4">
            <Link to="/affiliate-get-familiar" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Get Familiar with the Affiliate Program
            </Link>
          </Button>
        </div>
      </HeroGeometric>

      <div className="container mx-auto px-4 py-8">
        <div className="mt-10 mb-8">
          <Tabs 
            defaultValue={activeTab} 
            onValueChange={setActiveTab}
            className="max-w-6xl mx-auto"
          >
            <TabsList className="grid w-full bg-white/10 backdrop-blur-md dark:bg-gray-950/50 rounded-full p-1 mb-4 md:mb-0">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <TabsTrigger 
                  value="challenge" 
                  className="rounded-full py-3 text-base font-medium w-full"
                >
                  4-Day Special Challenge
                </TabsTrigger>
                <TabsTrigger 
                  value="regular" 
                  className="rounded-full py-3 text-base font-medium w-full"
                >
                  Affiliate Program
                </TabsTrigger>
              </div>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {activeTab === "challenge" && (
        <section className="py-16 px-4" ref={challengeRef}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The 4-Day Challenge</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Compete with other affiliates and earn Special Affiliate status
              </p>
            </div>
            
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-white to-amber-50 border border-amber-100 p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center text-amber-800">
                  <Clock className="mr-3 h-6 w-6 text-amber-600" />
                  Challenge Overview
                </h3>
                
                <div className="space-y-4 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Zap className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">10 Affiliates Compete</h4>
                      <p className="text-gray-600">Limited spots make competition exciting and exclusive</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Zap className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Refer the Most Businesses</h4>
                      <p className="text-gray-600">The affiliate who refers the most businesses in 4 days wins</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Award className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Win Special Affiliate Status</h4>
                      <p className="text-gray-600">Earn exclusive privileges and recognition in the Halvi community</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <DollarSign className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Double Commission Rate</h4>
                      <p className="text-gray-600">Special Affiliates earn 40% of Halvi's profit for 16 months</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-white to-amber-50 border border-amber-100 p-8 rounded-xl shadow-md"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-6 text-amber-800">Challenge Overview</h3>
                    <div className="flex space-x-4 mb-6">
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10">{String(countdownTime.days).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Days</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                      
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10">{String(countdownTime.hours).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Hours</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                      
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10">{String(countdownTime.minutes).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Minutes</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                      
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10 animate-pulse">{String(countdownTime.seconds).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Seconds</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                          >
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
                          
                          <form className="space-y-4 py-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="first-name">
                                  First Name
                                </label>
                                <Input 
                                  id="first-name"
                                  name="firstName"
                                  type="text" 
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="last-name">
                                  Last Name
                                </label>
                                <Input 
                                  id="last-name"
                                  name="lastName"
                                  type="text" 
                                  required
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="email">
                                Email Address
                              </label>
                              <Input 
                                id="email"
                                name="email"
                                type="email" 
                                required
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                                Phone Number
                              </label>
                              <Input 
                                id="phone"
                                name="phone"
                                type="tel" 
                                required
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="referral-plan">
                                How many businesses do you plan to refer in the 4-day period?
                              </label>
                              <Input 
                                id="referral-plan"
                                name="referralPlan"
                                type="number" 
                                required
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="referral-strategy">
                                How are you planning to refer business to Halvi?
                              </label>
                              <Textarea 
                                id="referral-strategy"
                                name="referralStrategy"
                                rows={3}
                                required
                              />
                            </div>
                            
                            <Button 
                              type="submit"
                              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                              size="lg"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                      
                      <div className="flex items-center">
                        <span className="relative mr-2 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <p className="text-sm text-gray-500">
                          {registeredCount}/10 spots filled
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-center text-amber-800">Current Leaderboard</h3>
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <table className="w-full text-sm">
                        <thead className="bg-gradient-to-r from-amber-100 to-orange-100">
                          <tr>
                            <th className="py-3 px-4 text-left font-medium">Rank</th>
                            <th className="py-3 px-4 text-left font-medium">Name</th>
                            <th className="py-3 px-4 text-left font-medium">Stores</th>
                            <th className="py-3 px-4 text-left font-medium">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="bg-amber-50">
                            <td className="py-3 px-4 font-medium">1</td>
                            <td className="py-3 px-4 font-medium">Sarah J.</td>
                            <td className="py-3 px-4">8</td>
                            <td className="py-3 px-4">$12,450</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">2</td>
                            <td className="py-3 px-4">Ahmad M.</td>
                            <td className="py-3 px-4">7</td>
                            <td className="py-3 px-4">$10,320</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">3</td>
                            <td className="py-3 px-4">Priya K.</td>
                            <td className="py-3 px-4">6</td>
                            <td className="py-3 px-4">$9,150</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">4</td>
                            <td className="py-3 px-4">John D.</td>
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4">$7,200</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">5</td>
                            <td className="py-3 px-4">Leila H.</td>
                            <td className="py-3 px-4">3</td>
                            <td className="py-3 px-4">$5,830</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
      
      {activeTab === "regular" && (
        <motion.section 
          className="py-16 px-4" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Regular Affiliate Program</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Earn 20% commission on every business you refer to Halvi
              </p>
            </div>
            
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-white to-amber-50 border border-amber-100 p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center text-amber-800">
                  <DollarSign className="mr-3 h-6 w-6 text-amber-600" />
                  How It Works
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Share2 className="h-8 w-8 text-amber-600" />,
                      title: "Share Your Link",
                      description: "Get your unique referral link after applying and share it with potential businesses"
                    },
                    {
                      icon: <Users className="h-8 w-8 text-amber-600" />,
                      title: "Businesses Sign Up",
                      description: "When businesses use your link to join Halvi, they're automatically tracked as your referrals"
                    },
                    {
                      icon: <DollarSign className="h-8 w-8 text-amber-600" />,
                      title: "Earn Commissions",
                      description: "Earn 20% of Halvi's profit from each referred business, up to $40K in orders"
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-sm"
                    >
                      <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-center">{step.title}</h4>
                      <p className="text-center text-gray-600">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                        Apply for Regular Affiliate Program
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Apply as a Regular Affiliate</DialogTitle>
                        <DialogDescription>
                          Fill out this form to join our standard affiliate program with 20% commission.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <form className="space-y-4 py-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="first-name">
                              First Name
                            </label>
                            <Input 
                              id="first-name"
                              name="firstName"
                              type="text" 
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="last-name">
                              Last Name
                            </label>
                            <Input 
                              id="last-name"
                              name="lastName"
                              type="text" 
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email Address
                          </label>
                          <Input 
                            id="email"
                            name="email"
                            type="email" 
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="phone">
                            Phone Number
                          </label>
                          <Input 
                            id="phone"
                            name="phone"
                            type="tel" 
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="website">
                            Website/Social Media (optional)
                          </label>
                          <Input 
                            id="website"
                            name="website"
                            type="url" 
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="referral-plan">
                            How do you plan to refer businesses to Halvi?
                          </label>
                          <Textarea 
                            id="referral-plan"
                            name="referralPlan"
                            rows={4}
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit"
                          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-white to-amber-50 border border-amber-100 p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center text-amber-800">
                  <Award className="mr-3 h-6 w-6 text-amber-600" />
                  Program Benefits
                </h3>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg text-amber-600">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
      
      <section className="py-16 px-4 bg-gray-50" ref={howItWorksRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our affiliate program rewards you for bringing new businesses to the Halvi platform
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-1 bg-amber-200 rounded-full hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Apply",
                  description: "Fill out our online application form to join the program."
                },
                {
                  number: "02",
                  title: "Get Approved",
                  description: "Our team will review your application within 24-48 hours."
                },
                {
                  number: "03",
                  title: "Receive Dashboard Access",
                  description: "Get your login details and access to your affiliate dashboard."
                },
                {
                  number: "04",
                  title: "Start Referring",
                  description: "Share your unique links with potential businesses."
                },
                {
                  number: "05",
                  title: "Earn Commission",
                  description: "Earn up to 20% of Halvi's profit for every successful referral."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="ml-0 md:ml-24 relative"
                >
                  <div className="hidden md:block absolute -left-28 top-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:hidden flex-shrink-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <div className="hidden md:block">
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4" ref={faqRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How much can I earn as an affiliate?",
                  answer: "Regular affiliates earn 20% of Halvi's profit from every business they refer, up to $40,000 in orders. Special Affiliates, who win our 4-day challenges, earn 40% for 16 months."
                },
                {
                  question: "When do I get paid?",
                  answer: "Affiliate payments are processed monthly. You'll receive your earnings by the 10th of each month for the previous month's activity."
                },
                {
                  question: "How long does approval take?",
                  answer: "Most applications are reviewed within 24-48 hours. Once approved, you'll receive your login credentials and affiliate dashboard access via email."
                },
                {
                  question: "What makes someone a Special Affiliate?",
                  answer: "Special Affiliates are the winners of our 4-day challenges. They receive a higher commission rate (40% vs 20%) for a period of 16 months."
                },
                {
                  question: "Can I refer multiple businesses?",
                  answer: "Yes! There's no limit to how many businesses you can refer. Each successful referral generates commission for you."
                },
                {
                  question: "How does the 4-day challenge work?",
                  answer: "You'll compete with 9 other affiliates over a 4-day period to refer the most businesses. The winner earns Special Affiliate status with 40% commission for 16 months."
                },
                {
                  question: "Is there a fee to join the affiliate program?",
                  answer: "No, joining the Halvi Affiliate Program is completely free. We believe in creating opportunity without barriers."
                },
                {
                  question: "What marketing materials are provided?",
                  answer: "Once approved, you'll have access to banners, email templates, social media content, and other marketing materials through your affiliate dashboard."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white rounded-lg shadow-sm">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Dialog open={showRegistrationPopup} onOpenChange={setShowRegistrationPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reserve Your Spot</DialogTitle>
            <DialogDescription>
              Registration opens at 7:00 AM on {new Date(new Date().getTime() + (countdownTime.days * 24 * 60 * 60 * 1000)).toLocaleDateString()}.
              Add this event to your calendar to make sure you don't miss it!
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="bg-amber-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-amber-600" />
                Important Registration Info
              </h4>
              <ul className="text-sm space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Only 10 participants can join each challenge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Spots are filled on a first-come, first-served basis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Registration opens exactly at 7:00 AM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Current spots filled: {registeredCount}/10</span>
                </li>
              </ul>
            </div>
            
            <Button 
              onClick={addToGoogleCalendar}
              className="w-full flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Add to Google Calendar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Access Your Dashboard</DialogTitle>
            <DialogDescription>
              If you've received your login credentials via email after submitting an application, you can access your dashboard to track earnings.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setShowLoginDialog(false)}>
                Cancel
              </Button>
              <Button 
                className="bg-gradient-to-r from-amber-500 to-orange-600"
                onClick={() => window.location.href = "/affiliate-dashboard"}
              >
                Login
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-full border-t border-gray-200 my-2"></div>
              <span className="px-2 bg-white text-sm text-gray-500">OR</span>
              <div className="w-full border-t border-gray-200 my-2"></div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setShowLoginDialog(false);
                window.location.href = "/affiliate-dashboard";
              }}
            >
              Continue as Guest
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
}

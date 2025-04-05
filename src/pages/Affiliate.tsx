
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Users, TrendingUp, Share2, ChevronDown, Clock, Award, Zap, LogIn } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/GlassCard";
import VibratingButton from "@/components/VibratingButton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Affiliate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdownTime, setCountdownTime] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 33
  });
  const [registeredCount, setRegisteredCount] = useState(7);
  const [activeTab, setActiveTab] = useState("challenge");

  // Rolling countdown effect
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
          // Reset to next challenge
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted! Check your email for login details.", {
        description: "We'll review your application and send you access to your affiliate dashboard.",
        duration: 5000
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground>
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                Halvi Affiliate Program
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Earn passive income by referring businesses to Halvi's platform.
                Join our affiliate program and earn up to 40% of our profit share.
              </p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
                  >
                    Access Your Dashboard - Track Your Earnings <LogIn className="ml-2" />
                  </Button>
                </DialogTrigger>
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
                  <div className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-to-r from-amber-500 to-orange-600">
                      Login
                    </Button>
                  </div>
                  <div className="text-center text-sm text-gray-500 mt-4">
                    Haven't applied yet? <Link to="#apply-now" className="text-amber-500 hover:underline">Apply now</Link>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="mt-10 mb-8">
              <Tabs 
                defaultValue={activeTab} 
                onValueChange={setActiveTab}
                className="max-w-4xl mx-auto"
              >
                <TabsList className="grid grid-cols-2 w-full bg-white/10 backdrop-blur-md dark:bg-gray-950/50 rounded-full p-1">
                  <TabsTrigger value="challenge" className="rounded-full py-3 text-base font-medium">
                    4-Day Special Challenge
                  </TabsTrigger>
                  <TabsTrigger value="regular" className="rounded-full py-3 text-base font-medium">
                    Regular Affiliate Program
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our affiliate program rewards you for bringing new businesses to the Halvi platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900/30 dark:to-orange-800/30 rounded-lg text-amber-600 dark:text-amber-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeTab === "challenge" && (
        <section className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The 4-Day Challenge</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Compete with other affiliates and earn Special Affiliate status
              </p>
            </div>
            
            <GlassCard className="mb-12 p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-900/20 dark:to-orange-900/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Challenge Overview</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>10 affiliates compete over 4 days</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Refer the most new businesses to win</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Winner earns Special Affiliate status</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Special Affiliates earn 40% of Halvi's profit for 16 months</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Next Challenge Begins:</h4>
                    <div className="flex space-x-4 mb-6">
                      {/* Days counter with rolling effect */}
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10">{String(countdownTime.days).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Days</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                      
                      {/* Hours counter with rolling effect */}
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10">{String(countdownTime.hours).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Hours</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                      
                      {/* Minutes counter with rolling effect */}
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10">{String(countdownTime.minutes).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Minutes</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                      
                      {/* Seconds counter with rolling effect */}
                      <div className="relative bg-gradient-to-b from-amber-500 to-orange-600 text-white py-3 px-5 rounded-md flex flex-col items-center overflow-hidden">
                        <span className="text-2xl font-bold relative z-10 animate-pulse">{String(countdownTime.seconds).padStart(2, '0')}</span>
                        <span className="text-xs relative z-10">Seconds</span>
                        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                        Register for Next Challenge ({registeredCount}/10 spots filled)
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      
                      <p className="text-sm text-gray-500">
                        Challenge opens at 7:00 AM on the 4th day. Limited to 10 participants only.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-center">Current Leaderboard</h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-sm">
                      <thead className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-800/20">
                        <tr>
                          <th className="py-3 px-4 text-left font-medium">Rank</th>
                          <th className="py-3 px-4 text-left font-medium">Name</th>
                          <th className="py-3 px-4 text-left font-medium">Stores</th>
                          <th className="py-3 px-4 text-left font-medium">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="bg-amber-50 dark:bg-amber-900/20">
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
                  <p className="text-sm text-gray-500 mt-2 text-center">Updated every minute</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      )}
      
      {activeTab === "regular" && (
        <section className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Regular Affiliate Program</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Earn 20% commission on every business you refer to Halvi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <GlassCard className="p-6 hover:shadow-lg transition-all">
                <div className="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Share Your Link</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Get your unique referral link after applying and share it with potential businesses
                </p>
              </GlassCard>
              
              <GlassCard className="p-6 hover:shadow-lg transition-all">
                <div className="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Businesses Sign Up</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  When businesses use your link to join Halvi, they're automatically tracked as your referrals
                </p>
              </GlassCard>
              
              <GlassCard className="p-6 hover:shadow-lg transition-all">
                <div className="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Earn Commissions</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Earn 20% of Halvi's profit from each referred business, up to $40K in orders
                </p>
              </GlassCard>
            </div>
          </div>
        </section>
      )}
      
      <section id="apply-now" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">How to Become an Affiliate</h2>
              
              <div className="space-y-8">
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
                    className="flex"
                  >
                    <div className="mr-6 flex-shrink-0">
                      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Apply as an Affiliate</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
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
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6 text-left"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

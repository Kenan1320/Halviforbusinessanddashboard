
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
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

  // Simulate occasional increment in registered count
  useEffect(() => {
    const randomInterval = Math.floor(Math.random() * 60000) + 30000; // 30-90 seconds
    const timer = setInterval(() => {
      if (registeredCount < 10) {
        setRegisteredCount(prev => Math.min(prev + 1, 10));
        toast.info(`New affiliate just registered! ${registeredCount + 1}/10 spots filled`);
      }
    }, randomInterval);
    
    return () => clearInterval(timer);
  }, [registeredCount]);

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

  // Challenge application schema
  const challengeSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number required"),
    strategy: z.string().min(10, "Please describe your strategy")
  });

  // Regular affiliate application schema
  const regularSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number required"),
    website: z.string().optional(),
    referralPlan: z.string().min(10, "Please describe your referral plan")
  });

  // Forms for both types of applications
  const challengeForm = useForm({
    resolver: zodResolver(challengeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      strategy: ""
    }
  });

  const regularForm = useForm({
    resolver: zodResolver(regularSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      website: "",
      referralPlan: ""
    }
  });

  // Handle regular affiliate form submission
  const handleRegularSubmit = (data: z.infer<typeof regularSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted! Check your email for login details.", {
        description: "We'll review your application and send you access to your affiliate dashboard.",
        duration: 5000
      });
      
      // Reset form
      regularForm.reset();
    }, 1500);
  };

  // Handle challenge application form submission
  const handleChallengeSubmit = (data: z.infer<typeof challengeSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (registeredCount >= 10) {
        toast.error("All spots have been filled for this challenge!", {
          description: "Please try again for the next challenge starting in 4 days.",
          duration: 5000
        });
      } else {
        setRegisteredCount(prev => Math.min(prev + 1, 10));
        toast.success("Challenge application confirmed! Check your email for details.", {
          description: "You've secured your spot in the upcoming 4-Day Challenge.",
          duration: 5000
        });
        challengeForm.reset();
      }
    }, 1500);
  };

  // Handle Google Calendar event creation
  const handleAddToCalendar = () => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + countdownTime.days);
    startDate.setHours(7, 0, 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setHours(8, 0, 0, 0);
    
    const eventTitle = "Halvi 4-Day Challenge Registration Opens";
    const eventDescription = "Registration for the next Halvi 4-Day Special Affiliate Challenge opens. Be ready to secure your spot!";
    const eventLocation = "Online - Halvi Platform";
    
    // Create Google Calendar URL with parameters
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate.toISOString().replace(/-|:|\.\d+/g, "").slice(0, 15)}/${endDate.toISOString().replace(/-|:|\.\d+/g, "").slice(0, 15)}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
    
    window.open(googleCalendarUrl, "_blank");
    
    toast.success("Event details added to your clipboard!", {
      description: "Google Calendar will open in a new tab."
    });
  };

  const isRegistrationOpen = countdownTime.days === 0 && countdownTime.hours === 0 && countdownTime.minutes < 15;

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
                    className="w-auto max-w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
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
                
                <TabsContent value="challenge" className="mt-6">
                  {/* Challenge content */}
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
                          
                          {isRegistrationOpen ? (
                            <Button 
                              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                              disabled={registeredCount >= 10}
                            >
                              {registeredCount >= 10 ? 
                                "All Spots Filled - Wait for Next Challenge" : 
                                `Register for Current Challenge (${registeredCount}/10 spots filled)`}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          ) : (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button 
                                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                                >
                                  Register for Next Challenge ({registeredCount}/10 spots filled)
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md">
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Registration Opens Soon</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    <p className="mb-4">Registration opens at 7:00 AM on {countdownTime.days === 0 ? "tomorrow" : `day ${4-countdownTime.days} of the current challenge`}.</p>
                                    <p>Add this event to your calendar to make sure you don't miss it! Only the first 10 registrations will be accepted.</p>
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    className="bg-gradient-to-r from-amber-500 to-orange-600" 
                                    onClick={handleAddToCalendar}
                                  >
                                    Add to Google Calendar
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          )}
                          
                          <div className="mt-3 flex items-center gap-2">
                            <div className="relative">
                              <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                            </div>
                            <p className="text-sm text-gray-500">
                              {registeredCount}/10 spots filled • Opens at 7:00 AM on the 4th day
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
                        <div className="mt-2 flex items-center justify-center gap-2">
                          <div className="relative">
                            <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
                          </div>
                          <p className="text-xs text-gray-500">Updated every minute</p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                  
                  {/* Challenge application form */}
                  <Card className="mb-12 bg-white dark:bg-gray-800 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold">Apply for 4-Day Challenge</h3>
                        <div className="flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full">
                          <div className="relative">
                            <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                          </div>
                          <span className="text-sm font-medium">{registeredCount}/10 spots filled</span>
                        </div>
                      </div>
                      
                      <p className="mb-6 text-gray-600 dark:text-gray-300">
                        Submit your application for the next 4-Day Challenge. If selected, you'll compete to become a Special Affiliate with 40% commission rate.
                      </p>
                      
                      <Form {...challengeForm}>
                        <form onSubmit={challengeForm.handleSubmit(handleChallengeSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={challengeForm.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={challengeForm.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={challengeForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={challengeForm.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="(123) 456-7890" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={challengeForm.control}
                            name="strategy"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your 4-Day Strategy</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe how you plan to refer businesses during the 4-day challenge..." 
                                    className="min-h-[120px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                            disabled={isSubmitting || registeredCount >= 10}
                          >
                            {isSubmitting ? "Submitting..." : registeredCount >= 10 ? "All Spots Filled" : "Submit Application"}
                            {!isSubmitting && registeredCount < 10 && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                          
                          {registeredCount >= 10 && (
                            <p className="text-center text-amber-600 dark:text-amber-400 text-sm mt-2">
                              All spots are currently filled. Add the next opening to your calendar!
                            </p>
                          )}
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="regular" className="mt-6">
                  {/* Regular program content */}
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
                  
                  {/* Regular application form */}
                  <Card className="bg-white dark:bg-gray-800 shadow-lg mb-12">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6">Apply as a Regular Affiliate</h3>
                      
                      <p className="mb-6 text-gray-600 dark:text-gray-300">
                        Join our regular affiliate program and start earning 20% commission on every business you refer to Halvi.
                      </p>
                      
                      <Form {...regularForm}>
                        <form onSubmit={regularForm.handleSubmit(handleRegularSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={regularForm.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={regularForm.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={regularForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={regularForm.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="(123) 456-7890" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={regularForm.control}
                            name="website"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Website/Social Media (optional)</FormLabel>
                                <FormControl>
                                  <Input type="url" placeholder="https://yourwebsite.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={regularForm.control}
                            name="referralPlan"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How do you plan to refer businesses to Halvi?</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe your referral strategy..." 
                                    className="min-h-[120px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
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
      
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
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

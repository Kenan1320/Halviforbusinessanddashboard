
import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Check, CopyIcon, Clock, Award, ArrowRight, TrendingUp, 
  Users, Calendar, Plus, Info
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AffiliateProgram() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });
  const [referralLink, setReferralLink] = useState("https://halvi.app/ref/user123");
  const [copied, setCopied] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(true);
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [showChallengeDialog, setShowChallengeDialog] = useState(false);
  const [registeredCount, setRegisteredCount] = useState(6);
  const [leaderboardUpdateTime, setLeaderboardUpdateTime] = useState(new Date());

  // Mock data for the affiliate dashboard
  const affiliateData = {
    totalClicks: 1432,
    conversions: 34,
    totalSales: "$48,750",
    earnedCommissions: "$9,750",
    referredStores: [
      { 
        name: "Barakah Halal Market", 
        date: "2025-03-01", 
        revenue: "$22,500", 
        commission: "$4,500",
        progress: 56 
      },
      { 
        name: "Medina Grill", 
        date: "2025-02-15", 
        revenue: "$15,750", 
        commission: "$3,150",
        progress: 39 
      },
      { 
        name: "Al-Salam Goods", 
        date: "2025-01-20", 
        revenue: "$10,500", 
        commission: "$2,100",
        progress: 26 
      },
    ],
    specialAffiliateStores: [
      { 
        name: "Halal Delights", 
        monthsLeft: 14,
        revenue: "$12,400", 
        commission: "$4,960", // 40%
      }
    ]
  };

  // Mock leaderboard data
  const leaderboardData = [
    { name: "Ahmed S.", storesReferred: 3, totalValue: "$12,500", rank: 1 },
    { name: "Fatima K.", storesReferred: 2, totalValue: "$10,200", rank: 2 },
    { name: "Mohammad R.", storesReferred: 2, totalValue: "$8,750", rank: 3 },
    { name: "Aisha L.", storesReferred: 1, totalValue: "$7,300", rank: 4 },
    { name: "Yousef A.", storesReferred: 1, totalValue: "$6,850", rank: 5 },
    { name: "Sarah N.", storesReferred: 1, totalValue: "$5,400", rank: 6 },
    { name: "Omar T.", storesReferred: 1, totalValue: "$4,950", rank: 7 },
    { name: "Layla H.", storesReferred: 1, totalValue: "$3,700", rank: 8 },
    { name: "Kareem J.", storesReferred: 0, totalValue: "$0", rank: 9 },
    { name: "Noor Z.", storesReferred: 0, totalValue: "$0", rank: 10 }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          setActiveChallenge(false);
          // Reset for next challenge
          return { days: 4, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  // Leaderboard update time simulation
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setLeaderboardUpdateTime(new Date());
    }, 60000); // Every minute
    
    return () => clearInterval(updateInterval);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  
  const handleRegisterForChallenge = () => {
    // Check if it's the 4th day and 7 AM or later
    const is4thDay = countdown.days === 0 && countdown.hours < 17;
    
    if (!is4thDay) {
      setShowChallengeDialog(true);
    } else if (registeredCount < 10) {
      setRegisteredCount(prev => prev + 1);
      toast.success("You've been registered for the challenge!");
    } else {
      toast.error("Sorry, all spots are filled for this challenge.");
    }
  };
  
  const addToGoogleCalendar = () => {
    // Calculate the challenge start date
    const challengeDate = new Date();
    challengeDate.setDate(challengeDate.getDate() + countdown.days);
    challengeDate.setHours(7, 0, 0, 0); // 7 AM
    
    // Format the date for Google Calendar
    const startTime = challengeDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endTime = new Date(challengeDate.getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    
    // Create the Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Halvi Affiliate Challenge Registration")}&dates=${startTime}/${endTime}&details=${encodeURIComponent("Register for the 4-Day Special Challenge on Halvi to earn 40% commission for 16 months.")}&location=${encodeURIComponent("https://halvi.app/affiliate-program")}`;

    // Open in a new tab
    window.open(googleCalendarUrl, '_blank');
    
    toast.success("Challenge added to your Google Calendar!");
    setShowChallengeDialog(false);
  };

  // Login form if not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-950">
        <Toaster position="top-right" />
        <Navbar />
        
        <div className="flex-grow flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
                Halvi Affiliate Program
              </h1>
              <p className="text-gray-400">Sign in to access your affiliate dashboard</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-white">Affiliate Login</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400" htmlFor="email">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        required 
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400" htmlFor="password">Password</label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        required
                        className="bg-gray-800 border-gray-700 text-white" 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                    >
                      Access Dashboard
                    </Button>
                  </form>
                  <div className="mt-4 text-center text-sm text-gray-500">
                    <p>Not registered yet? <Link to="/signup" className="text-amber-400 hover:underline">Sign up</Link> to become an affiliate</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // Affiliate Dashboard (post-login)
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Toaster position="top-right" />
      <Navbar />
      
      {/* Mode selector at the very top */}
      <div className="fixed top-0 left-0 right-0 z-50 pt-16 px-4 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto max-w-6xl"
        >
          <Tabs defaultValue="dashboard" value={currentTab} onValueChange={setCurrentTab} className="mb-4 mt-4">
            <TabsList className="bg-gray-900 border border-gray-800 w-full grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Dashboard</TabsTrigger>
              <TabsTrigger value="challenge" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Challenge</TabsTrigger>
              <TabsTrigger value="referrals" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Referrals</TabsTrigger>
              <TabsTrigger value="special" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Special Status</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
      </div>
      
      <main className="flex-grow pt-40 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Challenge Countdown Timer always shown at top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 md:p-6 shadow-lg shadow-amber-900/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">4-Day Special Affiliate Challenge</h2>
                <p className="text-white/80">Refer the most stores and earn 40% profit share for 16 months!</p>
                
                {activeChallenge ? (
                  <p className="text-sm text-white/70 mt-2 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Current challenge ends in:
                  </p>
                ) : (
                  <p className="text-sm text-white/70 mt-2 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Next challenge begins in:
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hours" },
                  { value: countdown.minutes, label: "Minutes" },
                  { value: countdown.seconds, label: "Seconds" }
                ].map((item, index) => (
                  <div key={index} className="bg-black/20 p-2 md:p-3 rounded-lg">
                    <div className="text-2xl md:text-3xl font-bold text-white">{item.value.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
            
          {/* Dashboard Tab Content */}
          <TabsContent value="dashboard" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { title: "Total Clicks", value: affiliateData.totalClicks, icon: <TrendingUp className="h-5 w-5 text-amber-400" /> },
                { title: "Conversions", value: affiliateData.conversions, icon: <Check className="h-5 w-5 text-green-400" /> },
                { title: "Total Sales", value: affiliateData.totalSales, icon: <Users className="h-5 w-5 text-blue-400" /> },
                { title: "Earned Commissions", value: affiliateData.earnedCommissions, icon: <Award className="h-5 w-5 text-purple-400" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-400">{stat.title}</p>
                          <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        </div>
                        <div className="rounded-full bg-gray-800 p-3">
                          {stat.icon}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Your Referral Link</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Input 
                      value={referralLink} 
                      readOnly 
                      className="bg-gray-800 border-gray-700 text-white flex-grow mr-2"
                    />
                    <Button 
                      onClick={handleCopyLink}
                      variant="outline"
                      className="border-gray-700 text-white hover:bg-gray-800"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Share this link with businesses to earn 20% of Halvi's profit for each referral
                  </p>
                </CardContent>
              </Card>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-6 md:w-1/3">
                        <h3 className="text-lg font-semibold text-white mb-2">Recent Activity</h3>
                        <p className="text-sm text-gray-400">
                          Track your most recent referrals and earnings in real-time
                        </p>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <ul className="space-y-4">
                          {[
                            { action: "New Referral", details: "Halal Corner Store", time: "2 hours ago", amount: "+$420" },
                            { action: "Commission Paid", details: "Monthly Payout", time: "3 days ago", amount: "$1,450" },
                            { action: "Store Visit", details: "Via your referral link", time: "5 days ago", amount: null }
                          ].map((activity, index) => (
                            <li key={index} className="flex justify-between items-start pb-3 border-b border-gray-800 last:border-0 last:pb-0">
                              <div>
                                <p className="font-medium text-white">{activity.action}</p>
                                <p className="text-sm text-gray-500">{activity.details} · {activity.time}</p>
                              </div>
                              {activity.amount && (
                                <span className="text-green-400 font-medium">{activity.amount}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
          
          {/* Challenge Tab Content */}
          <TabsContent value="challenge" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-gray-900 border-gray-800 h-full">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl text-white">Challenge Leaderboard</CardTitle>
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="relative mr-2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </div>
                      Updated {leaderboardUpdateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th className="pb-3 text-gray-400 font-medium">Rank</th>
                            <th className="pb-3 text-gray-400 font-medium">Name</th>
                            <th className="pb-3 text-gray-400 font-medium text-right">Stores</th>
                            <th className="pb-3 text-gray-400 font-medium text-right">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leaderboardData.map((participant, index) => (
                            <motion.tr 
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                              className={`${participant.rank === 1 ? 'bg-amber-900/20' : ''}`}
                            >
                              <td className="py-3">
                                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs 
                                  ${participant.rank === 1 ? 'bg-amber-500 text-white' : 'bg-gray-800 text-gray-300'}`}>
                                  {participant.rank}
                                </span>
                              </td>
                              <td className={`py-3 ${participant.rank === 1 ? 'text-amber-400 font-medium' : 'text-white'}`}>
                                {participant.name}
                              </td>
                              <td className="py-3 text-right text-white">{participant.storesReferred}</td>
                              <td className="py-3 text-right text-white">{participant.totalValue}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-gray-900 border-gray-800 mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Challenge Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        <span>10 users per challenge</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Refer the most new stores in 4 days</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Winner becomes a "Special Affiliate" for that store</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Special Affiliates earn 40% of Halvi's profit for 16 months</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-white">Submit Entry</CardTitle>
                      <div className="flex items-center text-xs text-amber-400">
                        <div className="relative mr-2 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        {registeredCount}/10 spots filled
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {activeChallenge ? (
                      <div className="py-4">
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400" htmlFor="store">Store Name</label>
                            <Input id="store" className="bg-gray-800 border-gray-700 text-white" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400" htmlFor="link">Link Used</label>
                            <Input id="link" className="bg-gray-800 border-gray-700 text-white" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400" htmlFor="proof">Proof (Optional)</label>
                            <Textarea id="proof" className="bg-gray-800 border-gray-700 text-white resize-none h-20" />
                          </div>
                          <Button 
                            onClick={handleRegisterForChallenge}
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500"
                          >
                            Submit Entry
                          </Button>
                        </form>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <Clock className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                        <p className="text-gray-400 mb-4">Entry submission opens on the 4th day at 7AM</p>
                        <Button 
                          onClick={handleRegisterForChallenge}
                          className="bg-gradient-to-r from-amber-500 to-orange-500"
                        >
                          <div className="flex items-center">
                            <span className="relative mr-2 flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Register for Next Challenge ({registeredCount}/10)
                          </div>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Vertical scrolling effect with a line */}
            <div className="relative mt-16 border-l-2 border-amber-500/30 ml-4 pl-8">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="absolute -left-3 -mt-1 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Challenge Registration</h3>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">
                      Registration for each 4-day challenge opens at 7:00 AM on the 4th day of the current challenge. 
                      Be quick, as only 10 spots are available per challenge and they fill up fast!
                    </p>
                    <div className="flex items-start space-x-2 text-sm">
                      <Info className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-400">
                        Tip: Set a calendar reminder to ensure you don't miss the registration window.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="absolute -left-3 -mt-1 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Challenge Competition</h3>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">
                      Once registered, you'll have 4 days to refer as many businesses as possible to Halvi. 
                      The more businesses you refer and the higher their order values, the better your chances of winning.
                    </p>
                    <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 p-4 rounded-lg border border-amber-800/30">
                      <h4 className="font-medium text-amber-400 mb-2">Earning Potential</h4>
                      <p className="text-gray-400 text-sm">
                        As a Special Affiliate, you'll earn 40% of Halvi's profit for 16 months from every referred business,
                        compared to the standard 20% commission.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 -mt-1 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Winner Announcement</h3>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">
                      At the end of the 4-day period, the affiliate with the highest total referral value wins 
                      Special Affiliate status. Results are announced immediately after the challenge ends.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 w-full"
                      onClick={handleRegisterForChallenge}
                    >
                      Register for Next Challenge
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Referrals Tab Content */}
          <TabsContent value="referrals" className="mt-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Referred Stores</CardTitle>
              </CardHeader>
              <CardContent>
                {affiliateData.referredStores.length > 0 ? (
                  <div className="space-y-6">
                    {affiliateData.referredStores.map((store, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border border-gray-800 rounded-lg p-4 hover:border-amber-500/30 transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium text-white">{store.name}</h3>
                            <p className="text-sm text-gray-400">
                              Referred on {new Date(store.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-white">{store.commission}</p>
                            <p className="text-sm text-gray-400">of {store.revenue} Revenue</p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Progress to $40K cap</span>
                            <span className="text-white">{store.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2.5">
                            <div 
                              className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full" 
                              style={{ width: `${store.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    <div className="text-center">
                      <Button 
                        variant="outline" 
                        className="border-gray-800 text-amber-400 hover:text-amber-300 hover:border-amber-500/50 inline-flex items-center"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Referral
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-400">You haven't referred any stores yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Vertical scrolling effect with a line */}
            <div className="relative mt-16 border-l-2 border-amber-500/30 ml-4 pl-8">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="absolute -left-3 -mt-1 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">How to Refer Businesses</h3>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <ol className="space-y-4 list-decimal pl-5 text-gray-300">
                      <li>Share your unique referral link with business owners</li>
                      <li>Help them complete their application on Halvi</li>
                      <li>Track their progress through your dashboard</li>
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="absolute -left-3 -mt-1 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Commission Structure</h3>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Standard Commission:</span>
                        <span className="text-white font-medium">20% of Halvi's profit</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Special Affiliate:</span>
                        <span className="text-amber-400 font-medium">40% of Halvi's profit</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Referral Cap:</span>
                        <span className="text-white font-medium">Up to $40,000 in orders</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Payout Schedule:</span>
                        <span className="text-white font-medium">Monthly by the 10th</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Special Status Tab Content */}
          <TabsContent value="special" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader className="border-b border-gray-800">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-amber-500 mr-2" />
                      <CardTitle className="text-xl text-white">Special Affiliate Status</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {affiliateData.specialAffiliateStores.length > 0 ? (
                      <div className="space-y-6">
                        {affiliateData.specialAffiliateStores.map((store, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-800/50 rounded-lg p-4"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <div className="flex items-center">
                                  <Award className="h-4 w-4 text-amber-500 mr-2" />
                                  <h3 className="font-medium text-amber-400">{store.name}</h3>
                                </div>
                                <p className="text-sm text-gray-400 mt-1">
                                  Special Affiliate Status - 40% Commission
                                </p>
                              </div>
                              <div className="bg-amber-900/40 rounded-full px-3 py-1">
                                <p className="text-xs text-amber-300">{store.monthsLeft} months remaining</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm text-gray-400">Total Revenue</p>
                                <p className="text-lg font-medium text-white">{store.revenue}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-400">Your Commission (40%)</p>
                                <p className="text-lg font-medium text-amber-400">{store.commission}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Award className="h-12 w-12 text-gray-700 mx-auto mb-3" />
                        <p className="text-gray-300 text-lg mb-2">You're not a Special Affiliate yet</p>
                        <p className="text-gray-500 mb-4">Win a 4-Day Challenge to earn Special Affiliate status</p>
                        <Button 
                          onClick={() => setCurrentTab("challenge")}
                          className="bg-gradient-to-r from-amber-500 to-orange-500"
                        >
                          Join Current Challenge
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Benefits Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="pb-4 border-b border-gray-800">
                        <h3 className="font-medium text-white mb-2">Standard Affiliate</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start text-sm text-gray-300">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>20% of Halvi's profit per store</span>
                          </li>
                          <li className="flex items-start text-sm text-gray-300">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Up to $40,000 in referred orders</span>
                          </li>
                          <li className="flex items-start text-sm text-gray-300">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>No limit on number of referrals</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-amber-400 mb-2">Special Affiliate</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start text-sm text-gray-300">
                            <Check className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>40% of Halvi's profit per store</span>
                          </li>
                          <li className="flex items-start text-sm text-gray-300">
                            <Check className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Status valid for 16 months</span>
                          </li>
                          <li className="flex items-start text-sm text-gray-300">
                            <Check className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Priority support & exclusive training</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </div>
      </main>
      
      {/* Challenge registration dialog */}
      <Dialog open={showChallengeDialog} onOpenChange={setShowChallengeDialog}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle>Reserve Your Spot</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-amber-600" />
                Registration opens at 7:00 AM on {new Date(new Date().getTime() + (countdown.days * 24 * 60 * 60 * 1000)).toLocaleDateString()}
              </h4>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Only 10 participants can join each challenge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Current spots filled: {registeredCount}/10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Add to your calendar to make sure you don't miss the registration</span>
                </li>
              </ul>
            </div>
            
            <Button 
              onClick={addToGoogleCalendar}
              className="w-full flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Add to Google Calendar
            </Button>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowChallengeDialog(false)}>
              Close
            </Button>
            <Button 
              className="bg-gradient-to-r from-amber-500 to-orange-600"
              onClick={() => {
                setShowChallengeDialog(false);
                toast.success("We'll remind you when registration opens!", {
                  description: "Check your calendar for the exact date and time."
                });
              }}
            >
              Remind Me
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
}


import React, { useState, useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, CopyIcon, Clock, Award, ArrowRight, TrendingUp, Users, Vibrate } from "lucide-react";

export default function AffiliateProgram() {
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
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
      
      <main className="flex-grow pt-20 pb-16 px-4">
        <div className="container mx-auto">
          {/* Challenge Countdown Timer */}
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
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="dashboard" value={currentTab} onValueChange={setCurrentTab} className="mb-8">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Dashboard</TabsTrigger>
              <TabsTrigger value="challenge" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Challenge</TabsTrigger>
              <TabsTrigger value="referrals" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Referrals</TabsTrigger>
              <TabsTrigger value="special" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">Special Status</TabsTrigger>
            </TabsList>
            
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
              </motion.div>
            </TabsContent>
            
            {/* Challenge Tab Content */}
            <TabsContent value="challenge" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Challenge Leaderboard</CardTitle>
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
                      <CardTitle className="text-xl text-white">Submit Entry</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {activeChallenge ? (
                        <div className="text-center py-4">
                          <Clock className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                          <p className="text-gray-400">Entry submission opens on the 4th day at 7AM</p>
                        </div>
                      ) : (
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
                          <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500">
                            Submit Entry
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </div>
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
                          className="border border-gray-800 rounded-lg p-4"
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
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-gray-400">You haven't referred any stores yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
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
                          <h3 className="font-medium text-white mb-2">Regular Affiliate</h3>
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
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}


import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, DollarSign, Users, TrendingUp, BarChart3, 
  LineChart, PieChart, CircleDot, Copy, Settings, LogOut, 
  UserPlus, Bell, AlertCircle, CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function AffiliateDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample data for the dashboard
  const dashboardData = {
    balance: 1245.78,
    pendingPayment: 350.25,
    totalEarnings: 3689.45,
    referrals: 12,
    conversionRate: "25%",
    referralLink: "https://halvi.app/ref/john123",
    recentReferrals: [
      { id: 1, name: "Cairo Coffee Shop", date: "2025-04-01", status: "active", earnings: 125.40 },
      { id: 2, name: "Amir's Halal Market", date: "2025-03-28", status: "active", earnings: 96.75 },
      { id: 3, name: "Zara's Boutique", date: "2025-03-25", status: "pending", earnings: 0 },
      { id: 4, name: "Medina Restaurant", date: "2025-03-20", status: "active", earnings: 210.30 },
      { id: 5, name: "Halal Meats Inc", date: "2025-03-15", status: "active", earnings: 187.25 }
    ],
    paymentHistory: [
      { id: 1, date: "2025-03-10", amount: 845.30, method: "Bank Transfer", status: "completed" },
      { id: 2, date: "2025-02-10", amount: 723.15, method: "PayPal", status: "completed" },
      { id: 3, date: "2025-01-10", amount: 875.22, method: "Bank Transfer", status: "completed" }
    ],
    challengeHistory: [
      { id: 1, date: "March 2025", position: 2, referrals: 7, status: "completed" },
      { id: 2, date: "February 2025", position: 1, referrals: 9, status: "won", badge: "Special Affiliate" },
      { id: 3, date: "January 2025", position: 3, referrals: 6, status: "completed" }
    ],
    notifications: [
      { id: 1, text: "New referral: Cairo Coffee Shop", date: "2025-04-01", read: false },
      { id: 2, text: "Payment processed: $845.30", date: "2025-03-10", read: true },
      { id: 3, text: "Special Affiliate status achieved!", date: "2025-02-11", read: true },
      { id: 4, text: "New challenge starting in 3 days", date: "2025-01-25", read: true }
    ]
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(dashboardData.referralLink);
    toast.success("Referral link copied to clipboard!");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />
      
      {/* Top Navigation */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/affiliates" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              Affiliate Dashboard
            </h1>
            <Badge variant="outline" className="ml-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800">
              Guest Access
            </Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {dashboardData.notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {dashboardData.notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {dashboardData.notifications.slice(0, 5).map((notification) => (
                  <DropdownMenuItem key={notification.id} className={`py-3 ${!notification.read ? 'bg-amber-50 dark:bg-amber-900/20' : ''}`}>
                    <div className="flex items-start space-x-2 w-full">
                      <div className={`mt-0.5 ${!notification.read ? 'text-amber-500' : 'text-gray-400'}`}>
                        {!notification.read ? <AlertCircle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm ${!notification.read ? 'font-medium' : ''}`}>{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center">
                  <Link to="#" className="text-amber-500 text-sm">View all notifications</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">G</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Guest Access</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = "/affiliates"}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Exit Dashboard</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 md:grid-cols-6 mb-8">
              <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
              <TabsTrigger value="referrals" className="text-sm">Referrals</TabsTrigger>
              <TabsTrigger value="earnings" className="text-sm">Earnings</TabsTrigger>
              <TabsTrigger value="challenges" className="text-sm">Challenges</TabsTrigger>
              <TabsTrigger value="resources" className="text-sm hidden md:block">Resources</TabsTrigger>
              <TabsTrigger value="settings" className="text-sm hidden md:block">Settings</TabsTrigger>
            </TabsList>
          
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1: Current Balance */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Current Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end space-x-2">
                      <span className="text-3xl font-bold">${dashboardData.balance.toFixed(2)}</span>
                      <span className="text-sm text-green-500">+23%</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full text-xs">Withdraw Funds</Button>
                  </CardFooter>
                </Card>
                
                {/* Card 2: Total Earnings */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end space-x-2">
                      <span className="text-3xl font-bold">${dashboardData.totalEarnings.toFixed(2)}</span>
                      <span className="text-sm text-green-500">Lifetime</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 text-xs text-gray-500">
                    Next payment: $350.25 on May 10
                  </CardFooter>
                </Card>
                
                {/* Card 3: Total Referrals */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Active Referrals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end space-x-2">
                      <span className="text-3xl font-bold">{dashboardData.referrals}</span>
                      <span className="text-sm text-green-500">+2 this month</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 text-xs text-gray-500">
                    Conversion rate: {dashboardData.conversionRate}
                  </CardFooter>
                </Card>
                
                {/* Card 4: Special Status */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Affiliate Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-amber-600">Special Affiliate</span>
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">40%</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 text-xs text-gray-500">
                    Valid until: February 2026
                  </CardFooter>
                </Card>
              </div>
              
              {/* Referral Link */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Your Referral Link</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm truncate">
                      {dashboardData.referralLink}
                    </div>
                    <Button variant="outline" size="icon" onClick={handleCopyLink}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Referrals */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Recent Referrals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500 border-b dark:border-gray-700">
                          <th className="pb-2 font-medium">Business</th>
                          <th className="pb-2 font-medium">Date</th>
                          <th className="pb-2 font-medium">Status</th>
                          <th className="pb-2 font-medium text-right">Earnings</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y dark:divide-gray-700">
                        {dashboardData.recentReferrals.map((referral) => (
                          <tr key={referral.id}>
                            <td className="py-3">{referral.name}</td>
                            <td className="py-3">{referral.date}</td>
                            <td className="py-3">
                              {referral.status === "active" ? (
                                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
                                  Active
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800">
                                  Pending
                                </Badge>
                              )}
                            </td>
                            <td className="py-3 text-right">
                              {referral.earnings > 0 ? `$${referral.earnings.toFixed(2)}` : "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="link" className="w-full text-sm">
                    View All Referrals
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Performance Chart Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Referral Performance</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="h-[200px] flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <LineChart className="h-8 w-8 text-amber-500 mx-auto" />
                      <p className="text-sm text-gray-500">Performance data visualization</p>
                      <p className="text-xs text-gray-400">(This is a placeholder in guest mode)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Referrals Tab */}
            <TabsContent value="referrals" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Your Referrals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500 border-b dark:border-gray-700">
                          <th className="pb-3 font-medium">Business</th>
                          <th className="pb-3 font-medium">Date Joined</th>
                          <th className="pb-3 font-medium">Status</th>
                          <th className="pb-3 font-medium">Earnings</th>
                          <th className="pb-3 font-medium text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y dark:divide-gray-700">
                        {dashboardData.recentReferrals.concat(dashboardData.recentReferrals).map((referral, index) => (
                          <tr key={`${referral.id}-${index}`}>
                            <td className="py-4">{referral.name}</td>
                            <td className="py-4">{referral.date}</td>
                            <td className="py-4">
                              {referral.status === "active" ? (
                                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
                                  Active
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800">
                                  Pending
                                </Badge>
                              )}
                            </td>
                            <td className="py-4">
                              {referral.earnings > 0 ? `$${referral.earnings.toFixed(2)}` : "-"}
                            </td>
                            <td className="py-4 text-right">
                              <Button variant="ghost" size="sm">
                                Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Invite New Businesses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Send personalized invitations to businesses to join Halvi using your referral link.
                    </p>
                    <div className="grid gap-4">
                      <div>
                        <label className="text-sm font-medium">Business Email</label>
                        <input type="email" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="business@example.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Personalized Message (Optional)</label>
                        <textarea className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md h-24" placeholder="Your message..."></textarea>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Send Invitation
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Referral Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Conversion Rate</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold">25%</span>
                          <span className="text-sm text-green-500">+3% from last month</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Link Clicks</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold">48</span>
                          <span className="text-sm text-green-500">Last 7 days</span>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>+12% vs previous 7 days</span>
                          <span>Target: 50</span>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <h4 className="text-sm font-medium mb-2">Top Performing Sources</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Social Media</span>
                            <span className="font-medium">58%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Direct Referral</span>
                            <span className="font-medium">25%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Email</span>
                            <span className="font-medium">12%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Other</span>
                            <span className="font-medium">5%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Earnings Tab */}
            <TabsContent value="earnings" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <BarChart3 className="h-8 w-8 text-amber-500 mx-auto" />
                      <p className="text-sm text-gray-500">Earnings data visualization</p>
                      <p className="text-xs text-gray-400">(This is a placeholder in guest mode)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500 border-b dark:border-gray-700">
                          <th className="pb-3 font-medium">Date</th>
                          <th className="pb-3 font-medium">Amount</th>
                          <th className="pb-3 font-medium">Payment Method</th>
                          <th className="pb-3 font-medium text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y dark:divide-gray-700">
                        {dashboardData.paymentHistory.map((payment) => (
                          <tr key={payment.id}>
                            <td className="py-4">{payment.date}</td>
                            <td className="py-4">${payment.amount.toFixed(2)}</td>
                            <td className="py-4">{payment.method}</td>
                            <td className="py-4 text-right">
                              <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
                                Completed
                              </Badge>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="py-4">2025-04-10</td>
                          <td className="py-4">$350.25</td>
                          <td className="py-4">Bank Transfer</td>
                          <td className="py-4 text-right">
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800">
                              Scheduled
                            </Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Earnings By Referral</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="h-[200px] flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <PieChart className="h-8 w-8 text-amber-500 mx-auto" />
                        <p className="text-sm text-gray-500">Distribution visualization</p>
                        <p className="text-xs text-gray-400">(This is a placeholder in guest mode)</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Top Earning Referrals</h4>
                      <ul className="space-y-4">
                        {dashboardData.recentReferrals
                          .filter(ref => ref.earnings > 0)
                          .sort((a, b) => b.earnings - a.earnings)
                          .slice(0, 5)
                          .map((referral, index) => (
                            <li key={referral.id} className="flex items-center">
                              <div className="w-6 text-gray-500 mr-2">{index + 1}.</div>
                              <div className="flex-1">
                                <div className="font-medium">{referral.name}</div>
                                <div className="text-xs text-gray-500">Joined on {referral.date}</div>
                              </div>
                              <div className="text-right font-medium">
                                ${referral.earnings.toFixed(2)}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Challenges Tab */}
            <TabsContent value="challenges" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-bold mb-2">April 2025 Challenge</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Win this challenge to earn Special Affiliate status and 40% commission for 16 months!
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
                        <div className="text-sm text-gray-500 mb-1">Time Remaining</div>
                        <div className="text-lg font-medium">3 days 12 hrs</div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
                        <div className="text-sm text-gray-500 mb-1">Your Position</div>
                        <div className="text-lg font-medium">2nd Place</div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
                        <div className="text-sm text-gray-500 mb-1">Your Referrals</div>
                        <div className="text-lg font-medium">6 businesses</div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
                      <h4 className="text-sm font-medium mb-2">Leaderboard</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-800 dark:text-amber-300 font-medium mr-3">1</div>
                          <div className="flex-1">
                            <div className="font-medium">Sarah J.</div>
                            <div className="text-xs text-gray-500">7 referrals</div>
                          </div>
                        </div>
                        <div className="flex items-center bg-amber-50 dark:bg-amber-900/10 p-2 rounded-md">
                          <div className="w-8 h-8 bg-amber-300 dark:bg-amber-700 rounded-full flex items-center justify-center text-white font-medium mr-3">2</div>
                          <div className="flex-1">
                            <div className="font-medium">You</div>
                            <div className="text-xs text-gray-500">6 referrals</div>
                          </div>
                          <Badge className="bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800">
                            Need 2 more
                          </Badge>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-800 dark:text-amber-300 font-medium mr-3">3</div>
                          <div className="flex-1">
                            <div className="font-medium">Ahmad M.</div>
                            <div className="text-xs text-gray-500">5 referrals</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 items-center">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600">
                    Register for Next Challenge
                  </Button>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">8 spots filled, 2 remaining</span>
                  </div>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Past Challenge History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500 border-b dark:border-gray-700">
                          <th className="pb-3 font-medium">Date</th>
                          <th className="pb-3 font-medium">Position</th>
                          <th className="pb-3 font-medium">Referrals</th>
                          <th className="pb-3 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y dark:divide-gray-700">
                        {dashboardData.challengeHistory.map((challenge) => (
                          <tr key={challenge.id}>
                            <td className="py-4">{challenge.date}</td>
                            <td className="py-4">{challenge.position} Place</td>
                            <td className="py-4">{challenge.referrals} businesses</td>
                            <td className="py-4">
                              {challenge.status === "won" ? (
                                <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
                                  {challenge.badge}
                                </Badge>
                              ) : (
                                <Badge variant="outline">Completed</Badge>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Access marketing materials to help you promote Halvi to potential businesses.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-medium mb-2">Affiliate Marketing Guide</h4>
                      <p className="text-sm text-gray-500 mb-3">Learn proven strategies to get more businesses to join.</p>
                      <Button variant="outline" size="sm">Download PDF</Button>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-medium mb-2">Social Media Templates</h4>
                      <p className="text-sm text-gray-500 mb-3">Ready-to-use posts for promoting your referral link.</p>
                      <Button variant="outline" size="sm">Access Templates</Button>
                    </div>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-medium mb-2">Email Templates</h4>
                      <p className="text-sm text-gray-500 mb-3">Professional emails to send to potential business partners.</p>
                      <Button variant="outline" size="sm">View Templates</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Manage your affiliate account settings and preferences.
                  </p>
                  <div className="grid gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Profile Information</h4>
                      <div className="grid gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Name</label>
                          <input type="text" className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md" value="Guest User" disabled />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Email</label>
                          <input type="email" className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded-md" value="guest@example.com" disabled />
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-2">Notification Settings</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">New referral notifications</span>
                          <input type="checkbox" defaultChecked disabled className="rounded text-amber-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Payment notifications</span>
                          <input type="checkbox" defaultChecked disabled className="rounded text-amber-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Challenge updates</span>
                          <input type="checkbox" defaultChecked disabled className="rounded text-amber-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full">
                    Save Changes (Login Required)
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

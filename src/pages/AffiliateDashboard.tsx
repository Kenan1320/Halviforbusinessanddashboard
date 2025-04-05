import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, DollarSign, Users, TrendingUp, 
  LineChart, PieChart, CircleDot, Copy, Settings, LogOut, 
  UserPlus, Bell, AlertCircle, CheckCircle2, BarChart3
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
          
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            
            <TabsContent value="earnings" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <BarChart className="h-8 w-8 text-amber-500 mx-auto" />
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
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600">
                    <CircleDot className="mr-2 h-4 w-4" />
                    View Live Challenge
                  </Button>
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
              
              <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
                <CardHeader>
                  <CardTitle>Special Affiliate Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <strong className="font-medium">Double Commission Rate</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Earn 40% of Halvi's profit from every referred business (vs standard 20%)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <strong className="font-medium">Extended Duration</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Special Affiliate status lasts for 16 months from the date earned
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <strong className="font-medium">Priority Support</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Get dedicated support and priority responses for your referrals
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <strong className="font-medium">Exclusive Resources</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Access exclusive marketing materials and strategies
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Marketing Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Download professional marketing materials to help promote Halvi to potential businesses.
                    </p>
                    <ul className="space-y-3">
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Halvi Business Brochure
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                          Logo Pack & Brand Assets
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          Email Templates
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Video Tutorials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Learn how to maximize your earning potential as a Halvi affiliate.
                    </p>
                    <ul className="space-y-3">
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                          </svg>
                          Getting Started Guide
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                          </svg>
                          Referral Best Practices
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                          </svg>
                          Dashboard Tutorial
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>FAQs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">
                      Find answers to common questions about the Halvi Affiliate Program.
                    </p>
                    <div className="space-y-3">
                      <details className="text-sm">
                        <summary className="font-medium cursor-pointer">How much can I earn?</summary>
                        <p className="mt-2 text-gray-500 pl-4">
                          Regular affiliates earn 20% of Halvi's profit from every business they refer, up to $40,000 in orders. Special Affiliates earn 40% for 16 months.
                        </p>
                      </details>
                      <Separator />
                      <details className="text-sm">
                        <summary className="font-medium cursor-pointer">When do I get paid?</summary>
                        <p className="mt-2 text-gray-500 pl-4">
                          Payments are processed monthly on the 10th of each month for the previous month's activity.
                        </p>
                      </details>
                      <Separator />
                      <details className="text-sm">
                        <summary className="font-medium cursor-pointer">How do challenges work?</summary>
                        <p className="mt-2 text-gray-500 pl-4">
                          Challenges last 4 days with 10 participants. The affiliate who refers the most new businesses wins Special Affiliate status.
                        </p>
                      </details>
                      <Separator />
                      <details className="text-sm">
                        <summary className="font-medium cursor-pointer">Can I refer multiple businesses?</summary>
                        <p className="mt-2 text-gray-500 pl-4">
                          Yes! There's no limit to how many businesses you can refer. Each successful referral generates commission for you.
                        </p>
                      </details>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="w-full">View All FAQs</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Need assistance? Our dedicated affiliate support team is here to help you.
                  </p>
                  <div className="grid gap-4">
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <input type="text" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="What do you need help with?" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <textarea className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md h-24" placeholder="Describe your issue or question..."></textarea>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Submit Support Request</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b dark:border-gray-700">
                      <div className="md:w-1/4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xl">G</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="md:w-3/4 space-y-2">
                        <h3 className="font-medium">Profile Photo</h3>
                        <p className="text-sm text-gray-500">Upload a profile photo to personalize your account.</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Upload</Button>
                          <Button variant="ghost" size="sm">Remove</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b dark:border-gray-700">
                      <div className="md:w-1/4">
                        <h3 className="font-medium">Personal Information</h3>
                      </div>
                      <div className="md:w-3/4 grid gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">First Name</label>
                            <input type="text" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="Guest" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Last Name</label>
                            <input type="text" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="User" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <input type="email" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="guest@example.com" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Phone Number</label>
                          <input type="tel" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b dark:border-gray-700">
                      <div className="md:w-1/4">
                        <h3 className="font-medium">Payment Information</h3>
                      </div>
                      <div className="md:w-3/4 grid gap-4">
                        <div>
                          <label className="text-sm font-medium">Payment Method</label>
                          <select className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900">
                            <option>Bank Transfer</option>
                            <option>PayPal</option>
                            <option>Check</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Bank Name</label>
                            <input type="text" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="Bank Name" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Account Number</label>
                            <input type="text" className="w-full mt-1 p-2 border border-gray-200 dark:border-gray-700 rounded-md" placeholder="●●●●●●●●1234" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/4">
                        <h3 className="font-medium">Notifications</h3>
                      </div>
                      <div className="md:w-3/4 space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-gray-500">Receive updates about your referrals and earnings</p>
                          </div>
                          <div>
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">SMS Notifications</p>
                            <p className="text-sm text-gray-500">Get text alerts for important updates</p>
                          </div>
                          <div>
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Challenge Reminders</p>
                            <p className="text-sm text-gray-500">Get notified about upcoming challenges</p>
                          </div>
                          <div>
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline" className="mr-2">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

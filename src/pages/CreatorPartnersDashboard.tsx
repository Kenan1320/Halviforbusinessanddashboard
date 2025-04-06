
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart3,
  Copy,
  DollarSign,
  Download,
  FileText,
  Gift,
  Instagram,
  Link as LinkIcon,
  Share2,
  Star,
  TrendingUp,
  Twitter,
  Users,
  Facebook,
  AlertTriangle
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function CreatorPartnersDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy link");
      });
  };

  // Sample data - would be replaced by API calls in production
  const affiliateLink = "https://myhalvi.com/affiliate/creator/samira123";
  const earnings = {
    total: "$2,450",
    monthly: "$580",
    pending: "$320",
    referrals: 12,
    referralRate: "23%"
  };
  const referrals = [
    { id: 1, name: "Ahmed's Grocery", date: "2024-04-01", status: "Active", earnings: "$120" },
    { id: 2, name: "Fatima's Fashion", date: "2024-03-28", status: "Active", earnings: "$85" },
    { id: 3, name: "Halal Bites", date: "2024-03-25", status: "Pending", earnings: "$0" },
    { id: 4, name: "Islamic Books", date: "2024-03-20", status: "Active", earnings: "$210" },
    { id: 5, name: "Modern Hijabs", date: "2024-03-15", status: "Active", earnings: "$165" }
  ];
  const resources = [
    { name: "Instagram Story Template", type: "image", size: "1080x1920px" },
    { name: "Affiliate Banner", type: "image", size: "1200x628px" },
    { name: "Email Template", type: "text", size: "HTML/Plain" },
    { name: "Product Showcase", type: "video", size: "16:9 HD" }
  ];
  const milestones = [
    { name: "First 10 referrals", reward: "Halvi merchandise pack", completed: true },
    { name: "First $1,000 earned", reward: "Featured creator spotlight", completed: true },
    { name: "50 active users", reward: "Early access to new features", completed: false },
    { name: "6 months as partner", reward: "Exclusive retreat invitation", completed: false }
  ];

  // Simulated data loading function (would be replaced by real API calls)
  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Dashboard data refreshed");
    }, 1200);
  };

  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <div className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/30 dark:to-gray-950 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Creator Partner Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your performance and manage your affiliate activities
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm" onClick={refreshData} disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-amber-500 border-t-transparent rounded-full"></span>
                    Updating...
                  </span>
                ) : (
                  "Refresh Data"
                )}
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/affiliate-get-familiar">
                  Program Details
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/creator-partners-login">
                  Back to Login
                </Link>
              </Button>
            </div>
          </div>
          
          <Card className="mb-8 border-amber-200 dark:border-amber-800 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 pb-4">
              <CardTitle className="flex items-center justify-between">
                <span>Your Affiliate Link</span>
                <Badge>Creator Partner</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input 
                    value={affiliateLink} 
                    readOnly
                    className="pr-12 bg-gray-50 dark:bg-gray-800/50"
                  />
                  <button 
                    onClick={() => copyToClipboard(affiliateLink)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <LinkIcon size={16} className="mr-2" />
                        QR Code
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Your Affiliate QR Code</DialogTitle>
                        <DialogDescription>
                          Scan this QR code to access your affiliate link.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-center py-6">
                        <div className="w-48 h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <AlertTriangle className="h-8 w-8 text-amber-500" />
                          <span className="ml-2 text-sm text-gray-500">QR Code Placeholder</span>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button>Download QR Code</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Share2 size={16} className="mr-2" />
                        Share
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Instagram size={16} className="mr-2" />
                        <span>Share to Instagram</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Facebook size={16} className="mr-2" />
                        <span>Share to Facebook</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Twitter size={16} className="mr-2" />
                        <span>Share to Twitter</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-gray-500">
              <p>Share this link to earn 20% commission + 10% bonus as a Creator Partner</p>
            </CardFooter>
          </Card>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="referrals">Referrals</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="perks">Perks & Rewards</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="space-y-8">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <Card className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardDescription>Total Earnings</CardDescription>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        {earnings.total}
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardDescription>This Month</CardDescription>
                      <CardTitle className="text-2xl">{earnings.monthly}</CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardDescription>Total Referrals</CardDescription>
                      <CardTitle className="text-2xl">{earnings.referrals}</CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardDescription>Conversion Rate</CardDescription>
                      <CardTitle className="text-2xl">{earnings.referralRate}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                
                <Card className="mb-8 overflow-hidden">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="transition-all hover:shadow-md overflow-hidden">
                    <CardHeader>
                      <CardTitle>Recent Referrals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {referrals.slice(0, 3).map((referral) => (
                          <div key={referral.id} className="flex justify-between items-center border-b pb-3 last:border-0">
                            <div>
                              <p className="font-medium">{referral.name}</p>
                              <p className="text-sm text-gray-500">{new Date(referral.date).toLocaleDateString()}</p>
                            </div>
                            <div className="text-right">
                              <p className={`font-medium ${referral.status === 'Active' ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                                {referral.status}
                              </p>
                              <p className="text-sm font-bold">{referral.earnings}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="ghost" size="sm" className="w-full" onClick={() => setActiveTab("referrals")}>
                        View All Referrals
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="transition-all hover:shadow-md overflow-hidden">
                    <CardHeader>
                      <CardTitle>Commission Structure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">Creator Partner Advantage</h4>
                          <p className="text-sm text-green-700 dark:text-green-400">
                            As a Creator Partner, you earn 30% total commission:
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-400">
                            <li className="flex justify-between">
                              <span>• Standard affiliate rate:</span>
                              <span className="font-medium">20%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>• Creator bonus from Halvi:</span>
                              <span className="font-medium">+10%</span>
                            </li>
                            <li className="flex justify-between border-t border-green-200 dark:border-green-700 mt-2 pt-2">
                              <span>Total commission rate:</span>
                              <span className="font-bold">30%</span>
                            </li>
                          </ul>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Example: If your referral generates $1,000 in platform fees, you earn $300 total ($200 standard + $100 bonus).
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeTab === "referrals" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-8 overflow-hidden">
                  <CardHeader>
                    <CardTitle>All Referrals</CardTitle>
                    <CardDescription>
                      Track all businesses you've referred to Halvi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Business</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Earnings</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {referrals.map((referral) => (
                            <TableRow key={referral.id}>
                              <TableCell className="font-medium">{referral.name}</TableCell>
                              <TableCell>{new Date(referral.date).toLocaleDateString()}</TableCell>
                              <TableCell>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  referral.status === 'Active' 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                                }`}>
                                  {referral.status}
                                </span>
                              </TableCell>
                              <TableCell className="text-right font-bold">{referral.earnings}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Referral Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <BarChart3 className="h-8 w-8 text-amber-500 mx-auto" />
                        <p className="text-sm text-gray-500">Referral performance visualization</p>
                        <p className="text-xs text-gray-400">(This is a placeholder in guest mode)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          
            {activeTab === "resources" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-8 overflow-hidden">
                  <CardHeader>
                    <CardTitle>Promotional Materials</CardTitle>
                    <CardDescription>
                      Ready-to-use resources to help you promote Halvi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="bg-amber-100 dark:bg-amber-900/30 h-10 w-10 rounded-lg flex items-center justify-center text-amber-700 dark:text-amber-300">
                              <FileText size={20} />
                            </div>
                            <div>
                              <p className="font-medium">{resource.name}</p>
                              <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download size={16} className="mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Branding Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Do's</h4>
                        <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                          <li>• Use the official Halvi logo and colors</li>
                          <li>• Tag @myhalvi in your social media posts</li>
                          <li>• Use hashtags #HalviPartner #HalviChallenge</li>
                          <li>• Share authentic experiences with Halvi</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Don'ts</h4>
                        <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                          <li>• Don't modify the Halvi logo or colors</li>
                          <li>• Don't make false claims about earnings or features</li>
                          <li>• Don't use spammy promotion tactics</li>
                          <li>• Don't share your affiliate link without context</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
            
            {activeTab === "perks" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-8 overflow-hidden">
                  <CardHeader>
                    <CardTitle>Milestones & Rewards</CardTitle>
                    <CardDescription>
                      Earn special perks as you reach important milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="flex items-center gap-4 border-b pb-3 last:border-0">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            milestone.completed 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                              : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                          }`}>
                            {milestone.completed ? (
                              <Star size={16} />
                            ) : (
                              <Gift size={16} />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <p className="font-medium">{milestone.name}</p>
                              {milestone.completed && (
                                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                                  Completed
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">
                              Reward: {milestone.reward}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Exclusive Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-halvi-50 dark:bg-halvi-900/20 p-4 rounded-lg hover:shadow-md transition-all">
                        <h4 className="font-medium text-halvi-800 dark:text-halvi-300 mb-2">Advanced Analytics</h4>
                        <p className="text-sm text-halvi-700 dark:text-halvi-400">
                          Access detailed insights about your referral performance, traffic sources, and conversion rates.
                        </p>
                      </div>
                      
                      <div className="bg-halvi-50 dark:bg-halvi-900/20 p-4 rounded-lg hover:shadow-md transition-all">
                        <h4 className="font-medium text-halvi-800 dark:text-halvi-300 mb-2">Priority Support</h4>
                        <p className="text-sm text-halvi-700 dark:text-halvi-400">
                          Get fast-track access to our support team and dedicated account manager.
                        </p>
                      </div>
                      
                      <div className="bg-halvi-50 dark:bg-halvi-900/20 p-4 rounded-lg hover:shadow-md transition-all">
                        <h4 className="font-medium text-halvi-800 dark:text-halvi-300 mb-2">Early Feature Access</h4>
                        <p className="text-sm text-halvi-700 dark:text-halvi-400">
                          Be among the first to try new Halvi features and products before public release.
                        </p>
                      </div>
                      
                      <div className="bg-halvi-50 dark:bg-halvi-900/20 p-4 rounded-lg hover:shadow-md transition-all">
                        <h4 className="font-medium text-halvi-800 dark:text-halvi-300 mb-2">Promotional Opportunities</h4>
                        <p className="text-sm text-halvi-700 dark:text-halvi-400">
                          Featured placement on our website, social media, and marketing materials.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Badge component for the dashboard
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      {children}
    </span>
  );
}

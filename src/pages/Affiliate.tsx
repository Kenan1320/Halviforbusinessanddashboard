import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, UserPlus, CheckCircle, ChevronRight, User, Award, Users, TrendingUp, Trophy } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VibratingButton from "@/components/VibratingButton";

export default function Affiliate() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Halvi Affiliate Program
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Earn passive income by referring businesses to Halvi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="overflow-hidden border-amber-200 dark:border-amber-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <CardTitle className="text-xl">Affiliate Program</CardTitle>
                  <CardDescription className="text-amber-100">
                    Refer businesses and earn 20% commission
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>20% commission on all orders through your referred businesses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Get paid monthly with a minimum payout of $50</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Access to promotional materials and support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Track referrals and earnings in real-time</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 pb-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                    size="lg"
                    onClick={() => navigate("/affiliate")}
                  >
                    <UserPlus className="mr-2 h-5 w-5" />
                    Join Affiliate Program
                  </Button>
                  <Link to="/affiliate-dashboard" className="w-full">
                    <Button variant="outline" className="w-full" size="lg">
                      <User className="mr-2 h-5 w-5" />
                      Continue as Guest
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden border-amber-200 dark:border-amber-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-600 to-red-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">4-Day Special Challenge</CardTitle>
                      <CardDescription className="text-amber-100">
                        Earn 40% commission for 16 months
                      </CardDescription>
                    </div>
                    <Badge className="bg-white text-amber-600">Special</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>40% commission</strong> if you win the challenge (vs normal 20%)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>4-day challenge with only 10 participants</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Winner is the affiliate who refers the most businesses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Special affiliate status lasts for 16 months</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2 pb-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
                    size="lg"
                  >
                    Register for Next Challenge
                  </Button>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">8 spots filled, 2 remaining</span>
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* Rest of the content */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                How It Works
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">1. Sign Up</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create your affiliate account and get your unique referral link
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">2. Refer Businesses</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share your link with businesses who could benefit from Halvi
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">3. Earn Commission</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Earn 20% commission on all orders through your referred businesses
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-2">How much can I earn?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    You earn 20% of Halvi's profit from every business you refer, up to $40,000 in orders. If you win the Special Challenge, you'll earn 40% commission for 16 months.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-2">When do I get paid?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Payments are processed on the 10th of each month for the previous month's earnings, with a minimum payout of $50. You can choose to receive payment via bank transfer or PayPal.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-2">Who can I refer?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    You can refer any halal business that could benefit from Halvi's platform, including restaurants, retail stores, grocery shops, and professional services.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-2">How do the 4-Day Special Challenges work?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Special Challenges happen every month with only 10 participants. The challenge lasts 4 days, and the affiliate who refers the most new businesses during that period wins Special Affiliate status with 40% commission for 16 months.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Start Earning?
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 h-12 px-8 text-lg"
                  onClick={() => navigate("/affiliate")}
                >
                  Join Affiliate Program
                </Button>
                
                <Link to="/affiliate-dashboard">
                  <Button 
                    variant="outline" 
                    className="h-12 px-8 text-lg border-amber-500 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950"
                  >
                    Preview Dashboard as Guest
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

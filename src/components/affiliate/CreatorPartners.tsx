
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Instagram, DollarSign, TrendingUp, Zap, Share2, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function CreatorPartners() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    instagram: "",
    introduction: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check required fields
    const requiredFields = ['fullName', 'email', 'instagram'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // Form submission logic (simulated)
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Creator Partner application submitted successfully!");
    }, 1000);
  };

  return (
    <div>
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Halvi Creator Partners Program</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            An exclusive program for influencers and content creators to earn passive income while promoting halal businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <Share2 className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Personal Creator Link</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get your personal affiliate link redirecting visitors to business.myhalvi.com/affiliates.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <DollarSign className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Passive Income</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn half of affiliate referrals' commissions plus an additional 10% from Halvi (30% total).
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <TrendingUp className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Exclusive Content</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access exclusive content and detailed performance insights through your personal dashboard.
            </p>
          </motion.div>
        </div>
      </div>

      {!submitted ? (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Apply to Become a Creator Partner</CardTitle>
            <CardDescription>
              Fill out this simplified application to join our exclusive Creator Partners program.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name *</label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium mb-1">Instagram Handle *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">@</span>
                  <Input 
                    id="instagram" 
                    name="instagram" 
                    value={formData.instagram} 
                    onChange={handleInputChange}
                    className="pl-8"
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="introduction" className="block text-sm font-medium mb-1">Short Introduction</label>
                <Textarea 
                  id="introduction" 
                  name="introduction" 
                  value={formData.introduction} 
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself and your audience"
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center mb-12"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for applying to the Halvi Creator Partners program. Upon approval, you'll receive an email with login credentials and a link to your Creator Partners Dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Submit Another Application
            </Button>
            <Button asChild>
              <Link to="/creator-partners-login">
                Access Dashboard (Guest Mode)
              </Link>
            </Button>
          </div>
        </motion.div>
      )}

      <Card className="mb-8">
        <CardHeader className="bg-amber-50 dark:bg-amber-900/20">
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Creator Partners Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Once approved as a Creator Partner, you'll gain access to your personal dashboard with detailed analytics, promotional materials, and commission tracking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Dashboard Features:</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Earnings summary and referral tracking</li>
                <li>• Personalized affiliate link management</li>
                <li>• Commission structure details</li>
                <li>• Promotional materials and resources</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Access Methods:</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Full access with login credentials</li>
                <li>• Public profile preview in guest mode</li>
                <li>• Mobile-friendly interface</li>
                <li>• Secure authentication system</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/creator-partners-login">
              <Zap className="mr-2 h-4 w-4" />
              Preview Dashboard (Guest Mode)
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

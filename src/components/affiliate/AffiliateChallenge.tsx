
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, User, Instagram, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AffiliateChallenge() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    bio: "",
    shareOnSocial: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (checked) => {
    setFormData({
      ...formData,
      shareOnSocial: checked
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check required fields
    const requiredFields = ['fullName', 'email', 'phone', 'instagram'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // Form submission logic (simulated)
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Challenge application submitted successfully!");
    }, 1000);
  };

  return (
    <div>
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join the Halvi Special Affiliate Challenge</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Participate in our exclusive challenge and unlock premium benefits for your affiliate journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <User className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Personal Affiliate Page</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get your own branded page to share with your audience and track your performance.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <Award className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Guaranteed 20% Commission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn 20% commission on all sales generated through your referral links.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <Trophy className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Winner Gets 40% for 16 Months</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The challenge winner receives an increased 40% commission rate for a full 16 months.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <Star className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Special Awards</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn recognition as Fan Favorite, Best Content Creator, or Top 3 Sellers with exclusive perks.
            </p>
          </motion.div>
        </div>
      </div>

      {!submitted ? (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Apply for the Special Affiliate Challenge</CardTitle>
            <CardDescription>
              Fill out the form below to join the Halvi Special Affiliate Challenge and start earning.
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
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone} 
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
                <label htmlFor="bio" className="block text-sm font-medium mb-1">Short Bio or Affiliate Experience (optional)</label>
                <Textarea 
                  id="bio" 
                  name="bio" 
                  value={formData.bio} 
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox 
                  id="shareOnSocial" 
                  checked={formData.shareOnSocial}
                  onCheckedChange={handleCheckboxChange}
                />
                <label htmlFor="shareOnSocial" className="text-sm">
                  I'll be posting my participation on instagram, tagging @myhalvi with #HalviChallenge to support Halal businesses thrive for referral and for recognition in participation
                </label>
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
            Thank you for applying to the Halvi Special Affiliate Challenge. We'll review your application and get back to you within 2-3 business days.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Application</Button>
        </motion.div>
      )}
    </div>
  );
}

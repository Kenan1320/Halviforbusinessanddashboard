
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Users, DollarSign, TrendingUp, Trophy, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuroraBackground from "@/components/AuroraBackground";
import FAQ from "@/components/FAQ";

export default function AffiliateProgram() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
    howHeard: "",
    whyJoin: "",
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
    const requiredFields = ['fullName', 'email', 'phone', 'city', 'instagram', 'howHeard', 'whyJoin'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // Form submission logic (simulated)
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Application submitted successfully!");
    }, 1000);
  };
  
  // Sample app data
  const daysRemaining = 4;
  const challenges = [
    { position: 1, name: "Ahmed M.", referrals: 8, earnings: "$1,600" },
    { position: 2, name: "Sarah K.", referrals: 6, earnings: "$1,200" },
    { position: 3, name: "Yusuf A.", referrals: 5, earnings: "$1,000" },
  ];

  // FAQ content specific to affiliates
  const affiliateFaqs = [
    {
      question: "How does the Halvi affiliate program work?",
      answer: "Our affiliate program is simple: refer businesses to join Halvi, and earn up to 20% commission on their platform fees for a full year. Plus, participate in special challenges to earn higher commission rates and bonuses. Once approved, you'll get a unique referral link to track your referrals and earnings."
    },
    {
      question: "Can I refer a local or online business?",
      answer: "Yes, you can refer both local and online businesses to Halvi. Whether it's your favorite neighborhood shop or an inspiring online brand, your referral can help them grow—and earn you real rewards. Every business you refer strengthens the halal economy, supports your community to facilitate online ordering for easy pick up or shipping, and brings you closer to your affiliate partner status, commissions, and potential Creator Partner. It's a win for them, a win for you, and a win for the entire halal movement."
    },
    {
      question: "How much can I earn as an affiliate?",
      answer: "Standard affiliates earn 20% of the platform fees for each business they refer, for a full year. With the average Halvi business generating $2,000 in annual platform fees, that's $400 per successful referral. Special Challenge winners can earn 40% commission rates, potentially doubling your earnings."
    },
    {
      question: "What is the Special Affiliate Challenge?",
      answer: "Every month, we run a 4-day Special Affiliate Challenge where participants compete to refer the most businesses. The winner receives Special Affiliate status, earning 40% commission instead of 20% for a full year. This challenge is designed to reward our most active community advocates."
    },
    {
      question: "How and when do I get paid?",
      answer: "Affiliates receive monthly payments via bank transfer or PayPal, provided their balance exceeds $100. Earnings are calculated based on the platform fees paid by your referred businesses during the previous month."
    }
  ];
  
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Halvi Affiliate Program</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Earn commissions by referring businesses to Halvi. Help grow the halal economy while creating a passive income stream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#apply">Apply Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/schedule-meeting">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="regular" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="regular" className="text-lg py-3">Regular Affiliate</TabsTrigger>
            <TabsTrigger value="challenge" className="text-lg py-3">Special Challenge</TabsTrigger>
          </TabsList>
          
          <TabsContent value="regular" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <DollarSign className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">20% Commission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Earn 20% of platform fees from every business you refer for a full year.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <TrendingUp className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">$400 Per Referral</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Average earning per successful business referral over one year.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <Users className="h-10 w-10 text-halvi-600 dark:text-halvi-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Unlimited Referrals</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No cap on how many businesses you can refer or how much you can earn.
                </p>
              </motion.div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Apply</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fill out our application to join the affiliate program.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Get Approved</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We'll review your application and provide you with affiliate tools.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Refer Businesses</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Share your unique affiliate link with businesses in your network.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Get Paid</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Earn 20% commission on platform fees for a full year for each successful referral.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Join Our Affiliate Program</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Our affiliates earn an average of $400 per successful business referral. With no cap on the number of businesses you can refer, your earning potential is limitless.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-600">
                <a href="#apply">Apply as Affiliate</a>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="challenge" className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-8 rounded-xl border border-amber-100 dark:border-amber-900">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-4">Limited Time Opportunity</span>
                <h2 className="text-3xl font-bold mb-4">Special Affiliate Challenge</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Refer the most businesses during our 4-day challenge and earn Special Affiliate status with <span className="font-bold text-amber-600 dark:text-amber-400">doubled commission rate (40%)</span> for a full year!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <Trophy className="h-10 w-10 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">40% Commission</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Double the standard rate for all your referrals for a full year.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <Clock className="h-10 w-10 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{daysRemaining} Days Remaining</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    The challenge ends soon! Don't miss your chance to participate.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <DollarSign className="h-10 w-10 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Up to $40,000</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Potential earnings from referring 50 businesses over one year.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Current Leaderboard</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b dark:border-gray-700">
                          <th className="text-left pb-3 pl-4">Position</th>
                          <th className="text-left pb-3">Affiliate</th>
                          <th className="text-left pb-3">Referrals</th>
                          <th className="text-right pb-3 pr-4">Potential Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {challenges.map((challenge) => (
                          <tr key={challenge.position} className="border-b dark:border-gray-700 last:border-0">
                            <td className="py-4 pl-4">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${challenge.position === 1 ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"}`}>
                                {challenge.position}
                              </span>
                            </td>
                            <td className="py-4 font-medium">{challenge.name}</td>
                            <td className="py-4">{challenge.referrals} businesses</td>
                            <td className="py-4 text-right pr-4">{challenge.earnings}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 text-center">
                  <p className="text-amber-800 dark:text-amber-300 font-medium">
                    Need just 9 referrals to take the lead and win Special Affiliate status!
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-600">
                  <a href="#apply">Join the Challenge</a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div id="apply" className="max-w-2xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Apply as an Affiliate</h2>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <div className="space-y-6">
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
                  <label htmlFor="city" className="block text-sm font-medium mb-1">City & State *</label>
                  <Input 
                    id="city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium mb-1">Instagram Handle *</label>
                  <Input 
                    id="instagram" 
                    name="instagram" 
                    value={formData.instagram} 
                    onChange={handleInputChange}
                    placeholder="@yourusername"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="tiktok" className="block text-sm font-medium mb-1">TikTok Handle (Optional)</label>
                  <Input 
                    id="tiktok" 
                    name="tiktok" 
                    value={formData.tiktok} 
                    onChange={handleInputChange}
                    placeholder="@yourusername"
                  />
                </div>
                
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium mb-1">LinkedIn Profile (Optional)</label>
                  <Input 
                    id="linkedin" 
                    name="linkedin" 
                    value={formData.linkedin} 
                    onChange={handleInputChange}
                    placeholder="linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div>
                  <label htmlFor="howHeard" className="block text-sm font-medium mb-1">How did you hear about us? *</label>
                  <Input 
                    id="howHeard" 
                    name="howHeard" 
                    value={formData.howHeard} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="whyJoin" className="block text-sm font-medium mb-1">Why do you want to join our affiliate program? *</label>
                  <Textarea 
                    id="whyJoin" 
                    name="whyJoin" 
                    value={formData.whyJoin} 
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox 
                    id="shareOnSocial" 
                    checked={formData.shareOnSocial}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <label htmlFor="shareOnSocial" className="text-sm">
                    I'll be posting my participation on instagram, tagging @myhalvi with #HalviChallenge to support Halal businesses thrive for referral and for recognition in participation (optional)
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600">
                  Submit Application
                </Button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for applying to the Halvi Affiliate Program. We'll review your application and get back to you within 2-3 business days.
              </p>
              <Link to="/">
                <Button variant="outline">Return to Home</Button>
              </Link>
            </motion.div>
          )}
        </div>
        
        <div className="max-w-3xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {affiliateFaqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

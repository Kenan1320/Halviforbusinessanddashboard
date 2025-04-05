
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AffiliateHero from "@/components/affiliate/AffiliateHero";
import RegularAffiliate from "@/components/affiliate/RegularAffiliate";
import SpecialChallenge from "@/components/affiliate/SpecialChallenge";
import AffiliateFAQSection from "@/components/affiliate/AffiliateFAQSection";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function AffiliateProgram() {
  // Sample app data
  const daysRemaining = 4;
  const challenges = [
    { position: 1, name: "Ahmed M.", referrals: 8, earnings: "$1,600" },
    { position: 2, name: "Sarah K.", referrals: 6, earnings: "$1,200" },
    { position: 3, name: "Yusuf A.", referrals: 5, earnings: "$1,000" },
  ];
  
  const [applicationMode, setApplicationMode] = useState<'regular' | 'challenge'>('regular');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form schema validation
  const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
    instagram: z.string().optional(),
    website: z.string().optional(),
    referralPlan: z.string().min(20, { message: "Please tell us more about your referral plan (min 20 characters)." }),
    instagramPosting: z.boolean().optional()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      instagram: "",
      website: "",
      referralPlan: "",
      instagramPosting: false
    }
  });

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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted successfully!", {
        description: "We'll review your application and get back to you soon."
      });
      form.reset();
    }, 1500);
  };
  
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AffiliateHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 mb-8 mx-auto block w-fit bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 hover:bg-gradient-to-r hover:from-amber-200 hover:to-orange-200 dark:hover:from-amber-800/20 dark:hover:to-orange-800/20 border border-amber-200 dark:border-amber-800/30">
            <Link to="/affiliate-get-familiar">
              <BookOpen className="mr-2 h-4 w-4" />
              Get Familiar with the Affiliate Programs
            </Link>
          </Button>
        </div>
        
        <Tabs defaultValue="regular" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="regular" className="text-lg py-3">Affiliate Programs</TabsTrigger>
            <TabsTrigger value="challenge" className="text-lg py-3">Special Challenge</TabsTrigger>
          </TabsList>
          
          <TabsContent value="regular">
            <RegularAffiliate />
          </TabsContent>
          
          <TabsContent value="challenge">
            <SpecialChallenge daysRemaining={daysRemaining} challenges={challenges} />
          </TabsContent>
        </Tabs>
        
        <div className="max-w-4xl mx-auto mt-16" id="apply">
          <Card className="border-amber-100 dark:border-amber-800/30 shadow-md">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-100 dark:border-amber-800/30">
              <CardTitle className="text-2xl">Apply as an Affiliate</CardTitle>
              <CardDescription>
                Join our affiliate program and start earning passive income
              </CardDescription>
              
              <div className="mt-4 flex space-x-4">
                <Button 
                  variant={applicationMode === 'regular' ? 'default' : 'outline'} 
                  onClick={() => setApplicationMode('regular')}
                  className={applicationMode === 'regular' ? 'bg-gradient-to-r from-amber-500 to-orange-600' : ''}
                >
                  Regular Affiliate (20% Commission)
                </Button>
                <Button 
                  variant={applicationMode === 'challenge' ? 'default' : 'outline'} 
                  onClick={() => setApplicationMode('challenge')}
                  className={applicationMode === 'challenge' ? 'bg-gradient-to-r from-amber-500 to-orange-600' : ''}
                >
                  4-Day Challenge (40% Commission)
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {applicationMode === 'regular' && (
                <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h3 className="font-medium mb-2">Regular Affiliate Program:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Earn 20% commission on platform fees from your referrals</li>
                    <li>Commission applies for a full year after business signs up</li>
                    <li>No limit to how many businesses you can refer</li>
                    <li>Get paid monthly for all your active referrals</li>
                  </ul>
                </div>
              )}
              
              {applicationMode === 'challenge' && (
                <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h3 className="font-medium mb-2">4-Day Challenge Program:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Compete to refer the most businesses in 4 days</li>
                    <li>Winner earns Special Affiliate status with <strong>40% commission</strong></li>
                    <li>Commission applies for 16 months</li>
                    <li>Challenges run monthly with only 10 spots available</li>
                  </ul>
                </div>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(123) 456-7890" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="instagram"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instagram Handle (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="@yourusername" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website/Social Media (optional)</FormLabel>
                          <FormControl>
                            <Input type="url" placeholder="https://your-website.com" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="referralPlan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How do you plan to refer businesses to Halvi?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your strategy for referring businesses..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="instagramPosting"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to post about Halvi on my Instagram
                          </FormLabel>
                          <p className="text-sm text-muted-foreground">
                            Posting about Halvi can help you attract more referrals
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : `Submit ${applicationMode === 'challenge' ? 'Challenge' : 'Regular'} Application`}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        <AffiliateFAQSection faqs={affiliateFaqs} />
      </div>
      
      <Footer />
    </div>
  );
}

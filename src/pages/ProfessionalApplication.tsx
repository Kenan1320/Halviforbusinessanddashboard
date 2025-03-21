
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import AuroraBackground from "@/components/AuroraBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ProfessionalApplication() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    specialization: "",
    experience: "",
    website: "",
    bio: "",
    termsAgreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulated form submission
    setTimeout(() => {
      setLoading(false);
      toast("Success! You're on the waitlist.", {
        description: "We'll contact you when Halvi Professionals launches.",
        position: "top-center"
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <AuroraBackground className="pt-24 pb-16">
        <div className="pt-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-center mb-2">
              Join the Waitlist
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Be among the first professionals on the Halvi platform.
            </p>
            
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number*</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4">
                  <h2 className="text-xl font-semibold">Professional Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="profession">Professional Category*</Label>
                      <Select
                        value={formData.profession}
                        onValueChange={(value) => handleSelectChange("profession", value)}
                      >
                        <SelectTrigger id="profession">
                          <SelectValue placeholder="Select your profession" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthcare">Healthcare Professional</SelectItem>
                          <SelectItem value="therapist">Therapist/Counselor</SelectItem>
                          <SelectItem value="financial">Financial Advisor</SelectItem>
                          <SelectItem value="creative">Creative Professional</SelectItem>
                          <SelectItem value="legal">Legal Services</SelectItem>
                          <SelectItem value="business">Business Consultant</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization*</Label>
                      <Input
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        placeholder="e.g., Marriage Counseling"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience*</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleSelectChange("experience", value)}
                    >
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Website/Portfolio (Optional)</Label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://your-website.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio*</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Tell us about your professional background, services offered, and how you incorporate cultural/religious sensitivity in your practice..."
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="termsAgreed"
                    checked={formData.termsAgreed}
                    onCheckedChange={(checked) => handleCheckboxChange("termsAgreed", checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="termsAgreed"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions*
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      By joining the waitlist, you agree to Halvi's terms of service and privacy policy.
                    </p>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Join the Waitlist"}
                </Button>
                
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  * Required fields. We'll notify you when Halvi Professionals launches.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>
      
      <Footer />
    </>
  );
}

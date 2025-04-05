
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface AffiliateFormProps {
  id?: string;
}

const AffiliateForm = ({ id = "apply" }: AffiliateFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    instagram: "",
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

  return (
    <div id={id} className="max-w-2xl mx-auto py-16">
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
  );
};

export default AffiliateForm;

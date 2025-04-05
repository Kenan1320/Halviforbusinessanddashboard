
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Send, Bell, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ComingSoonPopupProps {
  serviceName: string;
  onClose: () => void;
}

export default function ComingSoonPopup({ serviceName, onClose }: ComingSoonPopupProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Allow exit animation to play
  };

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Simulate API call
    toast.success("You've been added to the waitlist!");
    setSubmitted(true);
    
    // After 3 seconds, close the popup
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) handleClose();
    }}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 p-0">
        <DialogHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 rounded-t-lg">
          <DialogTitle className="text-2xl font-bold">Coming Soon!</DialogTitle>
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-all"
          >
            <X className="h-4 w-4 text-white" />
          </button>
        </DialogHeader>
        
        <div className="p-6">
          {!submitted ? (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{serviceName}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This service is coming soon! Join our waitlist to be notified when it launches.
                </p>
              </div>
              
              <form onSubmit={handleJoinWaitlist} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <Button variant="outline" type="button" onClick={handleClose}>
                    Maybe Later
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-amber-500 to-orange-600"
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Join Waitlist
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-4"
            >
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You've been added to our waitlist. We'll notify you when {serviceName} launches!
              </p>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

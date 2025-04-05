
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CalendarClock, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ComingSoonPopupProps {
  serviceName: string;
  onClose: () => void;
  showBackdrop?: boolean;
}

const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({
  serviceName,
  onClose,
  showBackdrop = true
}) => {
  const [email, setEmail] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoining(true);
    
    // Simulate API call to join waitlist
    setTimeout(() => {
      toast.success("You've joined the waitlist!", {
        description: `We'll notify you when ${serviceName} becomes available.`
      });
      setIsJoining(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {showBackdrop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
        )}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
        >
          {/* Gold gradient top border */}
          <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 p-4">
                <Clock className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
              Coming Soon
            </h2>
            
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
              {serviceName} is currently under development. Join our waitlist to be notified when it launches!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  type="submit" 
                  disabled={isJoining}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                >
                  {isJoining ? (
                    <>
                      <span className="mr-2">Joining...</span>
                      <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                    </>
                  ) : (
                    <>Join Waitlist</>
                  )}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onClose}
                >
                  Maybe Later
                </Button>
              </div>
            </form>
            
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-start space-x-2">
                <Bell className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  We'll send you an email notification when {serviceName} is available for use. 
                  No spam, we promise!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ComingSoonPopup;

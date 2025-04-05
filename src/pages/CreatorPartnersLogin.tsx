
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Lock, UserCheck } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CreatorPartnersLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState("login");
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Simulate login process
    toast.loading("Logging in...");
    
    // Simulate API call
    setTimeout(() => {
      toast.dismiss();
      toast.success("Login successful!");
      navigate("/creator-partners-dashboard");
    }, 1500);
  };

  const handleGuestAccess = () => {
    toast.loading("Accessing guest mode...");
    
    setTimeout(() => {
      toast.dismiss();
      navigate("/creator-partners-dashboard");
    }, 1000);
  };

  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Creator Partners Dashboard</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Access your exclusive dashboard to manage your partnership with Halvi.
            </p>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Tabs value={mode} onValueChange={setMode} className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Partner Login</TabsTrigger>
              <TabsTrigger value="guest">Guest Mode</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Creator Partner Login</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full">Login to Dashboard</Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-6">
                  <div className="text-sm text-center text-gray-500">
                    <p>Don't have login credentials yet?</p>
                    <Link to="/affiliate-get-familiar" className="text-halvi-600 dark:text-halvi-400 hover:underline">
                      Apply to become a Creator Partner
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="guest" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Guest Access</CardTitle>
                  <CardDescription>
                    Preview the Creator Partners Dashboard in guest mode
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <UserCheck className="h-12 w-12 mx-auto text-halvi-600 dark:text-halvi-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Access a limited view of the Creator Partners Dashboard without requiring login credentials.
                    </p>
                  </div>
                  
                  <div className="mb-6 text-sm">
                    <h4 className="font-medium mb-2">In guest mode, you can:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Preview the dashboard interface</li>
                      <li>• View sample affiliate performance data</li>
                      <li>• Explore available resources</li>
                      <li>• Learn about Creator Partner benefits</li>
                    </ul>
                  </div>
                  
                  <Button onClick={handleGuestAccess} className="w-full">
                    Access Guest Mode
                  </Button>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-6">
                  <div className="text-sm text-center text-gray-500">
                    <p>Ready to become a Creator Partner?</p>
                    <Link to="/affiliate-get-familiar" className="text-halvi-600 dark:text-halvi-400 hover:underline">
                      Apply for full access
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl text-center"
          >
            <h3 className="text-lg font-medium mb-2 text-amber-800 dark:text-amber-300">
              Not yet a Creator Partner?
            </h3>
            <p className="text-sm text-amber-700 dark:text-amber-400 mb-4">
              Apply through our simplified process and start earning passive income with your influence.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/affiliate-get-familiar">
                Apply Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

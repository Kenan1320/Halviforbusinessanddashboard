
import React from "react";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function SignIn() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground>
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Back</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Sign in to your Halvi account to access all of our services.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium" htmlFor="password">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-xs text-halvi-600 dark:text-halvi-400">
                      Forgot Password?
                    </Link>
                  </div>
                  <input 
                    id="password"
                    type="password" 
                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="remember"
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-300 text-halvi-600 focus:ring-halvi-500"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                
                <Button className="w-full" size="lg">
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-halvi-600 dark:text-halvi-400 font-medium">
                    Sign Up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

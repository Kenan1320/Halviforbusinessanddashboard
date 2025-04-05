
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import AffiliateChallenge from "@/components/affiliate/AffiliateChallenge";
import CreatorPartners from "@/components/affiliate/CreatorPartners";
import { BookOpen, Users } from "lucide-react";

export default function AffiliateGetFamiliar() {
  const [mode, setMode] = useState("challenge");
  
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      
      <AuroraBackground fullHeight={false} className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Familiar with Halvi's Programs</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Learn about our special affiliate programs and how you can participate and earn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/affiliate">
                  <Users className="mr-2 h-4 w-4" />
                  Back to Affiliate Program
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      <div className="container mx-auto px-4 py-16">
        <Tabs value={mode} onValueChange={setMode} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="challenge" className="text-lg py-3">Affiliate Challenge</TabsTrigger>
            <TabsTrigger value="creator" className="text-lg py-3">Creator Partners</TabsTrigger>
          </TabsList>
          
          <TabsContent value="challenge">
            <AffiliateChallenge />
          </TabsContent>
          
          <TabsContent value="creator">
            <CreatorPartners />
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
}

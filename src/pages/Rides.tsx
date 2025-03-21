
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, Car, MapPin, Calendar, Clock } from "lucide-react";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";
import { Card, CardContent } from "@/components/ui/card";

export default function Rides() {
  const rideOptions = [
    {
      name: "Economy",
      icon: <Car className="w-5 h-5" />,
      price: "$15-20",
      time: "5 min away"
    },
    {
      name: "Comfort",
      icon: <Car className="w-5 h-5" />,
      price: "$22-28",
      time: "3 min away"
    },
    {
      name: "Premium",
      icon: <Car className="w-5 h-5" />,
      price: "$35-42",
      time: "7 min away"
    }
  ];

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <AnnouncementBanner />
      <Navbar />
      
      <AuroraBackground>
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Halvi Rides</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Book safe and reliable rides with Halvi's trusted drivers. Choose from a variety of
                vehicle options to suit your needs and budget.
              </p>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-[400px] mb-6 relative">
                <div className="absolute bottom-6 right-6">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    <MapPin className="mr-2 h-4 w-4" /> Set on Map
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <Card className="bg-white dark:bg-gray-800 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Book a Ride</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="text" 
                        placeholder="Pickup location"
                        className="w-full pl-10 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                      />
                    </div>
                    
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="text" 
                        placeholder="Destination"
                        className="w-full pl-10 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="text" 
                          placeholder="Date"
                          className="w-full pl-10 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                        />
                      </div>
                      
                      <div className="relative flex-1">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="text" 
                          placeholder="Time"
                          className="w-full pl-10 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-sm">Choose a ride:</h4>
                    
                    {rideOptions.map((option, index) => (
                      <div 
                        key={index} 
                        className={`p-3 border ${index === 0 ? 'border-halvi-500 bg-halvi-50 dark:bg-halvi-900/20' : 'border-gray-200 dark:border-gray-700'} rounded-lg flex justify-between items-center cursor-pointer hover:border-halvi-500 transition-colors`}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mr-3">
                            {option.icon}
                          </div>
                          <span>{option.name}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{option.price}</p>
                          <p className="text-xs text-gray-500">{option.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <AutoSwipeDemo />
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <BusinessAnnouncementCard />
      </div>
      
      <Footer />
    </div>
  );
}

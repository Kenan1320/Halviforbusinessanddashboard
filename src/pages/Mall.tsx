
import React from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, ShoppingBag, Search, Filter, Star } from "lucide-react";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";
import BusinessAnnouncementCard from "@/components/BusinessAnnouncementCard";

export default function Mall() {
  const categories = [
    "All Products",
    "Clothing",
    "Perfume",
    "Home Decor",
    "Books",
    "Electronics",
    "Gifts",
    "Beauty"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Halvi Mall</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Shop from a wide selection of verified halal products. From food to fashion,
                Halvi Mall connects you with the best halal sellers across the country.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-4 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search products"
                    className="w-full pl-10 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-halvi-500"
                  />
                </div>
                <Button className="w-full md:w-auto">Search</Button>
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Shop Name</p>
                  <h3 className="font-semibold text-sm mb-1">Product Name</h3>
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-bold text-sm">$24.99</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs ml-0.5">4.8</span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <Link to="/product-details">
                      <ShoppingBag className="mr-1 h-3 w-3" /> Add to Cart
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/products">View More <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
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

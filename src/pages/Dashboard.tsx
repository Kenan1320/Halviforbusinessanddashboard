
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Store, ShoppingBag, Utensils, Car, Briefcase, Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dashboardCards = [
  {
    title: "Halvi Local Dashboard",
    icon: <Store className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/local",
    delay: 0.1
  },
  {
    title: "Halvi Mall Dashboard",
    icon: <ShoppingBag className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/mall",
    delay: 0.2
  },
  {
    title: "Halvi Eats Dashboard",
    icon: <Utensils className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/eats",
    delay: 0.3
  },
  {
    title: "Halvi Drivers Dashboard",
    icon: <Car className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/drivers",
    delay: 0.4
  },
  {
    title: "Halvi Professionals Dashboard",
    icon: <Briefcase className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/professionals",
    delay: 0.5
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Access Your Dashboard
            </motion.h1>
            
            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sign In</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-halvi-500 focus:border-halvi-500 dark:bg-gray-700 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-halvi-500 focus:border-halvi-500 dark:bg-gray-700 dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id="remember-me" 
                        name="remember-me" 
                        type="checkbox" 
                        className="h-4 w-4 text-halvi-600 focus:ring-halvi-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm font-medium text-halvi-600 hover:text-halvi-500 dark:text-halvi-400">
                      Forgot password?
                    </a>
                  </div>
                  <div>
                    <Button className="w-full">
                      Sign In
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Select a dashboard to manage your Halvi business services
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
              >
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] border-2 border-transparent hover:border-halvi-400/20 dark:hover:border-halvi-400/30">
                  <CardHeader className="relative">
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <span className="relative mr-1.5 h-2 w-2 rounded-full bg-green-400">
                          <span className="absolute h-2 w-2 rounded-full bg-green-400 animate-ping opacity-75"></span>
                        </span>
                        Live
                      </span>
                    </div>
                    <div className="flex justify-center mb-4">
                      {card.icon}
                    </div>
                    <CardTitle className="text-center">{card.title}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={card.href}>
                        Go to Dashboard
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

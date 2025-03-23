
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Store, ShoppingBag, Utensils, Car, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneDemoWrapper from "@/components/PhoneDemoWrapper";

const dashboardCards = [
  {
    title: "Halvi Local Dashboard",
    description: "Manage your local shop, inventory, orders, and customer relationships.",
    icon: <Store className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/local",
    stats: {
      orders: 12,
      revenue: "$1,240"
    },
    status: "online",
    delay: 0.1
  },
  {
    title: "Halvi Mall Dashboard",
    description: "Control your online store, product catalog, and e-commerce operations.",
    icon: <ShoppingBag className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/mall",
    stats: {
      orders: 28,
      revenue: "$3,840"
    },
    status: "online",
    delay: 0.2
  },
  {
    title: "Halvi Eats Dashboard",
    description: "Manage your restaurant, menu, delivery logistics, and customer orders.",
    icon: <Utensils className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/eats",
    stats: {
      orders: 35,
      revenue: "$2,750"
    },
    status: "online",
    delay: 0.3
  },
  {
    title: "Halvi Drivers Dashboard",
    description: "Track earnings, manage deliveries, and optimize your driving routes.",
    icon: <Car className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/drivers",
    stats: {
      trips: 22,
      earnings: "$580"
    },
    status: "offline",
    delay: 0.4
  },
  {
    title: "Halvi Professionals Dashboard",
    description: "Manage appointments, client records, and video consultations.",
    icon: <Briefcase className="h-12 w-12 text-halvi-600 dark:text-halvi-400" />,
    href: "/dashboard/professionals",
    stats: {
      appointments: 8,
      revenue: "$1,600"
    },
    status: "online",
    delay: 0.5
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <PhoneDemoWrapper>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Business Dashboards
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300"
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
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${card.status === 'online' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                          <span className={`mr-1.5 h-2 w-2 rounded-full ${card.status === 'online' ? 'bg-green-400' : 'bg-gray-400'}`}></span>
                          {card.status === 'online' ? 'Online' : 'Offline'}
                        </span>
                      </div>
                      <div className="flex justify-center mb-4">
                        {card.icon}
                      </div>
                      <CardTitle className="text-center">{card.title}</CardTitle>
                      <CardDescription className="text-center mt-2">{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 my-4">
                        {Object.entries(card.stats).map(([key, value]) => (
                          <div key={key} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">{key}</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
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
        </PhoneDemoWrapper>
      </main>
      
      <Footer />
    </div>
  );
}

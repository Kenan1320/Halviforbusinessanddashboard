
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, Users, Utensils, Car } from "lucide-react";
import GlassCard from "./GlassCard";

export function BusinessCTA() {
  const options = [
    {
      icon: <Store className="w-5 h-5" />,
      title: "Local Business",
      description: "List your local halal business on our platform.",
      href: "/business/local",
      delay: 0.1,
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Become an Affiliate",
      description: "Join our affiliate program and earn rewards.",
      href: "/business/seller",
      delay: 0.2,
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      title: "Restaurant Partner",
      description: "Partner with Halvi Eats for food delivery.",
      href: "/business/restaurant",
      delay: 0.3,
    },
    {
      icon: <Car className="w-5 h-5" />,
      title: "Driver",
      description: "Join our team of Halvi Rides drivers.",
      href: "/business/driver",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 bg-halvi-50 dark:bg-halvi-950 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-bg w-full h-full opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Join the Halvi Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            Partner with us to grow your business and reach more customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {options.map((option) => (
            <GlassCard key={option.title} delay={option.delay}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>
                <Button asChild variant="outline">
                  <Link to={option.href}>Learn More</Link>
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/business">View All Business Options</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default BusinessCTA;

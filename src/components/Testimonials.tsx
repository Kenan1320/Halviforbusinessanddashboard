
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    name: "Ahmed Malik",
    role: "Restaurant Owner",
    content: "Joining Halvi Eats has increased our orders by 40%. The platform is easy to use and the team is very supportive.",
    rating: 5,
    service: "Halvi Eats",
    delay: 0.1,
  },
  {
    name: "Fatima Khan",
    role: "Customer",
    content: "Halvi Mall has made it so much easier to find authentic halal products. The delivery is always on time and the products are as described.",
    rating: 5,
    service: "Halvi Mall",
    delay: 0.2,
  },
  {
    name: "Omar Syed",
    role: "Driver",
    content: "Being a Halvi Rides driver has given me flexible work hours and a steady income. The app is user-friendly and the support team is always available.",
    rating: 4,
    service: "Halvi Rides",
    delay: 0.3,
  },
  {
    name: "Aisha Rahman",
    role: "Local Business Owner",
    content: "Halvi Local has helped my small business reach more customers in the community. The onboarding process was smooth and the commission rates are fair.",
    rating: 5,
    service: "Halvi Local",
    delay: 0.4,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              What People Are Saying
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
            >
              Join thousands of satisfied customers, businesses, and drivers who are part of the Halvi community.
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300">
                  {testimonial.service}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

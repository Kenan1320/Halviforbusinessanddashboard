
import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Halvi?",
    answer: "Halvi is a comprehensive platform that connects users with halal businesses, products, food delivery services, and transportation. It's designed to be your one-stop solution for all halal needs.",
  },
  {
    question: "How can I become a seller on Halvi Mall?",
    answer: "To become a seller on Halvi Mall, you need to complete the seller application process on our website. Once approved, you can list your halal products and start selling to our community.",
  },
  {
    question: "What are the commission rates for businesses?",
    answer: "Commission rates vary by service. Halvi Local charges 5-10%, Halvi Mall 8-15%, Halvi Eats 15-20%, and Halvi Rides 10-20%. Exact rates depend on business volume and partnership level.",
  },
  {
    question: "How do I sign up as a Halvi Rides driver?",
    answer: "To become a Halvi Rides driver, visit our driver application page, complete the form, submit required documents, and pass our background check. Once approved, you can start accepting ride requests.",
  },
  {
    question: "Is there an affiliate program?",
    answer: "Yes, Halvi offers an affiliate program where you can earn commissions by referring businesses and customers to our platform. Visit our affiliate page to learn more and sign up.",
  },
  {
    question: "How does Halvi ensure products are halal?",
    answer: "Halvi has a rigorous verification process for all businesses and products on our platform. We check certifications, conduct site visits, and continuously monitor customer feedback to ensure compliance with halal standards.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
            >
              Find answers to common questions about Halvi.
            </motion.p>
          </div>
        </ScrollAnimation>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;

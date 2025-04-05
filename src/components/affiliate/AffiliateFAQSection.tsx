
import React from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface AffiliateFAQSectionProps {
  faqs: FAQItem[];
}

const AffiliateFAQSection = ({ faqs }: AffiliateFAQSectionProps) => {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
          >
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </details>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateFAQSection;

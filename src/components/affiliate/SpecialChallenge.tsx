
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SpecialChallengeProps {
  daysRemaining: number;
  challenges: {
    position: number;
    name: string;
    referrals: number;
    earnings: string;
  }[];
}

const SpecialChallenge = ({ daysRemaining, challenges }: SpecialChallengeProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-8 rounded-xl border border-amber-100 dark:border-amber-900">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-4">Limited Time Opportunity</span>
          <h2 className="text-3xl font-bold mb-4">Special Affiliate Challenge</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Refer the most businesses during our 4-day challenge and earn Special Affiliate status with <span className="font-bold text-amber-600 dark:text-amber-400">doubled commission rate (40%)</span> for a full 16 months!
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 h-full w-0.5 bg-gradient-to-b from-amber-300 to-orange-300 z-0"></div>
          
          <div className="space-y-16 relative z-10 pl-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-16 bg-amber-100 rounded-full p-3 border border-amber-200">
                <Trophy className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">40% Commission</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                Double the standard rate on all orders from your referrals for 16 months. This special rate applies to all orders placed through businesses you refer during this period.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-16 bg-amber-100 rounded-full p-3 border border-amber-200">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{daysRemaining} Days Remaining</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                The challenge ends soon! Don't miss your chance to participate. Refer businesses quickly to increase your chances of winning.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-16 bg-amber-100 rounded-full p-3 border border-amber-200">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">All Orders for 16 Months</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                Earn commissions on all orders from each referred business for 16 months, with no limit on the number of orders. This can result in substantial passive income.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow mt-16 mb-8">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Current Leaderboard</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="text-left pb-3 pl-4">Position</th>
                    <th className="text-left pb-3">Affiliate</th>
                    <th className="text-left pb-3">Referrals</th>
                    <th className="text-right pb-3 pr-4">Potential Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {challenges.map((challenge) => (
                    <tr key={challenge.position} className="border-b dark:border-gray-700 last:border-0">
                      <td className="py-4 pl-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${challenge.position === 1 ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"}`}>
                          {challenge.position}
                        </span>
                      </td>
                      <td className="py-4 font-medium">{challenge.name}</td>
                      <td className="py-4">{challenge.referrals} businesses</td>
                      <td className="py-4 text-right pr-4">{challenge.earnings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-amber-500 to-orange-600">
            <a href="#apply">Join the Challenge</a>
          </Button>
          <div className="mt-4">
            <Link to="/affiliate-get-familiar" className="text-amber-600 dark:text-amber-400 hover:underline">
              Learn more about how the affiliate programs work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialChallenge;

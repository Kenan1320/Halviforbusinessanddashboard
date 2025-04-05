
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <Trophy className="h-10 w-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">40% Commission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Double the standard rate on all orders from your referrals for 16 months.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <Clock className="h-10 w-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{daysRemaining} Days Remaining</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The challenge ends soon! Don't miss your chance to participate.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <DollarSign className="h-10 w-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Up to 40,000 Orders</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn commissions on up to 40,000 orders from each referred business.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow mb-8">
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
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 text-center">
            <p className="text-amber-800 dark:text-amber-300 font-medium">
              Need just 9 referrals to take the lead and win Special Affiliate status!
            </p>
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

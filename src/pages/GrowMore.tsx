import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Search, 
  TrendingUp, 
  DollarSign, 
  Wrench, 
  Users, 
  Check, 
  ArrowRight 
} from "lucide-react";

const GrowMore = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5 
      }
    })
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.div 
          className="container mx-auto px-4 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Grow <span className="text-gradient">More</span> with Halvi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock Exclusive Growth Opportunities for Early Businesses, Shops, and Partners
          </p>
        </motion.div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Why More Matters */}
          <motion.section 
            className="mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold">Why "More" Matters</h2>
              <div className="h-px bg-halvi-500/30 flex-grow"></div>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              At Halvi, "More" isn't just a word—it's a promise. Whether you're an established business, 
              a local shop, a restaurant, a driver, or an affiliate, Halvi is designed to take you beyond 
              where you are today.
            </p>
            <p className="text-lg text-muted-foreground">
              When you click More, you're stepping into real growth, real earnings, and real expansion.
            </p>
          </motion.section>
          
          <div className="h-px w-full bg-border mb-20"></div>
          
          <h2 className="text-3xl font-bold mb-12 text-center">How You Will Grow More with Halvi</h2>
          
          {/* Point 1 */}
          <motion.section 
            className="mb-20 grid md:grid-cols-[auto_1fr] gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-halvi-50 dark:bg-halvi-950/50 flex items-center justify-center text-halvi-600 dark:text-halvi-400 shrink-0">
                <Rocket size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-halvi-600 dark:text-halvi-400">1.</span> Early Adopters Get First-Mover Advantage
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  custom={0}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Priority Placement</strong> – Early shops and businesses get top visibility in search results and featured sections.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={1}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Exclusive Founding Partner Benefits</strong> – Lock in special commission rates and premium perks that later entrants won't have access to.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={2}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Brand Recognition</strong> – Become one of the go-to businesses in Halvi's growing ecosystem before competitors flood in.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.section>
          
          {/* Point 2 */}
          <motion.section 
            className="mb-20 grid md:grid-cols-[auto_1fr] gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-halvi-50 dark:bg-halvi-950/50 flex items-center justify-center text-halvi-600 dark:text-halvi-400 shrink-0">
                <Search size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-halvi-600 dark:text-halvi-400">2.</span> Unmatched Visibility & Local Discovery
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  custom={0}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Halvi Local & Halvi Mall</strong> – Your business is instantly discoverable by a targeted audience looking for halal products & services.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={1}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Digital Storefront & Local Listings</strong> – Customers searching for halal businesses will see you first.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={2}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Personalized Marketing & Promotions</strong> – We actively promote early businesses through in-app banners, emails, and social media.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.section>
          
          {/* Point 3 */}
          <motion.section 
            className="mb-20 grid md:grid-cols-[auto_1fr] gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-halvi-50 dark:bg-halvi-950/50 flex items-center justify-center text-halvi-600 dark:text-halvi-400 shrink-0">
                <TrendingUp size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-halvi-600 dark:text-halvi-400">3.</span> More Customers, More Orders, More Revenue
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  custom={0}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Seamless Shopping Experience</strong> – Your customers will enjoy a smooth, Amazon-like checkout with easy ordering.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={1}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Integrated Delivery & Pickup</strong> – Local restaurants, grocery stores, and shops can tap into Halvi Eats & Halvi Rides to boost sales.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={2}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Recurring Customers & Retention Tools</strong> – Automated deals, loyalty rewards, and follow-up reminders keep customers coming back.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.section>
          
          {/* Point 4 */}
          <motion.section 
            className="mb-20 grid md:grid-cols-[auto_1fr] gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-halvi-50 dark:bg-halvi-950/50 flex items-center justify-center text-halvi-600 dark:text-halvi-400 shrink-0">
                <DollarSign size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-halvi-600 dark:text-halvi-400">4.</span> Higher Earnings, Better Commissions
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  custom={0}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Lower Fees for Early Joiners</strong> – Get exclusive reduced platform fees for joining early, meaning you keep more profit.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={1}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Affiliate & Referral Earnings</strong> – Bring other businesses or customers to Halvi and earn commissions passively.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={2}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Scalable Revenue Streams</strong> – Sell locally, ship nationwide, or offer services across different Halvi categories.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.section>
          
          {/* Point 5 */}
          <motion.section 
            className="mb-20 grid md:grid-cols-[auto_1fr] gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-halvi-50 dark:bg-halvi-950/50 flex items-center justify-center text-halvi-600 dark:text-halvi-400 shrink-0">
                <Wrench size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-halvi-600 dark:text-halvi-400">5.</span> Smart Business Tools to Optimize & Scale
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  custom={0}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Powerful Business Dashboard</strong> – Track sales, customer trends, and revenue in real-time.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={1}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>AI-Driven Insights</strong> – Know what's selling, what customers want, and how to optimize your store for max growth.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={2}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Automated Marketing</strong> – Run targeted promotions without lifting a finger—our AI suggests & applies the best-performing campaigns.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.section>
          
          {/* Point 6 */}
          <motion.section 
            className="mb-20 grid md:grid-cols-[auto_1fr] gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-halvi-50 dark:bg-halvi-950/50 flex items-center justify-center text-halvi-600 dark:text-halvi-400 shrink-0">
                <Users size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-halvi-600 dark:text-halvi-400">6.</span> Community, Trust, and a Stronger Halal Economy
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  custom={0}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>A Platform Built for You</strong> – Unlike mainstream platforms, Halvi is designed for halal-conscious consumers and businesses.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={1}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Verified Halal Certification & Badging</strong> – Gain customer trust instantly with our halal verification system.
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  custom={2}
                  variants={listItemVariants}
                >
                  <div className="mt-1 text-halvi-600 dark:text-halvi-400 shrink-0">
                    <Check size={18} />
                  </div>
                  <span>
                    <strong>Stronger Together</strong> – Be part of a network of Muslim entrepreneurs, businesses, and service providers supporting each other.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.section>
          
          <div className="h-px w-full bg-border mb-20"></div>
          
          {/* CTA Section */}
          <motion.section 
            className="text-center mb-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-6">Your Growth Starts Now.</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait until everyone else catches on. The best time to claim your spot and grow more with Halvi is right now.
            </p>
            
            <div className="space-y-4 mb-8 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-left bg-halvi-50/50 dark:bg-halvi-950/30 p-4 rounded-lg">
                <Check className="text-halvi-600 dark:text-halvi-400 shrink-0" />
                <span className="text-lg">Secure your Early Partner Benefits</span>
              </div>
              <div className="flex items-center gap-3 text-left bg-halvi-50/50 dark:bg-halvi-950/30 p-4 rounded-lg">
                <Check className="text-halvi-600 dark:text-halvi-400 shrink-0" />
                <span className="text-lg">Claim Top Visibility & Exclusive Rates</span>
              </div>
              <div className="flex items-center gap-3 text-left bg-halvi-50/50 dark:bg-halvi-950/30 p-4 rounded-lg">
                <Check className="text-halvi-600 dark:text-halvi-400 shrink-0" />
                <span className="text-lg">Start Earning More, Faster</span>
              </div>
            </div>
            
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full px-8 text-lg">
                <Link to="/business/apply">
                  Join Halvi Now
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.section>
          
          {/* Psychological Approach Section */}
          <motion.section 
            className="bg-halvi-50/50 dark:bg-halvi-950/30 p-6 rounded-xl"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-medium mb-4">Psychological & Marketing Approach Used:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="font-medium">•</span>
                <span><strong>Scarcity & Urgency</strong> – Highlighting early-mover advantages and exclusive benefits for first adopters.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="font-medium">•</span>
                <span><strong>Social Proof & Authority</strong> – Emphasizing community, visibility, and Halvi as the leader in the halal business space.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="font-medium">•</span>
                <span><strong>Financial Incentive</strong> – Lower fees, higher earnings, and multiple revenue streams.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="font-medium">•</span>
                <span><strong>Ease & Simplicity</strong> – Clear, structured growth steps that feel accessible and actionable.</span>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GrowMore;

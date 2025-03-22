
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AutoSwipeDemo from "@/components/AutoSwipeDemo";

const Therapist = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Halvi <span className="text-gradient">Therapists</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with culturally-sensitive mental health professionals who understand your values and needs.
            </p>
          </motion.div>
        </div>
        
        {/* Value Proposition */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="bg-halvi-50 dark:bg-halvi-950/30 p-8 rounded-xl">
              <div className="w-14 h-14 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center text-halvi-600 dark:text-halvi-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Sensitivity</h3>
              <p className="text-muted-foreground">
                Access therapists who understand Islamic values and cultural nuances, creating a space where you feel truly understood.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-halvi-50 dark:bg-halvi-950/30 p-8 rounded-xl">
              <div className="w-14 h-14 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center text-halvi-600 dark:text-halvi-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy & Confidentiality</h3>
              <p className="text-muted-foreground">
                Your mental health journey is private. We ensure strict confidentiality with all our verified therapists.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-halvi-50 dark:bg-halvi-950/30 p-8 rounded-xl">
              <div className="w-14 h-14 bg-halvi-100 dark:bg-halvi-900 rounded-full flex items-center justify-center text-halvi-600 dark:text-halvi-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Sessions</h3>
              <p className="text-muted-foreground">
                Choose between in-person, online, or phone sessions based on your comfort and convenience.
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* How It Works */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Finding the right therapist for your needs is simple and straightforward with Halvi
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center text-halvi-600 dark:text-halvi-400 mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Browse Profiles</h3>
              <p className="text-muted-foreground">
                Search therapists by specialization, language, gender, and more
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center text-halvi-600 dark:text-halvi-400 mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Book a Session</h3>
              <p className="text-muted-foreground">
                Select a convenient time and your preferred session format
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 flex items-center justify-center text-halvi-600 dark:text-halvi-400 mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Connect & Heal</h3>
              <p className="text-muted-foreground">
                Begin your journey to better mental well-being with ongoing support
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Specializations */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Areas of Specialization</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Our therapists offer support for a wide range of mental health concerns
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Anxiety & Stress", 
              "Depression", 
              "Family Counseling", 
              "Marriage Counseling",
              "Trauma & PTSD", 
              "Grief & Loss", 
              "Identity & Faith", 
              "Substance Use"
            ].map((specialization, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-background border border-border p-4 rounded-lg text-center hover:bg-accent/50 transition-colors"
              >
                {specialization}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Demo Section */}
        <div className="container mx-auto px-4 py-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Experience Halvi Therapists</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Preview how easy it is to find and connect with the right mental health professional
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <AutoSwipeDemo />
          </div>
        </div>
        
        {/* For Therapists */}
        <div className="container mx-auto px-4 mb-20">
          <Card className="bg-halvi-50 dark:bg-halvi-950/30 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Are You a Mental Health Professional?</h2>
                <p className="text-lg mb-6">
                  Join Halvi's platform to connect with patients who share your cultural understanding and values. We're building the largest network of culturally-sensitive therapists.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-halvi-600 dark:text-halvi-400 mt-1 shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Expand your practice with patients who need your specific expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-halvi-600 dark:text-halvi-400 mt-1 shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Flexible scheduling with full control over your availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-halvi-600 dark:text-halvi-400 mt-1 shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Secure payment processing and reduced administrative burden</span>
                  </li>
                </ul>
                <Button asChild className="rounded-full px-8">
                  <Link to="/professional/apply">Apply as a Therapist</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="max-w-sm">
                  <img 
                    src="/placeholder.svg" 
                    alt="Therapist working with client" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* FAQ */}
        <div className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get answers to common questions about Halvi's therapy services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Is therapy through Halvi confidential?</h3>
              <p className="text-muted-foreground">
                Yes, all therapy sessions through Halvi are completely confidential. Our platform 
                adheres to HIPAA guidelines and all therapists follow strict professional ethics 
                regarding patient privacy.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">How are therapists vetted?</h3>
              <p className="text-muted-foreground">
                All therapists on Halvi go through a comprehensive verification process including 
                license verification, background checks, and interviews to ensure they meet our 
                high standards for cultural competence and professional expertise.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Can I use insurance for therapy sessions?</h3>
              <p className="text-muted-foreground">
                Many therapists on our platform accept insurance. During the booking process, 
                you can filter for therapists who accept your specific insurance plan, or opt 
                for self-pay options.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">How do I know if a therapist is right for me?</h3>
              <p className="text-muted-foreground">
                Halvi offers detailed therapist profiles and many therapists provide free initial 
                consultations. This allows you to assess if a therapist's approach and personality 
                are a good fit for your needs before committing to ongoing sessions.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-halvi-600 to-halvi-400 text-white py-16 px-8 rounded-2xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Begin Your Healing Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with a therapist who understands your values and can provide the support you need
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full px-8">
              <Link to="/signup">Create Your Account</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Therapist;

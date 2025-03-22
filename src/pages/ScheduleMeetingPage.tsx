
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function ScheduleMeetingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 py-12">
          <ScheduleMeeting />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

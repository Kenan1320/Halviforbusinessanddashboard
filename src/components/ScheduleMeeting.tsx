
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function ScheduleMeeting() {
  const today = new Date();
  const [date, setDate] = useState<Date>(today);
  const [time, setTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const timeSlots = [
    { time: "09:00", available: false },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "12:00", available: false },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
    { time: "15:00", available: false },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: true },
    { time: "17:30", available: true },
  ];

  const handleBookMeeting = () => {
    if (!time) return;
    setBooked(true);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
      {!booked ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Schedule a Meeting with Halvi Team</h2>
            <p className="text-gray-600 dark:text-gray-400">Select a date and time that works for you</p>
          </div>
          
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  if (newDate) {
                    setDate(newDate);
                    setTime(null);
                  }
                }}
                className="p-2 md:pr-5 bg-white dark:bg-gray-900"
                disabled={[
                  { before: today },
                ]}
                initialFocus
              />
              <div className="relative w-full md:w-64 h-64 md:h-auto">
                <div className="absolute inset-0 border-gray-200 dark:border-gray-800 py-4 md:border-l border-t md:border-t-0">
                  <ScrollArea className="h-full">
                    <div className="space-y-3">
                      <div className="flex h-5 shrink-0 items-center px-5">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {format(date, "EEEE, MMMM d")}
                        </p>
                      </div>
                      <div className="grid gap-1.5 px-5 grid-cols-1">
                        {timeSlots.map(({ time: timeSlot, available }) => (
                          <Button
                            key={timeSlot}
                            variant={time === timeSlot ? "default" : "outline"}
                            size="sm"
                            className={`w-full ${time === timeSlot ? 'bg-halvi-600 hover:bg-halvi-700' : ''}`}
                            onClick={() => setTime(timeSlot)}
                            disabled={!available}
                          >
                            {timeSlot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button 
              onClick={handleBookMeeting} 
              disabled={!time} 
              className="bg-halvi-600 hover:bg-halvi-700 text-white"
            >
              Book Meeting
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Meeting Scheduled!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Your meeting has been scheduled for {format(date, "MMMM d, yyyy")} at {time}.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            You will receive a confirmation email with details and a calendar invitation shortly.
          </p>
          <Button 
            onClick={() => setBooked(false)} 
            variant="outline" 
            className="mt-6"
          >
            Schedule Another Meeting
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default ScheduleMeeting;

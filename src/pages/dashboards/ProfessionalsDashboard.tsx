
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowUpRight, 
  Calendar, 
  Users, 
  Video, 
  BarChart3, 
  Star,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

export default function ProfessionalsDashboard() {
  const stats = [
    {
      title: "Today's Appointments",
      value: "4",
      change: "+1",
      icon: <Calendar className="h-5 w-5 text-halvi-600 dark:text-halvi-400" />
    },
    {
      title: "Weekly Revenue",
      value: "$1,600",
      change: "+$240",
      icon: <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
    },
    {
      title: "Total Clients",
      value: "32",
      change: "+3",
      icon: <Users className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Rating",
      value: "4.9/5",
      change: "+0.1",
      icon: <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
    }
  ];

  const appointments = [
    { time: "10:00 AM", name: "Sara Ahmed", type: "Initial Consultation", duration: "60 min", status: "upcoming" },
    { time: "11:30 AM", name: "Mohammed Ali", type: "Follow-up Session", duration: "45 min", status: "upcoming" },
    { time: "1:00 PM", name: "Layla Saeed", type: "Therapy Session", duration: "60 min", status: "upcoming" },
    { time: "3:30 PM", name: "Ibrahim Khan", type: "Legal Consultation", duration: "30 min", status: "upcoming" }
  ];

  return (
    <DashboardLayout title="Professionals" type="professionals">
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Welcome back, Dr. Khaled</h1>
        <p className="text-muted-foreground">Here's your schedule for today.</p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {stat.change} from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>Your scheduled sessions for today</CardDescription>
              </div>
              <Button size="sm">
                <Video className="h-4 w-4 mr-2" />
                Start Next Session
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{appointment.time}</div>
                        <div className="text-sm text-muted-foreground">{appointment.duration}</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{appointment.name}</div>
                      <div className="text-sm text-muted-foreground">{appointment.type}</div>
                    </div>
                    <div>
                      <Button size="sm" variant="outline" className="mr-2">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Check In
                      </Button>
                      <Button size="sm">
                        <Video className="h-4 w-4 mr-2" />
                        Start
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Weekly Overview</CardTitle>
              <CardDescription>Appointments by day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <BarChart3 className="h-16 w-16 opacity-50" />
                  <span>Weekly calendar chart will appear here</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

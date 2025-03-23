
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowUpRight, 
  Car, 
  Clock, 
  MapPin, 
  BarChart3, 
  Star,
  Coins,
  Route,
  ToggleLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import DashboardLayout from "@/components/DashboardLayout";

export default function DriversDashboard() {
  const stats = [
    {
      title: "Today's Earnings",
      value: "$124",
      change: "+18%",
      icon: <Coins className="h-5 w-5 text-halvi-600 dark:text-halvi-400" />
    },
    {
      title: "Completed Trips",
      value: "7",
      change: "+2",
      icon: <Route className="h-5 w-5 text-green-600 dark:text-green-400" />
    },
    {
      title: "Avg. Trip Time",
      value: "24m",
      change: "-3m",
      icon: <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Rating",
      value: "4.9/5",
      change: "+0.1",
      icon: <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
    }
  ];

  return (
    <DashboardLayout title="Drivers" type="drivers">
      <div className="grid gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Tariq</h1>
            <p className="text-muted-foreground">Ready to start driving?</p>
          </div>
          <div className="flex items-center space-x-2 bg-card p-3 rounded-lg border shadow-sm">
            <Switch id="online-mode" />
            <div className="grid gap-0.5">
              <label htmlFor="online-mode" className="font-medium cursor-pointer">Go Online</label>
              <span className="text-xs text-muted-foreground">Currently offline</span>
            </div>
            <ToggleLeft className="h-5 w-5 text-muted-foreground ml-2" />
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.title === "Avg. Trip Time" 
                    ? stat.change.startsWith('-') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    : stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.change} from yesterday
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Your Area</CardTitle>
              <CardDescription>Current hotspots and your location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center space-y-2 text-muted-foreground">
                  <MapPin className="h-16 w-16 opacity-50" />
                  <span>Map view will appear here</span>
                  <Button size="sm" className="mt-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    Center on my location
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Earnings Breakdown</CardTitle>
              <CardDescription>Today's earnings by trip</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "8:30 AM", location: "Downtown", amount: "$18.50" },
                  { time: "10:15 AM", location: "Uptown", amount: "$22.75" },
                  { time: "12:40 PM", location: "Midtown", amount: "$15.25" },
                  { time: "2:15 PM", location: "West End", amount: "$24.50" },
                  { time: "4:30 PM", location: "East Side", amount: "$19.80" },
                  { time: "6:20 PM", location: "North District", amount: "$23.20" }
                ].map((trip, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <Car className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium">{trip.time}</p>
                      <p className="text-xs text-muted-foreground">{trip.location}</p>
                    </div>
                    <div className="ml-auto text-sm font-medium">{trip.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

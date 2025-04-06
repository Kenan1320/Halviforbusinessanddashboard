
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ShoppingCart, Package, Users, BarChart3, Calendar, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

export default function LocalDashboard() {
  const [isLoading, setIsLoading] = useState(false);

  const stats = [
    {
      title: "Today's Orders",
      value: "12",
      change: "+8%",
      icon: <ShoppingCart className="h-5 w-5 text-halvi-600 dark:text-halvi-400" />
    },
    {
      title: "Revenue",
      value: "$1,240",
      change: "+12%",
      icon: <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
    },
    {
      title: "Inventory Items",
      value: "843",
      change: "-3%",
      icon: <Package className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Customers",
      value: "2,431",
      change: "+18%",
      icon: <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
    }
  ];

  const refreshData = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Dashboard data refreshed");
    }, 1000);
  };

  return (
    <DashboardLayout title="Local" type="local">
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Business Owner</h1>
            <p className="text-muted-foreground">Here's what's happening with your local shop today.</p>
          </div>
          <Button variant="outline" size="sm" onClick={refreshData} disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center">
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Refreshing...
              </span>
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </>
            )}
          </Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <>
                    <Skeleton className="h-8 w-20 mb-1" />
                    <Skeleton className="h-4 w-16" />
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stat.change} from last week
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Tabs defaultValue="overview" className="mt-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1 md:col-span-2 overflow-hidden transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Daily revenue for the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="h-[300px] space-y-4">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-[260px] w-full" />
                    </div>
                  ) : (
                    <div className="h-[300px] flex items-center justify-center">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <BarChart3 className="h-16 w-16 opacity-50" />
                        <span>Revenue chart will appear here</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest shop actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isLoading ? (
                    Array(5).fill(0).map((_, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <Skeleton className="h-9 w-9 rounded-full" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-[70%]" />
                          <Skeleton className="h-3 w-[50%]" />
                        </div>
                        <Skeleton className="h-4 w-12" />
                      </div>
                    ))
                  ) : (
                    Array(5).fill(0).map((_, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">New order #{1000 + i}</p>
                          <p className="text-xs text-muted-foreground">3 items • $124.00</p>
                        </div>
                        <div className="ml-auto text-xs text-muted-foreground">{i * 10 + 5}m ago</div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Upcoming Calendar</CardTitle>
                <CardDescription>Your schedule for the week</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {[
                      { date: "Today, 2:00 PM", title: "New Product Arrival", description: "10 new items expected" },
                      { date: "Tomorrow, 10:00 AM", title: "Staff Meeting", description: "Monthly sales review" },
                      { date: "April 9, 3:30 PM", title: "Inventory Check", description: "Quarterly stock audit" }
                    ].map((event, i) => (
                      <div key={i} className="flex items-start space-x-4 p-3 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.description}</p>
                        </div>
                        <div className="ml-auto text-xs font-medium">{event.date}</div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

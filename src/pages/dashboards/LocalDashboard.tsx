
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ShoppingCart, Package, Users, BarChart3 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function LocalDashboard() {
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

  return (
    <DashboardLayout title="Local" type="local">
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Welcome back, Business Owner</h1>
        <p className="text-muted-foreground">Here's what's happening with your local shop today.</p>
        
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
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Daily revenue for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <BarChart3 className="h-16 w-16 opacity-50" />
                  <span>Revenue chart will appear here</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest shop actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
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
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

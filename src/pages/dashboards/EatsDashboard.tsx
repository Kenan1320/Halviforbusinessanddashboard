
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowUpRight, 
  Utensils, 
  Clock, 
  BarChart3, 
  Star,
  Timer,
  CheckCheck,
  X,
  AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

export default function EatsDashboard() {
  const stats = [
    {
      title: "Today's Orders",
      value: "35",
      change: "+28%",
      icon: <Utensils className="h-5 w-5 text-halvi-600 dark:text-halvi-400" />
    },
    {
      title: "Revenue",
      value: "$2,750",
      change: "+18%",
      icon: <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
    },
    {
      title: "Avg. Prep Time",
      value: "14m",
      change: "-2m",
      icon: <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Rating",
      value: "4.8/5",
      change: "+0.2",
      icon: <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
    }
  ];

  const orders = [
    { id: "#1234", customer: "Ahmed S.", items: 3, total: "$42.50", status: "new", time: "Just now" },
    { id: "#1233", customer: "Fatima K.", items: 2, total: "$28.75", status: "preparing", time: "5m ago" },
    { id: "#1232", customer: "Yusuf M.", items: 4, total: "$56.20", status: "preparing", time: "12m ago" },
    { id: "#1231", customer: "Aisha R.", items: 1, total: "$18.99", status: "ready", time: "18m ago" },
    { id: "#1230", customer: "Omar J.", items: 3, total: "$37.80", status: "completed", time: "32m ago" }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'new':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      case 'preparing':
        return <Timer className="h-5 w-5 text-amber-500" />;
      case 'ready':
        return <CheckCheck className="h-5 w-5 text-green-500" />;
      case 'completed':
        return <CheckCheck className="h-5 w-5 text-gray-500" />;
      case 'cancelled':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'new':
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case 'preparing':
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case 'ready':
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case 'completed':
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case 'cancelled':
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <DashboardLayout title="Eats" type="eats">
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Welcome back, Restaurant Owner</h1>
        <p className="text-muted-foreground">Here's what's happening with your restaurant today.</p>
        
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
                  stat.title === "Avg. Prep Time" 
                    ? stat.change.startsWith('-') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    : stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.change} from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Active Orders</CardTitle>
              <CardDescription>Current orders needing attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {getStatusIcon(order.status)}
                      </div>
                      <div>
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-muted-foreground">{order.customer}</div>
                      </div>
                    </div>
                    <div className="text-sm text-center">
                      <div>{order.items} items</div>
                      <div className="font-medium">{order.total}</div>
                    </div>
                    <div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                      <div className="text-xs text-muted-foreground mt-1 text-center">{order.time}</div>
                    </div>
                    <div>
                      <Button size="sm" disabled={order.status === 'completed'}>
                        Update Status
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Orders by Time</CardTitle>
              <CardDescription>Order volume by hour</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <BarChart3 className="h-16 w-16 opacity-50" />
                  <span>Order volume chart will appear here</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ShoppingCart, Package, BarChart3, Tag } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function MallDashboard() {
  const stats = [
    {
      title: "Online Orders",
      value: "28",
      change: "+22%",
      icon: <ShoppingCart className="h-5 w-5 text-halvi-600 dark:text-halvi-400" />
    },
    {
      title: "Revenue",
      value: "$3,840",
      change: "+15%",
      icon: <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
    },
    {
      title: "Products",
      value: "157",
      change: "+5%",
      icon: <Package className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      icon: <Tag className="h-5 w-5 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <DashboardLayout title="Mall" type="mall">
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Welcome back, Shop Owner</h1>
        <p className="text-muted-foreground">Here's what's happening with your online store today.</p>
        
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
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Daily sales for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <BarChart3 className="h-16 w-16 opacity-50" />
                  <span>Sales chart will appear here</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best-selling items this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Premium Prayer Mat", sales: 42, revenue: "$1,680" },
                { name: "Luxury Hijab Collection", sales: 38, revenue: "$950" },
                { name: "Date Gift Box", sales: 35, revenue: "$875" },
                { name: "Halal Snack Pack", sales: 32, revenue: "$640" },
                { name: "Islamic Wall Art", sales: 28, revenue: "$1,400" }
              ].map((product, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{i + 1}</span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <div className="ml-auto text-sm font-medium">{product.revenue}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

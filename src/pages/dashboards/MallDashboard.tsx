
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowUpRight, ShoppingCart, Package, BarChart3, Tag, RefreshCw, ChevronRight, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DashboardLayout from "@/components/DashboardLayout";

export default function MallDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const topProducts = [
    { name: "Premium Prayer Mat", sales: 42, revenue: "$1,680" },
    { name: "Luxury Hijab Collection", sales: 38, revenue: "$950" },
    { name: "Date Gift Box", sales: 35, revenue: "$875" },
    { name: "Halal Snack Pack", sales: 32, revenue: "$640" },
    { name: "Islamic Wall Art", sales: 28, revenue: "$1,400" }
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
    <DashboardLayout title="Mall" type="mall">
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Shop Owner</h1>
            <p className="text-muted-foreground">Here's what's happening with your online store today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 md:col-span-2 overflow-hidden transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Daily sales for the past week</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Detailed View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[725px]">
                    <DialogHeader>
                      <DialogTitle>Sales Analytics</DialogTitle>
                      <DialogDescription>
                        Comprehensive view of your store's sales performance
                      </DialogDescription>
                    </DialogHeader>
                    <div className="h-[400px] flex items-center justify-center">
                      <BarChart3 className="h-16 w-16 opacity-50" />
                      <span className="ml-2 text-muted-foreground">Expanded sales chart will appear here</span>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
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
                    <span>Sales chart will appear here</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best-selling items this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {isLoading ? (
                  Array(5).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <Skeleton className="h-9 w-9 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-[80%]" />
                        <Skeleton className="h-3 w-[50%]" />
                      </div>
                      <Skeleton className="h-4 w-12" />
                    </div>
                  ))
                ) : (
                  topProducts.map((product, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">{i + 1}</span>
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="text-sm font-medium">{product.name}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                          <TrendingUp className="h-3 w-3 text-green-500" />
                        </div>
                        <Progress value={(product.sales / topProducts[0].sales) * 100} className="h-1" />
                      </div>
                      <div className="ml-auto text-sm font-medium">{product.revenue}</div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="ghost" className="w-full" size="sm">
                <span>View All Products</span>
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

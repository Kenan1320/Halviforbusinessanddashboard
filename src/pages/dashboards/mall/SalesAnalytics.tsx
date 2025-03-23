
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const SalesAnalytics = () => {
  // Sample data for sales over time
  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
    { name: "Jul", sales: 3490 }
  ];

  // Sample data for category distribution
  const categoryData = [
    { name: "Clothing", value: 35 },
    { name: "Food", value: 25 },
    { name: "Books", value: 15 },
    { name: "Home Decor", value: 20 },
    { name: "Other", value: 5 }
  ];

  // Sample data for traffic sources
  const trafficData = [
    { name: "Direct", users: 1200 },
    { name: "Social", users: 800 },
    { name: "Search", users: 1600 },
    { name: "Referral", users: 400 },
    { name: "Email", users: 600 }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD"];

  // Summary cards data
  const summaryCards = [
    {
      title: "Total Sales",
      value: "$12,543",
      change: "+12.5%",
      increase: true,
      icon: <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
    },
    {
      title: "Average Order Value",
      value: "$85.32",
      change: "+3.2%",
      increase: true,
      icon: <ShoppingBag className="h-5 w-5 text-halvi-600 dark:text-halvi-400" />
    },
    {
      title: "Conversion Rate",
      value: "2.8%",
      change: "-0.5%",
      increase: false,
      icon: <TrendingUp className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "New Customers",
      value: "142",
      change: "+18%",
      increase: true,
      icon: <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <DashboardLayout title="Mall" type="mall">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Sales Analytics</h1>
          <p className="text-muted-foreground">Track your store performance and customer behavior</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((card, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                {card.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <div className="flex items-center text-xs">
                  {card.increase ? (
                    <ArrowUpRight className="mr-1 h-3 w-3 text-green-600 dark:text-green-400" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3 text-red-600 dark:text-red-400" />
                  )}
                  <span className={card.increase ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                    {card.change} from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-2 md:col-span-1">
            <CardHeader>
              <CardTitle>Monthly Sales</CardTitle>
              <CardDescription>Revenue generated over the last 7 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--background)', 
                        border: '1px solid var(--border)',
                        borderRadius: '6px'
                      }}
                    />
                    <Bar dataKey="sales" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2 md:col-span-1">
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
              <CardDescription>Product category distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--background)', 
                        border: '1px solid var(--border)',
                        borderRadius: '6px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>How customers are finding your store</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trafficData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--background)', 
                        border: '1px solid var(--border)',
                        borderRadius: '6px'
                      }}
                    />
                    <Line type="monotone" dataKey="users" stroke="var(--primary)" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SalesAnalytics;


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { Calendar, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";

const weekData = [
  { day: "Mon", amount: 45.75 },
  { day: "Tue", amount: 67.25 },
  { day: "Wed", amount: 58.50 },
  { day: "Thu", amount: 72.30 },
  { day: "Fri", amount: 89.15 },
  { day: "Sat", amount: 110.45 },
  { day: "Sun", amount: 95.20 },
];

const paymentBreakdownData = [
  { name: "Base Fare", value: 180.25 },
  { name: "Tips", value: 52.35 },
  { name: "Surge Pricing", value: 89.50 },
  { name: "Bonuses", value: 35.00 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function EarningsCurrent() {
  return (
    <DashboardLayout title="Drivers" type="drivers">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold">Current Earnings</h1>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>May 8 - May 14, 2023</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download CSV
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Weekly Earnings</CardTitle>
              <CardDescription>Current week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$538.60</div>
              <div className="text-sm text-green-600 dark:text-green-400">
                +12.5% from last week
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Completed Trips</CardTitle>
              <CardDescription>Current week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">37</div>
              <div className="text-sm text-green-600 dark:text-green-400">
                +5 from last week
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Average Per Trip</CardTitle>
              <CardDescription>Current week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$14.56</div>
              <div className="text-sm text-green-600 dark:text-green-400">
                +$1.25 from last week
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Daily Earnings</CardTitle>
                <CardDescription>Amount earned per day this week</CardDescription>
              </div>
              <Select defaultValue="week">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weekData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                    <Bar dataKey="amount" fill="#6366F1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Breakdown</CardTitle>
              <CardDescription>Source of earnings this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentBreakdownData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {paymentBreakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Your recent trip payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Trip ID</th>
                    <th scope="col" className="px-6 py-3">Pickup</th>
                    <th scope="col" className="px-6 py-3">Dropoff</th>
                    <th scope="col" className="px-6 py-3">Base</th>
                    <th scope="col" className="px-6 py-3">Tip</th>
                    <th scope="col" className="px-6 py-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "May 14, 2023", id: "T-58421", pickup: "Downtown", dropoff: "North End", base: "$12.50", tip: "$3.00", total: "$15.50" },
                    { date: "May 14, 2023", id: "T-58419", pickup: "Suburbs", dropoff: "Mall", base: "$18.75", tip: "$4.25", total: "$23.00" },
                    { date: "May 13, 2023", id: "T-58412", pickup: "Airport", dropoff: "Hotel", base: "$32.20", tip: "$5.50", total: "$37.70" },
                    { date: "May 13, 2023", id: "T-58408", pickup: "East Side", dropoff: "Downtown", base: "$14.30", tip: "$2.75", total: "$17.05" },
                    { date: "May 12, 2023", id: "T-58401", pickup: "Campus", dropoff: "Apartments", base: "$8.45", tip: "$1.50", total: "$9.95" },
                  ].map((payment, i) => (
                    <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <td className="px-6 py-4">{payment.date}</td>
                      <td className="px-6 py-4">{payment.id}</td>
                      <td className="px-6 py-4">{payment.pickup}</td>
                      <td className="px-6 py-4">{payment.dropoff}</td>
                      <td className="px-6 py-4">{payment.base}</td>
                      <td className="px-6 py-4">{payment.tip}</td>
                      <td className="px-6 py-4 font-medium">{payment.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

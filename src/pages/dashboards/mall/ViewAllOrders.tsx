
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Eye, Truck, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const ViewAllOrders = () => {
  // Sample order data
  const orders = [
    {
      id: "ORD11287",
      customer: "Fatima Ahmed",
      date: "2023-09-21",
      items: 3,
      total: "$145.99",
      status: "Processing"
    },
    {
      id: "ORD11286",
      customer: "Mohammed Ali",
      date: "2023-09-20",
      items: 1,
      total: "$49.99",
      status: "Shipped"
    },
    {
      id: "ORD11285",
      customer: "Sara Khan",
      date: "2023-09-19",
      items: 5,
      total: "$212.50",
      status: "Delivered"
    },
    {
      id: "ORD11284",
      customer: "Omar Farooq",
      date: "2023-09-18",
      items: 2,
      total: "$78.99",
      status: "Processing"
    },
    {
      id: "ORD11283",
      customer: "Noor Jahan",
      date: "2023-09-17",
      items: 4,
      total: "$156.75",
      status: "Delivered"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Processing':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'Shipped':
        return <Truck className="h-4 w-4 text-blue-500" />;
      case 'Delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Cancelled':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'Processing':
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case 'Shipped':
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case 'Delivered':
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case 'Cancelled':
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <DashboardLayout title="Mall" type="mall">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">All Orders</h1>
            <p className="text-muted-foreground">Manage and track customer orders</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Order History</CardTitle>
                <CardDescription>You have {orders.length} total orders</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search orders..."
                    className="pl-8 w-[200px] sm:w-[300px]"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ViewAllOrders;


import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Clock, CheckCircle, X, AlertTriangle, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ViewOrders = () => {
  // Sample incoming orders data
  const orders = [
    {
      id: "ORD5678",
      customer: "Amina Hassan",
      items: [
        { name: "Chicken Biryani", quantity: 2 },
        { name: "Garlic Naan", quantity: 3 },
        { name: "Mango Lassi", quantity: 2 }
      ],
      total: "$42.95",
      time: "5 min ago",
      status: "New",
      type: "Delivery"
    },
    {
      id: "ORD5677",
      customer: "Ibrahim Mohammed",
      items: [
        { name: "Beef Kebab Plate", quantity: 1 },
        { name: "Hummus with Pita", quantity: 1 },
        { name: "Lemon Mint Drink", quantity: 1 }
      ],
      total: "$25.99",
      time: "12 min ago",
      status: "Preparing",
      type: "Pickup"
    },
    {
      id: "ORD5676",
      customer: "Layla Mahmoud",
      items: [
        { name: "Family Mixed Grill", quantity: 1 },
        { name: "Tabbouleh Salad", quantity: 1 },
        { name: "Baklava Dessert", quantity: 4 }
      ],
      total: "$68.50",
      time: "18 min ago",
      status: "Ready",
      type: "Delivery"
    },
    {
      id: "ORD5675",
      customer: "Ahmed Al-Farsi",
      items: [
        { name: "Shawarma Wrap", quantity: 2 },
        { name: "Falafel Plate", quantity: 1 },
        { name: "Turkish Coffee", quantity: 2 }
      ],
      total: "$31.25",
      time: "25 min ago",
      status: "Preparing",
      type: "Pickup"
    },
    {
      id: "ORD5674",
      customer: "Sara Abdullah",
      items: [
        { name: "Lamb Tagine", quantity: 1 },
        { name: "Moroccan Couscous", quantity: 1 },
        { name: "Mint Tea", quantity: 2 }
      ],
      total: "$37.80",
      time: "30 min ago",
      status: "Ready",
      type: "Pickup"
    }
  ];

  // Filter state
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  // Status options
  const statuses = ["All", "New", "Preparing", "Ready"];
  const types = ["All", "Delivery", "Pickup"];

  // Filter orders based on status and type
  const filteredOrders = orders.filter(order => {
    const matchesStatus = selectedStatus === "All" || order.status === selectedStatus;
    const matchesType = selectedType === "All" || order.type === selectedType;
    return matchesStatus && matchesType;
  });

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'New':
        return <Bell className="h-4 w-4 text-blue-500" />;
      case 'Preparing':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'Ready':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Cancelled':
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'New':
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case 'Preparing':
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case 'Ready':
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case 'Cancelled':
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    // In a real app, this would update the order status in the database
    console.log(`Changing order ${orderId} status to ${newStatus}`);
  };

  return (
    <DashboardLayout title="Eats" type="eats">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Incoming Orders</h1>
            <p className="text-muted-foreground">Manage and process incoming food orders</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Orders</CardTitle>
                <CardDescription>You have {filteredOrders.length} orders</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            Order {order.id}
                            <Badge variant={order.type === "Delivery" ? "default" : "outline"}>
                              {order.type}
                            </Badge>
                          </h3>
                          <p className="text-sm text-muted-foreground">{order.customer} • {order.time}</p>
                        </div>
                        <div className={`mt-2 sm:mt-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>
                              <span className="font-medium">{item.quantity}x</span> {item.name}
                            </span>
                          </div>
                        ))}
                        <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                          <span>Total</span>
                          <span>{order.total}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/20 p-4 flex flex-row md:flex-col items-center justify-center gap-2 md:w-48">
                      {order.status === "New" && (
                        <Button 
                          onClick={() => handleStatusChange(order.id, "Preparing")}
                          className="w-full"
                        >
                          Start Preparing
                        </Button>
                      )}
                      {order.status === "Preparing" && (
                        <Button 
                          onClick={() => handleStatusChange(order.id, "Ready")}
                          className="w-full"
                        >
                          Mark as Ready
                        </Button>
                      )}
                      {order.status === "Ready" && (
                        <Button 
                          onClick={() => handleStatusChange(order.id, "Completed")}
                          className="w-full"
                          variant="outline"
                        >
                          Complete Order
                        </Button>
                      )}
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ViewOrders;

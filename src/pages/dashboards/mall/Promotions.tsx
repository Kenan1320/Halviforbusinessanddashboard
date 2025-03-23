
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Calendar, Percent, Tag, Edit, Trash2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Promotions = () => {
  // Sample promotions data
  const promotions = [
    {
      id: "PROMO001",
      name: "Summer Sale",
      discount: "25%",
      type: "Percentage",
      startDate: "2023-07-01",
      endDate: "2023-08-31",
      status: "Active",
      applicableProducts: "All Products"
    },
    {
      id: "PROMO002",
      name: "New Customer Discount",
      discount: "15%",
      type: "Percentage",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      status: "Active",
      applicableProducts: "All Products"
    },
    {
      id: "PROMO003",
      name: "Eid Special",
      discount: "30%",
      type: "Percentage",
      startDate: "2023-06-15",
      endDate: "2023-06-25",
      status: "Expired",
      applicableProducts: "Selected Categories"
    },
    {
      id: "PROMO004",
      name: "Free Shipping",
      discount: "100%",
      type: "Shipping",
      startDate: "2023-09-01",
      endDate: "2023-09-30",
      status: "Scheduled",
      applicableProducts: "Orders over $50"
    },
    {
      id: "PROMO005",
      name: "Flash Sale",
      discount: "40%",
      type: "Percentage",
      startDate: "2023-10-15",
      endDate: "2023-10-17",
      status: "Scheduled",
      applicableProducts: "Selected Products"
    }
  ];

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter promotions based on search and status
  const filteredPromotions = promotions.filter(promo => {
    const matchesSearch = promo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          promo.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || promo.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Get status badge class
  const getStatusClass = (status: string) => {
    switch(status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Expired":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "Scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <DashboardLayout title="Mall" type="mall">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Promotions</h1>
            <p className="text-muted-foreground">Create and manage special offers and discounts</p>
          </div>
          <Button asChild>
            <Link to="/dashboard/mall/marketing/promotions/new">
              <Plus className="h-4 w-4 mr-2" />
              Create Promotion
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>All Promotions</CardTitle>
                <CardDescription>You have {promotions.length} total promotions</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search promotions..."
                    className="pl-8 w-[200px] sm:w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Expired">Expired</option>
                </select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applicable To</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPromotions.map((promo) => (
                    <TableRow key={promo.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {promo.type === "Percentage" ? (
                            <Percent className="h-4 w-4 text-primary" />
                          ) : (
                            <Tag className="h-4 w-4 text-primary" />
                          )}
                          {promo.name}
                        </div>
                      </TableCell>
                      <TableCell>{promo.discount}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-xs">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>{promo.startDate} to {promo.endDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(promo.status)}`}>
                            {promo.status === "Scheduled" && <Clock className="mr-1 h-3 w-3" />}
                            {promo.status}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{promo.applicableProducts}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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

export default Promotions;

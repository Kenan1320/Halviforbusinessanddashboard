
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, AlertTriangle, RefreshCcw, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const LowStockItems = () => {
  // Sample inventory data - only low stock items
  const inventory = [
    {
      id: "PRD002",
      name: "Luxury Hijab Collection",
      sku: "HC-102",
      category: "Clothing",
      inStock: 8,
      threshold: 10,
      unitPrice: "$24.99",
    },
    {
      id: "PRD004",
      name: "Halal Snack Pack",
      sku: "HSP-210",
      category: "Food",
      inStock: 12,
      threshold: 15,
      unitPrice: "$19.99",
    },
    {
      id: "PRD007",
      name: "Children's Islamic Book Set",
      sku: "IBS-315",
      category: "Books",
      inStock: 5,
      threshold: 10,
      unitPrice: "$34.99",
    },
    {
      id: "PRD009",
      name: "Traditional Kameez",
      sku: "TK-423",
      category: "Clothing",
      inStock: 3,
      threshold: 8,
      unitPrice: "$49.99",
    },
    {
      id: "PRD012",
      name: "Miswak Natural Toothbrush Set",
      sku: "MNT-512",
      category: "Personal Care",
      inStock: 7,
      threshold: 12,
      unitPrice: "$14.99",
    },
  ];

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(inventory.map(item => item.category))];

  // Filter inventory based on search and category
  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate restock urgency
  const getUrgencyClass = (current: number, threshold: number) => {
    const ratio = current / threshold;
    if (ratio <= 0.3) return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    if (ratio <= 0.7) return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
    return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
  };

  return (
    <DashboardLayout title="Mall" type="mall">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Low Stock Items</h1>
            <p className="text-muted-foreground">Monitor and manage products that need to be restocked</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </Button>
            <Button asChild>
              <Link to="/dashboard/mall/products/new">
                <Plus className="h-4 w-4 mr-2" />
                Add New Product
              </Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <div>
                  <CardTitle>Low Stock Alerts</CardTitle>
                  <CardDescription>You have {inventory.length} items below their recommended stock levels</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 w-[200px] sm:w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>In Stock</TableHead>
                    <TableHead>Threshold</TableHead>
                    <TableHead>Unit Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {item.name}
                          <AlertTriangle className="h-4 w-4 text-amber-500 ml-2" />
                        </div>
                      </TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          getUrgencyClass(item.inStock, item.threshold)
                        }`}>
                          {item.inStock}
                        </span>
                      </TableCell>
                      <TableCell>{item.threshold}</TableCell>
                      <TableCell>{item.unitPrice}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Restock
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

export default LowStockItems;


import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Search, Plus, Edit, Trash2, Eye, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const ViewAllProducts = () => {
  // Sample product data
  const products = [
    {
      id: "PRD001",
      name: "Premium Prayer Mat",
      category: "Home & Lifestyle",
      price: "$49.99",
      stock: 25,
      status: "In Stock"
    },
    {
      id: "PRD002",
      name: "Luxury Hijab Collection",
      category: "Clothing & Accessories",
      price: "$29.99",
      stock: 42,
      status: "In Stock"
    },
    {
      id: "PRD003",
      name: "Date Gift Box",
      category: "Food & Beverages",
      price: "$35.99",
      stock: 18,
      status: "Low Stock"
    },
    {
      id: "PRD004",
      name: "Halal Snack Pack",
      category: "Food & Beverages",
      price: "$25.99",
      stock: 0,
      status: "Out of Stock"
    },
    {
      id: "PRD005",
      name: "Islamic Wall Art",
      category: "Home & Lifestyle",
      price: "$89.99",
      stock: 7,
      status: "In Stock"
    }
  ];

  return (
    <DashboardLayout title="Mall" type="mall">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">All Products</h1>
            <p className="text-muted-foreground">Manage and view all products in your store</p>
          </div>
          <Button asChild>
            <Link to="/dashboard/mall/products/new">
              <Plus className="mr-2 h-4 w-4" /> Add New Product
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Product Inventory</CardTitle>
                <CardDescription>You have {products.length} products</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
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
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${product.status === 'In Stock' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                            product.status === 'Low Stock' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' : 
                            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                          {product.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
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

export default ViewAllProducts;

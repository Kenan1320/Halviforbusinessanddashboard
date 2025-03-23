
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Tag, Edit, Eye, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ViewAllProducts = () => {
  // Sample products data
  const products = [
    {
      id: "LC001",
      name: "Fresh Local Honey",
      category: "Food & Beverages",
      price: "$12.99",
      rating: 4.8,
      status: "In Stock",
      featured: true
    },
    {
      id: "LC002",
      name: "Handmade Soap Set",
      category: "Personal Care",
      price: "$9.99",
      rating: 4.6,
      status: "In Stock",
      featured: true
    },
    {
      id: "LC003",
      name: "Organic Spice Mix",
      category: "Food & Beverages",
      price: "$7.49",
      rating: 4.4,
      status: "Low Stock",
      featured: false
    },
    {
      id: "LC004",
      name: "Artisan Candle",
      category: "Home Decor",
      price: "$15.99",
      rating: 4.9,
      status: "In Stock",
      featured: true
    },
    {
      id: "LC005",
      name: "Local Artwork Print",
      category: "Art & Crafts",
      price: "$24.99",
      rating: 4.7,
      status: "In Stock",
      featured: false
    },
    {
      id: "LC006",
      name: "Handcrafted Jewelry",
      category: "Accessories",
      price: "$29.99",
      rating: 4.8,
      status: "Out of Stock",
      featured: false
    }
  ];

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [filterByFeatured, setFilterByFeatured] = useState(false);

  // Filter products based on search and featured status
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFeatured = filterByFeatured ? product.featured : true;
    return matchesSearch && matchesFeatured;
  });

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'In Stock':
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case 'Low Stock':
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case 'Out of Stock':
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <DashboardLayout title="Local" type="local">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">All Products</h1>
            <p className="text-muted-foreground">View and manage all products in your local store</p>
          </div>
          <Button asChild>
            <Link to="/dashboard/local/inventory/new">
              <Plus className="h-4 w-4 mr-2" />
              Add New Product
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Products</CardTitle>
                <CardDescription>You have {products.length} total products</CardDescription>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
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
                <Button 
                  variant={filterByFeatured ? "default" : "outline"} 
                  onClick={() => setFilterByFeatured(!filterByFeatured)}
                  className="flex items-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  Featured
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
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {product.name}
                          {product.featured && (
                            <Tag className="h-3.5 w-3.5 text-amber-500" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                          <span>{product.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(product.status)}`}>
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

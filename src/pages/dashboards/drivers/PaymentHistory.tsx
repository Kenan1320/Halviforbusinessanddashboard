
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  Download, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  CreditCard,
  DollarSign,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import DashboardLayout from "@/components/DashboardLayout";

const payments = [
  { id: "PAY-5423", date: "May 8, 2023", amount: "$248.35", status: "Paid", method: "Direct Deposit" },
  { id: "PAY-5298", date: "May 1, 2023", amount: "$312.75", status: "Paid", method: "Direct Deposit" },
  { id: "PAY-5145", date: "Apr 24, 2023", amount: "$189.50", status: "Paid", method: "Direct Deposit" },
  { id: "PAY-5023", date: "Apr 17, 2023", amount: "$276.80", status: "Paid", method: "Direct Deposit" },
  { id: "PAY-4975", date: "Apr 10, 2023", amount: "$235.90", status: "Paid", method: "Direct Deposit" },
  { id: "PAY-4823", date: "Apr 3, 2023", amount: "$204.25", status: "Paid", method: "Direct Deposit" },
  { id: "PAY-4745", date: "Mar 27, 2023", amount: "$297.15", status: "Paid", method: "Direct Deposit" },
  { id: "PAY-4598", date: "Mar 20, 2023", amount: "$243.60", status: "Paid", method: "Direct Deposit" },
];

export default function PaymentHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <DashboardLayout title="Drivers" type="drivers">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold">Payment History</h1>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Last 3 Months
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export History
            </Button>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
            <CardDescription>Your payment statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Earnings (YTD)</p>
                  <p className="text-xl font-semibold">$6,452.30</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Last Payment</p>
                  <p className="text-xl font-semibold">$248.35</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Next Payment Date</p>
                  <p className="text-xl font-semibold">May 15, 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-0">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View all your payment records</CardDescription>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search payments..."
                    className="pl-8 w-full sm:w-[200px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Payment Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto mt-4">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">Payment ID</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Amount</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Payment Method</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payments
                    .filter(payment => {
                      if (!searchTerm) return true;
                      return payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             payment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             payment.amount.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((payment, i) => (
                      <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium">{payment.id}</td>
                        <td className="px-6 py-4">{payment.date}</td>
                        <td className="px-6 py-4">{payment.amount}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-300">
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">{payment.method}</td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm">View Details</Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing 8 of 24 results
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}

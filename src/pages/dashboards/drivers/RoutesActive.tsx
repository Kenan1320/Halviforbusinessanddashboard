
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowUpRight, 
  MapPin, 
  Navigation, 
  AlertCircle, 
  Map as MapIcon,
  MoreVertical,
  Clock,
  Phone,
  MessageSquare,
  PlayCircle,
  PauseCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardLayout from "@/components/DashboardLayout";

export default function RoutesActive() {
  const [activeRoute, setActiveRoute] = useState<'pickup' | 'dropoff' | 'none'>('pickup');
  
  return (
    <DashboardLayout title="Drivers" type="drivers">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold">Active Routes</h1>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <PauseCircle className="h-4 w-4" />
              Take a Break
            </Button>
            
            <Button size="sm" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              View Full Map
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className={activeRoute === 'pickup' ? 'border-green-500 dark:border-green-400' : ''}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    Current Pickup
                    {activeRoute === 'pickup' && 
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        Active
                      </span>
                    }
                  </CardTitle>
                  <CardDescription>Est. arrival in 5 min</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 dark:text-red-400">
                      Cancel Pickup
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-36 flex items-center justify-center">
                  <MapIcon className="h-12 w-12 text-gray-400" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <div className="text-sm font-medium">123 Main Street, Apt 4B</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      1.3 miles
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <div className="text-sm">Pickup by 2:30 PM</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">JS</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">John Smith</div>
                      <div className="text-xs text-gray-500">Customer • 4.8 ★</div>
                    </div>
                    
                    <div className="ml-auto flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="w-full" variant="default">
                    Navigate
                  </Button>
                  <Button className="w-full" variant="outline">
                    Arrived
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={activeRoute === 'dropoff' ? 'border-green-500 dark:border-green-400' : ''}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    Current Dropoff
                    {activeRoute === 'dropoff' && 
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        Active
                      </span>
                    }
                  </CardTitle>
                  <CardDescription>Est. arrival in 12 min</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 dark:text-red-400">
                      Report Issue
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-36 flex items-center justify-center">
                  <MapIcon className="h-12 w-12 text-gray-400" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <div className="text-sm font-medium">456 Park Avenue, Floor 3</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      3.8 miles
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <div className="text-sm">Deliver by 3:15 PM</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">AR</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Alice Roberts</div>
                      <div className="text-xs text-gray-500">Customer • 4.9 ★</div>
                    </div>
                    
                    <div className="ml-auto flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="w-full" variant="default">
                    Navigate
                  </Button>
                  <Button className="w-full" variant="outline">
                    Complete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Assignments</CardTitle>
              <CardDescription>Your scheduled pickups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "3:45 PM", address: "789 Elm Street", customer: "Mike Thompson", distance: "2.1 miles" },
                  { time: "4:30 PM", address: "234 Oak Drive", customer: "Sarah Johnson", distance: "3.5 miles" },
                  { time: "5:15 PM", address: "567 Pine Road", customer: "David Wilson", distance: "1.8 miles" },
                ].map((assignment, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 dark:border-gray-700">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="font-medium">{assignment.time}</div>
                        <div className="text-sm text-gray-500">{assignment.distance}</div>
                      </div>
                      <div className="text-sm">{assignment.address}</div>
                      <div className="text-xs text-gray-500">{assignment.customer}</div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  View All Upcoming
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Route Details</CardTitle>
            <CardDescription>Your current journey information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapIcon className="h-16 w-16 mx-auto text-gray-400" />
                  <p className="mt-2 text-gray-500">Interactive map will be displayed here</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                      <Navigation className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Total Distance</div>
                      <div className="text-xl font-semibold">8.3 miles</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                      <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Estimated Time</div>
                      <div className="text-xl font-semibold">26 minutes</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 dark:bg-amber-800 rounded-full">
                      <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Traffic Alert</div>
                      <div className="text-xl font-semibold">Moderate</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Turn-by-Turn Directions</h3>
                  <div className="space-y-3">
                    {[
                      { instruction: "Head north on Main Street", distance: "0.5 miles", icon: "↑" },
                      { instruction: "Turn right onto Park Avenue", distance: "1.2 miles", icon: "→" },
                      { instruction: "Continue onto Oak Boulevard", distance: "2.3 miles", icon: "↑" },
                      { instruction: "Turn left onto Cedar Lane", distance: "0.8 miles", icon: "←" },
                      { instruction: "Arrive at destination on right", distance: "350 feet", icon: "⦿" },
                    ].map((direction, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-gray-700 dark:text-gray-300">{direction.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{direction.instruction}</div>
                          <div className="text-xs text-gray-500">{direction.distance}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Route Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Estimated Fuel Cost:</div>
                      <div className="text-sm font-medium">$2.45</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Tolls:</div>
                      <div className="text-sm font-medium">None</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Potential Earnings:</div>
                      <div className="text-sm font-medium">$18.75 - $22.50</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Route Type:</div>
                      <div className="text-sm font-medium">Fastest</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Weather Conditions:</div>
                      <div className="text-sm font-medium">Clear, 72°F</div>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" className="w-full">
                        Optimize Route
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

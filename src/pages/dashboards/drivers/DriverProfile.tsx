
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Car, 
  Shield, 
  Edit, 
  Save,
  Upload,
  FileText,
  CheckCircle2,
  Clock,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from "@/components/DashboardLayout";

export default function DriverProfile() {
  const [editing, setEditing] = useState(false);
  
  return (
    <DashboardLayout title="Drivers" type="drivers">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold">Driver Profile</h1>
          
          <Button 
            onClick={() => setEditing(!editing)} 
            variant={editing ? "default" : "outline"} 
            className="flex items-center gap-2"
          >
            {editing ? (
              <>
                <Save className="h-4 w-4" />
                Save Changes
              </>
            ) : (
              <>
                <Edit className="h-4 w-4" />
                Edit Profile
              </>
            )}
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="mx-auto relative">
                <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 mx-auto">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
                {editing && (
                  <Button size="sm" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 p-0 rounded-full">
                    <Upload className="h-4 w-4" />
                    <span className="sr-only">Upload Image</span>
                  </Button>
                )}
              </div>
              <CardTitle>Tariq Ahmed</CardTitle>
              <CardDescription>Driver since January 2023</CardDescription>
              
              <div className="flex items-center justify-center gap-1 mt-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium">4.9</span>
                <span className="text-sm text-gray-500">(142 ratings)</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">tariq.ahmed@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">Dallas, TX</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Joined</div>
                    <div className="font-medium">January 15, 2023</div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="font-medium mb-3">Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Account Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Background Check Passed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Insurance Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Vehicle Approved</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="personal">
              <TabsList className="w-full">
                <TabsTrigger value="personal" className="flex-1">Personal Information</TabsTrigger>
                <TabsTrigger value="vehicle" className="flex-1">Vehicle Details</TabsTrigger>
                <TabsTrigger value="documents" className="flex-1">Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Tariq" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Ahmed" disabled={!editing} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="tariq.ahmed@example.com" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" disabled={!editing} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" defaultValue="1990-05-15" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select defaultValue="male" disabled={!editing}>
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Main Street" disabled={!editing} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="Dallas" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="TX" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" defaultValue="75201" disabled={!editing} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea 
                        id="bio" 
                        rows={3} 
                        className="w-full p-2 border rounded-md resize-none dark:bg-gray-950 dark:border-gray-800" 
                        defaultValue="Experienced driver with knowledge of the Dallas area. Dedicated to providing excellent service and on-time deliveries."
                        disabled={!editing}
                      ></textarea>
                    </div>
                  </CardContent>
                  {editing && (
                    <CardFooter className="justify-between">
                      <Button variant="outline" onClick={() => setEditing(false)}>Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
              
              <TabsContent value="vehicle" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vehicle Information</CardTitle>
                    <CardDescription>Your vehicle details for deliveries</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="make">Vehicle Make</Label>
                        <Input id="make" defaultValue="Toyota" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="model">Vehicle Model</Label>
                        <Input id="model" defaultValue="Camry" disabled={!editing} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year">Year</Label>
                        <Input id="year" defaultValue="2020" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="color">Color</Label>
                        <Input id="color" defaultValue="Silver" disabled={!editing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="license">License Plate</Label>
                        <Input id="license" defaultValue="ABC-1234" disabled={!editing} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicleType">Vehicle Type</Label>
                      <Select defaultValue="sedan" disabled={!editing}>
                        <SelectTrigger id="vehicleType">
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="van">Van</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-3">Vehicle Inspection</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Inspection Current</span>
                          </div>
                          <span className="text-sm text-gray-500">Valid until Oct 15, 2023</span>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Insurance Verified</span>
                          </div>
                          <span className="text-sm text-gray-500">Valid until Dec 31, 2023</span>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Registration Current</span>
                          </div>
                          <span className="text-sm text-gray-500">Valid until Jan 15, 2024</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Car className="flex-shrink-0 h-5 w-5 mt-0.5 text-blue-500" />
                          <div>
                            <h4 className="font-medium">Vehicle Photos</h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Please upload clear photos of your vehicle from different angles.
                            </p>
                            {editing ? (
                              <Button size="sm" variant="outline" className="mt-3">
                                <Upload className="h-4 w-4 mr-2" />
                                Upload Photos
                              </Button>
                            ) : (
                              <div className="grid grid-cols-4 gap-2 mt-3">
                                {[1, 2, 3, 4].map((i) => (
                                  <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
                                    <Car className="h-6 w-6 text-gray-400" />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  {editing && (
                    <CardFooter className="justify-between">
                      <Button variant="outline" onClick={() => setEditing(false)}>Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
              
              <TabsContent value="documents" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Documents & Verification</CardTitle>
                    <CardDescription>Important documents for your driver account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <FileText className="flex-shrink-0 h-5 w-5 mt-0.5 text-green-500" />
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">Driver's License</h4>
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-300">
                              Verified
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Expires on May 21, 2025
                          </p>
                          <div className="flex mt-3 gap-2">
                            <Button size="sm" variant="outline">
                              View Document
                            </Button>
                            {editing && (
                              <Button size="sm" variant="outline">
                                <Upload className="h-4 w-4 mr-1" />
                                Update
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="flex-shrink-0 h-5 w-5 mt-0.5 text-green-500" />
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">Vehicle Insurance</h4>
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-300">
                              Verified
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Expires on December 31, 2023
                          </p>
                          <div className="flex mt-3 gap-2">
                            <Button size="sm" variant="outline">
                              View Document
                            </Button>
                            {editing && (
                              <Button size="sm" variant="outline">
                                <Upload className="h-4 w-4 mr-1" />
                                Update
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <FileText className="flex-shrink-0 h-5 w-5 mt-0.5 text-green-500" />
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">Background Check</h4>
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-300">
                              Completed
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Completed on January 10, 2023
                          </p>
                          <div className="flex mt-3">
                            <Button size="sm" variant="outline">
                              View Results
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="flex-shrink-0 h-5 w-5 mt-0.5 text-amber-500" />
                        <div>
                          <h4 className="font-medium">Vehicle Registration</h4>
                          <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
                            Renewal due in 60 days (January 15, 2024)
                          </p>
                          {editing ? (
                            <Button size="sm" variant="outline" className="mt-3">
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Updated Document
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" className="mt-3">
                              Set Reminder
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                      <div className="max-w-xs mx-auto">
                        <Upload className="h-10 w-10 mx-auto text-gray-400" />
                        <h3 className="mt-2 font-medium">Upload Additional Documents</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Drag and drop additional documents or click to browse files
                        </p>
                        {editing && (
                          <Button className="mt-4">
                            <Upload className="h-4 w-4 mr-2" />
                            Browse Files
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  {editing && (
                    <CardFooter className="justify-between">
                      <Button variant="outline" onClick={() => setEditing(false)}>Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

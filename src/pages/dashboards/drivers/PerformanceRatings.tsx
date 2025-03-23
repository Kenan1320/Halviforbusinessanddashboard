
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import { Star, ThumbsUp, ThumbsDown, Award, MessageCircle, AlertTriangle, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ratingData = [
  { month: "Jan", rating: 4.8 },
  { month: "Feb", rating: 4.7 },
  { month: "Mar", rating: 4.9 },
  { month: "Apr", rating: 4.8 },
  { month: "May", rating: 4.9 },
];

const reviewsData = [
  { category: "Friendliness", count: 28 },
  { category: "Driving", count: 22 },
  { category: "Timeliness", count: 19 },
  { category: "Navigation", count: 15 },
  { category: "Vehicle", count: 12 },
];

const performanceData = [
  { aspect: "Timeliness", rating: 4.8 },
  { aspect: "Professionalism", rating: 4.9 },
  { aspect: "Communication", rating: 4.6 },
  { aspect: "Navigation", rating: 4.7 },
  { aspect: "Vehicle Cleanliness", rating: 4.8 },
  { aspect: "Safety", rating: 4.9 },
];

const skillsData = [
  { subject: 'Timeliness', A: 4.8, fullMark: 5 },
  { subject: 'Professionalism', A: 4.9, fullMark: 5 },
  { subject: 'Communication', A: 4.6, fullMark: 5 },
  { subject: 'Navigation', A: 4.7, fullMark: 5 },
  { subject: 'Vehicle', A: 4.8, fullMark: 5 },
  { subject: 'Safety', A: 4.9, fullMark: 5 },
];

export default function PerformanceRatings() {
  return (
    <DashboardLayout title="Drivers" type="drivers">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold">Driver Ratings & Reviews</h1>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Select defaultValue="3months">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" /> Overall Rating
              </CardTitle>
              <CardDescription>Your average customer rating</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">4.9</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +0.1 from last month
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Based on 142 ratings
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-green-500" /> Compliments
              </CardTitle>
              <CardDescription>Positive customer feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">86</div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +12 from last month
              </p>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Friendly Service</span>
                  <span className="font-medium">28</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Excellent Driving</span>
                  <span className="font-medium">22</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>On-time Delivery</span>
                  <span className="font-medium">19</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" /> Achievements
              </CardTitle>
              <CardDescription>Your driver accomplishments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                    <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <div className="font-medium">Top Rated Driver</div>
                    <div className="text-xs text-gray-500">Maintained 4.9+ rating for 3 months</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <ThumbsUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">100% On-Time</div>
                    <div className="text-xs text-gray-500">Last 50 deliveries</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Star className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium">200+ Deliveries</div>
                    <div className="text-xs text-gray-500">Milestone reached</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Rating History</CardTitle>
              <CardDescription>Your rating trend over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={ratingData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[4, 5]} tickCount={5} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="rating" 
                      stroke="#6366F1" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Positive Feedback Categories</CardTitle>
              <CardDescription>What customers appreciate most</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={reviewsData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#22C55E" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Performance Breakdown</CardTitle>
            <CardDescription>Detailed analysis of your performance areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} />
                    <Radar name="Performance" dataKey="A" stroke="#6366F1" fill="#6366F1" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Performance Areas</h3>
                  <div className="space-y-4">
                    {performanceData.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.aspect}</span>
                          <span className="text-sm font-medium">{item.rating}/5.0</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div 
                            className="bg-halvi-500 h-2.5 rounded-full" 
                            style={{ width: `${(item.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 space-y-4">
                  <h3 className="text-lg font-medium">Recent Feedback</h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium">Sarah J.</span>
                      </div>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      "Very punctual and professional driver. The delivery was perfect and on time!"
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className={`h-4 w-4 ${star <= 4 ? 'text-yellow-500 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                          ))}
                        </div>
                        <span className="text-sm font-medium">Mike T.</span>
                      </div>
                      <span className="text-xs text-gray-500">5 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      "Great driver, very friendly. Would definitely recommend!"
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-2">
                    View All Feedback
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Improvement Areas</CardTitle>
              <CardDescription>Suggestions for enhancing your service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <h4 className="font-medium">Communication</h4>
                  </div>
                  <p className="text-sm mt-2 ml-8">
                    Try sending a message to customers when you're about to arrive. This can improve your communication rating.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <h4 className="font-medium">Navigation</h4>
                  </div>
                  <p className="text-sm mt-2 ml-8">
                    Consider familiarizing yourself with less-traveled routes during peak hours to improve delivery times.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg">
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="h-5 w-5 text-green-500" />
                    <h4 className="font-medium">Strengths to Maintain</h4>
                  </div>
                  <p className="text-sm mt-2 ml-8">
                    Your timeliness and professionalism are highly rated. Keep up the excellent work in these areas!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Comments</CardTitle>
              <CardDescription>What your customers are saying</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John D.", comment: "Always on time and very friendly. The package was handled with care.", days: 1, rating: 5 },
                  { name: "Emily R.", comment: "Great service as always. Very reliable driver.", days: 3, rating: 5 },
                  { name: "Michael S.", comment: "Delivery was quick, but the driver seemed a bit rushed.", days: 5, rating: 4 },
                  { name: "Lisa K.", comment: "Excellent communication and very professional.", days: 7, rating: 5 },
                ].map((comment, i) => (
                  <div key={i} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-3 w-3 ${star <= comment.rating ? 'text-yellow-500 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">{comment.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{comment.days} {comment.days === 1 ? 'day' : 'days'} ago</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      "{comment.comment}"
                    </p>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-2">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  View All Comments
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

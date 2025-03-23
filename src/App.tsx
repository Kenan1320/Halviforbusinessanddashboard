
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

import Index from "./pages/Index";
import Local from "./pages/Local";
import Mall from "./pages/Mall";
import Eats from "./pages/Eats";
import Rides from "./pages/Rides";
import Business from "./pages/Business";
import Professional from "./pages/Professional";
import BusinessApplication from "./pages/BusinessApplication";
import DriverApplication from "./pages/DriverApplication";
import ProfessionalApplication from "./pages/ProfessionalApplication";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Affiliate from "./pages/Affiliate";
import NotFound from "./pages/NotFound";
import GrowMore from "./pages/GrowMore";
import Therapist from "./pages/Therapist";
import Counselor from "./pages/Counselor";
import Lawyer from "./pages/Lawyer";
import TrendingDallas from "./pages/TrendingDallas";
import Onboarding from "./pages/Onboarding";
import ScheduleMeetingPage from "./pages/ScheduleMeetingPage";
import LocalBusinessInfo from "./pages/LocalBusinessInfo";
import RestaurantPartnerInfo from "./pages/RestaurantPartnerInfo";
import DriverInfo from "./pages/DriverInfo";
import AffiliateInfo from "./pages/AffiliateInfo";

// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import LocalDashboard from "./pages/dashboards/LocalDashboard";
import MallDashboard from "./pages/dashboards/MallDashboard";
import EatsDashboard from "./pages/dashboards/EatsDashboard";
import DriversDashboard from "./pages/dashboards/DriversDashboard";
import ProfessionalsDashboard from "./pages/dashboards/ProfessionalsDashboard";

// Mall Dashboard Pages
import ViewAllProducts from "./pages/dashboards/mall/ViewAllProducts";
import AddNewProduct from "./pages/dashboards/mall/AddNewProduct";
import ViewAllOrders from "./pages/dashboards/mall/ViewAllOrders";
import ViewCategories from "./pages/dashboards/mall/ViewCategories";
import ViewInventory from "./pages/dashboards/mall/ViewInventory";

// Local Dashboard Pages
import ViewLocalProducts from "./pages/dashboards/local/ViewAllProducts";
import ComingSoonPage from "./components/ComingSoonPage";

// Eats Dashboard Pages
import ViewEatsOrders from "./pages/dashboards/eats/ViewOrders";

// Professionals Dashboard Pages
import ViewProfessionalAppointments from "./pages/dashboards/professionals/ViewAppointments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <NextUIProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/local" element={<Local />} />
              <Route path="/mall" element={<Mall />} />
              <Route path="/eats" element={<Eats />} />
              <Route path="/rides" element={<Rides />} />
              <Route path="/business" element={<Business />} />
              <Route path="/professional" element={<Professional />} />
              <Route path="/professional/apply" element={<ProfessionalApplication />} />
              <Route path="/business/apply" element={<BusinessApplication />} />
              <Route path="/driver" element={<DriverApplication />} />
              <Route path="/signup" element={<Onboarding />} />
              <Route path="/signin" element={<Onboarding />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/schedule-meeting" element={<ScheduleMeetingPage />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/grow-more" element={<GrowMore />} />
              <Route path="/therapist" element={<Therapist />} />
              <Route path="/counselor" element={<Counselor />} />
              <Route path="/lawyer" element={<Lawyer />} />
              <Route path="/trending-dallas" element={<TrendingDallas />} />
              <Route path="/business/local" element={<LocalBusinessInfo />} />
              <Route path="/business/restaurant" element={<RestaurantPartnerInfo />} />
              <Route path="/business/driver" element={<DriverInfo />} />
              <Route path="/business/seller" element={<AffiliateInfo />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Local Dashboard Routes */}
              <Route path="/dashboard/local" element={<LocalDashboard />} />
              <Route path="/dashboard/local/orders" element={<ComingSoonPage title="Local" type="local" pageName="Orders" />} />
              <Route path="/dashboard/local/orders/new" element={<ComingSoonPage title="Local" type="local" pageName="New Orders" />} />
              <Route path="/dashboard/local/orders/processing" element={<ComingSoonPage title="Local" type="local" pageName="Processing Orders" />} />
              <Route path="/dashboard/local/orders/completed" element={<ComingSoonPage title="Local" type="local" pageName="Completed Orders" />} />
              <Route path="/dashboard/local/orders/cancelled" element={<ComingSoonPage title="Local" type="local" pageName="Cancelled Orders" />} />
              <Route path="/dashboard/local/inventory" element={<ComingSoonPage title="Local" type="local" pageName="Inventory" />} />
              <Route path="/dashboard/local/inventory/all" element={<ViewLocalProducts />} />
              <Route path="/dashboard/local/inventory/new" element={<ComingSoonPage title="Local" type="local" pageName="Add New Product" />} />
              <Route path="/dashboard/local/inventory/categories" element={<ComingSoonPage title="Local" type="local" pageName="Product Categories" />} />
              <Route path="/dashboard/local/inventory/low-stock" element={<ComingSoonPage title="Local" type="local" pageName="Low Stock Items" />} />
              <Route path="/dashboard/local/customers" element={<ComingSoonPage title="Local" type="local" pageName="Customers" />} />
              <Route path="/dashboard/local/customers/all" element={<ComingSoonPage title="Local" type="local" pageName="All Customers" />} />
              <Route path="/dashboard/local/customers/frequent" element={<ComingSoonPage title="Local" type="local" pageName="Frequent Buyers" />} />
              <Route path="/dashboard/local/customers/support" element={<ComingSoonPage title="Local" type="local" pageName="Customer Support" />} />
              <Route path="/dashboard/local/analytics" element={<ComingSoonPage title="Local" type="local" pageName="Analytics" />} />
              <Route path="/dashboard/local/analytics/sales" element={<ComingSoonPage title="Local" type="local" pageName="Sales Reports" />} />
              <Route path="/dashboard/local/analytics/traffic" element={<ComingSoonPage title="Local" type="local" pageName="Traffic" />} />
              <Route path="/dashboard/local/analytics/behavior" element={<ComingSoonPage title="Local" type="local" pageName="Customer Behavior" />} />
              
              {/* Mall Dashboard Routes */}
              <Route path="/dashboard/mall" element={<MallDashboard />} />
              <Route path="/dashboard/mall/products" element={<ViewAllProducts />} />
              <Route path="/dashboard/mall/products/all" element={<ViewAllProducts />} />
              <Route path="/dashboard/mall/products/new" element={<AddNewProduct />} />
              <Route path="/dashboard/mall/products/categories" element={<ViewCategories />} />
              <Route path="/dashboard/mall/products/inventory" element={<ViewInventory />} />
              <Route path="/dashboard/mall/orders" element={<ViewAllOrders />} />
              <Route path="/dashboard/mall/orders/all" element={<ViewAllOrders />} />
              <Route path="/dashboard/mall/orders/processing" element={<ComingSoonPage title="Mall" type="mall" pageName="Processing Orders" />} />
              <Route path="/dashboard/mall/orders/shipping" element={<ComingSoonPage title="Mall" type="mall" pageName="Shipping Orders" />} />
              <Route path="/dashboard/mall/orders/delivered" element={<ComingSoonPage title="Mall" type="mall" pageName="Delivered Orders" />} />
              <Route path="/dashboard/mall/orders/returns" element={<ComingSoonPage title="Mall" type="mall" pageName="Returns" />} />
              <Route path="/dashboard/mall/storefront" element={<ComingSoonPage title="Mall" type="mall" pageName="Storefront" />} />
              <Route path="/dashboard/mall/storefront/theme" element={<ComingSoonPage title="Mall" type="mall" pageName="Theme & Layout" />} />
              <Route path="/dashboard/mall/storefront/banners" element={<ComingSoonPage title="Mall" type="mall" pageName="Banners" />} />
              <Route path="/dashboard/mall/storefront/featured" element={<ComingSoonPage title="Mall" type="mall" pageName="Featured Products" />} />
              <Route path="/dashboard/mall/marketing" element={<ComingSoonPage title="Mall" type="mall" pageName="Marketing" />} />
              <Route path="/dashboard/mall/marketing/promotions" element={<ComingSoonPage title="Mall" type="mall" pageName="Promotions" />} />
              <Route path="/dashboard/mall/marketing/discounts" element={<ComingSoonPage title="Mall" type="mall" pageName="Discount Codes" />} />
              <Route path="/dashboard/mall/marketing/email" element={<ComingSoonPage title="Mall" type="mall" pageName="Email Campaigns" />} />
              <Route path="/dashboard/mall/marketing/social" element={<ComingSoonPage title="Mall" type="mall" pageName="Social Media" />} />
              <Route path="/dashboard/mall/analytics" element={<ComingSoonPage title="Mall" type="mall" pageName="Analytics" />} />
              <Route path="/dashboard/mall/analytics/sales" element={<ComingSoonPage title="Mall" type="mall" pageName="Sales Reports" />} />
              <Route path="/dashboard/mall/analytics/traffic" element={<ComingSoonPage title="Mall" type="mall" pageName="Traffic Sources" />} />
              <Route path="/dashboard/mall/analytics/customers" element={<ComingSoonPage title="Mall" type="mall" pageName="Customer Insights" />} />
              
              {/* Eats Dashboard Routes */}
              <Route path="/dashboard/eats" element={<EatsDashboard />} />
              <Route path="/dashboard/eats/orders" element={<ComingSoonPage title="Eats" type="eats" pageName="Orders" />} />
              <Route path="/dashboard/eats/orders/incoming" element={<ViewEatsOrders />} />
              <Route path="/dashboard/eats/orders/preparing" element={<ComingSoonPage title="Eats" type="eats" pageName="Preparing Orders" />} />
              <Route path="/dashboard/eats/orders/ready" element={<ComingSoonPage title="Eats" type="eats" pageName="Ready for Pickup" />} />
              <Route path="/dashboard/eats/orders/history" element={<ComingSoonPage title="Eats" type="eats" pageName="Order History" />} />
              <Route path="/dashboard/eats/menu" element={<ComingSoonPage title="Eats" type="eats" pageName="Menu" />} />
              <Route path="/dashboard/eats/menu/all" element={<ComingSoonPage title="Eats" type="eats" pageName="All Menu Items" />} />
              <Route path="/dashboard/eats/menu/new" element={<ComingSoonPage title="Eats" type="eats" pageName="Add New Item" />} />
              <Route path="/dashboard/eats/menu/categories" element={<ComingSoonPage title="Eats" type="eats" pageName="Menu Categories" />} />
              <Route path="/dashboard/eats/menu/specials" element={<ComingSoonPage title="Eats" type="eats" pageName="Special Offers" />} />
              <Route path="/dashboard/eats/delivery" element={<ComingSoonPage title="Eats" type="eats" pageName="Delivery" />} />
              <Route path="/dashboard/eats/delivery/active" element={<ComingSoonPage title="Eats" type="eats" pageName="Active Deliveries" />} />
              <Route path="/dashboard/eats/delivery/drivers" element={<ComingSoonPage title="Eats" type="eats" pageName="Drivers" />} />
              <Route path="/dashboard/eats/delivery/zones" element={<ComingSoonPage title="Eats" type="eats" pageName="Delivery Zones" />} />
              <Route path="/dashboard/eats/analytics" element={<ComingSoonPage title="Eats" type="eats" pageName="Analytics" />} />
              <Route path="/dashboard/eats/analytics/sales" element={<ComingSoonPage title="Eats" type="eats" pageName="Sales Performance" />} />
              <Route path="/dashboard/eats/analytics/popular" element={<ComingSoonPage title="Eats" type="eats" pageName="Popular Items" />} />
              <Route path="/dashboard/eats/analytics/demographics" element={<ComingSoonPage title="Eats" type="eats" pageName="Customer Demographics" />} />
              <Route path="/dashboard/eats/inventory" element={<ComingSoonPage title="Eats" type="eats" pageName="Inventory" />} />
              <Route path="/dashboard/eats/inventory/ingredients" element={<ComingSoonPage title="Eats" type="eats" pageName="Ingredients" />} />
              <Route path="/dashboard/eats/inventory/suppliers" element={<ComingSoonPage title="Eats" type="eats" pageName="Suppliers" />} />
              <Route path="/dashboard/eats/inventory/stock" element={<ComingSoonPage title="Eats" type="eats" pageName="Stock Levels" />} />
              
              {/* Drivers Dashboard Routes */}
              <Route path="/dashboard/drivers" element={<DriversDashboard />} />
              <Route path="/dashboard/drivers/earnings" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Earnings" />} />
              <Route path="/dashboard/drivers/earnings/current" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Current Earnings" />} />
              <Route path="/dashboard/drivers/earnings/history" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Payment History" />} />
              <Route path="/dashboard/drivers/earnings/bonuses" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Bonuses" />} />
              <Route path="/dashboard/drivers/routes" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Routes" />} />
              <Route path="/dashboard/drivers/routes/active" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Active Routes" />} />
              <Route path="/dashboard/drivers/routes/history" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Route History" />} />
              <Route path="/dashboard/drivers/routes/preferred" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Preferred Areas" />} />
              <Route path="/dashboard/drivers/performance" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Performance" />} />
              <Route path="/dashboard/drivers/performance/ratings" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Ratings" />} />
              <Route path="/dashboard/drivers/performance/stats" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Statistics" />} />
              <Route path="/dashboard/drivers/performance/achievements" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Achievements" />} />
              <Route path="/dashboard/drivers/account" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Account" />} />
              <Route path="/dashboard/drivers/account/profile" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Profile" />} />
              <Route path="/dashboard/drivers/account/vehicle" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Vehicle Details" />} />
              <Route path="/dashboard/drivers/account/documents" element={<ComingSoonPage title="Drivers" type="drivers" pageName="Documents" />} />
              
              {/* Professionals Dashboard Routes */}
              <Route path="/dashboard/professionals" element={<ProfessionalsDashboard />} />
              <Route path="/dashboard/professionals/appointments" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Appointments" />} />
              <Route path="/dashboard/professionals/appointments/upcoming" element={<ViewProfessionalAppointments />} />
              <Route path="/dashboard/professionals/appointments/past" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Past Appointments" />} />
              <Route path="/dashboard/professionals/appointments/availability" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Manage Availability" />} />
              <Route path="/dashboard/professionals/clients" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Clients" />} />
              <Route path="/dashboard/professionals/clients/all" element={<ComingSoonPage title="Professionals" type="professionals" pageName="All Clients" />} />
              <Route path="/dashboard/professionals/clients/new" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Add New Client" />} />
              <Route path="/dashboard/professionals/clients/notes" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Client Notes" />} />
              <Route path="/dashboard/professionals/video" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Video Sessions" />} />
              <Route path="/dashboard/professionals/video/start" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Start Session" />} />
              <Route path="/dashboard/professionals/video/upcoming" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Upcoming Sessions" />} />
              <Route path="/dashboard/professionals/video/history" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Session History" />} />
              <Route path="/dashboard/professionals/resources" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Resources" />} />
              <Route path="/dashboard/professionals/resources/documents" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Documents" />} />
              <Route path="/dashboard/professionals/resources/templates" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Templates" />} />
              <Route path="/dashboard/professionals/resources/educational" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Educational" />} />
              <Route path="/dashboard/professionals/performance" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Performance" />} />
              <Route path="/dashboard/professionals/performance/analytics" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Analytics" />} />
              <Route path="/dashboard/professionals/performance/ratings" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Ratings & Reviews" />} />
              <Route path="/dashboard/professionals/performance/financial" element={<ComingSoonPage title="Professionals" type="professionals" pageName="Financial Reports" />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </NextUIProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

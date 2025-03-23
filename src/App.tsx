
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
              <Route path="/dashboard/local/orders" element={<NotFound />} />
              <Route path="/dashboard/local/orders/new" element={<NotFound />} />
              <Route path="/dashboard/local/orders/processing" element={<NotFound />} />
              <Route path="/dashboard/local/orders/completed" element={<NotFound />} />
              <Route path="/dashboard/local/orders/cancelled" element={<NotFound />} />
              <Route path="/dashboard/local/inventory" element={<NotFound />} />
              <Route path="/dashboard/local/inventory/all" element={<NotFound />} />
              <Route path="/dashboard/local/inventory/new" element={<NotFound />} />
              <Route path="/dashboard/local/inventory/categories" element={<NotFound />} />
              <Route path="/dashboard/local/inventory/low-stock" element={<NotFound />} />
              <Route path="/dashboard/local/customers" element={<NotFound />} />
              <Route path="/dashboard/local/customers/all" element={<NotFound />} />
              <Route path="/dashboard/local/customers/frequent" element={<NotFound />} />
              <Route path="/dashboard/local/customers/support" element={<NotFound />} />
              <Route path="/dashboard/local/analytics" element={<NotFound />} />
              <Route path="/dashboard/local/analytics/sales" element={<NotFound />} />
              <Route path="/dashboard/local/analytics/traffic" element={<NotFound />} />
              <Route path="/dashboard/local/analytics/behavior" element={<NotFound />} />
              
              {/* Mall Dashboard Routes */}
              <Route path="/dashboard/mall" element={<MallDashboard />} />
              <Route path="/dashboard/mall/products" element={<ViewAllProducts />} />
              <Route path="/dashboard/mall/products/all" element={<ViewAllProducts />} />
              <Route path="/dashboard/mall/products/new" element={<AddNewProduct />} />
              <Route path="/dashboard/mall/products/categories" element={<NotFound />} />
              <Route path="/dashboard/mall/products/inventory" element={<NotFound />} />
              <Route path="/dashboard/mall/orders" element={<NotFound />} />
              <Route path="/dashboard/mall/orders/all" element={<NotFound />} />
              <Route path="/dashboard/mall/orders/processing" element={<NotFound />} />
              <Route path="/dashboard/mall/orders/shipping" element={<NotFound />} />
              <Route path="/dashboard/mall/orders/delivered" element={<NotFound />} />
              <Route path="/dashboard/mall/orders/returns" element={<NotFound />} />
              <Route path="/dashboard/mall/storefront" element={<NotFound />} />
              <Route path="/dashboard/mall/storefront/theme" element={<NotFound />} />
              <Route path="/dashboard/mall/storefront/banners" element={<NotFound />} />
              <Route path="/dashboard/mall/storefront/featured" element={<NotFound />} />
              <Route path="/dashboard/mall/marketing" element={<NotFound />} />
              <Route path="/dashboard/mall/marketing/promotions" element={<NotFound />} />
              <Route path="/dashboard/mall/marketing/discounts" element={<NotFound />} />
              <Route path="/dashboard/mall/marketing/email" element={<NotFound />} />
              <Route path="/dashboard/mall/marketing/social" element={<NotFound />} />
              <Route path="/dashboard/mall/analytics" element={<NotFound />} />
              <Route path="/dashboard/mall/analytics/sales" element={<NotFound />} />
              <Route path="/dashboard/mall/analytics/traffic" element={<NotFound />} />
              <Route path="/dashboard/mall/analytics/customers" element={<NotFound />} />
              
              {/* Eats Dashboard Routes */}
              <Route path="/dashboard/eats" element={<EatsDashboard />} />
              <Route path="/dashboard/eats/orders" element={<NotFound />} />
              <Route path="/dashboard/eats/orders/incoming" element={<NotFound />} />
              <Route path="/dashboard/eats/orders/preparing" element={<NotFound />} />
              <Route path="/dashboard/eats/orders/ready" element={<NotFound />} />
              <Route path="/dashboard/eats/orders/history" element={<NotFound />} />
              <Route path="/dashboard/eats/menu" element={<NotFound />} />
              <Route path="/dashboard/eats/menu/all" element={<NotFound />} />
              <Route path="/dashboard/eats/menu/new" element={<NotFound />} />
              <Route path="/dashboard/eats/menu/categories" element={<NotFound />} />
              <Route path="/dashboard/eats/menu/specials" element={<NotFound />} />
              <Route path="/dashboard/eats/delivery" element={<NotFound />} />
              <Route path="/dashboard/eats/delivery/active" element={<NotFound />} />
              <Route path="/dashboard/eats/delivery/drivers" element={<NotFound />} />
              <Route path="/dashboard/eats/delivery/zones" element={<NotFound />} />
              <Route path="/dashboard/eats/analytics" element={<NotFound />} />
              <Route path="/dashboard/eats/analytics/sales" element={<NotFound />} />
              <Route path="/dashboard/eats/analytics/popular" element={<NotFound />} />
              <Route path="/dashboard/eats/analytics/demographics" element={<NotFound />} />
              <Route path="/dashboard/eats/inventory" element={<NotFound />} />
              <Route path="/dashboard/eats/inventory/ingredients" element={<NotFound />} />
              <Route path="/dashboard/eats/inventory/suppliers" element={<NotFound />} />
              <Route path="/dashboard/eats/inventory/stock" element={<NotFound />} />
              
              {/* Drivers Dashboard Routes */}
              <Route path="/dashboard/drivers" element={<DriversDashboard />} />
              <Route path="/dashboard/drivers/earnings" element={<NotFound />} />
              <Route path="/dashboard/drivers/earnings/current" element={<NotFound />} />
              <Route path="/dashboard/drivers/earnings/history" element={<NotFound />} />
              <Route path="/dashboard/drivers/earnings/bonuses" element={<NotFound />} />
              <Route path="/dashboard/drivers/routes" element={<NotFound />} />
              <Route path="/dashboard/drivers/routes/active" element={<NotFound />} />
              <Route path="/dashboard/drivers/routes/history" element={<NotFound />} />
              <Route path="/dashboard/drivers/routes/preferred" element={<NotFound />} />
              <Route path="/dashboard/drivers/performance" element={<NotFound />} />
              <Route path="/dashboard/drivers/performance/ratings" element={<NotFound />} />
              <Route path="/dashboard/drivers/performance/stats" element={<NotFound />} />
              <Route path="/dashboard/drivers/performance/achievements" element={<NotFound />} />
              <Route path="/dashboard/drivers/account" element={<NotFound />} />
              <Route path="/dashboard/drivers/account/profile" element={<NotFound />} />
              <Route path="/dashboard/drivers/account/vehicle" element={<NotFound />} />
              <Route path="/dashboard/drivers/account/documents" element={<NotFound />} />
              
              {/* Professionals Dashboard Routes */}
              <Route path="/dashboard/professionals" element={<ProfessionalsDashboard />} />
              <Route path="/dashboard/professionals/appointments" element={<NotFound />} />
              <Route path="/dashboard/professionals/appointments/upcoming" element={<NotFound />} />
              <Route path="/dashboard/professionals/appointments/past" element={<NotFound />} />
              <Route path="/dashboard/professionals/appointments/availability" element={<NotFound />} />
              <Route path="/dashboard/professionals/clients" element={<NotFound />} />
              <Route path="/dashboard/professionals/clients/all" element={<NotFound />} />
              <Route path="/dashboard/professionals/clients/new" element={<NotFound />} />
              <Route path="/dashboard/professionals/clients/notes" element={<NotFound />} />
              <Route path="/dashboard/professionals/video" element={<NotFound />} />
              <Route path="/dashboard/professionals/video/start" element={<NotFound />} />
              <Route path="/dashboard/professionals/video/upcoming" element={<NotFound />} />
              <Route path="/dashboard/professionals/video/history" element={<NotFound />} />
              <Route path="/dashboard/professionals/resources" element={<NotFound />} />
              <Route path="/dashboard/professionals/resources/documents" element={<NotFound />} />
              <Route path="/dashboard/professionals/resources/templates" element={<NotFound />} />
              <Route path="/dashboard/professionals/resources/educational" element={<NotFound />} />
              <Route path="/dashboard/professionals/performance" element={<NotFound />} />
              <Route path="/dashboard/professionals/performance/analytics" element={<NotFound />} />
              <Route path="/dashboard/professionals/performance/ratings" element={<NotFound />} />
              <Route path="/dashboard/professionals/performance/financial" element={<NotFound />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </NextUIProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

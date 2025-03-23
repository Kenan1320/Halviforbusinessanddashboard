
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
              <Route path="/dashboard/local" element={<LocalDashboard />} />
              <Route path="/dashboard/mall" element={<MallDashboard />} />
              <Route path="/dashboard/eats" element={<EatsDashboard />} />
              <Route path="/dashboard/drivers" element={<DriversDashboard />} />
              <Route path="/dashboard/professionals" element={<ProfessionalsDashboard />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </NextUIProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

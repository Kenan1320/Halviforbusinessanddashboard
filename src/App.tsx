
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Business from "@/pages/Business";
import Onboarding from "@/pages/Onboarding";
import ScheduleMeetingPage from "@/pages/ScheduleMeetingPage";
import Local from "@/pages/Local";
import Mall from "@/pages/Mall";
import Eats from "@/pages/Eats";
import Rides from "@/pages/Rides";
import Counselor from "@/pages/Counselor";
import Therapist from "@/pages/Therapist";
import Lawyer from "@/pages/Lawyer";
import Professional from "@/pages/Professional";
import LocalBusinessInfo from "@/pages/LocalBusinessInfo";
import RestaurantPartnerInfo from "@/pages/RestaurantPartnerInfo";
import ProfessionalApplication from "@/pages/ProfessionalApplication";
import DriverInfo from "@/pages/DriverInfo";
import DriverApplication from "@/pages/DriverApplication";
import BusinessApplication from "@/pages/BusinessApplication";
import ComingSoonPage from "@/components/ComingSoonPage";
import GrowMore from "@/pages/GrowMore";
import TrendingDallas from "@/pages/TrendingDallas";
import Dashboard from "@/pages/Dashboard";
import EatsDashboard from "@/pages/dashboards/EatsDashboard";
import LocalDashboard from "@/pages/dashboards/LocalDashboard";
import MallDashboard from "@/pages/dashboards/MallDashboard";
import DriversDashboard from "@/pages/dashboards/DriversDashboard";
import ProfessionalsDashboard from "@/pages/dashboards/ProfessionalsDashboard";
import ViewOrders from "@/pages/dashboards/eats/ViewOrders";
import ViewAllProducts from "@/pages/dashboards/local/ViewAllProducts";
import Analytics from "@/pages/dashboards/local/Analytics";
import LocalViewOrders from "@/pages/dashboards/local/ViewOrders";
import MallViewAllProducts from "@/pages/dashboards/mall/ViewAllProducts";
import ViewInventory from "@/pages/dashboards/mall/ViewInventory";
import ViewCategories from "@/pages/dashboards/mall/ViewCategories";
import ViewAllOrders from "@/pages/dashboards/mall/ViewAllOrders";
import LowStockItems from "@/pages/dashboards/mall/LowStockItems";
import SalesAnalytics from "@/pages/dashboards/mall/SalesAnalytics";
import Promotions from "@/pages/dashboards/mall/Promotions";
import AddNewProduct from "@/pages/dashboards/mall/AddNewProduct";
import ViewAppointments from "@/pages/dashboards/professionals/ViewAppointments";
import EarningsCurrent from "@/pages/dashboards/drivers/EarningsCurrent";
import PaymentHistory from "@/pages/dashboards/drivers/PaymentHistory";
import RoutesActive from "@/pages/dashboards/drivers/RoutesActive";
import PerformanceRatings from "@/pages/dashboards/drivers/PerformanceRatings";
import DriverProfile from "@/pages/dashboards/drivers/DriverProfile";
import AffiliateProgram from "@/pages/AffiliateProgram";
import AffiliateInfo from "@/pages/AffiliateInfo";
import Affiliate from "@/pages/Affiliate";
import AffiliateDashboard from "@/pages/AffiliateDashboard";
import ComingSoonPopup from "@/components/ComingSoonPopup";
import { useState } from "react";

// Create a wrapper component for pages with coming soon popup
const WithComingSoonPopup = ({ serviceName, children }: { serviceName: string, children: React.ReactNode }) => {
  const [showPopup, setShowPopup] = useState(true);
  
  if (showPopup) {
    return <ComingSoonPopup serviceName={serviceName} onClose={() => setShowPopup(false)} />;
  }
  
  return <>{children}</>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/business" element={<Business />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/schedule-meeting" element={<ScheduleMeetingPage />} />
        <Route path="/local" element={<Local />} />
        <Route path="/mall" element={<Mall />} />
        <Route path="/eats" element={
          <WithComingSoonPopup serviceName="Halvi Eats">
            <Eats />
          </WithComingSoonPopup>
        } />
        <Route path="/rides" element={
          <WithComingSoonPopup serviceName="Halvi Rides">
            <Rides />
          </WithComingSoonPopup>
        } />
        <Route path="/counselor" element={
          <WithComingSoonPopup serviceName="Halvi Counselor">
            <Counselor />
          </WithComingSoonPopup>
        } />
        <Route path="/therapist" element={
          <WithComingSoonPopup serviceName="Halvi Therapist">
            <Therapist />
          </WithComingSoonPopup>
        } />
        <Route path="/lawyer" element={
          <WithComingSoonPopup serviceName="Halvi Lawyer">
            <Lawyer />
          </WithComingSoonPopup>
        } />
        <Route path="/professional" element={
          <WithComingSoonPopup serviceName="Halvi Professional">
            <Professional />
          </WithComingSoonPopup>
        } />
        <Route path="/local-business-info" element={<LocalBusinessInfo />} />
        <Route path="/restaurant-partner-info" element={<RestaurantPartnerInfo />} />
        <Route path="/professional-application" element={<ProfessionalApplication />} />
        <Route path="/driver-info" element={<DriverInfo />} />
        <Route path="/driver-application" element={<DriverApplication />} />
        <Route path="/business-application" element={<BusinessApplication />} />
        <Route path="/grow-more" element={<GrowMore />} />
        <Route path="/trending-dallas" element={<TrendingDallas />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/eats" element={<EatsDashboard />} />
        <Route path="/dashboard/eats/view-orders" element={<ViewOrders />} />
        <Route path="/dashboard/local" element={<LocalDashboard />} />
        <Route path="/dashboard/local/view-products" element={<ViewAllProducts />} />
        <Route path="/dashboard/local/analytics" element={<Analytics />} />
        <Route path="/dashboard/local/view-orders" element={<LocalViewOrders />} />
        <Route path="/dashboard/mall" element={<MallDashboard />} />
        <Route path="/dashboard/mall/view-products" element={<MallViewAllProducts />} />
        <Route path="/dashboard/mall/view-inventory" element={<ViewInventory />} />
        <Route path="/dashboard/mall/view-categories" element={<ViewCategories />} />
        <Route path="/dashboard/mall/view-orders" element={<ViewAllOrders />} />
        <Route path="/dashboard/mall/low-stock" element={<LowStockItems />} />
        <Route path="/dashboard/mall/analytics" element={<SalesAnalytics />} />
        <Route path="/dashboard/mall/promotions" element={<Promotions />} />
        <Route path="/dashboard/mall/add-product" element={<AddNewProduct />} />
        <Route path="/dashboard/professionals" element={<ProfessionalsDashboard />} />
        <Route path="/dashboard/professionals/appointments" element={<ViewAppointments />} />
        <Route path="/dashboard/drivers" element={<DriversDashboard />} />
        <Route path="/dashboard/drivers/earnings" element={<EarningsCurrent />} />
        <Route path="/dashboard/drivers/payment-history" element={<PaymentHistory />} />
        <Route path="/dashboard/drivers/routes" element={<RoutesActive />} />
        <Route path="/dashboard/drivers/ratings" element={<PerformanceRatings />} />
        <Route path="/dashboard/drivers/profile" element={<DriverProfile />} />
        <Route path="/affiliate" element={<AffiliateInfo />} />
        <Route path="/affiliates" element={<Affiliate />} />
        <Route path="/affiliate-dashboard" element={<AffiliateDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

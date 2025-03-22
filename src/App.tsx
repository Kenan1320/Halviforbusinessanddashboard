
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
            <Route path="/business/driver" element={<DriverApplication />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/grow-more" element={<GrowMore />} />
            <Route path="/therapist" element={<Therapist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </NextUIProvider>
  </QueryClientProvider>
);

export default App;

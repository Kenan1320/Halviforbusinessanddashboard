
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
import BusinessApplication from "./pages/BusinessApplication";
import DriverApplication from "./pages/DriverApplication";
import NotFound from "./pages/NotFound";

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
            <Route path="/business/apply" element={<BusinessApplication />} />
            <Route path="/business/driver" element={<DriverApplication />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </NextUIProvider>
  </QueryClientProvider>
);

export default App;

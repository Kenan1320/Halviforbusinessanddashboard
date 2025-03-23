
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Store, 
  ShoppingBag, 
  Utensils, 
  Car, 
  Briefcase, 
  Bell, 
  Search,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
  SidebarRail,
  SidebarInset
} from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ThemeToggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  type: 'local' | 'mall' | 'eats' | 'drivers' | 'professionals';
}

const iconMapping = {
  local: Store,
  mall: ShoppingBag,
  eats: Utensils,
  drivers: Car,
  professionals: Briefcase
};

const getTypeMenuItems = (type: string) => {
  switch(type) {
    case 'local':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/local' },
        { label: 'Orders', icon: ChevronRight, href: '/dashboard/local/orders' },
        { label: 'Inventory', icon: ChevronRight, href: '/dashboard/local/inventory' },
        { label: 'Customers', icon: ChevronRight, href: '/dashboard/local/customers' },
        { label: 'Analytics', icon: ChevronRight, href: '/dashboard/local/analytics' }
      ];
    case 'mall':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/mall' },
        { label: 'Products', icon: ChevronRight, href: '/dashboard/mall/products' },
        { label: 'Orders', icon: ChevronRight, href: '/dashboard/mall/orders' },
        { label: 'Storefront', icon: ChevronRight, href: '/dashboard/mall/storefront' },
        { label: 'Marketing', icon: ChevronRight, href: '/dashboard/mall/marketing' },
        { label: 'Analytics', icon: ChevronRight, href: '/dashboard/mall/analytics' }
      ];
    case 'eats':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/eats' },
        { label: 'Orders', icon: ChevronRight, href: '/dashboard/eats/orders' },
        { label: 'Menu', icon: ChevronRight, href: '/dashboard/eats/menu' },
        { label: 'Delivery', icon: ChevronRight, href: '/dashboard/eats/delivery' },
        { label: 'Analytics', icon: ChevronRight, href: '/dashboard/eats/analytics' },
        { label: 'Inventory', icon: ChevronRight, href: '/dashboard/eats/inventory' }
      ];
    case 'drivers':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/drivers' },
        { label: 'Earnings', icon: ChevronRight, href: '/dashboard/drivers/earnings' },
        { label: 'Routes', icon: ChevronRight, href: '/dashboard/drivers/routes' },
        { label: 'Performance', icon: ChevronRight, href: '/dashboard/drivers/performance' },
        { label: 'Account', icon: ChevronRight, href: '/dashboard/drivers/account' }
      ];
    case 'professionals':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/professionals' },
        { label: 'Appointments', icon: ChevronRight, href: '/dashboard/professionals/appointments' },
        { label: 'Clients', icon: ChevronRight, href: '/dashboard/professionals/clients' },
        { label: 'Video Sessions', icon: ChevronRight, href: '/dashboard/professionals/video' },
        { label: 'Resources', icon: ChevronRight, href: '/dashboard/professionals/resources' },
        { label: 'Performance', icon: ChevronRight, href: '/dashboard/professionals/performance' }
      ];
    default:
      return [];
  }
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title, type }) => {
  const TypeIcon = iconMapping[type];
  const location = useLocation();
  const typeMenuItems = getTypeMenuItems(type);
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-sidebar dark:bg-gray-950">
        <Sidebar variant="inset">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <TypeIcon className="h-6 w-6 text-halvi-600 dark:text-halvi-400" />
              <h1 className="text-xl font-bold text-foreground">Halvi {title}</h1>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarMenu>
                {typeMenuItems.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.href}
                      tooltip={item.label}
                    >
                      <Link to={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            
            <SidebarSeparator />
            
            <SidebarGroup>
              <SidebarGroupLabel>All Dashboards</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Back to Dashboard Selection">
                    <Link to="/dashboard">
                      <Home />
                      <span>Dashboard Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Settings">
                    <Link to={`/dashboard/${type}/settings`}>
                      <Settings />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Help">
                    <Link to={`/dashboard/${type}/help`}>
                      <HelpCircle />
                      <span>Help & Support</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Sign Out">
                    <Link to="/">
                      <LogOut />
                      <span>Sign Out</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarFooter>
          
          <SidebarRail />
        </Sidebar>
        
        <SidebarInset className="overflow-hidden">
          <header className="border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center">
                <SidebarTrigger />
                <div className="ml-4 text-lg font-semibold">{title} Dashboard</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">3</span>
                  </Button>
                </div>
                <div className="hidden sm:block">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search..."
                      className="w-[200px] rounded-md border border-input bg-background py-2 pl-8 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <ThemeToggle />
                <button className="flex items-center gap-2 rounded-full">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-halvi-200 dark:bg-halvi-900 text-halvi-700 dark:text-halvi-300">
                    HB
                  </span>
                </button>
              </div>
            </div>
          </header>
          <main className="p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;


import React, { useState, useEffect } from "react";
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
  ChevronRight,
  ChevronDown,
  Package,
  ShoppingCart,
  Users,
  BarChart2,
  Calendar,
  FileText,
  Video,
  BookOpen,
  DollarSign,
  Map,
  Activity,
  User
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

interface MenuItem {
  label: string;
  icon: React.ElementType;
  href: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  href: string;
}

const getTypeMenuItems = (type: string): MenuItem[] => {
  switch(type) {
    case 'local':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/local' },
        { 
          label: 'Orders', 
          icon: ShoppingCart, 
          href: '/dashboard/local/orders',
          subItems: [
            { label: 'New Orders', href: '/dashboard/local/orders/new' },
            { label: 'Processing', href: '/dashboard/local/orders/processing' },
            { label: 'Completed', href: '/dashboard/local/orders/completed' },
            { label: 'Cancelled', href: '/dashboard/local/orders/cancelled' }
          ]
        },
        { 
          label: 'Inventory', 
          icon: Package, 
          href: '/dashboard/local/inventory',
          subItems: [
            { label: 'All Products', href: '/dashboard/local/inventory/all' },
            { label: 'Add New Product', href: '/dashboard/local/inventory/new' },
            { label: 'Categories', href: '/dashboard/local/inventory/categories' },
            { label: 'Low Stock', href: '/dashboard/local/inventory/low-stock' }
          ]
        },
        { 
          label: 'Customers', 
          icon: Users, 
          href: '/dashboard/local/customers',
          subItems: [
            { label: 'All Customers', href: '/dashboard/local/customers/all' },
            { label: 'Frequent Buyers', href: '/dashboard/local/customers/frequent' },
            { label: 'Customer Support', href: '/dashboard/local/customers/support' }
          ]
        },
        { 
          label: 'Analytics', 
          icon: BarChart2, 
          href: '/dashboard/local/analytics',
          subItems: [
            { label: 'Sales Reports', href: '/dashboard/local/analytics/sales' },
            { label: 'Traffic', href: '/dashboard/local/analytics/traffic' },
            { label: 'Customer Behavior', href: '/dashboard/local/analytics/behavior' }
          ]
        }
      ];
    case 'mall':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/mall' },
        { 
          label: 'Products', 
          icon: Package, 
          href: '/dashboard/mall/products',
          subItems: [
            { label: 'All Products', href: '/dashboard/mall/products/all' },
            { label: 'Add New Product', href: '/dashboard/mall/products/new' },
            { label: 'Categories', href: '/dashboard/mall/products/categories' },
            { label: 'Inventory', href: '/dashboard/mall/products/inventory' }
          ]
        },
        { 
          label: 'Orders', 
          icon: ShoppingCart, 
          href: '/dashboard/mall/orders',
          subItems: [
            { label: 'All Orders', href: '/dashboard/mall/orders/all' },
            { label: 'Processing', href: '/dashboard/mall/orders/processing' },
            { label: 'Shipping', href: '/dashboard/mall/orders/shipping' },
            { label: 'Delivered', href: '/dashboard/mall/orders/delivered' },
            { label: 'Returns', href: '/dashboard/mall/orders/returns' }
          ]
        },
        { 
          label: 'Storefront', 
          icon: Store, 
          href: '/dashboard/mall/storefront',
          subItems: [
            { label: 'Theme & Layout', href: '/dashboard/mall/storefront/theme' },
            { label: 'Banners', href: '/dashboard/mall/storefront/banners' },
            { label: 'Featured Products', href: '/dashboard/mall/storefront/featured' }
          ]
        },
        { 
          label: 'Marketing', 
          icon: ChevronRight, 
          href: '/dashboard/mall/marketing',
          subItems: [
            { label: 'Promotions', href: '/dashboard/mall/marketing/promotions' },
            { label: 'Discount Codes', href: '/dashboard/mall/marketing/discounts' },
            { label: 'Email Campaigns', href: '/dashboard/mall/marketing/email' },
            { label: 'Social Media', href: '/dashboard/mall/marketing/social' }
          ]
        },
        { 
          label: 'Analytics', 
          icon: BarChart2, 
          href: '/dashboard/mall/analytics',
          subItems: [
            { label: 'Sales Reports', href: '/dashboard/mall/analytics/sales' },
            { label: 'Traffic Sources', href: '/dashboard/mall/analytics/traffic' },
            { label: 'Customer Insights', href: '/dashboard/mall/analytics/customers' }
          ]
        }
      ];
    case 'eats':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/eats' },
        { 
          label: 'Orders', 
          icon: ShoppingCart, 
          href: '/dashboard/eats/orders',
          subItems: [
            { label: 'Incoming Orders', href: '/dashboard/eats/orders/incoming' },
            { label: 'Preparing', href: '/dashboard/eats/orders/preparing' },
            { label: 'Ready for Pickup', href: '/dashboard/eats/orders/ready' },
            { label: 'Order History', href: '/dashboard/eats/orders/history' }
          ]
        },
        { 
          label: 'Menu', 
          icon: FileText, 
          href: '/dashboard/eats/menu',
          subItems: [
            { label: 'All Items', href: '/dashboard/eats/menu/all' },
            { label: 'Add New Item', href: '/dashboard/eats/menu/new' },
            { label: 'Categories', href: '/dashboard/eats/menu/categories' },
            { label: 'Special Offers', href: '/dashboard/eats/menu/specials' }
          ]
        },
        { 
          label: 'Delivery', 
          icon: Car, 
          href: '/dashboard/eats/delivery',
          subItems: [
            { label: 'Active Deliveries', href: '/dashboard/eats/delivery/active' },
            { label: 'Drivers', href: '/dashboard/eats/delivery/drivers' },
            { label: 'Delivery Zones', href: '/dashboard/eats/delivery/zones' }
          ]
        },
        { 
          label: 'Analytics', 
          icon: BarChart2, 
          href: '/dashboard/eats/analytics',
          subItems: [
            { label: 'Sales Performance', href: '/dashboard/eats/analytics/sales' },
            { label: 'Popular Items', href: '/dashboard/eats/analytics/popular' },
            { label: 'Customer Demographics', href: '/dashboard/eats/analytics/demographics' }
          ]
        },
        { 
          label: 'Inventory', 
          icon: Package, 
          href: '/dashboard/eats/inventory',
          subItems: [
            { label: 'Ingredients', href: '/dashboard/eats/inventory/ingredients' },
            { label: 'Suppliers', href: '/dashboard/eats/inventory/suppliers' },
            { label: 'Stock Levels', href: '/dashboard/eats/inventory/stock' }
          ]
        }
      ];
    case 'drivers':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/drivers' },
        { 
          label: 'Earnings', 
          icon: DollarSign, 
          href: '/dashboard/drivers/earnings',
          subItems: [
            { label: 'Current Earnings', href: '/dashboard/drivers/earnings/current' },
            { label: 'Payment History', href: '/dashboard/drivers/earnings/history' },
            { label: 'Bonuses', href: '/dashboard/drivers/earnings/bonuses' }
          ]
        },
        { 
          label: 'Routes', 
          icon: Map, 
          href: '/dashboard/drivers/routes',
          subItems: [
            { label: 'Active Routes', href: '/dashboard/drivers/routes/active' },
            { label: 'Route History', href: '/dashboard/drivers/routes/history' },
            { label: 'Preferred Areas', href: '/dashboard/drivers/routes/preferred' }
          ]
        },
        { 
          label: 'Performance', 
          icon: Activity, 
          href: '/dashboard/drivers/performance',
          subItems: [
            { label: 'Ratings', href: '/dashboard/drivers/performance/ratings' },
            { label: 'Statistics', href: '/dashboard/drivers/performance/stats' },
            { label: 'Achievements', href: '/dashboard/drivers/performance/achievements' }
          ]
        },
        { 
          label: 'Account', 
          icon: User, 
          href: '/dashboard/drivers/account',
          subItems: [
            { label: 'Profile', href: '/dashboard/drivers/account/profile' },
            { label: 'Vehicle Details', href: '/dashboard/drivers/account/vehicle' },
            { label: 'Documents', href: '/dashboard/drivers/account/documents' }
          ]
        }
      ];
    case 'professionals':
      return [
        { label: 'Overview', icon: Home, href: '/dashboard/professionals' },
        { 
          label: 'Appointments', 
          icon: Calendar, 
          href: '/dashboard/professionals/appointments',
          subItems: [
            { label: 'Upcoming', href: '/dashboard/professionals/appointments/upcoming' },
            { label: 'Past', href: '/dashboard/professionals/appointments/past' },
            { label: 'Manage Availability', href: '/dashboard/professionals/appointments/availability' }
          ]
        },
        { 
          label: 'Clients', 
          icon: Users, 
          href: '/dashboard/professionals/clients',
          subItems: [
            { label: 'All Clients', href: '/dashboard/professionals/clients/all' },
            { label: 'Add New Client', href: '/dashboard/professionals/clients/new' },
            { label: 'Client Notes', href: '/dashboard/professionals/clients/notes' }
          ]
        },
        { 
          label: 'Video Sessions', 
          icon: Video, 
          href: '/dashboard/professionals/video',
          subItems: [
            { label: 'Start Session', href: '/dashboard/professionals/video/start' },
            { label: 'Upcoming Sessions', href: '/dashboard/professionals/video/upcoming' },
            { label: 'Session History', href: '/dashboard/professionals/video/history' }
          ]
        },
        { 
          label: 'Resources', 
          icon: BookOpen, 
          href: '/dashboard/professionals/resources',
          subItems: [
            { label: 'Documents', href: '/dashboard/professionals/resources/documents' },
            { label: 'Templates', href: '/dashboard/professionals/resources/templates' },
            { label: 'Educational', href: '/dashboard/professionals/resources/educational' }
          ]
        },
        { 
          label: 'Performance', 
          icon: BarChart2, 
          href: '/dashboard/professionals/performance',
          subItems: [
            { label: 'Analytics', href: '/dashboard/professionals/performance/analytics' },
            { label: 'Ratings & Reviews', href: '/dashboard/professionals/performance/ratings' },
            { label: 'Financial Reports', href: '/dashboard/professionals/performance/financial' }
          ]
        }
      ];
    default:
      return [];
  }
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title, type }) => {
  const TypeIcon = iconMapping[type];
  const location = useLocation();
  const typeMenuItems = getTypeMenuItems(type);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  // Auto-expand the section based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Automatically expand menu items based on current URL
    const newExpandedState: Record<string, boolean> = {};
    
    typeMenuItems.forEach(item => {
      if (item.subItems) {
        // If current path is in any of the subitems or exactly matches the main item
        const shouldExpand = item.href === currentPath || 
                            item.subItems.some(subItem => subItem.href === currentPath) ||
                            currentPath.startsWith(item.href + '/');
        
        if (shouldExpand) {
          newExpandedState[item.label] = true;
        }
      }
    });
    
    setExpandedItems(prev => ({
      ...prev,
      ...newExpandedState
    }));
  }, [location.pathname, typeMenuItems]);
  
  const toggleExpand = (item: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  
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
                  <React.Fragment key={index}>
                    <SidebarMenuItem>
                      {item.subItems ? (
                        <div className="w-full">
                          <button 
                            onClick={() => toggleExpand(item.label)}
                            className={`flex w-full items-center justify-between rounded-md p-2 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${location.pathname === item.href ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground' : ''}`}
                          >
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </div>
                            {expandedItems[item.label] ? 
                              <ChevronDown className="h-4 w-4" /> : 
                              <ChevronRight className="h-4 w-4" />
                            }
                          </button>
                          
                          {expandedItems[item.label] && item.subItems && (
                            <div className="ml-6 mt-1 space-y-1 border-l border-sidebar-border pl-2">
                              {item.subItems.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className={`block rounded-md py-1.5 px-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${location.pathname === subItem.href ? 'bg-sidebar-accent/50 font-medium text-sidebar-accent-foreground' : 'text-sidebar-foreground/80'}`}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
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
                      )}
                    </SidebarMenuItem>
                  </React.Fragment>
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

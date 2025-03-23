
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

interface ComingSoonPageProps {
  title: string;
  type: 'local' | 'mall' | 'eats' | 'drivers' | 'professionals';
  pageName: string;
  description?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ 
  title, 
  type, 
  pageName, 
  description = "This section is under development and will be available soon." 
}) => {
  return (
    <DashboardLayout title={title} type={type}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">{pageName}</h1>
          <p className="text-muted-foreground">Manage and view {pageName.toLowerCase()}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{pageName}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ClipboardList className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-center">Coming Soon</p>
            <p className="text-sm text-muted-foreground text-center max-w-md mt-2">
              We're working hard to build this feature for you. Check back soon for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ComingSoonPage;

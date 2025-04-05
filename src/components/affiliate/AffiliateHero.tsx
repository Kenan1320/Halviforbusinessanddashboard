
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, BookOpen } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";

const AffiliateHero = () => {
  return (
    <AuroraBackground fullHeight={false} className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-halvi-100 dark:bg-halvi-900 text-halvi-600 dark:text-halvi-300 mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Halvi Affiliate Program</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Earn commissions by referring businesses to Halvi. Help grow the halal economy while creating a passive income stream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#apply">Apply Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/schedule-meeting">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Meeting
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
              <Link to="/affiliate-get-familiar">
                <BookOpen className="mr-2 h-4 w-4" />
                Get Familiar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default AffiliateHero;

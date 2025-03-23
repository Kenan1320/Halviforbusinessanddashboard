
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/local", label: "Halvi Local" },
  { href: "/mall", label: "Halvi Mall" },
  { href: "/eats", label: "Halvi Eats" },
  { href: "/rides", label: "Halvi Rides" },
  { href: "/business", label: "For Business" },
  { href: "/dashboard", label: "Business Dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-halvi-600 dark:text-halvi-400">
              Halvi <span className="inline-block font-medium text-lg">for Businesses</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-halvi-600 dark:hover:text-halvi-400 flex items-center",
                  location.pathname === link.href
                    ? "text-halvi-600 dark:text-halvi-400"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {link.icon && link.icon}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild variant="ghost">
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors py-2 flex items-center",
                  location.pathname === link.href
                    ? "text-halvi-600 dark:text-halvi-400"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {link.icon && link.icon}
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col pt-4 space-y-2">
              <Button asChild variant="ghost" className="justify-center">
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button asChild className="justify-center">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;

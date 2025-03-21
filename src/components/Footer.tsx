
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-halvi-600 dark:text-halvi-400">
                Halvi
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-4">
              The Halal Village – Your one-stop platform for all Halal products and services.
              We connect you with verified halal businesses, products, food, and transportation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Halvi Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/local" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Halvi Local
                </Link>
              </li>
              <li>
                <Link to="/mall" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Halvi Mall
                </Link>
              </li>
              <li>
                <Link to="/eats" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Halvi Eats
                </Link>
              </li>
              <li>
                <Link to="/rides" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Halvi Rides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              For Business
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/business" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link to="/affiliate" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link to="/driver" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Become a Driver
                </Link>
              </li>
              <li>
                <Link to="/commission" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Commission Structure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Help & Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-halvi-600 dark:hover:text-halvi-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Halvi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

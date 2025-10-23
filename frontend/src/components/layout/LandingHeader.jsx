import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                {/* Heart Logo */}
                <div className="w-8 h-8 mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="url(#gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="25%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="75%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-800">Mixer</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`transition-colors font-medium ${
                location.pathname === "/events"
                  ? "text-teal-600 underline"
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              Upcoming Events
            </Link>
            <Link
              to="/blind-mixers"
              className={`transition-colors font-medium ${
                location.pathname === "/blind-mixers"
                  ? "text-teal-600 underline"
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              Blind Mixers
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/events"
                className={`transition-colors font-medium ${
                  location.pathname === "/events"
                    ? "text-teal-600 underline"
                    : "text-gray-700 hover:text-teal-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Upcoming Events
              </Link>
              <Link
                to="/blind-mixers"
                className={`transition-colors font-medium ${
                  location.pathname === "/blind-mixers"
                    ? "text-teal-600 underline"
                    : "text-gray-700 hover:text-teal-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blind Mixers
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;

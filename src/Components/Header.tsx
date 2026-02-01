import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ShoppingCart, User, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>sales@rudrahomefurniture.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Wholesale Prices | Bulk Orders Welcome</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Premium Logo Design */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    {/* Main logo symbol */}
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-2xl tracking-tight">
                        R
                      </span>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-60"></div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20 -z-10"></div>
              </div>

              {/* Premium Typography */}
              <div>
                <div className="flex flex-col">
                  <h1 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent leading-none tracking-tight">
                    RUDRA
                  </h1>
                  <div className="flex items-center space-x-2 -mt-1">
                    <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
                      HOME FURNITURE
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full font-bold tracking-wider hidden sm:block shadow-lg">
                      Wholesale
                    </span>
                    <span className="text-xs text-gray-500 font-medium hidden md:block">
                      Premium Quality • Best Prices
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Contact
            </Link>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-800 transition-colors relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>

              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-800 transition-colors relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  5
                </span>
              </Link>

              <Link
                to="/profile"
                className="text-gray-700 hover:text-blue-800 transition-colors"
              >
                <User className="h-5 w-5" />
              </Link>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <span>Get Quote</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-blue-800 transition-colors relative"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                5
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-800 font-medium">
                  <Heart className="h-4 w-4" />
                  <span>Wishlist (3)</span>
                </button>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-800 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </div>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2 w-fit">
                <span>Get Quote</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

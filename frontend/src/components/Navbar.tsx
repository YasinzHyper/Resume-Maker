import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FileText, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Templates', path: '/templates' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-opacity-60 bg-blue-900 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <FileText className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">
              CWIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-200 bg-blue-800'
                    : 'text-white hover:text-blue-200 hover:bg-blue-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors text-white"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-gray-500">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-800 py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-200 bg-blue-800'
                      : 'text-white hover:text-blue-200 hover:bg-blue-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-blue-800 pt-2 mt-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-white">
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-blue-200 text-sm">{user?.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200 hover:bg-blue-800 transition-colors flex items-center space-x-2"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200 hover:bg-blue-800 transition-colors flex items-center space-x-2"
                  >
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
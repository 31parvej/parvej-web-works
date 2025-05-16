
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-navy">
                Shahin Parvej
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium relative transition-colors",
                    location.pathname === item.href
                      ? "text-deepblue font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-deepblue after:bottom-0 after:left-0"
                      : "text-gray-600 hover:text-navy"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-deepblue"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 px-4 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === item.href
                    ? "text-deepblue bg-skyblue/10"
                    : "text-gray-600 hover:bg-gray-100 hover:text-navy"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Shahin Parvej</h3>
              <p className="text-sm mt-1">Web Developer | PHP, Laravel & WordPress Specialist</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:sshahinparvej@gmail.com" className="hover:text-skyblue transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/shahin-parvej" target="_blank" rel="noreferrer" className="hover:text-skyblue transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/31parvej" target="_blank" rel="noreferrer" className="hover:text-skyblue transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} Shahin Parvej. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

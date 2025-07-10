import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Bell, Search, Globe, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#', active: true },
    { 
      name: 'About Us', 
      href: '#',
      dropdown: [
        { name: 'Our Story', desc: 'Learn about our journey' },
        { name: 'Team', desc: 'Meet our experts' },
        { name: 'Mission', desc: 'Our core values' },
        { name: 'Vision', desc: 'Future goals' }
      ]
    },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'Zoho Implementation', desc: 'Complete setup & configuration' },
        { name: 'Training', desc: 'Expert-led workshops' },
        { name: 'Support', desc: '24/7 technical assistance' },
        { name: 'Consulting', desc: 'Strategic guidance' }
      ]
    },
    { name: 'Our Zoho Offerings', href: '#' },
    { name: 'Internship', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  return (
    <>
      {/* Enhanced Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-center py-3 px-4 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2 animate-bounce">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <span className="font-semibold">NEW</span>
          </div>
          <span className="font-medium">Internship session available from 5:00 PM to 6:30 PM.</span>
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-blue-200">
              <Phone className="h-3 w-3" />
              <span className="text-xs">+1-234-567-8900</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-200">
              <Mail className="h-3 w-3" />
              <span className="text-xs">info@abhyaz.com</span>
            </div>
          </div>
          <button className="ml-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100 transform' 
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur-lg transition-all duration-700"></div>
                <img 
                  src="/802b10349d86f15328d004dc83616c022e4caeb4.png" 
                  alt="Abhyaz Logo" 
                  className="h-14 w-auto transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl cursor-pointer"
                />
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden ${
                      item.active
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-100 before:to-purple-100 before:opacity-0 hover:before:opacity-50 before:transition-all before:duration-300 before:scale-x-0 hover:before:scale-x-100'
                    }`}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`ml-2 h-4 w-4 transition-all duration-500 relative z-10 ${
                        activeDropdown === item.name ? 'rotate-180 text-blue-600 scale-110' : 'group-hover:rotate-12'
                      }`} />
                    )}
                    {item.active && (
                      <>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white/30 rounded-full blur-sm"></div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] duration-700"></div>
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-4 z-50 transform opacity-0 scale-95 animate-in fade-in slide-in-from-top-2 duration-300"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      style={{ 
                        opacity: 1, 
                        transform: 'scale(1)',
                        animation: 'dropdownSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                      }}
                    >
                      <div className="absolute -top-2 left-8 w-4 h-4 bg-white/95 backdrop-blur-xl border-l border-t border-gray-100/50 transform rotate-45"></div>
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={typeof subItem === 'string' ? subItem : subItem.name}
                          href="#"
                          className="group flex items-start px-6 py-4 text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 relative overflow-hidden"
                          style={{ animationDelay: `${subIndex * 50}ms` }}
                        >
                          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                              {typeof subItem === 'string' ? subItem : subItem.name}
                            </div>
                            {typeof subItem === 'object' && subItem.desc && (
                              <div className="text-sm text-gray-500 group-hover:text-blue-500 mt-1 transition-colors duration-300">
                                {subItem.desc}
                              </div>
                            )}
                          </div>
                          <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transform rotate-[-90deg] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Enhanced Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Enhanced Search */}
              <div className="relative">
                <button 
                  className="p-3 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative group"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="h-5 w-5 group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
                </button>
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 p-6 z-50 transform opacity-0 scale-95 animate-in fade-in slide-in-from-top-2 duration-300"
                       style={{ opacity: 1, transform: 'scale(1)' }}>
                    <div className="absolute -top-2 right-8 w-4 h-4 bg-white/95 backdrop-blur-xl border-l border-t border-gray-100/50 transform rotate-45"></div>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 animate-pulse" />
                      <input
                        type="text"
                        placeholder="Search services, blogs, resources..."
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-inner focus:shadow-lg"
                        autoFocus
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
                        ⌘K
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Notifications */}
              <button className="p-3 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-110 relative group hover:rotate-12">
                <Bell className="h-5 w-5 group-hover:animate-swing transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xs text-white font-bold">3</span>
                </span>
                <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Language Selector */}
              <button className="p-3 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative group">
                <Globe className="h-5 w-5 group-hover:animate-spin transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Enhanced Login Button */}
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] duration-700"></div>
                <User className="h-4 w-4 group-hover:animate-pulse" />
                <span className="text-sm font-semibold relative z-10">Login</span>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden p-3 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-110 relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-500 ${isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-500 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 border-t border-gray-100 backdrop-blur-xl' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-6 bg-gradient-to-b from-white/95 to-gray-50/95 backdrop-blur-xl">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <div key={item.name} className="transform transition-all duration-500"
                     style={{ 
                       animationDelay: `${index * 100}ms`,
                       transform: isMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.95)'
                     }}>
                  <a
                    href={item.href}
                    className={`block px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group ${
                      item.active
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] duration-700"></div>
                    <div className="flex items-center justify-between">
                      <span className="relative z-10">{item.name}</span>
                      {item.dropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />}
                    </div>
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={typeof subItem === 'string' ? subItem : subItem.name}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105 group relative overflow-hidden"
                          style={{ animationDelay: `${(index * 100) + (subIndex * 50)}ms` }}
                        >
                          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                          <div className="font-medium">
                            {typeof subItem === 'string' ? subItem : subItem.name}
                          </div>
                          {typeof subItem === 'object' && subItem.desc && (
                            <div className="text-xs text-gray-500 mt-1">{subItem.desc}</div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
              <div className="flex items-center space-x-4">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 group">
                  <Search className="h-4 w-4" />
                  <span className="font-medium">Search</span>
                  <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 group relative">
                  <Globe className="h-4 w-4 group-hover:animate-spin" />
                  <span className="font-medium">Language</span>
                  <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] duration-700"></div>
                <User className="h-4 w-4" />
                <span className="font-semibold relative z-10">Login to Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-15px) scale(0.9) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }
        
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg) scale(1.1); }
          75% { transform: rotate(-20deg) scale(1.1); }
        }
        
        .animate-swing {
          animation: swing 0.8s ease-in-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
import React, { useState } from "react";
import { 
  Home, 
  LogIn, 
  LogOut, 
  User, 
  ClipboardList, 
  Menu, 
  X, 
  ChevronDown 
} from "lucide-react";
import { useAuth } from "../../Context/AuthContext.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  siteName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  siteName = "HybridLocal",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-off-white border-b border-camel/20 shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo Section */}
          <div className="shrink-0 flex items-center">
            <span className="text-xl font-bold text-burgundy tracking-tight hover:text-camel transition-colors duration-200 cursor-pointer">
              {siteName}
            </span>
          </div>

          {/* Desktop Navigation Link Assets */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-burgundy transition-colors duration-200">
              <Home size={18} className="text-camel" />
              Home
            </a>

            {!isLoggedIn ? (
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-burgundy transition-colors duration-200 cursor-pointer"
              >
                <LogIn size={18} className="text-camel" />
                Login
              </button>
            ) : (
              <>
                <a href="#onroll-board" className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-burgundy transition-colors duration-200">
                  <ClipboardList size={18} className="text-camel" />
                  Onroll Board
                </a>

                {/* Profile Interactive Dropdown Anchor */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-burgundy focus:outline-none transition-colors border-l pl-4 border-camel/30 cursor-pointer"
                  >
                    {user?.avatarUrl ? (
                      <img 
                        src={user.avatarUrl} 
                        alt="Profile" 
                        className="h-7 w-7 rounded-full border border-camel object-cover"
                      />
                    ) : (
                      <div className="h-7 w-7 rounded-full bg-burgundy flex items-center justify-center text-off-white text-xs font-bold shadow-sm">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}
                    <span className="max-w-25 truncate">{user?.name || "Profile"}</span>
                    {/* Animated Chevron Arrow Rotation */}
                    <motion.div
                      animate={{ rotate: isProfileDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} className="text-camel" />
                    </motion.div>
                  </button>

                  {/* Dropdown Card - Animated with AnimatePresence */}
                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border border-camel/10"
                      >
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-xs text-gray-400">Signed in as</p>
                          <p className="text-sm font-medium text-burgundy truncate">{user?.email}</p>
                        </div>
                        
                        <a href="#profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-off-white hover:text-burgundy transition-colors">
                          <User size={16} className="text-camel" />
                          My Profile
                        </a>
                        
                        <button
                          onClick={() => {
                            setIsProfileDropdownOpen(false);
                            logout();
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left text-red-700 hover:bg-red-50 cursor-pointer transition-colors"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Action Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-burgundy hover:bg-camel/10 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay - Smooth Slide & Fade Down */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-off-white border-t border-camel/20 px-2 pt-2 pb-4 space-y-1 shadow-inner overflow-hidden"
          >
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-burgundy hover:text-off-white transition-all group"
            >
              <Home size={20} className="text-camel group-hover:text-off-white" />
              Home
            </a>

            {!isLoggedIn ? (
              <button
                onClick={() => navigate('/login')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-burgundy hover:text-off-white transition-all group cursor-pointer"
              >
                <LogIn size={20} className="text-camel group-hover:text-off-white" />
                Login
              </button>
            ) : (
              <>
                <a
                  href="#onroll-board"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-burgundy hover:text-off-white transition-all group"
                >
                  <ClipboardList size={20} className="text-camel group-hover:text-off-white" />
                  Onroll Board
                </a>

                <div className="border-t border-camel/20 my-2 pt-2">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="h-8 w-8 rounded-full bg-burgundy flex items-center justify-center text-off-white font-bold shadow-sm">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-burgundy">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  
                  <a
                    href="#profile"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-camel/10 hover:text-burgundy"
                  >
                    <User size={18} className="text-camel" />
                    View Profile
                  </a>
                  
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
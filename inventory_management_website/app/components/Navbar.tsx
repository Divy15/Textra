"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoVariants: Variants = {
    // Add the type here
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24 items-center">
          {/* Animated Logo */}
          {/* Animated Rainbow Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <Link
              href="/"
              className="text-4xl font-black tracking-tighter block"
            >
              <motion.span
                animate={{
                  // This shifts the gradient from left to right continuously
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
                className="bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                TEXTRA
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Links with Hover Scale */}
          <div className="hidden md:flex space-x-12 items-center">
            {["Home", "About Us", "Contact Us"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="relative text-lg font-bold text-gray-900 group"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.75 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </motion.div>
            ))}

            {/* Unified Login Button - It now waits for the 3 links above (3 * 0.1 = 0.3) */}
            <LoginButton delay={0.3} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black font-black text-xl"
            >
              {isOpen ? "✕" : "MENU"}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center pt-24 space-y-10"
          >
            {["Home", "About Us", "Contact Us"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/"
                  className="text-4xl font-black text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <LoginButton />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

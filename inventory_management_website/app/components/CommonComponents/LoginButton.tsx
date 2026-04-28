"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Added { delay } prop
const LoginButton = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Changed to match Navbar links entrance
      animate={{ opacity: 1, y: 0 }}    // Changed to match Navbar links entrance
      transition={{ 
        duration: 0.5, 
        delay: delay, // Uses the delay passed from Navbar
        ease: "easeOut" 
      }}
    >
      <Link href="/login" className="relative group block">
        {/* Glow Effect */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-1 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"
        />

        {/* Main Button */}
        <motion.div
          whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.95 }}
          className="relative px-10 py-3 bg-white rounded-xl leading-none flex items-center"
        >
          <div className="absolute inset-0 p-[2px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-gradient-x" />
            <div className="absolute inset-0 bg-white rounded-[10px] group-hover:bg-transparent transition-colors duration-300" />
          </div>
          <span className="relative text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
            Login
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default LoginButton;
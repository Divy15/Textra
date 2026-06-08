import React, { type ChangeEvent, type KeyboardEvent } from "react";
import { AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NumericInputProps {
  name: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const NumericInput: React.FC<NumericInputProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder = "",
  maxLength,
  error,
  required = false,
  disabled = false,
  className = "",
}) => {
  
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    // 1. Regex Validation: Strip away everything that isn't a digit (0-9)
    const cleanedValue = rawValue.replace(/[^0-9]/g, "");

    // 2. Strict Length Guard: Prevent state updates if it exceeds the maximum allowed length
    if (maxLength !== undefined && cleanedValue.length > maxLength) {
      return;
    }

    // Return the perfectly clean numeric string to the parent state handler
    onChange(cleanedValue);
  };

  // Optional: Quality-of-Life improvement to block scientific notations like 'e', '+', '-', '.' 
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className={`flex flex-col w-full space-y-1.5 ${className}`}>
      {/* Label section */}
      {label && (
        <label 
          htmlFor={name} 
          className="text-xs font-semibold tracking-wide text-gray-600 uppercase"
        >
          {label} {required && <span className="text-burgundy font-bold">*</span>}
        </label>
      )}

      {/* Input container wrapper */}
      <div className="relative rounded-md shadow-sm">
        <input
          id={name}
          name={name}
          type="text"
          inputMode="numeric" // Forces modern smartphones to show a numeric dial pad layout natively
          value={value}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength} // Secondary backup protection layer
          className={`w-full px-3.5 py-2.5 text-sm font-medium rounded-md bg-off-white/40 outline-none border transition-all duration-200 ${
            error 
              ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500 text-red-900" 
              : "border-gray-300 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-gray-900"
          } ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200" : ""}`}
        />

        {/* Error icon overlay positioning */}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
            <AlertCircle size={18} />
          </div>
        )}
      </div>

      {/* Smoothly animated error message layout section */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
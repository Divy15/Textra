// src/Components/Login/MethodSwitcher.tsx
import React from "react";
import { Mail, Phone } from "lucide-react";

type LoginMethod = "email" | "mobile";

interface MethodSwitcherProps {
  method: LoginMethod;
  onMethodChange: (method: LoginMethod) => void;
}

export const MethodSwitcher: React.FC<MethodSwitcherProps> = ({ method, onMethodChange }) => {
  return (
    <div className="flex bg-off-white p-1 rounded-md border border-gray-100">
      <button
        type="button"
        onClick={() => onMethodChange("email")}
        className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
          method === "email" ? "bg-burgundy text-white shadow-sm" : "text-gray-600 hover:text-burgundy"
        }`}
      >
        <Mail size={14} /> Email Mode
      </button>
      <button
        type="button"
        onClick={() => onMethodChange("mobile")}
        className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
          method === "mobile" ? "bg-burgundy text-white shadow-sm" : "text-gray-600 hover:text-burgundy"
        }`}
      >
        <Phone size={14} /> Mobile Mode
      </button>
    </div>
  );
};
// src/Components/Login/LoginHeader.tsx
import React from "react";

interface LoginHeaderProps {
  isVerified: boolean;
}

export const LoginHeader: React.FC<LoginHeaderProps> = ({ isVerified }) => {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-burgundy tracking-tight">
        Welcome to our Platform
      </h2>
      <p className="text-sm text-gray-500">
        {!isVerified ? "Access your unified operations account" : "Enter safety credentials"}
      </p>
    </div>
  );
};
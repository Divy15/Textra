import React, { useState } from "react";
import toast from "react-hot-toast";
import { Login } from "../Components/Login/Login";
import { useAuth } from "../Context/AuthContext.tsx";

type LoginMethod = "email" | "mobile";

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [savedIdentifier, setSavedIdentifier] = useState("");
  const [activeMethod, setActiveMethod] = useState<LoginMethod>("email");

  // 1. Core Service Call: Handles Requesting an OTP from the backend API
  const handleSendCodeService = (method: LoginMethod, identityValue: string) => {
    if (!identityValue.trim()) {
      toast.error(`Please enter a valid ${method === "email" ? "email address" : "mobile number"}.`);
      return;
    }

    // Capture states to push forward into the post-evaluation session
    setSavedIdentifier(identityValue);
    setActiveMethod(method);

    // Mimic API Server Dispatch
    console.log(`API Service Call: Dispatched login OTP verification bundle to ${identityValue}`);
    toast.success("User verified! Sent verification OTP code.");
  };

  // 2. Core Service Call: Handles verification logic against database inputs
  const handleVerifyCodeService = (otpString: string) => {
    if (otpString.length < 6) {
      toast.error("Please fill in all 6 OTP verification digits.");
      return;
    }

    // Static operational verification filter rule matching '111111'
    if (otpString === "111111") {
      toast.success("Login Successful!");
      
      // Update global context profile layout variables
      login({ 
        name: "Divy Gandhi", 
        email: activeMethod === "email" ? savedIdentifier : "divy@hybridlocal.com" 
      });
    } else {
      toast.error("Invalid verification code. Try using '111111'.");
    }
  };

  // 3. Core Service Call: Handles Google OAuth execution
  const handleGoogleAuthService = () => {
    toast.success("Connecting with Google Account...");
    login({ name: "Divy Gandhi", email: "divy.gandhi@gmail.com" });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-off-white flex items-center justify-center p-4">
      {/* UI Component called with state actions attached */}
      <Login 
        onSendCode={handleSendCodeService}
        onVerifyCode={handleVerifyCodeService}
        onGoogleLogin={handleGoogleAuthService}
      />
    </div>
  );
};
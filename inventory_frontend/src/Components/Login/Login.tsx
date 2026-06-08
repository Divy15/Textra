// src/Components/Login/Login.tsx
import React, { useState, useRef, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, UserCheck } from "lucide-react";
import { Input } from "../CommonComponent/Input";
import { NumericInput } from "../CommonComponent/NumericInput";

// Sub-components Imports
import { LoginHeader } from "./LoginHeader";
import { MethodSwitcher } from "./MethodSwitcher";
import { GoogleLoginButton } from "./GoogleLoginButton";

type LoginMethod = "email" | "mobile";

interface LoginProps {
  onSendCode: (method: LoginMethod, value: string) => void;
  onVerifyCode: (otpString: string) => void;
  onGoogleLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSendCode, onVerifyCode, onGoogleLogin }) => {
  const [method, setMethod] = useState<LoginMethod>("email");
  const [identifier, setIdentifier] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const otpRefs = useRef<HTMLInputElement[]>([]);

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    onSendCode(method, identifier);
    setIsVerified(true);
  };

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    onVerifyCode(otp.join(""));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md bg-white rounded-xl shadow-md border border-camel/10 p-8 space-y-6"
    >
      <LoginHeader isVerified={isVerified} />

      {!isVerified && (
        <MethodSwitcher method={method} onMethodChange={(m) => { setMethod(m); setIdentifier(""); }} />
      )}

      <AnimatePresence mode="wait">
        {!isVerified ? (
          <motion.form key="step1" onSubmit={handleRequestOtp} className="space-y-4"
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
          >
            {method === "email" ? (
              <Input name="identity" type="email" label="Email Address" placeholder="Enter your email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
            ) : (
              <NumericInput name="identity" label="Mobile Number" placeholder="Enter mobile number" value={identifier} onChange={(val) => setIdentifier(val)} maxLength={10} required />
            )}

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-burgundy text-off-white font-medium text-sm py-2.5 px-4 rounded-md hover:bg-opacity-95 shadow-sm transition-colors cursor-pointer group">
              Send Verification Code
              <ArrowRight size={16} className="text-camel group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        ) : (
          <motion.form key="step2" onSubmit={handleVerifyOtp} className="space-y-5"
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
          >
            <div className="flex items-center gap-3 bg-off-white border border-camel/20 p-3 rounded-lg">
              <div className="h-9 w-9 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy"><UserCheck size={18} /></div>
              <div>
                <p className="text-xs text-gray-400">Account Found</p>
                <p className="text-sm font-bold text-burgundy">Divy Gandhi</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-center">Enter 6-Digit OTP</label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index} type="text" inputMode="numeric" maxLength={1} value={digit}
                    ref={(el) => { if (el) otpRefs.current[index] = el; }}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    className="w-12 h-12 text-center text-lg font-bold text-burgundy border border-gray-300 rounded-lg focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-off-white/50 shadow-sm transition-all"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-burgundy text-off-white font-medium text-sm py-2.5 px-4 rounded-md hover:bg-opacity-95 shadow-sm transition-colors cursor-pointer">
                <ShieldCheck size={18} className="text-camel" /> Verify & Access System
              </button>
              <button type="button" onClick={() => { setIsVerified(false); setOtp(new Array(6).fill("")); }} className="text-xs text-camel hover:text-burgundy text-center font-medium mt-1 cursor-pointer transition-colors">
                Change Email / Mobile Number
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <GoogleLoginButton onGoogleLogin={onGoogleLogin} />
    </motion.div>
  );
};
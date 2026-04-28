"use client";
import { useState } from "react";
import LoginForm from "@/app/components/OnBoarding/LoginForm";
import ShopDetails from "@/app/components/OnBoarding/ShopDetails";
import DocumentUpload from "@/app/components/OnBoarding/DocumentUpload";
import PhotoUpload from "@/app/components/OnBoarding/PhotoUpload";
import SuccessScreen from "@/app/components/OnBoarding/SuccessScreen";
import Stepper from "@/app/components/OnBoarding/Stepper";
import FormHeader from "@/app/components/OnBoarding/FormHeader";

const STEP_NAMES = ["Login", "Shop", "Docs", "Photos", "Active"];

const LoginPage = () => {
  const [stage, setStage] = useState(3); // Set default back to 1
  const [sellerId, setSellerId] = useState<number | null>(null);
  const [sellerName, setSellerName] = useState<string>("");

  const nextStage = (id?: number, name?: string) => {
    if (id) setSellerId(id);
    if (name) setSellerName(name);
    setStage((prev) => prev + 1);
  };

  // NEW: Back stage function
  const prevStage = () => {
    if (stage > 1) {
      setStage((prev) => prev - 1);
    }
  };

  const renderStage = () => {
    // Pass onBack to all components that might need it
    const props = { 
      sellerId, 
      sellerName, 
      onNext: nextStage, 
      onBack: prevStage 
    };

    switch (stage) {
      case 1: return <LoginForm onNext={nextStage} />;
      case 2: return <ShopDetails {...props} />;
      case 3: return <DocumentUpload {...props} />;
      case 4: return <PhotoUpload {...props} />;
      case 5: return <SuccessScreen />;
      default: return <LoginForm onNext={nextStage} />;
    }
  };

  return (
    <div className="flex flex-col items-center pt-11 p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-100 p-10">
        {stage !== 1 && stage < 5 ? (
          <Stepper currentStage={stage} />
        ) : null}
        
        {stage < 5 && <FormHeader stepName={STEP_NAMES[stage - 1]} />}

        <div className="transition-all duration-300">
          {renderStage()}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
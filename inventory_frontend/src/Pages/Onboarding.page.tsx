import { useState } from 'react';
import StepUserRegistration from '../Components/Onroll/StepUserRegistration';
import StepShopDetails from '../Components/Onroll/StepShopDetails';
import StepDocumentationDetails from '../Components/Onroll/StepDocumentationDetails';

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userId, setUserId] = useState<string | null>(null);
  
  const [onboardingData, setOnboardingData] = useState({
    step1: {},
    step2: {},
    step3: {}
  });

  const handleStep1Submit = async (data: any) => {
    setOnboardingData(prev => ({ ...prev, step1: data }));
    try {
      if (!userId) {
        setUserId("USR_" + Math.floor(Math.random() * 100000));
      }
      setCurrentStep(2);
    } catch (error) {
      console.error("Failed to save personal records", error);
    }
  };

  const handleStep2Submit = async (data: any) => {
    setOnboardingData(prev => ({ ...prev, step2: data }));
    setCurrentStep(3);
  };

  const handleStep3Submit = async (data: any) => {
    try {
      console.log("step3 form submissions", data);
      alert("Registration completed successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Finalization pipeline error", error);
    }
  };

  const handleCancelForm = () => {
    if (confirm("Are you sure you want to cancel? Progress will be lost.")) {
      window.location.href = "/login";
    }
  };

  return (
    <div 
      className="max-w-4xl mx-auto my-8 p-6 rounded-lg shadow-lg border text-gray-800"
      style={{ 
        backgroundColor: 'var(--color-off-white)', 
        borderColor: 'var(--color-camel)' 
      }}
    >
      {/* Structural Progression Bar Header */}
      <div 
        className="flex justify-between items-center mb-8 border-b pb-4"
        style={{ borderColor: 'var(--color-camel)' }}
      >
        <h2 
          className="text-2xl font-bold" 
          style={{ color: 'var(--color-burgundy)' }}
        >
          Partner Onboarding Flow
        </h2>
        <button 
          onClick={handleCancelForm} 
          className="text-sm font-semibold text-red-600 hover:text-red-800 hover:underline transition-colors"
        >
          Cancel Setup
        </button>
      </div>

      {/* Stepper badge pipeline connecting to theme variables */}
      <div className="flex gap-3 justify-center mb-8 text-sm">
        <span 
          className="px-4 py-1.5 rounded-full border transition-all duration-200 shadow-sm"
          style={{
            backgroundColor: currentStep === 1 ? 'var(--color-burgundy)' : '#FFFFFF',
            color: currentStep === 1 ? '#FFFFFF' : '#6B7280',
            borderColor: currentStep === 1 ? 'var(--color-burgundy)' : '#E5E7EB',
            fontWeight: currentStep === 1 ? '700' : '500'
          }}
        >
          1. User Details
        </span>
        <span 
          className="px-4 py-1.5 rounded-full border transition-all duration-200 shadow-sm"
          style={{
            backgroundColor: currentStep === 2 ? 'var(--color-burgundy)' : '#FFFFFF',
            color: currentStep === 2 ? '#FFFFFF' : '#6B7280',
            borderColor: currentStep === 2 ? 'var(--color-burgundy)' : '#E5E7EB',
            fontWeight: currentStep === 2 ? '700' : '500'
          }}
        >
          2. Store Details
        </span>
        <span 
          className="px-4 py-1.5 rounded-full border transition-all duration-200 shadow-sm"
          style={{
            backgroundColor: currentStep === 3 ? 'var(--color-burgundy)' : '#FFFFFF',
            color: currentStep === 3 ? '#FFFFFF' : '#6B7280',
            borderColor: currentStep === 3 ? 'var(--color-burgundy)' : '#E5E7EB',
            fontWeight: currentStep === 3 ? '700' : '500'
          }}
        >
          3. Upload Documents
        </span>
      </div>

      {/* Embedded Render Steps */}
      <div className="mt-4">
        {currentStep === 1 && (
          <StepUserRegistration initialData={onboardingData.step1} onNext={handleStep1Submit} />
        )}
        {currentStep === 2 && (
          <StepShopDetails initialData={onboardingData.step2} onNext={handleStep2Submit} onBack={() => setCurrentStep(1)} />
        )}
        {currentStep === 3 && (
          <StepDocumentationDetails initialData={onboardingData.step3} onSubmit={handleStep3Submit} onBack={() => setCurrentStep(2)} />
        )}
      </div>

      {userId && (
        <p className="text-xs text-gray-400 mt-6 text-right font-medium">
          Draft Session Identifier: 
          <code className="bg-gray-100 border border-gray-200 text-gray-600 px-1.5 py-0.5 rounded ml-1">
            {userId}
          </code>
        </p>
      )}
    </div>
  );
}
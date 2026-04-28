"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { OnboardingStepProps } from "@/app/types/onboarding";
import FormInput from "@/app/UI/FormInput";
import FileUpload from "@/app/UI/FileUpload";
import { ShieldCheck, Landmark, ArrowLeft } from "lucide-react"; // Added ArrowLeft

export default function DocumentUpload({ onNext, onBack }: OnboardingStepProps) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      aadhaarNumber: "",
      panNumber: "",
    }
  });

  const [aadhaarUrl, setAadhaarUrl] = useState<string | null>(null);
  const [panUrl, setPanUrl] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    const finalData = {
      ...data,
      aadhaarUrl,
      panUrl,
    };
    console.log("Final Data for Go Backend:", finalData);
    onNext();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 animate-in fade-in duration-700">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* ... Aadhaar Section (No changes) ... */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
            <h3 className="font-bold text-gray-700">Aadhaar Card Details</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 items-start">
            <FormInput
              label="Aadhaar Number"
              placeholder="12-digit number"
              {...register("aadhaarNumber", { 
                required: "Required",
                pattern: { value: /^\d{12}$/, message: "Must be 12 digits" }
              })}
              error={errors.aadhaarNumber?.message}
            />
            <FileUpload 
              label="Aadhaar PDF/Image"
              accept=".pdf,.jpg,.jpeg,.png"
              helperText="Front & Back in a single PDF"
              onUploadSuccess={(url) => setAadhaarUrl(url)}
            />
          </div>
        </div>

        {/* ... PAN Section (No changes) ... */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">2</div>
            <h3 className="font-bold text-gray-700">PAN Card Details</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 items-start">
            <FormInput
              label="PAN Card Number"
              placeholder="ABCDE1234F"
              className="uppercase"
              {...register("panNumber", { 
                required: "Required",
                pattern: { value: /[A-Z]{5}[0-9]{4}[A-Z]{1}/, message: "Invalid PAN format" }
              })}
              error={errors.panNumber?.message}
            />
            <FileUpload 
              label="PAN PDF/Image"
              accept=".pdf,.jpg,.jpeg,.png"
              helperText="Upload a clear scan of the front side"
              onUploadSuccess={(url) => setPanUrl(url)}
            />
          </div>
        </div>

        {/* --- Updated Action Buttons --- */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <div className="flex w-full gap-4 max-w-md">
            {/* Previous Button */}
            <button 
              type="button"
              onClick={onBack}
              className="p-4 rounded-xl border-2 border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all flex items-center justify-center bg-white"
            >
              <ArrowLeft size={24} />
            </button>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="flex-1 py-4 rounded-xl font-bold text-white bg-linear-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              Submit for Verification
            </button>
          </div>
          <p className="text-center text-gray-400 text-xs mt-2">
               Your data is encrypted and used only for KYC verification.
          </p>
        </div>
      </form>
    </div>
  );
}
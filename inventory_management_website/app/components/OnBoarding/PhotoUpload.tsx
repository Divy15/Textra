"use client";
import { useState, useRef } from "react";
import { OnboardingStepProps } from "@/app/types/onboarding";
import { Camera, Store, Check, Loader2, ArrowRight, Forward, ArrowLeft } from "lucide-react"; // Added ArrowLeft
import ImageCropper from "@/app/UI/ImageCropper";

export default function PhotoUpload({ onNext, onBack }: OnboardingStepProps) {
  const [tempImage, setTempImage] = useState<{ src: string; type: "profile" | "shop" } | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [shopUrl, setShopUrl] = useState<string | null>(null);
  
  const [isUploading, setIsUploading] = useState<"profile" | "shop" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const profileInputRef = useRef<HTMLInputElement>(null);
  const shopInputRef = useRef<HTMLInputElement>(null);

  const isComplete = profileUrl && shopUrl;

  const handleProceed = async () => {
    setIsSubmitting(true);
    console.log(!isComplete ? "User Skipped" : "User Uploaded");
    await new Promise(r => setTimeout(r, 600));
    onNext();
    setIsSubmitting(false);
  };

  // ... File selection and crop logic remains same ...
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>, type: "profile" | "shop") => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setTempImage({ src: reader.result as string, type });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFinalCrop = async (blob: Blob) => {
    const type = tempImage?.type;
    setTempImage(null);
    if (!type) return;
    setIsUploading(type);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const url = URL.createObjectURL(blob);
    if (type === "profile") setProfileUrl(url);
    else setShopUrl(url);
    setIsUploading(null);
  };

  return (
    <div className="max-w-6xl mx-auto w-full space-y-10 p-6">
      {/* ... Cards Section ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm flex flex-col items-center space-y-4">
          <div onClick={() => !isUploading && profileInputRef.current?.click()} className={`relative w-36 h-36 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border-4 transition-all duration-300 ${profileUrl ? 'border-green-500' : 'border-dashed border-gray-300 bg-gray-50'}`}>
            {isUploading === "profile" ? <Loader2 className="animate-spin text-green-500" size={32} /> : profileUrl ? <img src={profileUrl} className="w-full h-full object-cover" /> : <Camera className="text-gray-400" size={32} />}
          </div>
          <h3 className="text-lg font-bold text-gray-800">Profile Photo</h3>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm flex flex-col items-center space-y-4">
          <div onClick={() => !isUploading && shopInputRef.current?.click()} className={`relative w-full h-36 rounded-3xl flex items-center justify-center cursor-pointer overflow-hidden border-4 transition-all duration-300 ${shopUrl ? 'border-green-500' : 'border-dashed border-gray-300 bg-gray-50'}`}>
            {isUploading === "shop" ? <Loader2 className="animate-spin text-green-500" size={32} /> : shopUrl ? <img src={shopUrl} className="w-full h-full object-cover" /> : <Store className="text-gray-400" size={32} />}
          </div>
          <h3 className="text-lg font-bold text-gray-800">Shop Banner</h3>
        </div>
      </div>

      {/* --- Action Section with Previous & Smart Button --- */}
      <div className="flex justify-center pt-6">
        <div className="flex w-full gap-4 max-w-md">
          {/* Previous Button */}
          <button 
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="p-4 rounded-2xl border-2 border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all flex items-center justify-center bg-white"
          >
            <ArrowLeft size={24} />
          </button>

          {/* Smart Continue/Skip Button */}
          <button
            onClick={handleProceed}
            disabled={isSubmitting}
            className={`group relative flex-1 py-5 rounded-2xl font-black text-white text-xl shadow-2xl transition-all duration-300 active:scale-95 flex justify-center items-center gap-3 overflow-hidden
              ${isComplete 
                ? 'bg-linear-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 opacity-100' 
                : 'bg-linear-to-r from-red-500/60 via-yellow-500/60 via-green-500/60 to-purple-500/60 hover:from-red-500/80 hover:via-yellow-500/80 hover:via-green-500/80 hover:to-purple-500/80'
              }
            `}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : isComplete ? (
                <>Continue <ArrowRight size={24} strokeWidth={3} /></>
              ) : (
                <>Skip <Forward size={24} strokeWidth={3} /></>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Hidden inputs & Cropper */}
      <input ref={profileInputRef} type="file" accept="image/*" onChange={(e) => onSelectFile(e, "profile")} className="hidden" />
      <input ref={shopInputRef} type="file" accept="image/*" onChange={(e) => onSelectFile(e, "shop")} className="hidden" />
      {tempImage && <ImageCropper image={tempImage.src} aspect={tempImage.type === "profile" ? 1 : 16/9} cropShape={tempImage.type === "profile" ? "round" : "rect"} onCancel={() => setTempImage(null)} onCropComplete={handleFinalCrop} />}
    </div>
  );
}
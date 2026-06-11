import React, { useState } from "react";
import { Input } from "../CommonComponent/Input";
import { FileUpload } from "../CommonComponent/FileUpload";
import { OnBoardingUploadStorePhoto } from "../../Service/OnBoarding.service.jsx";
import toast from 'react-hot-toast'; 

interface Step2Props {
  businessId: string;
  initialData: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function StepShopDetails({
  businessId,
  initialData,
  onNext,
  onBack,
}: Step2Props) {
  const [formData, setFormData] = useState({
    shopName: initialData.shopName || "",
    shopAddress: initialData.shopAddress || "",
    city: initialData.city || "",
    state: initialData.state || "",
    country: initialData.country || "",
    pincode: initialData.pincode || "",
    shopphoto_id: initialData.shopphoto_id || null, // 👈 1. Added this to track the integer ID
  });
  
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isUploading) {
      toast.error("Please wait for the photo upload to complete.");
      return;
    }
    
    // Validation guard to ensure they uploaded the photo before passing data next
    if (!formData.shopphoto_id) {
      toast.error("Please upload a shop photo to proceed.");
      return;
    }

    // 👈 3. This now passes the entire payload (including shopphoto_id) to your onNext handler
    console.log(formData);
    onNext(formData); 
  };

  const mapSearchQuery = encodeURIComponent(
    `${formData.shopAddress} ${formData.city} ${formData.pincode}`,
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 adaptive-theme-form">
      <h3 className="text-xl font-semibold mb-2">Shop Details</h3>

      {/* 1. Shop Name Field */}
      <div className="w-full">
        <Input
          label="Shop Name"
          name="shopName"
          value={formData.shopName}
          onChange={handleChange}
          required
        />
      </div>

      {/* 2. Shop Address Field */}
      <div className="w-full">
        <Input
          label="Shop Address"
          name="shopAddress"
          value={formData.shopAddress}
          onChange={handleChange}
          required
        />
      </div>

      {/* 3. Geographical Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <Input
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <Input
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <Input
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>

      {/* 5. Upload Photo Section */}
      <div className="w-full pt-2">
        <FileUpload
          label="Upload Shop Photo"
          allowedType="image"
          onUploadApi={async (file: File) => {
            console.log("file", file);
            setIsUploading(true);
            try {
              const payload = new FormData();
              payload.append("file", file);
              payload.append("businessId", businessId);
              payload.append("filename", file.name);

              const resultData = await OnBoardingUploadStorePhoto(payload);

              // 👈 2. Update state with both the visual URL and the DB primary key integer
              setFormData((prev) => ({ 
                ...prev, 
                shopPhoto: resultData?.url || file,
                shopphoto_id: resultData?.shopphoto_id || null // Captured from your API response data mapping
              }));

              toast.success("Your shop photo has been uploaded successfully!");
              
            } catch (error) {
              console.error("Upload error:", error);
              toast.error("Failed to upload shop photo. Please try again.");
              throw error; 
            } finally {
              setIsUploading(false);
            }
          }}
          onSuccess={() => console.log("Shop photo workflow completed.")}
        />
      </div>

      {/* 6. Form Navigation Action Buttons */}
      <div className="flex justify-between pt-6 border-t border-gray-100">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2.5 rounded-md font-medium text-gray-700 bg-gray-100 border border-transparent transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-gray-200 active:translate-y-0 active:scale-[0.98] shadow-sm hover:shadow-md"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isUploading}
          className={`px-6 py-2.5 rounded-md font-medium text-white transition-all duration-300 transform shadow-sm hover:shadow-md ${
            isUploading ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          }`}
          style={{ backgroundColor: '#C19A6B' }}
          onMouseEnter={(e) => !isUploading && (e.currentTarget.style.backgroundColor = '#a88256')}
          onMouseLeave={(e) => !isUploading && (e.currentTarget.style.backgroundColor = '#C19A6B')}
        >
          {isUploading ? "Uploading..." : "Save & Next"}
        </button>
      </div>
    </form>
  );
}
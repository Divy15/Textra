import React, { useState } from "react";
import { Input } from "../CommonComponent/Input";
import { FileUpload } from "../CommonComponent/FileUpload";

interface Step2Props {
  initialData: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function StepShopDetails({
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
    shopPhoto: initialData.shopPhoto || null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  // Encodes the address for a clean, non-authenticated public map preview link
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

      {/* 4. Embedded Free Map Preview Layer */}
      {formData.shopAddress && (
        <div className="w-full h-48 rounded-md overflow-hidden border my-2">
          <iframe
            title="Location Preview"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://maps.google.com/maps?q=${mapSearchQuery}&t=&z=13&ie=UTF-8&iwloc=&output=embed`}
          />
        </div>
      )}

      {/* 5. Upload Photo Section (Placed cleanly after address metrics) */}
      <div className="w-full pt-2">
        <FileUpload
          label="Upload Shop Photo"
          allowedType="image"
          onUploadApi={async (file) => {
            // 1. Simulates your backend upload/S3 process
            // 2. Stores the file object into your local form state
            setFormData((prev) => ({ ...prev, shopPhoto: file }));
            return Promise.resolve();
          }}
          onSuccess={() => console.log("Shop photo staged successfully")}
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
          className="px-6 py-2.5 rounded-md font-medium text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm hover:shadow-md"
          style={{ backgroundColor: '#C19A6B' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a88256')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C19A6B')}
        >
          Save & Next
        </button>
      </div>
    </form>
  );
}
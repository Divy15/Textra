import React, { useState } from "react";
import { Input } from "../CommonComponent/Input";
import { FileUpload } from "../CommonComponent/FileUpload";

interface PartnerIdentity {
  partnerName: string;
  aadhaarNumber: string;
  aadhaarPhoto: File | null;
  panNumber: string;
  panPhoto: File | null;
}

interface Step3Props {
  initialData: any; // Contains registrationType ('solo' | 'partnership') and previous form states
  onSubmit: (data: any) => void;
  onBack: () => void;
}

export default function StepDocumentationDetails({
  initialData,
  onSubmit,
  onBack,
}: Step3Props) {
  const isPartnership = initialData.registrationType === "solo";

  // 1. Manage visible optional business document options via boolean tracking
  const [activeDocs, setActiveDocs] = useState({
    GST: !!initialData.gstNumber,
    ShopLicence: !!initialData.shopLicenceNumber,
    Udyam: !!initialData.udyamNumber,
  });

  // 2. Main operational form state
  const [businessDocs, setBusinessDocs] = useState({
    gstNumber: initialData.gstNumber || "",
    gstPhoto: initialData.gstPhoto || null,
    shopLicenceNumber: initialData.shopLicenceNumber || "",
    shopLicencePhoto: initialData.shopLicencePhoto || null,
    udyamNumber: initialData.udyamNumber || "",
    udyamPhoto: initialData.udyamPhoto || null,
  });

  // 3. Dynamic array collection tracking identity documents per person
  const [identities, setIdentities] = useState<PartnerIdentity[]>(
    initialData.identities && initialData.identities.length > 0
      ? initialData.identities
      : [
          {
            partnerName: isPartnership ? "Partner 1" : "Owner",
            aadhaarNumber: "",
            aadhaarPhoto: null,
            panNumber: "",
            panPhoto: null,
          },
        ]
  );

  const handleDocCheckboxChange = (key: keyof typeof activeDocs) => {
    setActiveDocs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleBusinessDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessDocs({ ...businessDocs, [e.target.name]: e.target.value });
  };

  // Safe item manipulation logic across dynamic arrays
  const handleIdentityFieldChange = (index: number, field: keyof PartnerIdentity, value: any) => {
    const updated = [...identities];
    updated[index] = { ...updated[index], [field]: value };
    setIdentities(updated);
  };

  const addPartnerRow = () => {
    setIdentities([
      ...identities,
      {
        partnerName: `Partner ${identities.length + 1}`,
        aadhaarNumber: "",
        aadhaarPhoto: null,
        panNumber: "",
        panPhoto: null,
      },
    ]);
  };

  const removePartnerRow = (index: number) => {
    if (identities.length === 1) return;
    setIdentities(identities.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      selectedDocTypes: activeDocs,
      businessDocuments: businessDocs,
      identities: identities,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 adaptive-theme-form">
      <div>
        <h3 className="text-xl font-semibold mb-1">Documentation Details</h3>
        <p className="text-xs text-gray-500">Select all registrations applicable to your business.</p>
      </div>

      {/* --- BUSINESS LICENCE SELECTION ROW --- */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
        <label className="block text-sm font-semibold mb-3 text-gray-700">Select Business Documents to Provide</label>
        <div className="flex flex-wrap gap-6">
          {(["GST", "ShopLicence", "Udyam"] as const).map((docType) => (
            <label key={docType} className="flex items-center gap-2 font-medium text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={activeDocs[docType]}
                onChange={() => handleDocCheckboxChange(docType)}
                className="w-4 h-4 rounded text-[#C19A6B] focus:ring-[#C19A6B] border-gray-300"
              />
              {docType === "ShopLicence" ? "Shop Licence" : docType === "Udyam" ? "Udyam Registration" : docType}
            </label>
          ))}
        </div>
      </div>

      {/* --- DYNAMIC BUSINESS DOCUMENT INPUTS --- */}
      <div className="space-y-4">
        {activeDocs.GST && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-100 rounded-lg items-end">
            <Input
              label="GST Number"
              name="gstNumber"
              value={businessDocs.gstNumber}
              onChange={handleBusinessDetailsChange}
              required
            />
            <FileUpload
              label="Upload GST Copy"
              allowedType="both"
              onUploadApi={async (file) => setBusinessDocs((prev) => ({ ...prev, gstPhoto: file }))}
            />
          </div>
        )}

        {activeDocs.ShopLicence && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-100 rounded-lg items-end">
            <Input
              label="Shop Licence Number"
              name="shopLicenceNumber"
              value={businessDocs.shopLicenceNumber}
              onChange={handleBusinessDetailsChange}
              required
            />
            <FileUpload
              label="Upload Shop Licence Copy"
              allowedType="both"
              onUploadApi={async (file) => setBusinessDocs((prev) => ({ ...prev, shopLicencePhoto: file }))}
            />
          </div>
        )}

        {activeDocs.Udyam && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-100 rounded-lg items-end">
            <Input
              label="Udyam Registration Number"
              name="udyamNumber"
              value={businessDocs.udyamNumber}
              onChange={handleBusinessDetailsChange}
              required
            />
            <FileUpload
              label="Upload Udyam Certificate"
              allowedType="both"
              onUploadApi={async (file) => setBusinessDocs((prev) => ({ ...prev, udyamPhoto: file }))}
            />
          </div>
        )}
      </div>

      {/* --- IDENTITY VERIFICATION SECTOR --- */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Identification Verification</h4>
            <p className="text-xs text-gray-500">
              {isPartnership ? "Provide KYC details for all functional business partners." : "Provide your personal identity metrics."}
            </p>
          </div>
          {isPartnership && (
            <button
              type="button"
              onClick={addPartnerRow}
              className="px-3 py-1.5 text-xs font-medium text-white rounded bg-[#C19A6B] hover:bg-[#a88256] transition-colors"
            >
              + Add Partner
            </button>
          )}
        </div>

        <div className="space-y-6">
          {identities.map((identity, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm space-y-4 relative">
              {isPartnership && (
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <input
                    type="text"
                    value={identity.partnerName}
                    onChange={(e) => handleIdentityFieldChange(index, "partnerName", e.target.value)}
                    className="font-semibold text-sm text-gray-800 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-[#C19A6B] focus:outline-none"
                  />
                  {identities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePartnerRow(index)}
                      className="text-xs font-medium text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              )}

              {/* Identity Documents Grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <Input
                  label="Aadhaar Number"
                  name={`aadhaar-${index}`}
                  value={identity.aadhaarNumber}
                  onChange={(e) => handleIdentityFieldChange(index, "aadhaarNumber", e.target.value)}
                  placeholder="Enter 12-digit configuration"
                  required
                />
                <FileUpload
                  label="Upload Aadhaar Card"
                  allowedType="both"
                  onUploadApi={async (file) => handleIdentityFieldChange(index, "aadhaarPhoto", file)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end pt-2">
                <Input
                  label="PAN Card Number"
                  name={`pan-${index}`}
                  value={identity.panNumber}
                  onChange={(e) => handleIdentityFieldChange(index, "panNumber", e.target.value)}
                  placeholder="Enter 10-digit alphanumeric alphanumeric"
                  required
                />
                <FileUpload
                  label="Upload PAN Card"
                  allowedType="image"
                  onUploadApi={async (file) => handleIdentityFieldChange(index, "panPhoto", file)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FORM NAVIGATION FOOTER --- */}
      <div className="flex justify-between pt-6 border-t border-gray-100">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2.5 rounded-md font-medium text-gray-700 bg-gray-100 border border-transparent transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-gray-200 active:translate-y-0 active:scale-[0.98]"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-md font-medium text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm hover:shadow-md"
          style={{ backgroundColor: "#C19A6B" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a88256")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C19A6B")}
        >
          Complete Registration
        </button>
      </div>
    </form>
  );
}
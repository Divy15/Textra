"use client";
import { useState, useRef } from "react";
import { UploadCloud, FileText, X, CheckCircle2, Loader2, ArrowUpCircle } from "lucide-react";

interface FileUploadProps {
  label: string;
  accept?: string;
  onUploadSuccess: (url: string) => void; // Returns the URL from your API/S3
  helperText?: string;
}

export default function FileUpload({ label, accept, onUploadSuccess, helperText }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "selected" | "uploading" | "success">("idle");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelection = (file: File) => {
    setSelectedFile(file);
    setStatus("selected");
  };

  const cancelSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setStatus("idle");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    setStatus("uploading");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Replace this URL with your actual Go/Next.js API endpoint
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setStatus("success");
        onUploadSuccess(data.url); // Pass S3 URL to parent
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("selected"); // Revert to allow retry
      alert("Failed to upload file. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full group">
      <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
        {label}
        {status === "success" && <CheckCircle2 size={14} className="text-green-500" />}
      </label>

      {status === "idle" ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files[0]) handleFileSelection(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 ${
            isDragging ? "border-green-500 bg-green-50/50" : "border-gray-200 hover:border-gray-300 bg-white"
          }`}
        >
          <input type="file" ref={fileInputRef} onChange={(e) => e.target.files?.[0] && handleFileSelection(e.target.files[0])} accept={accept} className="hidden" />
          <div className="p-4 bg-gray-50 rounded-full text-gray-400 group-hover:scale-110 transition-transform duration-300">
            <UploadCloud size={28} />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-700">Click or drag to upload</p>
            <p className="text-xs text-gray-400 mt-1">{helperText || "Max size: 10MB"}</p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {/* File Card Display */}
          <div className={`flex items-center justify-between p-4 border rounded-2xl transition-all ${status === "success" ? "border-green-200 bg-green-50/40" : "border-gray-200 bg-white"}`}>
            <div className="flex items-center gap-4 overflow-hidden">
              <div className={`p-2.5 rounded-xl ${status === "success" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"}`}>
                <FileText size={20} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold text-gray-800 truncate">{selectedFile?.name}</span>
                <span className="text-[10px] text-gray-400 font-bold tracking-tight uppercase">
                  {status === "uploading" ? "Uploading to TexTra..." : `${(selectedFile!.size / 1024).toFixed(1)} KB`}
                </span>
              </div>
            </div>
            {status === "selected" && (
              <button onClick={cancelSelection} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-all">
                <X size={18} />
              </button>
            )}
          </div>

          {/* Upload & Cancel Buttons */}
          {status === "selected" && (
            <div className="flex gap-2 animate-in fade-in slide-in-from-top-1">
              <button
                type="button"
                onClick={uploadFile}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-black transition-all active:scale-[0.98]"
              >
                <ArrowUpCircle size={16} /> Confirm & Upload
              </button>
              <button
                type="button"
                onClick={cancelSelection}
                className="px-5 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          )}

          {/* Loading State Overlay (Inside Card) */}
          {status === "uploading" && (
            <div className="flex items-center gap-2 text-green-600 text-xs font-bold px-1">
              <Loader2 size={14} className="animate-spin" />
              Processing document...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
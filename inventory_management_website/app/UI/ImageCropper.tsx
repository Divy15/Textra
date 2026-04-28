"use client";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { ZoomIn, ZoomOut, Check, X } from "lucide-react";

interface ImageCropperProps {
  image: string;
  aspect: number;
  cropShape?: "rect" | "round";
  onCropComplete: (croppedImage: Blob) => void;
  onCancel: () => void;
}

export default function ImageCropper({ image, aspect, cropShape = "rect", onCropComplete, onCancel }: ImageCropperProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const onCropChange = (crop: { x: number; y: number }) => setCrop(crop);

  const handleCropComplete = useCallback((_area: any, pixels: any) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const createCrop = async () => {
    try {
      const img = new window.Image();
      img.src = image;
      await img.decode();

      const canvas = document.createElement("canvas");
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      ctx.drawImage(
        img,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      canvas.toBlob((blob) => {
        if (blob) onCropComplete(blob);
      }, "image/jpeg", 0.9);
    } catch (e) {
      console.error("Error cropping image:", e);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl h-[400px] md:h-[500px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          cropShape={cropShape}
          showGrid={false}
          onCropChange={onCropChange}
          onZoomChange={setZoom}
          onCropComplete={handleCropComplete}
        />
      </div>

      <div className="mt-6 w-full max-w-sm space-y-6">
        <div className="flex items-center gap-4 text-white">
          <ZoomOut size={20} />
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <ZoomIn size={20} />
        </div>

        <div className="flex justify-between gap-4">
          <button 
            onClick={onCancel} 
            className="flex-1 py-3 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <X size={18} /> Cancel
          </button>
          <button 
            onClick={createCrop} 
            className="flex-1 py-3 rounded-2xl bg-green-500 text-white font-bold hover:bg-green-600 shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2"
          >
            <Check size={18} /> Set Photo
          </button>
        </div>
      </div>
    </div>
  );
}
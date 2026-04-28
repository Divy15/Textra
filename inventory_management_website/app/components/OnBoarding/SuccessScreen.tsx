import { CircleCheck } from "lucide-react";

export default function SuccessScreen() {
  return (
    <div className="text-center space-y-6 py-10 animate-in zoom-in duration-500">
      <div className="flex justify-center">
        <div className="p-4 bg-green-50 rounded-full">
          {/* Lucide icon with Tailwind sizing and color */}
          <CircleCheck className="w-20 h-20 text-green-500 stroke-[1.5px]" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800">
        Application Submitted!
      </h2>
      
      <p className="text-gray-600 max-w-sm mx-auto">
        Your TexTra seller account is now under review. 
        You can check back here in 24-48 hours.
      </p>

      <button className="px-10 py-3 rounded-full font-bold text-white bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 hover:scale-105 transition-transform shadow-md">
        Go to Dashboard
      </button>
    </div>
  );
}
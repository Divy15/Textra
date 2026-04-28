// @/components/OnBoarding/Stepper.tsx
import { Check } from "lucide-react";

const STEPS = [
  { id: 1, name: "Login", color: "text-red-500" },
  { id: 2, name: "Shop", color: "text-orange-500" },
  { id: 3, name: "Docs", color: "text-yellow-600" },
  { id: 4, name: "Photos", color: "text-green-600" },
  { id: 5, name: "Active", color: "text-purple-600" },
];

export default function Stepper({ currentStage }: { currentStage: number }) {
  return (
    <div className="relative flex justify-between items-center mb-16 px-4">
      {/* Line Container */}
      <div className="absolute top-12 left-10 right-10 h-1 z-0">
        <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
        <div 
          className="absolute inset-y-0 left-0 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 rounded-full transition-all duration-700"
          style={{ width: `${((currentStage - 1) / (STEPS.length - 1)) * 100}%` }}
        ></div>
      </div>

      {STEPS.map((step) => {
        const isCompleted = currentStage > step.id;
        const isActive = currentStage === step.id;

        return (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <span className={`mb-4 text-[11px] font-extrabold uppercase tracking-widest transition-colors duration-300 ${isActive || isCompleted ? step.color : 'text-gray-300'}`}>
              {step.name}
            </span>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 border-4 z-20 ${
              isCompleted ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white' 
              : isActive ? 'bg-[#cbd5e1] border-[#1e3a8a] text-white shadow-[0_0_15px_rgba(30,58,138,0.2)]' 
              : 'bg-[#e2e8f0] border-[#e2e8f0] text-transparent'
            }`}>
              {isCompleted && <Check className="w-5 h-5 stroke-[3px]" />}
              {isActive && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
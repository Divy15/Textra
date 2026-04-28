// @/components/OnBoarding/FormHeader.tsx
export default function FormHeader({ stepName }: { stepName: string }) {
  return (
    <div className="mb-8 pb-4 border-b border-gray-100">
      <h2 className="text-lg font-bold text-gray-700 uppercase tracking-tight">
        {stepName} Information
      </h2>
      <p className="text-sm text-gray-500">Please fill out the details below to proceed.</p>
    </div>
  );
}
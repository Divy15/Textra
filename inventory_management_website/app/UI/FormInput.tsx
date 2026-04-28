// app/UI/FormInput.tsx
import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

// Wrap with forwardRef so RHF can "hook" into the input
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, name, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={name} className="text-sm font-semibold text-gray-700 ml-1">
          {label}
        </label>
        <input
          {...props}
          autoComplete="off"
          name={name}
          ref={ref} // Attach the ref here
          className={`w-full p-3 border rounded-lg outline-none transition-all duration-200
            ${error 
              ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200' 
              : 'border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100'
            }`}
        />
        {error && (
          <span className="text-xs font-medium text-red-500 ml-1 animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
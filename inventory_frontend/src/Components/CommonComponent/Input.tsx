import React, { type InputHTMLAttributes, useId } from "react";

// 1. Define strict TypeScript interfaces for dynamic behavior
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name: string; // Made explicit for strict form handling
  width?: string; // Allows custom Tailwind width classes like 'w-full', 'w-64', or 'w-1/2'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      name,
      type = "text",
      placeholder,
      width = "w-full", // Defaults to full width if not specified
      autoComplete = "off", // Defaults to 'off' as requested
      className = "",
      ...rest
    },
    ref
  ) => {
    // Generate a unique ID for accessibility (connects label to input)
    const uniqueId = useId();

    return (
      <div className={`flex flex-col gap-1.5 ${width}`}>
        {/* Dynamic Label Display */}
        {label && (
          <label
            htmlFor={uniqueId}
            className="text-sm font-medium text-gray-700 transition-colors"
          >
            {label}
          </label>
        )}

        {/* Input Wrapper for relative positioning elements (like icons or status borders) */}
        <div className="relative">
          <input
            id={uniqueId}
            ref={ref}
            name={name}
            type={type}
            autoComplete={autoComplete}
            // If placeholder isn't passed, it defaults to undefined, which hides it naturally
            placeholder={placeholder}
            className={`
              block w-full rounded-md border px-3 py-2 text-sm text-gray-900 shadow-sm
              outline-none transition-all duration-200 ease-in-out
              placeholder:text-gray-400
              disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
              ${
                error
                  ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
              ${className}
            `}
            {...rest}
          />
        </div>

        {/* Dynamic Error Handling Architecture */}
        {error && (
          <p className="text-xs font-medium text-red-600 animate-fadeIn" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
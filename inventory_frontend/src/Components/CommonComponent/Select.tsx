import React, { type SelectHTMLAttributes, useId } from "react";

// 1. Define flexible Data shape contract interfaces
export interface SelectOption {
  id: string | number;
  name: string | number;
  [key: string]: any; // Allows passing complete objects without strict schema errors
}

// 2. Define strict TypeScript interfaces matching your custom architecture design
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  name: string; 
  width?: string; // Allows global or local custom layout widths ('w-full', 'w-64')
  options: SelectOption[] | string[] | number[]; // Accepts objects or raw arrays
  placeholder?: string; // Dynamic first option string value (e.g. "Select Category")
  optionIdKey?: string; // Overrides target configuration lookup if data array differs
  optionNameKey?: string; // Overrides text display label lookup if data array differs
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      name,
      options = [],
      placeholder = "Choose an option...",
      width = "w-full", 
      className = "",
      optionIdKey = "id",
      optionNameKey = "name",
      defaultValue = "",
      ...rest
    },
    ref
  ) => {
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

        {/* Selection Custom Interactive Layer Wrapper */}
        <div className="relative w-full">
          <select
            id={uniqueId}
            ref={ref}
            name={name}
            defaultValue={defaultValue}
            className={`
              block w-full rounded-md border px-3 py-2 text-sm text-gray-900 shadow-sm
              outline-none transition-all duration-200 ease-in-out cursor-pointer
              disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
              appearance-none bg-no-repeat
              ${
                error
                  ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }
              ${className}
            `}
            // Custom CSS native arrow injection background fallback layout logic
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "1rem"
            }}
            {...rest}
          >
            {/* Dynamic Placeholder First Default Header Option */}
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {/* Loop rendering handles object configurations or primitive standard values cleanly */}
            {options.map((option, index) => {
              if (typeof option === "object" && option !== null) {
                const idValue = option[optionIdKey];
                const labelValue = option[optionNameKey];
                return (
                  <option key={idValue ?? index} value={idValue}>
                    {labelValue}
                  </option>
                );
              }
              
              // Handle standard raw values string[] or number[] natively
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        {/* Dynamic Error Messaging Platform Container */}
        {error && (
          <p className="text-xs font-medium text-red-600 animate-fadeIn" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    { label, error, helperText, leftIcon, rightIcon, className = "", ...props },
    ref
  ) => {
    const baseClasses =
      "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200";

    const errorClasses = error
      ? "border-red-300 focus:ring-red-500"
      : "border-gray-300 focus:ring-primary-500";

    const iconClasses = leftIcon ? "pl-10" : rightIcon ? "pr-10" : "";

    const classes = `${baseClasses} ${errorClasses} ${iconClasses} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input ref={ref} className={classes} {...props} />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

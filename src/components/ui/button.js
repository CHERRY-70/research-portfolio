import React from 'react';

export function Button({ children, variant, className, ...props }) {
  const base = "px-4 py-2 rounded font-semibold";
  const style = variant === 'outline'
    ? "border border-gray-400 text-gray-700 hover:bg-gray-100"
    : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${base} ${style} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}

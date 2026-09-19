import { useId } from "react";

// <Input label="Email" type="email" error="Enter a valid email" />
// <Input as="textarea" rows={5} label="Message" />
export default function Input({ label, error, as: Tag = "input", className = "", id, ...props }) {
  const uid = useId();
  const fieldId = id || uid;
  return (
    <div>
      {label && (
        <label htmlFor={fieldId} className="mb-1 block text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <Tag
        id={fieldId}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-4 py-3 outline-none transition placeholder:text-text-muted focus:border-brand focus:ring-2 focus:ring-brand/25 ${
          error ? "border-error" : "border-light-gray"
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={`${fieldId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

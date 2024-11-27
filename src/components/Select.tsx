// SelectField.tsx

import React, { forwardRef } from 'react';

interface SelectFieldProps {
  label?: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  name?: string;
  multiple?: boolean;
  required?: boolean;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      error,
      disabled = false,
      name,
      multiple,
      required,
    },
    ref
  ) => {
    return (
      <div className="textfield-container">
        {label && (
          <label className="textfield-label">
            {label} {`${required && '*'}`}
          </label>
        )}
        <select
          className={`textfield-input ${error ? 'textfield-input-error' : ''}`}
          value={value}
          onChange={onChange}
          name={name}
          multiple={multiple}
          disabled={disabled}
          ref={ref}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="qbs-textfield-error">{error}</span>}
      </div>
    );
  }
);

export default SelectField;

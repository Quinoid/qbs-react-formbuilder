// CheckboxField.tsx

import React, { forwardRef } from 'react';

interface CheckboxFieldProps {
  label?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  name?: string;
}

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ label, checked, onChange, error, disabled = false, name }, ref) => {
    return (
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            className={`checkbox-input ${error ? 'checkbox-input-error' : ''}`}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            name={name}
            ref={ref}
          />
          {label && <span className="checkbox-text">{label}</span>}
        </label>
        {error && <span className="checkbox-error">{error}</span>}
      </div>
    );
  }
);

export default CheckboxField;

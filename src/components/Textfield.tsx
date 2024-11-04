// TextField.tsx

import React, { forwardRef } from 'react';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email' | 'checkbox' | 'number';
  required?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      error,
      disabled = false,
      type = 'text',
      name,
      required,
    },
    ref
  ) => {
    return (
      <div className="textfield-container">
        {label && (
          <label className="textfield-label">
            {label} {`${required ? '*' : ''}`}
          </label>
        )}
        <input
          type={type}
          className={`textfield-input ${error ? 'textfield-input-error' : ''}`}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
        />
        {error && <span className="textfield-error">{error}</span>}
      </div>
    );
  }
);

export default TextField;

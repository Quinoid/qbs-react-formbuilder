// DatePicker.tsx
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { CloseIcon } from './Icons';

type DatePickerProps = {
  label?: string;
  selectedDate?: Date | null;
  onChange: (date: Date | null) => void;
  required?: boolean;
  name?: string;
  error?: string;
  disabled?: boolean;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  selectedDate,
  onChange,
  required = false,
  name,
  disabled,
  error,
}) => {
  const value =
    selectedDate && selectedDate !== null ? new Date(selectedDate) : undefined;
  return (
    <div className="date-picker-component">
      <label className="date-picker-label">
        {label}
        {required ? (
          <span className="qbs-textfield-error"> {' *'}</span>
        ) : (
          ''
        )}{' '}
      </label>
      <DatePicker
        onChange={onChange}
        name={name}
        disabled={disabled}
        showYearDropdown
        selected={value}
        yearDropdownItemNumber={50}
        scrollableYearDropdown
        clearButtonClassName="clear-date-btn"
        dateFormat="dd-MM-yyyy"
        placeholderText="Select a date"
        className={`date-picker-input w-full ${
          error ? 'date-picker-input-error' : ''
        }`}
      />
      {value && !disabled && (
        <span className="clear-date-btn" onClick={() => onChange(null)}>
          <CloseIcon />
        </span>
      )}

      {error && <span className="qbs-textfield-error">{error}</span>}
    </div>
  );
};

export default CustomDatePicker;

// DatePicker.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
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
  const value = selectedDate ? moment(selectedDate).format('DD-MM-YYYY') : '';
  return (
    <div className="date-picker-component">
      <label className="date-picker-label">
        {label} {required && <span>*</span>}
      </label>
      <DatePicker
        onChange={onChange}
        name={name}
        disabled={disabled}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        className={`date-picker-input ${
          error ? 'date-picker-input-error' : ''
        }`}
        value={value}
      />
      {error && <span className="textfield-error">{error}</span>}
    </div>
  );
};

export default CustomDatePicker;

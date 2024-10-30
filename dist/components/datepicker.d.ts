import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
type DatePickerProps = {
    label?: string;
    selectedDate?: Date | null;
    onChange: (date: Date | null) => void;
    required?: boolean;
    name?: string;
    error?: string;
    disabled?: boolean;
};
declare const CustomDatePicker: React.FC<DatePickerProps>;
export default CustomDatePicker;

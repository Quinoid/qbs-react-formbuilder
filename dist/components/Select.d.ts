import React from 'react';
interface SelectFieldProps {
    label?: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    disabled?: boolean;
    name?: string;
    multiple?: boolean;
    required?: boolean;
}
declare const SelectField: React.ForwardRefExoticComponent<SelectFieldProps & React.RefAttributes<HTMLSelectElement>>;
export default SelectField;

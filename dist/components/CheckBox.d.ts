import React from 'react';
interface CheckboxFieldProps {
    label?: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled?: boolean;
    name?: string;
}
declare const CheckboxField: React.ForwardRefExoticComponent<CheckboxFieldProps & React.RefAttributes<HTMLInputElement>>;
export default CheckboxField;

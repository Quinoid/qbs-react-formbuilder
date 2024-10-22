import React from 'react';
interface TextFieldProps {
    label?: string;
    placeholder?: string;
    value?: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled?: boolean;
    type?: 'text' | 'password' | 'email' | 'checkbox';
    required?: boolean;
}
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;

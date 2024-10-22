import React from 'react';
interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'primary' | 'secondary';
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

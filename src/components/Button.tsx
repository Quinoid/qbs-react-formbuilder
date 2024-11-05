// Button.tsx

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'primary',
  disabled = false,
  className,
}) => {
  const buttonClass =
    type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary outline-button';

  return (
    <button
      className={`${buttonClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

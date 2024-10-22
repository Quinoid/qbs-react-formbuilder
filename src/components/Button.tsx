// Button.tsx

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'primary',
  disabled = false,
}) => {
  const buttonClass =
    type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

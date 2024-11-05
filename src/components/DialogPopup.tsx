// Popup.tsx

import React from 'react';
import Button from './Button';
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onSubmit?: () => void;
  actionLabel?: string;
  secondaryAction?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  actionLabel = 'Create',
  secondaryAction,
}) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          {title && <h2 className="popup-title">{title}</h2>}
          <button className="popup-close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
        <div className="popup-body">{children}</div>
        <div className=" popup-action">
          <Button label={actionLabel} onClick={onSubmit} />
          {secondaryAction}
        </div>
      </div>
    </div>
  );
};

export default Popup;

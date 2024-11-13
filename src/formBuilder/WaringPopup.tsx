import React from 'react';

import Popup from '../components/DialogPopup';
import Button from '../components/Button';

const WarningPopup: React.FC<any> = ({
  isOpen,
  setIsOpen,
  content,
  handleSubmit,
  title,
}) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={title}
      onSubmit={handleSubmit}
      actionLabel={'yes'}
      secondaryAction={
        <Button
          label="No"
          type="secondary"
          onClick={() => setIsOpen(false)}
          className="secondary-action"
        />
      }
    >
      <div className="popup-form text-sm ">
        <p> {content}</p>
      </div>
    </Popup>
  );
};

export default WarningPopup;

import React from 'react';
interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    onSubmit?: () => void;
    actionLabel?: string;
    secondaryAction?: React.ReactNode;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;

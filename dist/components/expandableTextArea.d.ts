import React, { TextareaHTMLAttributes } from 'react';
interface ExpandableTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    onDataChange: (value: string) => void;
    maxRows?: number;
    label?: string;
    required?: boolean;
    error?: string;
}
declare const ExpandableTextarea: React.ForwardRefExoticComponent<ExpandableTextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default ExpandableTextarea;

import React from 'react';
import { FieldType } from '../types';
type Props = {
    formContent?: {
        title: string;
        fields: FieldType[];
        isRepeatable: boolean;
    }[];
    updateFormContent: (data: any, msg?: string) => void;
};
declare const FormBuilder: React.FC<Props>;
export default FormBuilder;

import React from 'react';
import { FieldType } from '../types';
type Props = {
    formContent?: {
        title: string;
        fields: FieldType[];
        isRepeatable: boolean;
    }[];
};
declare const FormPreview: React.FC<Props>;
export default FormPreview;

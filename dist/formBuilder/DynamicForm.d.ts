import React from 'react';
import { FieldType } from '../types';
type Props = {
    formContent?: {
        title: string;
        fields: FieldType[];
        isRepeatable: boolean;
    }[];
    formTitle?: string;
    formValues?: any;
    updateFormContent?: (data: any, msg?: string) => Promise<boolean>;
};
declare const DynamicForm: React.FC<Props>;
export default DynamicForm;

import React from 'react';
import { FieldType } from '../types';
type Props = {
    formContent?: {
        title: string;
        fields: FieldType[];
        repeatable: boolean;
    }[];
    formTitle?: string;
    formValues?: any;
    updateFormContent?: (data: any, msg?: string) => void;
};
declare const DynamicForm: React.FC<Props>;
export default DynamicForm;

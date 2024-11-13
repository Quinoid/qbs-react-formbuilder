import React from 'react';
import { FieldType } from '../types';
type Props = {
    formContent?: {
        title: string;
        id?: string;
        sectionId?: string;
        fields: FieldType[];
        isRepeatable: boolean;
        isDuplicate?: boolean;
    }[];
    formTitle?: string;
    formValues?: any;
    updateFormContent?: (data: any, sections: any, msg?: string) => Promise<boolean>;
    updateFormSection?: (data: any, msg?: string) => void;
};
declare const DynamicForm: React.FC<Props>;
export default DynamicForm;

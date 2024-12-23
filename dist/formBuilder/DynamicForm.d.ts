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
        parentId?: string;
    }[];
    repeatLabel?: string;
    isLoading?: boolean;
    formTitle?: string;
    formValues?: any;
    sectionInfo?: React.ReactNode;
    updateFormContent?: (data: any, sections: any, msg?: string) => Promise<boolean>;
    updateFormSection?: (data: any, msg?: string) => void;
};
declare const DynamicForm: React.FC<Props>;
export default DynamicForm;

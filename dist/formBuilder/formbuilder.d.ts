import React from 'react';
type Props = {
    formContent?: {
        title: string;
        fields: any[];
        repeatable: boolean;
    }[];
    updateFormConent: (data: any, msg?: string) => void;
};
declare const FormBuilder: React.FC<Props>;
export default FormBuilder;

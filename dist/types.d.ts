export type FieldType = {
    fieldType: string;
    fieldTitle: string;
    required?: boolean;
    fileTypes?: {
        value: string;
        label: string;
    }[];
    name?: string;
    fileSize?: number;
    customErrorMessage?: string;
    maxLength?: number;
    value?: any;
    id?: string;
};
export type Section = {
    title: string;
    fields: FieldType[];
    repeatable: boolean;
};

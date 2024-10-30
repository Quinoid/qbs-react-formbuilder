export type FieldType = {
  fieldType: string; // Field type is required and must be a string
  fieldTitle: string; // Field title is required and must be a string
  required?: boolean; // Optional boolean indicating if the field is required
  fileTypes?: {
    value: string; // Value of the file type
    label: string; // Label of the file type
  }[];
  name?: string;
  fileSize?: number; // Optional number indicating maximum file size
  customErrorMessage?: string; // Optional custom error message
  maxLength?: number; // Optional max length for input
  value?: any;
  id?: string;
};
export type Section = {
  title: string;

  fields: FieldType[];
  repeatable: boolean;
};

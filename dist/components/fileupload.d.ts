import React from 'react';
type FileUploadProps = {
    allowedFileTypes?: string[];
    maxSize?: number;
    onFileChange: (file: File | null) => void;
    errors?: string;
    disabled?: boolean;
    value?: any;
    name?: string;
};
declare const FileUpload: React.FC<FileUploadProps>;
export default FileUpload;

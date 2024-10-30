import React from 'react';
type FileUploadProps = {
    allowedFileTypes?: string[];
    maxSize?: number;
    onFileChange: (file: File | null) => void;
    errors?: string;
    disabled?: boolean;
};
declare const FileUpload: React.FC<FileUploadProps>;
export default FileUpload;
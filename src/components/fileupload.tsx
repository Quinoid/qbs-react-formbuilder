import React, { useEffect, useState } from 'react';

type FileUploadProps = {
  allowedFileTypes?: string[]; // Allowed file types, e.g., ['image/png', 'application/pdf']
  maxSize?: number; // Max file size in bytes
  onFileChange: (file: File | null) => void; // Callback when file changes
  errors?: string;
  disabled?: boolean;
  value?: any;
  name?: string;
};
const fileTypes = [
  { value: 'image/jpeg', label: 'JPEG Image' },
  { value: 'image/png', label: 'PNG Image' },
  { value: 'application/pdf', label: 'PDF Document' },
  { value: 'application/msword', label: 'Word Document' },
];

const FileUpload: React.FC<FileUploadProps> = ({
  allowedFileTypes = [],
  maxSize = 3, // Default max file size is 3MB
  onFileChange,
  errors,
  disabled,
  value,
  name,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const maxFileSize = maxSize * 1024 * 1024;
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      let customAllowedFileTypes = [...allowedFileTypes];

      // Conditionally include DOCX if DOC is present
      if (customAllowedFileTypes.includes('application/msword')) {
        customAllowedFileTypes.push(
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
      }

      if (!customAllowedFileTypes.includes(selectedFile.type)) {
        const values = customAllowedFileTypes
          ?.map((allowed) =>
            fileTypes.map((type) =>
              type.value === allowed ? type.label : null
            )
          )
          .flat() // Flatten the nested arrays if `fileTypes` has multiple matches
          .filter((value) => value !== null); // Remove null values

        setError(`File type not allowed. Allowed types: ${values.join(', ')}`);
        return;
      }

      // Validate file size
      if (selectedFile.size > maxFileSize) {
        setError(`File size exceeds the limit of ${maxSize} MB`);
        return;
      }

      // If valid, set the file and clear the error
      setFile(selectedFile);
      setError(null);
      onFileChange(selectedFile);
    }
  };
  useEffect(() => {
    if (errors) {
      setError(errors);
    }
  }, [errors]);

  const handleRemoveFile = () => {
    setFile(null);
    setError(null);
    onFileChange(undefined);
  };
  const values = allowedFileTypes
    ?.map((allowed) =>
      fileTypes.map((type) => (type.value === allowed ? type.label : null))
    )
    .flat() // Flatten the nested arrays if `fileTypes` has multiple matches
    .filter((value) => value !== null);
  return (
    <div className="file-upload-container">
      <span
        style={{
          color: 'rgb(108 108 112)',
          fontSize: '12px',
          paddingTop: '5px',
          paddingBottom: '5px',
        }}
      >
        {`Upload a file (${values?.join(', ')} ). Max Size ${maxSize} MB`}
      </span>

      <label
        htmlFor={name}
        className={`file-upload-label ${disabled ? 'disabled' : ''}`}
      >
        <span className="upload-icon">📁</span>
        <span className="upload-text">
          {file || value ? 'Change File' : 'Upload File'}
        </span>
        {/* Replace with your custom icon */}
      </label>

      <input
        id={name}
        key={file?.name}
        type="file"
        name={name}
        onChange={handleFileChange}
        accept={allowedFileTypes.join(',')}
        disabled={disabled}
        style={{ display: 'none' }} // Hide the default file input
      />
      {file ? (
        <div className="uploaded-file-info">
          <p>Uploaded file: {file.name}</p>
          <button onClick={handleRemoveFile} className="remove-file-button">
            Remove
          </button>
        </div>
      ) : (
        value &&
        value !== 'null' && (
          <div className="uploaded-file-info">
            <a className="qbs-uploaded-file" href={value.link}>
              {value.name}
            </a>
          </div>
        )
      )}
      {error && <span className="qbs-textfield-error">{error}</span>}
    </div>
  );
};

export default FileUpload;

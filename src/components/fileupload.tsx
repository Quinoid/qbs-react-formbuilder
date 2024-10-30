import React, { useState, useEffect } from 'react';

type FileUploadProps = {
  allowedFileTypes?: string[]; // Allowed file types, e.g., ['image/png', 'application/pdf']
  maxSize?: number; // Max file size in bytes
  onFileChange: (file: File | null) => void; // Callback when file changes
  errors?: string;
  disabled?: boolean;
};

const FileUpload: React.FC<FileUploadProps> = ({
  allowedFileTypes = [],
  maxSize = 3072, // Default max file size is 3MB
  onFileChange,
  errors,
  disabled,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      if (!allowedFileTypes.includes(selectedFile.type)) {
        setError(
          `File type not allowed. Allowed types: ${allowedFileTypes.join(', ')}`
        );
        return;
      }

      // Validate file size
      if (selectedFile.size > maxSize) {
        setError(
          `File size exceeds the limit of ${(maxSize / 1024).toFixed(2)} KB`
        );
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
    onFileChange(null);
  };

  return (
    <div className="file-upload-container">
      <label
        htmlFor="file-upload"
        className={`file-upload-label ${disabled ? 'disabled' : ''}`}
      >
        <span className="upload-icon">📁</span>
        {/* Replace with your custom icon */}
        <span className="upload-text">
          {file ? 'Change File' : 'Upload File'}
        </span>
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        accept={allowedFileTypes.join(',')}
        disabled={disabled}
        style={{ display: 'none' }} // Hide the default file input
      />
      {file && (
        <div className="uploaded-file-info">
          <p>Uploaded file: {file.name}</p>
          <button onClick={handleRemoveFile} className="remove-file-button">
            Remove
          </button>
        </div>
      )}
      {error && <span className="textfield-error">{error}</span>}
    </div>
  );
};

export default FileUpload;

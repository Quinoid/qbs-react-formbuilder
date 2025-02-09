"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fileTypes = [
    { value: 'image/jpeg', label: 'JPEG Image' },
    { value: 'image/png', label: 'PNG Image' },
    { value: 'application/pdf', label: 'PDF Document' },
    { value: 'application/msword', label: 'Word Document' },
];
const FileUpload = ({ allowedFileTypes = [], maxSize = 3, // Default max file size is 3MB
onFileChange, errors, disabled, value, name, }) => {
    const [file, setFile] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)(null);
    const maxFileSize = maxSize * 1024 * 1024;
    const handleFileChange = (event) => {
        var _a;
        const selectedFile = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (selectedFile) {
            // Validate file type
            let customAllowedFileTypes = [...allowedFileTypes];
            // Conditionally include DOCX if DOC is present
            if (customAllowedFileTypes.includes('application/msword')) {
                customAllowedFileTypes.push('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
            }
            if (!customAllowedFileTypes.includes(selectedFile.type)) {
                const values = customAllowedFileTypes === null || customAllowedFileTypes === void 0 ? void 0 : customAllowedFileTypes.map((allowed) => fileTypes.map((type) => type.value === allowed ? type.label : null)).flat().filter((value) => value !== null); // Remove null values
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
    (0, react_1.useEffect)(() => {
        if (errors) {
            setError(errors);
        }
    }, [errors]);
    const handleRemoveFile = () => {
        setFile(null);
        setError(null);
        onFileChange(undefined);
    };
    const values = allowedFileTypes === null || allowedFileTypes === void 0 ? void 0 : allowedFileTypes.map((allowed) => fileTypes.map((type) => (type.value === allowed ? type.label : null))).flat().filter((value) => value !== null);
    return (react_1.default.createElement("div", { className: "file-upload-container" },
        react_1.default.createElement("span", { style: {
                color: 'rgb(108 108 112)',
                fontSize: '12px',
                paddingTop: '5px',
                paddingBottom: '5px',
            } }, `Upload a file (${values === null || values === void 0 ? void 0 : values.join(', ')} ). Max Size ${maxSize} MB`),
        react_1.default.createElement("label", { htmlFor: name, className: `file-upload-label ${disabled ? 'disabled' : ''}` },
            react_1.default.createElement("span", { className: "upload-icon" }, "\uD83D\uDCC1"),
            react_1.default.createElement("span", { className: "upload-text" }, file || value ? 'Change File' : 'Upload File')),
        react_1.default.createElement("input", { id: name, key: file === null || file === void 0 ? void 0 : file.name, type: "file", name: name, onChange: handleFileChange, accept: allowedFileTypes.join(','), disabled: disabled, style: { display: 'none' } }),
        file ? (react_1.default.createElement("div", { className: "uploaded-file-info" },
            react_1.default.createElement("p", null,
                "Uploaded file: ",
                file.name),
            react_1.default.createElement("button", { onClick: handleRemoveFile, className: "remove-file-button" }, "Remove"))) : (value &&
            value !== 'null' && (react_1.default.createElement("div", { className: "uploaded-file-info" },
            react_1.default.createElement("a", { className: "qbs-uploaded-file", href: value.link }, value.name)))),
        error && react_1.default.createElement("span", { className: "qbs-textfield-error" }, error)));
};
exports.default = FileUpload;
//# sourceMappingURL=fileupload.js.map
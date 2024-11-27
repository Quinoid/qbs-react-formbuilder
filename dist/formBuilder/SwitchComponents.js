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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const datepicker_1 = __importDefault(require("../components/datepicker"));
const expandableTextArea_1 = __importDefault(require("../components/expandableTextArea"));
const fileupload_1 = __importDefault(require("../components/fileupload"));
const Textfield_1 = __importDefault(require("../components/Textfield"));
const SwitchComponents = react_1.default.memo(({ field, errors, editable }) => {
    const textareaRef = (0, react_1.useRef)(null);
    const { control, register, setValue } = (0, react_hook_form_1.useFormContext)();
    const handleTextareaChange = (value) => {
        setValue(field.id, value.trimStart(), {
            shouldValidate: true,
            shouldDirty: true,
        });
    };
    const onFileChange = (value, name) => {
        setValue(name, value, { shouldValidate: true, shouldDirty: true });
    };
    const watchedFileValue = (0, react_hook_form_1.useWatch)({ name: field.id });
    switch (field.fieldType) {
        case 'text':
            return (react_1.default.createElement(Textfield_1.default, Object.assign({ disabled: !editable, type: field.fieldType }, register(field.id, {
                setValueAs: (value) => typeof value === 'string' ? value.trimStart() : value,
            }), { error: errors })));
        case 'number':
            return (react_1.default.createElement(Textfield_1.default, Object.assign({ disabled: !editable, type: field.fieldType }, register(field.id, {
                setValueAs: (value) => typeof value === 'string' && value.trim() !== ''
                    ? parseInt(value.trimStart(), 10)
                    : value
                        ? parseInt(value, 10)
                        : undefined,
            }), { error: errors })));
        case 'textArea':
            return (react_1.default.createElement(react_hook_form_1.Controller, { control: control, name: field.id, render: ({ field: { onChange, value } }) => (react_1.default.createElement(expandableTextArea_1.default, Object.assign({ onDataChange: handleTextareaChange, ref: textareaRef, label: "", value: value }, register(field.id), { error: errors, disabled: !editable, placeholder: "Enter your description here...", maxRows: 3 }))) }));
        case 'date':
            return (react_1.default.createElement(react_hook_form_1.Controller, { control: control, name: field.id, render: ({ field: { onChange, value } }) => (react_1.default.createElement(datepicker_1.default, { name: field.fieldTitle, selectedDate: value, disabled: !editable, error: errors, onChange: onChange })) }));
        case 'file':
            return (react_1.default.createElement(react_hook_form_1.Controller, { control: control, name: field.id, render: ({}) => {
                    var _a;
                    return (react_1.default.createElement(fileupload_1.default, { key: field.id, onFileChange: (file) => onFileChange(file, field.id), errors: errors, name: field.id, maxSize: field.fileSize, disabled: !editable, value: watchedFileValue, allowedFileTypes: (_a = field.fileTypes) === null || _a === void 0 ? void 0 : _a.map((type) => type.value) }));
                } }));
        default:
            return (react_1.default.createElement(Textfield_1.default, Object.assign({ disabled: !editable, type: "text" }, register(field.id, {
                setValueAs: (value) => typeof value === 'string' ? value.trimStart() : value,
            }), { error: errors })));
    }
});
exports.default = SwitchComponents;
//# sourceMappingURL=SwitchComponents.js.map
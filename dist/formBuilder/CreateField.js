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
const zod_1 = require("@hookform/resolvers/zod");
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const AutoComplete_1 = __importDefault(require("../AutoComplete"));
const CheckBox_1 = __importDefault(require("../components/CheckBox"));
const DialogPopup_1 = __importDefault(require("../components/DialogPopup"));
const Select_1 = __importDefault(require("../components/Select"));
const Textfield_1 = __importDefault(require("../components/Textfield"));
// Zod Schema for form validation
const createFieldSchema = zod_2.z
    .object({
    fieldType: zod_2.z.string().min(1, { message: 'Field type is required' }),
    fieldTitle: zod_2.z.string().min(1, { message: 'Field title is required' }),
    required: zod_2.z.boolean().optional(),
    fileTypes: zod_2.z
        .object({ value: zod_2.z.string(), label: zod_2.z.string() })
        .array()
        .optional(),
    fileSize: zod_2.z.number().optional(),
    customErrorMessage: zod_2.z.string().optional(),
    maxLenth: zod_2.z.number().optional(),
})
    .superRefine((data, ctx) => {
    // Check if fieldType is 'file'
    if (data.fieldType === 'file') {
        // Validate fileSize
        if (data.fileSize === undefined || data.fileSize <= 0) {
            ctx.addIssue({
                code: zod_2.z.ZodIssueCode.custom,
                path: ['fileSize'],
                message: 'File size must be greater than 0',
            });
        }
        // Validate fileTypes
        if (!data.fileTypes || data.fileTypes.length === 0) {
            ctx.addIssue({
                code: zod_2.z.ZodIssueCode.custom,
                path: ['fileTypes'],
                message: 'At least one option must be selected',
            });
        }
    }
});
const allowedFileTypes = [
    { value: 'image/jpeg', label: 'JPEG Image' },
    { value: 'image/png', label: 'PNG Image' },
    { value: 'application/pdf', label: 'PDF Document' },
    { value: 'application/msword', label: 'Word Document' },
];
const CreateField = ({ openField, setOpenField, onSubmitField, options, edit, data, }) => {
    var _a, _b, _c, _d, _e;
    // Use the useForm hook and bind it to the Zod schema using zodResolver
    const { register, handleSubmit, formState: { errors }, reset, control, setValue, watch, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(createFieldSchema),
    });
    // Handle form submission
    const onSubmit = (data) => {
        onSubmitField(data);
        setOpenField(false);
    };
    (0, react_1.useEffect)(() => {
        if (openField) {
            if (edit) {
                reset({
                    fieldType: data === null || data === void 0 ? void 0 : data.fieldType,
                    fieldTitle: data === null || data === void 0 ? void 0 : data.fieldTitle,
                    required: data === null || data === void 0 ? void 0 : data.required,
                    fileTypes: data === null || data === void 0 ? void 0 : data.fileTypes,
                    fileSize: data === null || data === void 0 ? void 0 : data.fileSize,
                    customErrorMessage: data === null || data === void 0 ? void 0 : data.customErrorMessage,
                    maxLenth: data === null || data === void 0 ? void 0 : data.maxLenth,
                });
            }
            else {
                reset({
                    fieldType: '',
                    fieldTitle: '',
                    required: false,
                    fileTypes: [],
                    fileSize: 0,
                    customErrorMessage: '',
                    maxLenth: 0,
                });
            }
        }
    }, [openField, data]);
    const { fieldType } = watch();
    const handleMultiChange = (0, react_1.useCallback)((e) => {
        setValue('fileTypes', e, { shouldValidate: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (react_1.default.createElement(DialogPopup_1.default, { isOpen: openField, onClose: () => setOpenField(false), actionLabel: edit ? 'Upadte' : 'Create', title: edit ? 'Update Field' : 'Add Field', onSubmit: handleSubmit(onSubmit) },
        react_1.default.createElement("div", { className: "popup-form" },
            react_1.default.createElement(Select_1.default, Object.assign({ label: "Select an option", required: true, options: options }, register('fieldType'), { error: (_a = errors.fieldType) === null || _a === void 0 ? void 0 : _a.message })),
            react_1.default.createElement(Textfield_1.default, Object.assign({ name: "fieldTitle", placeholder: "Section Title", required: true, label: "Field Description" }, register('fieldTitle'), { error: (_b = errors.fieldTitle) === null || _b === void 0 ? void 0 : _b.message })),
            fieldType === 'file' && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Textfield_1.default, Object.assign({ name: "fileSize", placeholder: "File Size", required: true, label: "File Size" }, register('fileSize', {
                    setValueAs: (value) => parseInt(value, 10) || 0,
                }), { error: (_c = errors.fileSize) === null || _c === void 0 ? void 0 : _c.message })),
                react_1.default.createElement("div", { className: "textfield-container" },
                    react_1.default.createElement(react_hook_form_1.Controller, { control: control, name: "fileTypes", render: ({ field: { onChange, value } }) => {
                            var _a;
                            return (react_1.default.createElement(AutoComplete_1.default, { onChange: handleMultiChange, label: "Select multiple options", data: allowedFileTypes, desc: "label", descId: "value", name: "fileTypes", required: true, isMultiple: true, errors: errors.fileTypes, selectedItems: (_a = watch().fileTypes) !== null && _a !== void 0 ? _a : [] }));
                        } })))),
            fieldType === 'text' ||
                (fieldType === 'number' && (react_1.default.createElement(Textfield_1.default, Object.assign({ name: "maxLenth", placeholder: "Max Length", label: "Max Length" }, register('maxLenth', {
                    setValueAs: (value) => parseInt(value, 10) || 0,
                }), { error: (_d = errors.maxLenth) === null || _d === void 0 ? void 0 : _d.message })))),
            react_1.default.createElement(Textfield_1.default, Object.assign({ name: "customErrorMessage", placeholder: "Custom Error Message", label: "Custom Error Message" }, register('customErrorMessage'), { error: (_e = errors.customErrorMessage) === null || _e === void 0 ? void 0 : _e.message })),
            react_1.default.createElement(CheckBox_1.default, Object.assign({ label: "Required" }, register('required'))))));
};
exports.default = CreateField;
//# sourceMappingURL=CreateField.js.map
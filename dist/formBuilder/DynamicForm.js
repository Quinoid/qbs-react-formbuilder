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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("@hookform/resolvers/zod");
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const Button_1 = __importDefault(require("../components/Button"));
const Icons_1 = require("../components/Icons");
const dynamicSchema_1 = require("./dynamicSchema");
const SwitchComponents_1 = __importDefault(require("./SwitchComponents"));
const DynamicForm = ({ formContent, updateFormContent, formValues, formTitle, }) => {
    const [edit, setEdit] = (0, react_1.useState)(false);
    const schema = (0, dynamicSchema_1.generateDynamicSchema)(formContent);
    const getInitialData = () => {
        if (!formValues)
            return {};
        const data = formValues;
        return data;
    };
    const methods = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(schema),
        defaultValues: getInitialData(),
    });
    (0, react_1.useEffect)(() => {
        methods.reset(getInitialData());
    }, [formValues]);
    const updateForm = (data) => __awaiter(void 0, void 0, void 0, function* () {
        const result = {};
        formContent.forEach((section) => {
            section.fields.forEach((field) => {
                const fieldValue = data[field.id];
                result[field.id] = { value: fieldValue, type: field.fieldType };
            });
        });
        const res = yield updateFormContent(result);
        console.log(res);
        if (res) {
            setEdit(false);
        }
    });
    const handleReset = () => {
        methods.reset(getInitialData());
        setEdit(false);
    };
    const { errors } = methods.formState;
    return (react_1.default.createElement("div", { className: "preview-container" },
        react_1.default.createElement("div", { className: "section-header" },
            react_1.default.createElement("span", { className: "section-header-title" }, formTitle !== null && formTitle !== void 0 ? formTitle : 'Data Collection Form'),
            react_1.default.createElement("div", { style: { display: 'flex', gap: '10px' } }, edit ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Button_1.default, { label: "Save", onClick: methods.handleSubmit(updateForm) }),
                react_1.default.createElement(Button_1.default, { label: "Cancel", type: "secondary", onClick: handleReset }))) : (react_1.default.createElement(Button_1.default, { label: "Edit", onClick: () => setEdit(true) })))),
        react_1.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, methods), formContent.map((section) => (react_1.default.createElement("div", { key: section.id, className: "preview-section" },
            react_1.default.createElement("div", { className: "preview-section-title-container" },
                react_1.default.createElement(Icons_1.SectionIcon, { className: "section-item-icon" }),
                react_1.default.createElement("div", { className: "preview-section-item-title" }, section.title)),
            section.fields.map((field) => {
                var _a;
                return (react_1.default.createElement("div", { key: field.id },
                    react_1.default.createElement("div", { className: "preview-question-title-container" },
                        react_1.default.createElement("div", { style: { display: 'flex', gap: '10px' } },
                            react_1.default.createElement(Icons_1.Question, { className: "section-item-icon" }),
                            react_1.default.createElement("div", { className: "section-field-item-title" }, field.fieldTitle)),
                        react_1.default.createElement("div", { className: "preview-section-fields", style: { maxWidth: 350 } },
                            react_1.default.createElement(SwitchComponents_1.default, { field: field, errors: (_a = errors[field.id]) === null || _a === void 0 ? void 0 : _a.message, editable: edit })))));
            })))))));
};
exports.default = DynamicForm;
//# sourceMappingURL=DynamicForm.js.map
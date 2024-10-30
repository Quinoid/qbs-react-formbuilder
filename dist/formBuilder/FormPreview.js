"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icons_1 = require("../components/Icons");
const SwitchComponents_1 = __importDefault(require("./SwitchComponents"));
const dynamicSchema_1 = require("./dynamicSchema");
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const FormPreview = ({ formContent }) => {
    const schema = (0, dynamicSchema_1.generateDynamicSchema)(formContent);
    const methods = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(schema),
    });
    return (react_1.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, methods), formContent.map((section) => (react_1.default.createElement("div", { key: section.id, className: "preview-section" },
        react_1.default.createElement("div", { className: "preview-section-title-container" },
            react_1.default.createElement(Icons_1.SectionIcon, { className: "section-item-icon" }),
            react_1.default.createElement("div", { className: "preview-section-item-title" }, section.title)),
        section.fields.map((field) => (react_1.default.createElement("div", { key: field.id },
            react_1.default.createElement("div", { className: "preview-question-title-container" },
                react_1.default.createElement("div", { style: { display: 'flex', gap: '10px' } },
                    react_1.default.createElement(Icons_1.Question, { className: "section-item-icon" }),
                    react_1.default.createElement("div", { className: "section-field-item-title" }, field.fieldTitle)),
                react_1.default.createElement("div", { className: "preview-section-fields", style: { maxWidth: 350 } },
                    react_1.default.createElement(SwitchComponents_1.default, { field: field })))))))))));
};
exports.default = FormPreview;
//# sourceMappingURL=FormPreview.js.map
"use strict";
// SelectField.tsx
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
const SelectField = (0, react_1.forwardRef)(({ label, options, value, onChange, error, disabled = false, name, multiple, required, }, ref) => {
    return (react_1.default.createElement("div", { className: "textfield-container" },
        label && (react_1.default.createElement("label", { className: "textfield-label" },
            label,
            required ? (react_1.default.createElement("span", { className: "qbs-textfield-error" }, ' *')) : (''))),
        react_1.default.createElement("select", { className: `textfield-input ${error ? 'textfield-input-error' : ''}`, value: value, onChange: onChange, name: name, multiple: multiple, disabled: disabled, ref: ref },
            react_1.default.createElement("option", { value: "", disabled: true }, "Select an option"),
            options.map((option) => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)))),
        error && react_1.default.createElement("span", { className: "qbs-textfield-error" }, error)));
});
exports.default = SelectField;
//# sourceMappingURL=Select.js.map
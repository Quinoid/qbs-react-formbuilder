"use strict";
// CheckboxField.tsx
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
const CheckboxField = (0, react_1.forwardRef)(({ label, checked, onChange, error, disabled = false, name }, ref) => {
    return (react_1.default.createElement("div", { className: "checkbox-container" },
        react_1.default.createElement("label", { className: "checkbox-label" },
            react_1.default.createElement("input", { type: "checkbox", className: `checkbox-input ${error ? 'checkbox-input-error' : ''}`, checked: checked, onChange: onChange, disabled: disabled, name: name, ref: ref }),
            label && react_1.default.createElement("span", { className: "checkbox-text" }, label)),
        error && react_1.default.createElement("span", { className: "checkbox-error" }, error)));
});
exports.default = CheckboxField;
//# sourceMappingURL=CheckBox.js.map
"use strict";
// Button.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ label, onClick, type = 'primary', disabled = false, }) => {
    const buttonClass = type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
    return (react_1.default.createElement("button", { className: buttonClass, onClick: onClick, disabled: disabled }, label));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map
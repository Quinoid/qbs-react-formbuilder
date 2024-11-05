"use strict";
// Popup.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./Button"));
const Popup = ({ isOpen, onClose, onSubmit, title, children, actionLabel = 'Create', secondaryAction, }) => {
    if (!isOpen)
        return null;
    return (react_1.default.createElement("div", { className: "popup-overlay" },
        react_1.default.createElement("div", { className: "popup-content" },
            react_1.default.createElement("div", { className: "popup-header" },
                title && react_1.default.createElement("h2", { className: "popup-title" }, title),
                react_1.default.createElement("button", { className: "popup-close", onClick: onClose, "aria-label": "Close" }, "\u00D7")),
            react_1.default.createElement("div", { className: "popup-body" }, children),
            react_1.default.createElement("div", { className: " popup-action" },
                react_1.default.createElement(Button_1.default, { label: actionLabel, onClick: onSubmit }),
                secondaryAction))));
};
exports.default = Popup;
//# sourceMappingURL=DialogPopup.js.map
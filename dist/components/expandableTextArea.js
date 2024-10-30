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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ExpandableTextarea = (0, react_1.forwardRef)((_a, ref) => {
    var { value, onDataChange, placeholder, maxRows = 5, label, required, error } = _a, rest = __rest(_a, ["value", "onDataChange", "placeholder", "maxRows", "label", "required", "error"]);
    const textareaRef = (0, react_1.useRef)(null);
    // Update local state when external value changes
    (0, react_1.useEffect)(() => {
        if (textareaRef.current) {
            textareaRef.current.value = value !== null && value !== void 0 ? value : ''; // Set value from props
            adjustHeight(); // Adjust height when value changes
        }
    }, [value]);
    // Adjust textarea height based on content
    const adjustHeight = () => {
        const textarea = (ref === null || ref === void 0 ? void 0 : ref.current) ||
            textareaRef.current; // Use the passed ref if available
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height to auto to calculate the new scrollHeight
            const rows = Math.min(Math.ceil(textarea.scrollHeight / 24), maxRows); // 24 is an approximate line height
            textarea.rows = rows; // Set the number of visible rows
        }
    };
    const handleChange = (e) => {
        const newValue = e.target.value; // Get the current value from the event
        onDataChange(newValue); // Call the onChange prop with the new value
        adjustHeight(); // Adjust height on change
    };
    return (react_1.default.createElement("div", { className: "textfield-container" },
        label && (react_1.default.createElement("label", { className: "textfield-label" },
            label,
            " ",
            `${required ? '*' : ''}`)),
        ' ',
        react_1.default.createElement("textarea", Object.assign({ ref: (node) => {
                textareaRef.current = node; // Assign the ref
                if (typeof ref === 'function') {
                    ref(node); // Call the forwarded ref if it's a function
                }
                else if (ref) {
                    ref.current = node; // Assign the ref if it's an object
                }
            }, value: value, onChange: handleChange, rows: 1, style: {
                width: '100%',
                resize: 'none',
                overflow: 'hidden',
                lineHeight: '1.5',
                padding: '8px',
                boxSizing: 'border-box', // Include padding in width
            }, className: `textarea-input ${error ? 'textfield-input-error' : ''}`, placeholder: placeholder }, rest)),
        error && react_1.default.createElement("span", { className: "textfield-error" }, error)));
});
exports.default = ExpandableTextarea;
//# sourceMappingURL=expandableTextArea.js.map
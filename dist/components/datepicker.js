"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DatePicker.tsx
const react_1 = __importDefault(require("react"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const Icons_1 = require("./Icons");
const CustomDatePicker = ({ label, selectedDate, onChange, required = false, name, disabled, error, }) => {
    const value = selectedDate && selectedDate !== null ? new Date(selectedDate) : undefined;
    return (react_1.default.createElement("div", { className: "date-picker-component" },
        react_1.default.createElement("label", { className: "date-picker-label" },
            label,
            required ? (react_1.default.createElement("span", { className: "qbs-textfield-error" },
                " ",
                ' *')) : (''),
            ' '),
        react_1.default.createElement(react_datepicker_1.default, { onChange: onChange, name: name, disabled: disabled, showYearDropdown: true, selected: value, yearDropdownItemNumber: 50, scrollableYearDropdown: true, clearButtonClassName: "clear-date-btn", dateFormat: "dd-MM-yyyy", placeholderText: "Select a date", className: `date-picker-input w-full ${error ? 'date-picker-input-error' : ''}` }),
        value && !disabled && (react_1.default.createElement("span", { className: "clear-date-btn", onClick: () => onChange(null) },
            react_1.default.createElement(Icons_1.CloseIcon, null))),
        error && react_1.default.createElement("span", { className: "qbs-textfield-error" }, error)));
};
exports.default = CustomDatePicker;
//# sourceMappingURL=datepicker.js.map
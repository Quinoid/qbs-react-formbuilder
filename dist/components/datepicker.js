"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DatePicker.tsx
const react_1 = __importDefault(require("react"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const moment_1 = __importDefault(require("moment"));
const CustomDatePicker = ({ label, selectedDate, onChange, required = false, name, disabled, error, }) => {
    const value = selectedDate ? (0, moment_1.default)(selectedDate).format('DD-MM-YYYY') : '';
    return (react_1.default.createElement("div", { className: "date-picker-component" },
        react_1.default.createElement("label", { className: "date-picker-label" },
            label,
            " ",
            required && react_1.default.createElement("span", null, "*")),
        react_1.default.createElement(react_datepicker_1.default, { onChange: onChange, name: name, disabled: disabled, dateFormat: "dd/MM/yyyy", placeholderText: "Select a date", className: `date-picker-input ${error ? 'date-picker-input-error' : ''}`, value: value }),
        error && react_1.default.createElement("span", { className: "textfield-error" }, error)));
};
exports.default = CustomDatePicker;
//# sourceMappingURL=datepicker.js.map
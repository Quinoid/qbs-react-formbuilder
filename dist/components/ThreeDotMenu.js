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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Icons_1 = require("./Icons");
// ThreeDotMenuDropdown component
const ThreeDotMenuDropdown = ({ options, handleMenuAction }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const menuRef = (0, react_1.useRef)(null);
    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    // Close the dropdown if clicked outside of it
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (react_1.default.createElement("div", { className: "menu-container", ref: menuRef, style: { position: 'relative' } },
        react_1.default.createElement("button", { className: "three-dot-button", onClick: toggleDropdown, style: buttonStyle },
            react_1.default.createElement(Icons_1.ThreeDot, null)),
        isOpen && (react_1.default.createElement("div", { className: "dropdown-menu", style: dropdownStyle },
            react_1.default.createElement("ul", { style: menuStyle }, options.map((option, index) => (react_1.default.createElement("li", { className: "menu-item", onClick: () => {
                    handleMenuAction(option, index), setIsOpen(false);
                } },
                react_1.default.createElement("span", null, option.icon),
                react_1.default.createElement("span", null, option.label)))))))));
};
exports.default = ThreeDotMenuDropdown;
// Styles (You can replace these with your own CSS or use styled-components)
const buttonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
};
const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    zIndex: 10,
    minWidth: '200px',
};
const menuStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: '0.5rem 0',
};
// Example of usage
//# sourceMappingURL=ThreeDotMenu.js.map
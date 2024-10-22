"use strict";
// import React from 'react';
// const Tooltip: React.FC<any> = ({ useRef, useState }) => {
//   return (
//     <div className="tooltip-wrapper">
//       {children}
//       <div className="tooltip-content">{title}</div>
//     </div>
//   );
// };
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
// export default Tooltip;
const react_1 = __importStar(require("react"));
const ToolTip = ({ title, children }) => {
    const [dropdownPosition, setDropdownPosition] = (0, react_1.useState)('bottom-position');
    const dropRef = (0, react_1.useRef)(null);
    const menuButtonRef = (0, react_1.useRef)(null);
    const adjustDropdownPosition = () => {
        var _a;
        if (menuButtonRef.current && dropRef.current) {
            const inputBoxRect = (_a = menuButtonRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const spaceAbove = inputBoxRect.top;
            const spaceBelow = viewportHeight - inputBoxRect.bottom;
            if (spaceAbove > spaceBelow) {
                if (spaceAbove > 90 && spaceBelow < 120) {
                    setDropdownPosition('top-position');
                }
                else {
                    setDropdownPosition('bottom-position');
                }
            }
            else {
                const diff = spaceBelow - spaceAbove;
                if (spaceAbove > 90 && spaceBelow > 90 && diff < 90) {
                    setDropdownPosition('top-position');
                }
                else {
                    setDropdownPosition('bottom-position');
                }
            }
        }
    };
    return (react_1.default.createElement("div", { className: `qbs-table-tooltip ${dropdownPosition == 'bottom-position' ? 'down' : 'up'} ` },
        react_1.default.createElement("span", { ref: menuButtonRef, style: { display: 'flex' }, onMouseEnter: () => adjustDropdownPosition() }, children),
        react_1.default.createElement("span", { ref: dropRef, className: `tooltiptext ` }, title)));
};
exports.default = ToolTip;
//# sourceMappingURL=tootltip.js.map
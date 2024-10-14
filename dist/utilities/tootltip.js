"use strict";
// import React from 'react';
// const Tooltip: React.FC<any> = ({ children, title }) => {
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
var react_1 = __importStar(require("react"));
var ToolTip = function (_a) {
    var title = _a.title, children = _a.children;
    var _b = (0, react_1.useState)('bottom-position'), dropdownPosition = _b[0], setDropdownPosition = _b[1];
    var dropRef = (0, react_1.useRef)(null);
    var menuButtonRef = (0, react_1.useRef)(null);
    var adjustDropdownPosition = function () {
        var _a;
        if (menuButtonRef.current && dropRef.current) {
            var inputBoxRect = (_a = menuButtonRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            var viewportHeight = window.innerHeight;
            var spaceAbove = inputBoxRect.top;
            var spaceBelow = viewportHeight - inputBoxRect.bottom;
            console.log(spaceAbove, spaceBelow);
            if (spaceAbove > spaceBelow) {
                if (spaceAbove > 90 && spaceBelow < 120) {
                    setDropdownPosition('top-position');
                }
                else {
                    setDropdownPosition('bottom-position');
                }
            }
            else {
                var diff = spaceBelow - spaceAbove;
                if (spaceAbove > 90 && spaceBelow > 90 && diff < 90) {
                    setDropdownPosition('top-position');
                }
                else {
                    setDropdownPosition('bottom-position');
                }
            }
        }
    };
    return (react_1.default.createElement("div", { className: "qbs-table-tooltip ".concat(dropdownPosition == 'bottom-position' ? 'down' : 'up', " ") },
        react_1.default.createElement("span", { ref: menuButtonRef, style: { display: 'flex' }, onMouseEnter: function () { return adjustDropdownPosition(); } }, children),
        react_1.default.createElement("span", { ref: dropRef, className: "tooltiptext " }, title)));
};
exports.default = ToolTip;
//# sourceMappingURL=tootltip.js.map
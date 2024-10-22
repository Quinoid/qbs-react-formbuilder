"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateIcon = exports.Question = exports.SectionIcon = exports.PlusIcon = exports.DeleteIcon = exports.EditIcon = exports.ThreeDot = exports.ArrowIcon = void 0;
const react_1 = __importDefault(require("react"));
const ArrowIcon = ({ className = '' }) => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", width: 20, height: 20, className: `${className}` },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m8.25 4.5 7.5 7.5-7.5 7.5" })));
};
exports.ArrowIcon = ArrowIcon;
const ThreeDot = ({ className }) => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: `${className}`, fill: "none", viewBox: "0 0 24 24", width: 20, height: 20, stroke: "currentColor" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" })));
};
exports.ThreeDot = ThreeDot;
const EditIcon = () => {
    return (react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M9.11992 2.07684H7.49833C3.44435 2.07684 1.82275 3.6863 1.82275 7.70996V12.5383C1.82275 16.562 3.44435 18.1715 7.49833 18.1715H12.3631C16.4171 18.1715 18.0387 16.562 18.0387 12.5383V10.9289", stroke: "#959393", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M6.8171 9.23891C6.57386 9.48033 6.33062 9.95512 6.28197 10.3012L5.93333 12.7234C5.8036 13.6005 6.42791 14.2121 7.31168 14.0914L9.75218 13.7454C10.0927 13.6971 10.5711 13.4557 10.8224 13.2143L17.2115 6.873C18.3142 5.77857 18.8331 4.50709 17.2115 2.89763C15.5899 1.28817 14.3089 1.8032 13.2062 2.89763L6.8171 9.23891Z", stroke: "#959393", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M12.29 3.80688C12.8333 5.73019 14.3495 7.23504 16.2954 7.78225", stroke: "#959393", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
exports.EditIcon = EditIcon;
const DeleteIcon = () => {
    return (react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M12.666 4.66667L12.0878 12.7617C12.038 13.4594 11.4574 14 10.7579 14H5.24084C4.54132 14 3.96073 13.4594 3.9109 12.7617L3.33268 4.66667M6.66602 7.33333V11.3333M9.33268 7.33333V11.3333M9.99935 4.66667V2.66667C9.99935 2.29848 9.70087 2 9.33268 2H6.66602C6.29783 2 5.99935 2.29848 5.99935 2.66667V4.66667M2.66602 4.66667H13.3327", stroke: "#222222", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
exports.DeleteIcon = DeleteIcon;
const PlusIcon = () => {
    return (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7.0013 1.66797V7.0013M7.0013 7.0013V12.3346M7.0013 7.0013H12.3346M7.0013 7.0013L1.66797 7.0013", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
exports.PlusIcon = PlusIcon;
const SectionIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "size-6", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" })));
};
exports.SectionIcon = SectionIcon;
const Question = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "size-6", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" })));
};
exports.Question = Question;
const DuplicateIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "size-6", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" })));
};
exports.DuplicateIcon = DuplicateIcon;
//# sourceMappingURL=Icons.js.map
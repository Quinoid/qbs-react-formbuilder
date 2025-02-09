"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyIcon = exports.CloseIcon = exports.DuplicateIcon = exports.Question = exports.SectionIcon = exports.PlusIcon = exports.DeleteIcon = exports.EditIcon = exports.ThreeDot = exports.ArrowIcon = void 0;
const react_1 = __importDefault(require("react"));
const ArrowIcon = ({ className = '' }) => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", width: 20, height: 20, className: `${className}` },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m8.25 4.5 7.5 7.5-7.5 7.5" })));
};
exports.ArrowIcon = ArrowIcon;
const ThreeDot = ({ className }) => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: `${className}`, fill: "none", viewBox: "0 0 24 24", width: 20, height: 20, stroke: "currentColor" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" })));
};
exports.ThreeDot = ThreeDot;
const EditIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" })));
};
exports.EditIcon = EditIcon;
const DeleteIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" })));
};
exports.DeleteIcon = DeleteIcon;
const PlusIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" })));
};
exports.PlusIcon = PlusIcon;
const SectionIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" })));
};
exports.SectionIcon = SectionIcon;
const Question = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", style: {
            width: '20px',
            height: '20px',
            minWidth: '20px',
            minHeight: '20px',
        }, strokeWidth: "1.5", stroke: "currentColor", className: "size-6", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" })));
};
exports.Question = Question;
const DuplicateIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", width: "20", height: "20" },
        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" })));
};
exports.DuplicateIcon = DuplicateIcon;
const CloseIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-x" },
        react_1.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        react_1.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })));
};
exports.CloseIcon = CloseIcon;
const EmptyIcon = () => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "148", height: "132", fill: "none", viewBox: "0 0 148 132" },
        react_1.default.createElement("circle", { cx: "73.892", cy: "65.924", r: "63.212", fill: "#717171", fillOpacity: "0.08" }),
        react_1.default.createElement("circle", { cx: "73.892", cy: "65.924", r: "43.906", fill: "#717171", fillOpacity: "0.08" }),
        react_1.default.createElement("path", { stroke: "#797979", strokeLinecap: "round", strokeWidth: "3", d: "M131.023 114.985H17.539M143.03 114.985h-7.576M13.124 114.985H9.903M5.883 114.985h-.295" }),
        react_1.default.createElement("path", { fill: "#fff", d: "M40.531 49.985l6.83-3.163V30.717a7.41 7.41 0 017.41-7.41h42.173a7.41 7.41 0 017.41 7.41v16.105l3.9.797 14.208 39.694v26.572H28.511V87.313l12.02-37.328z" }),
        react_1.default.createElement("path", { fill: "#797979", d: "M122.101 15.104l-.661-3.529 3.529-.66.661 3.528 3.529-.661.662 3.529-3.53.661.662 3.53-3.529.66-.662-3.528-3.529.661-.661-3.53 3.529-.66z" }),
        react_1.default.createElement("path", { fill: "#797979", fillRule: "evenodd", d: "M34.535 39.728c-3.721-1.297-4.65-6.256-1.652-8.813.856-.73 1.275-.925 2.465-1.148 1.19-.223 1.651-.193 2.713.178 2.698.94 4.09 3.9 3.129 6.654-.94 2.698-3.9 4.09-6.655 3.129zm2.125-3.133c1.566-.293 1.99-2.423.651-3.279a1.812 1.812 0 00-2.772 1.882c.191 1.018 1.066 1.595 2.12 1.397z", clipRule: "evenodd" }),
        react_1.default.createElement("path", { fill: "#797979", d: "M23.724 55.458l-.662-3.53 3.53-.66.66 3.529 3.53-.662.661 3.53-3.529.66.661 3.53-3.529.661-.661-3.529-3.53.661-.66-3.529 3.529-.661z" }),
        react_1.default.createElement("path", { fill: "#797979", fillRule: "evenodd", d: "M124.745 63.007c-3.722-1.297-4.651-6.256-1.652-8.813.856-.73 1.275-.924 2.465-1.147 1.19-.223 1.651-.193 2.713.177 2.698.94 4.089 3.9 3.128 6.655-.94 2.698-3.899 4.089-6.654 3.128zm2.124-3.133c1.566-.293 1.99-2.423.652-3.278a1.812 1.812 0 00-2.772 1.881c.191 1.018 1.066 1.595 2.12 1.398z", clipRule: "evenodd" }),
        react_1.default.createElement("path", { fill: "#797979", d: "M35.445 101.667a1.39 1.39 0 100 2.779h6.431a1.39 1.39 0 000-2.779h-6.43zM34.056 107.693a1.39 1.39 0 011.39-1.389h6.43a1.39 1.39 0 110 2.779h-6.43a1.39 1.39 0 01-1.39-1.39zM65.058 105.062a1.39 1.39 0 10-2.78 0v1.678a3.242 3.242 0 003.243 3.242h17.227a3.242 3.242 0 003.242-3.242v-1.678a1.39 1.39 0 10-2.779 0v1.678a.463.463 0 01-.463.463H65.52a.463.463 0 01-.463-.463v-1.678z" }),
        react_1.default.createElement("path", { fill: "#797979", fillRule: "evenodd", d: "M44.321 45.9c-1.212 0-2.228.253-3.028.826-.807.577-1.225 1.358-1.47 2.074l-.002.008-12.783 38.794v25.168c-.092.782.239 1.635 1.017 2.239.79.614 1.951.915 3.476.915h88.966l.081-.01c1.382-.162 3.111-1.507 3.111-4.372V87.599l-13.186-39.527-.041-.083c-.456-.932-1.647-2.09-3.771-2.09h-1.582v-.072a.926.926 0 00-1.852 0v1.777a.926.926 0 001.224.878v.196h2.21c.519 0 .822.133.992.243a.914.914 0 01.254.24l12.531 37.564h-7.241v-5.612a6.93 6.93 0 00-2.321-5.183c.033-.119.051-.245.051-.374v-8.66a6.949 6.949 0 00-5.848-6.86v-.88a.926.926 0 00-1.852 0v.794H48.291v-.794a.926.926 0 00-1.852 0v.802a6.947 6.947 0 00-6.605 6.939v8.659c0 .13.018.255.051.374a6.93 6.93 0 00-2.32 5.183v5.612h-7.312l12.202-37.032c.132-.383.279-.581.456-.708.184-.132.572-.307 1.41-.307h2.824v-.174a.926.926 0 001.146-.9v-1.777a.926.926 0 10-1.852 0v.072H44.32zm-1.708 28.529a6.952 6.952 0 011.898-.263h61.769a6.95 6.95 0 011.898.263v-7.532a4.168 4.168 0 00-4.168-4.169H46.781a4.168 4.168 0 00-4.168 4.169v7.531zm67.835 6.684v5.612h-8.946c-1.136 0-2.19.595-2.776 1.569l-4.84 8.031a.463.463 0 01-.397.224H56.656a.463.463 0 01-.391-.215l-5.127-8.1a3.242 3.242 0 00-2.74-1.509h-8.055v-5.612a4.168 4.168 0 014.168-4.168h61.769a4.168 4.168 0 014.168 4.168zm10.462 8.391h-19.408a.461.461 0 00-.396.224l-4.84 8.031a3.242 3.242 0 01-2.778 1.569H56.657a3.242 3.242 0 01-2.74-1.508l-5.126-8.1a.463.463 0 00-.392-.216h-18.58v23.348c.172.102.648.293 1.713.293h88.742a.715.715 0 00.262-.203c.145-.171.375-.565.375-1.4V89.504z", clipRule: "evenodd" }),
        react_1.default.createElement("path", { fill: "#797979", d: "M47.365 57.417a.926.926 0 00.926-.927v-1.777a.926.926 0 10-1.852 0v1.777c0 .512.415.927.926.927zM104.183 57.417a.926.926 0 00.926-.927v-1.777a.926.926 0 00-1.852 0v1.777c0 .512.414.927.926.927zM47.365 52.974a.926.926 0 00.926-.927V50.27a.926.926 0 00-1.852 0v1.777c0 .512.415.927.926.927zM104.183 52.974a.926.926 0 00.926-.927V50.27a.926.926 0 00-1.852 0v1.777c0 .512.414.927.926.927zM47.365 44.088a.926.926 0 00.926-.927v-1.777a.926.926 0 10-1.852 0v1.777c0 .512.415.927.926.927zM104.183 44.088a.926.926 0 00.926-.927v-1.777a.926.926 0 00-1.852 0v1.777c0 .512.414.927.926.927zM47.365 39.645a.926.926 0 00.926-.927v-1.777a.926.926 0 10-1.852 0v1.777c0 .512.415.927.926.927zM104.183 39.645a.926.926 0 00.926-.927v-1.777a.926.926 0 00-1.852 0v1.777c0 .512.414.927.926.927zM47.365 35.202a.926.926 0 00.926-.927v-1.777a.926.926 0 10-1.852 0v1.777c0 .512.415.927.926.927zM104.183 35.202a.926.926 0 00.926-.927v-1.777a.926.926 0 00-1.852 0v1.777c0 .512.414.927.926.927zM47.365 30.758a.926.926 0 00.926-.926v-.888c0-.248.02-.49.057-.726a.926.926 0 00-1.83-.288c-.052.33-.08.67-.08 1.014v.888c0 .512.416.926.927.926zM104.183 30.758a.926.926 0 00.926-.926v-.888c0-.345-.027-.683-.079-1.014a.926.926 0 10-1.83.288c.037.236.057.478.057.726v.888c0 .512.414.926.926.926zM47.881 26.426a.926.926 0 001.294-.204c.286-.394.633-.74 1.026-1.026a.926.926 0 00-1.09-1.498c-.55.4-1.034.884-1.434 1.434a.926.926 0 00.204 1.294zM103.667 26.426a.926.926 0 00.204-1.294 6.509 6.509 0 00-1.434-1.434.926.926 0 00-1.09 1.498c.393.286.74.632 1.026 1.026a.926.926 0 001.294.204zM51.138 23.597c.08.506.554.851 1.059.772a4.67 4.67 0 01.726-.057h.914a.926.926 0 000-1.852h-.914c-.344 0-.683.026-1.014.078a.926.926 0 00-.77 1.06zM100.41 23.597a.927.927 0 00-.771-1.059 6.522 6.522 0 00-1.014-.078h-.914a.926.926 0 100 1.852h.914c.248 0 .49.02.726.057a.926.926 0 001.059-.772zM55.653 23.386c0 .511.415.926.926.926h1.828a.926.926 0 000-1.852H56.58a.926.926 0 00-.926.926zM60.223 23.386c0 .511.415.926.926.926h1.828a.926.926 0 000-1.852H61.15a.926.926 0 00-.926.926zM64.793 23.386c0 .511.415.926.926.926h1.829a.926.926 0 000-1.852h-1.829a.926.926 0 00-.926.926zM69.364 23.386c0 .511.414.926.926.926h1.828a.926.926 0 000-1.852H70.29a.926.926 0 00-.927.926zM73.934 23.386c0 .511.414.926.926.926h1.828a.926.926 0 000-1.852H74.86a.926.926 0 00-.926.926zM78.504 23.386c0 .511.415.926.926.926h1.828a.926.926 0 000-1.852H79.43a.926.926 0 00-.926.926zM83.074 23.386c0 .511.415.926.927.926h1.828a.926.926 0 000-1.852H84a.926.926 0 00-.927.926zM87.644 23.386c0 .511.415.926.927.926h1.828a.926.926 0 000-1.852H88.57a.926.926 0 00-.927.926zM92.215 23.386c0 .511.414.926.926.926h1.828a.926.926 0 000-1.852h-1.828a.926.926 0 00-.926.926zM72.178 36.453a1.39 1.39 0 10-1.965 1.965l3.797 3.797-3.797 3.798a1.39 1.39 0 001.965 1.965l3.797-3.798 3.798 3.798a1.39 1.39 0 001.965-1.965l-3.798-3.798 3.798-3.797a1.39 1.39 0 10-1.965-1.965l-3.798 3.797-3.797-3.797z" })));
};
exports.EmptyIcon = EmptyIcon;
//# sourceMappingURL=Icons.js.map
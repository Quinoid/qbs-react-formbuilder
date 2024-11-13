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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("@hookform/resolvers/zod");
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const CheckBox_1 = __importDefault(require("../components/CheckBox"));
const DialogPopup_1 = __importDefault(require("../components/DialogPopup"));
const Textfield_1 = __importDefault(require("../components/Textfield"));
const createSectionSchema = zod_2.z.object({
    title: zod_2.z.string().min(1, { message: 'Section title is required' }),
    isRepeatable: zod_2.z.boolean().optional(),
});
const CreateSection = ({ openSection, onSubmitData, setOpenSection, edit, data, }) => {
    var _a;
    const { register, handleSubmit, formState: { errors }, reset, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(createSectionSchema),
    });
    const onSubmit = (data) => {
        onSubmitData(data);
        setOpenSection(false);
    };
    (0, react_1.useEffect)(() => {
        if (openSection) {
            if (edit) {
                reset({
                    title: data === null || data === void 0 ? void 0 : data.title,
                    isRepeatable: data === null || data === void 0 ? void 0 : data.isRepeatable,
                });
            }
            else {
                reset({
                    title: '',
                    isRepeatable: false,
                });
            }
        }
    }, [openSection, data]);
    return (react_1.default.createElement(DialogPopup_1.default, { isOpen: openSection, onClose: () => setOpenSection(false), title: edit ? 'Update Section' : 'Create Section', onSubmit: handleSubmit(onSubmit), actionLabel: edit ? 'Update' : 'Create' },
        react_1.default.createElement("div", { className: "popup-form" },
            react_1.default.createElement(Textfield_1.default, Object.assign({ name: "title", placeholder: "Section Title", type: "text", label: "Section Title", required: true }, register('title', {
                setValueAs: (value) => typeof value === 'string' ? value.trimStart() : value,
            }), { error: (_a = errors.title) === null || _a === void 0 ? void 0 : _a.message })),
            react_1.default.createElement(CheckBox_1.default, Object.assign({ label: "Repeatable" }, register('isRepeatable'))))));
};
exports.default = CreateSection;
//# sourceMappingURL=CreateSection.js.map
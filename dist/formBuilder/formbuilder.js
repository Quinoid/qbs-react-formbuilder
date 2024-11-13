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
const react_1 = __importStar(require("react"));
const Button_1 = __importDefault(require("../components/Button"));
const Icons_1 = require("../components/Icons");
const ThreeDotMenu_1 = __importDefault(require("../components/ThreeDotMenu"));
const CreateField_1 = __importDefault(require("./CreateField"));
const CreateSection_1 = __importDefault(require("./CreateSection"));
const FormPreview_1 = __importDefault(require("./FormPreview"));
const WaringPopup_1 = __importDefault(require("./WaringPopup"));
const options = [
    { value: 'number', label: 'Number' },
    { value: 'text', label: 'Text' },
    { value: 'date', label: 'Date' },
    { value: 'file', label: 'File Upload' },
    { value: 'textArea', label: 'Text Area' },
];
const MenuOptions = [
    { label: 'Delete Section', slug: 'delete-section', icon: react_1.default.createElement(Icons_1.DeleteIcon, null) },
    {
        label: 'Duplicate Section',
        slug: 'duplicate-section',
        icon: react_1.default.createElement(Icons_1.DuplicateIcon, null),
    },
    { label: 'Edit Section', slug: 'edit-section', icon: react_1.default.createElement(Icons_1.EditIcon, null) },
    { label: 'Add New Field', slug: 'create-section', icon: react_1.default.createElement(Icons_1.PlusIcon, null) },
];
const FieldMenuOptions = [
    { label: 'Delete Field', slug: 'delete-field', icon: react_1.default.createElement(Icons_1.DeleteIcon, null) },
    { label: 'Edit Field', slug: 'edit-field', icon: react_1.default.createElement(Icons_1.EditIcon, null) },
];
const FormBuilder = ({ formContent, updateFormContent, isLoading, }) => {
    const [sections, setSections] = (0, react_1.useState)([]);
    const [draggedSection, setDraggedSection] = (0, react_1.useState)(null);
    const [draggedField, setDraggedField] = (0, react_1.useState)(null);
    const [editsection, setEditSection] = (0, react_1.useState)(false);
    const [editField, setEditField] = (0, react_1.useState)(false);
    const [openSection, setOpenSection] = (0, react_1.useState)(false);
    const [openField, setOpenField] = (0, react_1.useState)(false);
    const [updateKey, setUpdateKey] = (0, react_1.useState)(0);
    const [currentSection, setCurrentSection] = (0, react_1.useState)(null);
    const [currentField, setCurrentField] = (0, react_1.useState)(null);
    const [message, setMessage] = (0, react_1.useState)('');
    const [openPreview, setOpenPreview] = (0, react_1.useState)(false);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [isRemoveOpen, setIsRemoveOpen] = (0, react_1.useState)(false);
    const [currentFieldId, setcurrentFieldId] = (0, react_1.useState)(null);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        setSections(formContent);
    }, [formContent]);
    (0, react_1.useEffect)(() => {
        if (updateKey !== 0) {
            updateFormContent(sections, message);
        }
    }, [updateKey]);
    const handleDragStartSection = (section) => {
        setDraggedSection(section);
    };
    const handleDragOverSection = (e) => {
        e.preventDefault();
    };
    const handleDropSection = (section) => {
        const newSections = sections.filter((sect) => sect.id !== draggedSection.id);
        const index = newSections.findIndex((sect) => sect.id === section.id);
        newSections.splice(index, 0, draggedSection);
        setSections(newSections);
        setMessage('Section Position Updated');
        setDraggedSection(null);
        setUpdateKey(updateKey + 1);
    };
    const handleDragStartField = (sectionId, field) => {
        setDraggedField({ sectionId, field });
    };
    const handleDragOverField = (e) => {
        e.preventDefault();
    };
    const handleDropField = (sectionId, field) => {
        const newSections = sections.map((section) => {
            if (section.id === draggedField.sectionId) {
                const updatedFields = section.fields.filter((f) => f.id !== draggedField.field.id);
                section.fields = updatedFields;
            }
            if (section.id === sectionId) {
                const index = section.fields.findIndex((f) => f.id === field.id);
                section.fields.splice(index, 0, draggedField.field);
            }
            return section;
        });
        setSections(newSections);
        setMessage('Section Field Position Updated');
        setDraggedField(null);
        setUpdateKey(updateKey + 1);
    };
    const onSubmit = (data) => {
        if (editsection) {
            const result = sections.map((sect) => sect.id === (currentSection === null || currentSection === void 0 ? void 0 : currentSection.id) ? Object.assign(Object.assign({}, sect), data) : sect);
            setSections(result);
            setEditSection(false);
            setMessage('Section Updated Successfully');
        }
        else {
            setSections([
                ...sections,
                Object.assign(Object.assign({}, data), { id: Date.now().toString(), fields: [] }),
            ]);
            setOpenSection(false);
            setMessage('Section Created Successfully');
        }
        setUpdateKey(updateKey + 1);
    };
    const onSubmitField = (data) => {
        if (editField) {
            const result = sections.map((sect) => sect.id === (currentSection === null || currentSection === void 0 ? void 0 : currentSection.id)
                ? Object.assign(Object.assign({}, sect), { fields: sect.fields.map((field) => field.id === (currentField === null || currentField === void 0 ? void 0 : currentField.id) ? Object.assign(Object.assign({}, field), data) : field) }) : sect);
            setMessage('Section Field Updated Successfully');
            setSections(result);
            setEditField(false);
        }
        else {
            const result = sections.map((sect) => sect.id === (currentSection === null || currentSection === void 0 ? void 0 : currentSection.id)
                ? Object.assign(Object.assign({}, sect), { fields: [
                        Object.assign(Object.assign({}, data), { id: data.fieldType === 'file'
                                ? `file-${Date.now().toString()}`
                                : Date.now().toString() }),
                        ...sect.fields,
                    ] }) : sect);
            setSections(result);
            setOpenField(false);
            setMessage('Section Field Created Successfully');
        }
        setUpdateKey(updateKey + 1);
    };
    const handleOpenFieldCreate = (section) => {
        setCurrentSection(section);
        setOpenField(true);
        setEditField(false);
    };
    const handleDelete = (sectionId) => {
        setSections(sections.filter((section) => section.id !== sectionId));
        setMessage('Section Deleted Successfully');
        setUpdateKey(updateKey + 1);
    };
    const handleDeleteField = (sectionId, fieldId) => {
        setSections(sections.map((section) => {
            if (section.id === sectionId) {
                return Object.assign(Object.assign({}, section), { fields: section.fields.filter((field) => field.id !== fieldId) });
            }
            return section;
        }));
        setMessage('Section Field Deleted Successfully');
        setUpdateKey(updateKey + 1);
    };
    const handleEditSection = (sectionId) => {
        setEditSection(true);
        setCurrentSection(sectionId);
        setOpenSection(true);
    };
    const handleEditField = (sectionId, fieldId) => {
        setEditField(true);
        setCurrentSection(sectionId);
        setOpenField(true);
        setCurrentField(fieldId);
    };
    const handleDuplicate = (section) => {
        var _a;
        const result = [...sections]; // Create a shallow copy of sections
        const newSection = Object.assign(Object.assign({}, section), { id: `${Date.now().toString()}`, fields: (_a = section === null || section === void 0 ? void 0 : section.fields) === null || _a === void 0 ? void 0 : _a.map((field, index) => (Object.assign(Object.assign({}, field), { id: `dup-${index}-${Date.now().toString()}` }))) });
        result.push(newSection); // Add the new section with updated fields
        setSections(result); // Update state with the new sections array
        setUpdateKey(updateKey + 1); // Trigger an update
    };
    const handleMenuAction = (option, section) => {
        if (option.slug === 'delete-section') {
            setCurrentIndex(section === null || section === void 0 ? void 0 : section.id);
            setIsOpen(true);
        }
        else if (option.slug === 'duplicate-section') {
            handleDuplicate(section);
        }
        else if (option.slug === 'edit-section') {
            handleEditSection(section);
        }
        else if (option.slug === 'create-section') {
            handleOpenFieldCreate(section);
        }
    };
    const handleFieldMenuAction = (option, section, field) => {
        if (option.slug === 'delete-field') {
            setcurrentFieldId(field === null || field === void 0 ? void 0 : field.id);
            setCurrentIndex(section === null || section === void 0 ? void 0 : section.id);
            setIsRemoveOpen(true);
        }
        else if (option.slug === 'duplicate-field') {
            handleDeleteField(section === null || section === void 0 ? void 0 : section.id, field);
        }
        else if (option.slug === 'edit-field') {
            handleEditField(section, field);
        }
    };
    const handleRemoveField = () => {
        handleDeleteField(currentIndex, currentFieldId);
        setIsRemoveOpen(false);
    };
    const handleDeleteSection = () => {
        handleDelete(currentIndex);
        setIsOpen(false);
    };
    if (openPreview) {
        return (react_1.default.createElement("div", { className: "preview-container" },
            react_1.default.createElement("div", { className: "section-header" },
                react_1.default.createElement("span", { className: "section-header-title" }, "Form Builder"),
                react_1.default.createElement("div", { style: { display: 'flex', gap: '10px' } },
                    react_1.default.createElement(Button_1.default, { label: "Back to Form Builder", onClick: () => setOpenPreview(false) }))),
            react_1.default.createElement(FormPreview_1.default, { formContent: sections })));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "section-container" }, sections && sections.length > 0 ? (react_1.default.createElement("div", { className: "section-items" },
            react_1.default.createElement("div", { className: "section-header" },
                react_1.default.createElement("span", { className: "section-header-title" }, "Form Builder"),
                react_1.default.createElement("div", { style: { display: 'flex', gap: '10px' } },
                    react_1.default.createElement(Button_1.default, { label: "Preview", onClick: () => setOpenPreview(true) }),
                    react_1.default.createElement(Button_1.default, { label: "Create New Section", onClick: () => setOpenSection(true) }))),
            sections.map((section) => {
                var _a, _b;
                return (react_1.default.createElement("div", { key: section.id, className: "section-item-container", draggable: true, onDragStart: () => handleDragStartSection(section), onDragOver: handleDragOverSection, onDrop: () => handleDropSection(section) },
                    react_1.default.createElement("div", { className: "section-item" },
                        react_1.default.createElement("div", { className: "section-title-container" },
                            react_1.default.createElement(Icons_1.SectionIcon, { className: "section-item-icon" }),
                            react_1.default.createElement("div", { className: "section-item-title" }, section.title)),
                        react_1.default.createElement("div", { className: "section-item-actions" },
                            react_1.default.createElement(ThreeDotMenu_1.default, { options: MenuOptions, handleMenuAction: (option) => handleMenuAction(option, section) }))),
                    ((_a = section === null || section === void 0 ? void 0 : section.fields) === null || _a === void 0 ? void 0 : _a.length) > 0 && (react_1.default.createElement("div", { className: "section-field-item-container" }, (_b = section === null || section === void 0 ? void 0 : section.fields) === null || _b === void 0 ? void 0 : _b.map((field) => (react_1.default.createElement("div", { key: field.id, className: "section-field-item", draggable: true, onDragStart: () => handleDragStartField(section.id, field), onDragOver: handleDragOverField, onDrop: () => handleDropField(section.id, field) },
                        react_1.default.createElement("div", { className: "section-title-container" },
                            react_1.default.createElement(Icons_1.Question, { className: "section-item-icon" }),
                            react_1.default.createElement("div", { className: "section-field-item-title" }, field.fieldTitle)),
                        react_1.default.createElement("div", { className: "section-field-item-actions" },
                            react_1.default.createElement(ThreeDotMenu_1.default, { options: FieldMenuOptions, handleMenuAction: (option) => handleFieldMenuAction(option, section, field) })))))))));
            }))) : (!isLoading && (react_1.default.createElement("div", { className: "flexbox-center" },
            react_1.default.createElement("div", { style: {
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    alignItems: 'center',
                } },
                react_1.default.createElement("div", { className: "flex flex-col items-center justify-center py-10" },
                    react_1.default.createElement(Icons_1.EmptyIcon, null),
                    react_1.default.createElement("p", { className: "text-sm font-bold text-primaryText dark:text-white mt-5" }, "No Sections available"),
                    react_1.default.createElement("p", { className: "text-xxs leading-4 font-medium text-secondary dark:text-white mb-5" }, "Add a new section by clicking on the \u201CCreate\u201D button below"),
                    react_1.default.createElement(Button_1.default, { label: "Create", onClick: () => setOpenSection(true) }))))))),
        react_1.default.createElement(CreateSection_1.default, { openSection: openSection, setOpenSection: setOpenSection, onSubmitData: onSubmit, edit: editsection, data: currentSection }),
        react_1.default.createElement(CreateField_1.default, { options: options, edit: editField, data: currentField, openField: openField, setOpenField: setOpenField, onSubmitField: onSubmitField }),
        react_1.default.createElement(WaringPopup_1.default, { isOpen: isOpen, setIsOpen: setIsOpen, content: "Are you sure you want to delete this section?", handleSubmit: () => handleDeleteSection(), title: "Delete Section" }),
        react_1.default.createElement(WaringPopup_1.default, { isOpen: isRemoveOpen, setIsOpen: setIsRemoveOpen, content: "Are you sure you want to delete this field?", handleSubmit: () => handleRemoveField(), title: "Delete Field" })));
};
exports.default = FormBuilder;
//# sourceMappingURL=formbuilder.js.map
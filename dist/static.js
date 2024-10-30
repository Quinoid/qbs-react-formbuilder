"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formSections = void 0;
exports.formSections = [
    {
        title: 'Personal Information',
        fields: [
            {
                fieldType: 'text',
                fieldTitle: 'What is your full first id as it appears on your official identification documents?',
                required: true,
                id: 'id',
                maxLength: 50,
            },
            {
                fieldType: 'textArea',
                fieldTitle: 'What is your full last id as it appears on your official identification documents?',
                required: true,
                id: 'sadasd',
                maxLength: 50,
            },
            {
                fieldType: 'date',
                fieldTitle: 'Could you please provide a contact phone number where we can reach you?',
                required: false,
                id: 'sadaasdsd',
            },
        ],
        repeatable: false,
    },
    {
        title: 'Document Upload',
        fields: [
            {
                fieldType: 'file',
                fieldTitle: 'Please upload a clear scan or photo of your passport (PDF, JPG, or PNG formats accepted).',
                required: true,
                fileSize: 10,
                id: 'sdflksdfosdf',
                fileTypes: [
                    { value: 'pdf', label: 'PDF' },
                    { value: 'jpg', label: 'JPG' },
                    { value: 'png', label: 'PNG' },
                ],
            },
            {
                fieldType: 'file',
                fieldTitle: 'If applicable, please upload a clear scan or photo of your driver’s license (PDF or JPG formats accepted).',
                required: false,
                fileSize: 5,
                id: 'kjsndfknskjdfn',
                fileTypes: [
                    { value: 'pdf', label: 'PDF' },
                    { value: 'jpg', label: 'JPG' },
                ],
            },
        ],
        repeatable: true,
    },
    {
        title: 'Employment Details',
        fields: [
            {
                fieldType: 'text',
                fieldTitle: 'Please provide the full id of the company where you are currently employed or were most recently employed.',
                required: true,
                maxLength: 100,
                id: 'dsfmnsdflsdf',
            },
            {
                fieldType: 'text',
                fieldTitle: 'What was your job title or position within the company?',
                required: false,
                id: 'sdfsonfosfd',
            },
            {
                fieldType: 'date',
                fieldTitle: 'When did you start your position at this company? (Please provide the start date)',
                required: true,
                id: 'sdfsdf',
            },
        ],
        repeatable: false,
    },
];
exports.default = exports.formSections;
//# sourceMappingURL=static.js.map
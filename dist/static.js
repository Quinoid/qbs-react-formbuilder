"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formSections = void 0;
exports.formSections = [
    {
        id: '1730275568243',
        title: 'Section 1',
        fields: [
            {
                id: '1730275740775',
                fileSize: 0,
                maxLength: 0,
                required: false,
                fieldType: 'date',
                fileTypes: [],
                fieldTitle: 'Your Birthday?',
                customErrorMessage: 'sdfsfsfsd',
            },
            {
                id: '1730275659290',
                fileSize: 0,
                maxLength: 100,
                required: true,
                fieldType: 'number',
                fileTypes: [],
                fieldTitle: 'Your Age?',
                customErrorMessage: 'Age must be number',
            },
            {
                id: '1730275681654',
                fileSize: 0,
                maxLength: 20,
                required: false,
                fieldType: 'text',
                fileTypes: [],
                fieldTitle: 'Your Name?',
                customErrorMessage: '',
            },
        ],
        isRepeatable: true,
    },
    {
        id: '1730275721696',
        title: 'Section 2',
        fields: [
            {
                id: '1730275995437',
                fileSize: 0,
                maxLength: 0,
                required: false,
                fieldType: 'textArea',
                fileTypes: [],
                fieldTitle: 'Quote Note',
                customErrorMessage: '',
            },
            {
                id: '1730275978729',
                fileSize: 5000,
                maxLength: 0,
                required: true,
                fieldType: 'file',
                fileTypes: [
                    {
                        label: 'PDF Document',
                        value: 'application/pdf',
                    },
                    {
                        label: 'Word Document',
                        value: 'application/msword',
                    },
                ],
                fieldTitle: 'Upload Quote Document',
                customErrorMessage: 'File must be of type .pdf,.doc,.docx and file size cannot be more than 5MB',
            },
        ],
        isRepeatable: false,
    },
    {
        id: '1730276003462',
        title: 'Section 3',
        fields: [
            {
                id: '1730276251381',
                fileSize: 0,
                maxLength: 0,
                required: false,
                fieldType: 'textArea',
                fileTypes: [],
                fieldTitle: 'Notes',
                customErrorMessage: '',
            },
            {
                id: '1730276233733',
                fileSize: 10,
                maxLength: 0,
                required: false,
                fieldType: 'file',
                fileTypes: [
                    {
                        label: 'PDF Document',
                        value: 'application/pdf',
                    },
                    {
                        label: 'JPEG Image',
                        value: 'image/jpeg',
                    },
                    {
                        label: 'PNG Image',
                        value: 'image/png',
                    },
                    {
                        label: 'Word Document',
                        value: 'application/msword',
                    },
                ],
                fieldTitle: 'Files',
                customErrorMessage: '',
            },
            {
                id: '1730276182454',
                fileSize: 0,
                maxLength: 0,
                required: false,
                fieldType: 'date',
                fileTypes: [],
                fieldTitle: 'Quote Date',
                customErrorMessage: 'Future Dates not allowed',
            },
            {
                id: '1730276143366',
                fileSize: 0,
                maxLength: 0,
                required: false,
                fieldType: 'text',
                fileTypes: [],
                fieldTitle: 'Customer Message',
                customErrorMessage: '',
            },
            {
                id: '1730276021886',
                fileSize: 0,
                maxLength: 6,
                required: false,
                fieldType: 'number',
                fileTypes: [],
                fieldTitle: 'Quote Amount',
                customErrorMessage: '',
            },
        ],
        isRepeatable: false,
    },
    {
        id: '1730276959610',
        title: 'Section 4',
        fields: [
            {
                id: '1730277042521',
                fileSize: 0,
                maxLength: 0,
                required: false,
                fieldType: 'text',
                fileTypes: [],
                fieldTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac sagittis dui. Pellentesque euismod tempor orci et faucibus. Donec sed justo fringilla, blandit enim at, malesuada tellus. Pellentesque nisi leo, tincidunt ut eros sit amet, finibus hendrerit diam. In pharetra, nunc id ultricies lacinia, orci purus sollicitudin ante, at convallis mauris enim sed libero. ',
                customErrorMessage: '',
            },
            {
                id: '1730276996890',
                fileSize: 0,
                maxLength: 0,
                required: true,
                fieldType: 'number',
                fileTypes: [],
                fieldTitle: 'On a scale of 1 to 10 (1 being "extremely quickly" and 10 being "extremely slowly"), how fast were you able to solve your problem?',
                customErrorMessage: '',
            },
        ],
        isRepeatable: false,
    },
];
exports.default = exports.formSections;
//# sourceMappingURL=static.js.map
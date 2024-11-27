"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDynamicSchema = void 0;
const zod_1 = require("zod");
const generateDynamicSchema = (sections) => {
    // Initialize the accumulator with the proper type
    const fieldSchemas = sections.reduce((acc, section) => {
        section.fields.forEach((field, index) => {
            var _a;
            let fieldSchema; // Initialize fieldSchema
            // Create a unique field name
            const uniqueFieldName = `${field.id}`;
            switch (field.fieldType) {
                case 'text':
                case 'textArea':
                    fieldSchema = zod_1.z
                        .string()
                        .regex(/^\S.*$/, 'Leading spaces are not allowed');
                    if (field.maxLength && field.maxLength > 0) {
                        fieldSchema = fieldSchema.max(field.maxLength, `Maximum length is ${field.maxLength} characters`);
                    }
                    break;
                case 'number':
                    fieldSchema = zod_1.z.number({
                        required_error: field.customErrorMessage && field.customErrorMessage !== ''
                            ? field.customErrorMessage
                            : 'This is a mandatory field',
                    });
                    if (field.maxLength && field.maxLength > 0) {
                        fieldSchema = fieldSchema.max(field.maxLength, `Maximum value is ${field.maxLength}`);
                    }
                    break;
                case 'date':
                    fieldSchema = zod_1.z
                        .union([zod_1.z.date(), zod_1.z.null(), zod_1.z.string()])
                        .refine((value) => value !== null, {
                        message: field.customErrorMessage && field.customErrorMessage !== ''
                            ? field.customErrorMessage
                            : 'Please select a date',
                    });
                    break;
                case 'file':
                    if (field.fileTypes && field.fileTypes.length > 0) {
                        fieldSchema = zod_1.z.union([
                            zod_1.z
                                .instanceof(File)
                                .refine((file) => file.size <= (field.fileSize || Infinity) * 1024 * 1024, {
                                message: field.customErrorMessage &&
                                    field.customErrorMessage !== ''
                                    ? field.customErrorMessage
                                    : `File size must be less than ${field.fileSize} MB`,
                            })
                                .refine((file) => field.fileTypes &&
                                field.fileTypes.some((type) => file.type === type.value), {
                                message: field.customErrorMessage &&
                                    field.customErrorMessage !== ''
                                    ? field.customErrorMessage
                                    : `File type must be one of the following: ${(_a = field.fileTypes) === null || _a === void 0 ? void 0 : _a.map((type) => type.value).join(', ')}`,
                            }),
                            zod_1.z.string(),
                            zod_1.z.object({
                                link: zod_1.z.string().optional(),
                                name: zod_1.z.string().optional(),
                            }),
                            zod_1.z.null().optional(), // Allow null if file is optional
                        ]);
                        // Makes the file field optional
                    }
                    else {
                        fieldSchema = zod_1.z.any(); // Fallback schema if fileTypes is empty or undefined
                    }
                    break;
                default:
                    throw new Error(`Unsupported field type: ${field.fieldType}`);
            }
            if (field.required) {
                if (field.fieldType === 'file') {
                    // For required files, ensure the file is not null or undefined
                    fieldSchema = fieldSchema.refine((file) => file instanceof File ||
                        typeof file === 'string' ||
                        typeof file === 'object', {
                        message: field.customErrorMessage && field.customErrorMessage !== ''
                            ? field.customErrorMessage
                            : 'This is a mandatory field',
                    });
                }
                else if (fieldSchema instanceof zod_1.z.ZodString) {
                    fieldSchema = fieldSchema.min(1, field.customErrorMessage && field.customErrorMessage !== ''
                        ? field.customErrorMessage
                        : `This is a mandatory field`);
                }
            }
            else {
                fieldSchema = fieldSchema.optional();
            }
            // Store field schema with unique name
            acc[uniqueFieldName] = fieldSchema;
        });
        return acc;
    }, {}); // Initialize the accumulator with the proper type
    return zod_1.z.object(fieldSchemas); // Return a single object schema
};
exports.generateDynamicSchema = generateDynamicSchema;
// Example usage with mock data
// Generate the schema dynamically
//# sourceMappingURL=dynamicSchema.js.map
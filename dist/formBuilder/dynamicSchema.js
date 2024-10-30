"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDynamicSchema = void 0;
const zod_1 = require("zod");
const generateDynamicSchema = (sections) => {
    // Initialize the accumulator with the proper type
    const fieldSchemas = sections.reduce((acc, section) => {
        section.fields.forEach((field, index) => {
            let fieldSchema; // Initialize fieldSchema
            // Create a unique field name
            const uniqueFieldName = `${field.id}`;
            switch (field.fieldType) {
                case 'text':
                case 'textArea':
                    fieldSchema = zod_1.z.string();
                    if (field.maxLength) {
                        fieldSchema = fieldSchema.max(field.maxLength, `Maximum length is ${field.maxLength} characters`);
                    }
                    break;
                case 'number':
                    fieldSchema = zod_1.z.number();
                    break;
                case 'date':
                    fieldSchema = zod_1.z
                        .union([zod_1.z.date(), zod_1.z.null()])
                        .refine((value) => value !== null, {
                        message: 'Please select a date',
                    });
                    break;
                case 'file':
                    if (field.fileTypes && field.fileTypes.length > 0) {
                        const fileTypeValues = field.fileTypes.map((type) => type.value);
                        fieldSchema = zod_1.z.object({
                            file: zod_1.z.instanceof(File),
                            size: zod_1.z.number().max(field.fileSize * 1024 * 1024, {
                                message: `File size must be less than ${field.fileSize} MB`,
                            }),
                            type: zod_1.z.enum(fileTypeValues),
                        });
                    }
                    else {
                        fieldSchema = zod_1.z.any(); // Fallback schema if fileTypes is empty or undefined
                    }
                    break;
                default:
                    throw new Error(`Unsupported field type: ${field.fieldType}`);
            }
            // Apply required validation if specified
            if (field.required) {
                if (fieldSchema instanceof zod_1.z.ZodString) {
                    fieldSchema = fieldSchema.min(1, `This is a mandatory field`);
                }
                else {
                    // Alternative handling code for when fieldSchema isn't ZodString.
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
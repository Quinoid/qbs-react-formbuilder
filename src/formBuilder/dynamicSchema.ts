import { z } from 'zod';

import { Section } from '../types';

// Define the type for dynamic field schemas
type FieldSchemas = {
  [key: string]: z.ZodTypeAny; // This allows any string as a key with Zod schema values
};

export const generateDynamicSchema = (sections: Section[]) => {
  // Initialize the accumulator with the proper type
  const fieldSchemas: FieldSchemas = sections.reduce(
    (acc: FieldSchemas, section) => {
      section.fields.forEach((field, index) => {
        let fieldSchema; // Initialize fieldSchema

        // Create a unique field name
        const uniqueFieldName = `${field.id}`;

        switch (field.fieldType) {
          case 'text':
          case 'textArea':
            fieldSchema = z.string();
            if (field.maxLength) {
              fieldSchema = fieldSchema.max(
                field.maxLength,
                `Maximum length is ${field.maxLength} characters`
              );
            }
            break;
          case 'number':
            fieldSchema = z.number();
            break;
          case 'date':
            fieldSchema = z
              .union([z.date(), z.null()])
              .refine((value) => value !== null, {
                message: 'Please select a date',
              });
            break;

          case 'file':
            if (field.fileTypes && field.fileTypes.length > 0) {
              const fileTypeValues = field.fileTypes.map((type) => type.value);
              fieldSchema = z.object({
                file: z.instanceof(File),
                size: z.number().max(field.fileSize! * 1024 * 1024, {
                  message: `File size must be less than ${field.fileSize} MB`,
                }),
                type: z.enum(fileTypeValues as [string, ...string[]]),
              });
            } else {
              fieldSchema = z.any(); // Fallback schema if fileTypes is empty or undefined
            }
            break;

          default:
            throw new Error(`Unsupported field type: ${field.fieldType}`);
        }

        // Apply required validation if specified
        if (field.required) {
          if (fieldSchema instanceof z.ZodString) {
            fieldSchema = fieldSchema.min(1, `This is a mandatory field`);
          } else {
            // Alternative handling code for when fieldSchema isn't ZodString.
          }
        } else {
          fieldSchema = fieldSchema.optional();
        }

        // Store field schema with unique name
        acc[uniqueFieldName] = fieldSchema;
      });
      return acc;
    },
    {} as FieldSchemas
  ); // Initialize the accumulator with the proper type

  return z.object(fieldSchemas); // Return a single object schema
};

// Example usage with mock data

// Generate the schema dynamically

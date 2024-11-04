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
              .union([z.date(), z.null(), z.string()])
              .refine((value) => value !== null, {
                message: 'Please select a date',
              });
            break;

          case 'file':
            if (field.fileTypes && field.fileTypes.length > 0) {
              fieldSchema = z.union([
                z
                  .instanceof(File)
                  .refine(
                    (file) =>
                      file.size <= (field.fileSize || Infinity) * 1024 * 1024,
                    {
                      message: `File size must be less than ${field.fileSize} MB`,
                    }
                  )
                  .refine(
                    (file) =>
                      field.fileTypes &&
                      field.fileTypes.some((type) => file.type === type.value),
                    {
                      message: `File type must be one of the following: ${field.fileTypes
                        ?.map((type) => type.value)
                        .join(', ')}`,
                    }
                  ),
                z.string(),
                z.object({
                  link: z.string().optional(),
                  name: z.string().optional(),
                }),
                z.null().optional(), // Allow null if file is optional
              ]);
              // Makes the file field optional
            } else {
              fieldSchema = z.any(); // Fallback schema if fileTypes is empty or undefined
            }
            break;

          default:
            throw new Error(`Unsupported field type: ${field.fieldType}`);
        }

        if (field.required) {
          if (field.fieldType === 'file') {
            // For required files, ensure the file is not null or undefined
            fieldSchema = fieldSchema.refine(
              (file) =>
                file instanceof File ||
                typeof file === 'string' ||
                typeof file === 'object',
              {
                message: 'This is a mandatory field',
              }
            );
          } else if (fieldSchema instanceof z.ZodString) {
            fieldSchema = fieldSchema.min(1, `This is a mandatory field`);
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

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import AutoComplete from '../AutoComplete';
import CheckboxField from '../components/CheckBox';
import Popup from '../components/DialogPopup';
import SelectField from '../components/Select';
import TextField from '../components/Textfield';

// Zod Schema for form validation
const createFieldSchema = z
  .object({
    fieldType: z.string().min(1, { message: 'Field type is required' }),
    fieldTitle: z.string().min(1, { message: 'Field title is required' }),
    required: z.boolean().optional(),
    fileTypes: z
      .object({ value: z.string(), label: z.string() })
      .array()
      .optional(),
    fileSize: z.number().optional(),
    customErrorMessage: z.string().optional(),
    maxLenth: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    // Check if fieldType is 'file'
    if (data.fieldType === 'file') {
      // Validate fileSize
      if (data.fileSize === undefined || data.fileSize <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['fileSize'],
          message: 'File size must be greater than 0',
        });
      }

      // Validate fileTypes
      if (!data.fileTypes || data.fileTypes.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,

          path: ['fileTypes'],
          message: 'At least one option must be selected',
        });
      }
    }
  });
const allowedFileTypes = [
  { value: 'image/jpeg', label: 'JPEG Image' },
  { value: 'image/png', label: 'PNG Image' },
  { value: 'application/pdf', label: 'PDF Document' },
  { value: 'application/msword', label: 'Word Document' },
];

type CreateFieldSchema = z.infer<typeof createFieldSchema>;

const CreateField: React.FC<any> = ({
  openField,
  setOpenField,
  onSubmitField,
  options,
  edit,
  data,
}) => {
  // Use the useForm hook and bind it to the Zod schema using zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    watch,
  } = useForm<CreateFieldSchema>({
    resolver: zodResolver(createFieldSchema),
  });

  // Handle form submission
  const onSubmit = (data: CreateFieldSchema) => {
    onSubmitField(data);
    setOpenField(false);
  };
  useEffect(() => {
    if (openField) {
      if (edit) {
        reset({
          fieldType: data?.fieldType,
          fieldTitle: data?.fieldTitle,
          required: data?.required,
          fileTypes: data?.fileTypes,
          fileSize: data?.fileSize,
          customErrorMessage: data?.customErrorMessage,
          maxLenth: data?.maxLenth,
        });
      } else {
        reset({
          fieldType: '',
          fieldTitle: '',
          required: false,
          fileTypes: [],
          fileSize: 0,
          customErrorMessage: '',
          maxLenth: 0,
        });
      }
    }
  }, [openField, data]);
  const { fieldType } = watch();
  const handleMultiChange = useCallback((e: any) => {
    setValue('fileTypes', e, { shouldValidate: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Popup
      isOpen={openField}
      onClose={() => setOpenField(false)}
      actionLabel={edit ? 'Upadte' : 'Create'}
      title={edit ? 'Update Field' : 'Add Field'}
      onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from react-hook-form
    >
      <div className="popup-form">
        <SelectField
          label="Select an option"
          required
          options={options}
          {...register('fieldType')}
          error={errors.fieldType?.message}
        />
        <TextField
          name="fieldTitle"
          placeholder="Section Title"
          required
          label="Field Description"
          {...register('fieldTitle')}
          error={errors.fieldTitle?.message}
        />
        {fieldType === 'file' && (
          <>
            <TextField
              name="fileSize"
              placeholder="File Size"
              required
              label="File Size"
              {...register('fileSize', {
                setValueAs: (value) => parseInt(value, 10) || 0,
              })}
              error={errors.fileSize?.message}
            />

            <div className="textfield-container">
              <Controller
                control={control}
                name="fileTypes"
                render={({ field: { onChange, value } }) => (
                  <AutoComplete
                    onChange={handleMultiChange}
                    label="Select multiple options"
                    data={allowedFileTypes}
                    desc="label"
                    descId="value"
                    name="fileTypes"
                    required
                    isMultiple
                    errors={errors.fileTypes}
                    selectedItems={watch().fileTypes ?? []}
                  />
                )}
              />
            </div>
          </>
        )}
        {fieldType === 'text' ||
          (fieldType === 'number' && (
            <TextField
              name="maxLenth"
              placeholder="Max Length"
              label="Max Length"
              {...register('maxLenth', {
                setValueAs: (value) => parseInt(value, 10) || 0,
              })}
              error={errors.maxLenth?.message}
            />
          ))}

        <TextField
          name="customErrorMessage"
          placeholder="Custom Error Message"
          label="Custom Error Message"
          {...register('customErrorMessage')}
          error={errors.customErrorMessage?.message}
        />

        <CheckboxField label="Required" {...register('required')} />
      </div>
    </Popup>
  );
};

export default CreateField;

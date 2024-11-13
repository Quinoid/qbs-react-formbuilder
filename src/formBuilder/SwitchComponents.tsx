import React, { useRef } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import DatePickerConponent from '../components/datepicker';
import ExpandableTextarea from '../components/expandableTextArea';
import FileUpload from '../components/fileupload';
import TextField from '../components/Textfield';
import { FieldType } from '../types';

type Props = {
  field: FieldType;
  errors?: any;
  editable?: boolean;
};
const SwitchComponents: React.FC<Props> = React.memo(
  ({ field, errors, editable }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const { control, register, setValue } = useFormContext();

    const handleTextareaChange = (value: string) => {
      setValue(field.id, value.trimStart(), {
        shouldValidate: true,
        shouldDirty: true,
      });
    };

    const onFileChange = (value: any, name: string) => {
      setValue(name, value, { shouldValidate: true, shouldDirty: true });
    };
    const watchedFileValue = useWatch({ name: field.id });
    switch (field.fieldType) {
      case 'text':
        return (
          <TextField
            disabled={!editable}
            type={field.fieldType}
            {...register(field.id, {
              setValueAs: (value) =>
                typeof value === 'string' ? value.trimStart() : value,
            })}
            error={errors}
          />
        );

      case 'number':
        return (
          <TextField
            disabled={!editable}
            type={field.fieldType}
            {...register(field.id, {
              setValueAs: (value) =>
                typeof value === 'string' && value.trim() !== ''
                  ? parseInt(value.trimStart(), 10)
                  : undefined,
            })}
            error={errors}
          />
        );
      case 'textArea':
        return (
          <Controller
            control={control}
            name={field.id}
            render={({ field: { onChange, value } }) => (
              <ExpandableTextarea
                onDataChange={handleTextareaChange}
                ref={textareaRef} // Pass the ref to the component
                label=""
                value={value}
                {...register(field.id)}
                error={errors}
                disabled={!editable}
                placeholder="Enter your description here..."
                maxRows={3} // You can set max rows as needed
              />
            )}
          />
        );
      case 'date':
        return (
          <Controller
            control={control}
            name={field.id}
            render={({ field: { onChange, value } }) => (
              <DatePickerConponent
                name={field.fieldTitle}
                selectedDate={value}
                disabled={!editable}
                error={errors}
                onChange={onChange}
              />
            )}
          />
        );
      case 'file':
        return (
          <Controller
            control={control}
            name={field.id}
            render={({}) => (
              <FileUpload
                key={field.id}
                onFileChange={(file) => onFileChange(file, field.id)}
                errors={errors}
                name={field.id}
                maxSize={field.fileSize}
                disabled={!editable}
                value={watchedFileValue}
                allowedFileTypes={field.fileTypes?.map((type) => type.value)}
              />
            )}
          />
        );

      default:
        return (
          <TextField
            disabled={!editable}
            type="text"
            {...register(field.id, {
              setValueAs: (value) =>
                typeof value === 'string' ? value.trimStart() : value,
            })}
            error={errors}
          />
        );
    }
  }
);

export default SwitchComponents;

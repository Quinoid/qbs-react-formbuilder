import React, { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

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
const SwitchComponents: React.FC<Props> = ({ field, errors, editable }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { control, register, setValue } = useFormContext();
  const handleTextareaChange = (value: string) => {
    setValue(field.name, value, { shouldValidate: true });
  };

  switch (field.fieldType) {
    case 'text':
    case 'number':
      return (
        <TextField
          disabled={!editable}
          type={field.fieldType}
          {...register(field.id)}
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
              value === '' ? undefined : parseInt(value, 10), // Parse as integer
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
          render={({ field: { onChange, value } }) => (
            <FileUpload
              onFileChange={onChange}
              errors={errors}
              disabled={!editable}
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
          {...register(field.id)}
          error={errors}
        />
      );
  }
};

export default SwitchComponents;

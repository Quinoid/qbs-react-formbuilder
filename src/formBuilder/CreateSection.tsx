import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import CheckboxField from '../components/CheckBox';
import Popup from '../components/DialogPopup';
import TextField from '../components/Textfield';

const createSectionSchema = z.object({
  title: z.string().min(1, { message: 'Section title is required' }),
  isRepeatable: z.boolean().optional(),
});
type CreateSectionSchema = z.infer<typeof createSectionSchema>;

const CreateSection: React.FC<any> = ({
  openSection,
  onSubmitData,
  setOpenSection,
  edit,
  data,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateSectionSchema>({
    resolver: zodResolver(createSectionSchema),
  });
  const onSubmit = (data: CreateSectionSchema) => {
    onSubmitData(data);
    setOpenSection(false);
  };
  useEffect(() => {
    if (openSection) {
      if (edit) {
        reset({
          title: data?.title,
          isRepeatable: data?.isRepeatable,
        });
      } else {
        reset({
          title: '',
          isRepeatable: false,
        });
      }
    }
  }, [openSection, data]);
  return (
    <Popup
      isOpen={openSection}
      onClose={() => setOpenSection(false)}
      title={edit ? 'Update Section' : 'Create Section'}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={edit ? 'Update' : 'Create'}
    >
      <div className="popup-form">
        <TextField
          name="title"
          placeholder="Section Title"
          type="text"
          label="Section Title"
          required
          {...register('title', {
            setValueAs: (value) =>
              typeof value === 'string' ? value.trimStart() : value,
          })}
          error={errors.title?.message}
        />
        <CheckboxField label="Repeatable" {...register('isRepeatable')} />
      </div>
    </Popup>
  );
};

export default CreateSection;

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '../components/Button';
import { Question, SectionIcon } from '../components/Icons';
import { FieldType } from '../types';
import { generateDynamicSchema } from './dynamicSchema';
import SwitchComponents from './SwitchComponents';

type Props = {
  formContent?: {
    title: string;
    fields: FieldType[];
    repeatable: boolean;
  }[];
  formTitle?: string;
  formValues?: any;
  updateFormContent?: (data: any, msg?: string) => void;
};
const DynamicForm: React.FC<Props> = ({
  formContent,
  updateFormContent,
  formValues,
  formTitle,
}) => {
  const [edit, setEdit] = useState(false);
  const schema = generateDynamicSchema(formContent);
  const getInitialData = () => {
    if (!formValues) return {};
    const data: any = formValues;

    return data;
  };
  type FormSchema = z.infer<typeof schema>;
  const methods = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: getInitialData(),
  });

  useEffect(() => {
    methods.reset(getInitialData());
  }, [formValues]);

  const updateForm = (data: any) => {
    const result: any = {};

    formContent.forEach((section) => {
      section.fields.forEach((field) => {
        result[field.id] = data[field.id] ?? '';
      });
    });

    updateFormContent(result);
  };
  const handleReset = () => {
    methods.reset(getInitialData());
    setEdit(false);
  };
  const { errors } = methods.formState;
  return (
    <div className="preview-container">
      <div className="section-header">
        <span className="section-header-title">
          {formTitle ?? 'FieldError'}
        </span>
        <div style={{ display: 'flex', gap: '10px' }}>
          {edit ? (
            <>
              <Button label="Save" onClick={methods.handleSubmit(updateForm)} />
              <Button label="Cancel" type="secondary" onClick={handleReset} />
            </>
          ) : (
            <Button label="Edit" onClick={() => setEdit(true)} />
          )}
        </div>
      </div>
      <FormProvider {...methods}>
        {formContent.map((section: any) => (
          <div key={section.id} className="preview-section">
            <div className="preview-section-title-container">
              <SectionIcon className="section-item-icon" />
              <div className="preview-section-item-title">{section.title}</div>
            </div>
            {section.fields.map((field: any) => (
              <div key={field.id}>
                <div className="preview-question-title-container">
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Question className="section-item-icon" />
                    <div className="section-field-item-title">
                      {field.fieldTitle}
                    </div>
                  </div>
                  <div
                    className="preview-section-fields"
                    style={{ maxWidth: 350 }}
                  >
                    <SwitchComponents
                      field={field}
                      errors={errors[field.id]?.message}
                      editable={edit}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </FormProvider>
    </div>
  );
};
export default DynamicForm;

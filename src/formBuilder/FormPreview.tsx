import React from 'react';
import { FieldType } from '../types';
import { SectionIcon, Question } from '../components/Icons';
import SwitchComponents from './SwitchComponents';
import { generateDynamicSchema } from './dynamicSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
type Props = {
  formContent?: {
    title: string;
    fields: FieldType[];
    repeatable: boolean;
  }[];
};
const FormPreview: React.FC<Props> = ({ formContent }) => {
  const schema = generateDynamicSchema(formContent);
  type FormSchema = z.infer<typeof schema>;
  const methods = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  return (
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
                  <SwitchComponents field={field} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </FormProvider>
  );
};
export default FormPreview;

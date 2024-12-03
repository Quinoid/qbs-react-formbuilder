import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '../components/Button';
import { DeleteIcon, EmptyIcon } from '../components/Icons';
import { FieldType } from '../types';
import Tooltip from '../utilities/tootltip';
import { generateDynamicSchema } from './dynamicSchema';
import SwitchComponents from './SwitchComponents';
import WarningPopup from './WaringPopup';

type Props = {
  formContent?: {
    title: string;
    id?: string;
    sectionId?: string;
    fields: FieldType[];
    isRepeatable: boolean;
    isDuplicate?: boolean;
  }[];
  repeatLabel?: string;
  isLoading?: boolean;
  formTitle?: string;
  formValues?: any;
  sectionInfo?: React.ReactNode;
  updateFormContent?: (
    data: any,
    sections: any,
    msg?: string
  ) => Promise<boolean>;
  updateFormSection?: (data: any, msg?: string) => void;
};
const DynamicForm: React.FC<Props> = ({
  formContent,
  updateFormContent,
  formValues,
  formTitle,
  updateFormSection,
  isLoading,
  repeatLabel,
  sectionInfo,
}) => {
  const [edit, setEdit] = useState(false);
  const [sections, setSections] = useState(formContent || []);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(null);
  const [updateSectionCount, setUpdateSectionCount] = useState(0);
  const schema = generateDynamicSchema(sections);
  const getInitialData = () => {
    if (!formValues) return {};
    const data: any = formValues;

    return data;
  };
  useEffect(() => {
    setSections(formContent);
  }, [formContent]);
  type FormSchema = z.infer<typeof schema>;
  const methods = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: getInitialData(),
  });

  useEffect(() => {
    methods.reset(getInitialData());
  }, [formValues]);
  const { isDirty } = methods.formState;

  const updateForm = async (data: any) => {
    if (!isDirty) {
      updateFormContent({}, sections, 'No changes to save');
      return;
    }
    const result: Record<string, { value: any; type: string }> = {};

    sections.forEach((section) => {
      section.fields.forEach((field) => {
        const fieldValue = data[field.id];

        result[`${field.id}`] = {
          value: fieldValue,
          type: field.fieldType,
        };
      });
    });

    const res = await updateFormContent(result, sections);
    if (res) {
      setEdit(false);
    }
  };

  const handleReset = () => {
    methods.reset(getInitialData());
    setEdit(false);
  };
  const handleAddSection = (sectionIndex: number) => {
    setSections((prevSections) => {
      const newSection = {
        ...prevSections[sectionIndex],
        isRepeatable: false,
        isDuplicate: true,
        parentId: prevSections[sectionIndex].id,
        id: `${Date.now()}`, // Creating a unique section ID
        fields: prevSections[sectionIndex].fields.map((field, index) => ({
          ...field,
          id: `${Date.now() + index}`, // Creating a unique ID for each field
        })),
      };

      const updatedSections = [
        ...prevSections.slice(0, sectionIndex + 1),
        newSection,
        ...prevSections.slice(sectionIndex + 1),
      ];

      return updatedSections;
    });
    setUpdateSectionCount(updateSectionCount + 1);
    setIsOpen(false);
  };

  const handleRemoveSection = (sectionId: string) => {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== sectionId)
    );
    setUpdateSectionCount(updateSectionCount + 1);
    setIsRemoveOpen(false);
  };
  const handleConfirmDuplicate = (index: number) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };
  const handleConfirmRemove = (sectionId: string) => {
    setIsRemoveOpen(true);
    setCurrentSectionId(sectionId);
  };

  const { errors } = methods.formState;

  console.log(sections);

  return (
    <div
      className={
        sections?.length > 0 ? 'preview-container' : 'preview-container-empty'
      }
    >
      <div className="section-header">
        <span className="section-header-title">
          {formTitle ?? 'Data Collection Form'}
        </span>
        <div style={{ display: 'flex', gap: '10px' }}>
          {edit ? (
            <>
              <Button label="Save" onClick={methods.handleSubmit(updateForm)} />
              <Button label="Cancel" type="secondary" onClick={handleReset} />
            </>
          ) : (
            sections.length > 0 && (
              <Button label="Edit" onClick={() => setEdit(true)} />
            )
          )}
        </div>
      </div>
      {sectionInfo && <div className=" section-info">{sectionInfo}</div>}
      {sections.length > 0 ? (
        <FormProvider {...methods}>
          {sections.map((section: any, index: number) => (
            <div key={section.id} className="preview-section">
              <div className="preview-section-head-container ">
                <div className="preview-section-title-container">
                  {/* <SectionIcon className="section-item-icon" /> */}
                  <div className="preview-section-item-title">
                    {section.title}
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  {section.isRepeatable && edit && (
                    <Tooltip title="Duplicate Section">
                      <Button
                        className="repeat-section-btn"
                        label={repeatLabel ?? 'Repeat Section'}
                        onClick={() => handleConfirmDuplicate(index)}
                      ></Button>
                    </Tooltip>
                  )}
                  {section.isDuplicate && edit && (
                    <Tooltip title="Remove Section">
                      <span
                        style={{ color: '#e65f5f' }}
                        className="remove-section-btn"
                        onClick={() => handleConfirmRemove(section.id)}
                      >
                        <DeleteIcon />
                      </span>
                    </Tooltip>
                  )}
                </div>
              </div>
              {section.fields.map((field: any) => (
                <div key={field.id}>
                  <div className="preview-question-title-container">
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {/* <Question className="section-item-icon" /> */}
                      <div className="section-field-item-title">
                        {field.fieldTitle}
                      </div>
                    </div>
                    <div
                      className="preview-section-field"
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
      ) : (
        !isLoading && (
          <div className="flexbox-center">
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <div className="flex flex-col items-center justify-center py-10">
                <EmptyIcon />
                <p className="text-sm font-bold text-primaryText dark:text-white mt-5">
                  No data collection form available
                </p>
              </div>
            </div>
          </div>
        )
      )}
      <WarningPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content="Are you sure you want to duplicate this section?"
        handleSubmit={() => handleAddSection(currentIndex)}
        title="Duplicate Section"
      />
      <WarningPopup
        isOpen={isRemoveOpen}
        setIsOpen={setIsRemoveOpen}
        content="Are you sure you want to remove this section?"
        handleSubmit={() => handleRemoveSection(currentSectionId)}
        title="Remove Section"
      />
    </div>
  );
};
export default DynamicForm;

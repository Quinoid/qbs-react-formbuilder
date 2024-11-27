import React, { useEffect, useState } from 'react';

import Button from '../components/Button';
import {
  DeleteIcon,
  DuplicateIcon,
  EditIcon,
  EmptyIcon,
  PlusIcon,
  Question,
  SectionIcon,
} from '../components/Icons';
import ThreeDotMenuDropdown from '../components/ThreeDotMenu';
import { FieldType } from '../types';
import CreateField from './CreateField';
import CreateSection from './CreateSection';
import FormPreview from './FormPreview';
import WarningPopup from './WaringPopup';

const options = [
  { value: 'number', label: 'Number' },
  { value: 'text', label: 'Text' },
  { value: 'date', label: 'Date' },
  { value: 'file', label: 'File Upload' },
  { value: 'textArea', label: 'Text Area' },
];

const MenuOptions = [
  { label: 'Delete Section', slug: 'delete-section', icon: <DeleteIcon /> },
  {
    label: 'Duplicate Section',
    slug: 'duplicate-section',
    icon: <DuplicateIcon />,
  },
  { label: 'Edit Section', slug: 'edit-section', icon: <EditIcon /> },
  { label: 'Add New Field', slug: 'create-section', icon: <PlusIcon /> },
];

const FieldMenuOptions = [
  { label: 'Delete Field', slug: 'delete-field', icon: <DeleteIcon /> },
  { label: 'Edit Field', slug: 'edit-field', icon: <EditIcon /> },
];
type Props = {
  formContent?: {
    title: string;
    fields: FieldType[];
    isRepeatable: boolean;
  }[];
  isLoading?: boolean;
  updateFormContent: (data: any, msg?: string) => void;
};

const FormBuilder: React.FC<Props> = ({
  formContent,
  updateFormContent,
  isLoading,
}) => {
  const [sections, setSections] = useState<any>([]);

  const [draggedSection, setDraggedSection] = useState<any>(null);
  const [draggedField, setDraggedField] = useState<any>(null);
  const [editsection, setEditSection] = useState<any>(false);
  const [editField, setEditField] = useState<any>(false);
  const [openSection, setOpenSection] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [updateKey, setUpdateKey] = useState(0);
  const [currentSection, setCurrentSection] = useState<any>(null);
  const [currentField, setCurrentField] = useState<any>(null);
  const [message, setMessage] = useState<any>('');
  const [openPreview, setOpenPreview] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [currentFieldId, setcurrentFieldId] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(null);
  useEffect(() => {
    setSections(formContent ?? []);
  }, [formContent]);

  useEffect(() => {
    if (updateKey !== 0) {
      updateFormContent(sections, message);
    }
  }, [updateKey]);

  const handleDragStartSection = (section: any) => {
    setDraggedSection(section);
  };

  const handleDragOverSection = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropSection = (section: any) => {
    const newSections = sections.filter(
      (sect: any) => sect.id !== draggedSection.id
    );
    const index = newSections.findIndex((sect: any) => sect.id === section.id);
    newSections.splice(index, 0, draggedSection);
    setSections(newSections);
    setMessage('Section position updated successfully');
    setDraggedSection(null);
    setUpdateKey(updateKey + 1);
  };

  const handleDragStartField = (sectionId: any, field: any) => {
    setDraggedField({ sectionId, field });
  };

  const handleDragOverField = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropField = (sectionId: any, field: any) => {
    const newSections = sections.map((section: any) => {
      if (section.id === draggedField.sectionId) {
        const updatedFields = section.fields.filter(
          (f: any) => f.id !== draggedField.field.id
        );
        section.fields = updatedFields;
      }
      if (section.id === sectionId) {
        const index = section.fields.findIndex((f: any) => f.id === field.id);
        section.fields.splice(index, 0, draggedField.field);
      }
      return section;
    });
    setSections(newSections);
    setMessage(' Field position updated successfully');

    setDraggedField(null);
    setUpdateKey(updateKey + 1);
  };
  const onSubmit = (data: any) => {
    if (editsection) {
      const result = sections.map((sect: any) =>
        sect.id === currentSection?.id ? { ...sect, ...data } : sect
      );
      setSections(result);
      setEditSection(false);
      setMessage('Section updated successfully');
    } else {
      setSections([
        ...sections,
        { ...data, id: Date.now().toString(), fields: [] },
      ]);
      setOpenSection(false);
      setMessage('Section created successfully');
    }

    setUpdateKey(updateKey + 1);
  };

  const onSubmitField = (data: any) => {
    if (editField) {
      const result = sections.map((sect: any) =>
        sect.id === currentSection?.id
          ? {
              ...sect,
              fields: sect.fields.map((field: any) =>
                field.id === currentField?.id ? { ...field, ...data } : field
              ),
            }
          : sect
      );
      setMessage(' Field updated successfully');
      setSections(result);
      setEditField(false);
    } else {
      const result = sections.map((sect: any) =>
        sect.id === currentSection?.id
          ? {
              ...sect,
              fields: [
                {
                  ...data,
                  id:
                    data.fieldType === 'file'
                      ? `file-${Date.now().toString()}`
                      : Date.now().toString(),
                },
                ...sect.fields,
              ],
            }
          : sect
      );
      setSections(result);
      setOpenField(false);
      setMessage(' Field created successfully');
    }
    setUpdateKey(updateKey + 1);
  };

  const handleOpenFieldCreate = (section: any) => {
    setCurrentSection(section);
    setOpenField(true);
    setEditField(false);
  };
  const handleDelete = (sectionId: any) => {
    setSections(sections.filter((section: any) => section.id !== sectionId));
    setMessage('Section deleted successfully');
    setUpdateKey(updateKey + 1);
  };
  const handleDeleteField = (sectionId: any, fieldId: any) => {
    setSections(
      sections.map((section: any) => {
        if (section.id === sectionId) {
          return {
            ...section,
            fields: section.fields.filter((field: any) => field.id !== fieldId),
          };
        }
        return section;
      })
    );
    setMessage(' Field deleted successfully');
    setUpdateKey(updateKey + 1);
  };
  const handleEditSection = (sectionId: any) => {
    setEditSection(true);
    setCurrentSection(sectionId);
    setOpenSection(true);
  };
  const handleEditField = (sectionId: any, fieldId: any) => {
    setEditField(true);
    setCurrentSection(sectionId);
    setOpenField(true);
    setCurrentField(fieldId);
  };

  const handleDuplicate = (section: any) => {
    const result = [...sections]; // Create a shallow copy of sections
    const newSection = {
      ...section,
      id: `${Date.now().toString()}`, // Assign a new ID to the section
      fields: section?.fields?.map((field: any, index: number) => ({
        ...field,
        id: `dup-${index}-${Date.now().toString()}`,
      })),
    };
    result.push(newSection); // Add the new section with updated fields
    setSections(result); // Update state with the new sections array
    setMessage('Section duplicated successfully');

    setUpdateKey(updateKey + 1); // Trigger an update
  };

  const handleMenuAction = (option: any, section: any) => {
    if (option.slug === 'delete-section') {
      setCurrentIndex(section?.id);
      setIsOpen(true);
    } else if (option.slug === 'duplicate-section') {
      handleDuplicate(section);
    } else if (option.slug === 'edit-section') {
      handleEditSection(section);
    } else if (option.slug === 'create-section') {
      handleOpenFieldCreate(section);
    }
  };
  const handleFieldMenuAction = (option: any, section: any, field: any) => {
    if (option.slug === 'delete-field') {
      setcurrentFieldId(field?.id);
      setCurrentIndex(section?.id);
      setIsRemoveOpen(true);
    } else if (option.slug === 'duplicate-field') {
      handleDeleteField(section?.id, field);
    } else if (option.slug === 'edit-field') {
      handleEditField(section, field);
    }
  };
  const handleRemoveField = () => {
    handleDeleteField(currentIndex, currentFieldId);
    setIsRemoveOpen(false);
  };
  const handleDeleteSection = () => {
    handleDelete(currentIndex);
    setIsOpen(false);
  };
  if (openPreview) {
    return (
      <div className="preview-container">
        <div className="section-header">
          <span className="section-header-title">Form Builder</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              label="Back to Form Builder"
              onClick={() => setOpenPreview(false)}
            />
          </div>
        </div>

        <FormPreview formContent={sections} />
      </div>
    );
  }
  return (
    <div>
      <div className="section-container">
        {sections && sections.length > 0 ? (
          <div className="section-items">
            <div className="section-header">
              <span className="section-header-title">Form Builder</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button label="Preview" onClick={() => setOpenPreview(true)} />

                <Button
                  label="Create New Section"
                  onClick={() => setOpenSection(true)}
                />
              </div>
            </div>

            {sections.map((section: any) => (
              <div
                key={section.id}
                className="section-item-container"
                draggable
                onDragStart={() => handleDragStartSection(section)}
                onDragOver={handleDragOverSection}
                onDrop={() => handleDropSection(section)}
              >
                <div className="section-item">
                  <div className="section-title-container">
                    <SectionIcon className="section-item-icon" />
                    <div className="section-item-title">{section.title}</div>
                  </div>
                  <div className="section-item-actions">
                    <ThreeDotMenuDropdown
                      options={MenuOptions}
                      handleMenuAction={(option: any) =>
                        handleMenuAction(option, section)
                      }
                    />
                  </div>
                </div>

                {/* Fields */}
                {section?.fields?.length > 0 && (
                  <div className="section-field-item-container">
                    {section?.fields?.map((field: any) => (
                      <div
                        key={field.id}
                        className="section-field-item"
                        draggable
                        onDragStart={() =>
                          handleDragStartField(section.id, field)
                        }
                        onDragOver={handleDragOverField}
                        onDrop={() => handleDropField(section.id, field)}
                      >
                        <div className="section-title-container">
                          <Question className="section-item-icon" />
                          <div className="section-field-item-title">
                            {field.fieldTitle}
                          </div>
                        </div>
                        <div className="section-field-item-actions">
                          <ThreeDotMenuDropdown
                            options={FieldMenuOptions}
                            handleMenuAction={(option: any) =>
                              handleFieldMenuAction(option, section, field)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
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
                    No Sections available
                  </p>
                  <p className="text-xxs leading-4 font-medium text-secondary dark:text-white mb-5">
                    Add a new section by clicking on the “Create” button below
                  </p>
                  <Button label="Create" onClick={() => setOpenSection(true)} />
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Create Section Popup */}
      <CreateSection
        openSection={openSection}
        setOpenSection={setOpenSection}
        onSubmitData={onSubmit}
        edit={editsection}
        data={currentSection}
      />
      {/* Create Field Popup */}
      <CreateField
        options={options}
        edit={editField}
        data={currentField}
        openField={openField}
        setOpenField={setOpenField}
        onSubmitField={onSubmitField}
      />
      <WarningPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content="Are you sure you want to delete this section?"
        handleSubmit={() => handleDeleteSection()}
        title="Delete Section"
      />
      <WarningPopup
        isOpen={isRemoveOpen}
        setIsOpen={setIsRemoveOpen}
        content="Are you sure you want to delete this field?"
        handleSubmit={() => handleRemoveField()}
        title="Delete Field"
      />
    </div>
  );
};

export default FormBuilder;

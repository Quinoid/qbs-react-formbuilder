import React, { useEffect, useState } from 'react';

import Button from '../components/Button';
import {
  DeleteIcon,
  DuplicateIcon,
  EditIcon,
  PlusIcon,
  Question,
  SectionIcon,
} from '../components/Icons';
import ThreeDotMenuDropdown from '../components/ThreeDotMenu';
import CreateField from './CreateField';
import CreateSection from './CreateSection';

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
    fields: any[];
    repeatable: boolean;
  }[];
  updateFormConent: (data: any, msg?: string) => void;
};

const FormBuilder: React.FC<Props> = ({ formContent, updateFormConent }) => {
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
  useEffect(() => {
    setSections(formContent);
  }, [formContent]);

  useEffect(() => {
    updateFormConent(sections, message);
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
    setMessage('Section Position Updated');
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
    setMessage('Section Field Position Updated');

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
      setMessage('Section Updated Successfully');
    } else {
      setSections([...sections, { ...data, id: Date.now(), fields: [] }]);
      setOpenSection(false);
      setMessage('Section Created Successfully');
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
      setMessage('Section Field Updated Successfully');
      setSections(result);
      setEditField(false);
    } else {
      const result = sections.map((sect: any) =>
        sect.id === currentSection?.id
          ? { ...sect, fields: [{ ...data, id: Date.now() }, ...sect.fields] }
          : sect
      );
      setSections(result);
      setOpenField(false);
      setMessage('Section Field Created Successfully');
    }
    setUpdateKey(updateKey + 1);
  };

  const handleOpenFieldCreate = (section: any) => {
    setCurrentSection(section);
    setOpenField(true);
  };
  const handleDelete = (sectionId: any) => {
    setSections(sections.filter((section: any) => section.id !== sectionId));
    setMessage('Section Deleted Successfully');
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
    setMessage('Section Field Deleted Successfully');
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
  const handleDuplicate = (sectionId: any) => {
    const result = sections;
    result.push({ ...sectionId, id: Date.now() });
    setSections(result);
    setUpdateKey(updateKey + 1);
  };

  const handleMenuAction = (option: any, section: any) => {
    if (option.slug === 'delete-section') {
      handleDelete(section?.id);
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
      handleDeleteField(section?.id, field?.id);
    } else if (option.slug === 'duplicate-field') {
      handleDeleteField(section?.id, field);
    } else if (option.slug === 'edit-field') {
      handleEditField(section, field);
    }
  };
  return (
    <div>
      <div className="section-container">
        {sections && sections.length > 0 ? (
          <div className="section-items">
            <div className="section-header">
              <span className="section-header-title">Form Builder</span>
              <div>
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
              <p>Create New Section using this button</p>
              <Button label="Create" onClick={() => setOpenSection(true)} />
            </div>
          </div>
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
    </div>
  );
};

export default FormBuilder;

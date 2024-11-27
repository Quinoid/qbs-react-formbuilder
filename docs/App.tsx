import React, { useState } from 'react';

import DynamicForm from '../src/formBuilder/DynamicForm';
import FormBuilder from '../src/formBuilder/formbuilder';
import { formSections } from '../src/static';

import '../src/styles/global.css';

export default function App() {
  const [dropData, setDropData] = useState([]);
  const [nexBlock, setNexBlock] = useState(1);
  const [prev, setPrev] = useState(1);

  return (
    <div>
      <FormBuilder formContent={formSections} updateFormContent={() => {}} />
      <DynamicForm
        formContent={formSections}
        formValues={{ 1730275659290: 20, 1730275681654: 'newww' }}
      />
    </div>
  );
}

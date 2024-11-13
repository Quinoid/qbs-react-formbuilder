import React,{ useState } from 'react';
import '../src/styles/global.css';
import FormBuilder from '../src/formBuilder/formbuilder';

export default function App() {
  const [dropData, setDropData] = useState([]);
  const [nexBlock, setNexBlock] = useState(1);
  const [prev, setPrev] = useState(1);

  return (
    <div>
      <FormBuilder formContent={dropData} updateFormContent={() => {}} />
      {/* <DynamicForm  formContent={formSections}/> */}
    </div>
  );
}

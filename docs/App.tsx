import { useState } from 'react';
import React from 'react';

import FormBuilder from '../src/formBuilder/formbuilder';

import '../src/styles/global.css';

export default function App() {
  const [dropData, setDropData] = useState([]);
  const [nexBlock, setNexBlock] = useState(1);
  const [prev, setPrev] = useState(1);

  return (
    <div>
      <FormBuilder formContent={dropData} updateFormConent={setDropData} />
    </div>
  );
}

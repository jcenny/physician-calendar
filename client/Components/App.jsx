import React, { useEffect, useState } from 'react';

import PhysiciansList from './PhysiciansList.jsx';
import PatientsList from './PatientsList.jsx';
import sampleData from '../sampleData.js';


function App() {
  const [physicians, setPhysicians] = useState([]);

  useEffect(() => {
    setPhysicians(sampleData.physicians);
  }, []);

  return (
    <div>
      <PhysiciansList physicians={physicians}/>
      <PatientsList physicians={physicians}/>
    </div>
  )
}

export default App;
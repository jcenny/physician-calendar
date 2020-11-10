import React, { useEffect, useState } from 'react';

import PhysiciansList from './PhysiciansList.jsx';
import PatientsList from './PatientsList.jsx';
import sampleData from '../sampleData.js';

import { Nav } from './Styles/AppStyles.jsx';


function App() {
  const [physicians, setPhysicians] = useState([]);

  useEffect(() => {
    setPhysicians(sampleData.physicians);
  }, []);

  return (
    <Nav>
      <PhysiciansList physicians={physicians}/>
      <PatientsList physicians={physicians}/>
    </Nav>
  )
}

export default App;
import React, { useEffect, useState } from 'react';

import PhysiciansList from './PhysiciansList.jsx';
import PatientsList from './PatientsList.jsx';
import sampleData from '../sampleData.js';

import { Nav } from './Styles/AppStyles.jsx';


function App() {
  const [physicians, setPhysicians] = useState([]);

  const handleClick = (e) => {
    const { email } = e.target.dataset;
    const newPhysicians = physicians.map((physician) => {
      if (physician.email === email) {
        physician.clicked = true; 
      } else {
        physician.clicked = false;
      }
      return physician
    })
    setPhysicians(newPhysicians);
  }


  useEffect(() => {
    setPhysicians(sampleData.physicians);
  }, []);

  return (
    <Nav>
      <PhysiciansList physicians={physicians} handleClick={handleClick}/>
      <PatientsList physicians={physicians}/>
    </Nav>
  )
}

export default App;
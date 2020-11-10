import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import PhysiciansList from './PhysiciansList.jsx';
import PatientsList from './PatientsList.jsx';

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
    // Axios.patch('/physicians', {email})
    //   .then(() => getPhysicians())
    //   .catch(err => console.log(`error updating clicked state of physician: ${err}`))
  }

  const getPhysicians = () => {
    Axios.get('/physicians')
      .then(data => setPhysicians(data.data))
      .catch(err => console.log(`error getting physicians: ${err}`))
  }

  useEffect(getPhysicians, []);

  return (
    <Nav>
      <PhysiciansList physicians={physicians} handleClick={handleClick}/>
      <PatientsList physicians={physicians}/>
    </Nav>
  )
}

export default App;
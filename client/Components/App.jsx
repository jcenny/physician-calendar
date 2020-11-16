import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LeftNav from './LeftNav.jsx';
import RightNav from './RightNav.jsx';

import { Nav } from './Styles/AppStyles.jsx';

function App() {
  const [physicians, setPhysicians] = useState([]);
  const [patients, setPatients] = useState([]);

  const handleClick = (e) => {
    const { email } = e.target.dataset;
    const newPhysicians = physicians.map((physician) => {
      if (physician.email === email) {
        physician.clicked = true; 
        getPatients(physician.id)
      } else {
        physician.clicked = false;
      }
      return physician
    })
    setPhysicians(newPhysicians);
  }

  const getPhysicians = () => {
    Axios.get('/physicians')
      .then(data => setPhysicians(data.data))
      .catch(err => console.log(`error getting physicians: ${err}`))
  }

  const getPatients = (physicianID) => {
    Axios.get(`/patients/${physicianID}`)
      .then(data => setPatients(data.data))
      .catch(err => console.log(`error getting patients: ${err}`))
  }

  const patchPatient = (prevtime, time, physicianID) => {
    Axios.patch(`/patients/${physicianID}`, { prevtime, time })
      .then(data => setPatients(data.data))
      .catch(err => console.log(`error editing patient appt time: ${err}`))
  }

  const deletePatient = (appttime, physicianID) => {
    Axios.delete(`/patients/${physicianID}`, { appttime })
      .then(data => setPatients(data.data))
      .catch(err => console.log(`error deleting patient appt time: ${err}`))
  }

  useEffect(() => {
    getPhysicians();
  }, []);

  return (
    <Nav>
      <LeftNav physicians={physicians} handleClick={handleClick}/>
      <RightNav 
        physicians={physicians} 
        patients={patients} 
        patchPatient={patchPatient} 
        deletePatient={deletePatient}/>
    </Nav>
  )
}

export default App;
import React from 'react';
import PatientsList from './PatientsList.jsx';

import { Right } from './Styles/PatientsStyles.jsx';

function RightNav({ patients, physician, patchPatient, deletePatient }) {
  if (patients.length) {
    return (
      <Right>
        <div>
          <h1>{`Dr. ${physician.firstName} ${physician.lastName}`}</h1>
          <h3>{physician.email}</h3>
          <PatientsList
            physicianid={physician.id}
            patients={patients}
            patchPatient={patchPatient}
            deletePatient={deletePatient}
          />
        </div>
      </Right>
    )
  } else {
    return <div></div>
  }
}

export default RightNav;
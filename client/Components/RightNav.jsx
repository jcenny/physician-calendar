import React from 'react';
import PatientsList from './PatientsList.jsx';

import { Right } from './Styles/PatientsStyles.jsx';

function RightNav({ patients, physicians }) {
  return (
    <Right>
      {physicians.map((physician, idx) => {
        if (physician.clicked) {
          return (
            <div key={`physician: ${idx}`}>
                <h1>{`Dr. ${physician.firstName} ${physician.lastName}`}</h1>
                <h3>{physician.email}</h3>
                <PatientsList patients={patients}/>
            </div>
          )
        }
      })}
    </Right>
  )
}

export default RightNav;
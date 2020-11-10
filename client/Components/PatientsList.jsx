import React from 'React';
import PatientEntry from './PatientEntry.jsx';

import { NavRight, Th } from './Styles/PatientsStyles.jsx';

function PatientsList({ physicians }) {
  return (
    <NavRight>
      {
        physicians.map((physician) => {
          if (physician.clicked) {
            return (
              <div>
                <h1>{`Dr. ${physician.firstName} ${physician.lastName}`}</h1>
                <h3>{physician.email}</h3>
                <table>
                  <tbody>
                    <tr>
                      <th style={{width:'100px', textAlign: 'left'}}>#</th>
                      <Th>Name</Th>
                      <Th>Time</Th>
                      <Th>Kind</Th>
                    </tr>
                    {physician.patients.map((patient, index) => <PatientEntry patient={patient} index={index}/>)}
                  </tbody>
                </table>
              </div>
            )
          }
        })
      }
    </NavRight>
  )
}

export default PatientsList;
import React from 'React';
import PatientEntry from './PatientEntry.jsx';

import { Th } from './Styles/PatientsStyles.jsx';

function PatientsList({ patients, physician, patchPatient, deletePatient }) {
  return (
    <table>
      <tbody>
        <tr>
          <th style={{ width: '100px', textAlign: 'left' }}>#</th>
          <Th>Name</Th>
          <Th>Time</Th>
          <Th>Kind</Th>
          <Th>Edit/Delete Appointment (Hours 8:00 AM - 5:00 PM)</Th>
        </tr>
        {patients.map((patient, index) => 
          <PatientEntry
            physician={physician} 
            patient={patient} 
            index={index} 
            patchPatient={patchPatient}
            deletePatient={deletePatient}
            />
          )}
      </tbody>
    </table>
  )
}

export default PatientsList;
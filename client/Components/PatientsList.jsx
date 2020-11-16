import React from 'React';
import PatientEntry from './PatientEntry.jsx';

import { Th } from './Styles/PatientsStyles.jsx';

function PatientsList({ patients }) {
  return (
    <table>
      <tbody>
        <tr>
          <th style={{ width: '100px', textAlign: 'left' }}>#</th>
          <Th>Name</Th>
          <Th>Time</Th>
          <Th>Kind</Th>
        </tr>
        {patients.map((patient, index) => <PatientEntry patient={patient} index={index} />)}
      </tbody>
    </table>
  )
}

export default PatientsList;
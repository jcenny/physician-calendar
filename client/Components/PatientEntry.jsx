import React from 'react';
import {Td} from './Styles/PatientsStyles.jsx';
function PatientEntry({ patient, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{`${patient.firstName} ${patient.lastName}`}</td>
      <td>{patient.time}</td>
      <td>{patient.kind}</td>
    </tr>
  )
}

export default PatientEntry;
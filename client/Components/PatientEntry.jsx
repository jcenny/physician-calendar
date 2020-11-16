import React from 'react';

function PatientEntry({ patient, index }) {
  return (
    <tr key={`${patient}: ${index}`}>
      <td>{index + 1}</td>
      <td>{`${patient.firstName} ${patient.lastName}`}</td>
      <td>{patient.time}</td>
      <td>{patient.kind}</td>
    </tr>
  )
}

export default PatientEntry;
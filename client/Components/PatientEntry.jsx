import React, { useState } from 'react';

function PatientEntry({ patient, index, physicianid, patchPatient, deletePatient }) {
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    setTime(e.target.value);
  }

  const handleEdit = (e) => {
    const patientid = e.target.id;
    setTime('');
    patchPatient(physicianid, patientid, time);
  }

  const handleDelete = (e) => {
    const { appttime } = e.target.dataset;
    deletePatient(appttime, physician);
  }

  return (
    <tr key={`${patient}: ${index}`}>
      <td>{index + 1}</td>
      <td>{`${patient.firstName} ${patient.lastName}`}</td>
      <td>
        <input type='time' value={patient.time} readOnly />
      </td>
      <td>{patient.kind}</td>
      <td>
        <input
          placeholder='Time'
          type='time'
          name='time'
          min='08:00:00'
          max='17:00:00'
          step='900'
          value={time}
          onChange={handleChange}
        />
        <button id={patient.id} onClick={handleEdit}>Edit</button>
        <button data-appttime={patient.time} onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  )
}

export default PatientEntry;
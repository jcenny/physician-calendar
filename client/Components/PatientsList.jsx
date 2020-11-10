import React from 'React';
import PatientEntry from './PatientEntry.jsx';

function PatientsList({ physicians }) {
  return (
    <div>
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
                      <th>#</th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Kind</th>
                    </tr>
                    {physician.patients.map((patient, index) => <PatientEntry patient={patient} index={index}/>)}
                  </tbody>
                </table>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default PatientsList;
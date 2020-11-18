const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let sampleData = require('./sampleData.js');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/physicians', (req, res) => {
  res.send(sampleData.physicians);
});

app.get('/physicians/:physicianid/patients', (req, res) => {
  const { physicianid } = req.params;
  const patients = sampleData.patients.filter((patient) => {
    return patient.physician_id === Number(physicianid);
  });
  res.send(patients);
})

app.patch('/physician/:physicianid/patients/:patientid', (req, res) => {
  const { physicianid, patientid } = req.params;
  const { time } = req.body
  const patients = sampleData.patients.filter((patient) => {
    if (patient.physician_id === Number(physicianid)) {
      if (patient.id === Number(patientid)) {
        patient.time = time;
      }
      return patient;
    }
  })
  res.send(patients);
})

app.delete('/patients/:id', (req, res) => {
  console.log(req.body)
  const { appttime } = req.body;
  const physicianID = req.params.id;
  const patients = sampleData.patients.filter((patient) => {
    if (patient.physician_id === Number(physicianID)) {
      console.log(patient.time, appttime)
      if (patient.time !== appttime) {
        return patient;
      }
    }
  })
  console.log(patients)
  res.send(patients);
}) 

app.listen(port, () => console.log(`Listening from port: ${port}`))
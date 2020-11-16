module.exports = {
  physicians: [
    {
      id: 1,
      firstName: 'Julia',
      lastName: 'Hibbert',
      email: 'hibbert@notable.com',
      clicked: false,
    },
    { 
      id: 2,
      firstName: 'Algernop',
      lastName: 'Krieger',
      email: 'krieger@notable.com',
      clicked: false,
    },
    {
      id: 3,
      firstName: 'Nick',
      lastName: 'Riviera',
      email: 'Riviera@notable.com',
      clicked: false,
    }
  ],
  patients: [
    {
      firstName: 'John',
      lastName: 'Doe',
      time: '08:30',
      kind: 'New Patient',
      physician_id: 1,
    },
    {
      firstName: 'Helen',
      lastName: 'Cho',
      time: '10:00',
      kind: 'Follow-up',
      physician_id: 1,
    },
    {
      firstName: 'Sterling',
      lastName: 'Archer',
      time: '08:00',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      firstName: 'Cyril',
      lastName: 'Figis',
      time: '08:30',
      kind: 'Follow-up',
      physician_id: 2,
    },
    {
      firstName: 'Ray',
      lastName: 'Gilette',
      time: '09:00',
      kind: 'Follow-up',
      physician_id: 2,
    },
    {
      firstName: 'Lana',
      lastName: 'Kane',
      time: '09:30',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      firstName: 'Pan,',
      lastName: 'Poovey',
      time: '10:00',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      firstName: 'Ben',
      lastName: 'Joseph',
      time: '09:00',
      kind: 'Follow-up',
      physician_id: 3,
    },
    {
      firstName: 'Tay',
      lastName: 'Lee',
      time: '10:00',
      kind: 'Follow-up',
      physician_id: 3,
    },
    {
      firstName: 'Jose',
      lastName: 'Rodgriquez',
      time: '10:30',
      kind: 'New Patient',
      physician_id: 3,
    },
  ]
}
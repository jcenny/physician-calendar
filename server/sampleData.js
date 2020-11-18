module.exports = {
  physicians: [
    {
      id: 1,
      firstName: 'Julia',
      lastName: 'Hibbert',
      email: 'hibbert@notable.com',
    },
    { 
      id: 2,
      firstName: 'Algernop',
      lastName: 'Krieger',
      email: 'krieger@notable.com',
    },
    {
      id: 3,
      firstName: 'Nick',
      lastName: 'Riviera',
      email: 'Riviera@notable.com',
    }
  ],
  patients: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      date: '2020-11-17',
      time: '08:30',
      kind: 'New Patient',
      physician_id: 1,
    },
    { id: 2,
      firstName: 'Helen',
      lastName: 'Cho',
      date: '2020-11-18',
      time: '10:00',
      kind: 'Follow-up',
      physician_id: 1,
    },
    {
      id: 3,
      firstName: 'Sterling',
      lastName: 'Archer',
      date: '2020-11-17',
      time: '08:00',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      id: 4,
      firstName: 'Cyril',
      lastName: 'Figis',
      date: '2020-11-17',
      time: '08:30',
      kind: 'Follow-up',
      physician_id: 2,
    },
    {
      id: 5,
      firstName: 'Ray',
      lastName: 'Gilette',
      date: '2020-11-17',
      time: '09:00',
      kind: 'Follow-up',
      physician_id: 2,
    },
    {
      id: 6,
      firstName: 'Lana',
      lastName: 'Kane',
      date: '2020-11-18',
      time: '09:30',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      id: 7,
      firstName: 'Pan,',
      lastName: 'Poovey',
      date: '2020-11-18',
      time: '10:00',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      id: 8,
      firstName: 'Ben',
      lastName: 'Joseph',
      date: '2020-11-17',
      time: '09:00',
      kind: 'Follow-up',
      physician_id: 3,
    },
    {
      id: 9,
      firstName: 'Tay',
      lastName: 'Lee',
      date: '2020-11-17',
      time: '10:00',
      kind: 'Follow-up',
      physician_id: 3,
    },
    {
      id: 10,
      firstName: 'Jose',
      lastName: 'Rodgriquez',
      date: '2020-11-18',
      time: '10:30',
      kind: 'New Patient',
      physician_id: 3,
    },
  ]
}
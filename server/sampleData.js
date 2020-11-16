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
      time: '8:30AM',
      kind: 'New Patient',
      physician_id: 1,
    },
    {
      firstName: 'Helen',
      lastName: 'Cho',
      time: '10:00AM',
      kind: 'Follow-up',
      physician_id: 1,
    },
    {
      firstName: 'Sterling',
      lastName: 'Archer',
      time: '8:00AM',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      firstName: 'Cyril',
      lastName: 'Figis',
      time: '8:30AM',
      kind: 'Follow-up',
      physician_id: 2,
    },
    {
      firstName: 'Ray',
      lastName: 'Gilette',
      time: '9:00AM',
      kind: 'Follow-up',
      physician_id: 2,
    },
    {
      firstName: 'Lana',
      lastName: 'Kane',
      time: '9:30AM',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      firstName: 'Pan,',
      lastName: 'Poovey',
      time: '10:00AM',
      kind: 'New Patient',
      physician_id: 2,
    },
    {
      firstName: 'Ben',
      lastName: 'Joseph',
      time: '9:00AM',
      kind: 'Follow-up',
      physician_id: 3,
    },
    {
      firstName: 'Tay',
      lastName: 'Lee',
      time: '10:00AM',
      kind: 'Follow-up',
      physician_id: 3,
    },
    {
      firstName: 'Jose',
      lastName: 'Rodgriquez',
      time: '10:30AM',
      kind: 'New Patient',
      physician_id: 3,
    },
  ]
}
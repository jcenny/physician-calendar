import React from 'react';

function PhysiciansList({physicians}) {
  return (
    <div>
      <h1>notable</h1>
      {physicians.map((physician) => (
        <div>{`${physician.lastName}, ${physician.firstName}`}</div>
      ))}
    </div>
  )
}

export default PhysiciansList;
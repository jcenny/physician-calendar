import React from 'react';

function PhysiciansList({ physicians, handleClick }) {

  return (
    <div>
      <h1>notable</h1>
      {physicians.map((physician) => (
        <div data-email={physician.email} onClick={handleClick}>{`${physician.lastName}, ${physician.firstName}`}</div>
      ))}
    </div>
  )
}

export default PhysiciansList;
import React from 'react';

function PhysiciansList({ physicians, handleClick }) {

  return (
    <div>
      {physicians.map((physician) => (
        <div key={physician.email} data-email={physician.email} onClick={handleClick}>{`${physician.lastName}, ${physician.firstName}`}</div>
      ))}
    </div>
  )
}

export default PhysiciansList;
import React from 'react';

function PhysiciansList({ physicians, handleClick }) {

  const handlePhysicianClick = (e) => {
    handleClick(e.target.id);
  }

  return (
    <div>
      {physicians.map((physician) => (
        <div 
          id={physician.id}
          key={physician.email} 
          onClick={handleClick}>
            {`${physician.lastName}, ${physician.firstName}`}
        </div>
      ))}
    </div>
  )
}

export default PhysiciansList;
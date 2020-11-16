import React, { useState } from 'react';
import PhysiciansList from './PhysiciansList.jsx';

function LeftNav({ physicians, handleClick }) {
  return (
    <div>
      <h1>notable</h1>
      <PhysiciansList physicians={physicians} handleClick={handleClick}/>
    </div>
  )
}

export default LeftNav;
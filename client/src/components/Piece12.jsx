import React from 'react';

function Piece12({number, resource, color}) {
  return (
    <span className="p12" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece12;
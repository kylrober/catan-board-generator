import React from 'react';

function Piece1({number, resource, color}) {
  return (
    <span className="p1" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece1;
import React from 'react';

function Piece4({number, resource, color}) {
  return (
    <span className="p4" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece4;
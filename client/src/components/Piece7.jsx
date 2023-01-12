import React from 'react';

function Piece7({number, resource, color}) {
  return (
    <span className="p7" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece7;
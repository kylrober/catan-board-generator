import React from 'react';

function Piece5({number, resource, color}) {
  return (
    <span className="p5" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece5;
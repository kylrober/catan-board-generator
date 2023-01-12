import React from 'react';

function Piece3({number, resource, color}) {
  return (
    <span className="p3" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece3;
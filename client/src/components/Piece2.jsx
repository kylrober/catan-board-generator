import React from 'react';

function Piece2({number, resource, color}) {
  return (
    <span className="p2" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece2;
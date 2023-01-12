import React from 'react';

function Piece6({number, resource, color}) {
  return (
    <span className="p6" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece6;
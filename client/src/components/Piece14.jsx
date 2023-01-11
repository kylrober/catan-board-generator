import React from 'react';

function Piece14({number, resource, color}) {
  return (
    <span className="p14" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece14;
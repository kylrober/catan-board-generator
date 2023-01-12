import React from 'react';

function Piece8({number, resource, color}) {
  return (
    <span className="p8" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece8;
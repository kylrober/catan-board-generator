import React from 'react';

function Piece13({number, resource, color}) {
  return (
    <span className="p13" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece13;
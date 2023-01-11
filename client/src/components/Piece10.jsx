import React from 'react';

function Piece10({number, resource, color}) {
  return (
    <span className="p10" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece10;
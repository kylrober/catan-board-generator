import React from 'react';

function Piece16({number, resource, color}) {
  return (
    <span className="p16" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece16;
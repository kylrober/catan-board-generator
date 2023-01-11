import React from 'react';

function Piece0({number, resource, color}) {
  return (
    <span className="p0" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece0;
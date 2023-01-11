import React from 'react';

function Piece17({number, resource, color}) {
  return (
    <span className="p17" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece17;
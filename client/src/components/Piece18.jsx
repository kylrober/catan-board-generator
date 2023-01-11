import React from 'react';

function Piece18({number, resource, color}) {
  return (
    <span className="p18" style={{background: `${color}`}}>
      {number} {resource}&nbsp;
    </span>
  );
}

export default Piece18;
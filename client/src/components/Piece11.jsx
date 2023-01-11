import React from 'react';

function Piece11({number, resource, color}) {
  return (
    <span className="p11" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece11;
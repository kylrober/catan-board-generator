import React from 'react';

function Piece9({number, resource, color}) {
  return (
    <span className="p9" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece9;
import React from 'react';

function Piece15({number, resource, color}) {
  return (
    <span className="p15" style={{background: `${color}`}}>
      {number} {resource}
    </span>
  );
}

export default Piece15;
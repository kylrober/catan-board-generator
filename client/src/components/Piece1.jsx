import React from 'react';

function Piece1({number, resource}) {
  return (
    <span className="p1">
      {number} {resource}&nbsp;
    </span>
  );
}

export default Piece1;
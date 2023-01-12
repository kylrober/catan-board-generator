import React from 'react';
import Hexagon from 'react-hexagon'

function Piece9({number, resource, color}) {
  let xPos = '42.5%';
  const adjustXPos = () => {
    if (number > 9) {
      xPos = '32.5%';
    }
  }
  adjustXPos();

  return (
    <span className="piece">
      <Hexagon
        style={{stroke: 'wheat', fill: `${color}`}}
        className="hex">
        <text x={xPos} y="57.5%" fill="black">{number}</text>
      </Hexagon>
    </span>
  );
}

export default Piece9;
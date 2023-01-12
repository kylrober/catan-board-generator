import React from 'react';
import Hexagon from 'react-hexagon'

function Piece6({number, resource, color}) {
  let xPos = '42.5%';
  const adjustXPos = () => {
    if (number > 9) {
      xPos = '32.5%';
    }
  }
  adjustXPos();

  let image = "";
  const setImage = () => {
    if (resource === 'sheep') {
      image = '../assets/Type01.png'
    }
    if (resource === 'stone') {
      image = '../assets/Type02.png'
    }
    if (resource === 'wood') {
      image = '../assets/Type03.png'
    }
    if (resource === 'wheat') {
      image = '../assets/Type04.png'
    }
    if (resource === 'brick') {
      image = '../assets/Type05.png'
    }
    if (resource === 'desert') {
      image = '../assets/Type06.png'
    }
  }
  setImage();

  return (
    <span className="piece">
      <Hexagon
        style={{stroke: 'wheat', strokeOpacity: 0}}
        backgroundImage={image}
        className="hex">
        <text x={xPos} y="57.5%" fill="white">{number}</text>
      </Hexagon>
    </span>
  );
}

export default Piece6;
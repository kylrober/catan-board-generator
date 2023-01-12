import React from 'react';

const Ports = ({ports, portImgs}) => {
  return (
    <div className="ports">
      <div className="place">place ports clockwise starting at 12 noon from left to right</div>
      <div>
        <img src={portImgs[0]}></img>
        <img src={portImgs[1]}></img>
        <img src={portImgs[2]}></img>
        <img src={portImgs[3]}></img>
        <img src={portImgs[4]}></img>
        <img src={portImgs[5]}></img>
        <img src={portImgs[6]}></img>
        <img src={portImgs[7]}></img>
        <img src={portImgs[8]}></img>
      </div>
    </div>
  );
}

export default Ports;
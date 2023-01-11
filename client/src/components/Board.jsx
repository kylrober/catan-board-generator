import React from 'react';
import Piece0 from './Piece0.jsx'
import Piece1 from './Piece1.jsx'
import Piece2 from './Piece2.jsx'
import Piece3 from './Piece3.jsx'
import Piece4 from './Piece4.jsx'
import Piece5 from './Piece5.jsx'
import Piece6 from './Piece6.jsx'
import Piece7 from './Piece7.jsx'
import Piece8 from './Piece8.jsx'
import Piece9 from './Piece9.jsx'
import Piece10 from './Piece10.jsx'
import Piece11 from './Piece11.jsx'
import Piece12 from './Piece12.jsx'
import Piece13 from './Piece13.jsx'
import Piece14 from './Piece14.jsx'
import Piece15 from './Piece15.jsx'
import Piece16 from './Piece16.jsx'
import Piece17 from './Piece17.jsx'
import Piece18 from './Piece18.jsx'

const { useState, useEffect } = React;

function Board( {numbers, resources, colors} ) {

  return (
    <div className="board">
      <div className="row">
      < Piece0 className="piece" number={numbers[0]} resource={resources[0]} color={colors[0]}/>
      < Piece1 number={numbers[1]} resource={resources[1]} color={colors[1]} />
      < Piece2 number={numbers[2]} resource={resources[2]} color={colors[2]} />
      </div>
      <br></br>
      <div className="row">
      < Piece3 number={numbers[3]} resource={resources[3]} color={colors[3]}/>
      < Piece4 number={numbers[4]} resource={resources[4]} color={colors[4]}/>
      < Piece5 number={numbers[5]} resource={resources[5]} color={colors[5]}/>
      < Piece6 number={numbers[6]} resource={resources[6]} color={colors[6]}/>
      </div>
      <br></br>
      <div className="row">
      < Piece7 number={numbers[7]} resource={resources[7]} color={colors[7]}/>
      < Piece8 number={numbers[8]} resource={resources[8]} color={colors[8]}/>
      < Piece9 number={numbers[9]} resource={resources[9]} color={colors[9]}/>
      < Piece10 number={numbers[10]} resource={resources[10]} color={colors[10]}/>
      < Piece11 number={numbers[11]} resource={resources[11]} color={colors[11]}/>
      </div>
      <br></br>
      <div className="row">
      < Piece12 number={numbers[12]} resource={resources[12]} color={colors[12]}/>
      < Piece13 number={numbers[13]} resource={resources[13]} color={colors[13]}/>
      < Piece14 number={numbers[14]} resource={resources[14]} color={colors[14]}/>
      < Piece15 number={numbers[15]} resource={resources[15]} color={colors[15]}/>
      </div>
      <br></br>
      <div className="row">
      < Piece16 number={numbers[16]} resource={resources[16]} color={colors[16]}/>
      < Piece17 number={numbers[17]} resource={resources[17]} color={colors[17]}/>
      < Piece18 number={numbers[18]} resource={resources[18]} color={colors[18]}/>
      </div>
    </div>
  );
}

export default Board;
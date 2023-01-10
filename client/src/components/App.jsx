import React from 'react';
import Board from './Board.jsx';
import _ from 'underscore';
// import '../styles.css'

const { useState, useEffect } = React;

function App() {
  const [numbers, setNumbers] = useState([0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12]);
  const [resources, setResources] = useState(['desert', 'stone', 'stone', 'stone', 'brick', 'brick', 'brick', 'wood', 'wood', 'wood', 'wood', 'wheat', 'wheat', 'wheat', 'wheat', 'sheep', 'sheep', 'sheep', 'sheep']);

  const shuffleNumbers = () => {
    const newNumbers = _.shuffle(numbers);
    console.log(newNumbers);
    setNumbers(newNumbers);
    shuffleResources();
  }

  const shuffleResources = () => {
    const newResources = _.shuffle(resources)
    console.log(newResources);
    setResources(newResources);
  }

  return (
    <div className="page">
      <h1 className="title">catan board generator</h1>
      <h3 className="author">by kyle</h3>
      <button onClick={shuffleNumbers}>generate random board</button>
      <br></br>
      <button>save this board</button>
      <br></br>
      < Board numbers={numbers} resources={resources}/>
    </div>
  );
}

export default App;
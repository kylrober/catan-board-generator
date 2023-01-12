import React from 'react';
import Board from './Board.jsx';
import _ from 'underscore';

const { useState, useEffect } = React;

function App() {
  const [numbers, setNumbers] = useState([0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12]);
  const [resources, setResources] = useState(['desert', 'stone', 'stone', 'stone', 'brick', 'brick', 'brick', 'wood', 'wood', 'wood', 'wood', 'wheat', 'wheat', 'wheat', 'wheat', 'sheep', 'sheep', 'sheep', 'sheep']);
  const [colors, setColors] = useState([]);

  const shuffleNumbers = () => {
    const newNumbers = _.shuffle(numbers);
    setNumbers(newNumbers);
    shuffleResources(newNumbers);
  }

  const shuffleResources = (newNums) => {
    const newResources = _.shuffle(resources)
    setResources(newResources);
    fixDesert(newResources, newNums);
  }

  const getColors = (res) => {
    const result = [];
    for (let i = 0; i < res.length; i++) {
      if (res[i] === 'desert') {
        result.push('#EADDCA');
      }
      if (res[i] === 'stone') {
        result.push('gray');
      }
      if (res[i] === 'brick') {
        result.push('#cc474b');
      }
      if (res[i] === 'wood') {
        result.push('forestgreen');
      }
      if (res[i] === 'wheat') {
        result.push('#FFCC00');
      }
      if (res[i] === 'sheep') {
        result.push('seashell');
      }
    }
    setColors(result);
  }

  const fixDesert = (sources, nums) => {
    let index;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        index = i;
      }
    }
    for (let j = 0; j < sources.length; j++) {
      if (sources[j] === 'desert') {
        let temp = sources[index];
        sources[index] = 'desert';
        sources[j] = temp;
      }
    }
    setResources(sources);
    getColors(sources);
  }

  return (
    <div className="page">
      <h1 className="title">catan board generator</h1>
      <h3 className="author">by kyl</h3>
      <div className="btn-div">
        <button className="btn" onClick={shuffleNumbers}>generate random board</button>
      </div>
      <div className="btn-div">
        <button className="btn">save this board</button>
      </div>
      <div>
        < Board numbers={numbers} resources={resources} colors={colors} />
      </div>
    </div>
  );
}

export default App;
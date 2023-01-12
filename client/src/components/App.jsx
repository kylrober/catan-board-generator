import React from 'react';
import Board from './Board.jsx';
import Ports from './Ports.jsx';
import _ from 'underscore';
import axios from 'axios';

const { useState, useEffect } = React;

function App() {
  const [numbers, setNumbers] = useState([0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12]);
  const [resources, setResources] = useState(['desert', 'stone', 'stone', 'stone', 'brick', 'brick', 'brick', 'wood', 'wood', 'wood', 'wood', 'wheat', 'wheat', 'wheat', 'wheat', 'sheep', 'sheep', 'sheep', 'sheep']);
  const [ports, setPorts] = useState(['31any', '31any', '31any', '31any', '21stone', '21brick', '21wood', '21wheat', '21sheep']);
  const [portImgs, setPortImgs] = useState(['../assets/31any.png', '../assets/31any.png', '../assets/31any.png', '../assets/31any.png', '../assets/21stone.png', '../assets/21brick.png', '../assets/21wood.png', '../assets/21wheat.png', '../assets/21sheep.png']);
  const [colors, setColors] = useState([]);

  const shuffleNumbers = () => {
    const newNumbers = _.shuffle(numbers);
    setNumbers(newNumbers);
    shuffleResources(newNumbers);
    shufflePorts();
    shufflePortImgs();
  }

  const shuffleResources = (newNums) => {
    const newResources = _.shuffle(resources)
    setResources(newResources);
    fixDesert(newResources, newNums);
  }

  const shufflePorts = () => {
    const newPorts = _.shuffle(ports);
    setPorts(newPorts);
  }

  const shufflePortImgs = () => {
    const newPortImgs = _.shuffle(portImgs);
    setPortImgs(newPortImgs);
  }

  const getColors = (res) => {
    const result = [];
    for (let i = 0; i < res.length; i++) {
      if (res[i] === 'desert') {
        // result.push('#EADDCA');
        result.push('tan');
      }
      if (res[i] === 'stone') {
        result.push('gray');
      }
      if (res[i] === 'brick') {
        // result.push('#cc474b');
        result.push('#C04000');
      }
      if (res[i] === 'wood') {
        result.push('#355E3B');
      }
      if (res[i] === 'wheat') {
        result.push('#FFCC00');
      }
      if (res[i] === 'sheep') {
        // result.push('seashell');
        result.push('#98FB98');
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

  const saveBoard = () => {
    let data = {
      numbers: numbers,
      resources: resources,
      colors: colors
    }
    axios.post('http://localhost:3000/boards', data)
      .then((res) => {
        console.log('successful post request in save')
      })
      .catch((err) => {
        console.log('err in save ', err)
      });
  }

  useEffect(() => {
    shuffleNumbers();
  }, [])

  return (
    <div className="page">
      <h1 className="title">catan board generator</h1>
      <h3 className="author">by kyl</h3>
      <div className="btn-div">
        <button className="btn" onClick={shuffleNumbers}>generate random board</button>
      </div>
      <div className="btn-div">
        <button className="btn" onClick={saveBoard}>save this board</button>
      </div>
      <div>
        < Board numbers={numbers} resources={resources} colors={colors} />
      </div>
      <div>
        < Ports ports={ports} portImgs={portImgs} />
      </div>
    </div>
  );
}

export default App;
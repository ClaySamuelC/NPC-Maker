import React from 'react';
import './Weight.css';

const Weight = ({row, setWeight}) => {
  const changeWeight = (x) => {
    const newWeight = {
      name: row.name,
      weight: row.weight + x
    }

    setWeight(newWeight.name, newWeight);
  };

  return (
    <li className="tableRow">
      <div className="weightName">{row.name}</div>

      <div className="weightContainer">
        <div className="arrowButton arrowButtonUp" onClick={() => changeWeight(1)}/>
        
        <div className="weightValue">{row.weight}</div>

        <div className="arrowButton arrowButtonDown" onClick={() => changeWeight(-1)} />
      </div>
    </li>
  )
}

export default Weight;

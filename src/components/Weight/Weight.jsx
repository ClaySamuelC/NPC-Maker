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
    <div className="weightContainer">
      <button className="arrowButtons" onClick={() => changeWeight(1)}>
        <div className="arrowButton arrowButtonUp" />
      </button>
      
      <div className="weightValue">{row.weight}</div>
      
      <button className="arrowButtons" onClick={() => changeWeight(-1)}>
        <div className="arrowButton arrowButtonDown" />
      </button>
    </div>
  )
}

export default Weight;

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
      <button className="weightUp" onClick={() => changeWeight(1)}>Up</button>
      <div className="weightValue">{row.weight}</div>
      <button className="weightDown" onClick={() => changeWeight(-1)}>Down</button>
    </div>
  )
}

export default Weight;

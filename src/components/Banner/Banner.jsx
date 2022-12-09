import React from 'react';
import './Banner.css';
import {tables} from '../../dict.js';

const Banner = ({setTable, setCharacter, createCharacter}) => {
  return (
    <div className="banner">
      <h1 className="bannerTitle">NPC Maker</h1>

      <div className="contentTypes">
        <div>Characters</div>
        <div className="tables">
          <div>Tables</div>
          {tables.map((el, i) => {
            return (
              <button className="tableButton" key={i} onClick={() => setTable(el)}>{el.title}</button>
            )
          })}
        </div>
        
        <div className="characterCreation">
          <div className="characterCreationDescription">Create a Character</div>

          <button className="characterCreationButton" onClick={() => setCharacter(createCharacter())}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

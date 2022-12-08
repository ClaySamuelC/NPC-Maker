import React from 'react';
import './Banner.css';
import {tables} from '../../dict.js';

const Banner = ({setTable}) => {
  return (
    <div className="banner">
      <h1 className="title">NPC Maker</h1>

      <div className="contentTypes">
        <div className="contentType">Characters</div>
        <div className="tables">
          <div>Tables</div>
          {tables.map((el, i) => {
            return (
              <button className="tableTitle" key={i} onClick={() => setTable(el)}>{el.title}</button>
            )
          })}
        </div>
        <div className="contentType">Create a Character</div>
      </div>
    </div>
  );
};

export default Banner;

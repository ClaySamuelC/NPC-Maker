import React from 'react';
import './Character.css';

const Character = ({ character }) => {
  return (
    <div className="characterSheet">
      <div className="characterTitle">New Character</div>
      
      {character.map((trait, i) => {return(
        <div className="characterTrait" key={i}>
          <div className="characterTraitTitle">{trait.title}</div>
          <div className="characterTraitValue">{trait.value}</div>
        </div>
      )})}
    </div>
  );
};

export default Character;

import React from 'react'
import {rollTable} from '../roller.js';
import './Trait.css';

const Trait = ({ table }) => {
  return (
    <li className='characterRow'>
      <div className='traitTitle'>{table.title}</div>
      <div className='traitDescription'>{rollTable(table)}</div>
    </li>
  );
};

export default Trait;

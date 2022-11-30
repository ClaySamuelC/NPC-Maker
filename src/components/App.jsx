import React from 'react'

import './App.css';
import {tables} from '../dict.js';
import Trait from './Trait.jsx';
import Table from './Table.jsx';

const App = () => {
  return (
    <div className="App">
      <Table table={tables[0]}/>

      <ul className="characterSheet">
        {tables.map((table, i) => {
          return <Trait table={table} key={i} />
        })}
      </ul>
    </div>
  );
};

export default App;

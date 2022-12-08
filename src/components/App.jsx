import React, {useState} from 'react'

import './App.css';
import {tables} from '../dict.js';
import Table from './Table/Table.jsx';
import Banner from './Banner/Banner.jsx';

const App = () => {
  const [currentTable, setCurrentTable] = useState(tables[0]);
  
  return (
    <div className="app">
      <Banner setTable={setCurrentTable} />

      <Table table={currentTable} />
    </div>
  );
};

export default App;

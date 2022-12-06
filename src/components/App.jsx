import React from 'react'

import './App.css';
import {tables} from '../dict.js';
import Trait from './Trait/Trait.jsx';
import Table from './Table/Table.jsx';
import Banner from './Banner/Banner.jsx';

const App = () => {
  return (
    <div className="app">
      <Banner />

      <Table table={tables[0]}/>
    </div>
  );
};

export default App;

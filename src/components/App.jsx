import React, {useState} from 'react'

import './App.css';
import {tables} from '../dict.js';
import Table from './Table/Table.jsx';
import Banner from './Banner/Banner.jsx';
import Character from './Character/Character.jsx';
import {rollTable} from '../roller.js';

const App = () => {
  const createCharacter = () => {
    return tables.map((table) => {
      return {
        title: table.title,
        value: rollTable(table)
      }
    });
  };

  const [currentTable, setCurrentTable] = useState(tables[0]);

  const [currentCharacter, setCurrentCharacter] = useState(createCharacter());

  return (
    <div className="app">
      <Banner setTable={setCurrentTable} setCharacter={setCurrentCharacter} createCharacter={createCharacter} />

      <Table table={currentTable} />

      <Character character={currentCharacter} />
    </div>
  );
};

export default App;

import './App.css';
import {tables} from './dict.js';
import {rollTable} from './roller.js';

function App() {
  const rows = tables.map(function(table, i) {
    return (
      <div className="characterTrait" key={'' + table + i}>
        {table.title + ': ' + rollTable(table)}
      </div>
    );
  });

  return (
    <div className="App">
      {rows}
    </div>
  );
};

export default App;

import React, {useState, useEffect} from 'react';
import Weight from '../Weight/Weight.jsx';
import './Table.css';

const Table = ({ table }) => {
  const [rows, setRows] = useState(table.values);

  const handleUpdateRows = (name, updatedRow) => {
    setRows(rows.map((row) =>
      row.name === name ? updatedRow : row
    ));
  };

  useEffect(() => setRows(table.values), [table]);

  return (
    <div className="table">
      <div className="tableHeader">
        <div className="tableTitle">{table.title}</div>
        <div className="tableTotal">Size: {table.diceValue}</div>
      </div>

      <div className="tableContainer">
      {rows.map((el, i) => {return (
        <Weight key={i} row={rows[i]} setWeight={handleUpdateRows}/>
      )})}
      </div>

      <button className="saveButton">Save</button>
    </div>
  )
}

export default Table;

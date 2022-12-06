import React, {useState} from 'react';
import Weight from '../Weight/Weight.jsx';
import './Table.css';

const Table = ({ table }) => {
  const [rows, setRows] = useState(table.values);

  const handleUpdateRows = (name, updatedRow) => {
    const updatedRows = rows.map((row) =>
      row.name === name ? updatedRow : row
    );

    setRows(updatedRows);
  };

  return (
    <div className="table">
      <div className="tableTitle">{table.title}</div>
      
      <ul className="tableContainer">
        {table.values.map((el, i) => {return (
          <li className="tableRow" key={i}>
            <div className="tableItemName">{el.name}</div>
            
            <Weight row={rows[i]} setWeight={handleUpdateRows}/>
          </li>
        )})}
      </ul>

      <button className="saveButton">Save</button>
    </div>
  )
}

export default Table;

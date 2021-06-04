import React, {useState} from 'react';
import {db} from '../db';

export const Formular = () => {
  const [nazev, setNazev] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('vystavy').add({
      nazev: nazev
    })
  }
 
  return <form onSubmit={handleSubmit}>
    <label>
      Recenze:
    </label>
    <input 
      value={nazev} 
      onChange={(event) => setNazev(event.target.value)} type="text" 
    />
    {" "}
    <button>Přidat recenzi</button>
  </form>;
}
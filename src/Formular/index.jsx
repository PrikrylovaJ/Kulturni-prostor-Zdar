import React, {useState} from 'react';
import {db} from '../db';

export const Formular = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('review').add({
      name: name,
      text: text,
      date: new Date()
    })
  }
 
  return <form onSubmit={handleSubmit}>
    <label>
      Jméno:
    </label>
    <input 
      value={name} 
      onChange={(event) => setName(event.target.value)} type="text" 
    />
    <label>
      Recenze:
    </label>
    <input 
      value={text} 
      onChange={(event) => setText(event.target.value)} type="text" 
    />
    {" "}
    <button>Přidat recenzi</button>
  </form>;
}
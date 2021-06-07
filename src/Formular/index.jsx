import React, {useState} from 'react';
import {db} from '../db';
import './style.css';

export const Form = ({exhibitionId}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('exhibitions').doc(exhibitionId).collection('reviews').add({
      name: name,
      text: text,
      date: new Date()
    })
  }
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input
          value={text} 
          onChange={(event) => setText(event.target.value)} type="text" 
          />
        </label>
         <label>
          Jméno a Příjmení:
          <input 
          value={name} 
          onChange={(event) => setName(event.target.value)} type="text" 
          />
        </label>
        <button>Přidat recenzi</button>
      </form>
    </>
  )
}
import React, { useState } from 'react';
import { db } from '../../db';
import './style.css';

export const Form = ({ exhibitionId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('exhibitions').doc(exhibitionId).collection('reviews').add({
      name: name,
      text: text,
      date: new Date(),
    });
    setText('');
    setName('');
    setSent('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Napiš recenzi:</h3>
        <label>
          Text:
          <br />
          <textarea 
            value={text}
            onChange={(event) => setText(event.target.value)}
            type="text"
            rows="4"
            cols="30"
          />
        </label>
        <br />
        <label>
          Jméno a Příjmení:
          <br />
          <textarea 
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            rows="2"
            cols="30"
          />
        </label>
        <br />
        <button className="btn recenze">Přidat recenzi</button>
        <div
          style={{
            display: sent === false ? 'none' : 'block',
            fontSize: '18px',
            marginTop: '5px',
          }}
        >
          Děkujeme za recenzi.
        </div>
      </form>
    </>
  );
};

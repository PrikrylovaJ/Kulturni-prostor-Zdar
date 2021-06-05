import React from 'react';
import './style.css';

export const Tickets = () => {
  return (
    <>
      <h2>Nákup vstupenek</h2>
      <form action="">
        <label>
          Počet
        </label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">5</option>
            <option value="7">6</option>
            <option value="8">7</option>
            <option value="9">8</option>
            <option value="4">9</option>
          </select>
        <label>
          Celkem
        </label>
          <input type="text" />
        <h2>Kontaktní osoba</h2>
        <label>
          Jméno
        </label>
          <input type="text" />
        <label>
          Přijmení
        </label>
          <input type="text" />
        <label>
          Email
        </label>
          <input type="text" type="email"/>
        <label>
          Telefon
        </label>
          <input type="text" type="tel"/>
        <button>ZAPLATIT</button>
      </form>
    </>
  );
};
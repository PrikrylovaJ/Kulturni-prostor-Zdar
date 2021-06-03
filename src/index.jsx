import React from 'react';
import { render } from 'react-dom';
import { Uvodni } from './Home';
import { Hlavicka } from './Hlavicka';
import './style.css';

const App = () => {
  return (
    <>
      <Hlavicka/>
      <Uvodni/>
    </>
  )
};

render(<App />, document.querySelector('#app'));

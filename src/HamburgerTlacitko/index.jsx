import React from 'react';
import './style.css'


export const HamburgerTlacitko = ({jeOtevreno, onClick}) => {
  return (
    <button className={jeOtevreno ? 'hamburger hamburger--otevrene' : 'hamburger'} aria-label="menu" onClick={onClick}>
			<span></span>
      <span></span>
      <span></span>
    </button>
  );
};
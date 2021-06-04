import React from 'react';
import './style.css'


export const HamburgerTlacitko = ({jeOtevreno, onClick}) => {
  return (
    <button className={jeOtevreno ? 'hamburger hamburger--otevrene' : 'hamburger'} aria-label="menu" onClick={onClick}>
			{/* <span></span>
      <span></span>
      <span></span> */}
      <img className="menu" src="/assets/Ostatni/menu.png" alt="" />
    </button>
  );
};
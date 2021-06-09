import React from 'react';
import './style.css'


export const HamburgerButton = ({isOpen, onClick}) => {
  return (
    <button className={isOpen ? 'hamburger hamburger--otevrene' : 'hamburger'} aria-label="menu" onClick={onClick}>
      <img className="hamburger-menu" src="/assets/Ostatni/menu.png" alt="" />
    </button>
  );
};
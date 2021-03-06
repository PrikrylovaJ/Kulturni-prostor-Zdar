import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { HamburgerButton } from './HamburgerButton';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="header header__fixed">
          <div className="header__container">
            <div className="header__logo">
              <Link to="/">KPZ.</Link>
            </div>
            <div>
              <div className="header__hamburger">
                <HamburgerButton
                  isOpen={isOpen}
                  onClick={handleClickHamburger}
                />
              </div>
              <nav
                onClick={() => setIsOpen(false)}
                className={
                  isOpen
                    ? 'header__navigation'
                    : 'header__navigation header__navigation--closed'
                }
              >
                <Link to="/">Domů</Link>
                <Link to="/exhibitions">Výstavy</Link>
                <Link to="/space">Pronájem</Link>
                <Link to="/courses">Kurzy</Link>
                <Link to="/contact">Kontakt</Link>
                <Link to="/about-us">O nás</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

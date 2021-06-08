import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { HamburgerButton } from '../HamburgerButton';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="header">
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
                className={
                  isOpen
                    ? 'header__navigation'
                    : 'header__navigation header__navigation--closed'
                }
              >
                <Link to="/">Domů</Link>
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

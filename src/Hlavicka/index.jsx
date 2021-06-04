import React, {useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { HamburgerTlacitko } from "../HamburgerTlacitko";



export const Hlavicka = () => {
  const [jeOtevreno, setJeOtevreno] = useState(false);

  const handleKliknaHamburger = () => {
   setJeOtevreno(!jeOtevreno);
  }

  return (
    <>
      <header>
        <div className="hlavicka">
          <div className="hlavicka__container">
            <div className="hlavicka__logo">KPZ.</div>
            <div>
              <div className="hlavicka__hamburger">
                <HamburgerTlacitko 
                  jeOtevreno={jeOtevreno}
                  onClick={handleKliknaHamburger}
                />
              </div>
              <nav className={jeOtevreno ? "hlavicka__navigace": 'hlavicka__navigace hlavicka__navigace--zavreno'}>
                <Link to="/">Domů</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/o-nas">O nás</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
     
    </>
  );
};





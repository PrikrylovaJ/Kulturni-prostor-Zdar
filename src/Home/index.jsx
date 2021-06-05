import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Uvodni = () => {
  return (
    <>
      <main>
        <section className="homepage">
          <div className="homepage__container">
            <div className="homepage__content">
              <h1>KULTURNÍ PROSTOR ZDAR</h1>
              <p className="homepage__text">
                Originální prostor pro umělecké aktivity všech kulturymilovných
                ve čtvrti, kde to žije! Pořádáme výstavy, kurzy, koncerty,
                přednášky. Nezbytností je útulná kavárna pro tvorbu i neformální
                setkání. Prostor je k dispozici i pro vaše akce.
              </p>
            </div>
            <div className="homepage__galerie">
              <div className="homepage_section1">
                <Link to="/vystavy">Výstavy</Link>
                <img src="/assets/Ostatni/arrow.png" width="50px" alt="" />
              </div>
              <img
                src="/assets/Adelheid Ka/AdelheidKa3.jpg"
                width="50%"
                alt=""
              />
              <div className="homepage_section1">
                <h2>Pronájem prostor</h2>
                <img src="/assets/Ostatní/arrow.png" width="50px" alt="" />
              </div>
              <img
                src="/assets/Adelheid Ka/AdelheidKa4.jpg"
                width="50%"
                alt=""
              />
              <div className="homepage_section1">
                <h2>Kurzy</h2>
                <img src="/assets/Ostatni/arrow.png" width="50px" alt="" />
              </div>
              <img
                src="/assets/Adelheid Ka/AdelheidKa5.jpg"
                width="50%"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

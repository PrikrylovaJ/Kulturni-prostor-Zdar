import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Homepage = () => {
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
              <div className="homepage_section exhibitions">
                <Link to="/exhibitions">
                  <h2>Výstavy</h2>
                  <img
                    src="/assets/Ostatni/AdelheidKa3.jpg"
                    alt="obrazek_vystavy"
                  />
                </Link>
              </div>
              <div className="homepage_section prostor">
                <Link to="/space">
                  <h2>Pronájem prostor</h2>
                  <img
                    src="/assets/Space/interier1.jpg"
                    alt="obrazek_interieru"
                  />
                </Link>
              </div>
              <div className="homepage_section courses">
                <h2>Kurzy</h2>
                <img
                  src="/assets/Ostatni/courses.jpg"
                  alt="obrazek_vytvarneho_kurzu"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

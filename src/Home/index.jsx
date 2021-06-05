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
              <div className="homepage_section exhibitions">
<<<<<<< HEAD
                <Link to="/vystavy">
                  <h2>Výstavy</h2>
                  {/*<img src="/assets/Ostatni/arrow.png" alt="" />*/}
=======
                <Link to="/exhibitions">Výstavy</Link>
                {/*<img src="/assets/Ostatni/arrow.png" alt="" />*/}
>>>>>>> 645f6eca7d96fb34ac77fc5a521cc0889b12c517

                  <img
                    src="/assets/Adelheid Ka/AdelheidKa3.jpg"
                    width="50%"
                    alt=""
                  />
                </Link>
              </div>
              <div className="homepage_section rent">
                <h2>Pronájem prostor</h2>
                {/* <img src="/assets/Ostatní/arrow.png" width="50px" alt="" />*/}

                <img
                  src="/assets/Adelheid Ka/AdelheidKa4.jpg"
                  width="50%"
                  alt=""
                />
              </div>
              <div className="homepage_section courses">
                <h2>Kurzy</h2>
                {/*<img src="/assets/Ostatni/arrow.png" width="50px" alt="" />*/}

                <img src="/assets/Ostatni/courses.jpg" width="50%" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

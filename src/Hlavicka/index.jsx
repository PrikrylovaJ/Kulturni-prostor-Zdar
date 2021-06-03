import React, {useState} from 'react';
import './style.css';
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
                <a href="/">Domů</a>
                <a href="/kontakt">Kontakt</a>
                <a href="/o-nas">O nás</a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="homepage">
          <div className="homepage__container">
            <div className="homepage__content">
              <h1>KULTURNÍ PROSTOR ZDAR</h1>
              <p className="homepage__text">Originální prostor pro umělecké aktivity všech kulturymilovných ve
                  čtvrti, kde to žije! Pořádáme výstavy, kurzy, koncerty, přednášky.
                  Nezbytností je útulná kavárna pro tvorbu i neformální setkání. Prostor
                  je k dispozici i pro vaše akce.</p>
            </div>
            <div className="homepage__galerie">
              <div className="homepage_section1">
                <h2>Výstavy</h2>
                <img src="/assets/arrow.png" width="50px" alt="" />
              </div>
              <img src="/assets/adelka3.jpg" width="50%" alt="" />
              <div className="homepage_section1">
                <h2>Pronájem prostor</h2>
                <img src="/assets/arrow.png" width="50px" alt="" />
              </div>
              <img src="/assets/Adelka5.jpg" width="50%" alt="" />
              <div className="homepage_section1">
                <h2>Kurzy</h2>
                <img src="/assets/arrow.png" width="50px" alt="" />
              </div>
              <img src="/assets/Adelka6.jpg" width="50%" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};



// -------------puvodni reseni---------------


// import React, {useState} from 'react';
// import './style.css';
// import { HamburgerTlacitko } from "../HamburgerTlacitko";



// export const Hlavicka = () => {
//   const [jeOtevreno, setJeOtevreno] = useState(false);

//   const handleKliknaHamburger = () => {
//    setJeOtevreno(!jeOtevreno);
//   }

//   return (
//     <header className="hlavicka">
//       <div className="hlavicka__burger">
//         <HamburgerTlacitko 
//           jeOtevreno={jeOtevreno}
//           onClick={handleKliknaHamburger}
//         />
//       </div>
//       <nav className={jeOtevreno ? "hlavicka__navigace": 'hlavicka__navigace hlavicka__navigace--zavreno'}>
//         <a href="/">Domů</a>
//         <a href="/kontakt">Kontakt</a>
//         <a href="/o-nas">O nás</a>
//       </nav>
//     </header>
//   );
// };

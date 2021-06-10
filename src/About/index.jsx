import React from 'react';
import './style.css';

export const About = () => {
  return (
    <main>
      <div className="contact__content">
        <h1>KULTURNÍ PROSTOR ZDAR</h1>
        <div className="contacts">
          <div>
            <h2 className="mp">Náš příběh</h2>
            <p className="space__text">
              Jsme dvě kamarádky, které dala dohromady společná záliba v
              estetičnu. Máme prostor a chceme propojit komunitu nezávyslých
              výtvarníků a laickou veřejnost. Vytvořit místo, kde se budou dít
              zajímavé akce a setkávat inspirativní lidé.
            </p>
            <hr />
          </div>
        </div>
        <div className="about-container">
          <div className="about-card">
            <h2 className="about-card__person">Jana Voborská</h2>
            <img
              className="about-card__photo"
              src="./assets/Ostatni/JV.jpg"
              width="180px"
              height="180px"
              alt=""
            />
            <p className="about-card__info">
              Vyrůstala jsem v uměleckém prostředí, a ač se moje profesní dráha
              ubírala jiným směrem - deset let jsem pracovala v marketingu, nyní
              nadešel ten správný čas vrátit se zpět a zúročit zkušenosti z obou
              oblastí. Nikdy jsem českou výtvarnou scénu nepřestala sledovat,
              nikdy mě nepřestala bavit ani překvapovat!
            </p>
            <a href="https://www.facebook.com/Kikulinka01/">
              <img className="facebook" src="./assets/Ostatni/facebook.png" />
            </a>
            <a href="https://www.linkedin.com/in/jana-voborska-dostalova-14a2642a/">
              <img className="linkedin" src="./assets/Ostatni/linkedin.png" />
            </a>
          </div>
          <div className="about-card">
            <h2 className="about-card__person">Jana Přikrylová</h2>

            <img
              className="about-card__photo"
              src="./assets/Ostatni/JP.jpg"
              width="180px"
              height="180px"
              alt=""
            />

            <p className="about-card__info">
              Po základní škole jsem chtěla malovat. Nakonec mé kariérní cesty
              směřovaly do financí, ale zájem o umění přetrval formou kurzů
              malování a navštěvování výstav. Potřeba něco tvořit mě přivedla k
              mé nové zálibě v programování. Těším se na spojení obou.
            </p>
            <a href="#">
              <img className="facebook" src="./assets/Ostatni/facebook.png" />
            </a>
            <a href="https://www.facebook.com/jana.prikrylova.12">
              <img className="linkedin" src="./assets/Ostatni/linkedin.png" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

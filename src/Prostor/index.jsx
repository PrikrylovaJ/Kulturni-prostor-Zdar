import React from 'react';
import './style.css';

export const Prostor = () => {
  return (
    <main>
      <div className="contact__content">
        <h1>KULTURNÍ PROSTOR ZDAR</h1>
        <div className="contacts"></div>
        <div className="contacts">
          <div>
            <h2 className="mp">Multifunkční prostor</h2>
            <p className="prostor__text">
              Multifunkční prostor pro umělecké aktivity všech žánrů a směrů.
              Ideální pro instalaci výstav, pořádání koncertů a přednášek,
              workshopů a kurzů. Rádi poskytneme naše prostory pro pořádání
              firemních a soukromých akcí všeho druhu, když se budete chovat
              slušně{' '}
              <img
                className="ikona"
                src="./assets/Prostor/iconmonstr-smiley-10-240.png"
              ></img>
            </p>
            <section className="galerie">
              <figure className="foto">
                <img
                  src="./assets/Prostor/interier1.jpg"
                  alt="Interier pro vystavy s lampiony"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/Prostor/interier2.jpg"
                  alt="Interier pro vystavy s lampiony"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/Prostor/interier3.jpg"
                  alt="Interier pro vystavy detail okna"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/Prostor/interier4.jpg"
                  alt="Interier pro vystavy detail vystavni stena"
                ></img>
              </figure>
            </section>

            <h2>Kavárna</h2>
            <p className="kavarna__text">
              Útulná kavárna pro tvorbu i neformální setkání. Denně nabízíme
              kávu z pražírny Double shot z rukou našeho zkušeného baristy.
              Sandviče, wafle, saláty pro masoužrouty i vegany. Coctails alko i
              nealko. Nejvíc top je ale u nás perfektně ošetřený a mistrně
              načepovaný Pilsner Urquell.
            </p>
            <p className="kavarna__text">
              Na akce zajistíme catering dle domluvy a s láskou naservírujeme
              vaším hostům.
            </p>
            <section className="galerie">
              <figure className="foto vetsi">
                <img
                  src="./assets/Prostor/cafe1.jpg"
                  alt="Interier kavarny"
                ></img>
              </figure>
              <figure className="foto vetsi">
                <img
                  src="./assets/Prostor/vafle_dzus.jpg"
                  alt="zatisi s vafli a domacim dzusem"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/Prostor/kava.jpg"
                  alt="bariste pripravuji kavu"
                ></img>
              </figure>

              <figure className="foto">
                <img
                  src="./assets/Prostor/hipsterjidlo.jpg"
                  alt="vegan tortila s avokadem"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/Prostor/pivo1.jpg"
                  alt="pulitr cerstve nacepovaneho piva PU"
                ></img>
              </figure>
              <figure className="foto">
                <img src="./assets/Prostor/raut2.jpg" alt="rautovy stul"></img>
              </figure>
            </section>
            <h2>Máte zájem?</h2>
            <p>
              S otázkami na pořádání akcí či dotazem na volné termíny nás prosím
              kontaktuje přes formulář nebo rovnou na kontakty níže.
            </p>
            <br />
            <div className="form">
              <form method="post" action="http://formular.itgirls.cz/">
                <label>
                  Váš e-mail:
                  <br />
                  <br />
                  <input type="email" name="email" />
                </label>
                <br />
                <label className="user_message">
                  Zpráva:
                  <br />
                  <br />
                  <textarea name="body" rows="4" cols="30"></textarea>
                </label>
                <br />
                <button type="submit">Odeslat</button>
              </form>
            </div>
            {/*
            <div className="team__container">
              <div className="team__member">
                <h3>Jana V.</h3>
                <p>dramaturgie a organizace výstav</p>
                <hr />
                <div className="contact__email__phone">
                  <a href="mailto:janav@kpz.cz">janav@kpz.cz</a>
                  <p>tel: +420 739 622 601</p>
                </div>
              </div>
              <br />
              <div className="team__member">
                <h3>Jana P.</h3>
                <p>provoz kavárny a catering, HR</p>
                <hr />
                <div className="contact__email__phone">
                  <a href="mailto:janap@kpz.cz">janap@kpz.cz</a>
                  <p>tel: +420 739 622 602</p>
                </div>
              </div>
              <br />
              <div className="team__member">
                <h3>Jan Č.</h3>
                <p>produkce a web development</p>
                <hr />
                <div className="contact__email__phone">
                  <a href="mailto:jan@kpz.cz">jan@kpz.cz</a>
                  <p>tel: +420 739 622 603</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__address">
          <h2>Adresa</h2>
          <p>U Vinohradského pivovaru 15</p>
          <p>101 00 Praha 10</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5879614009705!2d14.45531131571783!3d50.07527777942536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b937cdc639dd5%3A0xad415ec9df8865f0!2sVinohradsk%C3%BD%20pivovar!5e0!3m2!1scs!2scz!4v1622978682431!5m2!1scs!2scz"
            style={{}}
          ></iframe>*/}
          </div>
        </div>
      </div>
    </main>
  );
};

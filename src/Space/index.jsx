import React, {useState} from 'react';
import './style.css';
import {db} from './../db';

export const Space = () => {
  const [email, setEmail] = useState('');
  const [messeage, setMesseage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('space').add({
      email: email,
      messeage: messeage,
    })
    setEmail('');
    setMesseage('');
  }

  return (
    <main>
      <div className="contact__content">
        <h1>KULTURNÍ PROSTOR ZDAR</h1>
        <div className="contacts">
          <div>
            <h2 className="mp">Multifunkční prostor</h2>
            <p className="space__text">
              Multifunkční prostor pro umělecké aktivity všech žánrů a směrů.
              Ideální pro instalaci výstav, pořádání koncertů a přednášek,
              workshopů a kurzů. Rádi poskytneme naše prostory pro pořádání
              firemních a soukromých akcí všeho druhu, když se budete chovat
              slušně{' '}
              <img
                className="icon"
                src="./assets/space/iconmonstr-smiley-10-240.png"
              ></img>
            </p>
            <section className="galerie">
              <figure className="foto">
                <img
                  src="./assets/space/interier1.jpg"
                  alt="Interier pro vystavy s lampiony"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/space/interier2.jpg"
                  alt="Interier pro vystavy s lampiony"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/space/interier3.jpg"
                  alt="Interier pro vystavy detail okna"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/space/interier4.jpg"
                  alt="Interier pro vystavy detail vystavni stena"
                ></img>
              </figure>
            </section>

            <h2>Kavárna</h2>
            <p className="cafe__text">
              Útulná kavárna pro tvorbu i neformální setkání. Denně nabízíme
              kávu z pražírny Double shot z rukou našeho zkušeného baristy.
              Sandviče, wafle, saláty pro masoužrouty i vegany. Coctails alko i
              nealko. Nejvíc top je ale u nás perfektně ošetřený a mistrně
              načepovaný Pilsner Urquell.
            </p>
            <p className="cafe__text">
              Na akce zajistíme catering dle domluvy a s láskou naservírujeme
              vaším hostům.
            </p>
            <section className="galerie">
              <figure className="foto bigger">
                <img
                  src="./assets/space/cafe1.jpg"
                  alt="Interier kavarny"
                ></img>
              </figure>
              <figure className="foto bigger">
                <img
                  src="./assets/space/vafle_dzus.jpg"
                  alt="zatisi s vafli a domacim dzusem"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/space/kava.jpg"
                  alt="bariste pripravuji kavu"
                ></img>
              </figure>

              <figure className="foto">
                <img
                  src="./assets/space/hipsterjidlo.jpg"
                  alt="vegan tortila s avokadem"
                ></img>
              </figure>
              <figure className="foto">
                <img
                  src="./assets/space/pivo1.jpg"
                  alt="pulitr cerstve nacepovaneho piva PU"
                ></img>
              </figure>
              <figure className="foto">
                <img src="./assets/space/raut2.jpg" alt="rautovy stul"></img>
              </figure>
            </section>
            <h2 className="interest">Máte zájem?</h2>
            <p className="form__text">
              S otázkami na pořádání akcí či dotazem na volné termíny nás prosím
              kontaktuje přes formulář nebo rovnou na kontakty níže.
            </p>
            <br />
            <div className="form">
              <form onSubmit={handleSubmit}>
                <label>
                  Váš e-mail:
                  <br />
                  <input value={email} onChange={(event) => setEmail(event.target.value)} className="user_email" type="email" name="email" />
                </label>
                <br />
                <label>
                  Zpráva:
                  <br />
                  <textarea value={messeage} onChange={(event) => setMesseage(event.target.value)}
                    className="user_message"
                    name="body"
                    rows="4"
                    cols="30"
                  ></textarea>
                </label>
                <br />
                <button className="btn" type="submit">
                  Odeslat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


export const Vystavy = () => {
  return (
    <section>
      <h1>Výstavy</h1>
      <div>
        <div className="exhibition-container">
          <div className="exhibiton-card">
            <img className="exhibition-card__image" src="/assets/Adelheid Ka/Adelheidka2.jpg" height="200px" width="280px" alt=""/>
            <Link className="exhibition-card__author" to="adelheidka">Adelheid Ka</Link>
            <p className="exhibition-card__title">Vernisáž</p>
            <p className="exhibition-card__date">2. čer. - 30. čer.2021</p>
            <p className="exhibition-card__place">Praha - Kulturní prostor Zdar</p>
          </div>
        </div>
        <div class="exhibiton-card">
          <img class="exhibition-card__image" src="assets/Pavel Vodnansky/Pavel Vodnansky1.jpeg" height="200px" width="280px" alt=""/>
          <a class="exhibition-card__author" href="">Pavel Vodňanský</a>
          <p class="exhibition-card__title">Vernisáž</p>
          <p class="exhibition-card__date">2. čer. - 30. čer.2021</p>
          <p class="exhibition-card__place">Praha - Kulturní prostor Zdar</p>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Homepage } from './Home';
import { Hlavicka } from './Hlavicka';
import { Kontakt } from './Kontakt';
import { Onas } from './O nas';
import { Exhibitions } from './Exhibitions';
import { ExhibitionDetail } from './ExhibitionDetail';
import { Footer } from './Footer';
import { Tickets } from './Tickets';
import { Pronajem } from './Pronajem';
import './style.css';

const App = () => {
  return (
    <div className="app__container">
      <Router>
        <Hlavicka />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/kontakt" exact>
            <Kontakt />
          </Route>
          <Route path="/o-nas" exact>
            <Onas />
          </Route>
          <Route path="/exhibitions" exact>
            <Exhibitions />
          </Route>
          <Route path="/rent" exact>
            <Pronajem />
          </Route>
          <Route path="/tickets" exact>
            <Tickets />
          </Route>
          <Route path="/exhibitions/:idExhibition" exact>
            <ExhibitionDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

render(<App />, document.querySelector('#app'));

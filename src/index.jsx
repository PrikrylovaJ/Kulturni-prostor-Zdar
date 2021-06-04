import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { render } from 'react-dom';
import { Uvodni } from './Home';
import { Hlavicka } from './Hlavicka';
import { Kontakt } from './Kontakt';
import { Onas } from './O nas';
import { Vystavy } from './Vystavy';
import { AdelheidKa } from './AdelheidKa';
import './style.css';

const App = () => {
  return (
    <Router>
      <Hlavicka/>
      <Switch>
        <Route path="/" exact>
          <Uvodni/>
        </Route>
        <Route path="/kontakt" exact>
          <Kontakt/>
        </Route>
        <Route path="/o-nas" exact>
          <Onas/>
        </Route>
        <Route path="/o-nas" exact>
          <Onas/>
        </Route>
        <Route path="/vystavy" exact>
          <Vystavy/>
        </Route>
        <Route path="/adelheidka" exact>
          <AdelheidKa/>
        </Route>
      </Switch>
    </Router>
  )
};

render(<App />, document.querySelector('#app'));

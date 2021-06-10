import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Homepage } from './Home';
import { Header } from './Header';
import { Kontakt } from './Kontakt';
import { About } from './About';
import { Exhibitions } from './Exhibitions';
import { ExhibitionDetail } from './ExhibitionDetail';
import { Footer } from './Footer';
import { Space } from './Space';
import './style.css';

const App = () => {
  return (
    <div className="app__container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/contact" exact>
            <Kontakt />
          </Route>
          <Route path="/about-us" exact>
            <About />
          </Route>
          <Route path="/exhibitions" exact>
            <Exhibitions />
          </Route>
          <Route path="/space" exact>
            <Space />
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

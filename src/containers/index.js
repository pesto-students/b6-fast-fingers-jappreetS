import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Game from './Game';

import './../global/styles/common.scss';
import './style.scss';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/game' component={Game} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
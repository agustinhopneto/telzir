import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Simulation from './pages/Simulation';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/simulation" component={Simulation} />
  </Switch>
);

export default Routes;

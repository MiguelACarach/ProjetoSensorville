import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pessoal from '../../src/components/Pessoal';
import Profissional from '../../src/components/Profissional';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Pessoal" exact component={Pessoal} />
      <Route path="/Profissional" exact component={Profissional} />
    </Switch>
  );
}

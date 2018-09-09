import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../Main';
import Header from '../../components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

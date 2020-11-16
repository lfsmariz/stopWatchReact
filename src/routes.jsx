import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SelectPage from './Pages/SelectPage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SelectPage } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
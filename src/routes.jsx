import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CountdownPage from './Pages/CountdownPage';
import SelectPage from './Pages/SelectPage'
import StopwatchPage from './Pages/StopWatchPage';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={SelectPage} />
      <Route path="/stopwatch" component={StopwatchPage} />
      <Route path="/countdown" component={CountdownPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
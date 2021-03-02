import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AuthPage } from '../Pages/Auth/AuthPage';

const history = createBrowserHistory();

export const UnauthorizedRoutes = () => {
  console.log('unAuth loaded');

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <AuthPage signIn={true} />
        </Route>
        <Route path="/register">
          <AuthPage signIn={false} />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

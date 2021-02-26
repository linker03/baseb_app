import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AuthPage } from '../Auth/AuthPage';

const history = createBrowserHistory();

export const UnauthorizedRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <AuthPage signIn={true} />
        </Route>
        <Route path="/register">
          <AuthPage signIn={false} />
        </Route>
      </Switch>
    </Router>
  );
};

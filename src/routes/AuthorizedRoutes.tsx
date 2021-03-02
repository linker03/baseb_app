import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ProfilePage } from '../Pages/Profile/ProfilePage';

const history = createBrowserHistory();

export const AuthorizedRoutes = () => {
  console.log('auth loaded');
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/profile" />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};

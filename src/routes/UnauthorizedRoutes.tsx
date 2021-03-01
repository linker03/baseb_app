import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AuthPage } from '../Pages/Auth/AuthPage';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const history = createBrowserHistory();

export const UnauthorizedRoutes = () => {
  const isLogged = useSelector((state: RootState) => state.authStore.isLoged);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          {isLogged && <Redirect to="/profile" />}
          <AuthPage signIn={true} />
        </Route>
        <Route path="/register">
          <AuthPage signIn={false} />
        </Route>
      </Switch>
    </Router>
  );
};

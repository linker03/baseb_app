import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnauthorizedRoutes } from './UnauthorizedRoutes';
import { AuthorizedRoutes } from './AuthorizedRoutes';
import { RootState } from '../store/store';
import Loading from '../components/Loading';
import { sagaAuthActions } from '../store/Auth/actions';
import { currentProfileQuery } from '../services/Api/queries';
import { AUTH_STATUS } from '../types/auth';

export const RootRouter = () => {
  const status = useSelector((state: RootState) => state.authStore.status);
  const dispatch = useDispatch();
  console.log('Root Router here', status);

  const checkLogin = () => {
    console.log('Checklogin');
    dispatch({
      type: sagaAuthActions.CHECK_LOGIN,
      payload: currentProfileQuery(),
    });
  };

  useEffect(() => {
    console.log('useEffect started');
    if (status === 'Unknown') {
      checkLogin();
    }
  }, [status]);

  switch (status) {
    case AUTH_STATUS.Logged:
      return <AuthorizedRoutes />;
    case AUTH_STATUS.NotLogged:
      return <UnauthorizedRoutes />;
    case AUTH_STATUS.Unknown:
      return <Loading />;
    default:
      return <Loading />;
  }
};

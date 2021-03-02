import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnauthorizedRoutes } from './UnauthorizedRoutes';
import { AuthorizedRoutes } from './AuthorizedRoutes';
import { RootState } from '../store/store';
import Loading from '../utils/Loading';
import { sagaAuthActions } from '../store/Auth/actions';

export const RootRouter = () => {
  const status = useSelector((state: RootState) => state.authStore.status);
  const dispatch = useDispatch();
  console.log('Root Router here', status);

  const checkLogin = () => {
    console.log('Checklogin');
    dispatch({ type: sagaAuthActions.CHECK_LOGIN });
  };

  useEffect(() => {
    console.log('useEffect started');
    if (status === 'Unknown') {
      checkLogin();
    }
  }, [status]);

  switch (status) {
    case 'Logged':
      return <AuthorizedRoutes />;
    case 'NotLogged':
      return <UnauthorizedRoutes />;
    case 'Unknown':
      return <Loading />;
    default:
      return <Loading />;
  }
};

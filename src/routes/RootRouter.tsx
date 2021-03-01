import React from 'react';
import { useSelector } from 'react-redux';
import { UnauthorizedRoutes } from './UnauthorizedRoutes';
import { AuthorizedRoutes } from './AuthorizedRoutes';
import { RootState } from '../store/store';

export const RootRouter = () => {
  const isLogin = useSelector((state: RootState) => state.authStore.isLoged);

  return <>{isLogin ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}</>;
};

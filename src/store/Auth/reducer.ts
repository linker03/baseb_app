import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_STATUS } from '../../types/auth';

type AuthInitialState = {
  error: boolean;
  status: string;
};

const initialStateAuth: AuthInitialState = {
  error: false,
  status: AUTH_STATUS.Unknown,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateAuth,
  reducers: {
    setLogin: (state) => {
      return {
        ...state,
        status: AUTH_STATUS.Logged,
      };
    },
    setError: (state) => {
      return {
        ...state,
        error: true,
      };
    },
    setNotLogin: (state) => {
      return {
        ...state,
        status: AUTH_STATUS.NotLogged,
      };
    },
  },
});

export const { setLogin, setError, setNotLogin } = authSlice.actions;

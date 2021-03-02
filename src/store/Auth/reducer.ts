import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum status {
  Logged,
  NotLogged,
  Unknown,
}

type AuthInitialState = {
  error: boolean;
  status: string;
};

const initialStateAuth: AuthInitialState = {
  error: false,
  status: 'Unknown',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateAuth,
  reducers: {
    setLogin: (state) => {
      return {
        ...state,
        status: status[0],
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
        status: status[1],
      };
    },
  },
});

export const { setLogin, setError, setNotLogin } = authSlice.actions;

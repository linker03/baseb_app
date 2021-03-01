import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthInitialState = {
  token: string;
  client: string;
  uid: string;
  error: boolean;
  isLoged: boolean;
};

const initialStateAuth: AuthInitialState = {
  token: '',
  client: '',
  uid: '',
  error: false,
  isLoged: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateAuth,
  reducers: {
    setLogin: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        client: action.payload.client,
        uid: action.payload.uid,
        isLoged: true,
      };
    },
    setError: (state) => {
      return {
        ...state,
        error: true,
      };
    },
  },
});

export const { setLogin, setError } = authSlice.actions;

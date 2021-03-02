import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { authSlice } from './Auth/reducer';
import authWatcher from './Auth/sagas';
import { profileSlice } from './Profile/reducer';
import profileWatcher from './Profile/sagas';

const rootReducer = combineReducers({
  authStore: authSlice.reducer,
  profileStore: profileSlice.reducer,
});

function* rootWatcher() {
  yield all([authWatcher(), profileWatcher()]);
}

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;

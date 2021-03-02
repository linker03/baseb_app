import { put, takeEvery, call } from 'redux-saga/effects';
import { setLogin, setNotLogin, setError } from './reducer';
import { sagaAuthActions } from './actions';
import AuthApi from '../../services/AuthApi';
import { StorageService } from '../../services/Storage';

type loginAction = {
  type: string;
  payload: {
    email: string;
    password: string;
  };
};

export function* loginSaga(action: loginAction) {
  try {
    // @ts-ignore
    const response = yield call(AuthApi.signin, action.payload);
    const token = response.headers['access-token'];
    const client = response.headers.client;
    const uid = response.data.data.uid;
    const id = response.data.data.id;
    yield call(StorageService.setCredentials, token, client, uid, id);
    yield put(setLogin());
  } catch (error) {
    yield put(setError);
    console.log('erora', error);
  }
}

export function* checkLoginSaga() {
  try {
    const token = StorageService.getAccessToken();
    if (token) {
      yield put(setLogin());
    } else {
      yield put(setNotLogin());
    }
  } catch (error) {
    console.log('erora', error);
  }
}

export default function* authWatcher() {
  yield takeEvery(sagaAuthActions.LOGIN_USER_SAGA, loginSaga);
  yield takeEvery(sagaAuthActions.CHECK_LOGIN, checkLoginSaga);
}

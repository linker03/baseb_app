import { put, takeEvery, call } from 'redux-saga/effects';
import { setLogin, setError } from './reducer';
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
    const response = yield call(AuthApi.signin, action.payload);
    const token = response.headers['access-token'];
    const client = response.headers.client;
    const uid = response.data.data.uid;
    yield call(StorageService.setCredentials, token, client, uid);
    yield put(setLogin({ token: token, client: client, uid: uid }));
  } catch {}
}

export default function* authWatcher() {
  yield takeEvery(sagaAuthActions.LOGIN_USER_SAGA, loginSaga);
}

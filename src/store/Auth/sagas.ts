import { put, takeEvery, call } from 'redux-saga/effects';
import { setLogin, setNotLogin, setError } from './reducer';
import { sagaAuthActions } from './actions';
import AuthApi from '../../services/Api/AuthApi';
import { StorageService } from '../../services/Storage';
import ProfileApi from '../../services/Api/ProfileApi';
import { getCurrentProfile } from '../Profile/reducer';

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

export function* checkLoginSaga(action: any) {
  try {
    const token = StorageService.getAccessToken();
    // @ts-ignore
    const response = yield call(ProfileApi.getProfileData, action.payload);
    console.log(response);
    yield put(getCurrentProfile(response.data.data.current_profile));
    yield put(setLogin());
  } catch (error) {
    console.log('erora', error);
    yield put(setNotLogin());
  }
}

export default function* authWatcher() {
  yield takeEvery(sagaAuthActions.LOGIN_USER_SAGA, loginSaga);
  yield takeEvery(sagaAuthActions.CHECK_LOGIN, checkLoginSaga);
}

import { put, takeEvery, call } from 'redux-saga/effects';
import { getCurrentProfile } from './reducer';
import { sagaProfileActions } from './actions';
import ProfileApi from '../../services/Api/ProfileApi';
import { StorageService } from '../../services/Storage';

export function* getCurrentProfileSaga(action: any) {
  try {
    // @ts-ignore
    const response = yield call(ProfileApi.getProfileData, action.payload);
    console.log(response.data.data.current_profile);
    yield put(getCurrentProfile(response.data.data.current_profile));
  } catch (error) {
    console.log(error);
  }
}

export default function* profileWatcher() {
  yield takeEvery(
    sagaProfileActions.GET_CURRENT_PROFILE_SAGA,
    getCurrentProfileSaga
  );
}

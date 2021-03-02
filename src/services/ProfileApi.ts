import ApiService from './Api';
import { APIBaseUrl, APIGraphql } from '../utils/constants';

interface ProfileData {
  query: string;
  variables: string;
}

class ProfileApi extends ApiService {
  getProfileData = (payload: ProfileData) =>
    this.request.post()(`${APIBaseUrl + APIGraphql}`, payload);
}

export default new ProfileApi();

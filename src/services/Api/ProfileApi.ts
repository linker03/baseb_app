import ApiService from './Api';
import { API_GRAPHQL } from '../../utils/constants';

interface ProfileData {
  query: string;
  variables: string;
}

class ProfileApi extends ApiService {
  getProfileData = (payload: ProfileData) =>
    this.request.post()(API_GRAPHQL, payload);
}

export default new ProfileApi();

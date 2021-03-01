import ApiService from './Api';
import { APIBaseUrl, APISignIn } from '../utils/constants';

interface AuthData {
  email: string;
  password: string;
}

class AuthApi extends ApiService {
  signin = (payload: AuthData) =>
    this.request.post()(`${APIBaseUrl + APISignIn}`, payload);
}

export default new AuthApi();

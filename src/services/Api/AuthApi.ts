import ApiService from './Api';
import { API_SIGNIN } from '../../utils/constants';

interface AuthData {
  email: string;
  password: string;
}

class AuthApi extends ApiService {
  signin = (payload: AuthData): any => this.request.post()(API_SIGNIN, payload);
}

export default new AuthApi();

import Axios from 'axios';
import { unAuthorizedAxios } from './unAuthorizedAxios';
import { APISignIn } from '../utils/constants';

type SignInArgs = {
  email: string;
  password: string;
};

class ApiProvider {
  token: string;
  uid: string;
  client: string;
  unAuthorizedAxios: any;

  constructor() {
    this.token = '';
    this.uid = '';
    this.client = '';
    this.unAuthorizedAxios = unAuthorizedAxios;
  }

  async signIn({ email, password }: SignInArgs) {
    try {
      const response = await unAuthorizedAxios.post(APISignIn, {
        email,
        password,
      });
      this.token = response.headers['access-token'];
      this.client = response.headers.client;
      this.uid = response.data.data.uid;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ApiProvider();

import Axios from 'axios';
import { APIBaseUrl, APISignUp } from '../utils/constants';

export const unAuthorizedAxios = Axios.create({
  baseURL: APIBaseUrl,
});

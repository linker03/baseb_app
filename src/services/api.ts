import Axios from 'axios';

const config = {
  method: 'POST',
  url: 'https://baseballcloud-back.herokuapp.com/api/v1/auth/sign_in',
  data: {
    email: 'linker05@yandex.ru',
    password: 'qwerty123456',
  },
};

export const ax = Axios({
  method: 'POST',
  url: 'https://baseballcloud-back.herokuapp.com/api/v1/auth/sign_in',
  data: {
    email: 'linker05@yandex.ru',
    password: 'qwerty123456',
  },
});
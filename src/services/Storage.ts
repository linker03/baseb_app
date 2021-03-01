export const StorageService = {
  getAccessToken() {
    localStorage.getItem('access-token');
  },
  getClient() {
    localStorage.getItem('client');
  },
  getUid() {
    localStorage.getItem('uid');
  },
  setCredentials(token: string, client: string, uid: string) {
    console.log(token, client, uid);
    localStorage.setItem('access-token', token);
    localStorage.setItem('client', client);
    localStorage.setItem('uid', uid);
  },
};

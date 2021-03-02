export const StorageService = {
  getAccessToken(): string | null {
    return localStorage.getItem('access-token');
  },
  getClient(): string | null {
    return localStorage.getItem('client');
  },
  getUid(): string | null {
    return localStorage.getItem('uid');
  },
  getCurrentUserId(): string | null {
    return localStorage.getItem('id');
  },
  setCredentials(token: string, client: string, uid: string, id: string) {
    console.log(token, client, uid);
    localStorage.setItem('access-token', token);
    localStorage.setItem('client', client);
    localStorage.setItem('uid', uid);
    localStorage.setItem('id', id);
  },
};

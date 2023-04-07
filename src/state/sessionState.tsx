import { atom } from 'recoil';

interface Session {
  accessToken: string;
  idToken: string;
  expiration: string;
  username: string;
  email: string;
}

export const sessionState = atom<Session>({
  key: 'sessionStatus',
  default: {
    accessToken: '',
    idToken: '',
    expiration: '',
    username: '',
    email: ''
  }
});

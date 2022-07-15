/* global windows */
import jwt_decode from 'jwt-decode';
import * as Auth from '../Auth';

class User {
  user_id = undefined;
  name = undefined;
  surname = undefined;
  username = undefined;

  constructor(user_data) {
    this.user_id = user_data['user_id'];
    this.name = user_data['name'];
    this.surname = user_data['surname'];
    this.username = user_data['username'];
  }
}

class YartuApp {
  user = undefined;
  Auth = Auth;

  constructor(config) {
    this.initialize(config);
  }

  initialize(config) {
    const yartu_token = window.localStorage.getItem('yartu-token');
    if (yartu_token) {
      try {
        const user_data = jwt_decode(yartu_token);
        if (user_data.exp < Date.now() / 1000) {
          // User token expired, remove token from localstorage
          window.localStorage.removeItem(yartu_token);
        } else {
          // User token not expired,
          this.user = new User(user_data);
        }
      } catch {}
    }
  }
}

const initializeYartuApp = (config) => {
  return new YartuApp(config);
};

export { initializeYartuApp };

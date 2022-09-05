/* global windows */
import jwt_decode from 'jwt-decode';
import Auth from '../Auth';
import Contact from '../Contact';
import Email from '../Email';
import Search from '../Search';

// TODO :: Check if Vue project
import { inject } from 'vue';

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
  grpcEndpoint = 'http://localhost:5001/';
  user = undefined;

  constructor(config) {
    this.initialize(config);
    this.Auth = new (Auth())(config);
    this.Contact = new (Contact())(config);
    this.Search = new (Search())(config);
    this.Email = new (Email())(config);
  }

  initialize(config) {
    this.grpcEndpoint = config.endpoint;

    const yartu_token = window.localStorage.getItem('yartu-token');
    if (yartu_token) {
      try {
        const user_data = jwt_decode(yartu_token);
        if (user_data.exp !== 0 && user_data.exp < Date.now() / 1000) {
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

const YartuSdkSymbol = Symbol();

const useYartuSdk = () => {
  const yartuSdk = inject(YartuSdkSymbol);
  if (!yartuSdk) {
    throw new Error('No Yartu SDK provided!');
  }
  return yartuSdk;
}

const installYartuApp = {
  install: (Vue, config = {}) => {
    let yartuSdk = null;
    if (config.initalizedYartuSdk) {
      yartuSdk = config.initalizedYartuSdk;
    } else {
      yartuSdk = new YartuApp(config);
    }
    Vue.config.globalProperties.$yartuSdk = yartuSdk;
    if (typeof window !== 'undefined') {
      window.$yartuSdk = yartuSdk;
    }
    Vue.provide(YartuSdkSymbol, yartuSdk);
  },
};

export { initializeYartuApp, installYartuApp, useYartuSdk };

/* global windows */
import jwt_decode from 'jwt-decode';
import Account from '../Account';
import Auth from '../Auth';
import Calendar from '../Calendar';
import Conference from '../Conference';
import Contact from '../Contact';
import Drive from '../Drive';
import Email from '../Email';
import Note from '../Note';
import Project from '../Project';
import Search from '../Search';
import Notification from '../Notification';
import Customer from '../Customer';
import ExternalApp from '../ExternalApp';

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
    this.initializeModules(config);
  }

  initialize(config) {
    this.grpcEndpoint = config.endpoint;
  }

  initializeModules(config) {
    this.Account = new (Account())(config);
    this.Auth = new (Auth())(config);
    this.Calendar = new (Calendar())(config);
    this.Conference = new (Conference())(config);
    this.Contact = new (Contact())(config);
    this.Drive = new (Drive())(config);
    this.Email = new (Email())(config);
    this.Note = new (Note())(config);
    this.Project = new (Project())(config);
    this.Search = new (Search())(config);
    this.Notification = new (Notification())(config);
    this.Customer = new (Customer())(config);
    this.ExternalApp = new (ExternalApp())(config);

    this.Account.yartuSdk = this;
    this.Auth.yartuSdk = this;
    this.Calendar.yartuSdk = this;
    this.Conference.yartuSdk = this;
    this.Contact.yartuSdk = this;
    this.Drive.yartuSdk = this;
    this.Email.yartuSdk = this;
    this.Note.yartuSdk = this;
    this.Project.yartuSdk = this;
    this.ExternalApp.yartuSdk = this;
    this.Customer.yartuSdk = this;
    this.Notification.yartuSdk = this;
    this.refreshUser();
  }

  refreshEndpoint(config) {
    this.initialize(config);
    this.initializeModules(config);
  }

  refreshUser() {
    const yartu_token = window.localStorage.getItem('yartu-token');
    const tabId = window.sessionStorage.getItem('yartu') || '';
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
    } else {
      this.user = undefined;
    }

    this.Account.metadata = { tabId, Authentication: yartu_token };
    this.Calendar.metadata = { tabId, Authentication: yartu_token };
    this.Conference.metadata = { tabId, Authentication: yartu_token };
    this.Contact.metadata = { tabId, Authentication: yartu_token };
    this.Drive.metadata = { tabId, Authentication: yartu_token };
    this.Email.metadata = { tabId, Authentication: yartu_token };
    this.Note.metadata = { tabId, Authentication: yartu_token };
    this.Project.metadata = { tabId, Authentication: yartu_token };
    this.Search.metadata = { tabId, Authentication: yartu_token };
    this.Notification.metadata = { tabId, Authentication: yartu_token };
    this.Customer.metadata = { tabId, Authentication: yartu_token };
    this.ExternalApp.metadata = { tabId, Authentication: yartu_token };
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
};

const installYartuApp = {
  install: (Vue, config = {}) => {
    let yartuSdk = config.initalizedYartuSdk ?? new YartuApp(config);
    Vue.config.globalProperties.$yartuSdk = yartuSdk;
    if (typeof window !== 'undefined') {
      window.$yartuSdk = yartuSdk;
    }
    Vue.provide(YartuSdkSymbol, yartuSdk);
  }
};

export { initializeYartuApp, installYartuApp, useYartuSdk };

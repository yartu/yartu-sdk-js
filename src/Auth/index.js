import jwt_decode from 'jwt-decode';

import {
  code_AUTH_TWO_FA_FORCE,
  code_AUTH_TWO_FA_NEEDED,
  status_AUTH_NEEDED,
  status_AUTH_OK,
  status_AUTH_TWO_FA_NEEDED,
  status_AUTH_TWO_FA_FORCE
} from '../utils/codes';

import { LoginRequest, TwoFaLoginRequest } from './service-pb.cjs';
import { YAuthClient } from './service-grpc-web-pb.cjs';

export default (config) =>
  class Auth {
    endpoint = 'http://localhost:5001';
    client = undefined;
    loginStatus = 'login-needed';

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YAuthClient(this.endpoint, '', '');
    }

    login = (username, password, remember = false) => {
      return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setUsername(username);
        request.setPassword(password);
        request.setRemember(remember);
        request.setDeviceId('df5aed00-7f89-4fb9-8efb-58add9e99323');

        this.client.login(request, {}, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();
            const token = response.getToken();

            if (code == 0) {
              window.localStorage.setItem('yartu-token', token);
              resolve({ status: status_AUTH_OK, token: token });
            } else if (code == code_AUTH_TWO_FA_FORCE) {
              resolve({
                status: status_AUTH_TWO_FA_FORCE,
                token: token,
                two_fa_image: response.getTwoFaImage()
              });
            } else if (code == code_AUTH_TWO_FA_NEEDED) {
              resolve({ status: status_AUTH_TWO_FA_NEEDED, token: token });
            } else {
              reject({
                code: code,
                message: response.getMessage()
              });
            }
          }
        });
      });
    };

    twoFaLogin = (
      username,
      password,
      twoFaToken,
      twoFaCode,
      twoFaType = false
    ) => {
      return new Promise((resolve, reject) => {
        const request = new TwoFaLoginRequest();
        request.setUsername(username);
        request.setPassword(password);
        request.setTwoFaToken(twoFaToken);
        request.setTwoFaCode(twoFaCode);
        request.setTwoFaType(twoFaType);

        this.client.twoFaLogin(request, {}, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();
            const token = response.getToken();

            if (code == 0) {
              window.localStorage.setItem('yartu-token', token);
              resolve(token);
            } else {
              reject({
                code: code,
                message: response.getMessage()
              });
            }
          }
        });
      });
    };

    checkLogin = () => {
      const yartu_token = window.localStorage.getItem('yartu-token');
      if (yartu_token) {
        try {
          const userData = jwt_decode(yartu_token);
          console.log(userData);

          console.log(userData.exp);
          if (userData.exp !== 0 && userData.exp < Date.now() / 1000) {
            // User token expired, remove token from localstorage
            window.localStorage.removeItem(yartu_token);
          } else {
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      }

      return false;
    };
  };

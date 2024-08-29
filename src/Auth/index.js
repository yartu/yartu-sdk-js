import jwt_decode from 'jwt-decode';

import {
  status_NOT_PAID,
  code_AUTH_TWO_FA_FORCE,
  code_AUTH_TWO_FA_NEEDED,
  status_AUTH_NEEDED,
  status_AUTH_OK,
  status_AUTH_TWO_FA_NEEDED,
  status_AUTH_TWO_FA_FORCE,
  status_RESET_PASSWORD_NEEDED,
  status_ROUTE_TO_PAYMENT
} from '../utils/codes';

import { handleError } from '../utils/helper';

import {
  ChallengeRequest,
  GetCapabilitiesRequest,
  LoginRequest,
  OtpLoginRequest,
  ForcedPasswordChangeRequest,
  CheckUserTokenRequest
} from './service-pb.cjs';
import { YAuthClient } from './service-grpc-web-pb.cjs';

export default (config) =>
  class Auth {
    endpoint = 'http://localhost:5001';
    client = undefined;
    yartuSdk = undefined;
    loginStatus = 'login-needed';

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YAuthClient(this.endpoint, '', '');
    }

    getCapabilities = () => {
      return new Promise((resolve, reject) => {
        const request = new GetCapabilitiesRequest();

        this.client.getCapabilities(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const capabilities = response.getCapabilitiesList();

            if (code == 0) {
              resolve({
                capabilities,
                code
              });
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

    login = (username, password, secret = '', remember = false) => {
      return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setUsername(username);
        request.setPassword(password);
        request.setSecret(secret);
        request.setRemember(remember);
        request.setDeviceId('df5aed00-7f89-4fb9-8efb-58add9e99323');

        this.client.login(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const token = response.getToken();
            const services = response.getServiceList();
            const widgets = response.getWidgetList();
            const isPaid = response.getIsPaid();
            const paidLogs = response.getPaidLogsList();
            const domain = response.getDomain();
            const username = response.getUsername();
            const packageId = response.getPackageId();
            const latePaymentToken = response.getLatePaymentToken();
            const apps = response.getAppList().map((data) => {
              const appSettings = data.toObject();
              if (
                appSettings.settings &&
                appSettings.settings?.type === 'json'
              ) {
                appSettings.settings = JSON.parse(appSettings.settings.json);
              }
              return appSettings;
            });

            if (code == 0) {
              window.localStorage.setItem('yartu-token', token);
              this.yartuSdk.refreshUser();
              resolve({
                status: status_AUTH_OK,
                working_status: response.getWorkingStatus(),
                services: services,
                widgets,
                apps: apps,
                token: token,
                isPaid,
                paidLogs,
                latePaymentToken
              });
            } else if (code == status_RESET_PASSWORD_NEEDED) {
              resolve({
                status: status_RESET_PASSWORD_NEEDED,
                resetPasswordNeeded: true,
                latePaymentToken
              });
            } else if (code == code_AUTH_TWO_FA_FORCE) {
              resolve({
                status: status_AUTH_TWO_FA_FORCE,
                token: token,
                two_fa_image: response.getOtpImage(),
                latePaymentToken
              });
            } else if (code == code_AUTH_TWO_FA_NEEDED) {
              resolve({
                status: status_AUTH_TWO_FA_NEEDED,
                token: token,
                latePaymentToken
              });
            } else if (code == status_NOT_PAID) {
              resolve({
                status: status_NOT_PAID,
                invoiceIsNotPaid: true,
                message: response.getMessage(),
                latePaymentToken
              });
            } else if (code == status_ROUTE_TO_PAYMENT) {
              resolve({
                status: status_RESET_PASSWORD_NEEDED,
                routeToPaymentScreen: true,
                domain,
                packageId,
                username,
                message: response.getMessage(),
                latePaymentToken
              });
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

    forcedPasswordChange = (username, oldPassword, newPassword) => {
      return new Promise((resolve, reject) => {
        const request = new ForcedPasswordChangeRequest();
        request.setUsername(username);
        request.setOldPassword(oldPassword);
        request.setNewPassword(newPassword);
        // request.setDeviceId('df5aed00-7f89-4fb9-8efb-58add9e99323');

        this.client.forcedPasswordChange(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code: 0,
                message: response.getMessage()
              });
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

    challenge = (username, chellengeType) => {
      return new Promise((resolve, reject) => {
        const request = new ChallengeRequest();
        request.setUsername(username);
        request.setType(chellengeType);
        request.setTimestamp(Date.parse(new Date()) / 1000);

        this.client.challenge(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const secret = response.getSecret();

            if (code == 0) {
              resolve({
                code: code,
                secret: secret
              });
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

    otpLogin = (username, password, OtpToken, OtpCode, OtpType = false) => {
      return new Promise((resolve, reject) => {
        const request = new OtpLoginRequest();
        request.setUsername(username);
        request.setPassword(password);
        request.setOtpToken(OtpToken);
        request.setOtpCode(OtpCode);
        request.setOtpType(OtpType);

        this.client.OtpLogin(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
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

    getServices = () => {
      return new Promise((resolve, reject) => {
        const request = new GetServicesRequest();

        this.client.getServices(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const services = response.getServiceList();

            if (code == 0) {
              resolve({
                code: code,
                services: services
              });
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
          if (userData.exp !== 0 && userData.exp < Date.now() / 1000) {
            // User token expired, remove token from localstorage
            window.localStorage.removeItem('yartu-token');
            // window.localStorage.removeItem('yartuStore-common');
            // window.localStorage.removeItem('yartuStore-preferences');
          } else {
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      }

      return false;
    };

    checkUserToken = (token) => {
      return new Promise((resolve, reject) => {
        const request = new CheckUserTokenRequest();
        request.setToken(token);

        this.client.checkUserToken(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const token = response.getToken();
            const services = response.getServiceList();
            const widgets = response.getWidgetList();
            const isPaid = response.getIsPaid();
            const paidLogs = response.getPaidLogsList();
            const domain = response.getDomain();
            const username = response.getUsername();
            const userId = response.getUserId();
            const packageId = response.getPackageId();
            const latePaymentToken = response.getLatePaymentToken();
            const apps = response.getAppList().map((data) => {
              const appSettings = data.toObject();
              if (
                appSettings.settings &&
                appSettings.settings?.type === 'json'
              ) {
                appSettings.settings = JSON.parse(appSettings.settings.json);
              }
              return appSettings;
            });
            if (code == 0) {
              resolve({
                status: status_AUTH_OK,
                working_status: response.getWorkingStatus(),
                services: services,
                widgets,
                apps: apps,
                token: token,
                isPaid,
                paidLogs,
                latePaymentToken,
                user: {
                  user_id: userId,
                  username
                }
              });
            } else if (code == status_RESET_PASSWORD_NEEDED) {
              resolve({
                status: status_RESET_PASSWORD_NEEDED,
                resetPasswordNeeded: true,
                latePaymentToken
              });
            } else if (code == code_AUTH_TWO_FA_FORCE) {
              resolve({
                status: status_AUTH_TWO_FA_FORCE,
                token: token,
                two_fa_image: response.getOtpImage(),
                latePaymentToken
              });
            } else if (code == code_AUTH_TWO_FA_NEEDED) {
              resolve({
                status: status_AUTH_TWO_FA_NEEDED,
                token: token,
                latePaymentToken
              });
            } else if (code == status_NOT_PAID) {
              resolve({
                status: status_NOT_PAID,
                invoiceIsNotPaid: true,
                message: response.getMessage(),
                latePaymentToken
              });
            } else if (code == status_ROUTE_TO_PAYMENT) {
              resolve({
                status: status_RESET_PASSWORD_NEEDED,
                routeToPaymentScreen: true,
                domain,
                packageId,
                username,
                message: response.getMessage(),
                latePaymentToken
              });
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

    logout = () => {
      for (const storageKey of Object.keys(localStorage)) {
        if (storageKey !== 'yartuStore-auth') {
          localStorage.removeItem(storageKey);
        }
      }
      this.yartuSdk.refreshUser();
    };
  };

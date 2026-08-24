import jwt_decode from 'jwt-decode';

import {
  status_NOT_PAID,
  code_AUTH_TWO_FA_FORCE,
  code_AUTH_TWO_FA_NEEDED,
  status_AUTH_OK,
  status_AUTH_TWO_FA_NEEDED,
  status_AUTH_TWO_FA_FORCE,
  status_RESET_PASSWORD_NEEDED,
  status_ROUTE_TO_PAYMENT
} from '../utils/codes';

import { handleError, getDeviceId } from '../utils/helper';
import { Query } from '../utils/definitions_pb.cjs';

import {
  ChallengeRequest,
  GetCapabilitiesRequest,
  LoginRequest,
  LogoutRequest,
  OtpLoginRequest,
  GetTwoFactorStatusRequest,
  StartTwoFactorRequest,
  ConfirmTwoFactorRequest,
  DisableTwoFactorRequest,
  ForcedPasswordChangeRequest,
  CheckUserTokenRequest,
  GetServicesRequest,
  // Yartu as an identity provider; same service, see auth/provider/.
  GetAuthorizationRequestRequest,
  ApproveAuthorizationRequest,
  DenyAuthorizationRequest,
  ListGrantRequest,
  RevokeGrantRequest
} from './service-pb.cjs';
import { YAuthClient } from './service-grpc-web-pb.cjs';

const toClient = (client) => {
  if (!client) {
    return null;
  }

  return {
    clientId: client.getClientId(),
    clientName: client.getClientName(),
    clientUri: client.getClientUri(),
    logoUri: client.getLogoUri(),
    clientType: client.getClientType()
  };
};

const toApps = (appList) =>
  appList.map((group) => ({
    app: group.getApp(),
    actions: group.getActionList()
  }));

const toGrant = (grant) => ({
  id: grant.getId(),
  client: toClient(grant.getClient()),
  scopes: grant.getScopeList(),
  apps: toApps(grant.getAppList()),
  createdAt: grant.getCreatedAt(),
  lastUsedAt: grant.getLastUsedAt()
});

export default (config) =>
  class Auth {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;
    yartuSdk = undefined;
    loginStatus = 'login-needed';

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YAuthClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
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

    login = (username, password, secret = '', remember = false, deviceInfo = {}) => {
      return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setUsername(username);
        request.setPassword(password);
        request.setSecret(secret);
        request.setRemember(remember);
        request.setDeviceId(deviceInfo.deviceId || getDeviceId());
        if (deviceInfo.deviceName) {
          request.setDeviceName(deviceInfo.deviceName);
        }
        if (deviceInfo.platform) {
          request.setPlatform(deviceInfo.platform);
        }

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
                clientToken: response.getClientToken(),
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
                two_fa_image: response.getTwoFaImage(),
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
                status: status_ROUTE_TO_PAYMENT,
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

    challenge = (username, challengeType) => {
      return new Promise((resolve, reject) => {
        const request = new ChallengeRequest();
        request.setUsername(username);
        request.setType(challengeType);
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

    otpLogin = (otpToken, otpCode, otpType = 0, deviceInfo = {}) => {
      return new Promise((resolve, reject) => {
        const request = new OtpLoginRequest();
        request.setOtpToken(otpToken);
        request.setOtpCode(otpCode);
        request.setOtpType(otpType);
        request.setDeviceId(deviceInfo.deviceId || getDeviceId());
        if (deviceInfo.deviceName) {
          request.setDeviceName(deviceInfo.deviceName);
        }
        if (deviceInfo.platform) {
          request.setPlatform(deviceInfo.platform);
        }

        this.client.otpLogin(request, {}, (error, response) => {
          if (error) {
            handleError(error, reject);
            return;
          }

          const code = response.getCode();
          if (code != 0) {
            reject({
              code: code,
              message: response.getMessage()
            });
            return;
          }

          const token = response.getToken();
          const clientToken = response.getClientToken();

          window.localStorage.setItem('yartu-token', token);
          this.yartuSdk.refreshUser();

          this.checkUserToken(token)
            .then((session) => resolve({ ...session, clientToken }))
            .catch(reject);
        });
      });
    };

    getTwoFactorStatus = () => {
      return new Promise((resolve, reject) => {
        const request = new GetTwoFactorStatusRequest();

        this.client.getTwoFactorStatus(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                isEnabled: response.getIsEnabled(),
                isAvailable: response.getIsAvailable(),
                isRequired: response.getIsRequired()
              });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    startTwoFactor = () => {
      return new Promise((resolve, reject) => {
        const request = new StartTwoFactorRequest();

        this.client.startTwoFactor(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                provisioningUri: response.getProvisioningUri(),
                secret: response.getSecret()
              });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    confirmTwoFactor = (otpCode) => {
      return new Promise((resolve, reject) => {
        const request = new ConfirmTwoFactorRequest();
        request.setOtpCode(otpCode);

        this.client.confirmTwoFactor(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({ code });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    disableTwoFactor = (password) => {
      return new Promise((resolve, reject) => {
        const request = new DisableTwoFactorRequest();
        request.setPassword(password);

        this.client.disableTwoFactor(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({ code });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    getAuthorizationRequest = (requestId) => {
      return new Promise((resolve, reject) => {
        const request = new GetAuthorizationRequestRequest();
        request.setRequestId(requestId);

        this.client.getAuthorizationRequest(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code === 0) {
              resolve({
                code,
                client: toClient(response.getClient()),
                scopes: response.getScopeList(),
                apps: toApps(response.getAppList())
              });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    approveAuthorization = (requestId, scopes = []) => {
      return new Promise((resolve, reject) => {
        const request = new ApproveAuthorizationRequest();
        request.setRequestId(requestId);
        request.setScopeList(scopes);

        this.client.approveAuthorization(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code === 0) {
              resolve({ code, redirectUrl: response.getRedirectUrl() });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    denyAuthorization = (requestId) => {
      return new Promise((resolve, reject) => {
        const request = new DenyAuthorizationRequest();
        request.setRequestId(requestId);

        this.client.denyAuthorization(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code === 0) {
              resolve({ code, redirectUrl: response.getRedirectUrl() });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    listGrant = () => {
      return new Promise((resolve, reject) => {
        const request = new ListGrantRequest();
        request.setQuery(new Query());

        this.client.listGrant(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code === 0) {
              resolve({ code, grants: response.getDataList().map(toGrant) });
            } else {
              reject({ code, message: response.getMessage() });
            }
          }
        });
      });
    };

    revokeGrant = (id) => {
      return new Promise((resolve, reject) => {
        const request = new RevokeGrantRequest();
        request.setId(id);

        this.client.revokeGrant(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code === 0) {
              resolve({ code, message: response.getMessage() });
            } else {
              reject({ code, message: response.getMessage() });
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
          console.error('[auth] could not read the stored token:', error?.message || error);
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
                two_fa_image: response.getTwoFaImage(),
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
                status: status_ROUTE_TO_PAYMENT,
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

    // cleared on sign-out except these
    static KEEP_ON_LOGOUT = ['yartuStore-auth', 'yartu-device-id'];

    clearLocalSession = () => {
      for (const storageKey of Object.keys(localStorage)) {
        if (!Auth.KEEP_ON_LOGOUT.includes(storageKey)) {
          localStorage.removeItem(storageKey);
        }
      }
      this.yartuSdk.refreshUser();
    };

    logout = () => {
      return new Promise((resolve) => {
        const request = new LogoutRequest();

        this.client.logout(request, this.metadata, () => {
          this.clearLocalSession();
          resolve({ code: 0 });
        });
      });
    };
  };

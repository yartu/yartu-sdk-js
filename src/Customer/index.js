import {
  GetCustomerRealmsRequest,
  GetCustomerRealmRequest,
  ListCustomerMemberRequest,
  GetCustomerMemberRequest,
  UpsertCustomerMemberRequest,
  DeleteCustomerMemberRequest,
  ResetCustomerMemberPasswordRequest,
  ChangeCustomerMemberStatusRequest
} from './service-pb.cjs';

import { YCustomerClient } from './service-grpc-web-pb.cjs';
import { Group, Query, Shared, User } from '../utils/definitions_pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Customer {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YCustomerClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    getCustomerRealms = () => {
      return new Promise((resolve, reject) => {
        const request = new GetCustomerRealmsRequest();
        this.client.getCustomerRealms(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code: 0,
                  message: response.getMessage(),
                  realms: response
                    .getRealmsList()
                    .map((data) => data.toObject())
                });
              } else {
                reject({
                  code: code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    getCustomerRealm = (realmId) => {
      return new Promise((resolve, reject) => {
        const request = new GetCustomerRealmRequest();

        realmId = Number.parseInt(realmId, 10);
        request.setId(realmId);

        this.client.getCustomerRealm(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code: 0,
                  message: response.getMessage(),
                  customerRealm: response.getCustomerRealm().toObject()
                });
              } else {
                reject({
                  code: code,
                  customerRealm: {},
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    listCustomerMember = (realmId) => {
      return new Promise((resolve, reject) => {
        const request = new ListCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);
        request.setRealmId(realmId);

        this.client.listCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
              } else {
                reject({
                  code: code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    getCustomerMember = (realmId, userId) => {
      return new Promise((resolve, reject) => {
        const request = new GetCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);
        userId = Number.parseInt(userId, 10);

        request.setId(userId);
        request.setRealmId(realmId);

        this.client.getCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
              } else {
                reject({
                  code: code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    upsertCustomerMember = (realmId, userData = {}) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);

        request.setRealmId(realmId);
        request.setId(userData.id);
        request.setUsername(userData.username);
        request.setName(userData.name);
        request.setSurname(userData.surname);
        request.setServiceList(userData.serviceList || []);

        if (userData.password) {
          request.setPassword(userData.password);
        }

        this.client.upsertCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
              } else {
                reject({
                  code: code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    deleteCustomerMember = (realmId, userIds) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);

        request.setRealmId(realmId);
        request.setIdList(userIds);

        this.client.deleteCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
              } else {
                reject({
                  code: code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    resetCustomerMemberPassword = (realmId, userId, password) => {
      return new Promise((resolve, reject) => {
        const request = new ResetCustomerMemberPasswordRequest();

        realmId = Number.parseInt(realmId, 10);
        userId = Number.parseInt(userId, 10);

        request.setRealmId(realmId);
        request.setId(userId);
        request.setPassword(password);

        this.client.resetCustomerMemberPassword(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
              } else {
                reject({
                  code: code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    changeCustomerMemberStatus = (realmId, userIds, data = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ChangeCustomerMemberStatusRequest();

        realmId = Number.parseInt(realmId, 10);

        console.log('DATA', data);

        request.setRealmId(realmId);
        request.setIdList(userIds);

        if (data.isActive !== null) {
          request.setIsActive(data.isActive);
        }

        if (data.isPrivate !== null) {
          request.setIsPrivate(data.isPrivate);
        }

        this.client.changeCustomerMemberStatus(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
              } else {
                reject({
                  code: code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };
  };

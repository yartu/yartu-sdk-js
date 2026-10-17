import {
  ListNotificationRequest,
  UpsertNotificationRequest,
  ReadNotificationRequest,
  DeleteNotificationRequest,
  RegisterPushClientRequest,
  UnregisterPushClientRequest,
  GetPushConfigRequest
} from './service-pb.cjs';

import { YNotificationClient } from './service-grpc-web-pb.cjs';
import { handleError, getDeviceId } from '../utils/helper';

export default (config) =>
  class Notification {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YNotificationClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listNotification() {
      return new Promise((resolve, reject) => {
        const request = new ListNotificationRequest();

        this.client.listNotification(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const notificationList = response
                  .getNotificationList()
                  .map((data) => {
                    const not = data.toObject();
                    if (not.meta.type === 'json') {
                      not.meta = JSON.parse(not.meta.json);
                    }
                    return not;
                  });
                resolve({
                  notifications: notificationList,
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
          }
        );
      });
    }

    upsertNotification(notification) {
      return new Promise((resolve, reject) => {
        const request = new UpsertNotificationRequest();

        request.setUuid(notification.uuid);
        request.setIsDelivered(notification.isDelivered);
        request.setIsRead(notification.isRead);

        this.client.upsertNotification(
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
                  message: response.getMessage()
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
    }

    readNotification(notificationUUIDs) {
      return new Promise((resolve, reject) => {
        const request = new ReadNotificationRequest();

        if (Array.isArray(notificationUUIDs)) {
          request.setUuidList(notificationUUIDs);
        } else {
          request.setUuidList([notificationUUIDs]);
        }

        this.client.readNotification(
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
                  message: response.getMessage()
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
    }

    deleteNotification(notificationUUIDs) {
      return new Promise((resolve, reject) => {
        const request = new DeleteNotificationRequest();
        if (Array.isArray(notificationUUIDs)) {
          request.setUuidList(notificationUUIDs);
        } else {
          request.setUuidList([notificationUUIDs]);
        }

        this.client.deleteNotification(
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
                  message: response.getMessage()
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
    }

    registerPushClient({
      kind,
      endpoint = '',
      p256dh = '',
      auth = '',
      token = '',
      deviceId,
      appId = 'io.yartu.suite'
    }) {
      return new Promise((resolve, reject) => {
        const request = new RegisterPushClientRequest();
        request.setKind(kind);
        request.setEndpoint(endpoint);
        request.setP256dh(p256dh);
        request.setAuth(auth);
        request.setToken(token);
        request.setDeviceId(deviceId || getDeviceId());
        request.setAppId(appId);

        this.client.registerPushClient(
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
                  pushkey: response.getPushkey(),
                  message: response.getMessage()
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
    }

    unregisterPushClient({ pushkey = '', deviceId = '' } = {}) {
      return new Promise((resolve, reject) => {
        const request = new UnregisterPushClientRequest();
        request.setPushkey(pushkey);
        request.setDeviceId(deviceId);

        this.client.unregisterPushClient(
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
                  message: response.getMessage()
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
    }

    getPushConfig() {
      return new Promise((resolve, reject) => {
        const request = new GetPushConfigRequest();

        this.client.getPushConfig(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code: 0,
                enabled: response.getEnabled(),
                vapidPublicKey: response.getVapidPublicKey(),
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
    }
  };

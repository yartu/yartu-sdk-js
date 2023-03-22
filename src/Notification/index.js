import {
  ListNotificationRequest,
  UpsertNotificationRequest,
} from './service-pb.cjs';

import { YNotificationClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

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
                const notificationList = response.getNotificationList().map((data) => {
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

  };

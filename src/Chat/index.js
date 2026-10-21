import {
  GetChatConfigRequest,
  GetChatLoginTokenRequest,
  SaveChatMediaToDriveRequest,
  GrantRoomReadAccessRequest,
  ResolveChatUserRequest,
  StartRoomMeetingRequest
} from './service-pb.cjs';

import { YChatClient } from './service-grpc-web-pb.cjs';
import { handleError, getDeviceId } from '../utils/helper';

export default (config) =>
  class Chat {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YChatClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    getChatDeviceId() {
      return `YARTU_${getDeviceId()}`;
    }

    getChatConfig() {
      return new Promise((resolve, reject) => {
        const request = new GetChatConfigRequest();

        this.client.getChatConfig(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code: 0,
                enabled: response.getEnabled(),
                homeserverUrl: response.getHomeserverUrl(),
                serverName: response.getServerName(),
                userId: response.getUserId(),
                pushGatewayUrl: response.getPushGatewayUrl(),
                botUserId: response.getBotUserId(),
                botEnabled: response.getBotEnabled(),
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

    getChatLoginToken() {
      return new Promise((resolve, reject) => {
        const request = new GetChatLoginTokenRequest();

        this.client.getChatLoginToken(
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
                  token: response.getToken(),
                  expiresIn: response.getExpiresIn(),
                  deviceId: this.getChatDeviceId(),
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

    saveChatMediaToDrive(mxcUri, repoId, path, roomId) {
      return new Promise((resolve, reject) => {
        const request = new SaveChatMediaToDriveRequest();
        request.setMxcUri(mxcUri);
        request.setRepoId(repoId);
        request.setPath(path);
        request.setRoomId(roomId);

        this.client.saveChatMediaToDrive(
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
                  name: response.getName(),
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

    grantRoomReadAccess(roomId, repoId, path) {
      return new Promise((resolve, reject) => {
        const request = new GrantRoomReadAccessRequest();
        request.setRoomId(roomId);
        request.setRepoId(repoId);
        request.setPath(path);

        this.client.grantRoomReadAccess(
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
                  granted: response.getGranted(),
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

    resolveChatUser(username) {
      return new Promise((resolve, reject) => {
        const request = new ResolveChatUserRequest();
        request.setUsername(username);

        this.client.resolveChatUser(
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
                  mxid: response.getMxid(),
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

    startRoomMeeting(roomId, title) {
      return new Promise((resolve, reject) => {
        const request = new StartRoomMeetingRequest();
        request.setRoomId(roomId);
        request.setTitle(title);

        this.client.startRoomMeeting(
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
                  uuid: response.getUuid(),
                  added: response.getAdded(),
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

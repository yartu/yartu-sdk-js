import {
  ListFolderRequest,
  ListFolderResponse,
  ListMessageRequest
} from './service-pb.cjs';
import { YEmailClient } from './service-grpc-web-pb.cjs';

export default (config) =>
  class Email {
    endpoint = 'http://localhost:5001';
    client = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YEmailClient(this.endpoint + '/mail', '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listMessages(folder, filter, pagination = {}) {
      return new Promise((resolve, reject) => {
        const request = new ListMessageRequest();
        request.setFolder(folder);
        console.log(folder, request, request.toObject());

        this.client.listMessage(request, this.metadata, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();

            if (code == 0) {
              console.log(response);
              const dataList = response
                .getEmailsList()
                .map((data) => data.toObject());
              resolve({
                emails: dataList,
                pagination: {} // response.getPagination().toObject()
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

    listFolders() {
      return new Promise((resolve, reject) => {
        const request = new ListFolderRequest();
        // request.setQuery()
        this.client.listFolder(request, this.metadata, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();

            if (code == 0) {
              console.log(response);
              const dataList = response
                .getFoldersList()
                .map((data) => data.toObject());
              resolve({
                folders: dataList,
                pagination: {} // response.getPagination().toObject()
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

    upsertEmailFolder(folderId, folderData) {
      return new Promise((resolve, reject) => {
        resolve({
          code: 0,
          message: 'Successfully'
        });
      });
    }
  };

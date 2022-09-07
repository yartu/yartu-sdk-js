import {
  ListFolderRequest,
  ListMessageRequest,
  GetMessageRequest,
  SendMessageRequest,
  UpsertFolderRequest,
  MailAddress
} from './service-pb.cjs';
import { YEmailClient } from './service-grpc-web-pb.cjs';

export default (config) =>
  class Email {
    endpoint = 'http://localhost:5001';
    client = undefined;
    yartuSdk = undefined;

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

    getMessage(emailUuid) {
      return new Promise((resolve, reject) => {
        const request = new GetMessageRequest();
        request.setUuid(emailUuid);
        this.client.getMessage(request, this.metadata, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();

            if (code == 0) {
              const data = response.getEmail().toObject();
              resolve({
                data: data
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

    upsertEmailFolder(folderUuid, folderName, folderParent) {
      return new Promise((resolve, reject) => {
        const request = new UpsertFolderRequest();

        request.setUuid(folderUuid);
        request.setName(folderName);
        request.setParentfolder(folderParent);

        this.client.upsertFolder(request, this.metadata, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                message: 'success'
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

    sendEmail(data) {
      return new Promise((resolve, reject) => {
        const request = new SendMessageRequest();
        request.setFrom(
          this.yartuSdk.user.name + ' ' + this.yartuSdk.user.surname
        );
        request.setSubject(data.subject);
        request.setBody(data.body);
        request.setTextbody(data.textBody);

        const toList = [];
        for (const to of data.to) {
          toList.push(to.email);
        }
        request.setToList(toList);

        const ccList = [];
        for (const cc of data.cc) {
          ccList.push(cc.email);
        }
        request.setCcList(ccList);

        const bccList = [];
        for (const bcc of data.bcc) {
          bccList.push(bcc.email);
        }
        request.setBccList(bccList);

        this.client.sendMessage(request, this.metadata, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                message: 'successfully'
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

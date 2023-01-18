import {
  ListMessageRequest,
  GetMessageRequest,
  DownloadAttachmentRequest,
  SendMessageRequest,
  SaveDraftRequest,
  ChangeMessageFlagRequest,
  MoveMessageRequest,
  ListFolderRequest,
  UpsertFolderRequest,
  UploadAttachmentRequest,
  DeleteFolderRequest,
  EmptyFolderRequest,
  GetInfoRequest,
  MailAddress
} from './service-pb.cjs';
import { YEmailClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';
import { Query } from '../utils/definitions_pb.cjs';

export default (config) =>
  class Email {
    endpoint = 'http://localhost:5001';
    client = undefined;
    yartuSdk = undefined;
    shareUuid = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YEmailClient(this.endpoint + '/mail', '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    setSharedMailboxUuid(uuid) {
      this.shareUuid = uuid;
      this.metadata['x-shared-mailbox'] = uuid;
      return true;
    }

    clearSharedMailboxUuid() {
      this.shareUuid = undefined;
      delete this.metadata['x-shared-mailbox'];
    }

    listMessages(folder, filter = {}, pagination = {}) {
      return new Promise((resolve, reject) => {
        const request = new ListMessageRequest();
        const queryData = new Query();

        request.setFolder(folder);

        if (filter.getAllMessages) {
          request.setAllmessages(true);
        } else if (filter.getFlaggedMessages) {
          // Starred
          request.setFlaggedmessages(true);
        }

        if (filter.setSeenonly) {
          request.setSeenonly(true);
        } else if (filter.setUnseenonly) {
          request.setUnseenonly(true);
        }

        if (filter.setHasattachmentonly) {
          request.setHasattachmentonly(true);
        }

        queryData.setPage(pagination.page || 1);
        queryData.setPerPage(pagination.perPage || 20);

        if (filter.sortBy) {
          queryData.setSortby(filter.sortBy || ''); // from, size, revieved_at,
        }

        request.setQuery(queryData);

        this.client.listMessage(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response
                .getEmailList()
                .map((data) => data.toObject());
              resolve({
                emails: dataList,
                pagination: response.getPagination().toObject()
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
            handleError(error, reject);
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

    downloadAttachment(emailUuid, place, name) {
      return new Promise((resolve, reject) => {
        const request = new DownloadAttachmentRequest();
        request.setMailuuid(emailUuid);
        request.setPlace(place);
        this.client.downloadAttachment(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const data = response.getData();
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
          }
        );
      });
    }

    uploadAttachment(name, type = 'attachment') {
      return new Promise((resolve, reject) => {
        const request = new UploadAttachmentRequest();
        request.setName(name);
        // request.setType(type);
        this.client.uploadAttachment(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              const message = response.getMessage();

              if (code == 0) {
                const uuid = response.getUuid();
                resolve({
                  code,
                  uuid,
                  message
                });
              } else {
                reject({
                  code,
                  message
                });
              }
            }
          }
        );
      });
    }

    changeMessageFlag(emailUuidList, flagName, status = true) {
      return new Promise((resolve, reject) => {
        const request = new ChangeMessageFlagRequest();
        request.setUuidList(emailUuidList);
        request.setFlag(flagName);
        request.setStatus(status);
        this.client.changeMessageFlag(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                resolve({
                  code: 0
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

    moveMessage(emailUuidList, folderUuid) {
      return new Promise((resolve, reject) => {
        const request = new MoveMessageRequest();
        request.setUuidList(emailUuidList);
        request.setFolder(folderUuid);
        this.client.moveMessage(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0
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

    deleteMessage(emailUuidList) {
      return new Promise((resolve, reject) => {
        const request = new MoveMessageRequest();
        request.setUuidList(emailUuidList);
        this.client.deleteMessage(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0
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
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response
                .getFolderList()
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
            handleError(error, reject);
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

    deleteFolder(folderUuid) {
      return new Promise((resolve, reject) => {
        const request = new DeleteFolderRequest();

        request.setUuid(folderUuid);
        this.client.deleteFolder(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
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

    emptyFolder(folderUuid) {
      return new Promise((resolve, reject) => {
        const request = new EmptyFolderRequest();

        request.setUuid(folderUuid);
        this.client.emptyFolder(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
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

    prepareEmail(data, request) {
      request.setFrom(
        this.yartuSdk.user.name + ' ' + this.yartuSdk.user.surname
      );

      request.setSubject(data.subject);
      request.setBody(data.body); // html
      request.setTextbody(data.bodyText); // text

      const toList = [];
      if (!!data.to && !!data.to[Symbol.iterator]) {
        for (const to of data.to) {
          toList.push(to.email);
        }
        request.setToList(toList);
      }

      const ccList = [];
      if (!!data.cc && !!data.cc[Symbol.iterator]) {
        for (const cc of data.cc) {
          ccList.push(cc.email);
        }
        request.setCcList(ccList);
      }

      const bccList = [];
      if (!!data.bcc && !!data.bcc[Symbol.iterator]) {
        for (const bcc of data.bcc) {
          bccList.push(bcc.email);
        }
        request.setBccList(bccList);
      }

      request.setAttachmentList(data.attachments);

      if (data.replyTo) {
        request.setInreplyto(data.replyTo);
      }

      return request;
    }

    sendEmail(data) {
      return new Promise((resolve, reject) => {
        let request = new SendMessageRequest();
        request = this.prepareEmail(data, request);

        this.client.sendMessage(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
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

    saveDraft(data, uid = false) {
      return new Promise((resolve, reject) => {
        let request = new SaveDraftRequest();
        request = this.prepareEmail(data, request);
        if (uid) {
          request.setUid(uid);
        }

        this.client.saveDraft(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
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

    getInfo() {
      return new Promise((resolve, reject) => {
        const request = new GetInfoRequest();
        this.client.getInfo(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const data = response.toObject();
            data.code = code;

            if (code == 0) {
              resolve(data);
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

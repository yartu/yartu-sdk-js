import {
  Query,
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
  BulkActionFolderRequest,
  GetInfoRequest,
  MailAddress,
  SearchFilter,
  SearchRequest
} from './service-pb.cjs';
import { YEmailClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

import { sanitize } from '../utils/xss_filter.js';

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
          request.setAllMessages(true);
        } else if (filter.getFlaggedMessages) {
          // Starred
          request.setFlaggedMessages(true);
        }

        if (filter.setSeenonly) {
          request.setSeenOnly(true);
        } else if (filter.setUnseenonly) {
          request.setUnseenOnly(true);
        }

        if (filter.setHasattachmentonly) {
          request.setHasAttachmentOnly(true);
        }

        queryData.setPage(pagination.page || 1);
        queryData.setPerPage(pagination.perPage || 20);

        if (filter.sortBy) {
          queryData.setSortBy(filter.sortBy || ''); // from, size, revieved_at,
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

    getMessage(emailUuid, filter_xss = true) {
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
              if (filter_xss) {
                // filtered body and return
                data.body = sanitize(data.body);
              }
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
        request.setMailUuid(emailUuid);
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
        request.setParentFolder(folderParent);

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

    bulkActionFolder(folderUuid, action) {
      return new Promise((resolve, reject) => {
        const request = new BulkActionFolderRequest();

        request.setUuid(folderUuid);
        request.setAction(action);

        this.client.bulkActionFolder(
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
                  message: 'success'
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

    prepareEmail(data, request) {
      request.setFrom(
        this.yartuSdk.user.name + ' ' + this.yartuSdk.user.surname
      );

      request.setSubject(data.subject);
      request.setBody(data.body); // html
      request.setTextBody(data.bodyText); // text

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
        request.setInReplyTo(data.replyTo);
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

    search = (query = {}, filters = []) => {
      if (this.activeSearch) {
        this.activeSearch.cancel();
      }

      return new Promise((resolve, reject) => {
        const request = new SearchRequest();
        const queryRequest = new Query();

        if (query.app !== 'all') {
          request.setAppList([query.app]);
        }

        for (const filter of filters) {
          const searchFilter = new SearchFilter();
          const { selector, value } = filter;

          if (value && value.length > 0) {
            searchFilter.setSelector(selector);
            searchFilter.setValueList(value);
            request.addFilter(searchFilter);
          }
        }

        queryRequest.setQuery(query.query);
        request.setQuery(queryRequest);

        this.activeSearch = this.client.search(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const results = response.getDataList().map((data) => data.toObject());
                const emails = response.getEmailList().map((email) => email.toObject());
                const pagination = {};
                resolve({
                  message: response.getMessage(),
                  results,
                  emails,
                  pagination,
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
  };

/* eslint-disable unicorn/prevent-abbreviations */
import {
  GetRecentRequest,
  ListRepoRequest,
  UpsertRepoRequest,
  ListDirentRequest,
  UpsertDirectoryRequest,
  UpsertFileRequest,
  UploadFileRequest
} from './service-pb.cjs';

import { YDriveClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Drive {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YDriveClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    getRecent = () => {
      return new Promise((resolve, reject) => {
        const request = new GetRecentRequest();
        this.client.getRecent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const viewedList = response
                .getViewedList()
                .map((data) => data.toObject());
              const updatedList = response
                .getUpdatedList()
                .map((data) => data.toObject());
              const starredList = response
                .getStarredList()
                .map((data) => data.toObject());
              resolve({
                viewed: viewedList,
                updated: updatedList,
                starred: starredList
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

    listRepo = () => {
      return new Promise((resolve, reject) => {
        const request = new ListRepoRequest();
        this.client.listRepo(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());
              resolve({
                data: dataList
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

    upsertRepo = (name, description, password = false, repoId = false) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertRepoRequest();
        if (repoId) {
          request.setRepoId(repoId);
        } else {
          request.setIsNew(true);
        }
        request.setName(name);
        request.setDescription(description || '');

        if (password) {
          request.setPassword(password);
        }

        this.client.upsertRepo(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                repo: response.getRepo().toObject()
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

    listDirent = (repoId, path, query, recursive = false) => {
      return new Promise((resolve, reject) => {
        const request = new ListDirentRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setRecursive(recursive);

        this.client.listDirent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const fileList = [];
            const dirList = [];
            console.log(response);

            if (code == 0) {
              const dataList = response.getDataList().map((data) => {
                let dirent = data.toObject();
                dirent.path = `${dirent.parentDir}${dirent.name}`;
                if (dirent.type === 'file') {
                  fileList.push(dirent);
                } else {
                  dirList.push(dirent);
                }
              });
              resolve({
                files: fileList,
                dirs: dirList
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

    upsertDirectory = (repoId, path, name, operation) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertDirectoryRequest();

        if (!['create', 'rename', 'move', 'delete'].includes(operation)) {
          reject({
            code: 100
          });
        }
        request.setRepoId(repoId);
        request.setPath(path);
        request.setNewName(name);
        request.setOperation(operation);

        this.client.upsertDirectory(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                let data = {};
                if (operation !== 'delete') {
                  data = response.getData().toObject();
                }

                resolve({
                  code,
                  data
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

    upsertFile = (
      repoId,
      path,
      name,
      operation,
      dstRepoId,
      dstDir,
      expire,
      isDraft = false
    ) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertFileRequest();

        if (
          !['create', 'rename', 'move', 'copy', 'delete'].includes(operation)
        ) {
          reject({
            code: 100
          });
        }
        request.setRepoId(repoId);
        request.setPath(path);
        request.setNewName(name);
        request.setOperation(operation);
        request.setIsDraft(isDraft);

        if (operation == 'copy') {
          request.setDstRepoId(dstRepoId);
          request.setDstDir(dstDir);
        } else if (operation == 'lock') {
          request.setExpire(expire);
        }

        this.client.upsertFile(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              let data = {};
              if (operation !== 'delete') {
                data = response.getData().toObject();
              }

              resolve({
                code,
                data
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

    uploadFile = (repoId, path, file_list) => {
      return new Promise((resolve, reject) => {
        const request = new UploadFileRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setFileNameList(file_list);

        this.client.uploadFile(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const tokenList = response
                .getTokenList()
                .map((data) => data.toObject());

              resolve({
                code: code,
                tokens: tokenList
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
  };

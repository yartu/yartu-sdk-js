/* eslint-disable unicorn/prevent-abbreviations */
import {
  GetRecentRequest,
  ListRepoRequest,
  UpsertRepoRequest,
  DeleteRepoRequest,
  ListDirentRequest,
  StarDirentRequest,
  UpsertDirectoryRequest,
  UpsertFileRequest,
  UploadFileRequest,
  DownloadFileRequest,
  GetOfficeFileRequest,
  UpsertDirentRequest
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

    getRecent = (recentType = ['viewed', 'updated', 'starred']) => {
      return new Promise((resolve, reject) => {
        const request = new GetRecentRequest();

        request.setRecentTypesList(recentType);

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
              const starredList = response.getStarredList().map((data) => {
                const l = data.toObject();
                if (l.type === 'file') {
                  l.path = `${l.parentDir}${l.name}`;
                } else {
                  l.path = l.parentDir;
                }
                return l;
              });
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

    deleteRepo = (repoId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteRepoRequest();
        request.setId(repoId);

        this.client.deleteRepo(request, this.metadata, (error, response) => {
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

    starDirent = (repoId, path, star = true) => {
      return new Promise((resolve, reject) => {
        const request = new StarDirentRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setStar(star);

        this.client.starDirent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
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

    upsertDirent = (
      repoId,
      pathList,
      name,
      operation,
      dstRepoId,
      dstDir,
      force = false,
      expire = 0,
      isDraft = false
    ) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertDirentRequest();

        if (
          !['create', 'rename', 'move', 'copy', 'delete'].includes(operation)
        ) {
          reject({
            code: 100
          });
        }
        request.setRepoId(repoId);
        request.setPathList(pathList);
        request.setNewName(name);
        request.setOperation(operation);
        request.setForce(force);
        request.setIsDraft(isDraft);

        if (operation == 'copy' || operation == 'move') {
          request.setDstRepoId(dstRepoId);
          request.setDstDir(dstDir);
        } else if (operation == 'lock') {
          request.setExpire(expire);
        }

        this.client.upsertDirent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code === 0) {
              let dirents = {};
              if (operation !== 'delete') {
                dirents = response.getDataList().map((data) => {
                  const dirent = data.toObject();
                  dirent.path = `${dirent.parentDir}${dirent.name}`;
                  return dirent;
                });
              }
              resolve({
                code,
                data: dirents
              });
            } else if (code === -1) {
              // Forceable error
              resolve({
                code,
                error: response.getErrorList().map((data) => data.toObject())
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

    upsertDirectory = (repoId, path, name, operation, dstRepoId, dstDir) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertDirectoryRequest();

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
        if (operation == 'copy' || operation == 'move') {
          request.setDstRepoId(dstRepoId);
          request.setDstDir(dstDir);
        }

        this.client.upsertDirectory(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                let dirent = {};
                if (operation !== 'delete') {
                  dirent = response.getData().toObject();
                  dirent.path = `${dirent.parentDir}${dirent.name}`;
                }

                resolve({
                  code,
                  data: dirent
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

        if (operation == 'copy' || operation == 'move') {
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
              let dirent = {};
              if (operation !== 'delete') {
                dirent = response.getData().toObject();
                dirent.path = `${dirent.parentDir}${dirent.name}`;
              }

              resolve({
                code,
                data: dirent
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

    uploadFile = (repoId, path, fileList) => {
      return new Promise((resolve, reject) => {
        const request = new UploadFileRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setFileNameList(fileList);

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

    downloadFile = (repoId, path, preview = false) => {
      return new Promise((resolve, reject) => {
        const request = new DownloadFileRequest();
        request.setRepoId(repoId);
        request.setPath(path);

        this.client.downloadFile(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const token = response.getToken();

              resolve({
                code: code,
                token: token
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

    getOfficeFile = (repoId, path) => {
      return new Promise((resolve, reject) => {
        const request = new GetOfficeFileRequest();
        request.setRepoId(repoId);
        request.setPath(path);

        this.client.getOfficeFile(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const file = response.getFile().toObject();
              const fileType = response.getFileType();
              const officeToken = response.getOfficeToken();
              const accessToken = response.getAccessToken();

              resolve({
                code: code,
                file,
                fileType,
                officeToken,
                accessToken
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

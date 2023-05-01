/* eslint-disable unicorn/prevent-abbreviations */
import {
  GetRecentRequest,
  GetQuotaRequest,
  ListRepoRequest,
  UpsertRepoRequest,
  DeleteRepoRequest,
  GetRepoHistoryRequest,
  GetRepoTrashRequest,
  ListDirentRequest,
  StarDirentRequest,
  UpsertDirectoryRequest,
  UpsertFileRequest,
  UploadFileRequest,
  DownloadFileRequest,
  GetFileHistoryRequest,
  GetOfficeFileRequest,
  GetDirentRequest,
  UpsertDirentRequest,
  LockDirentRequest,
  UnlockDirentRequest,
  DownloadDirentRequest,
  SetRepoPasswordRequest,
  TransferRepoRequest,

  // Share
  ListShareRequest,
  ShareRequest,
  UnshareRequest,
  DeleteShareRequest,
  SharedWithMeRequest,
  SharedByMeRequest,

  // PublicShare (Share with link)
  ListPublicShareRequest,
  UpsertPublicShareRequest,
  DeletePublicShareRequest,
  GetPublicShareRequest,

  // UploadPoint
  ListUploadPointRequest,
  UpsertUploadPointRequest,
  DeleteUploadPointRequest,
  GetUploadPointRequest,

  // Client
  ListConnectedClientRequest,
  SignOutClientRequest,

} from './service-pb.cjs';

import { YDriveClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';
import { Group, Query, Shared, User } from '../utils/definitions_pb.cjs';

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
              const viewedList = response.getViewedList().map((data) => {
                const l = data.toObject();
                l.path = `${l.parentDir}${l.name}`;
                return l;
              });
              const updatedList = response.getUpdatedList().map((data) => {
                const l = data.toObject();
                l.path = `${l.parentDir}${l.name}`;
                return l;
              });
              const starredList = response.getStarredList().map((data) => {
                const l = data.toObject();
                l.path = `${l.parentDir}${l.name}`;
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

    getQuota = () => {
      return new Promise((resolve, reject) => {
        const request = new GetQuotaRequest();
        this.client.getQuota(request, this.metadata, (error, response) => {
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
          request.setId(repoId);
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

    getRepoHistory = (repoId, queryRequest = {}) => {
      return new Promise((resolve, reject) => {
        const request = new GetRepoHistoryRequest();
        request.setRepoId(repoId);

        const query = new Query();

        if (queryRequest.sortBy) {
          query.setSortBy(queryRequest.sortBy);
        }
        if (queryRequest.perPage) {
          query.setPerPage(queryRequest.perPage);
        }
        if (queryRequest.page) {
          query.setPage(queryRequest.page);
        }

        request.setQuery(query);

        this.client.getRepoHistory(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const dataList = response
                  .getDataList()
                  .map((data) => data.toObject());

                resolve({
                  code: 0,
                  data: dataList,
                  more: response.getMore(),
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
    };

    getRepoTrash = (repoId = '', path = '', commitId = '', showDays = 0, scanStat = '') => {
      return new Promise((resolve, reject) => {
        const request = new GetRepoTrashRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setCommitId(commitId);
        request.setShowDays(showDays);
        request.setScanStat(scanStat);

        this.client.getRepoTrash(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const fileList = [];
                const dirList = [];
                const dataList = response.getDataList().map((data) => data.toObject());
                response.getDataList().map((data) => {
                  let dirent = data.toObject();
                  dirent.path = `${dirent.parentDir}${dirent.name}`;
                  if (dirent.isFile) {
                    fileList.push({ ...dirent, id: dirent.objId, type: 'file'});
                  } else {
                    dirList.push({ ...dirent, id: dirent.objId, type: 'dir'});
                  }
                });
                resolve({
                  code: 0,
                  data: dataList,
                  files: fileList,
                  dirs: dirList,
                  more: response.getMore(),
                  scanStat: response.getScanStat(),
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
      isDraft = false,
      commitId = '',
    ) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertDirentRequest();

        if (!['create-dir', 'create-file', 'rename', 'move', 'copy', 'delete', 'revert'].includes(operation)) {
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
        request.setCommitId(commitId);

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

    lockDirent = (repoId, path, force = false, comment = '') => {
      return new Promise((resolve, reject) => {
        const request = new LockDirentRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setForce(force);
        request.setComment(comment);

        this.client.lockDirent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0 || code == 400) {
              resolve({
                code: code,
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
    };

    unlockDirent = (repoId, path, force = false) => {
      return new Promise((resolve, reject) => {
        const request = new UnlockDirentRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setForce(force);

        this.client.unlockDirent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0 || code == 400) {
              resolve({
                code: code,
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

        if (preview) {
          request.setOp('view');
        }

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

    getFileHistory = (repoId, path, commitId, limit) => {
      return new Promise((resolve, reject) => {
        const request = new GetFileHistoryRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setCommitId(commitId);
        request.setLimit(limit);

        this.client.getFileHistory(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const dataList = response
                  .getDataList()
                  .map((data) => data.toObject());
                resolve({
                  code: 0,
                  data: dataList,
                  more: response.getMore(),
                  nextCommitId: response.getNextCommitId(),
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
              const fileToken = response.getFileToken();
              const jwtToken = response.getJwtToken();
              const shareList = response.getShareList().map((data) => data.toObject());

              resolve({
                code: code,
                file,
                fileType,
                officeToken,
                fileToken,
                jwtToken,
                shareList,
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

    getDirent = (repoId, path, hasDownloadLink = false) => {
      return new Promise((resolve, reject) => {
        const request = new GetDirentRequest();

        request.setRepoId(repoId);
        request.setPath(path);
        request.setDownloadLink(hasDownloadLink);

        this.client.getDirent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dirent = response.getData().toObject();
              const token = response.getToken();

              resolve({
                code: code,
                token,
                ...dirent
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

    // share
    listShare = (repoId, path) => {
      return new Promise((resolve, reject) => {
        const request = new ListShareRequest();
        request.setRepoId(repoId);
        request.setPath(path);

        this.client.listShare(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const data = response
                .getShareList()
                .map((data) => data.toObject());
              const type = response.getType(); // type can be "repo", "dir" or "file"
              resolve({
                code: code,
                data: data,
                type: type,
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
    };

    share = (repoId, path, description, shareList) => {
      console.log('------------------------------------------------------------------');
      console.log('repoId:', repoId);
      console.log('path:', path);
      console.log('description:', description);
      console.log('shareList:', shareList);
      console.log('------------------------------------------------------------------');
      return new Promise((resolve, reject) => {
        const request = new ShareRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setDescription(description);

        const sharedList = [];
        for (const s of shareList) {
          const shared = new Shared();
          shared.setId(s.shared_id);

          if (typeof s.permission === 'string') {
            shared.setPermission(s.permission);
          } else {
            shared.setPermission('custom');
            Object.keys(s.permission).forEach((k) => {
              shared.getCustomPermissionMap().set(k, s.permission[k]);
            });
          }

          if (s?.isYartuUser) {
            const user = new User();
            user.setId(s.id);
            user.setUsername(s.email);
            user.setName(s.name);
            user.setSurname(s.surname);

            shared.setUser(user);
          } else if (s?.isGroup) {
            const group = new Group();
            group.setId(s.id);
            group.setName(s.name);
            group.setEmailAlias(s.email);

            shared.setGroup(group);
          } else {
            console.log(
              '@yartu/sdk/Drive share method not supports external users and Realm share features for now!'
            );
          }

          sharedList.push(shared);
        }

        request.setShareList(sharedList);

        this.client.share(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                success: response
                  .getSuccessList()
                  .map((data) => data.toObject()),
                failed: response.getFailedList().map((data) => data.toObject()),
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
    };

    unshare = (repoId, path = '/') => {
      return new Promise((resolve, reject) => {
        const request = new UnshareRequest();
        request.setRepoId(repoId);
        request.setPath(path);

        this.client.unshare(request, this.metadata, (error, response) => {
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
        });
      });
    };

    deleteShare = (repoId, path, description, shareList) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteShareRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setDescription(description);

        const sharedList = [];
        for (const s of shareList) {
          const shared = new Shared();
          // shared.setId(s.shared_id);

          // TODO :: set Permission map text ??
          // shared.setPermission(s.permission);

          if (s?.isYartuUser) {
            const user = new User();
            user.setId(s.id);
            user.setUsername(s.email);
            user.setName(s.name);
            user.setSurname(s.surname);

            console.log('AAAAA:user', user, s);
            shared.setUser(user);
          } else if (s?.isGroup) {
            const group = new Group();
            group.setId(s.id);
            group.setName(s.name);
            group.setEmailAlias(s.email);

            shared.setGroup(group);
          } else {
            console.log(
              '@yartu/sdk/Drive deleteShare method not supports external users and Realm share features for now!'
            );
            console.log('@yartu/sdk/Drive deleteShare: s:', s);
          }

          sharedList.push(shared);
        }

        request.setShareList(sharedList);

        this.client.deleteShare(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                success: response
                  .getSuccessList()
                  .map((data) => data.toObject()),
                failed: response.getFailedList().map((data) => data.toObject()),
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
    };

    sharedWithMe = () => {
      return new Promise((resolve, reject) => {
        const request = new SharedWithMeRequest();

        this.client.sharedWithMe(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());

              resolve({
                code: 0,
                data: dataList,
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
    };

    sharedByMe = () => {
      return new Promise((resolve, reject) => {
        const request = new SharedByMeRequest();

        this.client.sharedByMe(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());

              resolve({
                code: 0,
                data: dataList,
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
    };

    downloadDirent = (repoId, paths = [], asList = false) => {
      return new Promise((resolve, reject) => {
        const request = new DownloadDirentRequest();

        request.setRepoId(repoId);
        request.setPathList(paths);
        request.setAsList(asList);

        this.client.downloadDirent(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const tokenList = response
                .getTokenList()
                .map((data) => data.toObject());

              resolve({
                code: 0,
                data: tokenList,
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
    };

    // PublicShare (Share with link)
    listPublicShare = (repoId = '', path = '', showExpired = false) => {
      return new Promise((resolve, reject) => {
        const request = new ListPublicShareRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setShowExpired(showExpired);

        this.client.listPublicShare(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
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

    upsertPublicShare = (token, repoId = '', path = '', description = '', password = '', expireDate = '', downloadCountLimit = 0, ipaddress = '') => {
      return new Promise((resolve, reject) => {
        const request = new UpsertPublicShareRequest();
        request.setToken(token);
        request.setRepoId(repoId);
        request.setPath(path);
        request.setDescription(description);
        request.setPassword(password);
        request.setExpireDate(expireDate);
        request.setDownloadCountLimit(downloadCountLimit);
        request.setIpaddress(ipaddress);

        this.client.upsertPublicShare(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const data = response.getData().toObject();
              resolve({
                code,
                data,
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
    };

    deletePublicShare = (token) => {
      return new Promise((resolve, reject) => {
        const request = new DeletePublicShareRequest();
        request.setToken(token);

        this.client.deletePublicShare(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code: code,
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
    };

    getPublicShare = () => {
      return new Promise((resolve, reject) => {
        const request = new GetPublicShareRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setStar(star);

        this.client.getPublicShare(request, this.metadata, (error, response) => {
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

    // UploadPoint
    listUploadPoint = (repoId, path) => {
      return new Promise((resolve, reject) => {
        const request = new ListUploadPointRequest();
        request.setRepoId(repoId);
        request.setPath(path);

        this.client.listUploadPoint(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
                message: response.getMessage(),
              });
            } else {
              reject({
                code: code,
                message: response.getMessage(),
              });
            }
          }
        });
      });
    };

    upsertUploadPoint = (uploadPointData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertUploadPointRequest();
        console.log('SDK:uploadPointData:', uploadPointData);
        request.setToken(uploadPointData.token);
        request.setRepoId(uploadPointData.repoId);
        request.setPath(uploadPointData.path);
        request.setTitle(uploadPointData.title);
        request.setDescription(uploadPointData.description);
        request.setPassword(uploadPointData.password);
        request.setExpireDate(uploadPointData.expireDate);
        request.setFileCountLimit(uploadPointData.fileCountLimit);
        request.setFileSizeLimit(uploadPointData.fileSizeLimit);
        request.setExtensionListList(uploadPointData.extensionList);

        this.client.upsertUploadPoint(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const data = response.getData().toObject();
              resolve({
                code,
                data,
                message: response.getMessage()
              });
            } else {
              reject({
                code,
                message: response.getMessage()
              });
            }
          }
        });
      });
    };

    deleteUploadPoint = (token) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteUploadPointRequest();
        request.setToken(token);

        this.client.deleteUploadPoint(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code: code,
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
    };

    getUploadPoint = (token, password = '') => {
      return new Promise((resolve, reject) => {
        const request = new GetUploadPointRequest();
        request.setToken(token);
        request.setPassword(password);

        this.client.getUploadPoint(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const data = response.getData().toObject();
              const passwordNeeded = response.getPasswordNeeded();
              const uploadKey = response.getUploadKey();

              resolve({
                code,
                data,
                passwordNeeded,
                uploadKey,
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
    };

    // Client
    listConnectedClient = () => {
      return new Promise((resolve, reject) => {
        const request = new ListConnectedClientRequest();

        this.client.listConnectedClient(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
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

    signOutClient = (deviceId = '', platform = '', wipe = false) => {
      return new Promise((resolve, reject) => {
        const request = new SignOutClientRequest();
        request.setDeviceId(deviceId);
        request.setPlatform(platform);
        request.setWipe(wipe);

        this.client.signOutClient(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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
    };

    setRepoPassword = (repoId = '', password = '') => {
      return new Promise((resolve, reject) => {
        const request = new SetRepoPasswordRequest();

        request.setRepoId(repoId);
        request.setPassword(password);

        this.client.setRepoPassword(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                status: response.getStatus(),
                message: response.getMessage()
              });
            } else {
              reject({
                code: code,
                status: false,
                message: response.getMessage()
              });
            }
          }
        });
      });
    };

    transferRepo = (repoId, user) => {
      return new Promise((resolve, reject) => {
        const request = new TransferRepoRequest();

        const userRequest = new User();
        userRequest.setId(user.id);
        userRequest.setUsername(user.email);
        userRequest.setName(user.name);
        userRequest.setSurname(user.surname);

        request.setRepoId(repoId);
        request.setTo(userRequest);

        this.client.transferRepo(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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
    };


  };

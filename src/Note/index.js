import {
  NoteMetaQuery,
  NoteLabel,

  ListNotebookRequest,
  UpsertNotebookRequest,
  DeleteNotebookRequest,
  ShareNotebookRequest,
  UnshareNotebookRequest,

  DeleteSharedNotebookRequest,

  ListNoteRequest,
  GetNoteRequest,
  DeleteNoteRequest,
  UpsertNoteRequest,
  StarNoteRequest,
  MoveNoteRequest,
  CopyNoteRequest,
  PinNoteRequest,
  ArchiveNoteRequest,
  ConvertNoteRequest,

  ListNoteLabelRequest,
  UpsertLabelToNoteRequest,
  UpsertNoteLabelRequest,
  DeleteNoteLabelRequest,
} from './service-pb.cjs';

import { YNoteClient } from './service-grpc-web-pb.cjs';
import { Query, User, Group, Shared } from '../utils/definitions_pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Note {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YNoteClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listNotebook = () => {
      return new Promise((resolve, reject) => {
        const request = new ListNotebookRequest();
        const query = new Query();
        const meta = new NoteMetaQuery();

        meta.setFilterType('all');

        request.setQuery(query);
        request.setMeta(meta);

        this.client.listNotebook(
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
                  data: dataList,
                  pagination: response.getPagination().toObject()
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

    upsertNotebook = (notebookData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertNotebookRequest();

        request.setId(notebookData.id);
        request.setName(notebookData.name);

        this.client.upsertNotebook(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code,
                  message: response.getMessage(),
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

    deleteNotebook = (notebookId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteNotebookRequest();

        request.setId(notebookId);

        this.client.deleteNotebook(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    shareNotebook(notebookId, shareList) {
      return new Promise((resolve, reject) => {
        const request = new ShareNotebookRequest();
        request.setId(notebookId);
        const UserShareList = [];
        shareList.forEach(s => {
          const shared = new Shared();
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
            console.log('@yartu/sdk/ shareNotebook method not supports external users and Realm share features for now!');
          }


          shared.setPermissions(s.permissions);
          UserShareList.push(shared);
        });

        request.setSharedList(UserShareList);

        this.client.shareNotebook(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                // success: response.getSuccessList().map((data) => data.toObject()),
                // error: response.getErrorList().map((data) => data.toObject()),
                // TODO :: @ramazan add success repeated field to proto and backend service !
                // TODO :: @ramazan add error repeated field to proto and backend service !
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

    unshareNotebook(notebookId) {
      return new Promise((resolve, reject) => {
        const request = new UnshareNotebookRequest();
        request.setId(notebookId);

        this.client.unshareNotebook(request, this.metadata, (error, response) => {
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
    }

    deleteSharedNotebook(notebookId, sharedNotebookId) {
      return new Promise((resolve, reject) => {
        const request = new DeleteSharedNotebookRequest();
        request.setId(notebookId);
        request.setSharedNotebookId(sharedNotebookId);

        this.client.deleteSharedNotebook(request, this.metadata, (error, response) => {
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
    }

    listNote = (notebookId = null, query = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListNoteRequest();
        const queryRequest = new Query();
        const metaRequest = new NoteMetaQuery();

        if (notebookId && notebookId > 0) {
          request.setNotebookId(notebookId);
        }

        if (query.isStarred) {
          metaRequest.setIsStarred(true);
        }

        if (query.isArchived) {
          metaRequest.setIsArchived(true);
        }

        if (query.isPinned) {
          metaRequest.setIsPinned(true);
        }

        if (query.label) {
          metaRequest.setLabelId(query.label);
        }

        if (query.sortBy) {
          queryRequest.setSortBy(query.sortBy);
        }

        if (query.perPage) {
          queryRequest.setPerPage(query.perPage);
        }

        if (query.page) {
          queryRequest.setPage(query.page);
        }

        if (query.notebooks) {
          metaRequest.setNotebookList(query.notebooks);
        }

        metaRequest.setFilterType(query.filterType || 'all');

        request.setQuery(queryRequest);
        request.setMeta(metaRequest);

        this.client.listNote(
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
                  data: dataList,
                  pagination: response.getPagination().toObject()
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

    getNote = (noteId) => {
      return new Promise((resolve, reject) => {
        const request = new GetNoteRequest();

        request.setId(noteId);

        this.client.getNote(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const data = response.getData().toObject();
                resolve({
                  data,
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

    upsertNote = (noteData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertNoteRequest();

        request.setId(noteData.id);
        request.setTitle(noteData.title);
        request.setContent(noteData.content);
        request.setColor(noteData.color);
        if (typeof noteData.reminder === 'object' && noteData.reminder) {
          request.setReminder(noteData?.reminder.format('YYYY-MM-DD HH:mm'));
        }
        request.setNotebookId(noteData.notebookId);
        request.setIsPinned(noteData.isPinned);
        request.setIsStarred(noteData.isStarred);
        request.setIsArchived(noteData.isArchived);

        this.client.upsertNote(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {

                let note = null;
                if (response.hasNote()) {
                  note = response.getNote().toObject();
                }

                resolve({
                  code,
                  note,
                  message: response.getMessage(),
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

    starNote = (noteData) => {
      return new Promise((resolve, reject) => {
        const request = new StarNoteRequest();

        request.setId(noteData.id);
        request.setIsStarred(noteData.isStarred);

        this.client.starNote(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    moveNote = (moveData) => {
      return new Promise((resolve, reject) => {
        const request = new MoveNoteRequest();

        request.setNoteIdsList(moveData.ids);
        request.setTargetNotebookId(moveData.targetNotebook);

        this.client.moveNote(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    copyNote = (copyData) => {
      return new Promise((resolve, reject) => {
        const request = new CopyNoteRequest();

        request.setNoteIdsList(copyData.ids);
        request.setTargetNotebookId(copyData.targetNotebook);

        this.client.copyNote(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    deleteNote = (noteIds) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteNoteRequest();
        if (Array.isArray(noteIds) && noteIds.length > 0) {
          request.setIdsList(noteIds);
        } else {
          request.setId(noteIds);
        }

        this.client.deleteNote(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    listNoteLabel = () => {
      return new Promise((resolve, reject) => {
        const request = new ListNoteLabelRequest();
        console.log('listNoteLabel SDK');

        this.client.listNoteLabel(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());
              if (code == 0) {
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
          }
        );
      });
    }

    upsertNoteLabel = (labelData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertNoteLabelRequest();

        request.setName(labelData.name);
        request.setColor(labelData.color);
        request.setId(labelData.id);

        this.client.upsertNoteLabel(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code,
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

    upsertLabelToNote = (noteId, labels) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertLabelToNoteRequest();
        request.setNoteId(noteId);

        const labelsList = [];
        labels.forEach(l => {
          const notelabel = new NoteLabel();
          if(typeof l.id === 'number') {
            notelabel.setId(l.id);
          }
          notelabel.setName(l.name);
          notelabel.setColor(l.color);
          // notelabel.setUser(s.permissions);  // this line is not reuqired we can get context.user in backend.
          labelsList.push(notelabel);
        });
        request.setLabelsList(labelsList);

        this.client.upsertLabelToNote(
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
                  message: 'successfully'
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

    deleteNoteLabel = (labelId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteNoteLabelRequest();

        request.setId(labelId);

        this.client.deleteNoteLabel(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    pinNote = (pinData) => {
      return new Promise((resolve, reject) => {
        const request = new PinNoteRequest();

        request.setId(pinData.id);
        request.setPinned(pinData.pinned);

        this.client.pinNote(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    archiveNote = (archiveData) => {
      return new Promise((resolve, reject) => {
        const request = new ArchiveNoteRequest();

        console.log('archiveData:', archiveData);

        request.setNoteIdList(archiveData.idList);
        request.setIsArchived(archiveData.isArchived);

        this.client.archiveNote(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

    convertNote = (convertData) => {
      return new Promise((resolve, reject) => {
        const request = new ConvertNoteRequest();

        console.log('.... CONVERT', convertData);

        request.setId(convertData.id);
        request.setTo(convertData.to);

        this.client.convertNote(
          request,
          this.metadata,
          (error, response) => {
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
          }
        );
      });
    }

  }

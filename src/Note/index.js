import {
  NoteMetaQuery,
  TaskMetaQuery,
  NoteLabel,
  Task,

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

  // for file upload requests
  UpsertImageToNoteRequest,

  GetTaskRequest,
  UpsertTaskRequest,
  DeleteTaskRequest,
  ListTaskRequest,
  CompleteTaskRequest,

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
          shared.setId(s.shared_id);
          shared.setPermission(s.permission);

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

    listNote = (notebookId = null, queryRequest = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListNoteRequest();
        const query = new Query();
        const meta = new NoteMetaQuery();

        if (notebookId && notebookId > 0) {
          request.setNotebookId(notebookId);
        }

        if (queryRequest.sortBy) {
          query.setSortBy(queryRequest.sortBy);
        }

        if (queryRequest.perPage) {
          query.setPerPage(queryRequest.perPage);
        }

        if (queryRequest.page) {
          query.setPage(queryRequest.page);
        }

        if (queryRequest.isTaskCompleted) {
          query.setIsTaskCompleted(queryRequest.isTaskCompleted);
        }

        if (queryRequest.noteType) {
          meta.setNoteType(queryRequest.noteType);
        }

        if (queryRequest.isStarred) {
          meta.setIsStarred(true);
        }

        if (queryRequest.isArchived) {
          meta.setIsArchived(true);
        }

        if (queryRequest.isPinned) {
          meta.setIsPinned(true);
        }

        meta.setNotebookList(queryRequest.notebooks);
        meta.setLabelList(queryRequest.labels);

        meta.setFilterType(queryRequest.filterType || 'all');

        request.setQuery(query);
        request.setMeta(meta);

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
          // in this line noteData.reminder object is a dayjs object
          // so we can call the format function.
          request.setReminder(noteData?.reminder.format('YYYY-MM-DD HH:mm'));
        }
        request.setNotebookId(noteData.notebookId);
        request.setIsPinned(noteData.isPinned);
        request.setIsStarred(noteData.isStarred);
        request.setIsArchived(noteData.isArchived);

        const taskList = [];
        const e = document.createElement('div');
        e.innerHTML = noteData.content;

        let bindedTasks = e.getElementsByClassName('task');
        for (const bindedTask of bindedTasks) {
          if (!bindedTask.attributes.random_id.nodeValue) continue;

          const parsedTask = new Task();
          parsedTask.setId(bindedTask.attributes.task_id.nodeValue);
          parsedTask.setRandomId(bindedTask.attributes.random_id.nodeValue);
          parsedTask.setContent(bindedTask.attributes.content.nodeValue);
          parsedTask.setPriority(bindedTask.attributes.priority.nodeValue);
          parsedTask.setOrder(bindedTask.attributes.order.nodeValue);
          parsedTask.setIsComplete(bindedTask.attributes.is_complete.nodeValue === 'true');

          if (bindedTask.attributes.hasOwnProperty('reminder') && bindedTask.attributes.reminder.nodeValue) {
            // in this line bindedTask.attributes.reminder.nodeValue is a string
            // so we cannot call basically format function.
            const reminder = new Date(bindedTask.attributes.reminder.nodeValue);
            parsedTask.setReminder(reminder.toISOString());
          }
          if (bindedTask.attributes.hasOwnProperty('deadline') && bindedTask.attributes.deadline.nodeValue) {
            const deadline = new Date(bindedTask.attributes.deadline.nodeValue);
            parsedTask.setDeadline(deadline.toISOString());
          }
          // console.log('parsedTask:', parsedTask);
          // console.log('bindedTask.attributes:', bindedTask.attributes);
          taskList.push(parsedTask)
        }

        request.setTaskList(taskList);

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
                  const e = document.createElement('div');
                  e.innerHTML = note.content;
                  const savedTasks = note.tasksList;
                  let bindedTasks = e.getElementsByClassName('task');
                  for (const bindedTask of bindedTasks) {
                    if (bindedTask.attributes.task_id.nodeValue == 0) {
                      try {
                        const savedTask = savedTasks.find((t) => t.randomId === bindedTask.attributes.random_id.nodeValue);
                        bindedTask.setAttribute('task_id', savedTask.id)
                      } catch (e) {
                        console.log('task cannot synced:', e);
                      }
                    }
                  }
                  note.content = e.innerHTML;
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

    upsertImageToNote = (noteId, fileName) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertImageToNoteRequest();
        request.setNoteId(noteId);
        request.setFileName(fileName);

        this.client.upsertImageToNote(
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
                  message: 'successfully',
                  uploadToken: response.getUploadToken(),
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

    // TASK SERVICES
    getTask = (noteId, taskId) => {
      return new Promise((resolve, reject) => {
        const request = new GetTaskRequest();
        request.setNoteId(noteId);
        request.setTaskId(taskId);

        this.client.getTask(
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
                  data: response.getData()
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

    upsertTask = (noteId, taskData) => {
      // upsertTask service not used.
      return new Promise((resolve, reject) => {
        const request = new UpsertTaskRequest();

        request.setId(taskData.id);
        request.setNoteId(noteId);
        request.setContent(taskData.content);
        request.setPriority(taskData.priority);

        // TODO :: check this two variable is valid datetime format !!!!
        if (typeof taskData.reminder === 'object' && taskData.reminder) {
          request.setReminder(taskData?.reminder.format('YYYY-MM-DD HH:mm'));
        }
        if (typeof taskData.deadline === 'object' && taskData.deadline) {
          request.setDeadline(taskData?.deadline.format('YYYY-MM-DD HH:mm'));
        }
        request.setOrder(taskData.order);
        // request.setIsComplete(taskData.is_complete);

        this.client.upsertTask(
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
                  data: response.getData()
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

    deleteTask = (taskId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteTaskRequest();
        request.setTaskId(taskId);

        this.client.deleteTask(
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

    listTask = (queryRequest) => {
      return new Promise((resolve, reject) => {
        const request = new ListTaskRequest();
        const query = new Query();
        const groupBy = queryRequest.groupBy || 'priority';  // groupBy can be 'priority' or 'deadline'

        query.setPage(queryRequest.page);
        query.setPerPage(queryRequest.perPage);

        if (queryRequest.sortBy) {
          query.setSortBy(queryRequest.sortBy);
        }

        const meta = new TaskMetaQuery();
        if (queryRequest.noteId > 0) {
          meta.setNoteId(queryRequest.noteId);
        }
        meta.setGroupBy(groupBy);
        meta.setOrderBy(queryRequest.orderBy);
        meta.setFilters(queryRequest.filters);
        if (queryRequest.completedAt) {
          // TODO :: check & fix
          meta.setCompletedAt(queryRequest.completedAt);
        }
        meta.setDeadline(queryRequest.deadline);
        meta.setNotebookList(queryRequest.notebooks);
        meta.setLabelList(queryRequest.labels);

        if (queryRequest.noteType) {
          meta.setNoteType(queryRequest.noteType);
        }

        request.setQuery(query);
        request.setMeta(meta);

        this.client.listTask(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                let groupedTasks = {};
                const dataList = response.getDataList().map((data) => data.toObject());
                if (groupBy === 'priority') {
                  for (const task of dataList) {
                    if (!(`priority-${task.priority}` in groupedTasks)) {
                      groupedTasks[`priority-${task.priority}`] = [];
                    }
                    groupedTasks[`priority-${task.priority}`].push(task);
                  }
                }
                else if (groupBy === 'deadline') {
                  const now = new Date();
                  groupedTasks = {
                    'today': [],
                    'upcoming': [],
                    'finished': [],
                    'no-deadline': [],
                  };
                  for (const task of dataList) {
                    let taskDeadLine = task.deadline;
                    if (task.isComplete == 'true') {
                      groupedTasks['finished'].push(task);
                    }
                    else if (taskDeadLine) {
                      try {
                        taskDeadLine = new Date(taskDeadLine);
                      } catch (e) {
                        console.log(e);
                        groupedTasks['no-deadline'].push(task);
                        continue;
                      }
                      if (now.getFullYear() === taskDeadLine.getFullYear() && now.getMonth() === taskDeadLine.getMonth() && now.getDate() === taskDeadLine.getDate()) {
                        // if taskDeadLine is in today
                        groupedTasks['today'].push(task);
                      }
                      else {
                        groupedTasks['upcoming'].push(task);
                      }
                    }
                    else {
                      groupedTasks['no-deadline'].push(task);
                    }
                  }
                }
                else {
                  const groupedTasks = dataList;
                }

                resolve({
                  code,
                  message: response.getMessage(),
                  data: groupedTasks
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

    completeTask = (noteId, taskId, complete) => {
      return new Promise((resolve, reject) => {
        const request = new CompleteTaskRequest();

        request.setNoteId(noteId);
        request.setTaskId(taskId);
        request.setComplete(complete);

        this.client.completeTask(
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
                  data: response.getData()
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

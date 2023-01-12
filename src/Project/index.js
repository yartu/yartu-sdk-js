import {
  GetProjectMeRequest,
  ListProjectRequest,
  GetProjectRequest,
  UpsertProjectRequest,
  DeleteProjectRequest,
  DuplicateProjectRequest,
  ArchiveProjectRequest,
  StarProjectRequest,
  ListThreadRequest,
  GetThreadRequest,
  UpsertThreadRequest,
  DeleteThreadRequest,
  ListThreadMessageRequest,
  SendThreadMessageRequest,
  ReadThreadMessageRequest,
  InteractThreadMessageRequest,
  ListBoardRequest,
  GetBoardRequest,
  UpsertBoardRequest,
  DeleteBoardRequest,
  ListCardLabelRequest,
  UpsertCardLabelRequest,
  DeleteCardLabelRequest,
  UpsertCardRequest,
  AddCommentToCardRequest,
  AddLabelToCardRequest,
  MoveCardRequest,
  GetCardRequest,
  ListBoardTemplateRequest,
  ListCardActivityRequest,
  UpsertCardUsersRequest,
} from './service-pb.cjs';

import { Query, UserModifyMeta } from '../utils/definitions_pb.cjs';
import { YProjectClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Project {
    endpoint = 'http://localhost:5001';
    client = undefined;
    yartuSdk = undefined;
    shareUuid = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YProjectClient(this.endpoint, '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    getMe() {
      return new Promise((resolve, reject) => {
        const request = new GetProjectMeRequest();
        request.add(add);
        this.client.getMe(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    listProject(getAll = false, getArchived = false, query = {}) {

      return new Promise((resolve, reject) => {
        const request = new ListProjectRequest();
        const queryRequset = new Query();

        request.setGetArchived(getArchived);
        request.setGetAll(getAll);
        request.setQuery(queryRequset);

        this.client.listProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const projects = response
                .getProjectList()
                .map((data) => data.toObject());

              resolve({
                code,
                projects,
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

    getProject(projectUuid) {
      return new Promise((resolve, reject) => {
        const request = new GetProjectRequest();

        request.setUuid(projectUuid);

        this.client.getProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                project: response.getProject().toObject(),
              })
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

    upsertProject(projectData = {}) {
      return new Promise((resolve, reject) => {
        const request = new UpsertProjectRequest();
        request.setUuid(projectData.uuid);
        request.setName(projectData.name);
        request.setColor(projectData.color);
        request.setIcon(projectData.icon);
        
        this.client.upsertProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                project: response.getProject().toObject(),
              })
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

    deleteProject(uuid) {
      return new Promise((resolve, reject) => {
        const request = new DeleteProjectRequest();
        request.addUuid(uuid);
        this.client.deleteProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    duplicateProject(uuid, name) {
      return new Promise((resolve, reject) => {
        const request = new DuplicateProjectRequest();
        request.addUuid(uuid);
        request.addName(name);
        this.client.duplicateProject(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
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

    archiveProject(uuid, unarchive) {
      return new Promise((resolve, reject) => {
        const request = new ArchiveProjectRequest();
        request.addUuid(uuid);
        request.addUnarchive(unarchive);
        this.client.archiveProject(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
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

    starProject(uuid, star) {
      return new Promise((resolve, reject) => {
        const request = new StarProjectRequest();
        request.addUuid(uuid);
        request.addStar(star);
        this.client.starProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    listThread(project_uuid, query =  {}) {
      return new Promise((resolve, reject) => {
        const request = new ListThreadRequest();
        const queryRequest = new Query();

        request.setProjectUuid(project_uuid);
        request.setQuery(queryRequest);

        this.client.listThread(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                threads: response.getThreadList().map((thread) => thread.toObject()),
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

    getThread(threadId) {
      return new Promise((resolve, reject) => {

        const request = new GetThreadRequest();
        request.setThreadUuid(threadId);

        this.client.getThread(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                thread: response.getThread().toObject(),
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

    upsertThread(
      id,
      title,
      description,
      project_uuid,
      board_id,
      is_pinned,
      is_private
    ) {
      return new Promise((resolve, reject) => {
        const request = new UpsertThreadRequest();
        request.addId(id);
        request.addTitle(title);
        request.addDescription(description);
        request.addProjectUuid(project_uuid);
        request.addBoardId(board_id);
        request.addIsPinned(is_pinned);
        request.addIsPrivate(is_private);
        this.client.upsertThread(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    deleteThread(id) {
      return new Promise((resolve, reject) => {
        const request = new DeleteThreadRequest();
        request.addId(id);
        this.client.deleteThread(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    listThreadMessage(thread_uuid, from_id = 0, query) {
      return new Promise((resolve, reject) => {

        const request = new ListThreadMessageRequest();
        const queryRequest = new Query();

        request.setThreadUuid(thread_uuid);
        request.setFromId(from_id);
        request.setQuery(queryRequest);

        this.client.listThreadMessage(
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
                  messages: response.getThreadMessageList().map((m) => m.toObject()),
                  unreadCount: response.getUnreadCount(),
                  totalCount: response.getTotalCount(),
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

    sendThreadMessage(thread_uuid, message, answered_message_uuid) {
      return new Promise((resolve, reject) => {
        const request = new SendThreadMessageRequest();
        request.addThreadUuid(thread_uuid);
        request.addMessage(message);
        request.addAnsweredMessageUuid(answered_message_uuid);
        this.client.sendThreadMessage(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
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

    readThreadMessage(thread_uuid, message_uuid) {
      return new Promise((resolve, reject) => {
        const request = new ReadThreadMessageRequest();
        request.addThreadUuid(thread_uuid);
        request.addMessageUuid(message_uuid);
        this.client.readThreadMessage(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
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

    interactThreadMessage(thread_uuid, message_uuid, emoji) {
      return new Promise((resolve, reject) => {
        const request = new InteractThreadMessageRequest();
        request.addThreadUuid(thread_uuid);
        request.addMessageUuid(message_uuid);
        request.addEmoji(emoji);
        this.client.interactThreadMessage(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
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

    listBoard(project_uuid) {
      return new Promise((resolve, reject) => {
        const request = new ListBoardRequest();
        request.addProjectUuid(project_uuid);
        this.client.listBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    listBoardTemplate() {
      return new Promise((resolve, reject) => {
        const request = new ListBoardTemplateRequest();

        this.client.listBoardTemplate(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                templates: response.getTemplatesList().map((t) => t.toObject()),
                message: response.getMessage(),
              })
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

    getBoard(uuid) {
      return new Promise((resolve, reject) => {

        const request = new GetBoardRequest();
        request.setUuid(uuid);

        this.client.getBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                board: response.getBoard().toObject(),
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

    upsertBoard(boardData = {}) {
      return new Promise((resolve, reject) => {

        const request = new UpsertBoardRequest();

        request.setUuid(boardData.uuid);
        request.setProjectUuid(boardData.projectUuid);
        request.setName(boardData.name);
        request.setColor(boardData.color);
        request.setTemplateUuid(boardData.template.uuid);
        // request.setName(member);
        // request.addPermission(permission);
        this.client.upsertBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                board: response.getBoard().toObject(),
                message: response.getMessage()
              })
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

    deleteBoard(uuid) {
      return new Promise((resolve, reject) => {
        const request = new DeleteBoardRequest();
        request.addUuid(uuid);
        this.client.deleteBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    listCardLabel(board_uuid) {
      return new Promise((resolve, reject) => {
        const request = new ListCardLabelRequest();
        request.addBoardUuid(board_uuid);
        this.client.listCardLabel(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
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

    upsertCardLabel(id, board_uuid, name, color) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCardLabelRequest();
        request.addId(id);
        request.addBoardUuid(board_uuid);
        request.addName(name);
        request.addColor(color);
        this.client.upsertCardLabel(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
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

    deleteCardLabel(id) {
      return new Promise((resolve, reject) => {
        const request = new DeleteCardLabelRequest();
        request.addId(id);
        this.client.deleteCardLabel(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
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

    upsertCard(cardData = {}) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCardRequest();
        if (cardData.uuid) {
          request.setUuid(cardData.uuid);
        }
        if (cardData.index) {
          request.setIndex(cardData.index);
        }
        if (cardData.title) {
          request.setTitle(cardData.title);
        }
        if (cardData.description) {
          request.setDescription(cardData.description);
        }
        if (cardData.startDate) {
          request.setStartDate(cardData.startDate);
        }
        if (cardData.isCompleted !== null) {
          request.setIsCompleted(cardData.isCompleted);
        }
        if (cardData.isArchived) {
          request.setIsArchived(cardData.isArchived);
        }
        if (cardData.isCanceled) {
          request.setIsCanceled(cardData.isCanceled);
        }
        if (cardData.color) {
          request.setColor(cardData.color);
        }
        if (cardData.dueDate) {
          const dueDate = cardData.dueDate.utc().format('YYYY-MM-DD HH:mm');
          request.setDueDate(dueDate);
        }
        if (cardData.column) {
          request.setColumnUuid(cardData.column.uuid);
        }

        this.client.upsertCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                card: response.getCard().toObject(),
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

    upsertCardUsers(cardUuid, users) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCardUsersRequest();

        request.setCardUuid(cardUuid);

        console.log('SDK', cardUuid);
        console.log('SDK', users);

        for (const user of users) {
          console.log('SDK USER', user);
          const modifyRequest = new UserModifyMeta();
          modifyRequest.setId(user.id);
          modifyRequest.setOperation(user.operation);
          request.addUser(modifyRequest);
        }

        this.client.upsertCardUsers(
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
                  users: response.getUsersList().map((u) => u.toObject()),
                  results: response.getResultList().map((r) => r.toObject()),
                })
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

    addCommentToCard(commentData = {}) {
      return new Promise((resolve, reject) => {
        const request = new AddCommentToCardRequest();

        console.log('RQ', commentData);

        request.setUuid(commentData.uuid);
        request.setComment(commentData.comment);
        request.setMentionList(commentData.mention);

        this.client.addCommentToCard(
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
                })
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

    addLabelToCard(uuid, label_id) {
      return new Promise((resolve, reject) => {
        const request = new AddLabelToCardRequest();

        request.setUuid(uuid);
        request.setLabelId(label_id);

        this.client.addLabelToCard(
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
                })
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

    moveCard(cardUuid, columnUuid, index) {
      return new Promise((resolve, reject) => {
        const request = new MoveCardRequest();

        request.setUuid(cardUuid);
        request.setColumnUuid(columnUuid);
        request.setIndex(index);

        this.client.moveCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
              })
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

    getCard(cardId) {
      return new Promise((resolve, reject) => {
        const request = new GetCardRequest();
        request.setId(cardId);

        this.client.getCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                card: response.getCard().toObject(),
              })
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

    listCardActivity(cardId) {
      return new Promise((resolve, reject) => {
        const request = new ListCardActivityRequest();

        request.setId(cardId);

        this.client.listCardActivity(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                activitys: response.getActivityList().map((a) => a.toObject()),
                message: response.getMessage()
              })
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

    upsertCheckList(checklistId, title) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCheckListRequest();

        request.setId(checklistId);
        request.setTitle(title);

        this.client.upsertCheckList(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                checklist: response.getChecklist().toObject(),
                message: response.getMessage()
              })
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

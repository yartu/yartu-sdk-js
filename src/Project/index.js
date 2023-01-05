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
} from './service-pb.cjs';

import { Query } from '../utils/definitions_pb.cjs';
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

    upsertProject(uuid, name, color, icon, tag, member) {
      return new Promise((resolve, reject) => {
        const request = new UpsertProjectRequest();
        request.addUuid(uuid);
        request.addName(name);
        request.addColor(color);
        request.addIcon(icon);
        request.addTag(tag);
        request.addMember(member);
        this.client.upsertProject(request, this.metadata, (error, response) => {
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

    upsertBoard(
      uuid,
      project_uuid,
      name,
      color,
      template_uuid,
      member,
      permission
    ) {
      return new Promise((resolve, reject) => {
        const request = new UpsertBoardRequest();
        request.addUuid(uuid);
        request.addProjectUuid(project_uuid);
        request.addName(name);
        request.addColor(color);
        request.addTemplateUuid(template_uuid);
        request.addMember(member);
        request.addPermission(permission);
        this.client.upsertBoard(request, this.metadata, (error, response) => {
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

    upsertCard(
      uuid,
      column_uuid,
      index,
      title,
      description,
      start_date,
      due_date,
      is_completed,
      is_archived,
      is_canceled,
      color
    ) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCardRequest();
        request.addUuid(uuid);
        request.addColumnUuid(column_uuid);
        request.addIndex(index);
        request.addTitle(title);
        request.addDescription(description);
        request.addStartDate(start_date);
        request.addDueDate(due_date);
        request.addIsCompleted(is_completed);
        request.addIsArchived(is_archived);
        request.addIsCanceled(is_canceled);
        request.addColor(color);
        this.client.upsertCard(request, this.metadata, (error, response) => {
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

    addCommentToCard(uuid, comment, mention) {
      return new Promise((resolve, reject) => {
        const request = new AddCommentToCardRequest();
        request.addUuid(uuid);
        request.addComment(comment);
        request.addMention(mention);
        this.client.addCommentToCard(
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

    addLabelToCard(uuid, label_id) {
      return new Promise((resolve, reject) => {
        const request = new AddLabelToCardRequest();
        request.addUuid(uuid);
        request.addLabelId(label_id);
        this.client.addLabelToCard(
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

    moveCard(uuid, column_uuid, index) {
      return new Promise((resolve, reject) => {
        const request = new MoveCardRequest();
        request.addUuid(uuid);
        request.addColumnUuid(column_uuid);
        request.addIndex(index);
        this.client.moveCard(request, this.metadata, (error, response) => {
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

  };

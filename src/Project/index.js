import {
  //
  CardLabel,

  GetProjectHomeRequest,
  GetProjectorOrBoardUserListRequest,
  GetProjectFilesRequest,

  // Project services
  ListProjectRequest,
  GetProjectRequest,
  UpsertProjectRequest,
  DeleteProjectRequest,
  DuplicateProjectRequest,
  ArchiveProjectRequest,
  StarProjectRequest,

  // Thread services
  ListThreadRequest,
  GetThreadRequest,
  UpsertThreadRequest,
  DeleteThreadRequest,

  // ThreadMessage services
  ListThreadMessageRequest,
  SendThreadMessageRequest,
  ReadThreadMessageRequest,
  InteractThreadMessageRequest,
  DeleteThreadMessageRequest,

  // Board services
  ListBoardRequest,
  GetBoardRequest,
  UpsertBoardRequest,
  DeleteBoardRequest,
  DuplicateBoardRequest,
  CopyBoardRequest,
  MoveBoardRequest,

  // Board Template services
  ListBoardTemplateRequest,
  UpsertBoardTemplateRequest,

  // Column services
  UpsertColumnRequest,
  ArchiveAllCardsInColumnRequest,

  // Share Board services
  ShareBoardRequest,
  UnshareBoardRequest,
  // UpsertSharedBoardRequest,
  DeleteSharedBoardRequest,
  ListSharedBoardRequest,

  // CardLabelServices
  ListCardLabelRequest,
  UpsertCardLabelRequest,
  DeleteCardLabelRequest,

  // Card services
  GetCardRequest,
  ListCardActivityRequest,
  ListArchivedCardRequest,
  UpsertCardRequest,
  DeleteCardRequest,
  JoinCardRequest,
  LeaveCardRequest,
  ArchiveCardRequest,
  UpsertCardUsersRequest,
  AddCommentToCardRequest,
  DeleteCommentToCardRequest,
  AddInteractionToCardRequest,
  AddLabelToCardRequest,
  UpsertCheckListRequest,
  DeleteCheckListRequest,
  UpsertCheckListItemRequest,
  DeleteCheckListItemRequest,
  AssignAllCheckListItemsRequest,
  MoveCardRequest,
  DuplicateCardRequest,
  MoveCardToAnotherBoardRequest,
  CopyCardToAnotherBoardRequest,

  // CardAttachment services
  UpsertCardAttachmentRequest,
  DeleteCardAttachmentRequest,
  ListCardAttachmentRequest,

} from './service-pb.cjs';

import {Group, Query, Shared, User, UserModifyMeta} from '../utils/definitions_pb.cjs';
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

    getProjectHome() {
      return new Promise((resolve, reject) => {
        const request = new GetProjectHomeRequest();


        this.client.getProjectHome(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const starredProjectList = response.getStarredProjectList().map((d) => d.toObject());
            const recentProjectList = response.getRecentProjectList().map((d) => d.toObject());
            const recentBoardList = response.getRecentBoardList().map((d) => d.toObject());
            const upcomingDeadlineList = response.getUpcomingDeadlineList().map((d) => d.toObject());

            if (code == 0) {
              resolve({
                code,
                starredProjectList,
                recentProjectList,
                recentBoardList,
                upcomingDeadlineList,
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

    listProject(getAll = false, getArchived = false, starred = false, query = {}) {

      return new Promise((resolve, reject) => {
        const request = new ListProjectRequest();
        const queryRequset = new Query();

        request.setGetArchived(getArchived);
        request.setGetAll(getAll);
        request.setStarred(starred);
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
        request.setUuid(uuid);
        this.client.deleteProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    duplicateProject(uuid, name) {
      return new Promise((resolve, reject) => {
        const request = new DuplicateProjectRequest();
        request.setUuid(uuid);
        request.setName(name);
        this.client.duplicateProject(
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

    archiveProject(uuid, unarchive) {
      return new Promise((resolve, reject) => {
        const request = new ArchiveProjectRequest();
        request.setUuid(uuid);
        request.setUnarchive(unarchive);
        this.client.archiveProject(
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

    starProject(uuid, star) {
      return new Promise((resolve, reject) => {
        const request = new StarProjectRequest();
        request.setUuid(uuid);
        request.setStar(star);
        this.client.starProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    getThread(threadUUID) {
      return new Promise((resolve, reject) => {

        const request = new GetThreadRequest();
        request.setThreadUuid(threadUUID);

        this.client.getThread(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const data = response.getData().toObject();
              resolve({
                code,
                data: data,
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

    upsertThread(projectUUID = null, threadData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertThreadRequest();
        request.setProjectUuid(projectUUID);

        // boardId can be 0
        // and this means this thread can be avaliable for all users in this project
        request.setBoardId(threadData.boardId);

        request.setUuid(threadData?.uuid);
        request.setTitle(threadData.title);
        request.setDescription(threadData.description);
        request.setIsPinned(threadData.isPinned);
        request.setIsPrivate(threadData.isPrivate);

        if (threadData.userList && threadData.userList.length > 0) {
          const participantList = [];
          threadData.userList.forEach(s => {
            const user = new User();
            user.setId(s.id);
            user.setUsername(s.email);
            user.setName(s.name);
            user.setSurname(s.surname);
            participantList.push(user)
          });
          request.setParticipantList(participantList);
        }

        this.client.upsertThread(request, this.metadata, (error, response) => {
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

    deleteThread(ThreadUUID) {
      return new Promise((resolve, reject) => {
        const request = new DeleteThreadRequest();
        request.setUuid(ThreadUUID);
        this.client.deleteThread(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    listThreadMessage(threadUUID, fromId = 0, scrollDirection = 'bottom',  query) {
      return new Promise((resolve, reject) => {

        const request = new ListThreadMessageRequest();

        const queryRequest = new Query();
        queryRequest.setQuery(query?.query || '');
        queryRequest.setPage(query?.page || 1);
        queryRequest.setPerPage(query?.perPage || 20);
        queryRequest.setSortBy(query?.sortBy || '');
        queryRequest.setSearchFieldsList(query?.searchFields || []);

        request.setThreadUuid(threadUUID);
        request.setFromId(fromId);
        request.setScrollDirection(scrollDirection);
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
                  lastReadId: response.getLastReadId(),
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

    sendThreadMessage(threadUUID, message, answeredMessageUUID, lastReadId = 0) {
      return new Promise((resolve, reject) => {
        const request = new SendThreadMessageRequest();
        request.setThreadUuid(threadUUID);
        request.setMessage(message.message);
        request.setLastReadId(lastReadId);
        if (message?.uuid){
          request.setUuid(message?.uuid);
        }
        request.setAnsweredMessageUuid(answeredMessageUUID);
        this.client.sendThreadMessage(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                const dataList = response.getDataList().map((data) => data.toObject());
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
          }
        );
      });
    }

    readThreadMessage(threadUUID, messageUUID) {
      return new Promise((resolve, reject) => {
        const request = new ReadThreadMessageRequest();
        request.setThreadUuid(threadUUID);
        request.setMessageUuid(messageUUID);
        this.client.readThreadMessage(
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

    interactThreadMessage(threadUUID, messageUUID, emoji) {
      return new Promise((resolve, reject) => {
        const request = new InteractThreadMessageRequest();
        request.setThreadUuid(threadUUID);
        request.setMessageUuid(messageUUID);
        request.setEmoji(emoji);
        this.client.interactThreadMessage(
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

    deleteThreadMessage(MessageUUID) {
      return new Promise((resolve, reject) => {
        const request = new DeleteThreadMessageRequest();
        request.setUuid(MessageUUID);

        this.client.deleteThreadMessage(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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


    listBoard(project_uuid) {
      return new Promise((resolve, reject) => {
        const request = new ListBoardRequest();
        request.setProjectUuid(project_uuid);
        this.client.listBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    upsertBoardTemplate(boardUUID, templateData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertBoardTemplateRequest();

        request.setBoardUuid(boardUUID);
        request.setId(templateData.id);
        request.setName(templateData.name);

        this.client.upsertBoardTemplate(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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
        request.setDescription(boardData.description);

        if (boardData.template) {
          request.setTemplateUuid(boardData.template.uuid);
        }

        // request.setName(member);
        // request.setPermission(permission);
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

    duplicateBoard(boardUUID) {
      return new Promise((resolve, reject) => {

        const request = new DuplicateBoardRequest();
        request.setUuid(boardUUID);

        this.client.duplicateBoard(request, this.metadata, (error, response) => {
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
    }

    copyBoard(soureceBoardUUID, destinationProjectUUID) {
      return new Promise((resolve, reject) => {

        const request = new CopyBoardRequest();
        request.setSourceBoardUuid(soureceBoardUUID);
        request.setDestinationProjectUuid(destinationProjectUUID);

        this.client.copyBoard(request, this.metadata, (error, response) => {
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
    }

    moveBoard(soureceBoardUUID, destinationProjectUUID) {
      return new Promise((resolve, reject) => {

        const request = new MoveBoardRequest();
        request.setSourceBoardUuid(soureceBoardUUID);
        request.setDestinationProjectUuid(destinationProjectUUID);

        this.client.moveBoard(request, this.metadata, (error, response) => {
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
    }

    deleteBoard(uuid) {
      return new Promise((resolve, reject) => {
        const request = new DeleteBoardRequest();
        request.setUuid(uuid);
        this.client.deleteBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    shareBoard(boardId, shareList) {
      return new Promise((resolve, reject) => {
        const request = new ShareBoardRequest();
        request.setId(boardId);
        const UserShareList = [];
        shareList.forEach(s => {
          const shared = new Shared();
          shared.setId(s.shared_id);
          shared.setPermission(String(s.permission));

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
            console.log('@yartu/sdk/ shareBoard method not supports external users and Realm share features for now!');
          }


          UserShareList.push(shared);
        });

        request.setSharedList(UserShareList);

        this.client.shareBoard(request, this.metadata, (error, response) => {
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

    unshareBoard(boardId) {
      return new Promise((resolve, reject) => {
        const request = new UnshareBoardRequest();
        request.setId(boardId);

        this.client.unshareBoard(request, this.metadata, (error, response) => {
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

    deleteSharedBoard(boardId, sharedBoard) {
      return new Promise((resolve, reject) => {
        const request = new DeleteSharedBoardRequest();
        request.setBoardId(boardId);
        request.setSharedId(sharedBoard.shared_id);
        request.setId(sharedBoard.id);
        request.setIsYartuUser(sharedBoard.isYartuUser);
        request.setIsGroup(sharedBoard.isGroup);

        this.client.deleteSharedBoard(request, this.metadata, (error, response) => {
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

    listCardLabel(boardUUID) {
      return new Promise((resolve, reject) => {
        const request = new ListCardLabelRequest();
        request.setBoardUuid(boardUUID);
        this.client.listCardLabel(request, this.metadata, (error, response) => {
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

    upsertCardLabel(boardUUID, labelData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCardLabelRequest();
        request.setBoardUuid(boardUUID);
        request.setId(labelData.id);
        request.setName(labelData.name);
        request.setColor(labelData.color);
        this.client.upsertCardLabel(
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

    deleteCardLabel(id) {
      return new Promise((resolve, reject) => {
        const request = new DeleteCardLabelRequest();
        request.setId(id);
        this.client.deleteCardLabel(
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
        if (cardData.color !== undefined && cardData.color !== null) {
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

    upsertCardAttachment = (cardId, fileName) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertCardAttachmentRequest();
        request.setCardId(cardId);
        request.setFileName(fileName);

        this.client.upsertCardAttachment(
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

    deleteCardAttachment = (cardId, attachmentId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteCardAttachmentRequest();
        request.setId(attachmentId);
        request.setCardId(cardId);

        this.client.deleteCardAttachment(
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

    listCardAttachment = (cardId) => {
      return new Promise((resolve, reject) => {
        const request = new ListCardAttachmentRequest();
        request.setCardId(cardId);

        this.client.listCardAttachment(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                const dataList = response.getDataList().map((data) => data.toObject());
                resolve({
                  code: 0,
                  data: dataList,
                  message: 'successfully',
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

    deleteCard(cardId) {
      return new Promise((resolve, reject) => {
        const request = new DeleteCardRequest();
        request.setId(cardId);
        this.client.deleteCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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

    duplicateCard(cardId) {
      return new Promise((resolve, reject) => {
        const request = new DuplicateCardRequest();
        request.setId(cardId);
        this.client.duplicateCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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

        request.setId(commentData.id);
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

    deleteCommentToCard(commentData = {}) {
      return new Promise((resolve, reject) => {
        const request = new DeleteCommentToCardRequest();

        request.setId(commentData.id);
        request.setUuid(commentData.uuid);

        this.client.deleteCommentToCard(
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

    addInteractionToCard(commentData = {}) {
      return new Promise((resolve, reject) => {
        const request = new AddInteractionToCardRequest();

        request.setId(commentData.id);
        request.setUuid(commentData.uuid);
        request.setEmoji(commentData.emoji);

        this.client.addInteractionToCard(
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

    joinCard(id) {
      return new Promise((resolve, reject) => {
        const request = new JoinCardRequest();
        request.setId(id);
        this.client.joinCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
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

    leaveCard(id) {
      return new Promise((resolve, reject) => {
        const request = new LeaveCardRequest();
        request.setId(id);
        this.client.leaveCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
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

    archiveCard(id, archive) {
      return new Promise((resolve, reject) => {
        const request = new ArchiveCardRequest();
        request.setId(id);
        request.setArchive(archive);

        this.client.archiveCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    moveCardToAnotherBoard(sourceCardId, destinationBoardId, destinationColumnId, newIndex) {
      return new Promise((resolve, reject) => {
        const request = new MoveCardToAnotherBoardRequest();
        request.setSourceCardId(sourceCardId);
        request.setDestinationBoardId(destinationBoardId);
        request.setDestinationColumnId(destinationColumnId);
        request.setNewIndex(newIndex);

        this.client.moveCardToAnotherBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    copyCardToAnotherBoard(sourceCardId, destinationBoardId, destinationColumnId, newIndex) {
      return new Promise((resolve, reject) => {
        const request = new CopyCardToAnotherBoardRequest();
        request.setSourceCardId(sourceCardId);
        request.setDestinationBoardId(destinationBoardId);
        request.setDestinationColumnId(destinationColumnId);
        request.setNewIndex(newIndex);

        this.client.copyCardToAnotherBoard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
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

    listArchivedCard(boardUUID) {
      return new Promise((resolve, reject) => {
        const request = new ListArchivedCardRequest();

        request.setBoardUuid(boardUUID);

        this.client.listArchivedCard(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
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

    upsertCheckList(cardId, checkList) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCheckListRequest();

        request.setCardId(cardId);
        request.setId(checkList.id);
        request.setTitle(checkList.title);

        this.client.upsertCheckList(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const data = response.getData().toObject()
              resolve({
                code,
                data: data,
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

    deleteCheckList(checkListId) {
      return new Promise((resolve, reject) => {
        const request = new DeleteCheckListRequest();
        request.setId(checkListId);

        this.client.deleteCheckList(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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

    upsertCheckListItem(checkListId, checkListItem) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCheckListItemRequest();

        request.setChecklistId(checkListId);

        request.setId(checkListItem.id);
        request.setTitle(checkListItem.title);
        request.setPriority(checkListItem.priority);
        request.setIndex(checkListItem.index);

        if (checkListItem.dueDate) {
          let dueDate = '';
          if(checkListItem.dueDate?.$d) {
            dueDate = checkListItem.dueDate.format('YYYY-MM-DD HH:mm');
          } else {
            dueDate = checkListItem.dueDate;
          }
          request.setDueDate(dueDate);
        }

        request.setIsCompleted(checkListItem.isCompleted);

        if (checkListItem.assignee) {
          const assignee = new User();
          assignee.setId(checkListItem.assignee.id);
          assignee.setUsername(checkListItem.assignee.email || checkListItem.assignee.username);
          assignee.setName(checkListItem.assignee.name);
          assignee.setSurname(checkListItem.assignee.surname);
          request.setAssignee(assignee);
        }

        if (checkListItem.labelList && checkListItem.labelList.length > 0 ) {
          const cardLabelList = [];
          checkListItem.labelList.forEach((l) => {
            const label = new CardLabel();
            label.setId(l.id);
            label.setName(l.name);
            label.setColor(l.color);

            cardLabelList.push(label);
          });
          request.setLabelList(cardLabelList);
        }

        this.client.upsertCheckListItem(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const data = response.getData().toObject()
              resolve({
                code,
                data: data,
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

    deleteCheckListItem(checkListItemId) {
      return new Promise((resolve, reject) => {
        const request = new DeleteCheckListItemRequest();
        request.setId(checkListItemId);

        this.client.deleteCheckListItem(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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

    upsertColumn(columnData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertColumnRequest();

        console.log('COLUMN DATA SDK', columnData);

        request.setId(columnData.id);
        request.setBoardId(columnData.boardId);
        request.setName(columnData.name);
        request.setColor(columnData.color);
        request.setIndex(columnData.index);

        this.client.upsertColumn(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                column: response.getColumn().toObject(),
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

    archiveAllCardsInColumn(columnId) {
      return new Promise((resolve, reject) => {
        const request = new ArchiveAllCardsInColumnRequest();
        request.setColumnId(columnId);

        this.client.archiveAllCardsInColumn(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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

    assignAllCheckListItems(checkListId, user) {
      return new Promise((resolve, reject) => {
        const request = new AssignAllCheckListItemsRequest();
        request.setChecklistId(checkListId);

        if (user) {
          const assignee = new User();
          assignee.setId(user.id);
          assignee.setUsername(user.email || user.username);
          assignee.setName(user.name);
          assignee.setSurname(user.surname);
          request.setAssignee(assignee);
        } else {
          request.setUnasign(true);
        }

        this.client.assignAllCheckListItems(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
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

    getProjectorOrBoardUserList(projectUUID = null, boardUUID = null) {
      return new Promise((resolve, reject) => {
        const request = new GetProjectorOrBoardUserListRequest();
        if (boardUUID) {
          // board uuid is enough to fetch data
          //  so if user was sent projectUUID with boardUUID we can ignore projectUUID
          request.setBoardUuid(boardUUID);
        }
        else if (projectUUID) {
          request.setProjectUuid(projectUUID);
        }

        this.client.getProjectorOrBoardUserList(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
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

    getProjectFiles(projectUUID = null, boardUUID = null) {
      return new Promise((resolve, reject) => {
        const request = new GetProjectFilesRequest();
        if (boardUUID) {
          // board uuid is enough to fetch data
          //  so if user was sent projectUUID with boardUUID we can ignore projectUUID
          request.setBoardUuid(boardUUID);
        }
        else if (projectUUID) {
          request.setProjectUuid(projectUUID);
        }

        this.client.getProjectFiles(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                code,
                data: dataList,
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


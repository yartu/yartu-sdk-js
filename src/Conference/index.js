import {
  ListConferenceRequest,
  GetConferenceRequest,
  UpsertInstantConferenceRequest,
  StartConferenceRequest,
  FinishConferenceRequest,
  DeleteConferenceRequest,
  ShareConferenceRequest,
  UnshareConferenceRequest,
  UpsertConferenceRequest,
  SessionParticipant,
  UpsertSessionParticipantRequest,
  ListConferenceRecordsRequest,
  DeleteRecordRequest,
  ListSessionParticipantRequest,
  CheckPublicConferenceRequest,
  GetPublicConferenceRequest,
  StartPublicConferenceRequest,
  DuplicateConferenceRequest,
  LockConferenceRequest,
  CallYartuUserRequest,
  TakeCallRequest,
  CancelCallRequest,
  CopyConferenceRecordToDriveRequest,
} from './service-pb.cjs';

import { Query } from '../utils/definitions_pb.cjs';
import { YConferenceClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Conference {
    endpoint = 'http://localhost:5001';
    client = undefined;
    yartuSdk = undefined;
    shareUuid = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YConferenceClient(this.endpoint, '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listConference(query = {}) {
      return new Promise((resolve, reject) => {
        const request = new ListConferenceRequest();
        const queryData = new Query();

        request.setQuery(queryData);
        request.setIsInvited(query.isInvited);

        this.client.listConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response.getSessionList().map((data) => data.toObject());
              resolve({
                conferences: dataList,
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

    getConference(conferenceUuid) {
      return new Promise((resolve, reject) => {

        const request = new GetConferenceRequest();
        request.setUuid(conferenceUuid);
        this.client.getConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                conference: response.toObject().session,
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

    upsertInstantConference() {
      return new Promise((resolve, reject) => {

        const request = new UpsertInstantConferenceRequest();

        this.client.upsertInstantConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                conference: response.toObject().session,
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

    startConference(conferenceUuid, passwrod = '') {
      return new Promise((resolve, reject) => {

        const request = new StartConferenceRequest();
        request.setUuid(conferenceUuid);
        request.setPassword(passwrod);

        this.client.startConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                key: response.getKey(),
                message: response.getMessage(),
              });
            } else {
              reject({
                code: code,
                key: '',
                message: response.getMessage()
              });
            }
          }
        });
      });
    }

    finishConference(conferenceUuid) {
      return new Promise((resolve, reject) => {

        const request = new FinishConferenceRequest();
        request.setUuid(conferenceUuid)

        this.client.finishConference(request, this.metadata, (error, response) => {
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
        });
      });
    }

    deleteConference(conferenceId) {
      return new Promise((resolve, reject) => {

        const request = new DeleteConferenceRequest();
        request.setId(conferenceId);

        this.client.deleteConference(request, this.metadata, (error, response) => {
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
        });
      });
    }

    shareConference(sharedData) {
      return new Promise((resolve, reject) => {

        const request = new ShareConferenceRequest();
        request.setUuid(sharedData.uuid);

        const participantsList = [];
        for (const participant of sharedData.participantsList) {
          // console.log('participant:', participant);
          const sessionParticipant = new SessionParticipant();
          sessionParticipant.setUsername(participant.username);
          sessionParticipant.setParticipantType(1);
          sessionParticipant.setIsGroup(participant.isGroup);
          participantsList.push(sessionParticipant);
        }
        // console.log('shareConference:participantsList:', participantsList);
        request.setParticipantListList(participantsList);

        this.client.shareConference(request, this.metadata, (error, response) => {
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
        });
      });
    }

    unshareConference(sharedData) {
      return new Promise((resolve, reject) => {

        const request = new UnshareConferenceRequest();
        request.setUuid(sharedData.uuid);

        const participantsList = [];
        for (const participant of sharedData.participantsList) {
          const sessionParticipant = new SessionParticipant();
          sessionParticipant.setId(participant.id);
          sessionParticipant.setUsername(participant.username);
          participantsList.push(sessionParticipant);
        }

        request.setParticipantListList(participantsList);

        this.client.unshareConference(request, this.metadata, (error, response) => {
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
        });
      });
    }

    upsertConference(conferenceData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertConferenceRequest();

        // console.log('upsertConference:conferenceData:', conferenceData);

        request.setId(conferenceData.id);
        request.setName(conferenceData.name);
        request.setRrule(conferenceData.rrule);
        request.setScheduledToStartAt(conferenceData.scheduledToStartAt);
        request.setTimezone(conferenceData.timezone);

        if (conferenceData.hasDuration) {
          request.setDuration(conferenceData.duration);
        }

        if (conferenceData.hasPassword) {
          request.setPassword(conferenceData.password);
        }

        for (const participant of conferenceData.participantsList) {
          const sessionParticipant = new SessionParticipant();
          sessionParticipant.setEmail(participant.email);
          sessionParticipant.setUsername(participant.username);
          sessionParticipant.setIsGroup(participant.isGroup);
          sessionParticipant.setParticipantType(participant.participant_type);
          request.addParticipants(sessionParticipant);
        }

        const reminderList = conferenceData.reminderList.map((r) => r.value);
        request.setReminderList(reminderList);

        this.client.upsertConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                uuid: response.getUuid(),
              });
            } else {
              reject({
                code: code,
                message: response.getMessage(),
                uuid: null,
              });
            }
          }
        });
      });
    }

    upsertSessionUser(sharedData) {
      return new Promise((resolve, reject) => {

        const request = new UpsertSessionParticipantRequest();
        request.setId(sharedData.id);
        request.setEmail(sharedData.email);
        request.setUserType(sharedData.userType);

        this.client.upsertSessionUser(request, this.metadata, (error, response) => {
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
        });
      });
    }

    listConferenceRecords(conferenceUuid = null) {
      return new Promise((resolve, reject) => {

        const request = new ListConferenceRecordsRequest();
        request.setUuid(conferenceUuid);

        this.client.listConferenceRecords(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response.getRecordList().map((data) => data.toObject());
              resolve({
                code,
                records: dataList,
                message: response.getMessage(),
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

    deleteRecord(recordId) {
      return new Promise((resolve, reject) => {

        const request = new DeleteRecordRequest();
        request.setId(recordId);

        this.client.deleteRecord(request, this.metadata, (error, response) => {
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
        });
      });
    }

    listSessionParticipant(conferenceUuid) {
      return new Promise((resolve, reject) => {

        const request = new ListSessionParticipantRequest();
        request.setUuid(conferenceUuid);

        this.client.listSessionParticipant(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                data: response.toObject(),
                message: response.getMessage(),
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

    checkPublicConference(conferenceUuid) {
      return new Promise((resolve, reject) => {

        const request = new CheckPublicConferenceRequest();
        request.setUuid(conferenceUuid);

        this.client.checkPublicConference(request, this.metadata, (error, response) => {
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
        });
      });
    }

    getPublicConference(conferenceUuid, name) {
      return new Promise((resolve, reject) => {

        const request = new GetPublicConferenceRequest();
        request.setUuid(conferenceUuid);
        request.setName(name);

        this.client.getPublicConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                conference: response.toObject().session,
                message: response.getMessage(),
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

    startPublicConference(conferenceUuid, password) {
      return new Promise((resolve, reject) => {

        const request = new StartPublicConferenceRequest();
        request.setUuid(conferenceUuid);
        request.setPassword(password);

        this.client.startPublicConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                key: response.getKey(),
                message: response.getMessage(),
              });
            } else {
              reject({
                code: code,
                key: null,
                message: response.getMessage()
              });
            }
          }
        });
      });
    }

    duplicateConference(conferenceId) {
      return new Promise((resolve, reject) => {

        const request = new DuplicateConferenceRequest();
        request.setId(conferenceId);

        this.client.duplicateConference(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                uuid: response.getUuid(),
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

    lockConference(conferenceUuid, locked = false) {
      return new Promise((resolve, reject) => {

        const request = new LockConferenceRequest();
        request.setUuid(conferenceUuid);
        request.setLocked(locked);

        this.client.lockConference(request, this.metadata, (error, response) => {
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
        });
      });
    }

    callYartuUser(conferenceData) {
      return new Promise((resolve, reject) => {
        const request = new CallYartuUserRequest();

        const sessionParticipant = new SessionParticipant();

        if (conferenceData.id) {
          sessionParticipant.setId(conferenceData.id);
        }

        if (conferenceData.email) {
          sessionParticipant.setEmail(conferenceData.email);
        }

        if (conferenceData.username) {
          sessionParticipant.setUsername(conferenceData.username);
        }

        if (conferenceData.isGroup) {
          sessionParticipant.setIsGroup(participant.isGroup);
        }

        request.setParticipant(sessionParticipant);

        this.client.callYartuUser(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: code,
                message: response.getMessage(),
                session: response.getSession().toObject(),
                isUserOnline: response.getIsUserOnline(),
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
    }

    takeCall(sessionUuid, status) {
      return new Promise((resolve, reject) => {
        const request = new TakeCallRequest();

        request.setUuid(sessionUuid);
        request.setStatus(status);

        this.client.takeCall(request, this.metadata, (error, response) => {
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
                message: response.getMessage(),
              });
            }
          }
        });
      });
    }

    cancelCall(sessionUuid) {
      return new Promise((resolve, reject) => {
        const request = new CancelCallRequest();

        request.setUuid(sessionUuid);

        this.client.cancelCall(request, this.metadata, (error, response) => {
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
                message: response.getMessage(),
              });
            }
          }
        });
      });
    }

    copyConferenceRecordToDrive(sessionId, recordUUID, repoId, path) {
      return new Promise((resolve, reject) => {

        const request = new CopyConferenceRecordToDriveRequest();
        request.setSessionId(sessionId);
        request.setRecordUuid(recordUUID);
        request.setRepoId(repoId);
        request.setPath(path);

        this.client.copyConferenceRecordToDrive(request, this.metadata, (error, response) => {
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
        });
      });
    }



  };

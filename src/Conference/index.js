import {
  ListConferenceRequest,
  GetConferenceRequest,
  UpsertInstantConferenceRequest,
  StartConferenceRequest,
  FinishConferenceRequest,
  DeleteConferenceRequest,
  ShareConferenceRequest,
  UnshareConferenceRequest,
  ConferenceUser,
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
        console.log('REQ');
        const request = new ListConferenceRequest();
        const queryData = new Query();

        request.setQuery(queryData);

        console.log('CLIENT..', this.client);

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

    startConference(conferenceUuid) {
      return new Promise((resolve, reject) => {

        const request = new StartConferenceRequest();
        request.setUuid(conferenceUuid);

        this.client.startConference(request, this.metadata, (error, response) => {
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
        request.set(sharedData.uuid);

        const shareableList = [];
        for (const shared of sharedData.sharable) {
          const conferenceUser = new ConferenceUser();
          conferenceUser.setEmail(shared.email);
          conferenceUser.setType(shared.type);
          conferenceUser.setIsGroup(shared.isGroup);
          shareableList.push(conferenceUser);
        }
        
        request.setShareableList(shareableList);

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

    unshareConference(sharedData) {
      return new Promise((resolve, reject) => {

        const request = new UnshareConferenceRequest();
        request.setUuid(sharedData.uuid);
        request.set(sharedData.uuid);

        const shareableList = [];
        for (const shared of sharedData.sharable) {
          const conferenceUser = new ConferenceUser();
          conferenceUser.setEmail(shared.email);
          conferenceUser.setType(shared.type);
          conferenceUser.setIsGroup(shared.isGroup);
          shareableList.push(conferenceUser);
        }
        
        request.setShareableList(shareableList);

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

  };

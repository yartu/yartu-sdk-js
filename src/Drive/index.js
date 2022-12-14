import { GetRecentRequest, ListRepoRequest } from './service-pb.cjs';

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
  };

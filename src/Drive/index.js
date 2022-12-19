/* eslint-disable unicorn/prevent-abbreviations */
import {
  GetRecentRequest,
  ListRepoRequest,
  GetDirEntriesRequest
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

    getDirEntries = (repoId, path, query, recursive = false) => {
      return new Promise((resolve, reject) => {
        const request = new GetDirEntriesRequest();
        request.setRepoId(repoId);
        request.setPath(path);
        request.setRecursive(recursive);

        this.client.getDirEntries(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            const fileList = [];
            const dirList = [];
            console.log(response);

            if (code == 0) {
              const dataList = response.getDataList().map((data) => {
                let dirent = data.toObject();
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

    /*
      "query": {
        "query": "Hello",
        "page": 20,
        "per_page": 20,
        "sort_by": "Hello",
        "search_fields": [
          "Hello"
        ]
      }
    */
  };

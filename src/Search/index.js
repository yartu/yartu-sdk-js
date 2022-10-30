import jwt_decode from 'jwt-decode';

import {
  code_AUTH_TWO_FA_FORCE,
  code_AUTH_TWO_FA_NEEDED,
  status_AUTH_NEEDED,
  status_AUTH_OK,
  status_AUTH_TWO_FA_NEEDED,
  status_AUTH_TWO_FA_FORCE
} from '../utils/codes';

import { ListSearchShareablePeopleRequest, SharableQuery } from './service-pb.cjs';
import {YSearchClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Search {
    endpoint = 'http://localhost:5001';
    client = undefined;
    loginStatus = 'login-needed';

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YSearchClient(this.endpoint, '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    searchShareablePeople = (search, type, query = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListSearchShareablePeopleRequest();
        const searchQuery = new SharableQuery();

        request.setSearch(search);
        request.setType(type)
        request.setQuery(searchQuery)

        this.client.listSearchShareablePeople(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
            handleError(error);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const people = response.getPeopleList().map((data) => data.toObject());
                resolve({
                  message: response.getMessage(),
                  people,
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
  }

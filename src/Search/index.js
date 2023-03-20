import jwt_decode from 'jwt-decode';

import {
  code_AUTH_TWO_FA_FORCE,
  code_AUTH_TWO_FA_NEEDED,
  status_AUTH_NEEDED,
  status_AUTH_OK,
  status_AUTH_TWO_FA_NEEDED,
  status_AUTH_TWO_FA_FORCE
} from '../utils/codes';

import { Query } from '../utils/definitions_pb.cjs';

import {
  ListSearchShareablePeopleRequest,
  ShareableQuery,
  SearchFilter,
  SearchRequest
} from './service-pb.cjs';
import { YSearchClient } from './service-grpc-web-pb.cjs';
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
      this.activeSearch = null
    }

    searchShareablePeople = (search, type_list, query = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListSearchShareablePeopleRequest();
        const searchQuery = new ShareableQuery();

        request.setSearch(search);
        request.setQuery(searchQuery);
        for (const type of type_list) {
          request.addType(type);
        }

        this.client.listSearchShareablePeople(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const people = response
                  .getPeopleList()
                  .map((data) => data.toObject());
                resolve({
                  message: response.getMessage(),
                  people
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

    search = (query = {}, filters = []) => {

      if (this.activeSearch) {
        this.activeSearch.cancel();
      }

      return new Promise((resolve, reject) => {
        const request = new SearchRequest();
        const queryRequest = new Query();

        if (query.app !== 'all') {
          request.setAppList([query.app])
        }

        for (const filter of filters) {
          const searchFilter = new SearchFilter();
          searchFilter.setSelector(filter.selector);
          searchFilter.addValue(filter.value);
          request.addFilter(searchFilter)
        }
        
        queryRequest.setQuery(query.query);
        request.setQuery(queryRequest);

        this.activeSearch = this.client.search(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const results = response.getDataList().map((data) => data.toObject());
                const pagination = response.getPagination(); // TODO::
                resolve({
                  message: response.getMessage(),
                  results,
                  pagination: {},
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

  };

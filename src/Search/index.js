import { Query } from '../utils/definitions_pb.cjs';

import {
  ListSearchShareablePeopleRequest,
  ListSearchShareablePeopleBulkRequest,
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
      this.activeSearch = null;
    }

    searchShareablePeople = (
      search,
      type_list,
      query = {},
      requiredFields = [],
      withoutMe = false
    ) => {
      return new Promise((resolve, reject) => {
        const request = new ListSearchShareablePeopleRequest();
        const searchQuery = new ShareableQuery();

        request.setSearch(search);
        request.setQuery(searchQuery);
        request.setRequiredFieldList(requiredFields);
        request.setWithoutMe(withoutMe);

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

                people.forEach(
                  (p) =>
                    (p.photo = p.photo
                      ? 'data:image/png;base64,'.concat(p.photo)
                      : null)
                );

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

    searchShareablePeopleBulk = (
      searchList,
      type_list,
      query = {},
      requiredFields = [],
      withoutMe = false
    ) => {
      return new Promise((resolve, reject) => {
        const request = new ListSearchShareablePeopleBulkRequest();
        const searchQuery = new ShareableQuery();

        request.setSearchList(searchList);
        request.setQuery(searchQuery);
        request.setRequiredFieldList(requiredFields);
        request.setWithoutMe(withoutMe);

        for (const type of type_list) {
          request.addType(type);
        }

        this.client.listSearchShareablePeopleBulk(
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

                people.forEach(
                  (p) =>
                    (p.photo = p.photo
                      ? 'data:image/png;base64,'.concat(p.photo)
                      : null)
                );

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
          request.setAppList([query.app]);
        }

        for (const filter of filters) {
          const searchFilter = new SearchFilter();
          searchFilter.setSelector(filter.selector);
          searchFilter.addValue(filter.value);
          request.addFilter(searchFilter);
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
                const results = response
                  .getDataList()
                  .map((data) => data.toObject());
                const pagination = {}; // response.getPagination(); // TODO::
                resolve({
                  message: response.getMessage(),
                  results,
                  pagination: {}
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

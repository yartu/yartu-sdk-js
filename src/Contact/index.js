import { ListAddressBookRequest, ListContactRequest } from './service-pb.cjs';
import { YContactClient } from './service-grpc-web-pb.cjs';

export default (config) =>
  class Contact {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YContactClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listAddressBook = () => {
      return new Promise((resolve, reject) => {
        const request = new ListAddressBookRequest();
        // request.setQuery()
        this.client.listAddressBook(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              reject({
                code: -1,
                message: error.message
              });
            } else {
              const code = response.getCode();

              if (code == 0) {
                const dataList = response
                  .getDataList()
                  .map((data) => data.toObject());
                resolve({
                  data: dataList,
                  pagination: response.getPagination().toObject()
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

    listContact = (addressBookId, query = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListContactRequest();
        // request.setQuery([]);
        request.setAddressBookId(addressBookId);

        this.client.listContact(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              reject({
                code: -1,
                message: error.message
              });
            } else {
              const code = response.getCode();

              if (code == 0) {
                const dataList = response
                  .getDataList()
                  .map((data) => data.toObject());
                resolve({
                  data: dataList,
                  pagination: response.getPagination().toObject()
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

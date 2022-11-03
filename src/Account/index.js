import {
  GetInfoRequest,
  UpsertAccountRequest,
} from './service-pb.cjs';
  
import { YAccountClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
class Account {
  endpoint = 'http://localhost:5001';
  client = undefined;
  metadata = undefined;

  constructor(config) {
    this.endpoint = config.endpoint;
    this.client = new YAccountClient(this.endpoint, '', '');

    const yartu_token = window.localStorage.getItem('yartu-token');
    this.metadata = { Authentication: yartu_token };
  }

  getInfo = (username = null) => {
    return new Promise((resolve, reject) => {
      const request = new GetInfoRequest();

      if (username) {
        request.setUsername(username)
      }
      this.client.getInfo(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                data: response.toObject(),
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

  upsertAccount = (data) => {
    return new Promise((resolve, reject) => {
      const request = new UpsertAccountRequest();

      request.setPassword(data.password);

      console.log('DATA', data);
      console.log('personalPhone', data.personalPhone);

      if (!data.password) {
        request.setWorkingStatus(data.workingStatus);
        request.setPersonalPhone(data.personalPhone);
        request.setPersonalEmail(data.personalEmail);
        request.setSecondaryPhone(data.secondaryPhone);
        request.setSecondaryEmail(data.secondaryEmail);
        request.setCountry(data.country);
        request.setTimezone(data.timezone);
        request.setTimeformat(data.timeformat);
        request.setCity(data.city);

        let lang = data.language;
        if (typeof lang === 'object') {
          lang = lang.code;
        }
        request.setLanguage(lang);
      }

      console.log('REQ', request);

      this.client.upsertAccount(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                data: response.toObject(),
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

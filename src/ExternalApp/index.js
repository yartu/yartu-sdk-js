import { YAppClient } from './service-grpc-web-pb.cjs';
import { GetAppTokenRequest } from './service-pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class ExternalApp {
    endpoint = 'http://localhost:5001';
    client = undefined;
    yartuSdk = undefined;
    shareUuid = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YAppClient(this.endpoint, '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    getAppToken = (appUuid) => {
      return new Promise((resolve, reject) => {
        const request = new GetAppTokenRequest();

        request.setAppUuid(appUuid);

        this.client.getAppToken(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code,
                token: response.getToken(),
                url: response.getUrl(),
                appUuid: response.getAppUuid(),
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
    };
  };

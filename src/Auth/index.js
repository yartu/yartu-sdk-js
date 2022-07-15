import { LoginRequest } from './service-pb.cjs';
import { YAuthClient } from './service-grpc-web-pb.cjs';

const Client = new YAuthClient('http://localhost:8080', '', '');

const login = (username, password, remember = false) => {
  return new Promise((resolve, reject) => {
    const request = new LoginRequest();
    request.setUsername(username);
    request.setPassword(password);
    request.setRemember(remember);
    request.setDeviceId('df5aed00-7f89-4fb9-8efb-58add9e99323');

    Client.login(request, {}, (error, response) => {
      if (error) {
        reject({
          code: -1,
          message: response.error
        });
        console.error(error.message);
        resolve(false);
      } else {
        const code = response.getCode();
        const token = response.getToken();

        if (code == 0) {
          window.localStorage.setItem('yartu-token', token);
          resolve(token);
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

const checkLogin = () => {
  const yartu_token = window.localStorage.getItem('yartu-token');
  if (yartu_token) {
    try {
      const user_data = jwt_decode(yartu_token);
      if (user_data.exp < Date.now() / 1000) {
        // User token expired, remove token from localstorage
        window.localStorage.removeItem(yartu_token);
      } else {
        return true;
      }
    } catch {}
  }

  return false;
};

export { login, checkLogin };

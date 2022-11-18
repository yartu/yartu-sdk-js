import {
  User,
  GetInfoRequest,
  UpsertAccountRequest,
  ListEmailSignatureRequest,
  UpsertEmailSignatureRequest,
  DeleteEmailSignatureRequest,
  SetEmailForwardingRequest,
  GetEmailForwardingRequest,
  GetEmailAutoReplyRequest,
  SetEmailAutoReplyRequest,
  GetEmailRuleRequest,
  ListEmailRuleRequest,
  UpsertEmailRuleRequest,
  DeleteEmailRuleRequest,
  EmailRule,
  EmailRuleInstance,
  EmailRuleAction,
  ListSharedMailBoxRequest,
  GetSharedMailBoxRequest,
  ListSharedMailBoxUsersRequest,
  UpsertSharedMailBoxRequest,
  DeleteSharedMailBoxRequest,
  GetEmailSignatureRequest,
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
      request.setOldPassword(data.oldPassword);

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

  listEmailSignature() {
    return new Promise((resolve, reject) => {
      const request = new ListEmailSignatureRequest();

      this.client.listEmailSignature(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            const dataList = response.getDataList().map((data) => data.toObject());
            resolve({
              signatures: dataList,
              code: 0,
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

  upsertEmailSignature = (data) => {
    return new Promise((resolve, reject) => {
      const request = new UpsertEmailSignatureRequest();

      request.setId(data.id);
      request.setName(data.name);
      request.setSignature(data.signature);
      request.setIsActive(data.isActive);
      request.setIsDefault(data.isDefault);

      this.client.upsertEmailSignature(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                code: code,
                message: response.getMessage()
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
  
  deleteEmailSignature = (signatureId) => {
    return new Promise((resolve, reject) => {
      const request = new DeleteEmailSignatureRequest();
      
      request.setId(signatureId);
      
      this.client.deleteEmailSignature(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                code: code,
                message: response.getMessage()
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

  getEmailSignature = (signatureId) => {
    return new Promise((resolve, reject) => {
      const request = new GetEmailSignatureRequest();
      
      request.setId(signatureId);
      
      this.client.getEmailSignature(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                code: code,
                signature: response.toObject()
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

  getEmailForwarding() {
    return new Promise((resolve, reject) => {
      const request = new GetEmailForwardingRequest();

      this.client.getEmailForwarding(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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

  setEmailForwarding = (data) => {
    return new Promise((resolve, reject) => {
      const request = new SetEmailForwardingRequest();

      request.setAddressList(data.addressList);
      request.setIsActive(data.isActive);
      request.setKeepCopy(data.keepCopy);

      this.client.setEmailForwarding(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                code: code,
                message: response.getMessage()
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

  getEmailAutoReply() {
    return new Promise((resolve, reject) => {
      const request = new GetEmailAutoReplyRequest();

      this.client.getEmailAutoReply(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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

  setEmailAutoReply = (data) => {
    return new Promise((resolve, reject) => {
      const request = new SetEmailAutoReplyRequest();

      request.setIsActive(data.isActive);
      request.setSubject(data.subject);
      request.setMessage(data.replyMessage);
      if (data.hasStart) {
        request.setStartDate(data.startDate.format('YYYY-MM-DD'));
      }
      if (data.hasEnd) {
        request.setEndDate(data.endDate.format('YYYY-MM-DD'));
      }
      request.setDontReplyList(data.dontReplyList);

      this.client.setEmailAutoReply(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                code: code,
                message: response.getMessage()
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

  getEmailRule(ruleId) {
    return new Promise((resolve, reject) => {
      const request = new GetEmailRuleRequest();

      request.setId(ruleId);

      this.client.getEmailRule(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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

  listEmailRule() {
    return new Promise((resolve, reject) => {
      const request = new ListEmailRuleRequest();

      this.client.listEmailRule(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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

  upsertEmailRule = (data) => {
    return new Promise((resolve, reject) => {
 
      const request = new UpsertEmailRuleRequest();
      const emailRule = new EmailRule();

      const rulesList = [];
      for (const condition of data.rulesList) {
        const con = new EmailRuleInstance();
        con.setName(condition.name);
        con.setCondition("");
        con.setValue(condition.value);
        con.setOrder(condition.order);
        rulesList.push(con);
      }

      const actionsList = [];
      for (const action of data.actionsList) {
        const act = new EmailRuleAction();
        act.setName(action.name);
        act.setValue(action.value);
        act.setOrder(action.order);
        actionsList.push(act);
      }

      emailRule.setId(data.id);
      emailRule.setName(data.name);
      emailRule.setConditionType(data.conditionType);
      emailRule.setOrder(data.order);
      emailRule.setIsActive(data.isActive);
      emailRule.setRulesList(rulesList);
      emailRule.setActionsList(actionsList);

      request.setId(data.id);
      request.setRule(emailRule);

      this.client.upsertEmailRule(
        request,
        this.metadata,
        (error, response) => {
          const code = response.getCode();
          if (error) {
            handleError(error, reject);
          } else {
            if (code == 0) {
              resolve({
                code: code,
                message: response.getMessage()
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

  deleteEmailRule = (ruleId) => {
    return new Promise((resolve, reject) => {
      const request = new DeleteEmailRuleRequest();
      request.setId(ruleId);
      this.client.deleteEmailRule(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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

  listSharedMailBox = () => {
    return new Promise((resolve, reject) => {
      const request = new ListSharedMailBoxRequest();

      this.client.listSharedMailBox(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            const dataList = response.getDataList().map((data) => data.toObject());
            resolve({
              sharedMailBoxs: dataList,
              code: 0,
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
  };

  getSharedMailBox = (sharedMailBoxId) => {
    return new Promise((resolve, reject) => {
      const request = new GetSharedMailBoxRequest();
      request.setId(sharedMailBoxId);
      this.client.getSharedMailBox(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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

  listSharedMailBoxUsers = (sharedMailBoxId) => {
    return new Promise((resolve, reject) => {
      const request = new ListSharedMailBoxUsersRequest();
      request.setId(sharedMailBoxId);
      this.client.listSharedMailBoxUsers(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              usersList: response.toObject().usersList,
              code: 0,
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

  upsertSharedMailBox = (data) => {
    return new Promise((resolve, reject) => {
      const request = new UpsertSharedMailBoxRequest();

      request.setId(data.id);
      request.setToUser(data.username);
      request.setPermission(data.permission);
      request.setUniqueId(data.uniqueId);

      this.client.upsertSharedMailBox(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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

  deleteSharedMailBox = (data) => {
    return new Promise((resolve, reject) => {
      const request = new DeleteSharedMailBoxRequest();

      request.setId(data.id);
      request.setToUser(data.username);
      request.setUniqueId(data.uniqueId);

      this.client.deleteSharedMailBox(request, this.metadata, (error, response) => {
        if (error) {
          handleError(error, reject);
        } else {
          const code = response.getCode();

          if (code == 0) {
            resolve({
              data: response.toObject(),
              code: 0,
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
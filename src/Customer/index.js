import {
  GetCustomerRealmsRequest,
  GetCustomerRealmRequest,
  ListCustomerMemberRequest,
  GetCustomerMemberRequest,
  UpsertCustomerMemberRequest,
  DeleteCustomerMemberRequest,
  ResetCustomerMemberPasswordRequest,
  ChangeCustomerMemberStatusRequest,
  UpsertCustomerGroupRequest,
  DeleteCustomerGroupRequest,
  ListCustomerGroupsRequest,
  UpsertCustomerGroupMemberRequest,
  DeleteCustomerGroupMemberRequest,
  ListCustomerGroupMembersRequest,
  ListCustomerEmailAliasRequest,
  UpsertCustomerEmailAliasRequest,
  DeleteCustomerEmailAliasRequest,
  ListCustomerEmailAliasAddressRequest,
  DeleteCustomerEmailAliasAddressRequest,
  UpsertCustomerEmailAliasAddressRequest,
  CheckDomainAddressRequest,
  UpsertRegisterFormRequest,
  GetPackageRequest,
  GetContractRequest,
  ListPackagesRequest,
  GetRegisterFormRequest,
  GetPaymentSessionRequest,
  ListInvoicesRequest,
  ListInvoiceTemplateRequest,
} from './service-pb.cjs';

import { YCustomerClient } from './service-grpc-web-pb.cjs';
import { Group, Query, Shared, User } from '../utils/definitions_pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Customer {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YCustomerClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    getCustomerRealms = () => {
      return new Promise((resolve, reject) => {
        const request = new GetCustomerRealmsRequest();
        this.client.getCustomerRealms(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code: 0,
                  message: response.getMessage(),
                  realms: response
                    .getRealmsList()
                    .map((data) => data.toObject())
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

    getCustomerRealm = (realmId) => {
      return new Promise((resolve, reject) => {
        const request = new GetCustomerRealmRequest();

        realmId = Number.parseInt(realmId, 10);
        request.setId(realmId);

        this.client.getCustomerRealm(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                const customerRealm = response.getCustomerRealm().toObject();
                try {
                  customerRealm['packageDetail']['features'] = JSON.parse(customerRealm['packageDetail']['features']['json']);
                  customerRealm['packageDetail']['details'] = JSON.parse(customerRealm['packageDetail']['details']['json']);
                  customerRealm['packageDetail']['price'] = JSON.parse(customerRealm['packageDetail']['price']['json']);
                } catch (err) {
                  console.error('[YARTU-SDK] getCustomerRealm: exception:', err);
                }
                resolve({
                  code: 0,
                  message: response.getMessage(),
                  customerRealm,
                });
              } else {
                reject({
                  code: code,
                  customerRealm: {},
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    listCustomerMember = (realmId) => {
      return new Promise((resolve, reject) => {
        const request = new ListCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);
        request.setRealmId(realmId);

        this.client.listCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    getCustomerMember = (realmId, userId) => {
      return new Promise((resolve, reject) => {
        const request = new GetCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);
        userId = Number.parseInt(userId, 10);

        request.setId(userId);
        request.setRealmId(realmId);

        this.client.getCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    upsertCustomerMember = (realmId, userData = {}) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);

        request.setRealmId(realmId);
        request.setId(userData.id);
        request.setUsername(userData.username);
        request.setName(userData.name);
        request.setSurname(userData.surname);
        request.setServiceList(userData.serviceList || []);

        if (userData.password) {
          request.setPassword(userData.password);
        }

        this.client.upsertCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    deleteCustomerMember = (realmId, userIds) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteCustomerMemberRequest();

        realmId = Number.parseInt(realmId, 10);

        request.setRealmId(realmId);
        request.setIdList(userIds);

        this.client.deleteCustomerMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    resetCustomerMemberPassword = (realmId, userId, password) => {
      return new Promise((resolve, reject) => {
        const request = new ResetCustomerMemberPasswordRequest();

        realmId = Number.parseInt(realmId, 10);
        userId = Number.parseInt(userId, 10);

        request.setRealmId(realmId);
        request.setId(userId);
        request.setPassword(password);

        this.client.resetCustomerMemberPassword(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    changeCustomerMemberStatus = (realmId, userIds, data = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ChangeCustomerMemberStatusRequest();

        realmId = Number.parseInt(realmId, 10);
        request.setRealmId(realmId);
        request.setIdList(userIds);

        if (data.isActive !== null) {
          request.setIsActive(data.isActive);
        }

        if (data.isPrivate !== null) {
          request.setIsPrivate(data.isPrivate);
        }

        this.client.changeCustomerMemberStatus(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    upsertCustomerGroup = (groupData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertCustomerGroupRequest();

        request.setId(groupData.id);
        request.setName(groupData.name);
        request.setRealmId(groupData.realmId);
        request.setIsPrivate(groupData.isPrivate);
        request.setIsActive(groupData.isActive);

        if ('hasEmailAlias' in groupData) {
          request.setHasEmailAlias(groupData.hasEmailAlias);
          if (groupData.hasEmailAlias) {
            request.setEmailAlias(groupData?.emailAlias);
          }
        }

        if ('hasDrive' in groupData) {
          request.setHasDrive(groupData.hasDrive);
          // if (groupData.hasDrive) {
          //   request.setDriveQuota(groupData.driveQuota);
          // }
        }

        if ('hasAddressbook' in groupData) {
          request.setHasAddressbook(groupData.hasAddressbook);
        }

        if ('hasCalendar' in groupData) {
          request.setHasCalendar(groupData.hasCalendar);
        }

        this.client.upsertCustomerGroup(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                const data = response.getData().toObject();
                resolve({
                  code: 0,
                  data,
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

    deleteCustomerGroup = (realmId, groupId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteCustomerGroupRequest();

        request.setRealmId(realmId);
        request.setGroupId(groupId);

        this.client.deleteCustomerGroup(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code: 0,
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

    listCustomerGroups = (queryRequest) => {
      return new Promise((resolve, reject) => {
        const request = new ListCustomerGroupsRequest();

        const query = new Query();
        query.setQuery(queryRequest.query);
        query.setPage(queryRequest.page);
        query.setPerPage(queryRequest.perPage);
        query.setSortBy(queryRequest.sortBy);

        request.setRealmId(queryRequest.realmId);
        request.setQuery(query);

        this.client.listCustomerGroups(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                const dataList = response
                  .getDataList()
                  .map((data) => data.toObject());
                resolve({
                  code: 0,
                  data: dataList,
                  pagination: response.getPagination().toObject(),
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

    upsertCustomerGroupMember = (realmId, groupId, usernames) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertCustomerGroupMemberRequest();

        request.setRealmId(realmId);
        request.setId(groupId);
        request.setUserList(usernames);

        this.client.upsertCustomerGroupMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code: 0,
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

    deleteCustomerGroupMember = (realmId, groupId, usernames) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteCustomerGroupMemberRequest();

        request.setRealmId(realmId);
        request.setId(groupId);
        request.setUserList(usernames);

        this.client.deleteCustomerGroupMember(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code: 0,
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

    listCustomerGroupMembers = (queryRequest) => {
      return new Promise((resolve, reject) => {
        const request = new ListCustomerGroupMembersRequest();

        const query = new Query();
        query.setQuery(queryRequest.query);
        query.setPage(queryRequest.page);
        query.setPerPage(queryRequest.perPage);
        query.setSortBy(queryRequest.sortBy);

        request.setRealmId(queryRequest.realmId);
        request.setGroupId(queryRequest.groupId);
        request.setQuery(query);

        this.client.listCustomerGroupMembers(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code === 0) {
                const userList = response
                  .getUserList()
                  .map((data) => data.toObject());
                const pagination = response.getPagination().toObject();
                const group = response.getGroup().toObject();
                resolve({
                  code,
                  pagination,
                  group,
                  users: userList
                });
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                  code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    listCustomerEmailAlias = (queryRequest) => {
      return new Promise((resolve, reject) => {
        const request = new ListCustomerEmailAliasRequest();

        const query = new Query();
        query.setQuery(queryRequest.query);
        query.setPage(queryRequest.page);
        query.setPerPage(queryRequest.perPage);
        query.setSortBy(queryRequest.sortBy);

        request.setRealmId(queryRequest.realmId);
        request.setQuery(query);

        this.client.listCustomerEmailAlias(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code === 0) {
                const aliasList = response
                  .getAliasList()
                  .map((data) => data.toObject());
                const pagination = response.getPagination().toObject();
                resolve({
                  code,
                  pagination,
                  aliasList
                });
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                  code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    upsertCustomerEmailAlias = (aliasData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertCustomerEmailAliasRequest();

        request.setRealmId(aliasData.realmId);
        request.setId(aliasData.id);
        request.setEmail(aliasData.email);
        request.setIsActive(aliasData.isActive);

        this.client.upsertCustomerEmailAlias(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code === 0) {
                const alias = response.getAlias().toObject();
                resolve({
                  code,
                  alias
                });
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                  code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    deleteCustomerEmailAlias = (aliasData) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteCustomerEmailAliasRequest();

        request.setId(aliasData.id);
        request.setRealmId(aliasData.realmId);

        this.client.deleteCustomerEmailAlias(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code === 0) {
                resolve({
                  code,
                  message: response.getMessage()
                });
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                  code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    listCustomerEmailAliasAddress = (queryRequest) => {
      return new Promise((resolve, reject) => {
        const request = new ListCustomerEmailAliasAddressRequest();

        const query = new Query();
        query.setQuery(queryRequest.query);
        query.setPage(queryRequest.page);
        query.setPerPage(queryRequest.perPage);
        query.setSortBy(queryRequest.sortBy);

        request.setId(queryRequest.id);
        request.setRealmId(queryRequest.realmId);
        request.setQuery(query);

        this.client.listCustomerEmailAliasAddress(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code === 0) {
                const email = response.getEmail();
                const toList = response.getToList();
                // const pagination = response.getPagination().toObject();
                resolve({
                  code,
                  message: response.getMessage(),
                  email,
                  toList,
                });
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                  code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    deleteCustomerEmailAliasAddress = (aliasData) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteCustomerEmailAliasAddressRequest();

        request.setId(aliasData.id);
        request.setRealmId(aliasData.realmId);
        request.setEmail(aliasData.email);

        this.client.deleteCustomerEmailAliasAddress(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code === 0) {
                resolve({
                  code,
                  message: response.getMessage()
                });
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                  code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    upsertCustomerEmailAliasAddress = (aliasData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertCustomerEmailAliasAddressRequest();

        request.setId(aliasData.id);
        request.setRealmId(aliasData.realmId);
        request.setEmail(aliasData.email);

        this.client.upsertCustomerEmailAliasAddress(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code === 0) {
                resolve({
                  code,
                  message: response.getMessage()
                });
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                  code,
                  message: response.getMessage()
                });
              }
            }
          }
        );
      });
    };

    getPackage = () => {
      return new Promise((resolve, reject) => {
        const request = new GetPackageRequest();

        this.client.getPackage(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              let packageData = response.getPackage().toObject();
              packageData = {
                ...packageData,
                price: JSON.parse(packageData.price.json),
                features: JSON.parse(packageData.features.json),
                details: JSON.parse(packageData.details.json)
              }
              resolve({
                code: 0,
                package: packageData,
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

    getContract = (token) => {
      return new Promise((resolve, reject) => {
        const request = new GetContractRequest();
        request.setToken(token);

        this.client.getContract(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              let contractData = response.getContract().toObject();
              contractData.packageDetail = {
                ...contractData.packageDetail,
                price: JSON.parse(contractData.packageDetail.price.json),
                features: JSON.parse(contractData.packageDetail.features.json)
              };

              resolve({
                code: 0,
                contract: contractData
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

    listPackages = () => {
      return new Promise((resolve, reject) => {
        const request = new ListPackagesRequest();

        this.client.listPackages(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const packageList = response
                .getYartuPackageList()
                .map((packageProto) => {
                  const packageDetail = packageProto.toObject();
                  return {
                    ...packageDetail,
                    price: JSON.parse(packageDetail.price.json),
                    features: JSON.parse(packageDetail.features.json),
                    details: JSON.parse(packageDetail.details.json)
                  };
                });

              resolve({
                code: 0,
                packageList
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

    checkDomainAddress = (domain) => {
      return new Promise((resolve, reject) => {
        const request = new CheckDomainAddressRequest();

        request.setDomain(domain);

        this.client.checkDomainAddress(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    upsertRegisterForm = (formData = {}) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertRegisterFormRequest();

        if (formData.domain) {
          request.setDomain(formData.domain);
        }

        if (formData.packageId) {
          request.setPackageId(formData.packageId.toString());
        }

        if (formData.packagePeriod) {
          request.setPackagePeriod(formData.packagePeriod);
        }

        if (formData.name) {
          request.setName(formData.name);
        }

        if (formData.surname) {
          request.setSurname(formData.surname);
        }

        if (formData.phone) {
          request.setPhone(formData.phone);
        }

        if (formData.username) {
          request.setUsername(formData.username);
        }

        if (formData.password) {
          request.setPassword(formData.password);
        }

        if (formData.currentEmail) {
          request.setCurrentEmail(formData.currentEmail);
        }

        if (formData.userCount) {
          request.setUserCount(formData.userCount);
        }

        if (formData.taxType) {
          request.setTaxType(formData.taxType);
        }

        if (formData.taxName) {
          request.setTaxName(formData.taxName);
        }

        if (formData.taxSurname) {
          request.setTaxSurname(formData.taxSurname);
        }

        if (formData.taxPhone) {
          request.setTaxPhone(formData.taxPhone);
        }

        if (formData.taxAddress) {
          request.setTaxAddress(formData.taxAddress);
        }

        if (formData.taxLocation) {
          request.setTaxLocation(formData.taxLocation);
        }

        if (formData.taxNo) {
          request.setTaxNo(formData.taxNo);
        }

        if (formData.taxEmail) {
          request.setTaxEmail(formData.taxEmail);
        }

        if (formData.step) {
          request.setStep(formData.step);
        }

        if (formData.taxAddressTitle) {
          request.setTaxAddressTitle(formData.taxAddressTitle);
        }

        this.client.upsertRegisterForm(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    getRegisterForm = (domain) => {
      return new Promise((resolve, reject) => {
        const request = new GetRegisterFormRequest();

        request.setDomain(domain);

        this.client.getRegisterForm(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                const data = response.toObject();
                if (data.form.yartuPackage?.price?.json) {
                  data.form.yartuPackage.price = JSON.parse(
                    data.form.yartuPackage.price.json
                  );
                  // data.prce = JSON.parse(data.prce.json);
                }
                resolve(data);
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

    getPaymentSession = (domain, maskedPan, cvv) => {
      return new Promise((resolve, reject) => {
        const request = new GetPaymentSessionRequest();

        request.setDomain(domain);
        request.setMaskedPan(maskedPan);
        request.setCvv(cvv);

        this.client.getPaymentSession(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve(response.toObject());
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

    listInvoices = (domain) => {
      return new Promise((resolve, reject) => {
        const request = new ListInvoicesRequest();
        request.setDomain(domain);

        this.client.listInvoices(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());

              resolve({
                code: 0,
                data: dataList,
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

    listInvoiceTemplate = () => {
      return new Promise((resolve, reject) => {
        const request = new ListInvoiceTemplateRequest();

        this.client.listInvoiceTemplate(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());

              resolve({
                code: 0,
                data: dataList,
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

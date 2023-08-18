import {
  ContactMetaQuery,
  AddressBook,
  Contact as ContactProto,
  Label,
  davType,
  Address,

  ListAddressBookRequest,
  UpsertAddressBookRequest,
  DeleteAddressBookRequest,
  ShareAddressBookRequest,
  UnshareAddressBookRequest,

  DeleteSharedAddressBookRequest,

  ListContactRequest,
  UpsertContactRequest,
  GetContactRequest,
  DeleteContactRequest,
  ExportContactRequest,
  ImportContactRequest,
  MoveContactRequest,

  UpsertLabelToContactRequest,
  StarContactRequest,

  UpsertLabelRequest,
  ListLabelRequest,
  GetLabelRequest,
  DeleteLabelRequest,

  ListDuplicateContactRequest,
} from './service-pb.cjs';

import { YContactClient } from './service-grpc-web-pb.cjs';
import {Group, Query, Shared, User} from '../utils/definitions_pb.cjs';
import { handleError } from '../utils/helper';


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
        this.client.listAddressBook(
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

    upsertAddressBook = (addressBookId, addressBookData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertAddressBookRequest();
        request.setId(addressBookId);
        request.setName(addressBookData.name);
        request.setDescription(addressBookData.description);

        this.client.upsertAddressBook(
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
                  message: 'successfully'
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

    deleteAddressBook = (addressBookId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteAddressBookRequest();
        request.setId(addressBookId);
        this.client.deleteAddressBook(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                resolve({
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

    shareAddressBook = (addressBookId, shareList) => {
      return new Promise((resolve, reject) => {
        const request = new ShareAddressBookRequest();
        request.setId(addressBookId);
        const UserShareList = [];
        shareList.forEach(s => {
          const shared = new Shared();
          shared.setId(s.shared_id);
          shared.setPermission(s.permission);

          if (s?.isYartuUser) {
            const user = new User();
            user.setId(s.id);
            user.setUsername(s.email);
            user.setName(s.name);
            user.setSurname(s.surname);

            shared.setUser(user);

          } else if (s?.isGroup) {

            const group = new Group();
            group.setId(s.id);
            group.setName(s.name);
            group.setEmailAlias(s.email);

            shared.setGroup(group);
          } else {
            console.log('@yartu/sdk/ shareAddressBook method not supports external users and Realm share features for now!');
          }

          UserShareList.push(shared);
        });

        request.setSharedList(UserShareList);

        this.client.shareAddressBook(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                // success: response.getSuccessList().map((data) => data.toObject()),
                // error: response.getErrorList().map((data) => data.toObject()),
                // TODO :: @ramazan add success repeated field to proto and backend service !
                // TODO :: @ramazan add error repeated field to proto and backend service !
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
    }

    unshareAddressBook = (addressBookId) => {
      return new Promise((resolve, reject) => {
        const request = new UnshareAddressBookRequest();
        request.setId(addressBookId);

        this.client.unshareAddressBook(request, this.metadata, (error, response) => {
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
        });
      });
    }

    deleteSharedAddressBook = (addressBookId, sharedAddressBookId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteSharedAddressBookRequest();
        request.setId(addressBookId);
        request.setSharedAddressBookId(sharedAddressBookId);

        this.client.deleteSharedAddressBook(request, this.metadata, (error, response) => {
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
        });
      });
    }

    listContact = (addressBookId, queryRequest = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListContactRequest();
        // request.setQuery([]);

        const query = new Query();
        query.setQuery(queryRequest.query);
        query.setPage(queryRequest.page);
        query.setPerPage(queryRequest.perPage);
        query.setSortBy(queryRequest.sortBy);
        query.setSearchFieldsList(queryRequest.searchFields);

        const meta = new ContactMetaQuery();
        meta.setLabel(queryRequest.label);
        meta.setStarred(queryRequest.starred);
        meta.setFrequently(queryRequest.frequently);

        request.setQuery(query);
        request.setMeta(meta);

        request.setAddressBookId(addressBookId);

        this.client.listContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              // const dataList = response.getDataList().map((data) => {
              //   const contact = data.toObject();
              //   contact.photo = contact.photo ? 'data:image/png;base64,'.concat(contact.photo) : null;
              //   return contact;
              // });
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
        });
      });
    };

    upsertContact = (addressBookId, contactData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertContactRequest();

        const addressBook = new AddressBook();
        addressBook.setId(addressBookId);
        const contact = new ContactProto();

        contact.setAddressBook(addressBook);
        contact.setId(contactData.id);
        contact.setTitle(contactData.title);
        contact.setCompany(contactData.company);
        contact.setName(contactData.name);
        contact.setMiddleName(contactData.middleName);
        contact.setSurname(contactData.surname);
        contact.setPhoto(contactData.photo);

        const emailList = [];
        for (const email of contactData.emailList) {
          const emailType = new davType();
          emailType.setType(email.type);
          emailType.setValue(email.value);
          emailType.setIsDefault(email.is_default);
          emailList.push(emailType);
        }
        const phoneList = [];
        for (const phone of contactData.phoneList) {
          const phoneType = new davType();
          phoneType.setType(phone.type);
          phoneType.setValue(phone.value);
          phoneType.setIsDefault(phone.is_default);
          phoneList.push(phoneType);
        }
        const webList = [];
        for (const web of contactData.webList) {
          const webType = new davType();
          webType.setType(web.type);
          webType.setValue(web.value);
          webType.setIsDefault(web.is_default);
          webList.push(webType);
        }

        const addressList = [];
        for (const address of contactData.addressList) {
          const addressType = new Address();
          addressType.setType(address.type);
          addressType.setStreet(address.street);
          addressType.setCity(address.city);
          addressType.setRegion(address.region);
          addressType.setPostalcode(address.postalcode);
          addressType.setCountry(address.country);
          addressType.setIsDefault(address.default);
          addressList.push(addressType);
        }

        contact.setEmailList(emailList);
        contact.setPhoneList(phoneList);
        contact.setWebList(webList);
        contact.setAddressList(addressList);
        contact.setNote(contactData.note);

        for (const label of contactData.labelsList) {
          if (typeof label === 'object') {
            request.addLabels(label.id);
          } else {
            request.addLabels(label);
          }
        }

        request.setContact(contact);

        this.client.upsertContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                message: 'successfully'
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

    getContact = (contactId, selector = 'contact') => {
      return new Promise((resolve, reject) => {
        const request = new GetContactRequest();

        if (selector === 'contact') {
          request.setContactId(contactId);
        } else {
          request.setUserId(contactId);
        }

        this.client.getContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              const data = response.getData().toObject();
              // data.image = data.photo ? 'data:image/png;base64,'.concat(data.photo) : null;
              resolve({
                data: data
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

    deleteContact = (contactId, contactIds = []) => {
      // TODO :: @ramazan, @ahmet remove contactId field & if contactIds comes as integer convert to list.
      return new Promise((resolve, reject) => {
        const request = new DeleteContactRequest();
        request.setId(contactId);
        request.setIdsList(contactIds);
        this.client.deleteContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
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

    moveContact = (destinationAddressBookId, contactIds = []) => {
      return new Promise((resolve, reject) => {
        const request = new MoveContactRequest();
        request.setDestinationAddressBookId(destinationAddressBookId);
        request.setContactIdList(contactIds);
        this.client.moveContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

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
        });
      });
    };

    upsertLabel = (labelId, lablelData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertLabelRequest();
        const label = new Label();
        label.setId(labelId);
        label.setName(lablelData.name);
        label.setColor(lablelData.color);
        request.setLabel(label);
        request.setContactsList(lablelData.contacts);

        this.client.upsertLabel(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                message: 'successfully'
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

    listLabel = (addressBookId) => {
      return new Promise((resolve, reject) => {
        const request = new ListLabelRequest();
        request.setAddressBookId(addressBookId);

        this.client.listLabel(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
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
        });
      });
    };

    getLabel = (labelId, hasContacts) => {
      return new Promise((resolve, reject) => {
        const request = new GetLabelRequest();
        request.setId(labelId);
        request.setHasContacts(hasContacts);

        this.client.getLabel(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                label: response.getLabel().toObject(),
                contacts: response
                  .getContactsList()
                  .map((data) => data.toObject())
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

    deleteLabel = (labelId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteLabelRequest();
        request.setId(labelId);

        this.client.deleteLabel(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
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

    upsertLabelToContact = (contactId, contactType, labels) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertLabelToContactRequest();

        if (contactType === 1) {
          request.setUserId(contactId);
        } else {
          request.setContactId(contactId);
        }

        request.setLabelsList(labels);

        this.client.upsertLabelToContact(
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
                  message: 'successfully'
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

    starContact = (contactId, contactType, starred) => {
      return new Promise((resolve, reject) => {
        const request = new StarContactRequest();

        if (contactType === 1) {
          request.setUserId(contactId);
        } else {
          request.setContactId(contactId);
        }

        request.setStarred(starred);

        this.client.starContact(
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

    exportContact = (addressBookId, mode, contactList = []) => {
      return new Promise((resolve, reject) => {
        const request = new ExportContactRequest();
        request.setAddressBookId(addressBookId);
        // TOOD :: Change this method name @akucuk
        request.setContactListList(contactList);
        request.setMode(mode);

        this.client.exportContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                file: response.getFile_asB64()
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

    importContact = (addressBookId, contactList) => {
      return new Promise((resolve, reject) => {
        const request = new ImportContactRequest();
        request.setAddressBookId(addressBookId);

        const addressBook = new AddressBook();
        addressBook.setId(addressBookId);

        const contactArray = [];

        for (const contactData of contactList) {
          const contact = new ContactProto();

          contact.setAddressBook(addressBook);
          contact.setId(contactData.id);
          contact.setTitle(contactData.title);
          contact.setCompany(contactData.company);
          contact.setName(contactData.name);
          contact.setMiddleName(contactData.middle_name);
          contact.setSurname(contactData.surname);

          const emailList = [];
          if (contactData.emailList && Array.isArray(contactData.emailList)){
            for (const email of contactData.emailList) {
              const emailType = new davType();
              emailType.setType(email?.type || 'personal');
              emailType.setValue(email?.value || '');
              emailType.setIsDefault(email?.is_default || false);
              emailList.push(emailType);
            }
          }
          const phoneList = [];
          if (contactData.phoneList && Array.isArray(contactData.phoneList)){
            for (const phone of contactData.phoneList) {
              const phoneType = new davType();
              phoneType.setType(phone?.type || 'personal');
              phoneType.setValue(phone?.value || '');
              phoneType.setIsDefault(phone?.is_default || false);
              phoneList.push(phoneType);
            }
          }
          const webList = [];
          if (contactData.webList && Array.isArray(contactData.webList)){
            for (const web of contactData.webList) {
              const webType = new davType();
              webType.setType(web?.type || 'personal');
              webType.setValue(web?.value || '');
              webType.setIsDefault(web?.is_default || false);
              webList.push(webType);
            }
          }

          const addressList = [];
          if (contactData.addressList && Array.isArray(contactData.addressList)){
            for (const address of contactData.addressList) {
              const addressType = new Address();
              addressType.setType(address?.type || 'personal');
              addressType.setIsDefault(address?.default || false);
              addressType.setStreet(address?.street || '');
              addressType.setCity(address?.city || '');
              addressType.setRegion(address?.region || '');
              addressType.setPostalcode(address?.postalcode || '');
              addressType.setCountry(address?.country || '');
              addressList.push(addressType);
            }
          }

          contact.setEmailList(emailList);
          contact.setPhoneList(phoneList);
          contact.setWebList(webList);
          contact.setAddressList(addressList);
          contact.setNote(contactData.note);

          // request.setLabelsList(contactData.labelsList);
          contactArray.push(contact);
        }
        request.setContactList(contactArray);

        this.client.importContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                message: response.getMessage()
                // file: response.getFile_asB64()
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

    listDuplicateContact = () => {
      return new Promise((resolve, reject) => {
        const request = new ListDuplicateContactRequest();
        // request.setQuery([]);

        // const query = new Query();
        // query.setQuery(queryRequest.query);
        // query.setPage(queryRequest.page);
        // query.setPerPage(queryRequest.perPage);
        // query.setSearchFieldsList(queryRequest.searchFields);

        // const meta = new ContactMetaQuery();
        // meta.setLabel(queryRequest.label);
        // meta.setStarred(queryRequest.starred);
        // meta.setFrequently(queryRequest.frequently);
        //
        // request.setQuery(query);
        // request.setMeta(meta);
        //
        // request.setAddressBookId(addressBookId);

        this.client.listDuplicateContact(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
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
        });
      });
    };

  };

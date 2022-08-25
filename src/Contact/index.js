import {
  ListAddressBookRequest,
  ListContactRequest,
  UpsertAddressBookRequest,
  UpsertContactRequest,
  AddressBook,
  Contact,
  Label,
  Query,
  davType,
  Address,
  GetContactRequest,
  ContactMetaQuery,
  DeleteContactRequest,
  DeleteAddressBookRequest,
  UpsertLabelRequest,
  ListLabelRequest,
  GetLabelRequest,
  DeleteLabelRequest,
  UpsertContactLabelRequest,
  UpsertContactStarRequest,
  ExportContactRequest,
} from './service-pb.cjs';

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

    listContact = (addressBookId, queryReq = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListContactRequest();
        // request.setQuery([]);

        const query = new Query();
        query.setQuery(queryReq.query);
        query.setPage(queryReq.page);
        query.setPerPage(queryReq.perPage);
        query.setSearchFieldsList(queryReq.searchFields);

        const meta = new ContactMetaQuery();
        meta.setLabel(queryReq.label);
        meta.setStarred(queryReq.starred);
        meta.setFrequently(queryReq.frequently);

        request.setQuery(query);
        request.setMeta(meta);

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
              reject({
                code: -1,
                message: error.message
              });
            } else {
              const code = response.getCode();

              if (code == 0) {
                resolve({
                  code: 0,
                  message: 'successfully',
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

    upsertContact = (addressBookId, contactData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertContactRequest();

        const addressBook = new AddressBook();
        addressBook.setId(addressBookId);
        const contact = new Contact();

        contact.setAddressBook(addressBook);
        contact.setId(contactData.id);
        contact.setTitle(contactData.title);
        contact.setCompany(contactData.company);
        contact.setName(contactData.name);
        contact.setMiddleName(contactData.middle_name);
        contact.setSurname(contactData.surname);

        const emailList = [];
        for (const email of contactData.emailList) {
          const emailType = new davType();
          emailType.setType(email.type);
          emailType.setValue(email.value);
          emailType.setDefault(email.default);
          emailList.push(emailType);
        }
        const phoneList = [];
        for (const phone of contactData.phoneList) {
          const phoneType = new davType();
          phoneType.setType(phone.type);
          phoneType.setValue(phone.value);
          phoneType.setDefault(phone.default);
          phoneList.push(phoneType);
        }
        const webList = [];
        for (const web of contactData.webList) {
          const webType = new davType();
          webType.setType(web.type);
          webType.setValue(web.value);
          webType.setDefault(web.default);
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
          addressType.setDefault(address.default);
          addressList.push(addressType);
        }

        contact.setEmailList(emailList);
        contact.setPhoneList(phoneList);
        contact.setWebList(webList);
        contact.setAddressList(addressList);
        contact.setNote(contactData.note);

        request.setContact(contact);

        this.client.upsertContact(
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
                resolve({
                  code: 0,
                  message: 'successfully',
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

    getContact = (contactId) => {
      return new Promise((resolve, reject) => {
        const request = new GetContactRequest();
        request.setId(contactId);
        this.client.getContact(
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
                const data = response.getData().toObject()
                resolve({
                  data: data,
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

    deleteContact = (contactId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteContactRequest();
        console.log('deleteContact', contactId);
        request.setId(contactId);
        this.client.deleteContact(
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
                resolve({
                  message: response.getMessage(),
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
        console.log('addressBookId', addressBookId);
        request.setId(addressBookId);
        this.client.deleteAddressBook(
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
                resolve({
                  message: response.getMessage(),
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

    upsertLabel = (labelId, lablelData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertLabelRequest();
        const label = new Label();
        label.setId(labelId);
        label.setName(lablelData.name);
        label.setColor(lablelData.color);
        request.setLabel(label);
        request.setContacsList(lablelData.contacts);

        this.client.upsertLabel(
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
                resolve({
                  code: 0,
                  message: 'successfully',
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

    listLabel = (addressBookId) => {
      return new Promise((resolve, reject) => {
        const request = new ListLabelRequest();
        request.setAddressBookId(addressBookId);

        this.client.listLabel(
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
                console.log('!!!!!!!!!!!!getDataList', response.getDataList());
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

    getLabel = (labelId, hasContacts) => {
      return new Promise((resolve, reject) => {
        const request = new GetLabelRequest();
        request.setId(labelId);
        request.setHasContacts(hasContacts);

        this.client.getLabel(
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
                console.log('RESPONSE', response);
                console.log('LABEL', response.getLabel());
                console.log('CONTACTS', response.getContactsList());

                resolve({
                  label: response.getLabel().toObject(),
                  contacts: response.getContactsList().map((data) => data.toObject()),
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

    deleteLabel = (labelId) => {
      return new Promise((resolve, reject) => {
        const request = new DeleteLabelRequest();
        request.setId(labelId);

        this.client.deleteLabel(
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

    upsertContactLabel = (contactId, labels) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertContactLabelRequest();
        request.setContactId(contactId);
        request.setLabelsList(labels);
        this.client.upsertContactLabel(
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
                resolve({
                  code: 0,
                  message: 'successfully',
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

    upsertContactStar = (contactId, starred) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertContactStarRequest();
        request.setId(contactId);
        request.setStarred(starred);
        this.client.upsertContactStar(
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
                resolve({
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
          }
        );
      });
    };

    exportContact = (addressBookId, mode, contactList = []) => {
      return new Promise((resolve, reject) => {
        const request = new ExportContactRequest();
        // request.setId(contactId);
        // request.setStarred(starred);

        console.log('CONTAT LIST FOR EXPORT', contactList);

        request.setAddressBookId(addressBookId);
        // TOOD :: Change this method name @akucuk
        request.setContactListList(contactList);
        request.setMode(mode);

        this.client.exportContact(
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
                resolve({
                  code: 0,
                  file: response.getFile_asB64(),
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

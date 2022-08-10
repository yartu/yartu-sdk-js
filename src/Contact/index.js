import { ListAddressBookRequest, ListContactRequest, UpsertContactRequest, AddressBook, Contact, davType } from './service-pb.cjs';
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

    upsertContact = (addressBookId, contactData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertContactRequest();

        const addressBook = new AddressBook();
        addressBook.setId(addressBookId);
        const contact = new Contact();

        contact.setAddressBook(addressBook);""
        contact.setTitle(contactData.title);
        contact.setCompany(contactData.company);
        contact.setName(contactData.name);
        contact.setMiddleName(contactData.middle_name);
        contact.setSurname(contactData.surname);

        const emailList = [];
        for (const email of contactData.email) {
          const emailType = new davType();
          emailType.setType(email.type);
          emailType.setValue(email.value);
          emailType.setDefault(email.default);
          emailList.push(emailType);
        }
        const phoneList = [];
        for (const phone of contactData.phone) {
          const phoneType = new davType();
          phoneType.setType(phone.type);
          phoneType.setValue(phone.value);
          phoneType.setDefault(phone.default);
          phoneList.push(phoneType);
        }
        const webList = [];
        for (const web of contactData.web) {
          const webType = new davType();
          webType.setType(web.type);
          webType.setValue(web.value);
          webType.setDefault(web.default);
          webList.push(webType);
        }
        const addressList = [];
        for (const address of contactData.address) {
          const addressType = new davType();
          addressType.setType(address.type);
          addressType.setValue(address.value);
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
  };

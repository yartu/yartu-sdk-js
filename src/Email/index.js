export default (config) =>
  class Email {
    endpoint = 'http://localhost:5001';
    client = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      // this.client = new YSearchClient(this.endpoint, '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listMessages(folder, filter, pagination={}) {
      return new Promise((resolve, reject) => {
        resolve({
          messages: [
            {
              id: 0,
              subject: 'Bu fırsatlr kaçmaz!',
              from: [{ email: 'ahmet@yartu.io', name: 'Ahmet', surname: 'Küçük' }],
              to: [],
              cc: [],
              bcc: [],
              snippet: 'Bu fırsatlr kaçmaz! 1',
              date: new Date(),
              starred: false,
              read: true,
              attachments: [],
              events: [],
              folder: 'inbox',
            },
            {
              id: 2,
              subject: 'Bu fırsatlr kaçmaz!',
              from: [{ email: 'ahmet@yartu.io', name: 'Ahmet', surname: 'Küçük' }],
              to: [],
              cc: [],
              bcc: [],
              snippet: 'Bu fırsatlr kaçmaz!',
              starred: true,
              date: new Date(),
              read: true,
              attachments: ['file_1'],
              events: [],
              folder: 'inbox',
            },
            {
              id: 3,
              subject: 'Bu fırsatlr kaçmaz!',
              from: [{ email:  'ramazan@yartu.io', name: 'Ramazan', surname: 'Tarakçı' }],
              to: [],
              cc: [],
              bcc: [],
              snippet: 'Bu fırsatlr kaçmaz!',
              date: new Date(),
              starred: false,
              read: true,
              attachments: [],
              events: [],
              folder: 'inbox',
            },
            {
              id: 4,
              subject: 'Bu fırsatlr kaçmaz!',
              from: [{ email:  'aziz@yartu.io', name: 'Aziz', surname: 'Şahin' }],
              to: [],
              cc: [],
              bcc: [],
              snippet: 'Bu fırsatlr kaçmaz!',
              date: new Date(),
              starred: false,
              read: true,
              attachments: [],
              events: [],
              folder: 'inbox',
            },
          ]
        })
      })
    }
    
    listFolders() {
      return new Promise((resolve, reject) => {
        resolve({
          folders: [
            {
              id: 0,
              displayname: 'Inbox',
              isDefault: true,
            },
            {
              id: 1,
              displayname: 'Sent',
              isDefault: true,
            },
            {
              id: 2,
              displayname: 'Trash',
              isDefault: true,
            },
            {
              id: 3,
              displayname: 'Archive',
              isDefault: true,
            },
            {
              id: 4,
              displayname: 'Draft',
              isDefault: true,
            },
            {
              id: 5,
              displayname: 'Spam',
              isDefault: true,
            },
            {
              id: 6,
              displayname: 'Ahmet Küçük',
              isDefault: false,
            },
          ]
        })
      })
    }

    upsertEmailFolder(folderId, folderData) {
      return new Promise((resolve, reject) => {
        resolve({
          code: 0,
          message: 'Successfully',
        })
      });
    }
  }

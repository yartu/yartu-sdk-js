import {
  NoteMetaQuery,
  ListNotebookRequest,
  UpsertNotebookRequest,
  ListNoteRequest,
  GetNoteRequest,
  UpsertNoteRequest,
  StarNoteRequest,
  MoveNoteRequest,
  ListNoteLabelRequest,
  UpsertNoteLabelRequest,
} from './service-pb.cjs';

import { YNoteClient } from './service-grpc-web-pb.cjs';
import { Query } from '../utils/definitions_pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Note {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YNoteClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listNotebook = () => {
      return new Promise((resolve, reject) => {
        const request = new ListNotebookRequest();
        const query = new Query();
        const meta = new NoteMetaQuery();

        meta.setFilterType('all');

        request.setQuery(query);
        request.setMeta(meta);

        this.client.listNotebook(
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
    }

    upsertNotebook = (notebookData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertNotebookRequest();

        request.setId(notebookData.id);
        request.setName(notebookData.name);

        this.client.upsertNotebook(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code,
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
    }

    listNote = (notebookId = null, query = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListNoteRequest();
        const queryRequest = new Query();
        const metaRequest = new NoteMetaQuery();

        if (notebookId && notebookId > 0) {
          request.setNotebookId(notebookId);
        }


        if (query.isStarred) {
          metaRequest.setIsStarred(true); 
        }

        if (query.isArchived) {
          metaRequest.setIsArchived(true); 
        }

        if (query.label) {
          metaRequest.setLabelId(query.label); 
        }

        metaRequest.setFilterType(query.filterType || 'all');

        request.setQuery(queryRequest);
        request.setMeta(metaRequest);

        this.client.listNote(
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
    }

    getNote = (noteId) => {
      return new Promise((resolve, reject) => {
        const request = new GetNoteRequest();
        
        request.setId(noteId);

        this.client.getNote(
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
                  data,
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
    }

    upsertNote = (noteData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertNoteRequest();
        
        request.setId(noteData.id);
        request.setTitle(noteData.title);
        request.setContent(noteData.content);
        request.setColor(noteData.color);
        request.setReminder(noteData.reminder);
        
        request.setNotebookId(noteData.notebookId);
        request.setIsPinned(noteData.isPinned);
        request.setIsStarred(noteData.isStarred);
        request.setIsArchived(noteData.isArchived);

        this.client.upsertNote(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                
                let note = null;
                if (response.hasNote()) {
                  note = response.getNote().toObject();
                }

                resolve({
                  code,
                  note,
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
    }

    starNote = (noteData) => {
      return new Promise((resolve, reject) => {
        const request = new StarNoteRequest();
        
        request.setId(noteData.id);
        request.setIsStarred(noteData.isStarred);

        this.client.starNote(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code,
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
    }

    moveNote = (moveData) => {
      return new Promise((resolve, reject) => {
        const request = new MoveNoteRequest();

        request.setNoteIdsList(moveData.ids);
        request.setTargetNotebookId(moveData.targetNotebook);

        this.client.moveNote(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code,
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
    }

    listNoteLabel = () => {
      return new Promise((resolve, reject) => {
        const request = new ListNoteLabelRequest();
        console.log('listNoteLabel SDK');

        this.client.listNoteLabel(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());
              if (code == 0) {
                resolve({
                  code,
                  data: dataList,
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
    }

    upsertNoteLabel = (labelData) => {
      return new Promise((resolve, reject) => {
        const request = new UpsertNoteLabelRequest();
        console.log('listNoteLabel SDK');

        request.setName(labelData.name);
        request.setColor(labelData.color);
        request.setNoteId(labelData.noteId);

        this.client.upsertNoteLabel(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code,
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
    }

    labelData
  }

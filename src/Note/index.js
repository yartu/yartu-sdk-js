import {
  NoteMetaQuery,
  ListNotebookRequest,
  ListNoteRequest,
  GetNoteRequest,
  UpsertNoteRequest,
  StarNoteRequest,
  MoveNoteRequest,
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

    listNote = (notebookId = null, query = {}) => {
      return new Promise((resolve, reject) => {
        const request = new ListNoteRequest();
        const queryRequest = new Query();
        const metaRequest = new NoteMetaQuery();

        if (notebookId && notebookId > 0) {
          request.setNotebookId(notebookId);
        }

        metaRequest.setFilterType('all');
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
        request.setIsPinned(noteData.isStarred);
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
        
        console.log('---->MOVE DATA...', moveData);

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

  }

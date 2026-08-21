import {
  GenerateEmailReplyRequest,
  SummarizeEmailRequest,
  PolishTextRequest,
  //
  SummarizeFileRequest,
  GenerateFileRequest,
  TransformFileRequest,
  MergeFilesRequest,
  //
  ReportCalendarRequest,
  ReportProjectRequest,
  //
  DashboardSummaryRequest,
  //
  ListSenderEmailsRequest,
  //
  GetAiPreferencesRequest,
  SetAiPreferencesRequest
} from './service-pb.cjs';

import { YAiClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';

export default (config) =>
  class Ai {
    endpoint = 'http://localhost:5001';
    client = undefined;
    metadata = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YAiClient(this.endpoint, '', '');

      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    generateEmailReply = ({
      messageUuid = '',
      tone = '',
      instruction = '',
      language = ''
    }) => {
      return new Promise((resolve, reject) => {
        const request = new GenerateEmailReplyRequest();

        request.setMessageUuid(messageUuid);
        request.setTone(tone);
        request.setInstruction(instruction);
        request.setLanguage(language);

        this.client.generateEmailReply(
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
                  text: response.getText()
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

    summarizeEmail = ({
      messageUuid = '',
      language = '',
      subject = null,
      body = null
    }) => {
      return new Promise((resolve, reject) => {
        const request = new SummarizeEmailRequest();

        request.setMessageUuid(messageUuid);
        request.setLanguage(language);

        if (subject !== null) {
          request.setSubject(subject);
        }
        if (body !== null) {
          request.setBody(body);
        }

        this.client.summarizeEmail(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                summary: response.getSummary()
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

    polishText = ({ text, instruction = '', language = '' }) => {
      return new Promise((resolve, reject) => {
        const request = new PolishTextRequest();

        request.setText(text);
        request.setInstruction(instruction);
        request.setLanguage(language);

        this.client.polishText(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                text: response.getText()
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

    summarizeFile = ({ repoId, path, language = '' }) => {
      return new Promise((resolve, reject) => {
        const request = new SummarizeFileRequest();

        request.setRepoId(repoId);
        request.setPath(path);
        request.setLanguage(language);

        this.client.summarizeFile(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                summary: response.getSummary()
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

    generateFile = ({ repoId, parentPath, prompt, fileName, fileType }) => {
      return new Promise((resolve, reject) => {
        const request = new GenerateFileRequest();

        request.setRepoId(repoId);
        request.setParentPath(parentPath);
        request.setPrompt(prompt);
        request.setFileName(fileName);
        request.setFileType(fileType);

        this.client.generateFile(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                fileName: response.getFileName()
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

    transformFile = ({ repoId, path, parentPath, prompt, newFileName }) => {
      return new Promise((resolve, reject) => {
        const request = new TransformFileRequest();

        request.setRepoId(repoId);
        request.setPath(path);
        request.setParentPath(parentPath);
        request.setPrompt(prompt);
        request.setNewFileName(newFileName);

        this.client.transformFile(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                fileName: response.getFileName()
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

    mergeFiles = ({ repoId, paths, parentPath, prompt, newFileName }) => {
      return new Promise((resolve, reject) => {
        const request = new MergeFilesRequest();

        request.setRepoId(repoId);
        request.setPathsList(paths);
        request.setParentPath(parentPath);
        request.setPrompt(prompt);
        request.setNewFileName(newFileName);

        this.client.mergeFiles(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                fileName: response.getFileName()
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

    reportCalendar = ({ rangeType, date = '', language = '' }) => {
      return new Promise((resolve, reject) => {
        const request = new ReportCalendarRequest();

        request.setRangeType(rangeType);
        request.setDate(date);
        request.setLanguage(language);

        this.client.reportCalendar(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                report: response.getReport()
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

    reportProject = ({
      projectUuid = '',
      boardUuid = '',
      language = '',
      instruction = ''
    }) => {
      return new Promise((resolve, reject) => {
        const request = new ReportProjectRequest();

        request.setProjectUuid(projectUuid);
        request.setBoardUuid(boardUuid);
        request.setLanguage(language);
        request.setInstruction(instruction);

        this.client.reportProject(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              resolve({
                code,
                message: response.getMessage(),
                report: response.getReport()
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

    dashboardSummary = ({
      language = '',
      unreadEmailCount = 0,
      pendingReplyCount = 0
    }) => {
      return new Promise((resolve, reject) => {
        const request = new DashboardSummaryRequest();

        request.setLanguage(language);
        request.setUnreadEmailCount(unreadEmailCount);
        request.setPendingReplyCount(pendingReplyCount);

        this.client.dashboardSummary(
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
                  text: response.getText()
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

    listSenderEmails = ({ sender, topic = '', limit = 20 }) => {
      return new Promise((resolve, reject) => {
        const request = new ListSenderEmailsRequest();

        request.setSender(sender);
        request.setTopic(topic);
        request.setLimit(limit);

        this.client.listSenderEmails(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                const data = response
                  .getDataList()
                  .map((email) => email.toObject());
                resolve({
                  code,
                  message: response.getMessage(),
                  data
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

    getAiPreferences = () => {
      return new Promise((resolve, reject) => {
        const request = new GetAiPreferencesRequest();

        this.client.getAiPreferences(
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
                  tone: response.getTone(),
                  language: response.getLanguage()
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

    setAiPreferences = ({ tone = '', language = '' }) => {
      return new Promise((resolve, reject) => {
        const request = new SetAiPreferencesRequest();

        request.setTone(tone);
        request.setLanguage(language);

        this.client.setAiPreferences(
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
    };
  };

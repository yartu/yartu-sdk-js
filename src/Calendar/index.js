import {
  dateRange,
  Attendee,
  //
  ListCalendarRequest,
  DeleteCalendarRequest,
  UpsertCalendarRequest,
  ShareCalendarRequest,
  UnshareCalendarRequest,
  DeleteSharedCalendarRequest,
  //
  ListCalendarObjectRequest,
  UpsertCalendarObjectRequest,
  GetCalendarObjectRequest,
  //
  UpsertCalendarObjectDatesRequest,
  UpsertCalendarObjectSplitRequest,
  ReplyEventRequest,
  SendInviteRequest
} from './service-pb.cjs';

import { YCalendarClient } from './service-grpc-web-pb.cjs';
import { handleError } from '../utils/helper';
import { UserBasic, GroupBasic, Shared } from '../utils/definitions_pb.cjs';

export default (config) =>
  class Calendar {
    endpoint = 'http://localhost:5001';
    client = undefined;
    yartuSdk = undefined;

    constructor(config) {
      this.endpoint = config.endpoint;
      this.client = new YCalendarClient(this.endpoint, '', '');
      const yartu_token = window.localStorage.getItem('yartu-token');
      this.metadata = { Authentication: yartu_token };
    }

    listCalendar() {
      return new Promise((resolve, reject) => {
        const request = new ListCalendarRequest();
        this.client.listCalendar(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response
                .getDataList()
                .map((data) => data.toObject());
              resolve({
                calendars: dataList
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

    deleteCalendar(calendarId) {
      return new Promise((resolve, reject) => {
        const request = new DeleteCalendarRequest();
        request.setId(calendarId);
        this.client.deleteCalendar(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();
              if (code == 0) {
                resolve({
                  code: 0
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

    listCalendarObject(calendars = [], range = {}) {
      return new Promise((resolve, reject) => {
        const request = new ListCalendarObjectRequest();
        const rangeRequest = new dateRange();
        rangeRequest.setStart(range.start);
        rangeRequest.setEnd(range.end);
        request.setRange(rangeRequest);
        request.setCalendarsList(calendars);

        this.client.listCalendarObject(
          request,
          this.metadata,
          (error, response) => {
            if (error) {
              handleError(error, reject);
            } else {
              const code = response.getCode();

              if (code == 0) {
                const dataList = response.getDataList().map((data) => {
                  const result = data.toObject();
                  result.rrule = data.hasRrule() ? data.getRrule() : null;
                  result.exdate = result.exdateList;
                  result.groupId = data.getGroupid();
                  return result;
                });

                resolve({
                  calendarObjects: dataList
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

    upsertCalendar(calnedarId, calendarData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCalendarRequest();

        request.setId(calnedarId);
        request.setDisplayname(calendarData.displayname);
        request.setCalendarcolor(calendarData.calendarcolor);
        request.setCaldav(calendarData.caldav);

        this.client.upsertCalendar(
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
                  message: 'success'
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

    upsertCalendarObject(calendarObjectData = {}) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCalendarObjectRequest();

        request.setStart(calendarObjectData.start);
        request.setStartTimeZone(calendarObjectData?.startTimeZone);
        request.setEnd(calendarObjectData.end);
        request.setEndTimeZone(calendarObjectData?.endTimeZone);
        request.setSummary(calendarObjectData.summary);
        request.setLocation(calendarObjectData.location);
        request.setDescription(calendarObjectData.description);
        request.setFreq(calendarObjectData.freq);
        request.setComponenttype(calendarObjectData.componenttype);
        request.setSendInvite(calendarObjectData.setSendInvite);
        request.setMessage(calendarObjectData.message);

        const attendes = [];
        for (const attendee of calendarObjectData.attendeesList) {
          // DELETED': -1, 'NEEDS-ACTION': 0, 'ACCEPTED': 1, 'DECLINED': 2, 'TENTATIVE': 3
          const attendeeObject = new Attendee();
          attendeeObject.setEmail(attendee.email);
          attendeeObject.setStatus('NEEDS-ACTION');
          attendes.push(attendeeObject);
        }

        request.setAttendeesList(attendes);
        request.setAllday(calendarObjectData.allDay);

        // calendarObject.addAlarms(calendarObjectData.alarms);

        request.setConference(calendarObjectData.conference);
        request.setBusy(calendarObjectData.busy);
        request.setStatus(calendarObjectData.status);
        request.setId(calendarObjectData.id);
        request.setCalendarId(calendarObjectData.calendar_id);

        this.client.upsertCalendarObject(
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
                  message: 'success'
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

    getCalendarObject(calendarObjectId) {
      return new Promise((resolve, reject) => {
        const request = new GetCalendarObjectRequest();
        request.setId(calendarObjectId);

        this.client.getCalendarObject(
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
                  calendarObject: data
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

    upsertCalendarObjectDates(calendarObjectId, start, end) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCalendarObjectDatesRequest();
        request.setId(calendarObjectId);
        request.setStart(start);
        request.setEnd(end);

        this.client.upsertCalendarObjectDates(
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
    }

    upsertCalendarObjectSplit(calendarObjectId, splitData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCalendarObjectSplitRequest();

        request.setId(calendarObjectId);
        request.setSelectedDate(splitData.selectedDate);
        request.setSplitMode(splitData.splitMode);
        request.setActionMode(splitData.actionMode);
        request.setOrder(splitData.order);

        if (splitData?.summary) {
          request.setSummary(splitData.summary);
        }

        if (splitData?.location) {
          request.setLocation(splitData.location);
        }

        if (splitData?.description) {
          request.setDescription(splitData.description);
        }

        if (splitData?.newStart) {
          request.setNewDateStart(splitData.newStart);
        }

        if (splitData?.newEnd) {
          request.setNewDateEnd(splitData.newEnd);
        }

        if (splitData.uid) {
          request.setUid(splitData.uid);
        }

        this.client.upsertCalendarObjectSplit(
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

    deleteCalendarObject(calendarObjectId) {
      return new Promise((resolve, reject) => {
        const request = new GetCalendarObjectRequest();
        request.setId(calendarObjectId);

        this.client.deleteCalendarObject(
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
    }

    shareCalendar(calendarId, shareList) {
      return new Promise((resolve, reject) => {
        const request = new ShareCalendarRequest();
        request.setId(calendarId);

        const UserShareList = [];
        shareList.forEach((s) => {
          const shared = new Shared();
          if (s?.isYartuUser) {
            const userBasic = new UserBasic();
            userBasic.setId(s.id);
            userBasic.setUsername(s.email || s.username);
            userBasic.setName(s.name);
            userBasic.setSurname(s.surname);

            shared.setUser(userBasic);
          } else if (s?.isGroup) {
            const groupBasic = new GroupBasic();
            groupBasic.setId(s.id);
            groupBasic.setName(s.name);
            groupBasic.setEmailAlias(s.email);

            shared.setGroup(groupBasic);
          } else {
            console.log(
              '@yartu/sdk/ shareNotebook method not supports external users and Realm share features for now!'
            );
          }

          shared.setPermission(s.permission);
          UserShareList.push(shared);
        });

        request.setSharedList(UserShareList);

        this.client.shareCalendar(request, this.metadata, (error, response) => {
          if (error) {
            handleError(error, reject);
          } else {
            const code = response.getCode();

            if (code == 0) {
              resolve({
                code: 0,
                success: response
                  .getSuccessList()
                  .map((data) => data.toObject()),
                error: response.getErrorList().map((data) => data.toObject()),
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

    unshareCalendar(calendarId) {
      return new Promise((resolve, reject) => {
        const request = new UnshareCalendarRequest();
        request.setId(calendarId);

        this.client.unshareCalendar(
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
    }

    deleteSharedCalendar(calendarId, sharedCalendarId) {
      return new Promise((resolve, reject) => {
        const request = new DeleteSharedCalendarRequest();
        request.setId(calendarId);
        request.setSharedCalendarId(sharedCalendarId);

        this.client.deleteSharedCalendar(
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
    }

    listCalendarSharedList(calendarId) {
      return new Promise((resolve, reject) => {
        const request = new ShareCalendarRequest();
        request.setId(calendarId);

        this.client.listCalendarSharedList(
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
                  users: dataList
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

    replyEvent(calendarObjectUid, status) {
      return new Promise((resolve, reject) => {
        const request = new ReplyEventRequest();
        console.log('calendarObjectUid', calendarObjectUid);
        console.log('status', status);
        request.setUid(calendarObjectUid);
        request.setStatus(status);

        this.client.replyEvent(request, this.metadata, (error, response) => {
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
        });
      });
    }

    sendInvite(calendarObjectId, toUser = '', externalMessage = '') {
      return new Promise((resolve, reject) => {
        const request = new SendInviteRequest();

        request.setId(calendarObjectId);
        request.setTo(toUser);
        request.setMessage(externalMessage);

        this.client.sendInvite(request, this.metadata, (error, response) => {
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
        });
      });
    }
  };

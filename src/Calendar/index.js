import {
  ListCalendarRequest,
  ListCalendarObjectRequest,
  UpsertCalendarRequest,
  dateRange,
  UpsertCalendarObjectRequest,
  CalendarObject,
  Attendee,
  GetCalendarObjectRequest,
  UpsertCalendarObjectDatesRequest,
} from './service-pb.cjs';

import { YCalendarClient } from './service-grpc-web-pb.cjs';

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
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();
            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                calendars: dataList,
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

    listCalendarObject(calendars=[], range = {}) {
      return new Promise((resolve, reject) => {
        const request = new ListCalendarObjectRequest();
        const rangeRequest = new dateRange();
        rangeRequest.setStart(range.start);
        rangeRequest.setEnd(range.end);
        request.setRange(rangeRequest);
        request.setCalendarsList(calendars);

        this.client.listCalendarObject(request, this.metadata, (error, response) => {
          if (error) {
            reject({
              code: -1,
              message: error.message
            });
          } else {
            const code = response.getCode();

            if (code == 0) {
              const dataList = response.getDataList().map((data) => data.toObject());
              resolve({
                calendarObjects: dataList,
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

    upsertCalendar(calnedarId, calendarData) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCalendarRequest();

        request.setId(calnedarId);
        request.setDisplayname(calendarData.displayname);
        request.setCalendarcolor(calendarData.calendarcolor);
        request.setCaldav(calendarData.caldav);

        this.client.upsertCalendar(request, this.metadata, (error, response) => {
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
                message: 'success'
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

    upsertCalendarObject(calendarObjectData = {}) {""
      return new Promise((resolve, reject) => {
        const request = new UpsertCalendarObjectRequest();

        request.setStart(calendarObjectData.start);
        request.setEnd(calendarObjectData.end);
        request.setSummary(calendarObjectData.summary);
        request.setLocation(calendarObjectData.location);
        request.setDescription(calendarObjectData.description);
        request.setRrule(calendarObjectData.rrule);
        request.setComponenttype(calendarObjectData.componenttype);

        const attendes = [];
        for (const attendee of calendarObjectData.attendeesList) {
          // DELETED': -1, 'NEEDS-ACTION': 0, 'ACCEPTED': 1, 'DECLINED': 2, 'TENTATIVE': 3
          const attendeeObject = new Attendee();
          attendeeObject.setEmail(attendee.email)
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

        this.client.upsertCalendarObject(request, this.metadata, (error, response) => {
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
                message: 'success'
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

    getCalendarObject(calendarObjectId) {
      return new Promise((resolve, reject) => {
        const request = new GetCalendarObjectRequest();
        request.setId(calendarObjectId);

        this.client.getCalendarObject(request, this.metadata, (error, response) => {
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
                calendarObject: data,
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

    upsertCalendarObjectDates(calendarObjectId, start, end) {
      return new Promise((resolve, reject) => {
        const request = new UpsertCalendarObjectDatesRequest();
        request.setId(calendarObjectId);
        request.setStart(start);
        request.setEnd(end);

        this.client.upsertCalendarObjectDates(request, this.metadata, (error, response) => {
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
        });
      });
    }

};

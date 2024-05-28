/**
 * @fileoverview gRPC-Web generated client stub for yartu
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.0
// source: notification/grpc/service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_grpc_definitions_pb = require('../utils/definitions_pb.cjs')
const proto = {};
proto.yartu = require('./service-pb.cjs');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yartu.YNotificationClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yartu.YNotificationPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListNotificationRequest,
 *   !proto.yartu.ListNotificationResponse>}
 */
const methodDescriptor_YNotification_listNotification = new grpc.web.MethodDescriptor(
  '/yartu.YNotification/listNotification',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListNotificationRequest,
  proto.yartu.ListNotificationResponse,
  /**
   * @param {!proto.yartu.ListNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNotificationClient.prototype.listNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNotification/listNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_listNotification,
      callback);
};


/**
 * @param {!proto.yartu.ListNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotificationPromiseClient.prototype.listNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNotification/listNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_listNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertNotificationRequest,
 *   !proto.yartu.UpsertNotificationResponse>}
 */
const methodDescriptor_YNotification_upsertNotification = new grpc.web.MethodDescriptor(
  '/yartu.YNotification/upsertNotification',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertNotificationRequest,
  proto.yartu.UpsertNotificationResponse,
  /**
   * @param {!proto.yartu.UpsertNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNotificationClient.prototype.upsertNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNotification/upsertNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_upsertNotification,
      callback);
};


/**
 * @param {!proto.yartu.UpsertNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotificationPromiseClient.prototype.upsertNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNotification/upsertNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_upsertNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ReadNotificationRequest,
 *   !proto.yartu.ReadNotificationResponse>}
 */
const methodDescriptor_YNotification_readNotification = new grpc.web.MethodDescriptor(
  '/yartu.YNotification/readNotification',
  grpc.web.MethodType.UNARY,
  proto.yartu.ReadNotificationRequest,
  proto.yartu.ReadNotificationResponse,
  /**
   * @param {!proto.yartu.ReadNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ReadNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ReadNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ReadNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ReadNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNotificationClient.prototype.readNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNotification/readNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_readNotification,
      callback);
};


/**
 * @param {!proto.yartu.ReadNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ReadNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotificationPromiseClient.prototype.readNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNotification/readNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_readNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteNotificationRequest,
 *   !proto.yartu.DeleteNotificationResponse>}
 */
const methodDescriptor_YNotification_deleteNotification = new grpc.web.MethodDescriptor(
  '/yartu.YNotification/deleteNotification',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteNotificationRequest,
  proto.yartu.DeleteNotificationResponse,
  /**
   * @param {!proto.yartu.DeleteNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNotificationClient.prototype.deleteNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNotification/deleteNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_deleteNotification,
      callback);
};


/**
 * @param {!proto.yartu.DeleteNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotificationPromiseClient.prototype.deleteNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNotification/deleteNotification',
      request,
      metadata || {},
      methodDescriptor_YNotification_deleteNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListScheduleRequest,
 *   !proto.yartu.ListScheduleResponse>}
 */
const methodDescriptor_YNotification_listSchedule = new grpc.web.MethodDescriptor(
  '/yartu.YNotification/listSchedule',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListScheduleRequest,
  proto.yartu.ListScheduleResponse,
  /**
   * @param {!proto.yartu.ListScheduleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListScheduleResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListScheduleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListScheduleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListScheduleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNotificationClient.prototype.listSchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNotification/listSchedule',
      request,
      metadata || {},
      methodDescriptor_YNotification_listSchedule,
      callback);
};


/**
 * @param {!proto.yartu.ListScheduleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListScheduleResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotificationPromiseClient.prototype.listSchedule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNotification/listSchedule',
      request,
      metadata || {},
      methodDescriptor_YNotification_listSchedule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteScheduleRequest,
 *   !proto.yartu.DeleteScheduleResponse>}
 */
const methodDescriptor_YNotification_deleteSchedule = new grpc.web.MethodDescriptor(
  '/yartu.YNotification/deleteSchedule',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteScheduleRequest,
  proto.yartu.DeleteScheduleResponse,
  /**
   * @param {!proto.yartu.DeleteScheduleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteScheduleResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteScheduleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteScheduleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteScheduleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNotificationClient.prototype.deleteSchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNotification/deleteSchedule',
      request,
      metadata || {},
      methodDescriptor_YNotification_deleteSchedule,
      callback);
};


/**
 * @param {!proto.yartu.DeleteScheduleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteScheduleResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotificationPromiseClient.prototype.deleteSchedule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNotification/deleteSchedule',
      request,
      metadata || {},
      methodDescriptor_YNotification_deleteSchedule);
};


module.exports = proto.yartu;


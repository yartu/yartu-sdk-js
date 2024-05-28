/**
 * @fileoverview gRPC-Web generated client stub for yartu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


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
proto.yartu.YCalendarClient =
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
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yartu.YCalendarPromiseClient =
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
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetCalendarRequest,
 *   !proto.yartu.GetCalendarResponse>}
 */
const methodDescriptor_YCalendar_getCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/getCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetCalendarRequest,
  proto.yartu.GetCalendarResponse,
  /**
   * @param {!proto.yartu.GetCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.getCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/getCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_getCalendar,
      callback);
};


/**
 * @param {!proto.yartu.GetCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.getCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/getCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_getCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCalendarRequest,
 *   !proto.yartu.UpsertCalendarResponse>}
 */
const methodDescriptor_YCalendar_upsertCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/upsertCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCalendarRequest,
  proto.yartu.UpsertCalendarResponse,
  /**
   * @param {!proto.yartu.UpsertCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.upsertCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendar,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.upsertCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCalendarRequest,
 *   !proto.yartu.DeleteCalendarResponse>}
 */
const methodDescriptor_YCalendar_deleteCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/deleteCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCalendarRequest,
  proto.yartu.DeleteCalendarResponse,
  /**
   * @param {!proto.yartu.DeleteCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.deleteCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/deleteCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_deleteCalendar,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.deleteCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/deleteCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_deleteCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCalendarRequest,
 *   !proto.yartu.ListCalendarResponse>}
 */
const methodDescriptor_YCalendar_listCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/listCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCalendarRequest,
  proto.yartu.ListCalendarResponse,
  /**
   * @param {!proto.yartu.ListCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.listCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/listCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_listCalendar,
      callback);
};


/**
 * @param {!proto.yartu.ListCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.listCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/listCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_listCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ShareCalendarRequest,
 *   !proto.yartu.ShareCalendarResponse>}
 */
const methodDescriptor_YCalendar_shareCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/shareCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.ShareCalendarRequest,
  proto.yartu.ShareCalendarResponse,
  /**
   * @param {!proto.yartu.ShareCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ShareCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ShareCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ShareCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ShareCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.shareCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/shareCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_shareCalendar,
      callback);
};


/**
 * @param {!proto.yartu.ShareCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ShareCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.shareCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/shareCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_shareCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UnshareCalendarRequest,
 *   !proto.yartu.UnshareCalendarResponse>}
 */
const methodDescriptor_YCalendar_unshareCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/unshareCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnshareCalendarRequest,
  proto.yartu.UnshareCalendarResponse,
  /**
   * @param {!proto.yartu.UnshareCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnshareCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnshareCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnshareCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnshareCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.unshareCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/unshareCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_unshareCalendar,
      callback);
};


/**
 * @param {!proto.yartu.UnshareCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnshareCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.unshareCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/unshareCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_unshareCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteSharedCalendarRequest,
 *   !proto.yartu.DeleteSharedCalendarResponse>}
 */
const methodDescriptor_YCalendar_deleteSharedCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/deleteSharedCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteSharedCalendarRequest,
  proto.yartu.DeleteSharedCalendarResponse,
  /**
   * @param {!proto.yartu.DeleteSharedCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteSharedCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteSharedCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteSharedCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteSharedCalendarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.deleteSharedCalendar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/deleteSharedCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_deleteSharedCalendar,
      callback);
};


/**
 * @param {!proto.yartu.DeleteSharedCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteSharedCalendarResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.deleteSharedCalendar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/deleteSharedCalendar',
      request,
      metadata || {},
      methodDescriptor_YCalendar_deleteSharedCalendar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCalendarSharedListRequest,
 *   !proto.yartu.ListCalendarSharedListResponse>}
 */
const methodDescriptor_YCalendar_listCalendarSharedList = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/listCalendarSharedList',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCalendarSharedListRequest,
  proto.yartu.ListCalendarSharedListResponse,
  /**
   * @param {!proto.yartu.ListCalendarSharedListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCalendarSharedListResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCalendarSharedListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCalendarSharedListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCalendarSharedListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.listCalendarSharedList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/listCalendarSharedList',
      request,
      metadata || {},
      methodDescriptor_YCalendar_listCalendarSharedList,
      callback);
};


/**
 * @param {!proto.yartu.ListCalendarSharedListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCalendarSharedListResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.listCalendarSharedList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/listCalendarSharedList',
      request,
      metadata || {},
      methodDescriptor_YCalendar_listCalendarSharedList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetCalendarObjectRequest,
 *   !proto.yartu.GetCalendarObjectResponse>}
 */
const methodDescriptor_YCalendar_getCalendarObject = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/getCalendarObject',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetCalendarObjectRequest,
  proto.yartu.GetCalendarObjectResponse,
  /**
   * @param {!proto.yartu.GetCalendarObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetCalendarObjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetCalendarObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetCalendarObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.getCalendarObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/getCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_getCalendarObject,
      callback);
};


/**
 * @param {!proto.yartu.GetCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetCalendarObjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.getCalendarObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/getCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_getCalendarObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCalendarObjectRequest,
 *   !proto.yartu.UpsertCalendarObjectResponse>}
 */
const methodDescriptor_YCalendar_upsertCalendarObject = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/upsertCalendarObject',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCalendarObjectRequest,
  proto.yartu.UpsertCalendarObjectResponse,
  /**
   * @param {!proto.yartu.UpsertCalendarObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCalendarObjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCalendarObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCalendarObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.upsertCalendarObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendarObject,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCalendarObjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.upsertCalendarObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendarObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCalendarObjectRequest,
 *   !proto.yartu.DeleteCalendarObjectReseponse>}
 */
const methodDescriptor_YCalendar_deleteCalendarObject = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/deleteCalendarObject',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCalendarObjectRequest,
  proto.yartu.DeleteCalendarObjectReseponse,
  /**
   * @param {!proto.yartu.DeleteCalendarObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCalendarObjectReseponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCalendarObjectReseponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCalendarObjectReseponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.deleteCalendarObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/deleteCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_deleteCalendarObject,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCalendarObjectReseponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.deleteCalendarObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/deleteCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_deleteCalendarObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCalendarObjectRequest,
 *   !proto.yartu.ListCalendarObjectResponse>}
 */
const methodDescriptor_YCalendar_listCalendarObject = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/listCalendarObject',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCalendarObjectRequest,
  proto.yartu.ListCalendarObjectResponse,
  /**
   * @param {!proto.yartu.ListCalendarObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCalendarObjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCalendarObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCalendarObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.listCalendarObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/listCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_listCalendarObject,
      callback);
};


/**
 * @param {!proto.yartu.ListCalendarObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCalendarObjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.listCalendarObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/listCalendarObject',
      request,
      metadata || {},
      methodDescriptor_YCalendar_listCalendarObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCalendarObjectDatesRequest,
 *   !proto.yartu.UpsertCalendarObjectDatesResponse>}
 */
const methodDescriptor_YCalendar_upsertCalendarObjectDates = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/upsertCalendarObjectDates',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCalendarObjectDatesRequest,
  proto.yartu.UpsertCalendarObjectDatesResponse,
  /**
   * @param {!proto.yartu.UpsertCalendarObjectDatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCalendarObjectDatesResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCalendarObjectDatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCalendarObjectDatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCalendarObjectDatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.upsertCalendarObjectDates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendarObjectDates',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendarObjectDates,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCalendarObjectDatesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCalendarObjectDatesResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.upsertCalendarObjectDates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendarObjectDates',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendarObjectDates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCalendarObjectSplitRequest,
 *   !proto.yartu.UpsertCalendarObjectSplitResponse>}
 */
const methodDescriptor_YCalendar_upsertCalendarObjectSplit = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/upsertCalendarObjectSplit',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCalendarObjectSplitRequest,
  proto.yartu.UpsertCalendarObjectSplitResponse,
  /**
   * @param {!proto.yartu.UpsertCalendarObjectSplitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCalendarObjectSplitResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCalendarObjectSplitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCalendarObjectSplitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCalendarObjectSplitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.upsertCalendarObjectSplit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendarObjectSplit',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendarObjectSplit,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCalendarObjectSplitRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCalendarObjectSplitResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.upsertCalendarObjectSplit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/upsertCalendarObjectSplit',
      request,
      metadata || {},
      methodDescriptor_YCalendar_upsertCalendarObjectSplit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ReplyEventRequest,
 *   !proto.yartu.ReplyEventResponse>}
 */
const methodDescriptor_YCalendar_replyEvent = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/replyEvent',
  grpc.web.MethodType.UNARY,
  proto.yartu.ReplyEventRequest,
  proto.yartu.ReplyEventResponse,
  /**
   * @param {!proto.yartu.ReplyEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ReplyEventResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ReplyEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ReplyEventResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ReplyEventResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.replyEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/replyEvent',
      request,
      metadata || {},
      methodDescriptor_YCalendar_replyEvent,
      callback);
};


/**
 * @param {!proto.yartu.ReplyEventRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ReplyEventResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.replyEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/replyEvent',
      request,
      metadata || {},
      methodDescriptor_YCalendar_replyEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SendInviteRequest,
 *   !proto.yartu.SendInviteResponse>}
 */
const methodDescriptor_YCalendar_sendInvite = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/sendInvite',
  grpc.web.MethodType.UNARY,
  proto.yartu.SendInviteRequest,
  proto.yartu.SendInviteResponse,
  /**
   * @param {!proto.yartu.SendInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SendInviteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SendInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SendInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SendInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCalendarClient.prototype.sendInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCalendar/sendInvite',
      request,
      metadata || {},
      methodDescriptor_YCalendar_sendInvite,
      callback);
};


/**
 * @param {!proto.yartu.SendInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SendInviteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCalendarPromiseClient.prototype.sendInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCalendar/sendInvite',
      request,
      metadata || {},
      methodDescriptor_YCalendar_sendInvite);
};


module.exports = proto.yartu;


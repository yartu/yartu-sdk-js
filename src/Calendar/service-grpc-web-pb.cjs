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
 *   !proto.yartu.UnShareCalendarRequest,
 *   !proto.yartu.UnShareCalendarResponse>}
 */
const methodDescriptor_YCalendar_unshareCalendar = new grpc.web.MethodDescriptor(
  '/yartu.YCalendar/unshareCalendar',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnShareCalendarRequest,
  proto.yartu.UnShareCalendarResponse,
  /**
   * @param {!proto.yartu.UnShareCalendarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnShareCalendarResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnShareCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnShareCalendarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnShareCalendarResponse>|undefined}
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
 * @param {!proto.yartu.UnShareCalendarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnShareCalendarResponse>}
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


module.exports = proto.yartu;


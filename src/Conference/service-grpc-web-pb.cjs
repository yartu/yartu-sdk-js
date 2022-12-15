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
proto.yartu.YConferenceClient =
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
proto.yartu.YConferencePromiseClient =
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
 *   !proto.yartu.ListConferenceRequest,
 *   !proto.yartu.ListConferenceResponse>}
 */
const methodDescriptor_YConference_listConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/listConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListConferenceRequest,
  proto.yartu.ListConferenceResponse,
  /**
   * @param {!proto.yartu.ListConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.listConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/listConference',
      request,
      metadata || {},
      methodDescriptor_YConference_listConference,
      callback);
};


/**
 * @param {!proto.yartu.ListConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.listConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/listConference',
      request,
      metadata || {},
      methodDescriptor_YConference_listConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetConferenceRequest,
 *   !proto.yartu.GetConferenceResponse>}
 */
const methodDescriptor_YConference_getConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/getConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetConferenceRequest,
  proto.yartu.GetConferenceResponse,
  /**
   * @param {!proto.yartu.GetConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.getConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/getConference',
      request,
      metadata || {},
      methodDescriptor_YConference_getConference,
      callback);
};


/**
 * @param {!proto.yartu.GetConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.getConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/getConference',
      request,
      metadata || {},
      methodDescriptor_YConference_getConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertConferenceRequest,
 *   !proto.yartu.UpsertConferenceResponse>}
 */
const methodDescriptor_YConference_upsertConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/upsertConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertConferenceRequest,
  proto.yartu.UpsertConferenceResponse,
  /**
   * @param {!proto.yartu.UpsertConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.upsertConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/upsertConference',
      request,
      metadata || {},
      methodDescriptor_YConference_upsertConference,
      callback);
};


/**
 * @param {!proto.yartu.UpsertConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.upsertConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/upsertConference',
      request,
      metadata || {},
      methodDescriptor_YConference_upsertConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertInstantConferenceRequest,
 *   !proto.yartu.UpsertInstantConferenceResponse>}
 */
const methodDescriptor_YConference_upsertInstantConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/upsertInstantConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertInstantConferenceRequest,
  proto.yartu.UpsertInstantConferenceResponse,
  /**
   * @param {!proto.yartu.UpsertInstantConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertInstantConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertInstantConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertInstantConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertInstantConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.upsertInstantConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/upsertInstantConference',
      request,
      metadata || {},
      methodDescriptor_YConference_upsertInstantConference,
      callback);
};


/**
 * @param {!proto.yartu.UpsertInstantConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertInstantConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.upsertInstantConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/upsertInstantConference',
      request,
      metadata || {},
      methodDescriptor_YConference_upsertInstantConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.StartConferenceRequest,
 *   !proto.yartu.StartConferenceResponse>}
 */
const methodDescriptor_YConference_startConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/startConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.StartConferenceRequest,
  proto.yartu.StartConferenceResponse,
  /**
   * @param {!proto.yartu.StartConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.StartConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.StartConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.StartConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.StartConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.startConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/startConference',
      request,
      metadata || {},
      methodDescriptor_YConference_startConference,
      callback);
};


/**
 * @param {!proto.yartu.StartConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.StartConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.startConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/startConference',
      request,
      metadata || {},
      methodDescriptor_YConference_startConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.FinishConferenceRequest,
 *   !proto.yartu.FinishConferenceResponse>}
 */
const methodDescriptor_YConference_finishConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/finishConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.FinishConferenceRequest,
  proto.yartu.FinishConferenceResponse,
  /**
   * @param {!proto.yartu.FinishConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.FinishConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.FinishConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.FinishConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.FinishConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.finishConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/finishConference',
      request,
      metadata || {},
      methodDescriptor_YConference_finishConference,
      callback);
};


/**
 * @param {!proto.yartu.FinishConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.FinishConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.finishConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/finishConference',
      request,
      metadata || {},
      methodDescriptor_YConference_finishConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteConferenceRequest,
 *   !proto.yartu.DeleteConferenceResponse>}
 */
const methodDescriptor_YConference_deleteConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/deleteConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteConferenceRequest,
  proto.yartu.DeleteConferenceResponse,
  /**
   * @param {!proto.yartu.DeleteConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.deleteConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/deleteConference',
      request,
      metadata || {},
      methodDescriptor_YConference_deleteConference,
      callback);
};


/**
 * @param {!proto.yartu.DeleteConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.deleteConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/deleteConference',
      request,
      metadata || {},
      methodDescriptor_YConference_deleteConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ShareConferenceRequest,
 *   !proto.yartu.ShareConferenceResponse>}
 */
const methodDescriptor_YConference_shareConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/shareConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.ShareConferenceRequest,
  proto.yartu.ShareConferenceResponse,
  /**
   * @param {!proto.yartu.ShareConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ShareConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ShareConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ShareConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ShareConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.shareConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/shareConference',
      request,
      metadata || {},
      methodDescriptor_YConference_shareConference,
      callback);
};


/**
 * @param {!proto.yartu.ShareConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ShareConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.shareConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/shareConference',
      request,
      metadata || {},
      methodDescriptor_YConference_shareConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UnshareConferenceRequest,
 *   !proto.yartu.UnshareConferenceResponse>}
 */
const methodDescriptor_YConference_unshareConference = new grpc.web.MethodDescriptor(
  '/yartu.YConference/unshareConference',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnshareConferenceRequest,
  proto.yartu.UnshareConferenceResponse,
  /**
   * @param {!proto.yartu.UnshareConferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnshareConferenceResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnshareConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnshareConferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnshareConferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.unshareConference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/unshareConference',
      request,
      metadata || {},
      methodDescriptor_YConference_unshareConference,
      callback);
};


/**
 * @param {!proto.yartu.UnshareConferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnshareConferenceResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.unshareConference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/unshareConference',
      request,
      metadata || {},
      methodDescriptor_YConference_unshareConference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertSessionUserRequest,
 *   !proto.yartu.UpsertSessionUserRequest>}
 */
const methodDescriptor_YConference_upsertSessionUser = new grpc.web.MethodDescriptor(
  '/yartu.YConference/upsertSessionUser',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertSessionUserRequest,
  proto.yartu.UpsertSessionUserRequest,
  /**
   * @param {!proto.yartu.UpsertSessionUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertSessionUserRequest.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertSessionUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertSessionUserRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertSessionUserRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YConferenceClient.prototype.upsertSessionUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YConference/upsertSessionUser',
      request,
      metadata || {},
      methodDescriptor_YConference_upsertSessionUser,
      callback);
};


/**
 * @param {!proto.yartu.UpsertSessionUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertSessionUserRequest>}
 *     Promise that resolves to the response
 */
proto.yartu.YConferencePromiseClient.prototype.upsertSessionUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YConference/upsertSessionUser',
      request,
      metadata || {},
      methodDescriptor_YConference_upsertSessionUser);
};


module.exports = proto.yartu;


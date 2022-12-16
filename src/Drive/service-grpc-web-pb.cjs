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
proto.yartu.YDriveClient =
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
proto.yartu.YDrivePromiseClient =
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
 *   !proto.yartu.GetRecentRequest,
 *   !proto.yartu.GetRecentResponse>}
 */
const methodDescriptor_YDrive_getRecent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getRecent',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetRecentRequest,
  proto.yartu.GetRecentResponse,
  /**
   * @param {!proto.yartu.GetRecentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetRecentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetRecentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetRecentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetRecentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getRecent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getRecent',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRecent,
      callback);
};


/**
 * @param {!proto.yartu.GetRecentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetRecentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getRecent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getRecent',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRecent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetRepoRequest,
 *   !proto.yartu.GetRepoResponse>}
 */
const methodDescriptor_YDrive_getRepo = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getRepo',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetRepoRequest,
  proto.yartu.GetRepoResponse,
  /**
   * @param {!proto.yartu.GetRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetRepoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetRepoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetRepoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepo,
      callback);
};


/**
 * @param {!proto.yartu.GetRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetRepoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertRepoRequest,
 *   !proto.yartu.UpsertRepoResponse>}
 */
const methodDescriptor_YDrive_upsertRepo = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/upsertRepo',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertRepoRequest,
  proto.yartu.UpsertRepoResponse,
  /**
   * @param {!proto.yartu.UpsertRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertRepoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertRepoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertRepoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.upsertRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/upsertRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertRepo,
      callback);
};


/**
 * @param {!proto.yartu.UpsertRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertRepoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.upsertRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/upsertRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteRepoRequest,
 *   !proto.yartu.DeleteRepoResponse>}
 */
const methodDescriptor_YDrive_deleteRepo = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/deleteRepo',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteRepoRequest,
  proto.yartu.DeleteRepoResponse,
  /**
   * @param {!proto.yartu.DeleteRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteRepoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteRepoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteRepoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.deleteRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/deleteRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_deleteRepo,
      callback);
};


/**
 * @param {!proto.yartu.DeleteRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteRepoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.deleteRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/deleteRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_deleteRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListRepoRequest,
 *   !proto.yartu.ListRepoResponse>}
 */
const methodDescriptor_YDrive_listRepo = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/listRepo',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListRepoRequest,
  proto.yartu.ListRepoResponse,
  /**
   * @param {!proto.yartu.ListRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListRepoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListRepoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListRepoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.listRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/listRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_listRepo,
      callback);
};


/**
 * @param {!proto.yartu.ListRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListRepoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.listRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/listRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_listRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetDirEntriesRequest,
 *   !proto.yartu.GetDirEntriesResponse>}
 */
const methodDescriptor_YDrive_getDirEntries = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getDirEntries',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetDirEntriesRequest,
  proto.yartu.GetDirEntriesResponse,
  /**
   * @param {!proto.yartu.GetDirEntriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetDirEntriesResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetDirEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetDirEntriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetDirEntriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getDirEntries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getDirEntries',
      request,
      metadata || {},
      methodDescriptor_YDrive_getDirEntries,
      callback);
};


/**
 * @param {!proto.yartu.GetDirEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetDirEntriesResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getDirEntries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getDirEntries',
      request,
      metadata || {},
      methodDescriptor_YDrive_getDirEntries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertDirectoryRequest,
 *   !proto.yartu.UpsertDirectoryResponse>}
 */
const methodDescriptor_YDrive_upsertDirectory = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/upsertDirectory',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertDirectoryRequest,
  proto.yartu.UpsertDirectoryResponse,
  /**
   * @param {!proto.yartu.UpsertDirectoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertDirectoryResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertDirectoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertDirectoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertDirectoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.upsertDirectory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/upsertDirectory',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertDirectory,
      callback);
};


/**
 * @param {!proto.yartu.UpsertDirectoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertDirectoryResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.upsertDirectory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/upsertDirectory',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertDirectory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertFileRequest,
 *   !proto.yartu.UpsertFileResponse>}
 */
const methodDescriptor_YDrive_upsertFile = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/upsertFile',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertFileRequest,
  proto.yartu.UpsertFileResponse,
  /**
   * @param {!proto.yartu.UpsertFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertFileResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.upsertFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/upsertFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertFile,
      callback);
};


/**
 * @param {!proto.yartu.UpsertFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertFileResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.upsertFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/upsertFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetRepoTrashRequest,
 *   !proto.yartu.GetRepoTrashResponse>}
 */
const methodDescriptor_YDrive_getRepoTrash = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getRepoTrash',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetRepoTrashRequest,
  proto.yartu.GetRepoTrashResponse,
  /**
   * @param {!proto.yartu.GetRepoTrashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetRepoTrashResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetRepoTrashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetRepoTrashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetRepoTrashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getRepoTrash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getRepoTrash',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepoTrash,
      callback);
};


/**
 * @param {!proto.yartu.GetRepoTrashRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetRepoTrashResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getRepoTrash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getRepoTrash',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepoTrash);
};


module.exports = proto.yartu;

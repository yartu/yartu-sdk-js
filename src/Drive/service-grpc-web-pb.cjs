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
 *   !proto.yartu.GetQuotaRequest,
 *   !proto.yartu.GetQuotaResponse>}
 */
const methodDescriptor_YDrive_getQuota = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getQuota',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetQuotaRequest,
  proto.yartu.GetQuotaResponse,
  /**
   * @param {!proto.yartu.GetQuotaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetQuotaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getQuota =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getQuota',
      request,
      metadata || {},
      methodDescriptor_YDrive_getQuota,
      callback);
};


/**
 * @param {!proto.yartu.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetQuotaResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getQuota =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getQuota',
      request,
      metadata || {},
      methodDescriptor_YDrive_getQuota);
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
 *   !proto.yartu.SetRepoPasswordRequest,
 *   !proto.yartu.SetRepoPasswordResponse>}
 */
const methodDescriptor_YDrive_setRepoPassword = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/setRepoPassword',
  grpc.web.MethodType.UNARY,
  proto.yartu.SetRepoPasswordRequest,
  proto.yartu.SetRepoPasswordResponse,
  /**
   * @param {!proto.yartu.SetRepoPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SetRepoPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SetRepoPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SetRepoPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SetRepoPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.setRepoPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/setRepoPassword',
      request,
      metadata || {},
      methodDescriptor_YDrive_setRepoPassword,
      callback);
};


/**
 * @param {!proto.yartu.SetRepoPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SetRepoPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.setRepoPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/setRepoPassword',
      request,
      metadata || {},
      methodDescriptor_YDrive_setRepoPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.TransferRepoRequest,
 *   !proto.yartu.TransferRepoResponse>}
 */
const methodDescriptor_YDrive_transferRepo = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/transferRepo',
  grpc.web.MethodType.UNARY,
  proto.yartu.TransferRepoRequest,
  proto.yartu.TransferRepoResponse,
  /**
   * @param {!proto.yartu.TransferRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.TransferRepoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.TransferRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.TransferRepoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.TransferRepoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.transferRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/transferRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_transferRepo,
      callback);
};


/**
 * @param {!proto.yartu.TransferRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.TransferRepoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.transferRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/transferRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_transferRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetRepoHistoryRequest,
 *   !proto.yartu.GetRepoHistoryResponse>}
 */
const methodDescriptor_YDrive_getRepoHistory = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getRepoHistory',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetRepoHistoryRequest,
  proto.yartu.GetRepoHistoryResponse,
  /**
   * @param {!proto.yartu.GetRepoHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetRepoHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetRepoHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetRepoHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetRepoHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getRepoHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getRepoHistory',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepoHistory,
      callback);
};


/**
 * @param {!proto.yartu.GetRepoHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetRepoHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getRepoHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getRepoHistory',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepoHistory);
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.RevertRepoRequest,
 *   !proto.yartu.RevertRepoResponse>}
 */
const methodDescriptor_YDrive_revertRepo = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/revertRepo',
  grpc.web.MethodType.UNARY,
  proto.yartu.RevertRepoRequest,
  proto.yartu.RevertRepoResponse,
  /**
   * @param {!proto.yartu.RevertRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.RevertRepoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.RevertRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.RevertRepoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.RevertRepoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.revertRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/revertRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_revertRepo,
      callback);
};


/**
 * @param {!proto.yartu.RevertRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.RevertRepoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.revertRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/revertRepo',
      request,
      metadata || {},
      methodDescriptor_YDrive_revertRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetRepoDownloadInfoRequest,
 *   !proto.yartu.GetRepoDownloadInfoResponse>}
 */
const methodDescriptor_YDrive_getRepoDownloadInfo = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getRepoDownloadInfo',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetRepoDownloadInfoRequest,
  proto.yartu.GetRepoDownloadInfoResponse,
  /**
   * @param {!proto.yartu.GetRepoDownloadInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetRepoDownloadInfoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetRepoDownloadInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetRepoDownloadInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetRepoDownloadInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getRepoDownloadInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getRepoDownloadInfo',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepoDownloadInfo,
      callback);
};


/**
 * @param {!proto.yartu.GetRepoDownloadInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetRepoDownloadInfoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getRepoDownloadInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getRepoDownloadInfo',
      request,
      metadata || {},
      methodDescriptor_YDrive_getRepoDownloadInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetDirentRequest,
 *   !proto.yartu.GetDirentResponse>}
 */
const methodDescriptor_YDrive_getDirent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getDirent',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetDirentRequest,
  proto.yartu.GetDirentResponse,
  /**
   * @param {!proto.yartu.GetDirentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetDirentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetDirentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetDirentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getDirent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_getDirent,
      callback);
};


/**
 * @param {!proto.yartu.GetDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetDirentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getDirent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_getDirent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListDirentRequest,
 *   !proto.yartu.ListDirentResponse>}
 */
const methodDescriptor_YDrive_listDirent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/listDirent',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListDirentRequest,
  proto.yartu.ListDirentResponse,
  /**
   * @param {!proto.yartu.ListDirentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListDirentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListDirentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListDirentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.listDirent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/listDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_listDirent,
      callback);
};


/**
 * @param {!proto.yartu.ListDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListDirentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.listDirent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/listDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_listDirent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.StarDirentRequest,
 *   !proto.yartu.StarDirentResponse>}
 */
const methodDescriptor_YDrive_starDirent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/starDirent',
  grpc.web.MethodType.UNARY,
  proto.yartu.StarDirentRequest,
  proto.yartu.StarDirentResponse,
  /**
   * @param {!proto.yartu.StarDirentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.StarDirentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.StarDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.StarDirentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.StarDirentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.starDirent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/starDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_starDirent,
      callback);
};


/**
 * @param {!proto.yartu.StarDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.StarDirentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.starDirent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/starDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_starDirent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertDirentRequest,
 *   !proto.yartu.UpsertDirentResponse>}
 */
const methodDescriptor_YDrive_upsertDirent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/upsertDirent',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertDirentRequest,
  proto.yartu.UpsertDirentResponse,
  /**
   * @param {!proto.yartu.UpsertDirentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertDirentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertDirentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertDirentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.upsertDirent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/upsertDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertDirent,
      callback);
};


/**
 * @param {!proto.yartu.UpsertDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertDirentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.upsertDirent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/upsertDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertDirent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DownloadDirentRequest,
 *   !proto.yartu.DownloadDirentResponse>}
 */
const methodDescriptor_YDrive_downloadDirent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/downloadDirent',
  grpc.web.MethodType.UNARY,
  proto.yartu.DownloadDirentRequest,
  proto.yartu.DownloadDirentResponse,
  /**
   * @param {!proto.yartu.DownloadDirentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DownloadDirentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DownloadDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DownloadDirentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DownloadDirentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.downloadDirent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/downloadDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_downloadDirent,
      callback);
};


/**
 * @param {!proto.yartu.DownloadDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DownloadDirentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.downloadDirent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/downloadDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_downloadDirent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.QueryZipProgressRequest,
 *   !proto.yartu.QueryZipProgressResponse>}
 */
const methodDescriptor_YDrive_queryZipProgress = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/queryZipProgress',
  grpc.web.MethodType.UNARY,
  proto.yartu.QueryZipProgressRequest,
  proto.yartu.QueryZipProgressResponse,
  /**
   * @param {!proto.yartu.QueryZipProgressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.QueryZipProgressResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.QueryZipProgressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.QueryZipProgressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.QueryZipProgressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.queryZipProgress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/queryZipProgress',
      request,
      metadata || {},
      methodDescriptor_YDrive_queryZipProgress,
      callback);
};


/**
 * @param {!proto.yartu.QueryZipProgressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.QueryZipProgressResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.queryZipProgress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/queryZipProgress',
      request,
      metadata || {},
      methodDescriptor_YDrive_queryZipProgress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.LockDirentRequest,
 *   !proto.yartu.LockDirentResponse>}
 */
const methodDescriptor_YDrive_lockDirent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/lockDirent',
  grpc.web.MethodType.UNARY,
  proto.yartu.LockDirentRequest,
  proto.yartu.LockDirentResponse,
  /**
   * @param {!proto.yartu.LockDirentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.LockDirentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.LockDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.LockDirentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.LockDirentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.lockDirent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/lockDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_lockDirent,
      callback);
};


/**
 * @param {!proto.yartu.LockDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.LockDirentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.lockDirent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/lockDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_lockDirent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UnlockDirentRequest,
 *   !proto.yartu.UnlockDirentResponse>}
 */
const methodDescriptor_YDrive_unlockDirent = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/unlockDirent',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnlockDirentRequest,
  proto.yartu.UnlockDirentResponse,
  /**
   * @param {!proto.yartu.UnlockDirentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnlockDirentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnlockDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnlockDirentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnlockDirentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.unlockDirent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/unlockDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_unlockDirent,
      callback);
};


/**
 * @param {!proto.yartu.UnlockDirentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnlockDirentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.unlockDirent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/unlockDirent',
      request,
      metadata || {},
      methodDescriptor_YDrive_unlockDirent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.RevertDirentTrashRequest,
 *   !proto.yartu.RevertDirentTrashResponse>}
 */
const methodDescriptor_YDrive_revertDirentTrash = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/revertDirentTrash',
  grpc.web.MethodType.UNARY,
  proto.yartu.RevertDirentTrashRequest,
  proto.yartu.RevertDirentTrashResponse,
  /**
   * @param {!proto.yartu.RevertDirentTrashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.RevertDirentTrashResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.RevertDirentTrashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.RevertDirentTrashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.RevertDirentTrashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.revertDirentTrash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/revertDirentTrash',
      request,
      metadata || {},
      methodDescriptor_YDrive_revertDirentTrash,
      callback);
};


/**
 * @param {!proto.yartu.RevertDirentTrashRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.RevertDirentTrashResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.revertDirentTrash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/revertDirentTrash',
      request,
      metadata || {},
      methodDescriptor_YDrive_revertDirentTrash);
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
 *   !proto.yartu.UploadFileRequest,
 *   !proto.yartu.UploadFileResponse>}
 */
const methodDescriptor_YDrive_uploadFile = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/uploadFile',
  grpc.web.MethodType.UNARY,
  proto.yartu.UploadFileRequest,
  proto.yartu.UploadFileResponse,
  /**
   * @param {!proto.yartu.UploadFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UploadFileResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UploadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UploadFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UploadFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.uploadFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/uploadFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_uploadFile,
      callback);
};


/**
 * @param {!proto.yartu.UploadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UploadFileResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.uploadFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/uploadFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_uploadFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DownloadFileRequest,
 *   !proto.yartu.DownloadFileResponse>}
 */
const methodDescriptor_YDrive_downloadFile = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/downloadFile',
  grpc.web.MethodType.UNARY,
  proto.yartu.DownloadFileRequest,
  proto.yartu.DownloadFileResponse,
  /**
   * @param {!proto.yartu.DownloadFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DownloadFileResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DownloadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DownloadFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DownloadFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.downloadFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/downloadFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_downloadFile,
      callback);
};


/**
 * @param {!proto.yartu.DownloadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DownloadFileResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.downloadFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/downloadFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_downloadFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetFileHistoryRequest,
 *   !proto.yartu.GetFileHistoryResponse>}
 */
const methodDescriptor_YDrive_getFileHistory = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getFileHistory',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetFileHistoryRequest,
  proto.yartu.GetFileHistoryResponse,
  /**
   * @param {!proto.yartu.GetFileHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetFileHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetFileHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetFileHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetFileHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getFileHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getFileHistory',
      request,
      metadata || {},
      methodDescriptor_YDrive_getFileHistory,
      callback);
};


/**
 * @param {!proto.yartu.GetFileHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetFileHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getFileHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getFileHistory',
      request,
      metadata || {},
      methodDescriptor_YDrive_getFileHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetOfficeFileRequest,
 *   !proto.yartu.GetOfficeFileResponse>}
 */
const methodDescriptor_YDrive_getOfficeFile = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getOfficeFile',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetOfficeFileRequest,
  proto.yartu.GetOfficeFileResponse,
  /**
   * @param {!proto.yartu.GetOfficeFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetOfficeFileResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetOfficeFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetOfficeFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetOfficeFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getOfficeFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getOfficeFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_getOfficeFile,
      callback);
};


/**
 * @param {!proto.yartu.GetOfficeFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetOfficeFileResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getOfficeFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getOfficeFile',
      request,
      metadata || {},
      methodDescriptor_YDrive_getOfficeFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SaveEmailAttachmentToDriveRequest,
 *   !proto.yartu.SaveEmailAttachmentToDriveResponse>}
 */
const methodDescriptor_YDrive_saveEmailAttachmentToDrive = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/saveEmailAttachmentToDrive',
  grpc.web.MethodType.UNARY,
  proto.yartu.SaveEmailAttachmentToDriveRequest,
  proto.yartu.SaveEmailAttachmentToDriveResponse,
  /**
   * @param {!proto.yartu.SaveEmailAttachmentToDriveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SaveEmailAttachmentToDriveResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SaveEmailAttachmentToDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SaveEmailAttachmentToDriveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SaveEmailAttachmentToDriveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.saveEmailAttachmentToDrive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/saveEmailAttachmentToDrive',
      request,
      metadata || {},
      methodDescriptor_YDrive_saveEmailAttachmentToDrive,
      callback);
};


/**
 * @param {!proto.yartu.SaveEmailAttachmentToDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SaveEmailAttachmentToDriveResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.saveEmailAttachmentToDrive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/saveEmailAttachmentToDrive',
      request,
      metadata || {},
      methodDescriptor_YDrive_saveEmailAttachmentToDrive);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListShareRequest,
 *   !proto.yartu.ListShareResponse>}
 */
const methodDescriptor_YDrive_listShare = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/listShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListShareRequest,
  proto.yartu.ListShareResponse,
  /**
   * @param {!proto.yartu.ListShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.listShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/listShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_listShare,
      callback);
};


/**
 * @param {!proto.yartu.ListShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.listShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/listShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_listShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ShareRequest,
 *   !proto.yartu.ShareResponse>}
 */
const methodDescriptor_YDrive_share = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/share',
  grpc.web.MethodType.UNARY,
  proto.yartu.ShareRequest,
  proto.yartu.ShareResponse,
  /**
   * @param {!proto.yartu.ShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.share =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/share',
      request,
      metadata || {},
      methodDescriptor_YDrive_share,
      callback);
};


/**
 * @param {!proto.yartu.ShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.share =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/share',
      request,
      metadata || {},
      methodDescriptor_YDrive_share);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UnshareRequest,
 *   !proto.yartu.UnshareResponse>}
 */
const methodDescriptor_YDrive_unshare = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/unshare',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnshareRequest,
  proto.yartu.UnshareResponse,
  /**
   * @param {!proto.yartu.UnshareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnshareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnshareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnshareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnshareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.unshare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/unshare',
      request,
      metadata || {},
      methodDescriptor_YDrive_unshare,
      callback);
};


/**
 * @param {!proto.yartu.UnshareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnshareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.unshare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/unshare',
      request,
      metadata || {},
      methodDescriptor_YDrive_unshare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteShareRequest,
 *   !proto.yartu.DeleteShareResponse>}
 */
const methodDescriptor_YDrive_deleteShare = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/deleteShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteShareRequest,
  proto.yartu.DeleteShareResponse,
  /**
   * @param {!proto.yartu.DeleteShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.deleteShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/deleteShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_deleteShare,
      callback);
};


/**
 * @param {!proto.yartu.DeleteShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.deleteShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/deleteShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_deleteShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListSharePermissionTemplateRequest,
 *   !proto.yartu.ListSharePermissionTemplateResponse>}
 */
const methodDescriptor_YDrive_listSharePermissionTemplate = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/listSharePermissionTemplate',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListSharePermissionTemplateRequest,
  proto.yartu.ListSharePermissionTemplateResponse,
  /**
   * @param {!proto.yartu.ListSharePermissionTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListSharePermissionTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListSharePermissionTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListSharePermissionTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListSharePermissionTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.listSharePermissionTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/listSharePermissionTemplate',
      request,
      metadata || {},
      methodDescriptor_YDrive_listSharePermissionTemplate,
      callback);
};


/**
 * @param {!proto.yartu.ListSharePermissionTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListSharePermissionTemplateResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.listSharePermissionTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/listSharePermissionTemplate',
      request,
      metadata || {},
      methodDescriptor_YDrive_listSharePermissionTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SharedWithMeRequest,
 *   !proto.yartu.SharedWithMeResponse>}
 */
const methodDescriptor_YDrive_sharedWithMe = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/sharedWithMe',
  grpc.web.MethodType.UNARY,
  proto.yartu.SharedWithMeRequest,
  proto.yartu.SharedWithMeResponse,
  /**
   * @param {!proto.yartu.SharedWithMeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SharedWithMeResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SharedWithMeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SharedWithMeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SharedWithMeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.sharedWithMe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/sharedWithMe',
      request,
      metadata || {},
      methodDescriptor_YDrive_sharedWithMe,
      callback);
};


/**
 * @param {!proto.yartu.SharedWithMeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SharedWithMeResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.sharedWithMe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/sharedWithMe',
      request,
      metadata || {},
      methodDescriptor_YDrive_sharedWithMe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SharedByMeRequest,
 *   !proto.yartu.SharedByMeResponse>}
 */
const methodDescriptor_YDrive_sharedByMe = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/sharedByMe',
  grpc.web.MethodType.UNARY,
  proto.yartu.SharedByMeRequest,
  proto.yartu.SharedByMeResponse,
  /**
   * @param {!proto.yartu.SharedByMeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SharedByMeResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SharedByMeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SharedByMeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SharedByMeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.sharedByMe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/sharedByMe',
      request,
      metadata || {},
      methodDescriptor_YDrive_sharedByMe,
      callback);
};


/**
 * @param {!proto.yartu.SharedByMeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SharedByMeResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.sharedByMe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/sharedByMe',
      request,
      metadata || {},
      methodDescriptor_YDrive_sharedByMe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListPublicShareRequest,
 *   !proto.yartu.ListPublicShareResponse>}
 */
const methodDescriptor_YDrive_listPublicShare = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/listPublicShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListPublicShareRequest,
  proto.yartu.ListPublicShareResponse,
  /**
   * @param {!proto.yartu.ListPublicShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListPublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListPublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListPublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.listPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/listPublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_listPublicShare,
      callback);
};


/**
 * @param {!proto.yartu.ListPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListPublicShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.listPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/listPublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_listPublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertPublicShareRequest,
 *   !proto.yartu.UpsertPublicShareResponse>}
 */
const methodDescriptor_YDrive_upsertPublicShare = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/upsertPublicShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertPublicShareRequest,
  proto.yartu.UpsertPublicShareResponse,
  /**
   * @param {!proto.yartu.UpsertPublicShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertPublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertPublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertPublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.upsertPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/upsertPublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertPublicShare,
      callback);
};


/**
 * @param {!proto.yartu.UpsertPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertPublicShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.upsertPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/upsertPublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertPublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeletePublicShareRequest,
 *   !proto.yartu.DeletePublicShareResponse>}
 */
const methodDescriptor_YDrive_deletePublicShare = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/deletePublicShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeletePublicShareRequest,
  proto.yartu.DeletePublicShareResponse,
  /**
   * @param {!proto.yartu.DeletePublicShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeletePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeletePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeletePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeletePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.deletePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/deletePublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_deletePublicShare,
      callback);
};


/**
 * @param {!proto.yartu.DeletePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeletePublicShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.deletePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/deletePublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_deletePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetPublicShareRequest,
 *   !proto.yartu.GetPublicShareResponse>}
 */
const methodDescriptor_YDrive_getPublicShare = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getPublicShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetPublicShareRequest,
  proto.yartu.GetPublicShareResponse,
  /**
   * @param {!proto.yartu.GetPublicShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetPublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetPublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetPublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getPublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_getPublicShare,
      callback);
};


/**
 * @param {!proto.yartu.GetPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetPublicShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getPublicShare',
      request,
      metadata || {},
      methodDescriptor_YDrive_getPublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetPublicShareDownloadRequest,
 *   !proto.yartu.GetPublicShareDownloadResponse>}
 */
const methodDescriptor_YDrive_getPublicShareDownload = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getPublicShareDownload',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetPublicShareDownloadRequest,
  proto.yartu.GetPublicShareDownloadResponse,
  /**
   * @param {!proto.yartu.GetPublicShareDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetPublicShareDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetPublicShareDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetPublicShareDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetPublicShareDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getPublicShareDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getPublicShareDownload',
      request,
      metadata || {},
      methodDescriptor_YDrive_getPublicShareDownload,
      callback);
};


/**
 * @param {!proto.yartu.GetPublicShareDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetPublicShareDownloadResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getPublicShareDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getPublicShareDownload',
      request,
      metadata || {},
      methodDescriptor_YDrive_getPublicShareDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListUploadPointRequest,
 *   !proto.yartu.ListUploadPointResponse>}
 */
const methodDescriptor_YDrive_listUploadPoint = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/listUploadPoint',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListUploadPointRequest,
  proto.yartu.ListUploadPointResponse,
  /**
   * @param {!proto.yartu.ListUploadPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListUploadPointResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListUploadPointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListUploadPointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.listUploadPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/listUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_listUploadPoint,
      callback);
};


/**
 * @param {!proto.yartu.ListUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListUploadPointResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.listUploadPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/listUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_listUploadPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertUploadPointRequest,
 *   !proto.yartu.UpsertUploadPointResponse>}
 */
const methodDescriptor_YDrive_upsertUploadPoint = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/upsertUploadPoint',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertUploadPointRequest,
  proto.yartu.UpsertUploadPointResponse,
  /**
   * @param {!proto.yartu.UpsertUploadPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertUploadPointResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertUploadPointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertUploadPointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.upsertUploadPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/upsertUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertUploadPoint,
      callback);
};


/**
 * @param {!proto.yartu.UpsertUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertUploadPointResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.upsertUploadPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/upsertUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_upsertUploadPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteUploadPointRequest,
 *   !proto.yartu.DeleteUploadPointResponse>}
 */
const methodDescriptor_YDrive_deleteUploadPoint = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/deleteUploadPoint',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteUploadPointRequest,
  proto.yartu.DeleteUploadPointResponse,
  /**
   * @param {!proto.yartu.DeleteUploadPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteUploadPointResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteUploadPointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteUploadPointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.deleteUploadPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/deleteUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_deleteUploadPoint,
      callback);
};


/**
 * @param {!proto.yartu.DeleteUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteUploadPointResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.deleteUploadPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/deleteUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_deleteUploadPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetUploadPointRequest,
 *   !proto.yartu.GetUploadPointResponse>}
 */
const methodDescriptor_YDrive_getUploadPoint = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/getUploadPoint',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetUploadPointRequest,
  proto.yartu.GetUploadPointResponse,
  /**
   * @param {!proto.yartu.GetUploadPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetUploadPointResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetUploadPointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetUploadPointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.getUploadPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/getUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_getUploadPoint,
      callback);
};


/**
 * @param {!proto.yartu.GetUploadPointRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetUploadPointResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.getUploadPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/getUploadPoint',
      request,
      metadata || {},
      methodDescriptor_YDrive_getUploadPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SaveToMyDriveRequest,
 *   !proto.yartu.SaveToMyDriveResponse>}
 */
const methodDescriptor_YDrive_saveToMyDrive = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/saveToMyDrive',
  grpc.web.MethodType.UNARY,
  proto.yartu.SaveToMyDriveRequest,
  proto.yartu.SaveToMyDriveResponse,
  /**
   * @param {!proto.yartu.SaveToMyDriveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SaveToMyDriveResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SaveToMyDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SaveToMyDriveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SaveToMyDriveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.saveToMyDrive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/saveToMyDrive',
      request,
      metadata || {},
      methodDescriptor_YDrive_saveToMyDrive,
      callback);
};


/**
 * @param {!proto.yartu.SaveToMyDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SaveToMyDriveResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.saveToMyDrive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/saveToMyDrive',
      request,
      metadata || {},
      methodDescriptor_YDrive_saveToMyDrive);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListConnectedClientRequest,
 *   !proto.yartu.ListConnectedClientResponse>}
 */
const methodDescriptor_YDrive_listConnectedClient = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/listConnectedClient',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListConnectedClientRequest,
  proto.yartu.ListConnectedClientResponse,
  /**
   * @param {!proto.yartu.ListConnectedClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListConnectedClientResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListConnectedClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListConnectedClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListConnectedClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.listConnectedClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/listConnectedClient',
      request,
      metadata || {},
      methodDescriptor_YDrive_listConnectedClient,
      callback);
};


/**
 * @param {!proto.yartu.ListConnectedClientRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListConnectedClientResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.listConnectedClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/listConnectedClient',
      request,
      metadata || {},
      methodDescriptor_YDrive_listConnectedClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SignOutClientRequest,
 *   !proto.yartu.SignOutClientResponse>}
 */
const methodDescriptor_YDrive_signOutClient = new grpc.web.MethodDescriptor(
  '/yartu.YDrive/signOutClient',
  grpc.web.MethodType.UNARY,
  proto.yartu.SignOutClientRequest,
  proto.yartu.SignOutClientResponse,
  /**
   * @param {!proto.yartu.SignOutClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SignOutClientResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SignOutClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SignOutClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SignOutClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YDriveClient.prototype.signOutClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YDrive/signOutClient',
      request,
      metadata || {},
      methodDescriptor_YDrive_signOutClient,
      callback);
};


/**
 * @param {!proto.yartu.SignOutClientRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SignOutClientResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YDrivePromiseClient.prototype.signOutClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YDrive/signOutClient',
      request,
      metadata || {},
      methodDescriptor_YDrive_signOutClient);
};


module.exports = proto.yartu;


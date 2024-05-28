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
proto.yartu.YNoteClient =
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
proto.yartu.YNotePromiseClient =
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
 *   !proto.yartu.GetNotebookRequest,
 *   !proto.yartu.GetNotebookResponse>}
 */
const methodDescriptor_YNote_getNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/getNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetNotebookRequest,
  proto.yartu.GetNotebookResponse,
  /**
   * @param {!proto.yartu.GetNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.getNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/getNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_getNotebook,
      callback);
};


/**
 * @param {!proto.yartu.GetNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.getNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/getNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_getNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertNotebookRequest,
 *   !proto.yartu.UpsertNotebookResponse>}
 */
const methodDescriptor_YNote_upsertNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/upsertNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertNotebookRequest,
  proto.yartu.UpsertNotebookResponse,
  /**
   * @param {!proto.yartu.UpsertNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.upsertNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/upsertNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertNotebook,
      callback);
};


/**
 * @param {!proto.yartu.UpsertNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.upsertNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/upsertNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteNotebookRequest,
 *   !proto.yartu.DeleteNotebookResponse>}
 */
const methodDescriptor_YNote_deleteNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/deleteNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteNotebookRequest,
  proto.yartu.DeleteNotebookResponse,
  /**
   * @param {!proto.yartu.DeleteNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.deleteNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/deleteNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteNotebook,
      callback);
};


/**
 * @param {!proto.yartu.DeleteNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.deleteNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/deleteNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListNotebookRequest,
 *   !proto.yartu.ListNotebookResponse>}
 */
const methodDescriptor_YNote_listNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/listNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListNotebookRequest,
  proto.yartu.ListNotebookResponse,
  /**
   * @param {!proto.yartu.ListNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.listNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/listNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_listNotebook,
      callback);
};


/**
 * @param {!proto.yartu.ListNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.listNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/listNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_listNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ShareNotebookRequest,
 *   !proto.yartu.ShareNotebookResponse>}
 */
const methodDescriptor_YNote_shareNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/shareNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.ShareNotebookRequest,
  proto.yartu.ShareNotebookResponse,
  /**
   * @param {!proto.yartu.ShareNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ShareNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ShareNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ShareNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ShareNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.shareNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/shareNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_shareNotebook,
      callback);
};


/**
 * @param {!proto.yartu.ShareNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ShareNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.shareNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/shareNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_shareNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UnshareNotebookRequest,
 *   !proto.yartu.UnshareNotebookResponse>}
 */
const methodDescriptor_YNote_unshareNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/unshareNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnshareNotebookRequest,
  proto.yartu.UnshareNotebookResponse,
  /**
   * @param {!proto.yartu.UnshareNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnshareNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnshareNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnshareNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnshareNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.unshareNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/unshareNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_unshareNotebook,
      callback);
};


/**
 * @param {!proto.yartu.UnshareNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnshareNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.unshareNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/unshareNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_unshareNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertSharedNotebookRequest,
 *   !proto.yartu.UpsertSharedNotebookResponse>}
 */
const methodDescriptor_YNote_upsertSharedNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/upsertSharedNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertSharedNotebookRequest,
  proto.yartu.UpsertSharedNotebookResponse,
  /**
   * @param {!proto.yartu.UpsertSharedNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertSharedNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertSharedNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertSharedNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertSharedNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.upsertSharedNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/upsertSharedNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertSharedNotebook,
      callback);
};


/**
 * @param {!proto.yartu.UpsertSharedNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertSharedNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.upsertSharedNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/upsertSharedNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertSharedNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteSharedNotebookRequest,
 *   !proto.yartu.DeleteSharedNotebookResponse>}
 */
const methodDescriptor_YNote_deleteSharedNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/deleteSharedNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteSharedNotebookRequest,
  proto.yartu.DeleteSharedNotebookResponse,
  /**
   * @param {!proto.yartu.DeleteSharedNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteSharedNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteSharedNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteSharedNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteSharedNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.deleteSharedNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/deleteSharedNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteSharedNotebook,
      callback);
};


/**
 * @param {!proto.yartu.DeleteSharedNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteSharedNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.deleteSharedNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/deleteSharedNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteSharedNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListSharedNotebookRequest,
 *   !proto.yartu.ListSharedNotebookResponse>}
 */
const methodDescriptor_YNote_listSharedNotebook = new grpc.web.MethodDescriptor(
  '/yartu.YNote/listSharedNotebook',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListSharedNotebookRequest,
  proto.yartu.ListSharedNotebookResponse,
  /**
   * @param {!proto.yartu.ListSharedNotebookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListSharedNotebookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListSharedNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListSharedNotebookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListSharedNotebookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.listSharedNotebook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/listSharedNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_listSharedNotebook,
      callback);
};


/**
 * @param {!proto.yartu.ListSharedNotebookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListSharedNotebookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.listSharedNotebook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/listSharedNotebook',
      request,
      metadata || {},
      methodDescriptor_YNote_listSharedNotebook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListNoteRequest,
 *   !proto.yartu.ListNoteResponse>}
 */
const methodDescriptor_YNote_listNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/listNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListNoteRequest,
  proto.yartu.ListNoteResponse,
  /**
   * @param {!proto.yartu.ListNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.listNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/listNote',
      request,
      metadata || {},
      methodDescriptor_YNote_listNote,
      callback);
};


/**
 * @param {!proto.yartu.ListNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.listNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/listNote',
      request,
      metadata || {},
      methodDescriptor_YNote_listNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetNoteRequest,
 *   !proto.yartu.GetNoteResponse>}
 */
const methodDescriptor_YNote_getNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/getNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetNoteRequest,
  proto.yartu.GetNoteResponse,
  /**
   * @param {!proto.yartu.GetNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.getNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/getNote',
      request,
      metadata || {},
      methodDescriptor_YNote_getNote,
      callback);
};


/**
 * @param {!proto.yartu.GetNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.getNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/getNote',
      request,
      metadata || {},
      methodDescriptor_YNote_getNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertNoteRequest,
 *   !proto.yartu.UpsertNoteResponse>}
 */
const methodDescriptor_YNote_upsertNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/upsertNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertNoteRequest,
  proto.yartu.UpsertNoteResponse,
  /**
   * @param {!proto.yartu.UpsertNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.upsertNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/upsertNote',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertNote,
      callback);
};


/**
 * @param {!proto.yartu.UpsertNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.upsertNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/upsertNote',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteNoteRequest,
 *   !proto.yartu.DeleteNoteResponse>}
 */
const methodDescriptor_YNote_deleteNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/deleteNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteNoteRequest,
  proto.yartu.DeleteNoteResponse,
  /**
   * @param {!proto.yartu.DeleteNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.deleteNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/deleteNote',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteNote,
      callback);
};


/**
 * @param {!proto.yartu.DeleteNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.deleteNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/deleteNote',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.RemindNoteRequest,
 *   !proto.yartu.RemindNoteResponse>}
 */
const methodDescriptor_YNote_remindNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/remindNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.RemindNoteRequest,
  proto.yartu.RemindNoteResponse,
  /**
   * @param {!proto.yartu.RemindNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.RemindNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.RemindNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.RemindNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.RemindNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.remindNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/remindNote',
      request,
      metadata || {},
      methodDescriptor_YNote_remindNote,
      callback);
};


/**
 * @param {!proto.yartu.RemindNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.RemindNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.remindNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/remindNote',
      request,
      metadata || {},
      methodDescriptor_YNote_remindNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DuplicateNoteRequest,
 *   !proto.yartu.DuplicateNoteResponse>}
 */
const methodDescriptor_YNote_duplicateNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/duplicateNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.DuplicateNoteRequest,
  proto.yartu.DuplicateNoteResponse,
  /**
   * @param {!proto.yartu.DuplicateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DuplicateNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DuplicateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DuplicateNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DuplicateNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.duplicateNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/duplicateNote',
      request,
      metadata || {},
      methodDescriptor_YNote_duplicateNote,
      callback);
};


/**
 * @param {!proto.yartu.DuplicateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DuplicateNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.duplicateNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/duplicateNote',
      request,
      metadata || {},
      methodDescriptor_YNote_duplicateNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.PinNoteRequest,
 *   !proto.yartu.PinNoteResponse>}
 */
const methodDescriptor_YNote_pinNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/pinNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.PinNoteRequest,
  proto.yartu.PinNoteResponse,
  /**
   * @param {!proto.yartu.PinNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.PinNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.PinNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.PinNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.PinNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.pinNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/pinNote',
      request,
      metadata || {},
      methodDescriptor_YNote_pinNote,
      callback);
};


/**
 * @param {!proto.yartu.PinNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.PinNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.pinNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/pinNote',
      request,
      metadata || {},
      methodDescriptor_YNote_pinNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ConvertNoteRequest,
 *   !proto.yartu.ConvertNoteResponse>}
 */
const methodDescriptor_YNote_convertNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/convertNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.ConvertNoteRequest,
  proto.yartu.ConvertNoteResponse,
  /**
   * @param {!proto.yartu.ConvertNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ConvertNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ConvertNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ConvertNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ConvertNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.convertNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/convertNote',
      request,
      metadata || {},
      methodDescriptor_YNote_convertNote,
      callback);
};


/**
 * @param {!proto.yartu.ConvertNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ConvertNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.convertNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/convertNote',
      request,
      metadata || {},
      methodDescriptor_YNote_convertNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.StarNoteRequest,
 *   !proto.yartu.StarNoteResponse>}
 */
const methodDescriptor_YNote_starNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/starNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.StarNoteRequest,
  proto.yartu.StarNoteResponse,
  /**
   * @param {!proto.yartu.StarNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.StarNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.StarNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.StarNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.StarNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.starNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/starNote',
      request,
      metadata || {},
      methodDescriptor_YNote_starNote,
      callback);
};


/**
 * @param {!proto.yartu.StarNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.StarNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.starNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/starNote',
      request,
      metadata || {},
      methodDescriptor_YNote_starNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ArchiveNoteRequest,
 *   !proto.yartu.ArchiveNoteResponse>}
 */
const methodDescriptor_YNote_archiveNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/archiveNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.ArchiveNoteRequest,
  proto.yartu.ArchiveNoteResponse,
  /**
   * @param {!proto.yartu.ArchiveNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ArchiveNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ArchiveNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ArchiveNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ArchiveNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.archiveNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/archiveNote',
      request,
      metadata || {},
      methodDescriptor_YNote_archiveNote,
      callback);
};


/**
 * @param {!proto.yartu.ArchiveNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ArchiveNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.archiveNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/archiveNote',
      request,
      metadata || {},
      methodDescriptor_YNote_archiveNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.MoveNoteRequest,
 *   !proto.yartu.MoveNoteResponse>}
 */
const methodDescriptor_YNote_moveNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/moveNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.MoveNoteRequest,
  proto.yartu.MoveNoteResponse,
  /**
   * @param {!proto.yartu.MoveNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.MoveNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.MoveNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.MoveNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.MoveNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.moveNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/moveNote',
      request,
      metadata || {},
      methodDescriptor_YNote_moveNote,
      callback);
};


/**
 * @param {!proto.yartu.MoveNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.MoveNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.moveNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/moveNote',
      request,
      metadata || {},
      methodDescriptor_YNote_moveNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.CopyNoteRequest,
 *   !proto.yartu.CopyNoteResponse>}
 */
const methodDescriptor_YNote_copyNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/copyNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.CopyNoteRequest,
  proto.yartu.CopyNoteResponse,
  /**
   * @param {!proto.yartu.CopyNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.CopyNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.CopyNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.CopyNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.CopyNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.copyNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/copyNote',
      request,
      metadata || {},
      methodDescriptor_YNote_copyNote,
      callback);
};


/**
 * @param {!proto.yartu.CopyNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.CopyNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.copyNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/copyNote',
      request,
      metadata || {},
      methodDescriptor_YNote_copyNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListNoteLabelRequest,
 *   !proto.yartu.ListNoteLabelResponse>}
 */
const methodDescriptor_YNote_listNoteLabel = new grpc.web.MethodDescriptor(
  '/yartu.YNote/listNoteLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListNoteLabelRequest,
  proto.yartu.ListNoteLabelResponse,
  /**
   * @param {!proto.yartu.ListNoteLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListNoteLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListNoteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListNoteLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListNoteLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.listNoteLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/listNoteLabel',
      request,
      metadata || {},
      methodDescriptor_YNote_listNoteLabel,
      callback);
};


/**
 * @param {!proto.yartu.ListNoteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListNoteLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.listNoteLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/listNoteLabel',
      request,
      metadata || {},
      methodDescriptor_YNote_listNoteLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertLabelToNoteRequest,
 *   !proto.yartu.UpsertLabelToNoteResponse>}
 */
const methodDescriptor_YNote_upsertLabelToNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/upsertLabelToNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertLabelToNoteRequest,
  proto.yartu.UpsertLabelToNoteResponse,
  /**
   * @param {!proto.yartu.UpsertLabelToNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertLabelToNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertLabelToNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertLabelToNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertLabelToNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.upsertLabelToNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/upsertLabelToNote',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertLabelToNote,
      callback);
};


/**
 * @param {!proto.yartu.UpsertLabelToNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertLabelToNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.upsertLabelToNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/upsertLabelToNote',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertLabelToNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertImageToNoteRequest,
 *   !proto.yartu.UpsertImageToNoteResponse>}
 */
const methodDescriptor_YNote_upsertImageToNote = new grpc.web.MethodDescriptor(
  '/yartu.YNote/upsertImageToNote',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertImageToNoteRequest,
  proto.yartu.UpsertImageToNoteResponse,
  /**
   * @param {!proto.yartu.UpsertImageToNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertImageToNoteResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertImageToNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertImageToNoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertImageToNoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.upsertImageToNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/upsertImageToNote',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertImageToNote,
      callback);
};


/**
 * @param {!proto.yartu.UpsertImageToNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertImageToNoteResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.upsertImageToNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/upsertImageToNote',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertImageToNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertNoteLabelRequest,
 *   !proto.yartu.UpsertNoteLabelResponse>}
 */
const methodDescriptor_YNote_upsertNoteLabel = new grpc.web.MethodDescriptor(
  '/yartu.YNote/upsertNoteLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertNoteLabelRequest,
  proto.yartu.UpsertNoteLabelResponse,
  /**
   * @param {!proto.yartu.UpsertNoteLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertNoteLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertNoteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertNoteLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertNoteLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.upsertNoteLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/upsertNoteLabel',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertNoteLabel,
      callback);
};


/**
 * @param {!proto.yartu.UpsertNoteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertNoteLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.upsertNoteLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/upsertNoteLabel',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertNoteLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteNoteLabelRequest,
 *   !proto.yartu.DeleteNoteLabelResponse>}
 */
const methodDescriptor_YNote_deleteNoteLabel = new grpc.web.MethodDescriptor(
  '/yartu.YNote/deleteNoteLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteNoteLabelRequest,
  proto.yartu.DeleteNoteLabelResponse,
  /**
   * @param {!proto.yartu.DeleteNoteLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteNoteLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteNoteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteNoteLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteNoteLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.deleteNoteLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/deleteNoteLabel',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteNoteLabel,
      callback);
};


/**
 * @param {!proto.yartu.DeleteNoteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteNoteLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.deleteNoteLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/deleteNoteLabel',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteNoteLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetTaskRequest,
 *   !proto.yartu.GetTaskResponse>}
 */
const methodDescriptor_YNote_getTask = new grpc.web.MethodDescriptor(
  '/yartu.YNote/getTask',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetTaskRequest,
  proto.yartu.GetTaskResponse,
  /**
   * @param {!proto.yartu.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetTaskResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.getTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/getTask',
      request,
      metadata || {},
      methodDescriptor_YNote_getTask,
      callback);
};


/**
 * @param {!proto.yartu.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetTaskResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.getTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/getTask',
      request,
      metadata || {},
      methodDescriptor_YNote_getTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertTaskRequest,
 *   !proto.yartu.UpsertTaskResponse>}
 */
const methodDescriptor_YNote_upsertTask = new grpc.web.MethodDescriptor(
  '/yartu.YNote/upsertTask',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertTaskRequest,
  proto.yartu.UpsertTaskResponse,
  /**
   * @param {!proto.yartu.UpsertTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertTaskResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.upsertTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/upsertTask',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertTask,
      callback);
};


/**
 * @param {!proto.yartu.UpsertTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertTaskResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.upsertTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/upsertTask',
      request,
      metadata || {},
      methodDescriptor_YNote_upsertTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteTaskRequest,
 *   !proto.yartu.DeleteTaskResponse>}
 */
const methodDescriptor_YNote_deleteTask = new grpc.web.MethodDescriptor(
  '/yartu.YNote/deleteTask',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteTaskRequest,
  proto.yartu.DeleteTaskResponse,
  /**
   * @param {!proto.yartu.DeleteTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteTaskResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.deleteTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/deleteTask',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteTask,
      callback);
};


/**
 * @param {!proto.yartu.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteTaskResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.deleteTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/deleteTask',
      request,
      metadata || {},
      methodDescriptor_YNote_deleteTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListTaskRequest,
 *   !proto.yartu.ListTaskResponse>}
 */
const methodDescriptor_YNote_listTask = new grpc.web.MethodDescriptor(
  '/yartu.YNote/listTask',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListTaskRequest,
  proto.yartu.ListTaskResponse,
  /**
   * @param {!proto.yartu.ListTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListTaskResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.listTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/listTask',
      request,
      metadata || {},
      methodDescriptor_YNote_listTask,
      callback);
};


/**
 * @param {!proto.yartu.ListTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListTaskResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.listTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/listTask',
      request,
      metadata || {},
      methodDescriptor_YNote_listTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.CompleteTaskRequest,
 *   !proto.yartu.CompleteTaskResponse>}
 */
const methodDescriptor_YNote_completeTask = new grpc.web.MethodDescriptor(
  '/yartu.YNote/completeTask',
  grpc.web.MethodType.UNARY,
  proto.yartu.CompleteTaskRequest,
  proto.yartu.CompleteTaskResponse,
  /**
   * @param {!proto.yartu.CompleteTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.CompleteTaskResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.CompleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.CompleteTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.CompleteTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.completeTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/completeTask',
      request,
      metadata || {},
      methodDescriptor_YNote_completeTask,
      callback);
};


/**
 * @param {!proto.yartu.CompleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.CompleteTaskResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.completeTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/completeTask',
      request,
      metadata || {},
      methodDescriptor_YNote_completeTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SaveNoteToDriveRequest,
 *   !proto.yartu.SaveNoteToDriveResponse>}
 */
const methodDescriptor_YNote_saveNoteToDrive = new grpc.web.MethodDescriptor(
  '/yartu.YNote/saveNoteToDrive',
  grpc.web.MethodType.UNARY,
  proto.yartu.SaveNoteToDriveRequest,
  proto.yartu.SaveNoteToDriveResponse,
  /**
   * @param {!proto.yartu.SaveNoteToDriveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SaveNoteToDriveResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SaveNoteToDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SaveNoteToDriveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SaveNoteToDriveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YNoteClient.prototype.saveNoteToDrive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YNote/saveNoteToDrive',
      request,
      metadata || {},
      methodDescriptor_YNote_saveNoteToDrive,
      callback);
};


/**
 * @param {!proto.yartu.SaveNoteToDriveRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SaveNoteToDriveResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YNotePromiseClient.prototype.saveNoteToDrive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YNote/saveNoteToDrive',
      request,
      metadata || {},
      methodDescriptor_YNote_saveNoteToDrive);
};


module.exports = proto.yartu;


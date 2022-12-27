/**
 * @fileoverview gRPC-Web generated client stub for yartu
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.9
// source: project/grpc/service.proto


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
proto.yartu.YProjectClient =
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
proto.yartu.YProjectPromiseClient =
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
 *   !proto.yartu.ListProjectRequest,
 *   !proto.yartu.ListProjectResponse>}
 */
const methodDescriptor_YProject_listProject = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listProject',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListProjectRequest,
  proto.yartu.ListProjectResponse,
  /**
   * @param {!proto.yartu.ListProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListProjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listProject',
      request,
      metadata || {},
      methodDescriptor_YProject_listProject,
      callback);
};


/**
 * @param {!proto.yartu.ListProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListProjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listProject',
      request,
      metadata || {},
      methodDescriptor_YProject_listProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetProjectRequest,
 *   !proto.yartu.GetProjectResponse>}
 */
const methodDescriptor_YProject_getProject = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getProject',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetProjectRequest,
  proto.yartu.GetProjectResponse,
  /**
   * @param {!proto.yartu.GetProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetProjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getProject',
      request,
      metadata || {},
      methodDescriptor_YProject_getProject,
      callback);
};


/**
 * @param {!proto.yartu.GetProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetProjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getProject',
      request,
      metadata || {},
      methodDescriptor_YProject_getProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertProjectRequest,
 *   !proto.yartu.UpsertProjectResponse>}
 */
const methodDescriptor_YProject_upsertProject = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertProject',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertProjectRequest,
  proto.yartu.UpsertProjectResponse,
  /**
   * @param {!proto.yartu.UpsertProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertProjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertProject',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertProject,
      callback);
};


/**
 * @param {!proto.yartu.UpsertProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertProjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertProject',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteProjectRequest,
 *   !proto.yartu.DeleteProjectResponse>}
 */
const methodDescriptor_YProject_deleteProject = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteProject',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteProjectRequest,
  proto.yartu.DeleteProjectResponse,
  /**
   * @param {!proto.yartu.DeleteProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteProjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteProject',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteProject,
      callback);
};


/**
 * @param {!proto.yartu.DeleteProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteProjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteProject',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DuplicateProjectRequest,
 *   !proto.yartu.DuplicateProjectResponse>}
 */
const methodDescriptor_YProject_duplicateProject = new grpc.web.MethodDescriptor(
  '/yartu.YProject/duplicateProject',
  grpc.web.MethodType.UNARY,
  proto.yartu.DuplicateProjectRequest,
  proto.yartu.DuplicateProjectResponse,
  /**
   * @param {!proto.yartu.DuplicateProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DuplicateProjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DuplicateProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DuplicateProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DuplicateProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.duplicateProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/duplicateProject',
      request,
      metadata || {},
      methodDescriptor_YProject_duplicateProject,
      callback);
};


/**
 * @param {!proto.yartu.DuplicateProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DuplicateProjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.duplicateProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/duplicateProject',
      request,
      metadata || {},
      methodDescriptor_YProject_duplicateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ArchiveProjectRequest,
 *   !proto.yartu.ArchiveProjectResponse>}
 */
const methodDescriptor_YProject_archiveProject = new grpc.web.MethodDescriptor(
  '/yartu.YProject/archiveProject',
  grpc.web.MethodType.UNARY,
  proto.yartu.ArchiveProjectRequest,
  proto.yartu.ArchiveProjectResponse,
  /**
   * @param {!proto.yartu.ArchiveProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ArchiveProjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ArchiveProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ArchiveProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ArchiveProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.archiveProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/archiveProject',
      request,
      metadata || {},
      methodDescriptor_YProject_archiveProject,
      callback);
};


/**
 * @param {!proto.yartu.ArchiveProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ArchiveProjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.archiveProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/archiveProject',
      request,
      metadata || {},
      methodDescriptor_YProject_archiveProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListThreadRequest,
 *   !proto.yartu.ListThreadResponse>}
 */
const methodDescriptor_YProject_listThread = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listThread',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListThreadRequest,
  proto.yartu.ListThreadResponse,
  /**
   * @param {!proto.yartu.ListThreadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListThreadResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListThreadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListThreadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listThread =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listThread',
      request,
      metadata || {},
      methodDescriptor_YProject_listThread,
      callback);
};


/**
 * @param {!proto.yartu.ListThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListThreadResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listThread =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listThread',
      request,
      metadata || {},
      methodDescriptor_YProject_listThread);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetThreadRequest,
 *   !proto.yartu.GetThreadResponse>}
 */
const methodDescriptor_YProject_getThread = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getThread',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetThreadRequest,
  proto.yartu.GetThreadResponse,
  /**
   * @param {!proto.yartu.GetThreadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetThreadResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetThreadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetThreadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getThread =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getThread',
      request,
      metadata || {},
      methodDescriptor_YProject_getThread,
      callback);
};


/**
 * @param {!proto.yartu.GetThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetThreadResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getThread =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getThread',
      request,
      metadata || {},
      methodDescriptor_YProject_getThread);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertThreadRequest,
 *   !proto.yartu.UpsertThreadResponse>}
 */
const methodDescriptor_YProject_upsertThread = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertThread',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertThreadRequest,
  proto.yartu.UpsertThreadResponse,
  /**
   * @param {!proto.yartu.UpsertThreadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertThreadResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertThreadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertThreadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertThread =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertThread',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertThread,
      callback);
};


/**
 * @param {!proto.yartu.UpsertThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertThreadResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertThread =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertThread',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertThread);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteThreadRequest,
 *   !proto.yartu.DeleteThreadResponse>}
 */
const methodDescriptor_YProject_deleteThread = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteThread',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteThreadRequest,
  proto.yartu.DeleteThreadResponse,
  /**
   * @param {!proto.yartu.DeleteThreadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteThreadResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteThreadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteThreadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteThread =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteThread',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteThread,
      callback);
};


/**
 * @param {!proto.yartu.DeleteThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteThreadResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteThread =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteThread',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteThread);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListThreadMessageRequest,
 *   !proto.yartu.ListThreadMessageResponse>}
 */
const methodDescriptor_YProject_listThreadMessage = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listThreadMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListThreadMessageRequest,
  proto.yartu.ListThreadMessageResponse,
  /**
   * @param {!proto.yartu.ListThreadMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListThreadMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListThreadMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListThreadMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listThreadMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_listThreadMessage,
      callback);
};


/**
 * @param {!proto.yartu.ListThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListThreadMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listThreadMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_listThreadMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SendThreadMessageRequest,
 *   !proto.yartu.SendThreadMessageResponse>}
 */
const methodDescriptor_YProject_sendThreadMessage = new grpc.web.MethodDescriptor(
  '/yartu.YProject/sendThreadMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu.SendThreadMessageRequest,
  proto.yartu.SendThreadMessageResponse,
  /**
   * @param {!proto.yartu.SendThreadMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SendThreadMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SendThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SendThreadMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SendThreadMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.sendThreadMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/sendThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_sendThreadMessage,
      callback);
};


/**
 * @param {!proto.yartu.SendThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SendThreadMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.sendThreadMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/sendThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_sendThreadMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ReadThreadMessageRequest,
 *   !proto.yartu.ReadThreadMessageResponse>}
 */
const methodDescriptor_YProject_readThreadMessage = new grpc.web.MethodDescriptor(
  '/yartu.YProject/readThreadMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu.ReadThreadMessageRequest,
  proto.yartu.ReadThreadMessageResponse,
  /**
   * @param {!proto.yartu.ReadThreadMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ReadThreadMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ReadThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ReadThreadMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ReadThreadMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.readThreadMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/readThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_readThreadMessage,
      callback);
};


/**
 * @param {!proto.yartu.ReadThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ReadThreadMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.readThreadMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/readThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_readThreadMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.InteractThreadMessageRequest,
 *   !proto.yartu.InteractThreadMessageResponse>}
 */
const methodDescriptor_YProject_interactThreadMessage = new grpc.web.MethodDescriptor(
  '/yartu.YProject/interactThreadMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu.InteractThreadMessageRequest,
  proto.yartu.InteractThreadMessageResponse,
  /**
   * @param {!proto.yartu.InteractThreadMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.InteractThreadMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.InteractThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.InteractThreadMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.InteractThreadMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.interactThreadMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/interactThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_interactThreadMessage,
      callback);
};


/**
 * @param {!proto.yartu.InteractThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.InteractThreadMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.interactThreadMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/interactThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_interactThreadMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListBoardRequest,
 *   !proto.yartu.ListBoardResponse>}
 */
const methodDescriptor_YProject_listBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListBoardRequest,
  proto.yartu.ListBoardResponse,
  /**
   * @param {!proto.yartu.ListBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_listBoard,
      callback);
};


/**
 * @param {!proto.yartu.ListBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_listBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetBoardRequest,
 *   !proto.yartu.GetBoardResponse>}
 */
const methodDescriptor_YProject_getBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetBoardRequest,
  proto.yartu.GetBoardResponse,
  /**
   * @param {!proto.yartu.GetBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_getBoard,
      callback);
};


/**
 * @param {!proto.yartu.GetBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_getBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertBoardRequest,
 *   !proto.yartu.UpsertBoardResponse>}
 */
const methodDescriptor_YProject_upsertBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertBoardRequest,
  proto.yartu.UpsertBoardResponse,
  /**
   * @param {!proto.yartu.UpsertBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertBoard,
      callback);
};


/**
 * @param {!proto.yartu.UpsertBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteBoardRequest,
 *   !proto.yartu.DeleteBoardResponse>}
 */
const methodDescriptor_YProject_deleteBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteBoardRequest,
  proto.yartu.DeleteBoardResponse,
  /**
   * @param {!proto.yartu.DeleteBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteBoard,
      callback);
};


/**
 * @param {!proto.yartu.DeleteBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCardRequest,
 *   !proto.yartu.UpsertCardResponse>}
 */
const methodDescriptor_YProject_upsertCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCardRequest,
  proto.yartu.UpsertCardResponse,
  /**
   * @param {!proto.yartu.UpsertCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertCard',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCard,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertCard',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCard);
};


module.exports = proto.yartu;


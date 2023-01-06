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
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetProjectMeRequest,
 *   !proto.yartu.GetProjectMeResponse>}
 */
const methodDescriptor_YProject_getMe = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getMe',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetProjectMeRequest,
  proto.yartu.GetProjectMeResponse,
  /**
   * @param {!proto.yartu.GetProjectMeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetProjectMeResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetProjectMeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetProjectMeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetProjectMeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getMe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getMe',
      request,
      metadata || {},
      methodDescriptor_YProject_getMe,
      callback);
};


/**
 * @param {!proto.yartu.GetProjectMeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetProjectMeResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getMe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getMe',
      request,
      metadata || {},
      methodDescriptor_YProject_getMe);
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
 *   !proto.yartu.StarProjectRequest,
 *   !proto.yartu.StarProjectResponse>}
 */
const methodDescriptor_YProject_starProject = new grpc.web.MethodDescriptor(
  '/yartu.YProject/starProject',
  grpc.web.MethodType.UNARY,
  proto.yartu.StarProjectRequest,
  proto.yartu.StarProjectResponse,
  /**
   * @param {!proto.yartu.StarProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.StarProjectResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.StarProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.StarProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.StarProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.starProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/starProject',
      request,
      metadata || {},
      methodDescriptor_YProject_starProject,
      callback);
};


/**
 * @param {!proto.yartu.StarProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.StarProjectResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.starProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/starProject',
      request,
      metadata || {},
      methodDescriptor_YProject_starProject);
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
 *   !proto.yartu.ListBoardTemplateRequest,
 *   !proto.yartu.ListBoardTemplateResponse>}
 */
const methodDescriptor_YProject_listBoardTemplate = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listBoardTemplate',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListBoardTemplateRequest,
  proto.yartu.ListBoardTemplateResponse,
  /**
   * @param {!proto.yartu.ListBoardTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListBoardTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListBoardTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListBoardTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListBoardTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listBoardTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listBoardTemplate',
      request,
      metadata || {},
      methodDescriptor_YProject_listBoardTemplate,
      callback);
};


/**
 * @param {!proto.yartu.ListBoardTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListBoardTemplateResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listBoardTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listBoardTemplate',
      request,
      metadata || {},
      methodDescriptor_YProject_listBoardTemplate);
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
 *   !proto.yartu.ListCardLabelRequest,
 *   !proto.yartu.ListCardLabelResponse>}
 */
const methodDescriptor_YProject_listCardLabel = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listCardLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCardLabelRequest,
  proto.yartu.ListCardLabelResponse,
  /**
   * @param {!proto.yartu.ListCardLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCardLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCardLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCardLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCardLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listCardLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listCardLabel',
      request,
      metadata || {},
      methodDescriptor_YProject_listCardLabel,
      callback);
};


/**
 * @param {!proto.yartu.ListCardLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCardLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listCardLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listCardLabel',
      request,
      metadata || {},
      methodDescriptor_YProject_listCardLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCardLabelRequest,
 *   !proto.yartu.UpsertCardLabelResponse>}
 */
const methodDescriptor_YProject_upsertCardLabel = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertCardLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCardLabelRequest,
  proto.yartu.UpsertCardLabelResponse,
  /**
   * @param {!proto.yartu.UpsertCardLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCardLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCardLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCardLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCardLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertCardLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertCardLabel',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCardLabel,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCardLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCardLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertCardLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertCardLabel',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCardLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCardLabelRequest,
 *   !proto.yartu.DeleteCardLabelResponse>}
 */
const methodDescriptor_YProject_deleteCardLabel = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteCardLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCardLabelRequest,
  proto.yartu.DeleteCardLabelResponse,
  /**
   * @param {!proto.yartu.DeleteCardLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCardLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCardLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCardLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCardLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteCardLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteCardLabel',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCardLabel,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCardLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCardLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteCardLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteCardLabel',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCardLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetCardRequest,
 *   !proto.yartu.GetCardResponse>}
 */
const methodDescriptor_YProject_getCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetCardRequest,
  proto.yartu.GetCardResponse,
  /**
   * @param {!proto.yartu.GetCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getCard',
      request,
      metadata || {},
      methodDescriptor_YProject_getCard,
      callback);
};


/**
 * @param {!proto.yartu.GetCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getCard',
      request,
      metadata || {},
      methodDescriptor_YProject_getCard);
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.AddCommentToCardRequest,
 *   !proto.yartu.AddCommentToCardResponse>}
 */
const methodDescriptor_YProject_addCommentToCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/addCommentToCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.AddCommentToCardRequest,
  proto.yartu.AddCommentToCardResponse,
  /**
   * @param {!proto.yartu.AddCommentToCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.AddCommentToCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.AddCommentToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.AddCommentToCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.AddCommentToCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.addCommentToCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/addCommentToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_addCommentToCard,
      callback);
};


/**
 * @param {!proto.yartu.AddCommentToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.AddCommentToCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.addCommentToCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/addCommentToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_addCommentToCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.AddLabelToCardRequest,
 *   !proto.yartu.AddLabelToCardResponse>}
 */
const methodDescriptor_YProject_addLabelToCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/addLabelToCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.AddLabelToCardRequest,
  proto.yartu.AddLabelToCardResponse,
  /**
   * @param {!proto.yartu.AddLabelToCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.AddLabelToCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.AddLabelToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.AddLabelToCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.AddLabelToCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.addLabelToCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/addLabelToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_addLabelToCard,
      callback);
};


/**
 * @param {!proto.yartu.AddLabelToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.AddLabelToCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.addLabelToCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/addLabelToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_addLabelToCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.MoveCardRequest,
 *   !proto.yartu.MoveCardResponse>}
 */
const methodDescriptor_YProject_moveCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/moveCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.MoveCardRequest,
  proto.yartu.MoveCardResponse,
  /**
   * @param {!proto.yartu.MoveCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.MoveCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.MoveCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.MoveCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.MoveCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.moveCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/moveCard',
      request,
      metadata || {},
      methodDescriptor_YProject_moveCard,
      callback);
};


/**
 * @param {!proto.yartu.MoveCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.MoveCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.moveCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/moveCard',
      request,
      metadata || {},
      methodDescriptor_YProject_moveCard);
};


module.exports = proto.yartu;


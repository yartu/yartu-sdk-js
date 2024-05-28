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
 *   !proto.yartu.GetProjectHomeRequest,
 *   !proto.yartu.GetProjectHomeResponse>}
 */
const methodDescriptor_YProject_getProjectHome = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getProjectHome',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetProjectHomeRequest,
  proto.yartu.GetProjectHomeResponse,
  /**
   * @param {!proto.yartu.GetProjectHomeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetProjectHomeResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetProjectHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetProjectHomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetProjectHomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getProjectHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getProjectHome',
      request,
      metadata || {},
      methodDescriptor_YProject_getProjectHome,
      callback);
};


/**
 * @param {!proto.yartu.GetProjectHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetProjectHomeResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getProjectHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getProjectHome',
      request,
      metadata || {},
      methodDescriptor_YProject_getProjectHome);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetMyTaskRequest,
 *   !proto.yartu.GetMyTaskResponse>}
 */
const methodDescriptor_YProject_getMyTask = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getMyTask',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetMyTaskRequest,
  proto.yartu.GetMyTaskResponse,
  /**
   * @param {!proto.yartu.GetMyTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetMyTaskResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetMyTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetMyTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetMyTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getMyTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getMyTask',
      request,
      metadata || {},
      methodDescriptor_YProject_getMyTask,
      callback);
};


/**
 * @param {!proto.yartu.GetMyTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetMyTaskResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getMyTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getMyTask',
      request,
      metadata || {},
      methodDescriptor_YProject_getMyTask);
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
 *   !proto.yartu.ShareAllBoardsRequest,
 *   !proto.yartu.ShareAllBoardsResponse>}
 */
const methodDescriptor_YProject_shareAllBoards = new grpc.web.MethodDescriptor(
  '/yartu.YProject/shareAllBoards',
  grpc.web.MethodType.UNARY,
  proto.yartu.ShareAllBoardsRequest,
  proto.yartu.ShareAllBoardsResponse,
  /**
   * @param {!proto.yartu.ShareAllBoardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ShareAllBoardsResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ShareAllBoardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ShareAllBoardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ShareAllBoardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.shareAllBoards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/shareAllBoards',
      request,
      metadata || {},
      methodDescriptor_YProject_shareAllBoards,
      callback);
};


/**
 * @param {!proto.yartu.ShareAllBoardsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ShareAllBoardsResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.shareAllBoards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/shareAllBoards',
      request,
      metadata || {},
      methodDescriptor_YProject_shareAllBoards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteShareAllBoardsRequest,
 *   !proto.yartu.DeleteShareAllBoardsResponse>}
 */
const methodDescriptor_YProject_deleteShareAllBoards = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteShareAllBoards',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteShareAllBoardsRequest,
  proto.yartu.DeleteShareAllBoardsResponse,
  /**
   * @param {!proto.yartu.DeleteShareAllBoardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteShareAllBoardsResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteShareAllBoardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteShareAllBoardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteShareAllBoardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteShareAllBoards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteShareAllBoards',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteShareAllBoards,
      callback);
};


/**
 * @param {!proto.yartu.DeleteShareAllBoardsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteShareAllBoardsResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteShareAllBoards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteShareAllBoards',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteShareAllBoards);
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
 *   !proto.yartu.DeleteThreadMessageRequest,
 *   !proto.yartu.DeleteThreadMessageResponse>}
 */
const methodDescriptor_YProject_deleteThreadMessage = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteThreadMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteThreadMessageRequest,
  proto.yartu.DeleteThreadMessageResponse,
  /**
   * @param {!proto.yartu.DeleteThreadMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteThreadMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteThreadMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteThreadMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteThreadMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteThreadMessage,
      callback);
};


/**
 * @param {!proto.yartu.DeleteThreadMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteThreadMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteThreadMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteThreadMessage',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteThreadMessage);
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
 *   !proto.yartu.DuplicateBoardRequest,
 *   !proto.yartu.DuplicateBoardResponse>}
 */
const methodDescriptor_YProject_duplicateBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/duplicateBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.DuplicateBoardRequest,
  proto.yartu.DuplicateBoardResponse,
  /**
   * @param {!proto.yartu.DuplicateBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DuplicateBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DuplicateBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DuplicateBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DuplicateBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.duplicateBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/duplicateBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_duplicateBoard,
      callback);
};


/**
 * @param {!proto.yartu.DuplicateBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DuplicateBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.duplicateBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/duplicateBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_duplicateBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.CopyBoardRequest,
 *   !proto.yartu.CopyBoardResponse>}
 */
const methodDescriptor_YProject_copyBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/copyBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.CopyBoardRequest,
  proto.yartu.CopyBoardResponse,
  /**
   * @param {!proto.yartu.CopyBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.CopyBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.CopyBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.CopyBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.CopyBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.copyBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/copyBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_copyBoard,
      callback);
};


/**
 * @param {!proto.yartu.CopyBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.CopyBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.copyBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/copyBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_copyBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.MoveBoardRequest,
 *   !proto.yartu.MoveBoardResponse>}
 */
const methodDescriptor_YProject_moveBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/moveBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.MoveBoardRequest,
  proto.yartu.MoveBoardResponse,
  /**
   * @param {!proto.yartu.MoveBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.MoveBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.MoveBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.MoveBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.MoveBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.moveBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/moveBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_moveBoard,
      callback);
};


/**
 * @param {!proto.yartu.MoveBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.MoveBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.moveBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/moveBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_moveBoard);
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
 *   !proto.yartu.UpsertBoardTemplateRequest,
 *   !proto.yartu.UpsertBoardTemplateResponse>}
 */
const methodDescriptor_YProject_upsertBoardTemplate = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertBoardTemplate',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertBoardTemplateRequest,
  proto.yartu.UpsertBoardTemplateResponse,
  /**
   * @param {!proto.yartu.UpsertBoardTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertBoardTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertBoardTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertBoardTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertBoardTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertBoardTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertBoardTemplate',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertBoardTemplate,
      callback);
};


/**
 * @param {!proto.yartu.UpsertBoardTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertBoardTemplateResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertBoardTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertBoardTemplate',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertBoardTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertColumnRequest,
 *   !proto.yartu.UpsertColumnResponse>}
 */
const methodDescriptor_YProject_upsertColumn = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertColumn',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertColumnRequest,
  proto.yartu.UpsertColumnResponse,
  /**
   * @param {!proto.yartu.UpsertColumnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertColumnResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertColumnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertColumnResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertColumnResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertColumn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertColumn',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertColumn,
      callback);
};


/**
 * @param {!proto.yartu.UpsertColumnRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertColumnResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertColumn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertColumn',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertColumn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteColumnRequest,
 *   !proto.yartu.DeleteColumnResponse>}
 */
const methodDescriptor_YProject_deleteColumn = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteColumn',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteColumnRequest,
  proto.yartu.DeleteColumnResponse,
  /**
   * @param {!proto.yartu.DeleteColumnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteColumnResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteColumnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteColumnResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteColumnResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteColumn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteColumn',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteColumn,
      callback);
};


/**
 * @param {!proto.yartu.DeleteColumnRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteColumnResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteColumn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteColumn',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteColumn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ArchiveAllCardsInColumnRequest,
 *   !proto.yartu.ArchiveAllCardsInColumnResponse>}
 */
const methodDescriptor_YProject_archiveAllCardsInColumn = new grpc.web.MethodDescriptor(
  '/yartu.YProject/archiveAllCardsInColumn',
  grpc.web.MethodType.UNARY,
  proto.yartu.ArchiveAllCardsInColumnRequest,
  proto.yartu.ArchiveAllCardsInColumnResponse,
  /**
   * @param {!proto.yartu.ArchiveAllCardsInColumnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ArchiveAllCardsInColumnResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ArchiveAllCardsInColumnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ArchiveAllCardsInColumnResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ArchiveAllCardsInColumnResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.archiveAllCardsInColumn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/archiveAllCardsInColumn',
      request,
      metadata || {},
      methodDescriptor_YProject_archiveAllCardsInColumn,
      callback);
};


/**
 * @param {!proto.yartu.ArchiveAllCardsInColumnRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ArchiveAllCardsInColumnResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.archiveAllCardsInColumn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/archiveAllCardsInColumn',
      request,
      metadata || {},
      methodDescriptor_YProject_archiveAllCardsInColumn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ShareBoardRequest,
 *   !proto.yartu.ShareBoardResponse>}
 */
const methodDescriptor_YProject_shareBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/shareBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.ShareBoardRequest,
  proto.yartu.ShareBoardResponse,
  /**
   * @param {!proto.yartu.ShareBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ShareBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ShareBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ShareBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ShareBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.shareBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/shareBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_shareBoard,
      callback);
};


/**
 * @param {!proto.yartu.ShareBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ShareBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.shareBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/shareBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_shareBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UnshareBoardRequest,
 *   !proto.yartu.UnshareBoardResponse>}
 */
const methodDescriptor_YProject_unshareBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/unshareBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnshareBoardRequest,
  proto.yartu.UnshareBoardResponse,
  /**
   * @param {!proto.yartu.UnshareBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnshareBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnshareBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnshareBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnshareBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.unshareBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/unshareBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_unshareBoard,
      callback);
};


/**
 * @param {!proto.yartu.UnshareBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnshareBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.unshareBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/unshareBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_unshareBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteSharedBoardRequest,
 *   !proto.yartu.DeleteSharedBoardResponse>}
 */
const methodDescriptor_YProject_deleteSharedBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteSharedBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteSharedBoardRequest,
  proto.yartu.DeleteSharedBoardResponse,
  /**
   * @param {!proto.yartu.DeleteSharedBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteSharedBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteSharedBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteSharedBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteSharedBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteSharedBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteSharedBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteSharedBoard,
      callback);
};


/**
 * @param {!proto.yartu.DeleteSharedBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteSharedBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteSharedBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteSharedBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteSharedBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListSharedBoardRequest,
 *   !proto.yartu.ListSharedBoardResponse>}
 */
const methodDescriptor_YProject_listSharedBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listSharedBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListSharedBoardRequest,
  proto.yartu.ListSharedBoardResponse,
  /**
   * @param {!proto.yartu.ListSharedBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListSharedBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListSharedBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListSharedBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListSharedBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listSharedBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listSharedBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_listSharedBoard,
      callback);
};


/**
 * @param {!proto.yartu.ListSharedBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListSharedBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listSharedBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listSharedBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_listSharedBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListPublicBoardShareRequest,
 *   !proto.yartu.ListPublicBoardShareResponse>}
 */
const methodDescriptor_YProject_listPublicBoardShare = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listPublicBoardShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListPublicBoardShareRequest,
  proto.yartu.ListPublicBoardShareResponse,
  /**
   * @param {!proto.yartu.ListPublicBoardShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListPublicBoardShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListPublicBoardShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListPublicBoardShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListPublicBoardShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listPublicBoardShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listPublicBoardShare',
      request,
      metadata || {},
      methodDescriptor_YProject_listPublicBoardShare,
      callback);
};


/**
 * @param {!proto.yartu.ListPublicBoardShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListPublicBoardShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listPublicBoardShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listPublicBoardShare',
      request,
      metadata || {},
      methodDescriptor_YProject_listPublicBoardShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertPublicBoardShareRequest,
 *   !proto.yartu.UpsertPublicBoardShareResponse>}
 */
const methodDescriptor_YProject_upsertPublicBoardShare = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertPublicBoardShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertPublicBoardShareRequest,
  proto.yartu.UpsertPublicBoardShareResponse,
  /**
   * @param {!proto.yartu.UpsertPublicBoardShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertPublicBoardShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertPublicBoardShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertPublicBoardShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertPublicBoardShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertPublicBoardShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertPublicBoardShare',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertPublicBoardShare,
      callback);
};


/**
 * @param {!proto.yartu.UpsertPublicBoardShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertPublicBoardShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertPublicBoardShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertPublicBoardShare',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertPublicBoardShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeletePublicBoardShareRequest,
 *   !proto.yartu.DeletePublicBoardShareResponse>}
 */
const methodDescriptor_YProject_deletePublicBoardShare = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deletePublicBoardShare',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeletePublicBoardShareRequest,
  proto.yartu.DeletePublicBoardShareResponse,
  /**
   * @param {!proto.yartu.DeletePublicBoardShareRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeletePublicBoardShareResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeletePublicBoardShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeletePublicBoardShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeletePublicBoardShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deletePublicBoardShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deletePublicBoardShare',
      request,
      metadata || {},
      methodDescriptor_YProject_deletePublicBoardShare,
      callback);
};


/**
 * @param {!proto.yartu.DeletePublicBoardShareRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeletePublicBoardShareResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deletePublicBoardShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deletePublicBoardShare',
      request,
      metadata || {},
      methodDescriptor_YProject_deletePublicBoardShare);
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
 *   !proto.yartu.ListCardActivityRequest,
 *   !proto.yartu.ListCardActivityResponse>}
 */
const methodDescriptor_YProject_listCardActivity = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listCardActivity',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCardActivityRequest,
  proto.yartu.ListCardActivityResponse,
  /**
   * @param {!proto.yartu.ListCardActivityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCardActivityResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCardActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCardActivityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCardActivityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listCardActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listCardActivity',
      request,
      metadata || {},
      methodDescriptor_YProject_listCardActivity,
      callback);
};


/**
 * @param {!proto.yartu.ListCardActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCardActivityResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listCardActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listCardActivity',
      request,
      metadata || {},
      methodDescriptor_YProject_listCardActivity);
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
 *   !proto.yartu.DeleteCardRequest,
 *   !proto.yartu.DeleteCardResponse>}
 */
const methodDescriptor_YProject_deleteCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCardRequest,
  proto.yartu.DeleteCardResponse,
  /**
   * @param {!proto.yartu.DeleteCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteCard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCard,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteCard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DuplicateCardRequest,
 *   !proto.yartu.DuplicateCardResponse>}
 */
const methodDescriptor_YProject_duplicateCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/duplicateCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.DuplicateCardRequest,
  proto.yartu.DuplicateCardResponse,
  /**
   * @param {!proto.yartu.DuplicateCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DuplicateCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DuplicateCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DuplicateCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DuplicateCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.duplicateCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/duplicateCard',
      request,
      metadata || {},
      methodDescriptor_YProject_duplicateCard,
      callback);
};


/**
 * @param {!proto.yartu.DuplicateCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DuplicateCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.duplicateCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/duplicateCard',
      request,
      metadata || {},
      methodDescriptor_YProject_duplicateCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.JoinCardRequest,
 *   !proto.yartu.JoinCardResponse>}
 */
const methodDescriptor_YProject_joinCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/joinCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.JoinCardRequest,
  proto.yartu.JoinCardResponse,
  /**
   * @param {!proto.yartu.JoinCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.JoinCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.JoinCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.JoinCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.JoinCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.joinCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/joinCard',
      request,
      metadata || {},
      methodDescriptor_YProject_joinCard,
      callback);
};


/**
 * @param {!proto.yartu.JoinCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.JoinCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.joinCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/joinCard',
      request,
      metadata || {},
      methodDescriptor_YProject_joinCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.LeaveCardRequest,
 *   !proto.yartu.LeaveCardResponse>}
 */
const methodDescriptor_YProject_leaveCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/leaveCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.LeaveCardRequest,
  proto.yartu.LeaveCardResponse,
  /**
   * @param {!proto.yartu.LeaveCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.LeaveCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.LeaveCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.LeaveCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.LeaveCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.leaveCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/leaveCard',
      request,
      metadata || {},
      methodDescriptor_YProject_leaveCard,
      callback);
};


/**
 * @param {!proto.yartu.LeaveCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.LeaveCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.leaveCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/leaveCard',
      request,
      metadata || {},
      methodDescriptor_YProject_leaveCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ArchiveCardRequest,
 *   !proto.yartu.ArchiveCardResponse>}
 */
const methodDescriptor_YProject_archiveCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/archiveCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.ArchiveCardRequest,
  proto.yartu.ArchiveCardResponse,
  /**
   * @param {!proto.yartu.ArchiveCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ArchiveCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ArchiveCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ArchiveCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ArchiveCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.archiveCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/archiveCard',
      request,
      metadata || {},
      methodDescriptor_YProject_archiveCard,
      callback);
};


/**
 * @param {!proto.yartu.ArchiveCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ArchiveCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.archiveCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/archiveCard',
      request,
      metadata || {},
      methodDescriptor_YProject_archiveCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCardAttachmentRequest,
 *   !proto.yartu.UpsertCardAttachmentResponse>}
 */
const methodDescriptor_YProject_upsertCardAttachment = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertCardAttachment',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCardAttachmentRequest,
  proto.yartu.UpsertCardAttachmentResponse,
  /**
   * @param {!proto.yartu.UpsertCardAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCardAttachmentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCardAttachmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCardAttachmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertCardAttachment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCardAttachment,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCardAttachmentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertCardAttachment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCardAttachment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCardAttachmentRequest,
 *   !proto.yartu.ListCardAttachmentResponse>}
 */
const methodDescriptor_YProject_listCardAttachment = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listCardAttachment',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCardAttachmentRequest,
  proto.yartu.ListCardAttachmentResponse,
  /**
   * @param {!proto.yartu.ListCardAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCardAttachmentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCardAttachmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCardAttachmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listCardAttachment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_listCardAttachment,
      callback);
};


/**
 * @param {!proto.yartu.ListCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCardAttachmentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listCardAttachment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_listCardAttachment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListArchivedCardRequest,
 *   !proto.yartu.ListArchivedCardResponse>}
 */
const methodDescriptor_YProject_listArchivedCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listArchivedCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListArchivedCardRequest,
  proto.yartu.ListArchivedCardResponse,
  /**
   * @param {!proto.yartu.ListArchivedCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListArchivedCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListArchivedCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListArchivedCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListArchivedCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listArchivedCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listArchivedCard',
      request,
      metadata || {},
      methodDescriptor_YProject_listArchivedCard,
      callback);
};


/**
 * @param {!proto.yartu.ListArchivedCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListArchivedCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listArchivedCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listArchivedCard',
      request,
      metadata || {},
      methodDescriptor_YProject_listArchivedCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCardAttachmentRequest,
 *   !proto.yartu.DeleteCardAttachmentResponse>}
 */
const methodDescriptor_YProject_deleteCardAttachment = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteCardAttachment',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCardAttachmentRequest,
  proto.yartu.DeleteCardAttachmentResponse,
  /**
   * @param {!proto.yartu.DeleteCardAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCardAttachmentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCardAttachmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCardAttachmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteCardAttachment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCardAttachment,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCardAttachmentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteCardAttachment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCardAttachment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.MoveCardToAnotherBoardRequest,
 *   !proto.yartu.MoveCardToAnotherBoardResponse>}
 */
const methodDescriptor_YProject_moveCardToAnotherBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/moveCardToAnotherBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.MoveCardToAnotherBoardRequest,
  proto.yartu.MoveCardToAnotherBoardResponse,
  /**
   * @param {!proto.yartu.MoveCardToAnotherBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.MoveCardToAnotherBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.MoveCardToAnotherBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.MoveCardToAnotherBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.MoveCardToAnotherBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.moveCardToAnotherBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/moveCardToAnotherBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_moveCardToAnotherBoard,
      callback);
};


/**
 * @param {!proto.yartu.MoveCardToAnotherBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.MoveCardToAnotherBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.moveCardToAnotherBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/moveCardToAnotherBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_moveCardToAnotherBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.CopyCardToAnotherBoardRequest,
 *   !proto.yartu.CopyCardToAnotherBoardResponse>}
 */
const methodDescriptor_YProject_copyCardToAnotherBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/copyCardToAnotherBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.CopyCardToAnotherBoardRequest,
  proto.yartu.CopyCardToAnotherBoardResponse,
  /**
   * @param {!proto.yartu.CopyCardToAnotherBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.CopyCardToAnotherBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.CopyCardToAnotherBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.CopyCardToAnotherBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.CopyCardToAnotherBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.copyCardToAnotherBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/copyCardToAnotherBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_copyCardToAnotherBoard,
      callback);
};


/**
 * @param {!proto.yartu.CopyCardToAnotherBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.CopyCardToAnotherBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.copyCardToAnotherBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/copyCardToAnotherBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_copyCardToAnotherBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCardUsersRequest,
 *   !proto.yartu.UpsertCardUsersResponse>}
 */
const methodDescriptor_YProject_upsertCardUsers = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertCardUsers',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCardUsersRequest,
  proto.yartu.UpsertCardUsersResponse,
  /**
   * @param {!proto.yartu.UpsertCardUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCardUsersResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCardUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCardUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCardUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertCardUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertCardUsers',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCardUsers,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCardUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCardUsersResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertCardUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertCardUsers',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCardUsers);
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
 *   !proto.yartu.DeleteCommentToCardRequest,
 *   !proto.yartu.DeleteCommentToCardResponse>}
 */
const methodDescriptor_YProject_deleteCommentToCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteCommentToCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCommentToCardRequest,
  proto.yartu.DeleteCommentToCardResponse,
  /**
   * @param {!proto.yartu.DeleteCommentToCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCommentToCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCommentToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCommentToCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCommentToCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteCommentToCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteCommentToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCommentToCard,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCommentToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCommentToCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteCommentToCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteCommentToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCommentToCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.AddInteractionToCardRequest,
 *   !proto.yartu.AddInteractionToCardResponse>}
 */
const methodDescriptor_YProject_addInteractionToCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/addInteractionToCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.AddInteractionToCardRequest,
  proto.yartu.AddInteractionToCardResponse,
  /**
   * @param {!proto.yartu.AddInteractionToCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.AddInteractionToCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.AddInteractionToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.AddInteractionToCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.AddInteractionToCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.addInteractionToCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/addInteractionToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_addInteractionToCard,
      callback);
};


/**
 * @param {!proto.yartu.AddInteractionToCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.AddInteractionToCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.addInteractionToCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/addInteractionToCard',
      request,
      metadata || {},
      methodDescriptor_YProject_addInteractionToCard);
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
 *   !proto.yartu.UpsertCheckListRequest,
 *   !proto.yartu.UpsertCheckListResponse>}
 */
const methodDescriptor_YProject_upsertCheckList = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertCheckList',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCheckListRequest,
  proto.yartu.UpsertCheckListResponse,
  /**
   * @param {!proto.yartu.UpsertCheckListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCheckListResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCheckListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCheckListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCheckListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertCheckList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertCheckList',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCheckList,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCheckListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCheckListResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertCheckList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertCheckList',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCheckList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCheckListRequest,
 *   !proto.yartu.DeleteCheckListResponse>}
 */
const methodDescriptor_YProject_deleteCheckList = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteCheckList',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCheckListRequest,
  proto.yartu.DeleteCheckListResponse,
  /**
   * @param {!proto.yartu.DeleteCheckListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCheckListResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCheckListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCheckListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCheckListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteCheckList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteCheckList',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCheckList,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCheckListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCheckListResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteCheckList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteCheckList',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCheckList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCheckListItemRequest,
 *   !proto.yartu.UpsertCheckListItemResponse>}
 */
const methodDescriptor_YProject_upsertCheckListItem = new grpc.web.MethodDescriptor(
  '/yartu.YProject/upsertCheckListItem',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCheckListItemRequest,
  proto.yartu.UpsertCheckListItemResponse,
  /**
   * @param {!proto.yartu.UpsertCheckListItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCheckListItemResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCheckListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCheckListItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCheckListItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.upsertCheckListItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/upsertCheckListItem',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCheckListItem,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCheckListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCheckListItemResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.upsertCheckListItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/upsertCheckListItem',
      request,
      metadata || {},
      methodDescriptor_YProject_upsertCheckListItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCheckListItemRequest,
 *   !proto.yartu.DeleteCheckListItemResponse>}
 */
const methodDescriptor_YProject_deleteCheckListItem = new grpc.web.MethodDescriptor(
  '/yartu.YProject/deleteCheckListItem',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCheckListItemRequest,
  proto.yartu.DeleteCheckListItemResponse,
  /**
   * @param {!proto.yartu.DeleteCheckListItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCheckListItemResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCheckListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCheckListItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCheckListItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.deleteCheckListItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/deleteCheckListItem',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCheckListItem,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCheckListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCheckListItemResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.deleteCheckListItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/deleteCheckListItem',
      request,
      metadata || {},
      methodDescriptor_YProject_deleteCheckListItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.AssignAllCheckListItemsRequest,
 *   !proto.yartu.AssignAllCheckListItemsResponse>}
 */
const methodDescriptor_YProject_assignAllCheckListItems = new grpc.web.MethodDescriptor(
  '/yartu.YProject/assignAllCheckListItems',
  grpc.web.MethodType.UNARY,
  proto.yartu.AssignAllCheckListItemsRequest,
  proto.yartu.AssignAllCheckListItemsResponse,
  /**
   * @param {!proto.yartu.AssignAllCheckListItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.AssignAllCheckListItemsResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.AssignAllCheckListItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.AssignAllCheckListItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.AssignAllCheckListItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.assignAllCheckListItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/assignAllCheckListItems',
      request,
      metadata || {},
      methodDescriptor_YProject_assignAllCheckListItems,
      callback);
};


/**
 * @param {!proto.yartu.AssignAllCheckListItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.AssignAllCheckListItemsResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.assignAllCheckListItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/assignAllCheckListItems',
      request,
      metadata || {},
      methodDescriptor_YProject_assignAllCheckListItems);
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SubscribeCardRequest,
 *   !proto.yartu.SubscribeCardResponse>}
 */
const methodDescriptor_YProject_subscribeCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/subscribeCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.SubscribeCardRequest,
  proto.yartu.SubscribeCardResponse,
  /**
   * @param {!proto.yartu.SubscribeCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SubscribeCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SubscribeCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SubscribeCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SubscribeCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.subscribeCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/subscribeCard',
      request,
      metadata || {},
      methodDescriptor_YProject_subscribeCard,
      callback);
};


/**
 * @param {!proto.yartu.SubscribeCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SubscribeCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.subscribeCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/subscribeCard',
      request,
      metadata || {},
      methodDescriptor_YProject_subscribeCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetProjectorOrBoardUserListRequest,
 *   !proto.yartu.GetProjectorOrBoardUserListResponse>}
 */
const methodDescriptor_YProject_getProjectorOrBoardUserList = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getProjectorOrBoardUserList',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetProjectorOrBoardUserListRequest,
  proto.yartu.GetProjectorOrBoardUserListResponse,
  /**
   * @param {!proto.yartu.GetProjectorOrBoardUserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetProjectorOrBoardUserListResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetProjectorOrBoardUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetProjectorOrBoardUserListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetProjectorOrBoardUserListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getProjectorOrBoardUserList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getProjectorOrBoardUserList',
      request,
      metadata || {},
      methodDescriptor_YProject_getProjectorOrBoardUserList,
      callback);
};


/**
 * @param {!proto.yartu.GetProjectorOrBoardUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetProjectorOrBoardUserListResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getProjectorOrBoardUserList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getProjectorOrBoardUserList',
      request,
      metadata || {},
      methodDescriptor_YProject_getProjectorOrBoardUserList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetProjectFilesRequest,
 *   !proto.yartu.GetProjectFilesResponse>}
 */
const methodDescriptor_YProject_getProjectFiles = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getProjectFiles',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetProjectFilesRequest,
  proto.yartu.GetProjectFilesResponse,
  /**
   * @param {!proto.yartu.GetProjectFilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetProjectFilesResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetProjectFilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetProjectFilesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetProjectFilesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getProjectFiles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getProjectFiles',
      request,
      metadata || {},
      methodDescriptor_YProject_getProjectFiles,
      callback);
};


/**
 * @param {!proto.yartu.GetProjectFilesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetProjectFilesResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getProjectFiles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getProjectFiles',
      request,
      metadata || {},
      methodDescriptor_YProject_getProjectFiles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListBoardActivityRequest,
 *   !proto.yartu.ListBoardActivityResponse>}
 */
const methodDescriptor_YProject_listBoardActivity = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listBoardActivity',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListBoardActivityRequest,
  proto.yartu.ListBoardActivityResponse,
  /**
   * @param {!proto.yartu.ListBoardActivityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListBoardActivityResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListBoardActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListBoardActivityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListBoardActivityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listBoardActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listBoardActivity',
      request,
      metadata || {},
      methodDescriptor_YProject_listBoardActivity,
      callback);
};


/**
 * @param {!proto.yartu.ListBoardActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListBoardActivityResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listBoardActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listBoardActivity',
      request,
      metadata || {},
      methodDescriptor_YProject_listBoardActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetPublicBoardRequest,
 *   !proto.yartu.GetPublicBoardResponse>}
 */
const methodDescriptor_YProject_getPublicBoard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getPublicBoard',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetPublicBoardRequest,
  proto.yartu.GetPublicBoardResponse,
  /**
   * @param {!proto.yartu.GetPublicBoardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetPublicBoardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetPublicBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetPublicBoardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetPublicBoardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getPublicBoard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getPublicBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_getPublicBoard,
      callback);
};


/**
 * @param {!proto.yartu.GetPublicBoardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetPublicBoardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getPublicBoard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getPublicBoard',
      request,
      metadata || {},
      methodDescriptor_YProject_getPublicBoard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetPublicCardRequest,
 *   !proto.yartu.GetPublicCardResponse>}
 */
const methodDescriptor_YProject_getPublicCard = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getPublicCard',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetPublicCardRequest,
  proto.yartu.GetPublicCardResponse,
  /**
   * @param {!proto.yartu.GetPublicCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetPublicCardResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetPublicCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetPublicCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetPublicCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getPublicCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getPublicCard',
      request,
      metadata || {},
      methodDescriptor_YProject_getPublicCard,
      callback);
};


/**
 * @param {!proto.yartu.GetPublicCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetPublicCardResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getPublicCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getPublicCard',
      request,
      metadata || {},
      methodDescriptor_YProject_getPublicCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListPublicCardActivityRequest,
 *   !proto.yartu.ListPublicCardActivityResponse>}
 */
const methodDescriptor_YProject_listPublicCardActivity = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listPublicCardActivity',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListPublicCardActivityRequest,
  proto.yartu.ListPublicCardActivityResponse,
  /**
   * @param {!proto.yartu.ListPublicCardActivityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListPublicCardActivityResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListPublicCardActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListPublicCardActivityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListPublicCardActivityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listPublicCardActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listPublicCardActivity',
      request,
      metadata || {},
      methodDescriptor_YProject_listPublicCardActivity,
      callback);
};


/**
 * @param {!proto.yartu.ListPublicCardActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListPublicCardActivityResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listPublicCardActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listPublicCardActivity',
      request,
      metadata || {},
      methodDescriptor_YProject_listPublicCardActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListPublicCardAttachmentRequest,
 *   !proto.yartu.ListPublicCardAttachmentResponse>}
 */
const methodDescriptor_YProject_listPublicCardAttachment = new grpc.web.MethodDescriptor(
  '/yartu.YProject/listPublicCardAttachment',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListPublicCardAttachmentRequest,
  proto.yartu.ListPublicCardAttachmentResponse,
  /**
   * @param {!proto.yartu.ListPublicCardAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListPublicCardAttachmentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListPublicCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListPublicCardAttachmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListPublicCardAttachmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.listPublicCardAttachment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/listPublicCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_listPublicCardAttachment,
      callback);
};


/**
 * @param {!proto.yartu.ListPublicCardAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListPublicCardAttachmentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.listPublicCardAttachment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/listPublicCardAttachment',
      request,
      metadata || {},
      methodDescriptor_YProject_listPublicCardAttachment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetBoardStatisticsRequest,
 *   !proto.yartu.GetBoardStatisticsResponse>}
 */
const methodDescriptor_YProject_getBoardStatistics = new grpc.web.MethodDescriptor(
  '/yartu.YProject/getBoardStatistics',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetBoardStatisticsRequest,
  proto.yartu.GetBoardStatisticsResponse,
  /**
   * @param {!proto.yartu.GetBoardStatisticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetBoardStatisticsResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetBoardStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetBoardStatisticsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetBoardStatisticsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YProjectClient.prototype.getBoardStatistics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YProject/getBoardStatistics',
      request,
      metadata || {},
      methodDescriptor_YProject_getBoardStatistics,
      callback);
};


/**
 * @param {!proto.yartu.GetBoardStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetBoardStatisticsResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YProjectPromiseClient.prototype.getBoardStatistics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YProject/getBoardStatistics',
      request,
      metadata || {},
      methodDescriptor_YProject_getBoardStatistics);
};


module.exports = proto.yartu;


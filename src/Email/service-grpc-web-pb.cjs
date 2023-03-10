/**
 * @fileoverview gRPC-Web generated client stub for yartu_mail
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.1
// source: service/public/email.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.yartu_mail = require('./service-pb.cjs');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yartu_mail.YEmailClient =
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
proto.yartu_mail.YEmailPromiseClient =
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
 *   !proto.yartu_mail.ListFolderRequest,
 *   !proto.yartu_mail.ListFolderResponse>}
 */
const methodDescriptor_YEmail_listFolder = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/listFolder',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.ListFolderRequest,
  proto.yartu_mail.ListFolderResponse,
  /**
   * @param {!proto.yartu_mail.ListFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.ListFolderResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.ListFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.ListFolderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.ListFolderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.listFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/listFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_listFolder,
      callback);
};


/**
 * @param {!proto.yartu_mail.ListFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.ListFolderResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.listFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/listFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_listFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.UpsertFolderRequest,
 *   !proto.yartu_mail.UpsertFolderResponse>}
 */
const methodDescriptor_YEmail_upsertFolder = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/upsertFolder',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.UpsertFolderRequest,
  proto.yartu_mail.UpsertFolderResponse,
  /**
   * @param {!proto.yartu_mail.UpsertFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.UpsertFolderResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.UpsertFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.UpsertFolderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.UpsertFolderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.upsertFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/upsertFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_upsertFolder,
      callback);
};


/**
 * @param {!proto.yartu_mail.UpsertFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.UpsertFolderResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.upsertFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/upsertFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_upsertFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.DeleteFolderRequest,
 *   !proto.yartu_mail.DeleteFolderResponse>}
 */
const methodDescriptor_YEmail_deleteFolder = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/deleteFolder',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.DeleteFolderRequest,
  proto.yartu_mail.DeleteFolderResponse,
  /**
   * @param {!proto.yartu_mail.DeleteFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.DeleteFolderResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.DeleteFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.DeleteFolderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.DeleteFolderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.deleteFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/deleteFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_deleteFolder,
      callback);
};


/**
 * @param {!proto.yartu_mail.DeleteFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.DeleteFolderResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.deleteFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/deleteFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_deleteFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.BulkActionFolderRequest,
 *   !proto.yartu_mail.BulkActionFolderResponse>}
 */
const methodDescriptor_YEmail_bulkActionFolder = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/bulkActionFolder',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.BulkActionFolderRequest,
  proto.yartu_mail.BulkActionFolderResponse,
  /**
   * @param {!proto.yartu_mail.BulkActionFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.BulkActionFolderResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.BulkActionFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.BulkActionFolderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.BulkActionFolderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.bulkActionFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/bulkActionFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_bulkActionFolder,
      callback);
};


/**
 * @param {!proto.yartu_mail.BulkActionFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.BulkActionFolderResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.bulkActionFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/bulkActionFolder',
      request,
      metadata || {},
      methodDescriptor_YEmail_bulkActionFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.ListMessageRequest,
 *   !proto.yartu_mail.ListMessageResponse>}
 */
const methodDescriptor_YEmail_listMessage = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/listMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.ListMessageRequest,
  proto.yartu_mail.ListMessageResponse,
  /**
   * @param {!proto.yartu_mail.ListMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.ListMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.ListMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.ListMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.ListMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.listMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/listMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_listMessage,
      callback);
};


/**
 * @param {!proto.yartu_mail.ListMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.ListMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.listMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/listMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_listMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.GetMessageRequest,
 *   !proto.yartu_mail.GetMessageResponse>}
 */
const methodDescriptor_YEmail_getMessage = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/getMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.GetMessageRequest,
  proto.yartu_mail.GetMessageResponse,
  /**
   * @param {!proto.yartu_mail.GetMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.GetMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.GetMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.GetMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.GetMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.getMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/getMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_getMessage,
      callback);
};


/**
 * @param {!proto.yartu_mail.GetMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.GetMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.getMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/getMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_getMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.SendMessageRequest,
 *   !proto.yartu_mail.SendMessageResponse>}
 */
const methodDescriptor_YEmail_sendMessage = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/sendMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.SendMessageRequest,
  proto.yartu_mail.SendMessageResponse,
  /**
   * @param {!proto.yartu_mail.SendMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.SendMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.SendMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.SendMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/sendMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_sendMessage,
      callback);
};


/**
 * @param {!proto.yartu_mail.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.SendMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/sendMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_sendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.ChangeMessageFlagRequest,
 *   !proto.yartu_mail.ChangeMessageFlagResponse>}
 */
const methodDescriptor_YEmail_changeMessageFlag = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/changeMessageFlag',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.ChangeMessageFlagRequest,
  proto.yartu_mail.ChangeMessageFlagResponse,
  /**
   * @param {!proto.yartu_mail.ChangeMessageFlagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.ChangeMessageFlagResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.ChangeMessageFlagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.ChangeMessageFlagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.ChangeMessageFlagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.changeMessageFlag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/changeMessageFlag',
      request,
      metadata || {},
      methodDescriptor_YEmail_changeMessageFlag,
      callback);
};


/**
 * @param {!proto.yartu_mail.ChangeMessageFlagRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.ChangeMessageFlagResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.changeMessageFlag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/changeMessageFlag',
      request,
      metadata || {},
      methodDescriptor_YEmail_changeMessageFlag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.MoveMessageRequest,
 *   !proto.yartu_mail.MoveMessageResponse>}
 */
const methodDescriptor_YEmail_moveMessage = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/moveMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.MoveMessageRequest,
  proto.yartu_mail.MoveMessageResponse,
  /**
   * @param {!proto.yartu_mail.MoveMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.MoveMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.MoveMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.MoveMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.MoveMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.moveMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/moveMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_moveMessage,
      callback);
};


/**
 * @param {!proto.yartu_mail.MoveMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.MoveMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.moveMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/moveMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_moveMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.DeleteMessageRequest,
 *   !proto.yartu_mail.DeleteMessageResponse>}
 */
const methodDescriptor_YEmail_deleteMessage = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/deleteMessage',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.DeleteMessageRequest,
  proto.yartu_mail.DeleteMessageResponse,
  /**
   * @param {!proto.yartu_mail.DeleteMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.DeleteMessageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.DeleteMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.DeleteMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.DeleteMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.deleteMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/deleteMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_deleteMessage,
      callback);
};


/**
 * @param {!proto.yartu_mail.DeleteMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.DeleteMessageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.deleteMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/deleteMessage',
      request,
      metadata || {},
      methodDescriptor_YEmail_deleteMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.SaveDraftRequest,
 *   !proto.yartu_mail.SaveDraftResponse>}
 */
const methodDescriptor_YEmail_saveDraft = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/saveDraft',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.SaveDraftRequest,
  proto.yartu_mail.SaveDraftResponse,
  /**
   * @param {!proto.yartu_mail.SaveDraftRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.SaveDraftResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.SaveDraftRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.SaveDraftResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.SaveDraftResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.saveDraft =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/saveDraft',
      request,
      metadata || {},
      methodDescriptor_YEmail_saveDraft,
      callback);
};


/**
 * @param {!proto.yartu_mail.SaveDraftRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.SaveDraftResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.saveDraft =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/saveDraft',
      request,
      metadata || {},
      methodDescriptor_YEmail_saveDraft);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.UploadAttachmentRequest,
 *   !proto.yartu_mail.UploadAttachmentResponse>}
 */
const methodDescriptor_YEmail_uploadAttachment = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/uploadAttachment',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.UploadAttachmentRequest,
  proto.yartu_mail.UploadAttachmentResponse,
  /**
   * @param {!proto.yartu_mail.UploadAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.UploadAttachmentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.UploadAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.UploadAttachmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.UploadAttachmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.uploadAttachment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/uploadAttachment',
      request,
      metadata || {},
      methodDescriptor_YEmail_uploadAttachment,
      callback);
};


/**
 * @param {!proto.yartu_mail.UploadAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.UploadAttachmentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.uploadAttachment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/uploadAttachment',
      request,
      metadata || {},
      methodDescriptor_YEmail_uploadAttachment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.DownloadAttachmentRequest,
 *   !proto.yartu_mail.DownloadAttachmentResponse>}
 */
const methodDescriptor_YEmail_downloadAttachment = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/downloadAttachment',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.DownloadAttachmentRequest,
  proto.yartu_mail.DownloadAttachmentResponse,
  /**
   * @param {!proto.yartu_mail.DownloadAttachmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.DownloadAttachmentResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.DownloadAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.DownloadAttachmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.DownloadAttachmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.downloadAttachment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/downloadAttachment',
      request,
      metadata || {},
      methodDescriptor_YEmail_downloadAttachment,
      callback);
};


/**
 * @param {!proto.yartu_mail.DownloadAttachmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.DownloadAttachmentResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.downloadAttachment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/downloadAttachment',
      request,
      metadata || {},
      methodDescriptor_YEmail_downloadAttachment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.GetInfoRequest,
 *   !proto.yartu_mail.GetInfoResponse>}
 */
const methodDescriptor_YEmail_getInfo = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/getInfo',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.GetInfoRequest,
  proto.yartu_mail.GetInfoResponse,
  /**
   * @param {!proto.yartu_mail.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.GetInfoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.GetInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.GetInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.getInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/getInfo',
      request,
      metadata || {},
      methodDescriptor_YEmail_getInfo,
      callback);
};


/**
 * @param {!proto.yartu_mail.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.GetInfoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.getInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/getInfo',
      request,
      metadata || {},
      methodDescriptor_YEmail_getInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu_mail.SearchRequest,
 *   !proto.yartu_mail.SearchResponse>}
 */
const methodDescriptor_YEmail_search = new grpc.web.MethodDescriptor(
  '/yartu_mail.YEmail/search',
  grpc.web.MethodType.UNARY,
  proto.yartu_mail.SearchRequest,
  proto.yartu_mail.SearchResponse,
  /**
   * @param {!proto.yartu_mail.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu_mail.SearchResponse.deserializeBinary
);


/**
 * @param {!proto.yartu_mail.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu_mail.SearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu_mail.SearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu_mail.YEmailClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu_mail.YEmail/search',
      request,
      metadata || {},
      methodDescriptor_YEmail_search,
      callback);
};


/**
 * @param {!proto.yartu_mail.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu_mail.SearchResponse>}
 *     Promise that resolves to the response
 */
proto.yartu_mail.YEmailPromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu_mail.YEmail/search',
      request,
      metadata || {},
      methodDescriptor_YEmail_search);
};


module.exports = proto.yartu_mail;


/**
 * @fileoverview gRPC-Web generated client stub for yartu
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.9
// source: account/grpc/service.proto


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
proto.yartu.YAccountClient =
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
proto.yartu.YAccountPromiseClient =
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
 *   !proto.yartu.GetInfoRequest,
 *   !proto.yartu.GetInfoResponse>}
 */
const methodDescriptor_YAccount_getInfo = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/getInfo',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetInfoRequest,
  proto.yartu.GetInfoResponse,
  /**
   * @param {!proto.yartu.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetInfoResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.getInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/getInfo',
      request,
      metadata || {},
      methodDescriptor_YAccount_getInfo,
      callback);
};


/**
 * @param {!proto.yartu.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetInfoResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.getInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/getInfo',
      request,
      metadata || {},
      methodDescriptor_YAccount_getInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertAccountRequest,
 *   !proto.yartu.UpsertAccountResponse>}
 */
const methodDescriptor_YAccount_upsertAccount = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/upsertAccount',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertAccountRequest,
  proto.yartu.UpsertAccountResponse,
  /**
   * @param {!proto.yartu.UpsertAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertAccountResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.upsertAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/upsertAccount',
      request,
      metadata || {},
      methodDescriptor_YAccount_upsertAccount,
      callback);
};


/**
 * @param {!proto.yartu.UpsertAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertAccountResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.upsertAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/upsertAccount',
      request,
      metadata || {},
      methodDescriptor_YAccount_upsertAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.PurgeAccountRequest,
 *   !proto.yartu.PurgeAccountResponse>}
 */
const methodDescriptor_YAccount_purgeAccount = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/purgeAccount',
  grpc.web.MethodType.UNARY,
  proto.yartu.PurgeAccountRequest,
  proto.yartu.PurgeAccountResponse,
  /**
   * @param {!proto.yartu.PurgeAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.PurgeAccountResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.PurgeAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.PurgeAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.PurgeAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.purgeAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/purgeAccount',
      request,
      metadata || {},
      methodDescriptor_YAccount_purgeAccount,
      callback);
};


/**
 * @param {!proto.yartu.PurgeAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.PurgeAccountResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.purgeAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/purgeAccount',
      request,
      metadata || {},
      methodDescriptor_YAccount_purgeAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListEmailSignatureRequest,
 *   !proto.yartu.ListEmailSignatureResponse>}
 */
const methodDescriptor_YAccount_listEmailSignature = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/listEmailSignature',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListEmailSignatureRequest,
  proto.yartu.ListEmailSignatureResponse,
  /**
   * @param {!proto.yartu.ListEmailSignatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListEmailSignatureResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListEmailSignatureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListEmailSignatureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.listEmailSignature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/listEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_listEmailSignature,
      callback);
};


/**
 * @param {!proto.yartu.ListEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListEmailSignatureResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.listEmailSignature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/listEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_listEmailSignature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetEmailSignatureRequest,
 *   !proto.yartu.GetEmailSignatureResponse>}
 */
const methodDescriptor_YAccount_getEmailSignature = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/getEmailSignature',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetEmailSignatureRequest,
  proto.yartu.GetEmailSignatureResponse,
  /**
   * @param {!proto.yartu.GetEmailSignatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetEmailSignatureResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetEmailSignatureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetEmailSignatureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.getEmailSignature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/getEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailSignature,
      callback);
};


/**
 * @param {!proto.yartu.GetEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetEmailSignatureResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.getEmailSignature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/getEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailSignature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertEmailSignatureRequest,
 *   !proto.yartu.UpsertEmailSignatureResponse>}
 */
const methodDescriptor_YAccount_upsertEmailSignature = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/upsertEmailSignature',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertEmailSignatureRequest,
  proto.yartu.UpsertEmailSignatureResponse,
  /**
   * @param {!proto.yartu.UpsertEmailSignatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertEmailSignatureResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertEmailSignatureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertEmailSignatureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.upsertEmailSignature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/upsertEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_upsertEmailSignature,
      callback);
};


/**
 * @param {!proto.yartu.UpsertEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertEmailSignatureResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.upsertEmailSignature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/upsertEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_upsertEmailSignature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteEmailSignatureRequest,
 *   !proto.yartu.DeleteEmailSignatureResponse>}
 */
const methodDescriptor_YAccount_deleteEmailSignature = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/deleteEmailSignature',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteEmailSignatureRequest,
  proto.yartu.DeleteEmailSignatureResponse,
  /**
   * @param {!proto.yartu.DeleteEmailSignatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteEmailSignatureResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteEmailSignatureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteEmailSignatureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.deleteEmailSignature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/deleteEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_deleteEmailSignature,
      callback);
};


/**
 * @param {!proto.yartu.DeleteEmailSignatureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteEmailSignatureResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.deleteEmailSignature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/deleteEmailSignature',
      request,
      metadata || {},
      methodDescriptor_YAccount_deleteEmailSignature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListEmailRuleRequest,
 *   !proto.yartu.ListEmailRuleResponse>}
 */
const methodDescriptor_YAccount_listEmailRule = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/listEmailRule',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListEmailRuleRequest,
  proto.yartu.ListEmailRuleResponse,
  /**
   * @param {!proto.yartu.ListEmailRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListEmailRuleResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListEmailRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListEmailRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.listEmailRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/listEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_listEmailRule,
      callback);
};


/**
 * @param {!proto.yartu.ListEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListEmailRuleResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.listEmailRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/listEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_listEmailRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetEmailRuleRequest,
 *   !proto.yartu.GetEmailRuleResponse>}
 */
const methodDescriptor_YAccount_getEmailRule = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/getEmailRule',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetEmailRuleRequest,
  proto.yartu.GetEmailRuleResponse,
  /**
   * @param {!proto.yartu.GetEmailRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetEmailRuleResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetEmailRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetEmailRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.getEmailRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/getEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailRule,
      callback);
};


/**
 * @param {!proto.yartu.GetEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetEmailRuleResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.getEmailRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/getEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertEmailRuleRequest,
 *   !proto.yartu.UpsertEmailRuleResponse>}
 */
const methodDescriptor_YAccount_upsertEmailRule = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/upsertEmailRule',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertEmailRuleRequest,
  proto.yartu.UpsertEmailRuleResponse,
  /**
   * @param {!proto.yartu.UpsertEmailRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertEmailRuleResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertEmailRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertEmailRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.upsertEmailRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/upsertEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_upsertEmailRule,
      callback);
};


/**
 * @param {!proto.yartu.UpsertEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertEmailRuleResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.upsertEmailRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/upsertEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_upsertEmailRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteEmailRuleRequest,
 *   !proto.yartu.DeleteEmailRuleResponse>}
 */
const methodDescriptor_YAccount_deleteEmailRule = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/deleteEmailRule',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteEmailRuleRequest,
  proto.yartu.DeleteEmailRuleResponse,
  /**
   * @param {!proto.yartu.DeleteEmailRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteEmailRuleResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteEmailRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteEmailRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.deleteEmailRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/deleteEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_deleteEmailRule,
      callback);
};


/**
 * @param {!proto.yartu.DeleteEmailRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteEmailRuleResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.deleteEmailRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/deleteEmailRule',
      request,
      metadata || {},
      methodDescriptor_YAccount_deleteEmailRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetEmailForwardingRequest,
 *   !proto.yartu.GetEmailForwardingResponse>}
 */
const methodDescriptor_YAccount_getEmailForwarding = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/getEmailForwarding',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetEmailForwardingRequest,
  proto.yartu.GetEmailForwardingResponse,
  /**
   * @param {!proto.yartu.GetEmailForwardingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetEmailForwardingResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetEmailForwardingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetEmailForwardingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetEmailForwardingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.getEmailForwarding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/getEmailForwarding',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailForwarding,
      callback);
};


/**
 * @param {!proto.yartu.GetEmailForwardingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetEmailForwardingResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.getEmailForwarding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/getEmailForwarding',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailForwarding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SetEmailForwardingRequest,
 *   !proto.yartu.SetEmailForwardingResponse>}
 */
const methodDescriptor_YAccount_setEmailForwarding = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/setEmailForwarding',
  grpc.web.MethodType.UNARY,
  proto.yartu.SetEmailForwardingRequest,
  proto.yartu.SetEmailForwardingResponse,
  /**
   * @param {!proto.yartu.SetEmailForwardingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SetEmailForwardingResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SetEmailForwardingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SetEmailForwardingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SetEmailForwardingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.setEmailForwarding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/setEmailForwarding',
      request,
      metadata || {},
      methodDescriptor_YAccount_setEmailForwarding,
      callback);
};


/**
 * @param {!proto.yartu.SetEmailForwardingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SetEmailForwardingResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.setEmailForwarding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/setEmailForwarding',
      request,
      metadata || {},
      methodDescriptor_YAccount_setEmailForwarding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetEmailAutoReplyRequest,
 *   !proto.yartu.GetEmailAutoReplyResponse>}
 */
const methodDescriptor_YAccount_getEmailAutoReply = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/getEmailAutoReply',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetEmailAutoReplyRequest,
  proto.yartu.GetEmailAutoReplyResponse,
  /**
   * @param {!proto.yartu.GetEmailAutoReplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetEmailAutoReplyResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetEmailAutoReplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetEmailAutoReplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetEmailAutoReplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.getEmailAutoReply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/getEmailAutoReply',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailAutoReply,
      callback);
};


/**
 * @param {!proto.yartu.GetEmailAutoReplyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetEmailAutoReplyResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.getEmailAutoReply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/getEmailAutoReply',
      request,
      metadata || {},
      methodDescriptor_YAccount_getEmailAutoReply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.SetEmailAutoReplyRequest,
 *   !proto.yartu.SetEmailAutoReplyResponse>}
 */
const methodDescriptor_YAccount_setEmailAutoReply = new grpc.web.MethodDescriptor(
  '/yartu.YAccount/setEmailAutoReply',
  grpc.web.MethodType.UNARY,
  proto.yartu.SetEmailAutoReplyRequest,
  proto.yartu.SetEmailAutoReplyResponse,
  /**
   * @param {!proto.yartu.SetEmailAutoReplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.SetEmailAutoReplyResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.SetEmailAutoReplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.SetEmailAutoReplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.SetEmailAutoReplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAccountClient.prototype.setEmailAutoReply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAccount/setEmailAutoReply',
      request,
      metadata || {},
      methodDescriptor_YAccount_setEmailAutoReply,
      callback);
};


/**
 * @param {!proto.yartu.SetEmailAutoReplyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.SetEmailAutoReplyResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAccountPromiseClient.prototype.setEmailAutoReply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAccount/setEmailAutoReply',
      request,
      metadata || {},
      methodDescriptor_YAccount_setEmailAutoReply);
};


module.exports = proto.yartu;


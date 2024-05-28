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
proto.yartu.YCustomerClient =
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
proto.yartu.YCustomerPromiseClient =
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
 *   !proto.yartu.GetCustomerRealmsRequest,
 *   !proto.yartu.GetCustomerRealmsResponse>}
 */
const methodDescriptor_YCustomer_getCustomerRealms = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getCustomerRealms',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetCustomerRealmsRequest,
  proto.yartu.GetCustomerRealmsResponse,
  /**
   * @param {!proto.yartu.GetCustomerRealmsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetCustomerRealmsResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetCustomerRealmsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetCustomerRealmsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetCustomerRealmsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getCustomerRealms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getCustomerRealms',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getCustomerRealms,
      callback);
};


/**
 * @param {!proto.yartu.GetCustomerRealmsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetCustomerRealmsResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getCustomerRealms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getCustomerRealms',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getCustomerRealms);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetCustomerRealmRequest,
 *   !proto.yartu.GetCustomerRealmResponse>}
 */
const methodDescriptor_YCustomer_getCustomerRealm = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getCustomerRealm',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetCustomerRealmRequest,
  proto.yartu.GetCustomerRealmResponse,
  /**
   * @param {!proto.yartu.GetCustomerRealmRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetCustomerRealmResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetCustomerRealmRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetCustomerRealmResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetCustomerRealmResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getCustomerRealm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getCustomerRealm',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getCustomerRealm,
      callback);
};


/**
 * @param {!proto.yartu.GetCustomerRealmRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetCustomerRealmResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getCustomerRealm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getCustomerRealm',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getCustomerRealm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCustomerMemberRequest,
 *   !proto.yartu.ListCustomerMemberResponse>}
 */
const methodDescriptor_YCustomer_listCustomerMember = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listCustomerMember',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCustomerMemberRequest,
  proto.yartu.ListCustomerMemberResponse,
  /**
   * @param {!proto.yartu.ListCustomerMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCustomerMemberResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCustomerMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCustomerMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listCustomerMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerMember,
      callback);
};


/**
 * @param {!proto.yartu.ListCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCustomerMemberResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listCustomerMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ExportCustomerRequest,
 *   !proto.yartu.ExportCustomerResponse>}
 */
const methodDescriptor_YCustomer_exportCustomer = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/exportCustomer',
  grpc.web.MethodType.UNARY,
  proto.yartu.ExportCustomerRequest,
  proto.yartu.ExportCustomerResponse,
  /**
   * @param {!proto.yartu.ExportCustomerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ExportCustomerResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ExportCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ExportCustomerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ExportCustomerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.exportCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/exportCustomer',
      request,
      metadata || {},
      methodDescriptor_YCustomer_exportCustomer,
      callback);
};


/**
 * @param {!proto.yartu.ExportCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ExportCustomerResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.exportCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/exportCustomer',
      request,
      metadata || {},
      methodDescriptor_YCustomer_exportCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetCustomerMemberRequest,
 *   !proto.yartu.GetCustomerMemberResponse>}
 */
const methodDescriptor_YCustomer_getCustomerMember = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getCustomerMember',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetCustomerMemberRequest,
  proto.yartu.GetCustomerMemberResponse,
  /**
   * @param {!proto.yartu.GetCustomerMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetCustomerMemberResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetCustomerMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetCustomerMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getCustomerMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getCustomerMember,
      callback);
};


/**
 * @param {!proto.yartu.GetCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetCustomerMemberResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getCustomerMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getCustomerMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCustomerMemberRequest,
 *   !proto.yartu.UpsertCustomerMemberResponse>}
 */
const methodDescriptor_YCustomer_upsertCustomerMember = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/upsertCustomerMember',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCustomerMemberRequest,
  proto.yartu.UpsertCustomerMemberResponse,
  /**
   * @param {!proto.yartu.UpsertCustomerMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCustomerMemberResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCustomerMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCustomerMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.upsertCustomerMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerMember,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCustomerMemberResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.upsertCustomerMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ToggleCustomerMemberAsRealmManagerRequest,
 *   !proto.yartu.ToggleCustomerMemberAsRealmManagerResponse>}
 */
const methodDescriptor_YCustomer_toggleCustomerMemberAsRealmManager = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/toggleCustomerMemberAsRealmManager',
  grpc.web.MethodType.UNARY,
  proto.yartu.ToggleCustomerMemberAsRealmManagerRequest,
  proto.yartu.ToggleCustomerMemberAsRealmManagerResponse,
  /**
   * @param {!proto.yartu.ToggleCustomerMemberAsRealmManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ToggleCustomerMemberAsRealmManagerResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ToggleCustomerMemberAsRealmManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ToggleCustomerMemberAsRealmManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ToggleCustomerMemberAsRealmManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.toggleCustomerMemberAsRealmManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/toggleCustomerMemberAsRealmManager',
      request,
      metadata || {},
      methodDescriptor_YCustomer_toggleCustomerMemberAsRealmManager,
      callback);
};


/**
 * @param {!proto.yartu.ToggleCustomerMemberAsRealmManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ToggleCustomerMemberAsRealmManagerResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.toggleCustomerMemberAsRealmManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/toggleCustomerMemberAsRealmManager',
      request,
      metadata || {},
      methodDescriptor_YCustomer_toggleCustomerMemberAsRealmManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCustomerMemberRequest,
 *   !proto.yartu.DeleteCustomerMemberResponse>}
 */
const methodDescriptor_YCustomer_deleteCustomerMember = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/deleteCustomerMember',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCustomerMemberRequest,
  proto.yartu.DeleteCustomerMemberResponse,
  /**
   * @param {!proto.yartu.DeleteCustomerMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCustomerMemberResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCustomerMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCustomerMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.deleteCustomerMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerMember,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCustomerMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCustomerMemberResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.deleteCustomerMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ResetCustomerMemberPasswordRequest,
 *   !proto.yartu.ResetCustomerMemberPasswordResponse>}
 */
const methodDescriptor_YCustomer_resetCustomerMemberPassword = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/resetCustomerMemberPassword',
  grpc.web.MethodType.UNARY,
  proto.yartu.ResetCustomerMemberPasswordRequest,
  proto.yartu.ResetCustomerMemberPasswordResponse,
  /**
   * @param {!proto.yartu.ResetCustomerMemberPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ResetCustomerMemberPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ResetCustomerMemberPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ResetCustomerMemberPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ResetCustomerMemberPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.resetCustomerMemberPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/resetCustomerMemberPassword',
      request,
      metadata || {},
      methodDescriptor_YCustomer_resetCustomerMemberPassword,
      callback);
};


/**
 * @param {!proto.yartu.ResetCustomerMemberPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ResetCustomerMemberPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.resetCustomerMemberPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/resetCustomerMemberPassword',
      request,
      metadata || {},
      methodDescriptor_YCustomer_resetCustomerMemberPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ChangeCustomerMemberStatusRequest,
 *   !proto.yartu.ChangeCustomerMemberStatusResponse>}
 */
const methodDescriptor_YCustomer_changeCustomerMemberStatus = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/changeCustomerMemberStatus',
  grpc.web.MethodType.UNARY,
  proto.yartu.ChangeCustomerMemberStatusRequest,
  proto.yartu.ChangeCustomerMemberStatusResponse,
  /**
   * @param {!proto.yartu.ChangeCustomerMemberStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ChangeCustomerMemberStatusResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ChangeCustomerMemberStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ChangeCustomerMemberStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ChangeCustomerMemberStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.changeCustomerMemberStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/changeCustomerMemberStatus',
      request,
      metadata || {},
      methodDescriptor_YCustomer_changeCustomerMemberStatus,
      callback);
};


/**
 * @param {!proto.yartu.ChangeCustomerMemberStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ChangeCustomerMemberStatusResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.changeCustomerMemberStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/changeCustomerMemberStatus',
      request,
      metadata || {},
      methodDescriptor_YCustomer_changeCustomerMemberStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCustomerGroupRequest,
 *   !proto.yartu.UpsertCustomerGroupResponse>}
 */
const methodDescriptor_YCustomer_upsertCustomerGroup = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/upsertCustomerGroup',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCustomerGroupRequest,
  proto.yartu.UpsertCustomerGroupResponse,
  /**
   * @param {!proto.yartu.UpsertCustomerGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCustomerGroupResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCustomerGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCustomerGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCustomerGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.upsertCustomerGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerGroup',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerGroup,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCustomerGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCustomerGroupResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.upsertCustomerGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerGroup',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCustomerGroupRequest,
 *   !proto.yartu.DeleteCustomerGroupResponse>}
 */
const methodDescriptor_YCustomer_deleteCustomerGroup = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/deleteCustomerGroup',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCustomerGroupRequest,
  proto.yartu.DeleteCustomerGroupResponse,
  /**
   * @param {!proto.yartu.DeleteCustomerGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCustomerGroupResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCustomerGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCustomerGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCustomerGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.deleteCustomerGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerGroup',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerGroup,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCustomerGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCustomerGroupResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.deleteCustomerGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerGroup',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCustomerGroupsRequest,
 *   !proto.yartu.ListCustomerGroupsResponse>}
 */
const methodDescriptor_YCustomer_listCustomerGroups = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listCustomerGroups',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCustomerGroupsRequest,
  proto.yartu.ListCustomerGroupsResponse,
  /**
   * @param {!proto.yartu.ListCustomerGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCustomerGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCustomerGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCustomerGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCustomerGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listCustomerGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerGroups',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerGroups,
      callback);
};


/**
 * @param {!proto.yartu.ListCustomerGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCustomerGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listCustomerGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerGroups',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCustomerGroupMemberRequest,
 *   !proto.yartu.UpsertCustomerGroupMemberResponse>}
 */
const methodDescriptor_YCustomer_upsertCustomerGroupMember = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/upsertCustomerGroupMember',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCustomerGroupMemberRequest,
  proto.yartu.UpsertCustomerGroupMemberResponse,
  /**
   * @param {!proto.yartu.UpsertCustomerGroupMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCustomerGroupMemberResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCustomerGroupMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCustomerGroupMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCustomerGroupMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.upsertCustomerGroupMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerGroupMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerGroupMember,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCustomerGroupMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCustomerGroupMemberResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.upsertCustomerGroupMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerGroupMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerGroupMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCustomerGroupMemberRequest,
 *   !proto.yartu.DeleteCustomerGroupMemberResponse>}
 */
const methodDescriptor_YCustomer_deleteCustomerGroupMember = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/deleteCustomerGroupMember',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCustomerGroupMemberRequest,
  proto.yartu.DeleteCustomerGroupMemberResponse,
  /**
   * @param {!proto.yartu.DeleteCustomerGroupMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCustomerGroupMemberResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCustomerGroupMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCustomerGroupMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCustomerGroupMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.deleteCustomerGroupMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerGroupMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerGroupMember,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCustomerGroupMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCustomerGroupMemberResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.deleteCustomerGroupMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerGroupMember',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerGroupMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCustomerGroupMembersRequest,
 *   !proto.yartu.ListCustomerGroupMembersResponse>}
 */
const methodDescriptor_YCustomer_listCustomerGroupMembers = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listCustomerGroupMembers',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCustomerGroupMembersRequest,
  proto.yartu.ListCustomerGroupMembersResponse,
  /**
   * @param {!proto.yartu.ListCustomerGroupMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCustomerGroupMembersResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCustomerGroupMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCustomerGroupMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCustomerGroupMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listCustomerGroupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerGroupMembers',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerGroupMembers,
      callback);
};


/**
 * @param {!proto.yartu.ListCustomerGroupMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCustomerGroupMembersResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listCustomerGroupMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerGroupMembers',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerGroupMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCustomerEmailAliasRequest,
 *   !proto.yartu.ListCustomerEmailAliasResponse>}
 */
const methodDescriptor_YCustomer_listCustomerEmailAlias = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listCustomerEmailAlias',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCustomerEmailAliasRequest,
  proto.yartu.ListCustomerEmailAliasResponse,
  /**
   * @param {!proto.yartu.ListCustomerEmailAliasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCustomerEmailAliasResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCustomerEmailAliasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCustomerEmailAliasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCustomerEmailAliasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listCustomerEmailAlias =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerEmailAlias',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerEmailAlias,
      callback);
};


/**
 * @param {!proto.yartu.ListCustomerEmailAliasRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCustomerEmailAliasResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listCustomerEmailAlias =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerEmailAlias',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerEmailAlias);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCustomerEmailAliasRequest,
 *   !proto.yartu.UpsertCustomerEmailAliasResponse>}
 */
const methodDescriptor_YCustomer_upsertCustomerEmailAlias = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/upsertCustomerEmailAlias',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCustomerEmailAliasRequest,
  proto.yartu.UpsertCustomerEmailAliasResponse,
  /**
   * @param {!proto.yartu.UpsertCustomerEmailAliasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCustomerEmailAliasResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCustomerEmailAliasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCustomerEmailAliasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCustomerEmailAliasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.upsertCustomerEmailAlias =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerEmailAlias',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerEmailAlias,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCustomerEmailAliasRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCustomerEmailAliasResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.upsertCustomerEmailAlias =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerEmailAlias',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerEmailAlias);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCustomerEmailAliasRequest,
 *   !proto.yartu.DeleteCustomerEmailAliasResponse>}
 */
const methodDescriptor_YCustomer_deleteCustomerEmailAlias = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/deleteCustomerEmailAlias',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCustomerEmailAliasRequest,
  proto.yartu.DeleteCustomerEmailAliasResponse,
  /**
   * @param {!proto.yartu.DeleteCustomerEmailAliasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCustomerEmailAliasResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCustomerEmailAliasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCustomerEmailAliasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCustomerEmailAliasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.deleteCustomerEmailAlias =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerEmailAlias',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerEmailAlias,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCustomerEmailAliasRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCustomerEmailAliasResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.deleteCustomerEmailAlias =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerEmailAlias',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerEmailAlias);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListCustomerEmailAliasAddressRequest,
 *   !proto.yartu.ListCustomerEmailAliasAddressResponse>}
 */
const methodDescriptor_YCustomer_listCustomerEmailAliasAddress = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listCustomerEmailAliasAddress',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListCustomerEmailAliasAddressRequest,
  proto.yartu.ListCustomerEmailAliasAddressResponse,
  /**
   * @param {!proto.yartu.ListCustomerEmailAliasAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListCustomerEmailAliasAddressResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListCustomerEmailAliasAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListCustomerEmailAliasAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListCustomerEmailAliasAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listCustomerEmailAliasAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerEmailAliasAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerEmailAliasAddress,
      callback);
};


/**
 * @param {!proto.yartu.ListCustomerEmailAliasAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListCustomerEmailAliasAddressResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listCustomerEmailAliasAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listCustomerEmailAliasAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listCustomerEmailAliasAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteCustomerEmailAliasAddressRequest,
 *   !proto.yartu.DeleteCustomerEmailAliasAddressResponse>}
 */
const methodDescriptor_YCustomer_deleteCustomerEmailAliasAddress = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/deleteCustomerEmailAliasAddress',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteCustomerEmailAliasAddressRequest,
  proto.yartu.DeleteCustomerEmailAliasAddressResponse,
  /**
   * @param {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteCustomerEmailAliasAddressResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteCustomerEmailAliasAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteCustomerEmailAliasAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.deleteCustomerEmailAliasAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerEmailAliasAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerEmailAliasAddress,
      callback);
};


/**
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteCustomerEmailAliasAddressResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.deleteCustomerEmailAliasAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/deleteCustomerEmailAliasAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_deleteCustomerEmailAliasAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertCustomerEmailAliasAddressRequest,
 *   !proto.yartu.UpsertCustomerEmailAliasAddressResponse>}
 */
const methodDescriptor_YCustomer_upsertCustomerEmailAliasAddress = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/upsertCustomerEmailAliasAddress',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertCustomerEmailAliasAddressRequest,
  proto.yartu.UpsertCustomerEmailAliasAddressResponse,
  /**
   * @param {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertCustomerEmailAliasAddressResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertCustomerEmailAliasAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertCustomerEmailAliasAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.upsertCustomerEmailAliasAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerEmailAliasAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerEmailAliasAddress,
      callback);
};


/**
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertCustomerEmailAliasAddressResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.upsertCustomerEmailAliasAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/upsertCustomerEmailAliasAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertCustomerEmailAliasAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.CheckDomainAddressRequest,
 *   !proto.yartu.CheckDomainAddressResponse>}
 */
const methodDescriptor_YCustomer_checkDomainAddress = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/checkDomainAddress',
  grpc.web.MethodType.UNARY,
  proto.yartu.CheckDomainAddressRequest,
  proto.yartu.CheckDomainAddressResponse,
  /**
   * @param {!proto.yartu.CheckDomainAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.CheckDomainAddressResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.CheckDomainAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.CheckDomainAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.CheckDomainAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.checkDomainAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/checkDomainAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_checkDomainAddress,
      callback);
};


/**
 * @param {!proto.yartu.CheckDomainAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.CheckDomainAddressResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.checkDomainAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/checkDomainAddress',
      request,
      metadata || {},
      methodDescriptor_YCustomer_checkDomainAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetRegisterFormRequest,
 *   !proto.yartu.GetRegisterFormResponse>}
 */
const methodDescriptor_YCustomer_getRegisterForm = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getRegisterForm',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetRegisterFormRequest,
  proto.yartu.GetRegisterFormResponse,
  /**
   * @param {!proto.yartu.GetRegisterFormRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetRegisterFormResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetRegisterFormRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetRegisterFormResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetRegisterFormResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getRegisterForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getRegisterForm',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getRegisterForm,
      callback);
};


/**
 * @param {!proto.yartu.GetRegisterFormRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetRegisterFormResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getRegisterForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getRegisterForm',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getRegisterForm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertRegisterFormRequest,
 *   !proto.yartu.UpsertRegisterFormResponse>}
 */
const methodDescriptor_YCustomer_upsertRegisterForm = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/upsertRegisterForm',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertRegisterFormRequest,
  proto.yartu.UpsertRegisterFormResponse,
  /**
   * @param {!proto.yartu.UpsertRegisterFormRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertRegisterFormResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertRegisterFormRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertRegisterFormResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertRegisterFormResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.upsertRegisterForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/upsertRegisterForm',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertRegisterForm,
      callback);
};


/**
 * @param {!proto.yartu.UpsertRegisterFormRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertRegisterFormResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.upsertRegisterForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/upsertRegisterForm',
      request,
      metadata || {},
      methodDescriptor_YCustomer_upsertRegisterForm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetPackageRequest,
 *   !proto.yartu.GetPackageResponse>}
 */
const methodDescriptor_YCustomer_getPackage = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getPackage',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetPackageRequest,
  proto.yartu.GetPackageResponse,
  /**
   * @param {!proto.yartu.GetPackageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetPackageResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetPackageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetPackageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getPackage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getPackage',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getPackage,
      callback);
};


/**
 * @param {!proto.yartu.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetPackageResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getPackage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getPackage',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getPackage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetContractRequest,
 *   !proto.yartu.GetContractResponse>}
 */
const methodDescriptor_YCustomer_getContract = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getContract',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetContractRequest,
  proto.yartu.GetContractResponse,
  /**
   * @param {!proto.yartu.GetContractRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetContractResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetContractRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetContractResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetContractResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getContract =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getContract',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getContract,
      callback);
};


/**
 * @param {!proto.yartu.GetContractRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetContractResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getContract =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getContract',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getContract);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListPackagesRequest,
 *   !proto.yartu.ListPackagesResponse>}
 */
const methodDescriptor_YCustomer_listPackages = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listPackages',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListPackagesRequest,
  proto.yartu.ListPackagesResponse,
  /**
   * @param {!proto.yartu.ListPackagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListPackagesResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListPackagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListPackagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listPackages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listPackages',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listPackages,
      callback);
};


/**
 * @param {!proto.yartu.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListPackagesResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listPackages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listPackages',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listPackages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetPaymentSessionRequest,
 *   !proto.yartu.GetPaymentSessionResponse>}
 */
const methodDescriptor_YCustomer_getPaymentSession = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getPaymentSession',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetPaymentSessionRequest,
  proto.yartu.GetPaymentSessionResponse,
  /**
   * @param {!proto.yartu.GetPaymentSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetPaymentSessionResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetPaymentSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetPaymentSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetPaymentSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getPaymentSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getPaymentSession',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getPaymentSession,
      callback);
};


/**
 * @param {!proto.yartu.GetPaymentSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetPaymentSessionResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getPaymentSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getPaymentSession',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getPaymentSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListInvoiceTemplateRequest,
 *   !proto.yartu.ListInvoiceTemplateResponse>}
 */
const methodDescriptor_YCustomer_listInvoiceTemplate = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listInvoiceTemplate',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListInvoiceTemplateRequest,
  proto.yartu.ListInvoiceTemplateResponse,
  /**
   * @param {!proto.yartu.ListInvoiceTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListInvoiceTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListInvoiceTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListInvoiceTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListInvoiceTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listInvoiceTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listInvoiceTemplate',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listInvoiceTemplate,
      callback);
};


/**
 * @param {!proto.yartu.ListInvoiceTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListInvoiceTemplateResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listInvoiceTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listInvoiceTemplate',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listInvoiceTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetPackageChangeDataRequest,
 *   !proto.yartu.GetPackageChangeDataResponse>}
 */
const methodDescriptor_YCustomer_getPackageChangeData = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/getPackageChangeData',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetPackageChangeDataRequest,
  proto.yartu.GetPackageChangeDataResponse,
  /**
   * @param {!proto.yartu.GetPackageChangeDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetPackageChangeDataResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetPackageChangeDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetPackageChangeDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetPackageChangeDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.getPackageChangeData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/getPackageChangeData',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getPackageChangeData,
      callback);
};


/**
 * @param {!proto.yartu.GetPackageChangeDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetPackageChangeDataResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.getPackageChangeData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/getPackageChangeData',
      request,
      metadata || {},
      methodDescriptor_YCustomer_getPackageChangeData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListInvoicesRequest,
 *   !proto.yartu.ListInvoicesResponse>}
 */
const methodDescriptor_YCustomer_listInvoices = new grpc.web.MethodDescriptor(
  '/yartu.YCustomer/listInvoices',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListInvoicesRequest,
  proto.yartu.ListInvoicesResponse,
  /**
   * @param {!proto.yartu.ListInvoicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListInvoicesResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListInvoicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListInvoicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListInvoicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YCustomerClient.prototype.listInvoices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YCustomer/listInvoices',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listInvoices,
      callback);
};


/**
 * @param {!proto.yartu.ListInvoicesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListInvoicesResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YCustomerPromiseClient.prototype.listInvoices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YCustomer/listInvoices',
      request,
      metadata || {},
      methodDescriptor_YCustomer_listInvoices);
};


module.exports = proto.yartu;


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
proto.yartu.YContactClient =
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
proto.yartu.YContactPromiseClient =
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
 *   !proto.yartu.GetAddressBookRequest,
 *   !proto.yartu.GetAddressBookResponse>}
 */
const methodDescriptor_YContact_getAddressBook = new grpc.web.MethodDescriptor(
  '/yartu.YContact/getAddressBook',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetAddressBookRequest,
  proto.yartu.GetAddressBookResponse,
  /**
   * @param {!proto.yartu.GetAddressBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetAddressBookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetAddressBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetAddressBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.getAddressBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/getAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_getAddressBook,
      callback);
};


/**
 * @param {!proto.yartu.GetAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetAddressBookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.getAddressBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/getAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_getAddressBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertAddressBookRequest,
 *   !proto.yartu.UpsertAddressBookResponse>}
 */
const methodDescriptor_YContact_upsertAddressBook = new grpc.web.MethodDescriptor(
  '/yartu.YContact/upsertAddressBook',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertAddressBookRequest,
  proto.yartu.UpsertAddressBookResponse,
  /**
   * @param {!proto.yartu.UpsertAddressBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertAddressBookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertAddressBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertAddressBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.upsertAddressBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/upsertAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertAddressBook,
      callback);
};


/**
 * @param {!proto.yartu.UpsertAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertAddressBookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.upsertAddressBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/upsertAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertAddressBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteAddressBookRequest,
 *   !proto.yartu.DeleteAddressBookResponse>}
 */
const methodDescriptor_YContact_deleteAddressBook = new grpc.web.MethodDescriptor(
  '/yartu.YContact/deleteAddressBook',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteAddressBookRequest,
  proto.yartu.DeleteAddressBookResponse,
  /**
   * @param {!proto.yartu.DeleteAddressBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteAddressBookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteAddressBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteAddressBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.deleteAddressBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/deleteAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_deleteAddressBook,
      callback);
};


/**
 * @param {!proto.yartu.DeleteAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteAddressBookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.deleteAddressBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/deleteAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_deleteAddressBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListAddressBookRequest,
 *   !proto.yartu.ListAddressBookResponse>}
 */
const methodDescriptor_YContact_listAddressBook = new grpc.web.MethodDescriptor(
  '/yartu.YContact/listAddressBook',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListAddressBookRequest,
  proto.yartu.ListAddressBookResponse,
  /**
   * @param {!proto.yartu.ListAddressBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListAddressBookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListAddressBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListAddressBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.listAddressBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/listAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_listAddressBook,
      callback);
};


/**
 * @param {!proto.yartu.ListAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListAddressBookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.listAddressBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/listAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_listAddressBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ShareAddressBookRequest,
 *   !proto.yartu.ShareAddressBookResponse>}
 */
const methodDescriptor_YContact_shareAddressBook = new grpc.web.MethodDescriptor(
  '/yartu.YContact/shareAddressBook',
  grpc.web.MethodType.UNARY,
  proto.yartu.ShareAddressBookRequest,
  proto.yartu.ShareAddressBookResponse,
  /**
   * @param {!proto.yartu.ShareAddressBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ShareAddressBookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ShareAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ShareAddressBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ShareAddressBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.shareAddressBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/shareAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_shareAddressBook,
      callback);
};


/**
 * @param {!proto.yartu.ShareAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ShareAddressBookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.shareAddressBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/shareAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_shareAddressBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UnshareAddressBookRequest,
 *   !proto.yartu.UnshareAddressBookResponse>}
 */
const methodDescriptor_YContact_unshareAddressBook = new grpc.web.MethodDescriptor(
  '/yartu.YContact/unshareAddressBook',
  grpc.web.MethodType.UNARY,
  proto.yartu.UnshareAddressBookRequest,
  proto.yartu.UnshareAddressBookResponse,
  /**
   * @param {!proto.yartu.UnshareAddressBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UnshareAddressBookResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UnshareAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UnshareAddressBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UnshareAddressBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.unshareAddressBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/unshareAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_unshareAddressBook,
      callback);
};


/**
 * @param {!proto.yartu.UnshareAddressBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UnshareAddressBookResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.unshareAddressBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/unshareAddressBook',
      request,
      metadata || {},
      methodDescriptor_YContact_unshareAddressBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetContactRequest,
 *   !proto.yartu.GetContactResponse>}
 */
const methodDescriptor_YContact_getContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/getContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetContactRequest,
  proto.yartu.GetContactResponse,
  /**
   * @param {!proto.yartu.GetContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.getContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/getContact',
      request,
      metadata || {},
      methodDescriptor_YContact_getContact,
      callback);
};


/**
 * @param {!proto.yartu.GetContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.getContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/getContact',
      request,
      metadata || {},
      methodDescriptor_YContact_getContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertContactRequest,
 *   !proto.yartu.UpsertContactResponse>}
 */
const methodDescriptor_YContact_upsertContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/upsertContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertContactRequest,
  proto.yartu.UpsertContactResponse,
  /**
   * @param {!proto.yartu.UpsertContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.upsertContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/upsertContact',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertContact,
      callback);
};


/**
 * @param {!proto.yartu.UpsertContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.upsertContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/upsertContact',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteContactRequest,
 *   !proto.yartu.DeleteContactResponse>}
 */
const methodDescriptor_YContact_deleteContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/deleteContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteContactRequest,
  proto.yartu.DeleteContactResponse,
  /**
   * @param {!proto.yartu.DeleteContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.deleteContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/deleteContact',
      request,
      metadata || {},
      methodDescriptor_YContact_deleteContact,
      callback);
};


/**
 * @param {!proto.yartu.DeleteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.deleteContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/deleteContact',
      request,
      metadata || {},
      methodDescriptor_YContact_deleteContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListContactRequest,
 *   !proto.yartu.ListContactResponse>}
 */
const methodDescriptor_YContact_listContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/listContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListContactRequest,
  proto.yartu.ListContactResponse,
  /**
   * @param {!proto.yartu.ListContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.listContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/listContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listContact,
      callback);
};


/**
 * @param {!proto.yartu.ListContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.listContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/listContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertLabelRequest,
 *   !proto.yartu.UpsertLabelResponse>}
 */
const methodDescriptor_YContact_upsertLabel = new grpc.web.MethodDescriptor(
  '/yartu.YContact/upsertLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertLabelRequest,
  proto.yartu.UpsertLabelResponse,
  /**
   * @param {!proto.yartu.UpsertLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.upsertLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/upsertLabel',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertLabel,
      callback);
};


/**
 * @param {!proto.yartu.UpsertLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.upsertLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/upsertLabel',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListLabelRequest,
 *   !proto.yartu.ListLabelResponse>}
 */
const methodDescriptor_YContact_listLabel = new grpc.web.MethodDescriptor(
  '/yartu.YContact/listLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListLabelRequest,
  proto.yartu.ListLabelResponse,
  /**
   * @param {!proto.yartu.ListLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.listLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/listLabel',
      request,
      metadata || {},
      methodDescriptor_YContact_listLabel,
      callback);
};


/**
 * @param {!proto.yartu.ListLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.listLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/listLabel',
      request,
      metadata || {},
      methodDescriptor_YContact_listLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.DeleteLabelRequest,
 *   !proto.yartu.DeleteLabelResponse>}
 */
const methodDescriptor_YContact_deleteLabel = new grpc.web.MethodDescriptor(
  '/yartu.YContact/deleteLabel',
  grpc.web.MethodType.UNARY,
  proto.yartu.DeleteLabelRequest,
  proto.yartu.DeleteLabelResponse,
  /**
   * @param {!proto.yartu.DeleteLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.DeleteLabelResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.DeleteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.DeleteLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.DeleteLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.deleteLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/deleteLabel',
      request,
      metadata || {},
      methodDescriptor_YContact_deleteLabel,
      callback);
};


/**
 * @param {!proto.yartu.DeleteLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.DeleteLabelResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.deleteLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/deleteLabel',
      request,
      metadata || {},
      methodDescriptor_YContact_deleteLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListEmailContactRequest,
 *   !proto.yartu.ListEmailContactResponse>}
 */
const methodDescriptor_YContact_listEmailContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/listEmailContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListEmailContactRequest,
  proto.yartu.ListEmailContactResponse,
  /**
   * @param {!proto.yartu.ListEmailContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListEmailContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListEmailContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListEmailContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListEmailContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.listEmailContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/listEmailContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listEmailContact,
      callback);
};


/**
 * @param {!proto.yartu.ListEmailContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListEmailContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.listEmailContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/listEmailContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listEmailContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListFavoriteContactRequest,
 *   !proto.yartu.ListFavoriteContactResponse>}
 */
const methodDescriptor_YContact_listFavoriteContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/listFavoriteContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListFavoriteContactRequest,
  proto.yartu.ListFavoriteContactResponse,
  /**
   * @param {!proto.yartu.ListFavoriteContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListFavoriteContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListFavoriteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListFavoriteContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListFavoriteContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.listFavoriteContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/listFavoriteContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listFavoriteContact,
      callback);
};


/**
 * @param {!proto.yartu.ListFavoriteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListFavoriteContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.listFavoriteContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/listFavoriteContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listFavoriteContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.UpsertFavoriteContactRequest,
 *   !proto.yartu.UpsertFavoriteContactResponse>}
 */
const methodDescriptor_YContact_upsertFavoriteContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/upsertFavoriteContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.UpsertFavoriteContactRequest,
  proto.yartu.UpsertFavoriteContactResponse,
  /**
   * @param {!proto.yartu.UpsertFavoriteContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.UpsertFavoriteContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.UpsertFavoriteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.UpsertFavoriteContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.UpsertFavoriteContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.upsertFavoriteContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/upsertFavoriteContact',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertFavoriteContact,
      callback);
};


/**
 * @param {!proto.yartu.UpsertFavoriteContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.UpsertFavoriteContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.upsertFavoriteContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/upsertFavoriteContact',
      request,
      metadata || {},
      methodDescriptor_YContact_upsertFavoriteContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ListPublicContactRequest,
 *   !proto.yartu.ListPublicContactResponse>}
 */
const methodDescriptor_YContact_listPublicContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/listPublicContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListPublicContactRequest,
  proto.yartu.ListPublicContactResponse,
  /**
   * @param {!proto.yartu.ListPublicContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListPublicContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListPublicContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListPublicContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListPublicContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.listPublicContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/listPublicContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listPublicContact,
      callback);
};


/**
 * @param {!proto.yartu.ListPublicContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListPublicContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.listPublicContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/listPublicContact',
      request,
      metadata || {},
      methodDescriptor_YContact_listPublicContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ExportContactRequest,
 *   !proto.yartu.ExportContactResponse>}
 */
const methodDescriptor_YContact_exportContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/exportContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.ExportContactRequest,
  proto.yartu.ExportContactResponse,
  /**
   * @param {!proto.yartu.ExportContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ExportContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ExportContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ExportContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ExportContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.exportContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/exportContact',
      request,
      metadata || {},
      methodDescriptor_YContact_exportContact,
      callback);
};


/**
 * @param {!proto.yartu.ExportContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ExportContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.exportContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/exportContact',
      request,
      metadata || {},
      methodDescriptor_YContact_exportContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ImportContactRequest,
 *   !proto.yartu.ImportContactResponse>}
 */
const methodDescriptor_YContact_importContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/importContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.ImportContactRequest,
  proto.yartu.ImportContactResponse,
  /**
   * @param {!proto.yartu.ImportContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ImportContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ImportContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ImportContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ImportContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.importContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/importContact',
      request,
      metadata || {},
      methodDescriptor_YContact_importContact,
      callback);
};


/**
 * @param {!proto.yartu.ImportContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ImportContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.importContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/importContact',
      request,
      metadata || {},
      methodDescriptor_YContact_importContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.CloneContactRequest,
 *   !proto.yartu.CloneContactResponse>}
 */
const methodDescriptor_YContact_cloneContact = new grpc.web.MethodDescriptor(
  '/yartu.YContact/cloneContact',
  grpc.web.MethodType.UNARY,
  proto.yartu.CloneContactRequest,
  proto.yartu.CloneContactResponse,
  /**
   * @param {!proto.yartu.CloneContactRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.CloneContactResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.CloneContactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.CloneContactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.CloneContactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YContactClient.prototype.cloneContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YContact/cloneContact',
      request,
      metadata || {},
      methodDescriptor_YContact_cloneContact,
      callback);
};


/**
 * @param {!proto.yartu.CloneContactRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.CloneContactResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YContactPromiseClient.prototype.cloneContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YContact/cloneContact',
      request,
      metadata || {},
      methodDescriptor_YContact_cloneContact);
};


module.exports = proto.yartu;


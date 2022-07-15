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
proto.yartu.YAuthClient =
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
proto.yartu.YAuthPromiseClient =
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
 *   !proto.yartu.LoginRequest,
 *   !proto.yartu.LoginResponse>}
 */
const methodDescriptor_YAuth_login = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/login',
  grpc.web.MethodType.UNARY,
  proto.yartu.LoginRequest,
  proto.yartu.LoginResponse,
  /**
   * @param {!proto.yartu.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/login',
      request,
      metadata || {},
      methodDescriptor_YAuth_login,
      callback);
};


/**
 * @param {!proto.yartu.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/login',
      request,
      metadata || {},
      methodDescriptor_YAuth_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.TwoFaLoginRequest,
 *   !proto.yartu.TwoFaLoginResponse>}
 */
const methodDescriptor_YAuth_twoFaLogin = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/twoFaLogin',
  grpc.web.MethodType.UNARY,
  proto.yartu.TwoFaLoginRequest,
  proto.yartu.TwoFaLoginResponse,
  /**
   * @param {!proto.yartu.TwoFaLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.TwoFaLoginResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.TwoFaLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.TwoFaLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.TwoFaLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.twoFaLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/twoFaLogin',
      request,
      metadata || {},
      methodDescriptor_YAuth_twoFaLogin,
      callback);
};


/**
 * @param {!proto.yartu.TwoFaLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.TwoFaLoginResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.twoFaLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/twoFaLogin',
      request,
      metadata || {},
      methodDescriptor_YAuth_twoFaLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.LogoutRequest,
 *   !proto.yartu.LogoutResponse>}
 */
const methodDescriptor_YAuth_logout = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/logout',
  grpc.web.MethodType.UNARY,
  proto.yartu.LogoutRequest,
  proto.yartu.LogoutResponse,
  /**
   * @param {!proto.yartu.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/logout',
      request,
      metadata || {},
      methodDescriptor_YAuth_logout,
      callback);
};


/**
 * @param {!proto.yartu.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.LogoutResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/logout',
      request,
      metadata || {},
      methodDescriptor_YAuth_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.MeRequest,
 *   !proto.yartu.MeResponse>}
 */
const methodDescriptor_YAuth_me = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/me',
  grpc.web.MethodType.UNARY,
  proto.yartu.MeRequest,
  proto.yartu.MeResponse,
  /**
   * @param {!proto.yartu.MeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.MeResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.MeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.MeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.MeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.me =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/me',
      request,
      metadata || {},
      methodDescriptor_YAuth_me,
      callback);
};


/**
 * @param {!proto.yartu.MeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.MeResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.me =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/me',
      request,
      metadata || {},
      methodDescriptor_YAuth_me);
};


module.exports = proto.yartu;


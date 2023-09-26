/**
 * @fileoverview gRPC-Web generated client stub for yartu
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.24.3
// source: auth/grpc/service.proto


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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetCapabilitiesRequest,
 *   !proto.yartu.GetCapabilitiesResponse>}
 */
const methodDescriptor_YAuth_getCapabilities = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/getCapabilities',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetCapabilitiesRequest,
  proto.yartu.GetCapabilitiesResponse,
  /**
   * @param {!proto.yartu.GetCapabilitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetCapabilitiesResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetCapabilitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetCapabilitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetCapabilitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.getCapabilities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/getCapabilities',
      request,
      metadata || {},
      methodDescriptor_YAuth_getCapabilities,
      callback);
};


/**
 * @param {!proto.yartu.GetCapabilitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetCapabilitiesResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.getCapabilities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/getCapabilities',
      request,
      metadata || {},
      methodDescriptor_YAuth_getCapabilities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ChallengeRequest,
 *   !proto.yartu.ChallengeResponse>}
 */
const methodDescriptor_YAuth_challenge = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/challenge',
  grpc.web.MethodType.UNARY,
  proto.yartu.ChallengeRequest,
  proto.yartu.ChallengeResponse,
  /**
   * @param {!proto.yartu.ChallengeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ChallengeResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ChallengeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ChallengeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ChallengeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.challenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/challenge',
      request,
      metadata || {},
      methodDescriptor_YAuth_challenge,
      callback);
};


/**
 * @param {!proto.yartu.ChallengeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ChallengeResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.challenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/challenge',
      request,
      metadata || {},
      methodDescriptor_YAuth_challenge);
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
 *   !proto.yartu.OtpLoginRequest,
 *   !proto.yartu.OtpLoginResponse>}
 */
const methodDescriptor_YAuth_otpLogin = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/otpLogin',
  grpc.web.MethodType.UNARY,
  proto.yartu.OtpLoginRequest,
  proto.yartu.OtpLoginResponse,
  /**
   * @param {!proto.yartu.OtpLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.OtpLoginResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.OtpLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.OtpLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.OtpLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.otpLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/otpLogin',
      request,
      metadata || {},
      methodDescriptor_YAuth_otpLogin,
      callback);
};


/**
 * @param {!proto.yartu.OtpLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.OtpLoginResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.otpLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/otpLogin',
      request,
      metadata || {},
      methodDescriptor_YAuth_otpLogin);
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetServicesRequest,
 *   !proto.yartu.GetServicesResponse>}
 */
const methodDescriptor_YAuth_getServices = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/getServices',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetServicesRequest,
  proto.yartu.GetServicesResponse,
  /**
   * @param {!proto.yartu.GetServicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetServicesResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetServicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetServicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.getServices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/getServices',
      request,
      metadata || {},
      methodDescriptor_YAuth_getServices,
      callback);
};


/**
 * @param {!proto.yartu.GetServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetServicesResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.getServices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/getServices',
      request,
      metadata || {},
      methodDescriptor_YAuth_getServices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.ForcedPasswordChangeRequest,
 *   !proto.yartu.ForcedPasswordChangeResponse>}
 */
const methodDescriptor_YAuth_forcedPasswordChange = new grpc.web.MethodDescriptor(
  '/yartu.YAuth/forcedPasswordChange',
  grpc.web.MethodType.UNARY,
  proto.yartu.ForcedPasswordChangeRequest,
  proto.yartu.ForcedPasswordChangeResponse,
  /**
   * @param {!proto.yartu.ForcedPasswordChangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ForcedPasswordChangeResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ForcedPasswordChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ForcedPasswordChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ForcedPasswordChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAuthClient.prototype.forcedPasswordChange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YAuth/forcedPasswordChange',
      request,
      metadata || {},
      methodDescriptor_YAuth_forcedPasswordChange,
      callback);
};


/**
 * @param {!proto.yartu.ForcedPasswordChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ForcedPasswordChangeResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAuthPromiseClient.prototype.forcedPasswordChange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YAuth/forcedPasswordChange',
      request,
      metadata || {},
      methodDescriptor_YAuth_forcedPasswordChange);
};


module.exports = proto.yartu;


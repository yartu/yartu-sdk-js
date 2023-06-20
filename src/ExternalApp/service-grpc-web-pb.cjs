/**
 * @fileoverview gRPC-Web generated client stub for yartu
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.3
// source: app/grpc/service.proto


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
proto.yartu.YAppClient =
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
proto.yartu.YAppPromiseClient =
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
 *   !proto.yartu.AuthorizeAppRequest,
 *   !proto.yartu.AuthorizeAppResponse>}
 */
const methodDescriptor_YApp_authorizeApp = new grpc.web.MethodDescriptor(
  '/yartu.YApp/authorizeApp',
  grpc.web.MethodType.UNARY,
  proto.yartu.AuthorizeAppRequest,
  proto.yartu.AuthorizeAppResponse,
  /**
   * @param {!proto.yartu.AuthorizeAppRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.AuthorizeAppResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.AuthorizeAppRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.AuthorizeAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.AuthorizeAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAppClient.prototype.authorizeApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YApp/authorizeApp',
      request,
      metadata || {},
      methodDescriptor_YApp_authorizeApp,
      callback);
};


/**
 * @param {!proto.yartu.AuthorizeAppRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.AuthorizeAppResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAppPromiseClient.prototype.authorizeApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YApp/authorizeApp',
      request,
      metadata || {},
      methodDescriptor_YApp_authorizeApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yartu.GetAppTokenRequest,
 *   !proto.yartu.GetAppTokenResponse>}
 */
const methodDescriptor_YApp_getAppToken = new grpc.web.MethodDescriptor(
  '/yartu.YApp/getAppToken',
  grpc.web.MethodType.UNARY,
  proto.yartu.GetAppTokenRequest,
  proto.yartu.GetAppTokenResponse,
  /**
   * @param {!proto.yartu.GetAppTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.GetAppTokenResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.GetAppTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.GetAppTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.GetAppTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YAppClient.prototype.getAppToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YApp/getAppToken',
      request,
      metadata || {},
      methodDescriptor_YApp_getAppToken,
      callback);
};


/**
 * @param {!proto.yartu.GetAppTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.GetAppTokenResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YAppPromiseClient.prototype.getAppToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YApp/getAppToken',
      request,
      metadata || {},
      methodDescriptor_YApp_getAppToken);
};


module.exports = proto.yartu;


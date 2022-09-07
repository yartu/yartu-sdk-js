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
proto.yartu.YSearchClient =
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
proto.yartu.YSearchPromiseClient =
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
 *   !proto.yartu.ListSearchShareablePeopleRequest,
 *   !proto.yartu.ListSearchShareablePeopleResponse>}
 */
const methodDescriptor_YSearch_listSearchShareablePeople = new grpc.web.MethodDescriptor(
  '/yartu.YSearch/listSearchShareablePeople',
  grpc.web.MethodType.UNARY,
  proto.yartu.ListSearchShareablePeopleRequest,
  proto.yartu.ListSearchShareablePeopleResponse,
  /**
   * @param {!proto.yartu.ListSearchShareablePeopleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yartu.ListSearchShareablePeopleResponse.deserializeBinary
);


/**
 * @param {!proto.yartu.ListSearchShareablePeopleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yartu.ListSearchShareablePeopleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yartu.ListSearchShareablePeopleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yartu.YSearchClient.prototype.listSearchShareablePeople =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yartu.YSearch/listSearchShareablePeople',
      request,
      metadata || {},
      methodDescriptor_YSearch_listSearchShareablePeople,
      callback);
};


/**
 * @param {!proto.yartu.ListSearchShareablePeopleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yartu.ListSearchShareablePeopleResponse>}
 *     Promise that resolves to the response
 */
proto.yartu.YSearchPromiseClient.prototype.listSearchShareablePeople =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yartu.YSearch/listSearchShareablePeople',
      request,
      metadata || {},
      methodDescriptor_YSearch_listSearchShareablePeople);
};


module.exports = proto.yartu;

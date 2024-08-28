// source: account/grpc/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var common_grpc_definitions_pb = require('../utils/definitions_pb.cjs');
goog.object.extend(proto, common_grpc_definitions_pb);
goog.exportSymbol('proto.yartu.CheckUserOnlineRequest', null, global);
goog.exportSymbol('proto.yartu.CheckUserOnlineResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteEmailRuleRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteEmailRuleResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteEmailSignatureRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteEmailSignatureResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteEmailTemplateRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteEmailTemplateResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteSharedMailBoxRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteSharedMailBoxResponse', null, global);
goog.exportSymbol('proto.yartu.EmailRule', null, global);
goog.exportSymbol('proto.yartu.EmailRuleAction', null, global);
goog.exportSymbol('proto.yartu.EmailRuleInstance', null, global);
goog.exportSymbol('proto.yartu.EmailSignature', null, global);
goog.exportSymbol('proto.yartu.EmailTemplate', null, global);
goog.exportSymbol('proto.yartu.GetEmailAutoReplyRequest', null, global);
goog.exportSymbol('proto.yartu.GetEmailAutoReplyResponse', null, global);
goog.exportSymbol('proto.yartu.GetEmailForwardingRequest', null, global);
goog.exportSymbol('proto.yartu.GetEmailForwardingResponse', null, global);
goog.exportSymbol('proto.yartu.GetEmailRuleRequest', null, global);
goog.exportSymbol('proto.yartu.GetEmailRuleResponse', null, global);
goog.exportSymbol('proto.yartu.GetEmailSignatureRequest', null, global);
goog.exportSymbol('proto.yartu.GetEmailSignatureResponse', null, global);
goog.exportSymbol('proto.yartu.GetEmailTemplateRequest', null, global);
goog.exportSymbol('proto.yartu.GetEmailTemplateResponse', null, global);
goog.exportSymbol('proto.yartu.GetInfoRequest', null, global);
goog.exportSymbol('proto.yartu.GetInfoResponse', null, global);
goog.exportSymbol('proto.yartu.GetMobileConfigRequest', null, global);
goog.exportSymbol('proto.yartu.GetMobileConfigResponse', null, global);
goog.exportSymbol('proto.yartu.GetSharedMailBoxRequest', null, global);
goog.exportSymbol('proto.yartu.GetSharedMailBoxResponse', null, global);
goog.exportSymbol('proto.yartu.GetWeatherRequest', null, global);
goog.exportSymbol('proto.yartu.GetWeatherResponse', null, global);
goog.exportSymbol('proto.yartu.ListEmailRuleRequest', null, global);
goog.exportSymbol('proto.yartu.ListEmailRuleResponse', null, global);
goog.exportSymbol('proto.yartu.ListEmailSignatureRequest', null, global);
goog.exportSymbol('proto.yartu.ListEmailSignatureResponse', null, global);
goog.exportSymbol('proto.yartu.ListEmailTemplateRequest', null, global);
goog.exportSymbol('proto.yartu.ListEmailTemplateResponse', null, global);
goog.exportSymbol('proto.yartu.ListSharedMailBoxRequest', null, global);
goog.exportSymbol('proto.yartu.ListSharedMailBoxResponse', null, global);
goog.exportSymbol('proto.yartu.ListSharedMailBoxUsersRequest', null, global);
goog.exportSymbol('proto.yartu.ListSharedMailBoxUsersResponse', null, global);
goog.exportSymbol('proto.yartu.PurgeAccountRequest', null, global);
goog.exportSymbol('proto.yartu.PurgeAccountResponse', null, global);
goog.exportSymbol('proto.yartu.RealmManager', null, global);
goog.exportSymbol('proto.yartu.SetEmailAutoReplyRequest', null, global);
goog.exportSymbol('proto.yartu.SetEmailAutoReplyResponse', null, global);
goog.exportSymbol('proto.yartu.SetEmailForwardingRequest', null, global);
goog.exportSymbol('proto.yartu.SetEmailForwardingResponse', null, global);
goog.exportSymbol('proto.yartu.SharedMailBox', null, global);
goog.exportSymbol('proto.yartu.SharedMailBoxUser', null, global);
goog.exportSymbol('proto.yartu.UploadSignatureInlineImageRequest', null, global);
goog.exportSymbol('proto.yartu.UploadSignatureInlineImageResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertAccountRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertAccountResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertEmailRuleRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertEmailRuleResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertEmailSignatureRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertEmailSignatureResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertEmailTemplateRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertEmailTemplateResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertSharedMailBoxRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertSharedMailBoxResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.EmailSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.EmailSignature.repeatedFields_, null);
};
goog.inherits(proto.yartu.EmailSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.EmailSignature.displayName = 'proto.yartu.EmailSignature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.EmailTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.EmailTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.EmailTemplate.displayName = 'proto.yartu.EmailTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.EmailRuleInstance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.EmailRuleInstance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.EmailRuleInstance.displayName = 'proto.yartu.EmailRuleInstance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.EmailRuleAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.EmailRuleAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.EmailRuleAction.displayName = 'proto.yartu.EmailRuleAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.EmailRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.EmailRule.repeatedFields_, null);
};
goog.inherits(proto.yartu.EmailRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.EmailRule.displayName = 'proto.yartu.EmailRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetInfoRequest.displayName = 'proto.yartu.GetInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.RealmManager = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RealmManager, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RealmManager.displayName = 'proto.yartu.RealmManager';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetInfoResponse.displayName = 'proto.yartu.GetInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetWeatherRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetWeatherRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetWeatherRequest.displayName = 'proto.yartu.GetWeatherRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetWeatherResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetWeatherResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetWeatherResponse.displayName = 'proto.yartu.GetWeatherResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertAccountRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertAccountRequest.displayName = 'proto.yartu.UpsertAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertAccountResponse.displayName = 'proto.yartu.UpsertAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.PurgeAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.PurgeAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.PurgeAccountRequest.displayName = 'proto.yartu.PurgeAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.PurgeAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.PurgeAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.PurgeAccountResponse.displayName = 'proto.yartu.PurgeAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListEmailSignatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListEmailSignatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailSignatureRequest.displayName = 'proto.yartu.ListEmailSignatureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListEmailSignatureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListEmailSignatureResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListEmailSignatureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailSignatureResponse.displayName = 'proto.yartu.ListEmailSignatureResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailSignatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailSignatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailSignatureRequest.displayName = 'proto.yartu.GetEmailSignatureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailSignatureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailSignatureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailSignatureResponse.displayName = 'proto.yartu.GetEmailSignatureResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertEmailSignatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertEmailSignatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertEmailSignatureRequest.displayName = 'proto.yartu.UpsertEmailSignatureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertEmailSignatureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertEmailSignatureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertEmailSignatureResponse.displayName = 'proto.yartu.UpsertEmailSignatureResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteEmailSignatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteEmailSignatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteEmailSignatureRequest.displayName = 'proto.yartu.DeleteEmailSignatureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteEmailSignatureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteEmailSignatureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteEmailSignatureResponse.displayName = 'proto.yartu.DeleteEmailSignatureResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListEmailTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListEmailTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailTemplateRequest.displayName = 'proto.yartu.ListEmailTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListEmailTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListEmailTemplateResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListEmailTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailTemplateResponse.displayName = 'proto.yartu.ListEmailTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailTemplateRequest.displayName = 'proto.yartu.GetEmailTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailTemplateResponse.displayName = 'proto.yartu.GetEmailTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertEmailTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertEmailTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertEmailTemplateRequest.displayName = 'proto.yartu.UpsertEmailTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertEmailTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertEmailTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertEmailTemplateResponse.displayName = 'proto.yartu.UpsertEmailTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteEmailTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteEmailTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteEmailTemplateRequest.displayName = 'proto.yartu.DeleteEmailTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteEmailTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteEmailTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteEmailTemplateResponse.displayName = 'proto.yartu.DeleteEmailTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListEmailRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListEmailRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailRuleRequest.displayName = 'proto.yartu.ListEmailRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListEmailRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListEmailRuleResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListEmailRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailRuleResponse.displayName = 'proto.yartu.ListEmailRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailRuleRequest.displayName = 'proto.yartu.GetEmailRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailRuleResponse.displayName = 'proto.yartu.GetEmailRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertEmailRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertEmailRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertEmailRuleRequest.displayName = 'proto.yartu.UpsertEmailRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertEmailRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertEmailRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertEmailRuleResponse.displayName = 'proto.yartu.UpsertEmailRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteEmailRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteEmailRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteEmailRuleRequest.displayName = 'proto.yartu.DeleteEmailRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteEmailRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteEmailRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteEmailRuleResponse.displayName = 'proto.yartu.DeleteEmailRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailForwardingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailForwardingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailForwardingRequest.displayName = 'proto.yartu.GetEmailForwardingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailForwardingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetEmailForwardingResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetEmailForwardingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailForwardingResponse.displayName = 'proto.yartu.GetEmailForwardingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SetEmailForwardingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.SetEmailForwardingRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.SetEmailForwardingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SetEmailForwardingRequest.displayName = 'proto.yartu.SetEmailForwardingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SetEmailForwardingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SetEmailForwardingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SetEmailForwardingResponse.displayName = 'proto.yartu.SetEmailForwardingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailAutoReplyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailAutoReplyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailAutoReplyRequest.displayName = 'proto.yartu.GetEmailAutoReplyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetEmailAutoReplyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetEmailAutoReplyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetEmailAutoReplyResponse.displayName = 'proto.yartu.GetEmailAutoReplyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SetEmailAutoReplyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SetEmailAutoReplyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SetEmailAutoReplyRequest.displayName = 'proto.yartu.SetEmailAutoReplyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SetEmailAutoReplyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SetEmailAutoReplyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SetEmailAutoReplyResponse.displayName = 'proto.yartu.SetEmailAutoReplyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSharedMailBoxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListSharedMailBoxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharedMailBoxRequest.displayName = 'proto.yartu.ListSharedMailBoxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SharedMailBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SharedMailBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharedMailBox.displayName = 'proto.yartu.SharedMailBox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SharedMailBoxUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SharedMailBoxUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharedMailBoxUser.displayName = 'proto.yartu.SharedMailBoxUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSharedMailBoxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListSharedMailBoxResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListSharedMailBoxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharedMailBoxResponse.displayName = 'proto.yartu.ListSharedMailBoxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetSharedMailBoxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetSharedMailBoxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetSharedMailBoxRequest.displayName = 'proto.yartu.GetSharedMailBoxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetSharedMailBoxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetSharedMailBoxResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetSharedMailBoxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetSharedMailBoxResponse.displayName = 'proto.yartu.GetSharedMailBoxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertSharedMailBoxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertSharedMailBoxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertSharedMailBoxRequest.displayName = 'proto.yartu.UpsertSharedMailBoxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertSharedMailBoxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertSharedMailBoxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertSharedMailBoxResponse.displayName = 'proto.yartu.UpsertSharedMailBoxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteSharedMailBoxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteSharedMailBoxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteSharedMailBoxRequest.displayName = 'proto.yartu.DeleteSharedMailBoxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteSharedMailBoxResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteSharedMailBoxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteSharedMailBoxResponse.displayName = 'proto.yartu.DeleteSharedMailBoxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSharedMailBoxUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListSharedMailBoxUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharedMailBoxUsersRequest.displayName = 'proto.yartu.ListSharedMailBoxUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSharedMailBoxUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListSharedMailBoxUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListSharedMailBoxUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharedMailBoxUsersResponse.displayName = 'proto.yartu.ListSharedMailBoxUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UploadSignatureInlineImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UploadSignatureInlineImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UploadSignatureInlineImageRequest.displayName = 'proto.yartu.UploadSignatureInlineImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UploadSignatureInlineImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UploadSignatureInlineImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UploadSignatureInlineImageResponse.displayName = 'proto.yartu.UploadSignatureInlineImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetMobileConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetMobileConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetMobileConfigRequest.displayName = 'proto.yartu.GetMobileConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetMobileConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetMobileConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetMobileConfigResponse.displayName = 'proto.yartu.GetMobileConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.CheckUserOnlineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CheckUserOnlineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CheckUserOnlineRequest.displayName = 'proto.yartu.CheckUserOnlineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.CheckUserOnlineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CheckUserOnlineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CheckUserOnlineResponse.displayName = 'proto.yartu.CheckUserOnlineResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.EmailSignature.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.EmailSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.EmailSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.EmailSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    common_grpc_definitions_pb.InternalFile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.EmailSignature}
 */
proto.yartu.EmailSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.EmailSignature;
  return proto.yartu.EmailSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.EmailSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.EmailSignature}
 */
proto.yartu.EmailSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    case 6:
      var value = new common_grpc_definitions_pb.InternalFile;
      reader.readMessage(value,common_grpc_definitions_pb.InternalFile.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.EmailSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.EmailSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.EmailSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      common_grpc_definitions_pb.InternalFile.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.EmailSignature.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.EmailSignature} returns this
 */
proto.yartu.EmailSignature.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.EmailSignature.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailSignature} returns this
 */
proto.yartu.EmailSignature.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string signature = 3;
 * @return {string}
 */
proto.yartu.EmailSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailSignature} returns this
 */
proto.yartu.EmailSignature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_active = 4;
 * @return {boolean}
 */
proto.yartu.EmailSignature.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.EmailSignature} returns this
 */
proto.yartu.EmailSignature.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_default = 5;
 * @return {boolean}
 */
proto.yartu.EmailSignature.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.EmailSignature} returns this
 */
proto.yartu.EmailSignature.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated InternalFile attachments = 6;
 * @return {!Array<!proto.InternalFile>}
 */
proto.yartu.EmailSignature.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.InternalFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.InternalFile, 6));
};


/**
 * @param {!Array<!proto.InternalFile>} value
 * @return {!proto.yartu.EmailSignature} returns this
*/
proto.yartu.EmailSignature.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.InternalFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.InternalFile}
 */
proto.yartu.EmailSignature.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.InternalFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.EmailSignature} returns this
 */
proto.yartu.EmailSignature.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.EmailTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.EmailTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.EmailTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 3, ""),
    template: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.EmailTemplate}
 */
proto.yartu.EmailTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.EmailTemplate;
  return proto.yartu.EmailTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.EmailTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.EmailTemplate}
 */
proto.yartu.EmailTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.EmailTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.EmailTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.EmailTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.EmailTemplate.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.EmailTemplate} returns this
 */
proto.yartu.EmailTemplate.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.EmailTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailTemplate} returns this
 */
proto.yartu.EmailTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subject = 3;
 * @return {string}
 */
proto.yartu.EmailTemplate.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailTemplate} returns this
 */
proto.yartu.EmailTemplate.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string template = 4;
 * @return {string}
 */
proto.yartu.EmailTemplate.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailTemplate} returns this
 */
proto.yartu.EmailTemplate.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.EmailRuleInstance.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.EmailRuleInstance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.EmailRuleInstance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailRuleInstance.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    condition: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    order: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.EmailRuleInstance}
 */
proto.yartu.EmailRuleInstance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.EmailRuleInstance;
  return proto.yartu.EmailRuleInstance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.EmailRuleInstance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.EmailRuleInstance}
 */
proto.yartu.EmailRuleInstance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCondition(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.EmailRuleInstance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.EmailRuleInstance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.EmailRuleInstance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailRuleInstance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCondition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yartu.EmailRuleInstance.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailRuleInstance} returns this
 */
proto.yartu.EmailRuleInstance.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string condition = 2;
 * @return {string}
 */
proto.yartu.EmailRuleInstance.prototype.getCondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailRuleInstance} returns this
 */
proto.yartu.EmailRuleInstance.prototype.setCondition = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.yartu.EmailRuleInstance.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailRuleInstance} returns this
 */
proto.yartu.EmailRuleInstance.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 order = 4;
 * @return {number}
 */
proto.yartu.EmailRuleInstance.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.EmailRuleInstance} returns this
 */
proto.yartu.EmailRuleInstance.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.EmailRuleAction.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.EmailRuleAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.EmailRuleAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailRuleAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.EmailRuleAction}
 */
proto.yartu.EmailRuleAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.EmailRuleAction;
  return proto.yartu.EmailRuleAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.EmailRuleAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.EmailRuleAction}
 */
proto.yartu.EmailRuleAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.EmailRuleAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.EmailRuleAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.EmailRuleAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailRuleAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yartu.EmailRuleAction.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailRuleAction} returns this
 */
proto.yartu.EmailRuleAction.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.yartu.EmailRuleAction.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailRuleAction} returns this
 */
proto.yartu.EmailRuleAction.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 order = 3;
 * @return {number}
 */
proto.yartu.EmailRuleAction.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.EmailRuleAction} returns this
 */
proto.yartu.EmailRuleAction.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.EmailRule.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.EmailRule.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.EmailRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.EmailRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    conditionType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.yartu.EmailRuleInstance.toObject, includeInstance),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.yartu.EmailRuleAction.toObject, includeInstance),
    order: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.EmailRule}
 */
proto.yartu.EmailRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.EmailRule;
  return proto.yartu.EmailRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.EmailRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.EmailRule}
 */
proto.yartu.EmailRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionType(value);
      break;
    case 4:
      var value = new proto.yartu.EmailRuleInstance;
      reader.readMessage(value,proto.yartu.EmailRuleInstance.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 5:
      var value = new proto.yartu.EmailRuleAction;
      reader.readMessage(value,proto.yartu.EmailRuleAction.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.EmailRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.EmailRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.EmailRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.EmailRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConditionType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.yartu.EmailRuleInstance.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.yartu.EmailRuleAction.serializeBinaryToWriter
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.EmailRule.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.EmailRule} returns this
 */
proto.yartu.EmailRule.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.EmailRule.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailRule} returns this
 */
proto.yartu.EmailRule.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string condition_type = 3;
 * @return {string}
 */
proto.yartu.EmailRule.prototype.getConditionType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.EmailRule} returns this
 */
proto.yartu.EmailRule.prototype.setConditionType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated EmailRuleInstance rules = 4;
 * @return {!Array<!proto.yartu.EmailRuleInstance>}
 */
proto.yartu.EmailRule.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.yartu.EmailRuleInstance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.EmailRuleInstance, 4));
};


/**
 * @param {!Array<!proto.yartu.EmailRuleInstance>} value
 * @return {!proto.yartu.EmailRule} returns this
*/
proto.yartu.EmailRule.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.yartu.EmailRuleInstance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.EmailRuleInstance}
 */
proto.yartu.EmailRule.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.yartu.EmailRuleInstance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.EmailRule} returns this
 */
proto.yartu.EmailRule.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * repeated EmailRuleAction actions = 5;
 * @return {!Array<!proto.yartu.EmailRuleAction>}
 */
proto.yartu.EmailRule.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.yartu.EmailRuleAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.EmailRuleAction, 5));
};


/**
 * @param {!Array<!proto.yartu.EmailRuleAction>} value
 * @return {!proto.yartu.EmailRule} returns this
*/
proto.yartu.EmailRule.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yartu.EmailRuleAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.EmailRuleAction}
 */
proto.yartu.EmailRule.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yartu.EmailRuleAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.EmailRule} returns this
 */
proto.yartu.EmailRule.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional int64 order = 6;
 * @return {number}
 */
proto.yartu.EmailRule.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.EmailRule} returns this
 */
proto.yartu.EmailRule.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool is_active = 7;
 * @return {boolean}
 */
proto.yartu.EmailRule.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.EmailRule} returns this
 */
proto.yartu.EmailRule.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetInfoRequest}
 */
proto.yartu.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetInfoRequest;
  return proto.yartu.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetInfoRequest}
 */
proto.yartu.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.yartu.GetInfoRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoRequest} returns this
 */
proto.yartu.GetInfoRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetInfoRequest} returns this
 */
proto.yartu.GetInfoRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetInfoRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.RealmManager.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RealmManager.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RealmManager} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RealmManager.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    role: jspb.Message.getFieldWithDefault(msg, 2, ""),
    realm: (f = msg.getRealm()) && common_grpc_definitions_pb.Realm.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.RealmManager}
 */
proto.yartu.RealmManager.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RealmManager;
  return proto.yartu.RealmManager.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RealmManager} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RealmManager}
 */
proto.yartu.RealmManager.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.Realm;
      reader.readMessage(value,common_grpc_definitions_pb.Realm.deserializeBinaryFromReader);
      msg.setRealm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.RealmManager.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RealmManager.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RealmManager} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RealmManager.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRealm();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.Realm.serializeBinaryToWriter
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.User}
 */
proto.yartu.RealmManager.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 1));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.RealmManager} returns this
*/
proto.yartu.RealmManager.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.RealmManager} returns this
 */
proto.yartu.RealmManager.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RealmManager.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string role = 2;
 * @return {string}
 */
proto.yartu.RealmManager.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RealmManager} returns this
 */
proto.yartu.RealmManager.prototype.setRole = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RealmManager} returns this
 */
proto.yartu.RealmManager.prototype.clearRole = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RealmManager.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Realm realm = 3;
 * @return {?proto.Realm}
 */
proto.yartu.RealmManager.prototype.getRealm = function() {
  return /** @type{?proto.Realm} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Realm, 3));
};


/**
 * @param {?proto.Realm|undefined} value
 * @return {!proto.yartu.RealmManager} returns this
*/
proto.yartu.RealmManager.prototype.setRealm = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.RealmManager} returns this
 */
proto.yartu.RealmManager.prototype.clearRealm = function() {
  return this.setRealm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RealmManager.prototype.hasRealm = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetInfoResponse.repeatedFields_ = [15,17,20,22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workingStatus: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    serverType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    personalPhone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    personalEmail: jspb.Message.getFieldWithDefault(msg, 6, ""),
    secondaryPhone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    secondaryEmail: jspb.Message.getFieldWithDefault(msg, 8, ""),
    language: jspb.Message.getFieldWithDefault(msg, 9, ""),
    country: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 11, ""),
    timeformat: jspb.Message.getFieldWithDefault(msg, 12, ""),
    city: jspb.Message.getFieldWithDefault(msg, 13, ""),
    roleName: jspb.Message.getFieldWithDefault(msg, 14, ""),
    permissionList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    message: jspb.Message.getFieldWithDefault(msg, 16, ""),
    notificationList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    serviceSettings: (f = msg.getServiceSettings()) && common_grpc_definitions_pb.JSON.toObject(includeInstance, f),
    image: msg.getImage_asB64(),
    managerList: jspb.Message.toObjectList(msg.getManagerList(),
    proto.yartu.RealmManager.toObject, includeInstance),
    anyNotPaidRealm: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    paidLogsList: jspb.Message.toObjectList(msg.getPaidLogsList(),
    common_grpc_definitions_pb.PaidLog.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetInfoResponse}
 */
proto.yartu.GetInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetInfoResponse;
  return proto.yartu.GetInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetInfoResponse}
 */
proto.yartu.GetInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkingStatus(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonalPhone(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonalEmail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondaryPhone(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondaryEmail(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeformat(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleName(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermission(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addNotification(value);
      break;
    case 18:
      var value = new common_grpc_definitions_pb.JSON;
      reader.readMessage(value,common_grpc_definitions_pb.JSON.deserializeBinaryFromReader);
      msg.setServiceSettings(value);
      break;
    case 19:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
      break;
    case 20:
      var value = new proto.yartu.RealmManager;
      reader.readMessage(value,proto.yartu.RealmManager.deserializeBinaryFromReader);
      msg.addManager(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAnyNotPaidRealm(value);
      break;
    case 22:
      var value = new common_grpc_definitions_pb.PaidLog;
      reader.readMessage(value,common_grpc_definitions_pb.PaidLog.deserializeBinaryFromReader);
      msg.addPaidLogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWorkingStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getServerType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPersonalPhone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPersonalEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSecondaryPhone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSecondaryEmail();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTimeformat();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRoleName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPermissionList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getNotificationList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getServiceSettings();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      common_grpc_definitions_pb.JSON.serializeBinaryToWriter
    );
  }
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      19,
      f
    );
  }
  f = message.getManagerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.yartu.RealmManager.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getPaidLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      common_grpc_definitions_pb.PaidLog.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetInfoResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string working_status = 2;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getWorkingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setWorkingStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional User user = 3;
 * @return {?proto.User}
 */
proto.yartu.GetInfoResponse.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.GetInfoResponse} returns this
*/
proto.yartu.GetInfoResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetInfoResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string server_type = 4;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getServerType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setServerType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string personal_phone = 5;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getPersonalPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setPersonalPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string personal_email = 6;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getPersonalEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setPersonalEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string secondary_phone = 7;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getSecondaryPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setSecondaryPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string secondary_email = 8;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getSecondaryEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setSecondaryEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string language = 9;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string country = 10;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string timezone = 11;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string timeformat = 12;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getTimeformat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setTimeformat = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string city = 13;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string role_name = 14;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getRoleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setRoleName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated string permission = 15;
 * @return {!Array<string>}
 */
proto.yartu.GetInfoResponse.prototype.getPermissionList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setPermissionList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.addPermission = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearPermissionList = function() {
  return this.setPermissionList([]);
};


/**
 * optional string message = 16;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetInfoResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated string notification = 17;
 * @return {!Array<string>}
 */
proto.yartu.GetInfoResponse.prototype.getNotificationList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setNotificationList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.addNotification = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearNotificationList = function() {
  return this.setNotificationList([]);
};


/**
 * optional JSON service_settings = 18;
 * @return {?proto.JSON}
 */
proto.yartu.GetInfoResponse.prototype.getServiceSettings = function() {
  return /** @type{?proto.JSON} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.JSON, 18));
};


/**
 * @param {?proto.JSON|undefined} value
 * @return {!proto.yartu.GetInfoResponse} returns this
*/
proto.yartu.GetInfoResponse.prototype.setServiceSettings = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearServiceSettings = function() {
  return this.setServiceSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetInfoResponse.prototype.hasServiceSettings = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bytes image = 19;
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * optional bytes image = 19;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.yartu.GetInfoResponse.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 19;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.yartu.GetInfoResponse.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 19, value);
};


/**
 * repeated RealmManager manager = 20;
 * @return {!Array<!proto.yartu.RealmManager>}
 */
proto.yartu.GetInfoResponse.prototype.getManagerList = function() {
  return /** @type{!Array<!proto.yartu.RealmManager>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.RealmManager, 20));
};


/**
 * @param {!Array<!proto.yartu.RealmManager>} value
 * @return {!proto.yartu.GetInfoResponse} returns this
*/
proto.yartu.GetInfoResponse.prototype.setManagerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.yartu.RealmManager=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.RealmManager}
 */
proto.yartu.GetInfoResponse.prototype.addManager = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.yartu.RealmManager, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearManagerList = function() {
  return this.setManagerList([]);
};


/**
 * optional bool any_not_paid_realm = 21;
 * @return {boolean}
 */
proto.yartu.GetInfoResponse.prototype.getAnyNotPaidRealm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.setAnyNotPaidRealm = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearAnyNotPaidRealm = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetInfoResponse.prototype.hasAnyNotPaidRealm = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated PaidLog paid_logs = 22;
 * @return {!Array<!proto.PaidLog>}
 */
proto.yartu.GetInfoResponse.prototype.getPaidLogsList = function() {
  return /** @type{!Array<!proto.PaidLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.PaidLog, 22));
};


/**
 * @param {!Array<!proto.PaidLog>} value
 * @return {!proto.yartu.GetInfoResponse} returns this
*/
proto.yartu.GetInfoResponse.prototype.setPaidLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.PaidLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PaidLog}
 */
proto.yartu.GetInfoResponse.prototype.addPaidLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.PaidLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetInfoResponse} returns this
 */
proto.yartu.GetInfoResponse.prototype.clearPaidLogsList = function() {
  return this.setPaidLogsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetWeatherRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetWeatherRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetWeatherRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetWeatherRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetWeatherRequest}
 */
proto.yartu.GetWeatherRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetWeatherRequest;
  return proto.yartu.GetWeatherRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetWeatherRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetWeatherRequest}
 */
proto.yartu.GetWeatherRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetWeatherRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetWeatherRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetWeatherRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetWeatherRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetWeatherResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetWeatherResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetWeatherResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetWeatherResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    condition: jspb.Message.getFieldWithDefault(msg, 2, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 3, ""),
    temperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    humidity: jspb.Message.getFieldWithDefault(msg, 5, 0),
    windSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    pressure: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dateAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    message: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetWeatherResponse}
 */
proto.yartu.GetWeatherResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetWeatherResponse;
  return proto.yartu.GetWeatherResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetWeatherResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetWeatherResponse}
 */
proto.yartu.GetWeatherResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCondition(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTemperature(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHumidity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWindSpeed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPressure(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetWeatherResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetWeatherResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetWeatherResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetWeatherResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCondition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTemperature();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getHumidity();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getWindSpeed();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getPressure();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getDateAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetWeatherResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string condition = 2;
 * @return {string}
 */
proto.yartu.GetWeatherResponse.prototype.getCondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setCondition = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon = 3;
 * @return {string}
 */
proto.yartu.GetWeatherResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double temperature = 4;
 * @return {number}
 */
proto.yartu.GetWeatherResponse.prototype.getTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int64 humidity = 5;
 * @return {number}
 */
proto.yartu.GetWeatherResponse.prototype.getHumidity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setHumidity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double wind_speed = 6;
 * @return {number}
 */
proto.yartu.GetWeatherResponse.prototype.getWindSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setWindSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int64 pressure = 7;
 * @return {number}
 */
proto.yartu.GetWeatherResponse.prototype.getPressure = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setPressure = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string date_at = 8;
 * @return {string}
 */
proto.yartu.GetWeatherResponse.prototype.getDateAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setDateAt = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string message = 9;
 * @return {string}
 */
proto.yartu.GetWeatherResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetWeatherResponse} returns this
 */
proto.yartu.GetWeatherResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetWeatherResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertAccountRequest.repeatedFields_ = [13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldPassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workingStatus: jspb.Message.getFieldWithDefault(msg, 3, ""),
    personalPhone: jspb.Message.getFieldWithDefault(msg, 4, ""),
    personalEmail: jspb.Message.getFieldWithDefault(msg, 5, ""),
    secondaryPhone: jspb.Message.getFieldWithDefault(msg, 6, ""),
    secondaryEmail: jspb.Message.getFieldWithDefault(msg, 7, ""),
    language: jspb.Message.getFieldWithDefault(msg, 8, ""),
    country: jspb.Message.getFieldWithDefault(msg, 9, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timeformat: jspb.Message.getFieldWithDefault(msg, 11, ""),
    city: jspb.Message.getFieldWithDefault(msg, 12, ""),
    notificationList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    image: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertAccountRequest}
 */
proto.yartu.UpsertAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertAccountRequest;
  return proto.yartu.UpsertAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertAccountRequest}
 */
proto.yartu.UpsertAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkingStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonalPhone(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonalEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondaryPhone(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondaryEmail(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeformat(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addNotification(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getNotificationList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string old_password = 2;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setOldPassword = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearOldPassword = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasOldPassword = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string working_status = 3;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getWorkingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setWorkingStatus = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearWorkingStatus = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasWorkingStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string personal_phone = 4;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getPersonalPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setPersonalPhone = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearPersonalPhone = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasPersonalPhone = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string personal_email = 5;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getPersonalEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setPersonalEmail = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearPersonalEmail = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasPersonalEmail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string secondary_phone = 6;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getSecondaryPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setSecondaryPhone = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearSecondaryPhone = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasSecondaryPhone = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string secondary_email = 7;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getSecondaryEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setSecondaryEmail = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearSecondaryEmail = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasSecondaryEmail = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string language = 8;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearLanguage = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string country = 9;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setCountry = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearCountry = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasCountry = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string timezone = 10;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setTimezone = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearTimezone = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasTimezone = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string timeformat = 11;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getTimeformat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setTimeformat = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearTimeformat = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasTimeformat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string city = 12;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setCity = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearCity = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasCity = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated string notification = 13;
 * @return {!Array<string>}
 */
proto.yartu.UpsertAccountRequest.prototype.getNotificationList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setNotificationList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.addNotification = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearNotificationList = function() {
  return this.setNotificationList([]);
};


/**
 * optional string image = 14;
 * @return {string}
 */
proto.yartu.UpsertAccountRequest.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.setImage = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountRequest} returns this
 */
proto.yartu.UpsertAccountRequest.prototype.clearImage = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountRequest.prototype.hasImage = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertAccountResponse}
 */
proto.yartu.UpsertAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertAccountResponse;
  return proto.yartu.UpsertAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertAccountResponse}
 */
proto.yartu.UpsertAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertAccountResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertAccountResponse} returns this
 */
proto.yartu.UpsertAccountResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertAccountResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountResponse} returns this
 */
proto.yartu.UpsertAccountResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountResponse} returns this
 */
proto.yartu.UpsertAccountResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string new_token = 3;
 * @return {string}
 */
proto.yartu.UpsertAccountResponse.prototype.getNewToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAccountResponse} returns this
 */
proto.yartu.UpsertAccountResponse.prototype.setNewToken = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAccountResponse} returns this
 */
proto.yartu.UpsertAccountResponse.prototype.clearNewToken = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAccountResponse.prototype.hasNewToken = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.PurgeAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.PurgeAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.PurgeAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PurgeAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.PurgeAccountRequest}
 */
proto.yartu.PurgeAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.PurgeAccountRequest;
  return proto.yartu.PurgeAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.PurgeAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.PurgeAccountRequest}
 */
proto.yartu.PurgeAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.PurgeAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.PurgeAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.PurgeAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PurgeAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.yartu.PurgeAccountRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PurgeAccountRequest} returns this
 */
proto.yartu.PurgeAccountRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.PurgeAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.PurgeAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.PurgeAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PurgeAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.PurgeAccountResponse}
 */
proto.yartu.PurgeAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.PurgeAccountResponse;
  return proto.yartu.PurgeAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.PurgeAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.PurgeAccountResponse}
 */
proto.yartu.PurgeAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.PurgeAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.PurgeAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.PurgeAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PurgeAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.PurgeAccountResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PurgeAccountResponse} returns this
 */
proto.yartu.PurgeAccountResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.PurgeAccountResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PurgeAccountResponse} returns this
 */
proto.yartu.PurgeAccountResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.PurgeAccountResponse} returns this
 */
proto.yartu.PurgeAccountResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.PurgeAccountResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListEmailSignatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailSignatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailSignatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailSignatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && common_grpc_definitions_pb.Query.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListEmailSignatureRequest}
 */
proto.yartu.ListEmailSignatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailSignatureRequest;
  return proto.yartu.ListEmailSignatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailSignatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailSignatureRequest}
 */
proto.yartu.ListEmailSignatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_grpc_definitions_pb.Query;
      reader.readMessage(value,common_grpc_definitions_pb.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListEmailSignatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailSignatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailSignatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailSignatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.Query}
 */
proto.yartu.ListEmailSignatureRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 1));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListEmailSignatureRequest} returns this
*/
proto.yartu.ListEmailSignatureRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailSignatureRequest} returns this
 */
proto.yartu.ListEmailSignatureRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailSignatureRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListEmailSignatureResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListEmailSignatureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailSignatureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailSignatureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailSignatureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.EmailSignature.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && common_grpc_definitions_pb.PaginationMeta.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListEmailSignatureResponse}
 */
proto.yartu.ListEmailSignatureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailSignatureResponse;
  return proto.yartu.ListEmailSignatureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailSignatureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailSignatureResponse}
 */
proto.yartu.ListEmailSignatureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.EmailSignature;
      reader.readMessage(value,proto.yartu.EmailSignature.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.PaginationMeta;
      reader.readMessage(value,common_grpc_definitions_pb.PaginationMeta.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListEmailSignatureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailSignatureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailSignatureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailSignatureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.EmailSignature.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.PaginationMeta.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListEmailSignatureResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListEmailSignatureResponse} returns this
 */
proto.yartu.ListEmailSignatureResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated EmailSignature data = 2;
 * @return {!Array<!proto.yartu.EmailSignature>}
 */
proto.yartu.ListEmailSignatureResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.EmailSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.EmailSignature, 2));
};


/**
 * @param {!Array<!proto.yartu.EmailSignature>} value
 * @return {!proto.yartu.ListEmailSignatureResponse} returns this
*/
proto.yartu.ListEmailSignatureResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.EmailSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.EmailSignature}
 */
proto.yartu.ListEmailSignatureResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.EmailSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListEmailSignatureResponse} returns this
 */
proto.yartu.ListEmailSignatureResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListEmailSignatureResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListEmailSignatureResponse} returns this
*/
proto.yartu.ListEmailSignatureResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailSignatureResponse} returns this
 */
proto.yartu.ListEmailSignatureResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailSignatureResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListEmailSignatureResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListEmailSignatureResponse} returns this
 */
proto.yartu.ListEmailSignatureResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListEmailSignatureResponse} returns this
 */
proto.yartu.ListEmailSignatureResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailSignatureResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailSignatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailSignatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailSignatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailSignatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailSignatureRequest}
 */
proto.yartu.GetEmailSignatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailSignatureRequest;
  return proto.yartu.GetEmailSignatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailSignatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailSignatureRequest}
 */
proto.yartu.GetEmailSignatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailSignatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailSignatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailSignatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailSignatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.GetEmailSignatureRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailSignatureRequest} returns this
 */
proto.yartu.GetEmailSignatureRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailSignatureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailSignatureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailSignatureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailSignatureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.EmailSignature.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailSignatureResponse}
 */
proto.yartu.GetEmailSignatureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailSignatureResponse;
  return proto.yartu.GetEmailSignatureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailSignatureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailSignatureResponse}
 */
proto.yartu.GetEmailSignatureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.EmailSignature;
      reader.readMessage(value,proto.yartu.EmailSignature.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailSignatureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailSignatureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailSignatureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailSignatureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.EmailSignature.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetEmailSignatureResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailSignatureResponse} returns this
 */
proto.yartu.GetEmailSignatureResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EmailSignature data = 2;
 * @return {?proto.yartu.EmailSignature}
 */
proto.yartu.GetEmailSignatureResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.EmailSignature} */ (
    jspb.Message.getWrapperField(this, proto.yartu.EmailSignature, 2));
};


/**
 * @param {?proto.yartu.EmailSignature|undefined} value
 * @return {!proto.yartu.GetEmailSignatureResponse} returns this
*/
proto.yartu.GetEmailSignatureResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetEmailSignatureResponse} returns this
 */
proto.yartu.GetEmailSignatureResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailSignatureResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetEmailSignatureResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailSignatureResponse} returns this
 */
proto.yartu.GetEmailSignatureResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetEmailSignatureResponse} returns this
 */
proto.yartu.GetEmailSignatureResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailSignatureResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertEmailSignatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertEmailSignatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailSignatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertEmailSignatureRequest}
 */
proto.yartu.UpsertEmailSignatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertEmailSignatureRequest;
  return proto.yartu.UpsertEmailSignatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertEmailSignatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertEmailSignatureRequest}
 */
proto.yartu.UpsertEmailSignatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertEmailSignatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertEmailSignatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailSignatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertEmailSignatureRequest} returns this
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailSignatureRequest} returns this
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string signature = 3;
 * @return {string}
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailSignatureRequest} returns this
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_active = 4;
 * @return {boolean}
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertEmailSignatureRequest} returns this
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_default = 5;
 * @return {boolean}
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertEmailSignatureRequest} returns this
 */
proto.yartu.UpsertEmailSignatureRequest.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertEmailSignatureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertEmailSignatureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailSignatureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertEmailSignatureResponse}
 */
proto.yartu.UpsertEmailSignatureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertEmailSignatureResponse;
  return proto.yartu.UpsertEmailSignatureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertEmailSignatureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertEmailSignatureResponse}
 */
proto.yartu.UpsertEmailSignatureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertEmailSignatureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertEmailSignatureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailSignatureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertEmailSignatureResponse} returns this
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailSignatureResponse} returns this
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertEmailSignatureResponse} returns this
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertEmailSignatureResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteEmailSignatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteEmailSignatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteEmailSignatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailSignatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteEmailSignatureRequest}
 */
proto.yartu.DeleteEmailSignatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteEmailSignatureRequest;
  return proto.yartu.DeleteEmailSignatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteEmailSignatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteEmailSignatureRequest}
 */
proto.yartu.DeleteEmailSignatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteEmailSignatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteEmailSignatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteEmailSignatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailSignatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.DeleteEmailSignatureRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteEmailSignatureRequest} returns this
 */
proto.yartu.DeleteEmailSignatureRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteEmailSignatureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteEmailSignatureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailSignatureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteEmailSignatureResponse}
 */
proto.yartu.DeleteEmailSignatureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteEmailSignatureResponse;
  return proto.yartu.DeleteEmailSignatureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteEmailSignatureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteEmailSignatureResponse}
 */
proto.yartu.DeleteEmailSignatureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteEmailSignatureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteEmailSignatureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailSignatureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteEmailSignatureResponse} returns this
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteEmailSignatureResponse} returns this
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteEmailSignatureResponse} returns this
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteEmailSignatureResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListEmailTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && common_grpc_definitions_pb.Query.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListEmailTemplateRequest}
 */
proto.yartu.ListEmailTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailTemplateRequest;
  return proto.yartu.ListEmailTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailTemplateRequest}
 */
proto.yartu.ListEmailTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_grpc_definitions_pb.Query;
      reader.readMessage(value,common_grpc_definitions_pb.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListEmailTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.Query}
 */
proto.yartu.ListEmailTemplateRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 1));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListEmailTemplateRequest} returns this
*/
proto.yartu.ListEmailTemplateRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailTemplateRequest} returns this
 */
proto.yartu.ListEmailTemplateRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailTemplateRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListEmailTemplateResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListEmailTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.EmailTemplate.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && common_grpc_definitions_pb.PaginationMeta.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListEmailTemplateResponse}
 */
proto.yartu.ListEmailTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailTemplateResponse;
  return proto.yartu.ListEmailTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailTemplateResponse}
 */
proto.yartu.ListEmailTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.EmailTemplate;
      reader.readMessage(value,proto.yartu.EmailTemplate.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.PaginationMeta;
      reader.readMessage(value,common_grpc_definitions_pb.PaginationMeta.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListEmailTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.PaginationMeta.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListEmailTemplateResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListEmailTemplateResponse} returns this
 */
proto.yartu.ListEmailTemplateResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated EmailTemplate data = 2;
 * @return {!Array<!proto.yartu.EmailTemplate>}
 */
proto.yartu.ListEmailTemplateResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.EmailTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.EmailTemplate, 2));
};


/**
 * @param {!Array<!proto.yartu.EmailTemplate>} value
 * @return {!proto.yartu.ListEmailTemplateResponse} returns this
*/
proto.yartu.ListEmailTemplateResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.EmailTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.EmailTemplate}
 */
proto.yartu.ListEmailTemplateResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.EmailTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListEmailTemplateResponse} returns this
 */
proto.yartu.ListEmailTemplateResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListEmailTemplateResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListEmailTemplateResponse} returns this
*/
proto.yartu.ListEmailTemplateResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailTemplateResponse} returns this
 */
proto.yartu.ListEmailTemplateResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailTemplateResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListEmailTemplateResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListEmailTemplateResponse} returns this
 */
proto.yartu.ListEmailTemplateResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListEmailTemplateResponse} returns this
 */
proto.yartu.ListEmailTemplateResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailTemplateResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailTemplateRequest}
 */
proto.yartu.GetEmailTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailTemplateRequest;
  return proto.yartu.GetEmailTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailTemplateRequest}
 */
proto.yartu.GetEmailTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.GetEmailTemplateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailTemplateRequest} returns this
 */
proto.yartu.GetEmailTemplateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.EmailTemplate.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailTemplateResponse}
 */
proto.yartu.GetEmailTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailTemplateResponse;
  return proto.yartu.GetEmailTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailTemplateResponse}
 */
proto.yartu.GetEmailTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.EmailTemplate;
      reader.readMessage(value,proto.yartu.EmailTemplate.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetEmailTemplateResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailTemplateResponse} returns this
 */
proto.yartu.GetEmailTemplateResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EmailTemplate data = 2;
 * @return {?proto.yartu.EmailTemplate}
 */
proto.yartu.GetEmailTemplateResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.yartu.EmailTemplate, 2));
};


/**
 * @param {?proto.yartu.EmailTemplate|undefined} value
 * @return {!proto.yartu.GetEmailTemplateResponse} returns this
*/
proto.yartu.GetEmailTemplateResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetEmailTemplateResponse} returns this
 */
proto.yartu.GetEmailTemplateResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailTemplateResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetEmailTemplateResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailTemplateResponse} returns this
 */
proto.yartu.GetEmailTemplateResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetEmailTemplateResponse} returns this
 */
proto.yartu.GetEmailTemplateResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailTemplateResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertEmailTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertEmailTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 3, ""),
    template: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertEmailTemplateRequest}
 */
proto.yartu.UpsertEmailTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertEmailTemplateRequest;
  return proto.yartu.UpsertEmailTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertEmailTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertEmailTemplateRequest}
 */
proto.yartu.UpsertEmailTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertEmailTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertEmailTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertEmailTemplateRequest} returns this
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailTemplateRequest} returns this
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subject = 3;
 * @return {string}
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailTemplateRequest} returns this
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string template = 4;
 * @return {string}
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailTemplateRequest} returns this
 */
proto.yartu.UpsertEmailTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertEmailTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertEmailTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertEmailTemplateResponse}
 */
proto.yartu.UpsertEmailTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertEmailTemplateResponse;
  return proto.yartu.UpsertEmailTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertEmailTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertEmailTemplateResponse}
 */
proto.yartu.UpsertEmailTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertEmailTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertEmailTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertEmailTemplateResponse} returns this
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailTemplateResponse} returns this
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertEmailTemplateResponse} returns this
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertEmailTemplateResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteEmailTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteEmailTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteEmailTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteEmailTemplateRequest}
 */
proto.yartu.DeleteEmailTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteEmailTemplateRequest;
  return proto.yartu.DeleteEmailTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteEmailTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteEmailTemplateRequest}
 */
proto.yartu.DeleteEmailTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteEmailTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteEmailTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteEmailTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.DeleteEmailTemplateRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteEmailTemplateRequest} returns this
 */
proto.yartu.DeleteEmailTemplateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteEmailTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteEmailTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteEmailTemplateResponse}
 */
proto.yartu.DeleteEmailTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteEmailTemplateResponse;
  return proto.yartu.DeleteEmailTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteEmailTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteEmailTemplateResponse}
 */
proto.yartu.DeleteEmailTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteEmailTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteEmailTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteEmailTemplateResponse} returns this
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteEmailTemplateResponse} returns this
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteEmailTemplateResponse} returns this
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteEmailTemplateResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListEmailRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && common_grpc_definitions_pb.Query.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListEmailRuleRequest}
 */
proto.yartu.ListEmailRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailRuleRequest;
  return proto.yartu.ListEmailRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailRuleRequest}
 */
proto.yartu.ListEmailRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_grpc_definitions_pb.Query;
      reader.readMessage(value,common_grpc_definitions_pb.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListEmailRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.Query}
 */
proto.yartu.ListEmailRuleRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 1));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListEmailRuleRequest} returns this
*/
proto.yartu.ListEmailRuleRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailRuleRequest} returns this
 */
proto.yartu.ListEmailRuleRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailRuleRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListEmailRuleResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListEmailRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.EmailRule.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && common_grpc_definitions_pb.PaginationMeta.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListEmailRuleResponse}
 */
proto.yartu.ListEmailRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailRuleResponse;
  return proto.yartu.ListEmailRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailRuleResponse}
 */
proto.yartu.ListEmailRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.EmailRule;
      reader.readMessage(value,proto.yartu.EmailRule.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.PaginationMeta;
      reader.readMessage(value,common_grpc_definitions_pb.PaginationMeta.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListEmailRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.EmailRule.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.PaginationMeta.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListEmailRuleResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListEmailRuleResponse} returns this
 */
proto.yartu.ListEmailRuleResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated EmailRule data = 2;
 * @return {!Array<!proto.yartu.EmailRule>}
 */
proto.yartu.ListEmailRuleResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.EmailRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.EmailRule, 2));
};


/**
 * @param {!Array<!proto.yartu.EmailRule>} value
 * @return {!proto.yartu.ListEmailRuleResponse} returns this
*/
proto.yartu.ListEmailRuleResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.EmailRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.EmailRule}
 */
proto.yartu.ListEmailRuleResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.EmailRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListEmailRuleResponse} returns this
 */
proto.yartu.ListEmailRuleResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListEmailRuleResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListEmailRuleResponse} returns this
*/
proto.yartu.ListEmailRuleResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailRuleResponse} returns this
 */
proto.yartu.ListEmailRuleResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailRuleResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListEmailRuleResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListEmailRuleResponse} returns this
 */
proto.yartu.ListEmailRuleResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListEmailRuleResponse} returns this
 */
proto.yartu.ListEmailRuleResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailRuleResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailRuleRequest}
 */
proto.yartu.GetEmailRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailRuleRequest;
  return proto.yartu.GetEmailRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailRuleRequest}
 */
proto.yartu.GetEmailRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.GetEmailRuleRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailRuleRequest} returns this
 */
proto.yartu.GetEmailRuleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.EmailRule.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailRuleResponse}
 */
proto.yartu.GetEmailRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailRuleResponse;
  return proto.yartu.GetEmailRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailRuleResponse}
 */
proto.yartu.GetEmailRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.EmailRule;
      reader.readMessage(value,proto.yartu.EmailRule.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.EmailRule.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetEmailRuleResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailRuleResponse} returns this
 */
proto.yartu.GetEmailRuleResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EmailRule data = 2;
 * @return {?proto.yartu.EmailRule}
 */
proto.yartu.GetEmailRuleResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.EmailRule} */ (
    jspb.Message.getWrapperField(this, proto.yartu.EmailRule, 2));
};


/**
 * @param {?proto.yartu.EmailRule|undefined} value
 * @return {!proto.yartu.GetEmailRuleResponse} returns this
*/
proto.yartu.GetEmailRuleResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetEmailRuleResponse} returns this
 */
proto.yartu.GetEmailRuleResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailRuleResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetEmailRuleResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailRuleResponse} returns this
 */
proto.yartu.GetEmailRuleResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetEmailRuleResponse} returns this
 */
proto.yartu.GetEmailRuleResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailRuleResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertEmailRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertEmailRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertEmailRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rule: (f = msg.getRule()) && proto.yartu.EmailRule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertEmailRuleRequest}
 */
proto.yartu.UpsertEmailRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertEmailRuleRequest;
  return proto.yartu.UpsertEmailRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertEmailRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertEmailRuleRequest}
 */
proto.yartu.UpsertEmailRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.yartu.EmailRule;
      reader.readMessage(value,proto.yartu.EmailRule.deserializeBinaryFromReader);
      msg.setRule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertEmailRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertEmailRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertEmailRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.EmailRule.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertEmailRuleRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertEmailRuleRequest} returns this
 */
proto.yartu.UpsertEmailRuleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EmailRule rule = 2;
 * @return {?proto.yartu.EmailRule}
 */
proto.yartu.UpsertEmailRuleRequest.prototype.getRule = function() {
  return /** @type{?proto.yartu.EmailRule} */ (
    jspb.Message.getWrapperField(this, proto.yartu.EmailRule, 2));
};


/**
 * @param {?proto.yartu.EmailRule|undefined} value
 * @return {!proto.yartu.UpsertEmailRuleRequest} returns this
*/
proto.yartu.UpsertEmailRuleRequest.prototype.setRule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertEmailRuleRequest} returns this
 */
proto.yartu.UpsertEmailRuleRequest.prototype.clearRule = function() {
  return this.setRule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertEmailRuleRequest.prototype.hasRule = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertEmailRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertEmailRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertEmailRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertEmailRuleResponse}
 */
proto.yartu.UpsertEmailRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertEmailRuleResponse;
  return proto.yartu.UpsertEmailRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertEmailRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertEmailRuleResponse}
 */
proto.yartu.UpsertEmailRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertEmailRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertEmailRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertEmailRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertEmailRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertEmailRuleResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertEmailRuleResponse} returns this
 */
proto.yartu.UpsertEmailRuleResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertEmailRuleResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertEmailRuleResponse} returns this
 */
proto.yartu.UpsertEmailRuleResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertEmailRuleResponse} returns this
 */
proto.yartu.UpsertEmailRuleResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertEmailRuleResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteEmailRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteEmailRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteEmailRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteEmailRuleRequest}
 */
proto.yartu.DeleteEmailRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteEmailRuleRequest;
  return proto.yartu.DeleteEmailRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteEmailRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteEmailRuleRequest}
 */
proto.yartu.DeleteEmailRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteEmailRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteEmailRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteEmailRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.DeleteEmailRuleRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteEmailRuleRequest} returns this
 */
proto.yartu.DeleteEmailRuleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteEmailRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteEmailRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteEmailRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteEmailRuleResponse}
 */
proto.yartu.DeleteEmailRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteEmailRuleResponse;
  return proto.yartu.DeleteEmailRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteEmailRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteEmailRuleResponse}
 */
proto.yartu.DeleteEmailRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteEmailRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteEmailRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteEmailRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteEmailRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.DeleteEmailRuleResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteEmailRuleResponse} returns this
 */
proto.yartu.DeleteEmailRuleResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteEmailRuleResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteEmailRuleResponse} returns this
 */
proto.yartu.DeleteEmailRuleResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteEmailRuleResponse} returns this
 */
proto.yartu.DeleteEmailRuleResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteEmailRuleResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailForwardingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailForwardingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailForwardingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailForwardingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailForwardingRequest}
 */
proto.yartu.GetEmailForwardingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailForwardingRequest;
  return proto.yartu.GetEmailForwardingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailForwardingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailForwardingRequest}
 */
proto.yartu.GetEmailForwardingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailForwardingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailForwardingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailForwardingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailForwardingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetEmailForwardingResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailForwardingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailForwardingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailForwardingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailForwardingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    addressList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    keepCopy: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    message: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailForwardingResponse}
 */
proto.yartu.GetEmailForwardingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailForwardingResponse;
  return proto.yartu.GetEmailForwardingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailForwardingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailForwardingResponse}
 */
proto.yartu.GetEmailForwardingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeepCopy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailForwardingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailForwardingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailForwardingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailForwardingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAddressList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getKeepCopy();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetEmailForwardingResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_active = 2;
 * @return {boolean}
 */
proto.yartu.GetEmailForwardingResponse.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated string address = 3;
 * @return {!Array<string>}
 */
proto.yartu.GetEmailForwardingResponse.prototype.getAddressList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.setAddressList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.addAddress = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.clearAddressList = function() {
  return this.setAddressList([]);
};


/**
 * optional bool keep_copy = 4;
 * @return {boolean}
 */
proto.yartu.GetEmailForwardingResponse.prototype.getKeepCopy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.setKeepCopy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.yartu.GetEmailForwardingResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetEmailForwardingResponse} returns this
 */
proto.yartu.GetEmailForwardingResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailForwardingResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.SetEmailForwardingRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SetEmailForwardingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SetEmailForwardingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SetEmailForwardingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailForwardingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    addressList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    keepCopy: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SetEmailForwardingRequest}
 */
proto.yartu.SetEmailForwardingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SetEmailForwardingRequest;
  return proto.yartu.SetEmailForwardingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SetEmailForwardingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SetEmailForwardingRequest}
 */
proto.yartu.SetEmailForwardingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddress(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeepCopy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SetEmailForwardingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SetEmailForwardingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SetEmailForwardingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailForwardingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAddressList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getKeepCopy();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool is_active = 1;
 * @return {boolean}
 */
proto.yartu.SetEmailForwardingRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SetEmailForwardingRequest} returns this
 */
proto.yartu.SetEmailForwardingRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string address = 2;
 * @return {!Array<string>}
 */
proto.yartu.SetEmailForwardingRequest.prototype.getAddressList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.SetEmailForwardingRequest} returns this
 */
proto.yartu.SetEmailForwardingRequest.prototype.setAddressList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.SetEmailForwardingRequest} returns this
 */
proto.yartu.SetEmailForwardingRequest.prototype.addAddress = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.SetEmailForwardingRequest} returns this
 */
proto.yartu.SetEmailForwardingRequest.prototype.clearAddressList = function() {
  return this.setAddressList([]);
};


/**
 * optional bool keep_copy = 3;
 * @return {boolean}
 */
proto.yartu.SetEmailForwardingRequest.prototype.getKeepCopy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SetEmailForwardingRequest} returns this
 */
proto.yartu.SetEmailForwardingRequest.prototype.setKeepCopy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SetEmailForwardingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SetEmailForwardingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SetEmailForwardingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailForwardingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SetEmailForwardingResponse}
 */
proto.yartu.SetEmailForwardingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SetEmailForwardingResponse;
  return proto.yartu.SetEmailForwardingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SetEmailForwardingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SetEmailForwardingResponse}
 */
proto.yartu.SetEmailForwardingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SetEmailForwardingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SetEmailForwardingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SetEmailForwardingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailForwardingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.SetEmailForwardingResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SetEmailForwardingResponse} returns this
 */
proto.yartu.SetEmailForwardingResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.SetEmailForwardingResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetEmailForwardingResponse} returns this
 */
proto.yartu.SetEmailForwardingResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SetEmailForwardingResponse} returns this
 */
proto.yartu.SetEmailForwardingResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SetEmailForwardingResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailAutoReplyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailAutoReplyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailAutoReplyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailAutoReplyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailAutoReplyRequest}
 */
proto.yartu.GetEmailAutoReplyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailAutoReplyRequest;
  return proto.yartu.GetEmailAutoReplyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailAutoReplyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailAutoReplyRequest}
 */
proto.yartu.GetEmailAutoReplyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailAutoReplyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailAutoReplyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailAutoReplyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailAutoReplyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetEmailAutoReplyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetEmailAutoReplyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailAutoReplyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    subject: jspb.Message.getFieldWithDefault(msg, 3, ""),
    replyMessage: jspb.Message.getFieldWithDefault(msg, 4, ""),
    startDate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    dontReplyList: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    message: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetEmailAutoReplyResponse}
 */
proto.yartu.GetEmailAutoReplyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetEmailAutoReplyResponse;
  return proto.yartu.GetEmailAutoReplyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetEmailAutoReplyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetEmailAutoReplyResponse}
 */
proto.yartu.GetEmailAutoReplyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplyMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDontReplyList(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetEmailAutoReplyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetEmailAutoReplyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetEmailAutoReplyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReplyMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDontReplyList();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_active = 2;
 * @return {boolean}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string subject = 3;
 * @return {string}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reply_message = 4;
 * @return {string}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getReplyMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setReplyMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string start_date = 5;
 * @return {string}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string end_date = 6;
 * @return {string}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool dont_reply_list = 7;
 * @return {boolean}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getDontReplyList = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setDontReplyList = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string message = 8;
 * @return {string}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetEmailAutoReplyResponse} returns this
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetEmailAutoReplyResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SetEmailAutoReplyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SetEmailAutoReplyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailAutoReplyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dontReplyList: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SetEmailAutoReplyRequest}
 */
proto.yartu.SetEmailAutoReplyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SetEmailAutoReplyRequest;
  return proto.yartu.SetEmailAutoReplyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SetEmailAutoReplyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SetEmailAutoReplyRequest}
 */
proto.yartu.SetEmailAutoReplyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDontReplyList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SetEmailAutoReplyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SetEmailAutoReplyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailAutoReplyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDontReplyList();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bool is_active = 1;
 * @return {boolean}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SetEmailAutoReplyRequest} returns this
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetEmailAutoReplyRequest} returns this
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetEmailAutoReplyRequest} returns this
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string start_date = 4;
 * @return {string}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetEmailAutoReplyRequest} returns this
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string end_date = 5;
 * @return {string}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetEmailAutoReplyRequest} returns this
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool dont_reply_list = 6;
 * @return {boolean}
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.getDontReplyList = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SetEmailAutoReplyRequest} returns this
 */
proto.yartu.SetEmailAutoReplyRequest.prototype.setDontReplyList = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SetEmailAutoReplyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SetEmailAutoReplyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailAutoReplyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SetEmailAutoReplyResponse}
 */
proto.yartu.SetEmailAutoReplyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SetEmailAutoReplyResponse;
  return proto.yartu.SetEmailAutoReplyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SetEmailAutoReplyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SetEmailAutoReplyResponse}
 */
proto.yartu.SetEmailAutoReplyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SetEmailAutoReplyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SetEmailAutoReplyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetEmailAutoReplyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SetEmailAutoReplyResponse} returns this
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetEmailAutoReplyResponse} returns this
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SetEmailAutoReplyResponse} returns this
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SetEmailAutoReplyResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListSharedMailBoxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharedMailBoxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharedMailBoxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListSharedMailBoxRequest}
 */
proto.yartu.ListSharedMailBoxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharedMailBoxRequest;
  return proto.yartu.ListSharedMailBoxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharedMailBoxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharedMailBoxRequest}
 */
proto.yartu.ListSharedMailBoxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListSharedMailBoxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharedMailBoxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharedMailBoxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SharedMailBox.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharedMailBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharedMailBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedMailBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    toUser: (f = msg.getToUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    fromUser: (f = msg.getFromUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    toGroup: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pb_public: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    permission: jspb.Message.getFieldWithDefault(msg, 7, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SharedMailBox}
 */
proto.yartu.SharedMailBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharedMailBox;
  return proto.yartu.SharedMailBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharedMailBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharedMailBox}
 */
proto.yartu.SharedMailBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setToUser(value);
      break;
    case 4:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToGroup(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublic(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SharedMailBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharedMailBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharedMailBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedMailBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getToGroup();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPublic();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.SharedMailBox.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.yartu.SharedMailBox.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional User to_user = 3;
 * @return {?proto.User}
 */
proto.yartu.SharedMailBox.prototype.getToUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.SharedMailBox} returns this
*/
proto.yartu.SharedMailBox.prototype.setToUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.clearToUser = function() {
  return this.setToUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedMailBox.prototype.hasToUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional User from_user = 4;
 * @return {?proto.User}
 */
proto.yartu.SharedMailBox.prototype.getFromUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 4));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.SharedMailBox} returns this
*/
proto.yartu.SharedMailBox.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedMailBox.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 to_group = 5;
 * @return {number}
 */
proto.yartu.SharedMailBox.prototype.getToGroup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.setToGroup = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool public = 6;
 * @return {boolean}
 */
proto.yartu.SharedMailBox.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.setPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string permission = 7;
 * @return {string}
 */
proto.yartu.SharedMailBox.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string signature = 8;
 * @return {string}
 */
proto.yartu.SharedMailBox.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedMailBox} returns this
 */
proto.yartu.SharedMailBox.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SharedMailBoxUser.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharedMailBoxUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharedMailBoxUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedMailBoxUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    toUser: (f = msg.getToUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    permission: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SharedMailBoxUser}
 */
proto.yartu.SharedMailBoxUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharedMailBoxUser;
  return proto.yartu.SharedMailBoxUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharedMailBoxUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharedMailBoxUser}
 */
proto.yartu.SharedMailBoxUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setToUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SharedMailBoxUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharedMailBoxUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharedMailBoxUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedMailBoxUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional User to_user = 1;
 * @return {?proto.User}
 */
proto.yartu.SharedMailBoxUser.prototype.getToUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 1));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.SharedMailBoxUser} returns this
*/
proto.yartu.SharedMailBoxUser.prototype.setToUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.SharedMailBoxUser} returns this
 */
proto.yartu.SharedMailBoxUser.prototype.clearToUser = function() {
  return this.setToUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedMailBoxUser.prototype.hasToUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.yartu.SharedMailBoxUser.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedMailBoxUser} returns this
 */
proto.yartu.SharedMailBoxUser.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListSharedMailBoxResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListSharedMailBoxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharedMailBoxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharedMailBoxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.SharedMailBox.toObject, includeInstance),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListSharedMailBoxResponse}
 */
proto.yartu.ListSharedMailBoxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharedMailBoxResponse;
  return proto.yartu.ListSharedMailBoxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharedMailBoxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharedMailBoxResponse}
 */
proto.yartu.ListSharedMailBoxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.SharedMailBox;
      reader.readMessage(value,proto.yartu.SharedMailBox.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListSharedMailBoxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharedMailBoxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharedMailBoxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.SharedMailBox.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListSharedMailBoxResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListSharedMailBoxResponse} returns this
 */
proto.yartu.ListSharedMailBoxResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated SharedMailBox data = 2;
 * @return {!Array<!proto.yartu.SharedMailBox>}
 */
proto.yartu.ListSharedMailBoxResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.SharedMailBox>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.SharedMailBox, 2));
};


/**
 * @param {!Array<!proto.yartu.SharedMailBox>} value
 * @return {!proto.yartu.ListSharedMailBoxResponse} returns this
*/
proto.yartu.ListSharedMailBoxResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.SharedMailBox=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.SharedMailBox}
 */
proto.yartu.ListSharedMailBoxResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.SharedMailBox, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListSharedMailBoxResponse} returns this
 */
proto.yartu.ListSharedMailBoxResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListSharedMailBoxResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListSharedMailBoxResponse} returns this
 */
proto.yartu.ListSharedMailBoxResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetSharedMailBoxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetSharedMailBoxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetSharedMailBoxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetSharedMailBoxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetSharedMailBoxRequest}
 */
proto.yartu.GetSharedMailBoxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetSharedMailBoxRequest;
  return proto.yartu.GetSharedMailBoxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetSharedMailBoxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetSharedMailBoxRequest}
 */
proto.yartu.GetSharedMailBoxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetSharedMailBoxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetSharedMailBoxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetSharedMailBoxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetSharedMailBoxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.GetSharedMailBoxRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetSharedMailBoxRequest} returns this
 */
proto.yartu.GetSharedMailBoxRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetSharedMailBoxResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetSharedMailBoxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetSharedMailBoxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetSharedMailBoxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.SharedMailBox.toObject(includeInstance, f),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.yartu.SharedMailBoxUser.toObject, includeInstance),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetSharedMailBoxResponse}
 */
proto.yartu.GetSharedMailBoxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetSharedMailBoxResponse;
  return proto.yartu.GetSharedMailBoxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetSharedMailBoxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetSharedMailBoxResponse}
 */
proto.yartu.GetSharedMailBoxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.SharedMailBox;
      reader.readMessage(value,proto.yartu.SharedMailBox.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = new proto.yartu.SharedMailBoxUser;
      reader.readMessage(value,proto.yartu.SharedMailBoxUser.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetSharedMailBoxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetSharedMailBoxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetSharedMailBoxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.SharedMailBox.serializeBinaryToWriter
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.SharedMailBoxUser.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetSharedMailBoxResponse} returns this
 */
proto.yartu.GetSharedMailBoxResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional SharedMailBox data = 2;
 * @return {?proto.yartu.SharedMailBox}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.SharedMailBox} */ (
    jspb.Message.getWrapperField(this, proto.yartu.SharedMailBox, 2));
};


/**
 * @param {?proto.yartu.SharedMailBox|undefined} value
 * @return {!proto.yartu.GetSharedMailBoxResponse} returns this
*/
proto.yartu.GetSharedMailBoxResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetSharedMailBoxResponse} returns this
 */
proto.yartu.GetSharedMailBoxResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SharedMailBoxUser users = 3;
 * @return {!Array<!proto.yartu.SharedMailBoxUser>}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.yartu.SharedMailBoxUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.SharedMailBoxUser, 3));
};


/**
 * @param {!Array<!proto.yartu.SharedMailBoxUser>} value
 * @return {!proto.yartu.GetSharedMailBoxResponse} returns this
*/
proto.yartu.GetSharedMailBoxResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.SharedMailBoxUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.SharedMailBoxUser}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.SharedMailBoxUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetSharedMailBoxResponse} returns this
 */
proto.yartu.GetSharedMailBoxResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.GetSharedMailBoxResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetSharedMailBoxResponse} returns this
 */
proto.yartu.GetSharedMailBoxResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertSharedMailBoxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertSharedMailBoxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedMailBoxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toUser: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertSharedMailBoxRequest}
 */
proto.yartu.UpsertSharedMailBoxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertSharedMailBoxRequest;
  return proto.yartu.UpsertSharedMailBoxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertSharedMailBoxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertSharedMailBoxRequest}
 */
proto.yartu.UpsertSharedMailBoxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertSharedMailBoxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertSharedMailBoxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedMailBoxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertSharedMailBoxRequest} returns this
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string to_user = 2;
 * @return {string}
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.getToUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertSharedMailBoxRequest} returns this
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.setToUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permission = 3;
 * @return {string}
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertSharedMailBoxRequest} returns this
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertSharedMailBoxRequest} returns this
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.setUniqueId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertSharedMailBoxRequest} returns this
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.clearUniqueId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertSharedMailBoxRequest.prototype.hasUniqueId = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertSharedMailBoxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertSharedMailBoxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertSharedMailBoxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedMailBoxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertSharedMailBoxResponse}
 */
proto.yartu.UpsertSharedMailBoxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertSharedMailBoxResponse;
  return proto.yartu.UpsertSharedMailBoxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertSharedMailBoxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertSharedMailBoxResponse}
 */
proto.yartu.UpsertSharedMailBoxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertSharedMailBoxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertSharedMailBoxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertSharedMailBoxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedMailBoxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertSharedMailBoxResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertSharedMailBoxResponse} returns this
 */
proto.yartu.UpsertSharedMailBoxResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertSharedMailBoxResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertSharedMailBoxResponse} returns this
 */
proto.yartu.UpsertSharedMailBoxResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteSharedMailBoxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteSharedMailBoxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedMailBoxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toUser: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteSharedMailBoxRequest}
 */
proto.yartu.DeleteSharedMailBoxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteSharedMailBoxRequest;
  return proto.yartu.DeleteSharedMailBoxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteSharedMailBoxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteSharedMailBoxRequest}
 */
proto.yartu.DeleteSharedMailBoxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteSharedMailBoxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteSharedMailBoxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedMailBoxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteSharedMailBoxRequest} returns this
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string to_user = 2;
 * @return {string}
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.getToUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteSharedMailBoxRequest} returns this
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.setToUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string unique_id = 3;
 * @return {string}
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteSharedMailBoxRequest} returns this
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.setUniqueId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteSharedMailBoxRequest} returns this
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.clearUniqueId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteSharedMailBoxRequest.prototype.hasUniqueId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.DeleteSharedMailBoxResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteSharedMailBoxResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteSharedMailBoxResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedMailBoxResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteSharedMailBoxResponse}
 */
proto.yartu.DeleteSharedMailBoxResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteSharedMailBoxResponse;
  return proto.yartu.DeleteSharedMailBoxResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteSharedMailBoxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteSharedMailBoxResponse}
 */
proto.yartu.DeleteSharedMailBoxResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteSharedMailBoxResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteSharedMailBoxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteSharedMailBoxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedMailBoxResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.DeleteSharedMailBoxResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteSharedMailBoxResponse} returns this
 */
proto.yartu.DeleteSharedMailBoxResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteSharedMailBoxResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteSharedMailBoxResponse} returns this
 */
proto.yartu.DeleteSharedMailBoxResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListSharedMailBoxUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharedMailBoxUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharedMailBoxUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListSharedMailBoxUsersRequest}
 */
proto.yartu.ListSharedMailBoxUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharedMailBoxUsersRequest;
  return proto.yartu.ListSharedMailBoxUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharedMailBoxUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharedMailBoxUsersRequest}
 */
proto.yartu.ListSharedMailBoxUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListSharedMailBoxUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharedMailBoxUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharedMailBoxUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.ListSharedMailBoxUsersRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListSharedMailBoxUsersRequest} returns this
 */
proto.yartu.ListSharedMailBoxUsersRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListSharedMailBoxUsersResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharedMailBoxUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharedMailBoxUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.yartu.SharedMailBoxUser.toObject, includeInstance),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListSharedMailBoxUsersResponse}
 */
proto.yartu.ListSharedMailBoxUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharedMailBoxUsersResponse;
  return proto.yartu.ListSharedMailBoxUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharedMailBoxUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharedMailBoxUsersResponse}
 */
proto.yartu.ListSharedMailBoxUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.yartu.SharedMailBoxUser;
      reader.readMessage(value,proto.yartu.SharedMailBoxUser.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharedMailBoxUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharedMailBoxUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedMailBoxUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.SharedMailBoxUser.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListSharedMailBoxUsersResponse} returns this
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated SharedMailBoxUser users = 2;
 * @return {!Array<!proto.yartu.SharedMailBoxUser>}
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.yartu.SharedMailBoxUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.SharedMailBoxUser, 2));
};


/**
 * @param {!Array<!proto.yartu.SharedMailBoxUser>} value
 * @return {!proto.yartu.ListSharedMailBoxUsersResponse} returns this
*/
proto.yartu.ListSharedMailBoxUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.SharedMailBoxUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.SharedMailBoxUser}
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.SharedMailBoxUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListSharedMailBoxUsersResponse} returns this
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListSharedMailBoxUsersResponse} returns this
 */
proto.yartu.ListSharedMailBoxUsersResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UploadSignatureInlineImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UploadSignatureInlineImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UploadSignatureInlineImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadSignatureInlineImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UploadSignatureInlineImageRequest}
 */
proto.yartu.UploadSignatureInlineImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UploadSignatureInlineImageRequest;
  return proto.yartu.UploadSignatureInlineImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UploadSignatureInlineImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UploadSignatureInlineImageRequest}
 */
proto.yartu.UploadSignatureInlineImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UploadSignatureInlineImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UploadSignatureInlineImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UploadSignatureInlineImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadSignatureInlineImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UploadSignatureInlineImageRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadSignatureInlineImageRequest} returns this
 */
proto.yartu.UploadSignatureInlineImageRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.UploadSignatureInlineImageRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadSignatureInlineImageRequest} returns this
 */
proto.yartu.UploadSignatureInlineImageRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UploadSignatureInlineImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UploadSignatureInlineImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadSignatureInlineImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signatureId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UploadSignatureInlineImageResponse}
 */
proto.yartu.UploadSignatureInlineImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UploadSignatureInlineImageResponse;
  return proto.yartu.UploadSignatureInlineImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UploadSignatureInlineImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UploadSignatureInlineImageResponse}
 */
proto.yartu.UploadSignatureInlineImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSignatureId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UploadSignatureInlineImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UploadSignatureInlineImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadSignatureInlineImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignatureId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadSignatureInlineImageResponse} returns this
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadSignatureInlineImageResponse} returns this
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 signature_id = 3;
 * @return {number}
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.getSignatureId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadSignatureInlineImageResponse} returns this
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.setSignatureId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadSignatureInlineImageResponse} returns this
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UploadSignatureInlineImageResponse} returns this
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UploadSignatureInlineImageResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetMobileConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetMobileConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetMobileConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetMobileConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    calendar: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    contact: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetMobileConfigRequest}
 */
proto.yartu.GetMobileConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetMobileConfigRequest;
  return proto.yartu.GetMobileConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetMobileConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetMobileConfigRequest}
 */
proto.yartu.GetMobileConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCalendar(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetMobileConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetMobileConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetMobileConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetMobileConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool email = 1;
 * @return {boolean}
 */
proto.yartu.GetMobileConfigRequest.prototype.getEmail = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetMobileConfigRequest} returns this
 */
proto.yartu.GetMobileConfigRequest.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetMobileConfigRequest} returns this
 */
proto.yartu.GetMobileConfigRequest.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetMobileConfigRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool calendar = 2;
 * @return {boolean}
 */
proto.yartu.GetMobileConfigRequest.prototype.getCalendar = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetMobileConfigRequest} returns this
 */
proto.yartu.GetMobileConfigRequest.prototype.setCalendar = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetMobileConfigRequest} returns this
 */
proto.yartu.GetMobileConfigRequest.prototype.clearCalendar = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetMobileConfigRequest.prototype.hasCalendar = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool contact = 3;
 * @return {boolean}
 */
proto.yartu.GetMobileConfigRequest.prototype.getContact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetMobileConfigRequest} returns this
 */
proto.yartu.GetMobileConfigRequest.prototype.setContact = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetMobileConfigRequest} returns this
 */
proto.yartu.GetMobileConfigRequest.prototype.clearContact = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetMobileConfigRequest.prototype.hasContact = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.GetMobileConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetMobileConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetMobileConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetMobileConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    config: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetMobileConfigResponse}
 */
proto.yartu.GetMobileConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetMobileConfigResponse;
  return proto.yartu.GetMobileConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetMobileConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetMobileConfigResponse}
 */
proto.yartu.GetMobileConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfig(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetMobileConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetMobileConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetMobileConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetMobileConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetMobileConfigResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetMobileConfigResponse} returns this
 */
proto.yartu.GetMobileConfigResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string config = 2;
 * @return {string}
 */
proto.yartu.GetMobileConfigResponse.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetMobileConfigResponse} returns this
 */
proto.yartu.GetMobileConfigResponse.prototype.setConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetMobileConfigResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetMobileConfigResponse} returns this
 */
proto.yartu.GetMobileConfigResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetMobileConfigResponse} returns this
 */
proto.yartu.GetMobileConfigResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetMobileConfigResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.CheckUserOnlineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CheckUserOnlineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CheckUserOnlineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckUserOnlineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.CheckUserOnlineRequest}
 */
proto.yartu.CheckUserOnlineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CheckUserOnlineRequest;
  return proto.yartu.CheckUserOnlineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CheckUserOnlineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CheckUserOnlineRequest}
 */
proto.yartu.CheckUserOnlineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.CheckUserOnlineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CheckUserOnlineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CheckUserOnlineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckUserOnlineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.yartu.CheckUserOnlineRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CheckUserOnlineRequest} returns this
 */
proto.yartu.CheckUserOnlineRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.CheckUserOnlineRequest} returns this
 */
proto.yartu.CheckUserOnlineRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CheckUserOnlineRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.yartu.CheckUserOnlineRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CheckUserOnlineRequest} returns this
 */
proto.yartu.CheckUserOnlineRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.CheckUserOnlineRequest} returns this
 */
proto.yartu.CheckUserOnlineRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CheckUserOnlineRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.CheckUserOnlineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CheckUserOnlineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CheckUserOnlineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckUserOnlineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.UserBasic.toObject(includeInstance, f),
    isOnline: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.CheckUserOnlineResponse}
 */
proto.yartu.CheckUserOnlineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CheckUserOnlineResponse;
  return proto.yartu.CheckUserOnlineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CheckUserOnlineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CheckUserOnlineResponse}
 */
proto.yartu.CheckUserOnlineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.UserBasic;
      reader.readMessage(value,common_grpc_definitions_pb.UserBasic.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOnline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.CheckUserOnlineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CheckUserOnlineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CheckUserOnlineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckUserOnlineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.UserBasic.serializeBinaryToWriter
    );
  }
  f = message.getIsOnline();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.CheckUserOnlineResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CheckUserOnlineResponse} returns this
 */
proto.yartu.CheckUserOnlineResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.CheckUserOnlineResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CheckUserOnlineResponse} returns this
 */
proto.yartu.CheckUserOnlineResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UserBasic user = 3;
 * @return {?proto.UserBasic}
 */
proto.yartu.CheckUserOnlineResponse.prototype.getUser = function() {
  return /** @type{?proto.UserBasic} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.UserBasic, 3));
};


/**
 * @param {?proto.UserBasic|undefined} value
 * @return {!proto.yartu.CheckUserOnlineResponse} returns this
*/
proto.yartu.CheckUserOnlineResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.CheckUserOnlineResponse} returns this
 */
proto.yartu.CheckUserOnlineResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CheckUserOnlineResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_online = 4;
 * @return {boolean}
 */
proto.yartu.CheckUserOnlineResponse.prototype.getIsOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.CheckUserOnlineResponse} returns this
 */
proto.yartu.CheckUserOnlineResponse.prototype.setIsOnline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(module.exports, proto.yartu);

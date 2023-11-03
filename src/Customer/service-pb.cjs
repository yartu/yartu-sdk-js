// source: customer/grpc/service.proto
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
goog.exportSymbol('proto.yartu.ChangeCustomerMemberStatusRequest', null, global);
goog.exportSymbol('proto.yartu.ChangeCustomerMemberStatusResponse', null, global);
goog.exportSymbol('proto.yartu.CheckDomainAddressRequest', null, global);
goog.exportSymbol('proto.yartu.CheckDomainAddressResponse', null, global);
goog.exportSymbol('proto.yartu.Contract', null, global);
goog.exportSymbol('proto.yartu.ContractFeatureDetail', null, global);
goog.exportSymbol('proto.yartu.CustomerRealm', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerEmailAliasAddressRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerEmailAliasAddressResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerEmailAliasRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerEmailAliasResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerGroupMemberRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerGroupMemberResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerGroupRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerGroupResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerMemberRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteCustomerMemberResponse', null, global);
goog.exportSymbol('proto.yartu.GetCustomerMemberRequest', null, global);
goog.exportSymbol('proto.yartu.GetCustomerMemberResponse', null, global);
goog.exportSymbol('proto.yartu.GetCustomerRealmRequest', null, global);
goog.exportSymbol('proto.yartu.GetCustomerRealmResponse', null, global);
goog.exportSymbol('proto.yartu.GetCustomerRealmsRequest', null, global);
goog.exportSymbol('proto.yartu.GetCustomerRealmsResponse', null, global);
goog.exportSymbol('proto.yartu.GetDebtAmountRequest', null, global);
goog.exportSymbol('proto.yartu.GetDebtAmountResponse', null, global);
goog.exportSymbol('proto.yartu.GetPackageChangeDataRequest', null, global);
goog.exportSymbol('proto.yartu.GetPackageChangeDataResponse', null, global);
goog.exportSymbol('proto.yartu.GetPackageRequest', null, global);
goog.exportSymbol('proto.yartu.GetPackageResponse', null, global);
goog.exportSymbol('proto.yartu.GetPaymentSessionRequest', null, global);
goog.exportSymbol('proto.yartu.GetPaymentSessionResponse', null, global);
goog.exportSymbol('proto.yartu.GetRegisterFormRequest', null, global);
goog.exportSymbol('proto.yartu.GetRegisterFormResponse', null, global);
goog.exportSymbol('proto.yartu.Invoice', null, global);
goog.exportSymbol('proto.yartu.InvoiceTemplate', null, global);
goog.exportSymbol('proto.yartu.ListCustomerEmailAliasAddressRequest', null, global);
goog.exportSymbol('proto.yartu.ListCustomerEmailAliasAddressResponse', null, global);
goog.exportSymbol('proto.yartu.ListCustomerEmailAliasRequest', null, global);
goog.exportSymbol('proto.yartu.ListCustomerEmailAliasResponse', null, global);
goog.exportSymbol('proto.yartu.ListCustomerGroupMembersRequest', null, global);
goog.exportSymbol('proto.yartu.ListCustomerGroupMembersResponse', null, global);
goog.exportSymbol('proto.yartu.ListCustomerGroupsRequest', null, global);
goog.exportSymbol('proto.yartu.ListCustomerGroupsResponse', null, global);
goog.exportSymbol('proto.yartu.ListCustomerMemberRequest', null, global);
goog.exportSymbol('proto.yartu.ListCustomerMemberResponse', null, global);
goog.exportSymbol('proto.yartu.ListInvoiceTemplateRequest', null, global);
goog.exportSymbol('proto.yartu.ListInvoiceTemplateResponse', null, global);
goog.exportSymbol('proto.yartu.ListInvoicesRequest', null, global);
goog.exportSymbol('proto.yartu.ListInvoicesResponse', null, global);
goog.exportSymbol('proto.yartu.ListPackagesRequest', null, global);
goog.exportSymbol('proto.yartu.ListPackagesResponse', null, global);
goog.exportSymbol('proto.yartu.RegisterFormLog', null, global);
goog.exportSymbol('proto.yartu.ResetCustomerMemberPasswordRequest', null, global);
goog.exportSymbol('proto.yartu.ResetCustomerMemberPasswordResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerEmailAliasAddressRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerEmailAliasAddressResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerEmailAliasRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerEmailAliasResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerGroupMemberRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerGroupMemberResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerGroupRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerGroupResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerMemberRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertCustomerMemberResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertRegisterFormRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertRegisterFormResponse', null, global);
goog.exportSymbol('proto.yartu.Warning', null, global);
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
proto.yartu.GetCustomerRealmsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetCustomerRealmsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetCustomerRealmsRequest.displayName = 'proto.yartu.GetCustomerRealmsRequest';
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
proto.yartu.GetCustomerRealmsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetCustomerRealmsResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetCustomerRealmsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetCustomerRealmsResponse.displayName = 'proto.yartu.GetCustomerRealmsResponse';
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
proto.yartu.GetCustomerRealmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetCustomerRealmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetCustomerRealmRequest.displayName = 'proto.yartu.GetCustomerRealmRequest';
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
proto.yartu.ContractFeatureDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ContractFeatureDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ContractFeatureDetail.displayName = 'proto.yartu.ContractFeatureDetail';
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
proto.yartu.Contract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.Contract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Contract.displayName = 'proto.yartu.Contract';
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
proto.yartu.InvoiceTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.InvoiceTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.InvoiceTemplate.displayName = 'proto.yartu.InvoiceTemplate';
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
proto.yartu.Invoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.Invoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Invoice.displayName = 'proto.yartu.Invoice';
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
proto.yartu.Warning = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.Warning, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Warning.displayName = 'proto.yartu.Warning';
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
proto.yartu.CustomerRealm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.CustomerRealm.repeatedFields_, null);
};
goog.inherits(proto.yartu.CustomerRealm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CustomerRealm.displayName = 'proto.yartu.CustomerRealm';
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
proto.yartu.RegisterFormLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RegisterFormLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RegisterFormLog.displayName = 'proto.yartu.RegisterFormLog';
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
proto.yartu.GetCustomerRealmResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetCustomerRealmResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetCustomerRealmResponse.displayName = 'proto.yartu.GetCustomerRealmResponse';
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
proto.yartu.ListCustomerMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListCustomerMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerMemberRequest.displayName = 'proto.yartu.ListCustomerMemberRequest';
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
proto.yartu.ListCustomerMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListCustomerMemberResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListCustomerMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerMemberResponse.displayName = 'proto.yartu.ListCustomerMemberResponse';
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
proto.yartu.UpsertCustomerMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertCustomerMemberRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertCustomerMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerMemberRequest.displayName = 'proto.yartu.UpsertCustomerMemberRequest';
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
proto.yartu.UpsertCustomerMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerMemberResponse.displayName = 'proto.yartu.UpsertCustomerMemberResponse';
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
proto.yartu.DeleteCustomerMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DeleteCustomerMemberRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.DeleteCustomerMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerMemberRequest.displayName = 'proto.yartu.DeleteCustomerMemberRequest';
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
proto.yartu.DeleteCustomerMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerMemberResponse.displayName = 'proto.yartu.DeleteCustomerMemberResponse';
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
proto.yartu.GetCustomerMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetCustomerMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetCustomerMemberRequest.displayName = 'proto.yartu.GetCustomerMemberRequest';
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
proto.yartu.GetCustomerMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetCustomerMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetCustomerMemberResponse.displayName = 'proto.yartu.GetCustomerMemberResponse';
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
proto.yartu.ResetCustomerMemberPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ResetCustomerMemberPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ResetCustomerMemberPasswordRequest.displayName = 'proto.yartu.ResetCustomerMemberPasswordRequest';
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
proto.yartu.ResetCustomerMemberPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ResetCustomerMemberPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ResetCustomerMemberPasswordResponse.displayName = 'proto.yartu.ResetCustomerMemberPasswordResponse';
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
proto.yartu.ChangeCustomerMemberStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ChangeCustomerMemberStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.ChangeCustomerMemberStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ChangeCustomerMemberStatusRequest.displayName = 'proto.yartu.ChangeCustomerMemberStatusRequest';
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
proto.yartu.ChangeCustomerMemberStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ChangeCustomerMemberStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ChangeCustomerMemberStatusResponse.displayName = 'proto.yartu.ChangeCustomerMemberStatusResponse';
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
proto.yartu.UpsertCustomerGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerGroupRequest.displayName = 'proto.yartu.UpsertCustomerGroupRequest';
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
proto.yartu.UpsertCustomerGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerGroupResponse.displayName = 'proto.yartu.UpsertCustomerGroupResponse';
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
proto.yartu.DeleteCustomerGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerGroupRequest.displayName = 'proto.yartu.DeleteCustomerGroupRequest';
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
proto.yartu.DeleteCustomerGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerGroupResponse.displayName = 'proto.yartu.DeleteCustomerGroupResponse';
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
proto.yartu.ListCustomerGroupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListCustomerGroupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerGroupsRequest.displayName = 'proto.yartu.ListCustomerGroupsRequest';
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
proto.yartu.ListCustomerGroupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListCustomerGroupsResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListCustomerGroupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerGroupsResponse.displayName = 'proto.yartu.ListCustomerGroupsResponse';
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
proto.yartu.UpsertCustomerGroupMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertCustomerGroupMemberRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertCustomerGroupMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerGroupMemberRequest.displayName = 'proto.yartu.UpsertCustomerGroupMemberRequest';
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
proto.yartu.UpsertCustomerGroupMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerGroupMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerGroupMemberResponse.displayName = 'proto.yartu.UpsertCustomerGroupMemberResponse';
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
proto.yartu.DeleteCustomerGroupMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DeleteCustomerGroupMemberRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.DeleteCustomerGroupMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerGroupMemberRequest.displayName = 'proto.yartu.DeleteCustomerGroupMemberRequest';
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
proto.yartu.DeleteCustomerGroupMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerGroupMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerGroupMemberResponse.displayName = 'proto.yartu.DeleteCustomerGroupMemberResponse';
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
proto.yartu.ListCustomerGroupMembersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListCustomerGroupMembersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerGroupMembersRequest.displayName = 'proto.yartu.ListCustomerGroupMembersRequest';
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
proto.yartu.ListCustomerGroupMembersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListCustomerGroupMembersResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListCustomerGroupMembersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerGroupMembersResponse.displayName = 'proto.yartu.ListCustomerGroupMembersResponse';
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
proto.yartu.ListCustomerEmailAliasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListCustomerEmailAliasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerEmailAliasRequest.displayName = 'proto.yartu.ListCustomerEmailAliasRequest';
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
proto.yartu.ListCustomerEmailAliasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListCustomerEmailAliasResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListCustomerEmailAliasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerEmailAliasResponse.displayName = 'proto.yartu.ListCustomerEmailAliasResponse';
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
proto.yartu.UpsertCustomerEmailAliasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerEmailAliasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerEmailAliasRequest.displayName = 'proto.yartu.UpsertCustomerEmailAliasRequest';
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
proto.yartu.UpsertCustomerEmailAliasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerEmailAliasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerEmailAliasResponse.displayName = 'proto.yartu.UpsertCustomerEmailAliasResponse';
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
proto.yartu.DeleteCustomerEmailAliasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerEmailAliasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerEmailAliasRequest.displayName = 'proto.yartu.DeleteCustomerEmailAliasRequest';
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
proto.yartu.DeleteCustomerEmailAliasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerEmailAliasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerEmailAliasResponse.displayName = 'proto.yartu.DeleteCustomerEmailAliasResponse';
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
proto.yartu.ListCustomerEmailAliasAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListCustomerEmailAliasAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerEmailAliasAddressRequest.displayName = 'proto.yartu.ListCustomerEmailAliasAddressRequest';
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
proto.yartu.ListCustomerEmailAliasAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListCustomerEmailAliasAddressResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListCustomerEmailAliasAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListCustomerEmailAliasAddressResponse.displayName = 'proto.yartu.ListCustomerEmailAliasAddressResponse';
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
proto.yartu.DeleteCustomerEmailAliasAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerEmailAliasAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerEmailAliasAddressRequest.displayName = 'proto.yartu.DeleteCustomerEmailAliasAddressRequest';
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
proto.yartu.DeleteCustomerEmailAliasAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteCustomerEmailAliasAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteCustomerEmailAliasAddressResponse.displayName = 'proto.yartu.DeleteCustomerEmailAliasAddressResponse';
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
proto.yartu.UpsertCustomerEmailAliasAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerEmailAliasAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerEmailAliasAddressRequest.displayName = 'proto.yartu.UpsertCustomerEmailAliasAddressRequest';
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
proto.yartu.UpsertCustomerEmailAliasAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertCustomerEmailAliasAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertCustomerEmailAliasAddressResponse.displayName = 'proto.yartu.UpsertCustomerEmailAliasAddressResponse';
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
proto.yartu.CheckDomainAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CheckDomainAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CheckDomainAddressRequest.displayName = 'proto.yartu.CheckDomainAddressRequest';
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
proto.yartu.CheckDomainAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CheckDomainAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CheckDomainAddressResponse.displayName = 'proto.yartu.CheckDomainAddressResponse';
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
proto.yartu.GetRegisterFormRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetRegisterFormRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRegisterFormRequest.displayName = 'proto.yartu.GetRegisterFormRequest';
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
proto.yartu.GetRegisterFormResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetRegisterFormResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRegisterFormResponse.displayName = 'proto.yartu.GetRegisterFormResponse';
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
proto.yartu.UpsertRegisterFormRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertRegisterFormRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertRegisterFormRequest.displayName = 'proto.yartu.UpsertRegisterFormRequest';
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
proto.yartu.UpsertRegisterFormResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertRegisterFormResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertRegisterFormResponse.displayName = 'proto.yartu.UpsertRegisterFormResponse';
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
proto.yartu.GetPackageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPackageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPackageRequest.displayName = 'proto.yartu.GetPackageRequest';
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
proto.yartu.GetPackageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPackageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPackageResponse.displayName = 'proto.yartu.GetPackageResponse';
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
proto.yartu.ListPackagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListPackagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListPackagesRequest.displayName = 'proto.yartu.ListPackagesRequest';
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
proto.yartu.ListPackagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListPackagesResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListPackagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListPackagesResponse.displayName = 'proto.yartu.ListPackagesResponse';
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
proto.yartu.GetPaymentSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPaymentSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPaymentSessionRequest.displayName = 'proto.yartu.GetPaymentSessionRequest';
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
proto.yartu.GetPaymentSessionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPaymentSessionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPaymentSessionResponse.displayName = 'proto.yartu.GetPaymentSessionResponse';
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
proto.yartu.ListInvoiceTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListInvoiceTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListInvoiceTemplateRequest.displayName = 'proto.yartu.ListInvoiceTemplateRequest';
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
proto.yartu.ListInvoiceTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListInvoiceTemplateResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListInvoiceTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListInvoiceTemplateResponse.displayName = 'proto.yartu.ListInvoiceTemplateResponse';
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
proto.yartu.GetDebtAmountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetDebtAmountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetDebtAmountRequest.displayName = 'proto.yartu.GetDebtAmountRequest';
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
proto.yartu.GetDebtAmountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetDebtAmountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetDebtAmountResponse.displayName = 'proto.yartu.GetDebtAmountResponse';
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
proto.yartu.GetPackageChangeDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPackageChangeDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPackageChangeDataRequest.displayName = 'proto.yartu.GetPackageChangeDataRequest';
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
proto.yartu.GetPackageChangeDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPackageChangeDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPackageChangeDataResponse.displayName = 'proto.yartu.GetPackageChangeDataResponse';
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
proto.yartu.ListInvoicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListInvoicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListInvoicesRequest.displayName = 'proto.yartu.ListInvoicesRequest';
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
proto.yartu.ListInvoicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListInvoicesResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListInvoicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListInvoicesResponse.displayName = 'proto.yartu.ListInvoicesResponse';
}



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
proto.yartu.GetCustomerRealmsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetCustomerRealmsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetCustomerRealmsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GetCustomerRealmsRequest}
 */
proto.yartu.GetCustomerRealmsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetCustomerRealmsRequest;
  return proto.yartu.GetCustomerRealmsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetCustomerRealmsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetCustomerRealmsRequest}
 */
proto.yartu.GetCustomerRealmsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GetCustomerRealmsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetCustomerRealmsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetCustomerRealmsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetCustomerRealmsResponse.repeatedFields_ = [2];



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
proto.yartu.GetCustomerRealmsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetCustomerRealmsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetCustomerRealmsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    realmList: jspb.Message.toObjectList(msg.getRealmList(),
    common_grpc_definitions_pb.Realm.toObject, includeInstance),
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
 * @return {!proto.yartu.GetCustomerRealmsResponse}
 */
proto.yartu.GetCustomerRealmsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetCustomerRealmsResponse;
  return proto.yartu.GetCustomerRealmsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetCustomerRealmsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetCustomerRealmsResponse}
 */
proto.yartu.GetCustomerRealmsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Realm;
      reader.readMessage(value,common_grpc_definitions_pb.Realm.deserializeBinaryFromReader);
      msg.addRealm(value);
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
proto.yartu.GetCustomerRealmsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetCustomerRealmsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetCustomerRealmsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRealmList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_grpc_definitions_pb.Realm.serializeBinaryToWriter
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
proto.yartu.GetCustomerRealmsResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetCustomerRealmsResponse} returns this
 */
proto.yartu.GetCustomerRealmsResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Realm realm = 2;
 * @return {!Array<!proto.Realm>}
 */
proto.yartu.GetCustomerRealmsResponse.prototype.getRealmList = function() {
  return /** @type{!Array<!proto.Realm>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Realm, 2));
};


/**
 * @param {!Array<!proto.Realm>} value
 * @return {!proto.yartu.GetCustomerRealmsResponse} returns this
*/
proto.yartu.GetCustomerRealmsResponse.prototype.setRealmList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Realm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Realm}
 */
proto.yartu.GetCustomerRealmsResponse.prototype.addRealm = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Realm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetCustomerRealmsResponse} returns this
 */
proto.yartu.GetCustomerRealmsResponse.prototype.clearRealmList = function() {
  return this.setRealmList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetCustomerRealmsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetCustomerRealmsResponse} returns this
 */
proto.yartu.GetCustomerRealmsResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetCustomerRealmsResponse} returns this
 */
proto.yartu.GetCustomerRealmsResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetCustomerRealmsResponse.prototype.hasMessage = function() {
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
proto.yartu.GetCustomerRealmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetCustomerRealmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetCustomerRealmRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    realmId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yartu.GetCustomerRealmRequest}
 */
proto.yartu.GetCustomerRealmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetCustomerRealmRequest;
  return proto.yartu.GetCustomerRealmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetCustomerRealmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetCustomerRealmRequest}
 */
proto.yartu.GetCustomerRealmRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
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
proto.yartu.GetCustomerRealmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetCustomerRealmRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetCustomerRealmRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.GetCustomerRealmRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetCustomerRealmRequest} returns this
 */
proto.yartu.GetCustomerRealmRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 realm_id = 2;
 * @return {number}
 */
proto.yartu.GetCustomerRealmRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetCustomerRealmRequest} returns this
 */
proto.yartu.GetCustomerRealmRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.yartu.ContractFeatureDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ContractFeatureDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ContractFeatureDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ContractFeatureDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    period: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalQuota: jspb.Message.getFieldWithDefault(msg, 2, 0),
    packageRevision: jspb.Message.getFieldWithDefault(msg, 3, 0),
    packagePrice: jspb.Message.getFieldWithDefault(msg, 4, 0),
    perUserDriveQuota: jspb.Message.getFieldWithDefault(msg, 5, 0),
    perUserEmailQuota: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxUserCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    maxGroupCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    maxGroupMemberCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    maxEmailAliasCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    maxEmailAliasAddressCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    maxConferenceAttendees: jspb.Message.getFieldWithDefault(msg, 12, 0),
    maxProjectCount: jspb.Message.getFieldWithDefault(msg, 13, 0),
    maxProjectBoardCount: jspb.Message.getFieldWithDefault(msg, 14, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 15, ""),
    cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0)
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
 * @return {!proto.yartu.ContractFeatureDetail}
 */
proto.yartu.ContractFeatureDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ContractFeatureDetail;
  return proto.yartu.ContractFeatureDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ContractFeatureDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ContractFeatureDetail}
 */
proto.yartu.ContractFeatureDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriod(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalQuota(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPackageRevision(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPackagePrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPerUserDriveQuota(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPerUserEmailQuota(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxUserCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxGroupCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxGroupMemberCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxEmailAliasCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxEmailAliasAddressCount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxConferenceAttendees(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxProjectCount(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxProjectBoardCount(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCost(value);
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
proto.yartu.ContractFeatureDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ContractFeatureDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ContractFeatureDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ContractFeatureDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeFloat(
      16,
      f
    );
  }
};


/**
 * optional string period = 1;
 * @return {string}
 */
proto.yartu.ContractFeatureDetail.prototype.getPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setPeriod = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearPeriod = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 total_quota = 2;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getTotalQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setTotalQuota = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearTotalQuota = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasTotalQuota = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 package_revision = 3;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getPackageRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setPackageRevision = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearPackageRevision = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasPackageRevision = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 package_price = 4;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getPackagePrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setPackagePrice = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearPackagePrice = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasPackagePrice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 per_user_drive_quota = 5;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getPerUserDriveQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setPerUserDriveQuota = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearPerUserDriveQuota = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasPerUserDriveQuota = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 per_user_email_quota = 6;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getPerUserEmailQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setPerUserEmailQuota = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearPerUserEmailQuota = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasPerUserEmailQuota = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 max_user_count = 7;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxUserCount = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxUserCount = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxUserCount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 max_group_count = 8;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxGroupCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxGroupCount = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxGroupCount = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxGroupCount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 max_group_member_count = 9;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxGroupMemberCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxGroupMemberCount = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxGroupMemberCount = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxGroupMemberCount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 max_email_alias_count = 10;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxEmailAliasCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxEmailAliasCount = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxEmailAliasCount = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxEmailAliasCount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 max_email_alias_address_count = 11;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxEmailAliasAddressCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxEmailAliasAddressCount = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxEmailAliasAddressCount = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxEmailAliasAddressCount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 max_conference_attendees = 12;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxConferenceAttendees = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxConferenceAttendees = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxConferenceAttendees = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxConferenceAttendees = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int64 max_project_count = 13;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxProjectCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxProjectCount = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxProjectCount = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxProjectCount = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 max_project_board_count = 14;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getMaxProjectBoardCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setMaxProjectBoardCount = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearMaxProjectBoardCount = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasMaxProjectBoardCount = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string currency = 15;
 * @return {string}
 */
proto.yartu.ContractFeatureDetail.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setCurrency = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearCurrency = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional float cost = 16;
 * @return {number}
 */
proto.yartu.ContractFeatureDetail.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.setCost = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContractFeatureDetail} returns this
 */
proto.yartu.ContractFeatureDetail.prototype.clearCost = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContractFeatureDetail.prototype.hasCost = function() {
  return jspb.Message.getField(this, 16) != null;
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
proto.yartu.Contract.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Contract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Contract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Contract.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    packageDetail: (f = msg.getPackageDetail()) && common_grpc_definitions_pb.Package.toObject(includeInstance, f),
    realm: (f = msg.getRealm()) && common_grpc_definitions_pb.Realm.toObject(includeInstance, f),
    period: jspb.Message.getFieldWithDefault(msg, 6, ""),
    startedAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
    renewalDate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    finishedAt: jspb.Message.getFieldWithDefault(msg, 9, ""),
    maxUserCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    detail: (f = msg.getDetail()) && proto.yartu.ContractFeatureDetail.toObject(includeInstance, f),
    availableUsersCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    totalQuota: jspb.Message.getFieldWithDefault(msg, 13, 0),
    totalQuotaUsage: jspb.Message.getFieldWithDefault(msg, 14, 0),
    availableQuota: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.yartu.Contract}
 */
proto.yartu.Contract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Contract;
  return proto.yartu.Contract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Contract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Contract}
 */
proto.yartu.Contract.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = new common_grpc_definitions_pb.Package;
      reader.readMessage(value,common_grpc_definitions_pb.Package.deserializeBinaryFromReader);
      msg.setPackageDetail(value);
      break;
    case 5:
      var value = new common_grpc_definitions_pb.Realm;
      reader.readMessage(value,common_grpc_definitions_pb.Realm.deserializeBinaryFromReader);
      msg.setRealm(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriod(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRenewalDate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinishedAt(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxUserCount(value);
      break;
    case 11:
      var value = new proto.yartu.ContractFeatureDetail;
      reader.readMessage(value,proto.yartu.ContractFeatureDetail.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvailableUsersCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalQuota(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalQuotaUsage(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvailableQuota(value);
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
proto.yartu.Contract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Contract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Contract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Contract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
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
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getPackageDetail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_grpc_definitions_pb.Package.serializeBinaryToWriter
    );
  }
  f = message.getRealm();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_grpc_definitions_pb.Realm.serializeBinaryToWriter
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
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yartu.ContractFeatureDetail.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt64(
      15,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.Contract.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_active = 2;
 * @return {boolean}
 */
proto.yartu.Contract.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setIsActive = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearIsActive = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasIsActive = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional User user = 3;
 * @return {?proto.User}
 */
proto.yartu.Contract.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.Contract} returns this
*/
proto.yartu.Contract.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Package package_detail = 4;
 * @return {?proto.Package}
 */
proto.yartu.Contract.prototype.getPackageDetail = function() {
  return /** @type{?proto.Package} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Package, 4));
};


/**
 * @param {?proto.Package|undefined} value
 * @return {!proto.yartu.Contract} returns this
*/
proto.yartu.Contract.prototype.setPackageDetail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearPackageDetail = function() {
  return this.setPackageDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasPackageDetail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Realm realm = 5;
 * @return {?proto.Realm}
 */
proto.yartu.Contract.prototype.getRealm = function() {
  return /** @type{?proto.Realm} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Realm, 5));
};


/**
 * @param {?proto.Realm|undefined} value
 * @return {!proto.yartu.Contract} returns this
*/
proto.yartu.Contract.prototype.setRealm = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearRealm = function() {
  return this.setRealm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasRealm = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string period = 6;
 * @return {string}
 */
proto.yartu.Contract.prototype.getPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setPeriod = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearPeriod = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string started_at = 7;
 * @return {string}
 */
proto.yartu.Contract.prototype.getStartedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setStartedAt = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearStartedAt = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string renewal_date = 8;
 * @return {string}
 */
proto.yartu.Contract.prototype.getRenewalDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setRenewalDate = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearRenewalDate = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasRenewalDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string finished_at = 9;
 * @return {string}
 */
proto.yartu.Contract.prototype.getFinishedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setFinishedAt = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearFinishedAt = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasFinishedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 max_user_count = 10;
 * @return {number}
 */
proto.yartu.Contract.prototype.getMaxUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setMaxUserCount = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearMaxUserCount = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasMaxUserCount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ContractFeatureDetail detail = 11;
 * @return {?proto.yartu.ContractFeatureDetail}
 */
proto.yartu.Contract.prototype.getDetail = function() {
  return /** @type{?proto.yartu.ContractFeatureDetail} */ (
    jspb.Message.getWrapperField(this, proto.yartu.ContractFeatureDetail, 11));
};


/**
 * @param {?proto.yartu.ContractFeatureDetail|undefined} value
 * @return {!proto.yartu.Contract} returns this
*/
proto.yartu.Contract.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 available_users_count = 12;
 * @return {number}
 */
proto.yartu.Contract.prototype.getAvailableUsersCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setAvailableUsersCount = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearAvailableUsersCount = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasAvailableUsersCount = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int64 total_quota = 13;
 * @return {number}
 */
proto.yartu.Contract.prototype.getTotalQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setTotalQuota = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearTotalQuota = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasTotalQuota = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 total_quota_usage = 14;
 * @return {number}
 */
proto.yartu.Contract.prototype.getTotalQuotaUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setTotalQuotaUsage = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearTotalQuotaUsage = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasTotalQuotaUsage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int64 available_quota = 15;
 * @return {number}
 */
proto.yartu.Contract.prototype.getAvailableQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.setAvailableQuota = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contract} returns this
 */
proto.yartu.Contract.prototype.clearAvailableQuota = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contract.prototype.hasAvailableQuota = function() {
  return jspb.Message.getField(this, 15) != null;
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
proto.yartu.InvoiceTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.InvoiceTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.InvoiceTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.InvoiceTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    address: jspb.Message.getFieldWithDefault(msg, 6, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    taxNo: jspb.Message.getFieldWithDefault(msg, 8, ""),
    taxLocation: jspb.Message.getFieldWithDefault(msg, 9, ""),
    type: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.yartu.InvoiceTemplate}
 */
proto.yartu.InvoiceTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.InvoiceTemplate;
  return proto.yartu.InvoiceTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.InvoiceTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.InvoiceTemplate}
 */
proto.yartu.InvoiceTemplate.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxNo(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxLocation(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
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
proto.yartu.InvoiceTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.InvoiceTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.InvoiceTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.InvoiceTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSurname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTaxNo();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTaxLocation();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.InvoiceTemplate.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string surname = 4;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setSurname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string address = 6;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string phone = 7;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string tax_no = 8;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getTaxNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setTaxNo = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string tax_location = 9;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getTaxLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setTaxLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string type = 10;
 * @return {string}
 */
proto.yartu.InvoiceTemplate.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.InvoiceTemplate} returns this
 */
proto.yartu.InvoiceTemplate.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.yartu.Invoice.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Invoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Invoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Invoice.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    realm: (f = msg.getRealm()) && common_grpc_definitions_pb.Realm.toObject(includeInstance, f),
    contract: (f = msg.getContract()) && proto.yartu.Contract.toObject(includeInstance, f),
    startDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 6, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    packageDetail: jspb.Message.getFieldWithDefault(msg, 9, ""),
    extraDetail: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.yartu.Invoice}
 */
proto.yartu.Invoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Invoice;
  return proto.yartu.Invoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Invoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Invoice}
 */
proto.yartu.Invoice.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Realm;
      reader.readMessage(value,common_grpc_definitions_pb.Realm.deserializeBinaryFromReader);
      msg.setRealm(value);
      break;
    case 3:
      var value = new proto.yartu.Contract;
      reader.readMessage(value,proto.yartu.Contract.deserializeBinaryFromReader);
      msg.setContract(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackageDetail(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtraDetail(value);
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
proto.yartu.Invoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Invoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Invoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Invoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRealm();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.Realm.serializeBinaryToWriter
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.Contract.serializeBinaryToWriter
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
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getPackageDetail();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getExtraDetail();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.Invoice.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Realm realm = 2;
 * @return {?proto.Realm}
 */
proto.yartu.Invoice.prototype.getRealm = function() {
  return /** @type{?proto.Realm} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Realm, 2));
};


/**
 * @param {?proto.Realm|undefined} value
 * @return {!proto.yartu.Invoice} returns this
*/
proto.yartu.Invoice.prototype.setRealm = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.clearRealm = function() {
  return this.setRealm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Invoice.prototype.hasRealm = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Contract contract = 3;
 * @return {?proto.yartu.Contract}
 */
proto.yartu.Invoice.prototype.getContract = function() {
  return /** @type{?proto.yartu.Contract} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Contract, 3));
};


/**
 * @param {?proto.yartu.Contract|undefined} value
 * @return {!proto.yartu.Invoice} returns this
*/
proto.yartu.Invoice.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Invoice.prototype.hasContract = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string start_date = 4;
 * @return {string}
 */
proto.yartu.Invoice.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string end_date = 5;
 * @return {string}
 */
proto.yartu.Invoice.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string currency = 6;
 * @return {string}
 */
proto.yartu.Invoice.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float price = 7;
 * @return {number}
 */
proto.yartu.Invoice.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string package_detail = 9;
 * @return {string}
 */
proto.yartu.Invoice.prototype.getPackageDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.setPackageDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string extra_detail = 10;
 * @return {string}
 */
proto.yartu.Invoice.prototype.getExtraDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Invoice} returns this
 */
proto.yartu.Invoice.prototype.setExtraDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.yartu.Warning.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Warning.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Warning} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Warning.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    delayedDay: jspb.Message.getFieldWithDefault(msg, 3, 0),
    leftDay: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.yartu.Warning}
 */
proto.yartu.Warning.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Warning;
  return proto.yartu.Warning.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Warning} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Warning}
 */
proto.yartu.Warning.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelayedDay(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeftDay(value);
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
proto.yartu.Warning.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Warning.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Warning} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Warning.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.yartu.Warning.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Warning} returns this
 */
proto.yartu.Warning.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.yartu.Warning.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Warning} returns this
 */
proto.yartu.Warning.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 delayed_day = 3;
 * @return {number}
 */
proto.yartu.Warning.prototype.getDelayedDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Warning} returns this
 */
proto.yartu.Warning.prototype.setDelayedDay = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Warning} returns this
 */
proto.yartu.Warning.prototype.clearDelayedDay = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Warning.prototype.hasDelayedDay = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 left_day = 4;
 * @return {number}
 */
proto.yartu.Warning.prototype.getLeftDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Warning} returns this
 */
proto.yartu.Warning.prototype.setLeftDay = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Warning} returns this
 */
proto.yartu.Warning.prototype.clearLeftDay = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Warning.prototype.hasLeftDay = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.CustomerRealm.repeatedFields_ = [8];



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
proto.yartu.CustomerRealm.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CustomerRealm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CustomerRealm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CustomerRealm.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: jspb.Message.getFieldWithDefault(msg, 1, ""),
    packageDetail: (f = msg.getPackageDetail()) && common_grpc_definitions_pb.Package.toObject(includeInstance, f),
    contract: (f = msg.getContract()) && proto.yartu.Contract.toObject(includeInstance, f),
    isPaid: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    realm: (f = msg.getRealm()) && common_grpc_definitions_pb.Realm.toObject(includeInstance, f),
    userCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxUserCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    warningList: jspb.Message.toObjectList(msg.getWarningList(),
    proto.yartu.Warning.toObject, includeInstance)
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
 * @return {!proto.yartu.CustomerRealm}
 */
proto.yartu.CustomerRealm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CustomerRealm;
  return proto.yartu.CustomerRealm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CustomerRealm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CustomerRealm}
 */
proto.yartu.CustomerRealm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 2:
      var value = new common_grpc_definitions_pb.Package;
      reader.readMessage(value,common_grpc_definitions_pb.Package.deserializeBinaryFromReader);
      msg.setPackageDetail(value);
      break;
    case 3:
      var value = new proto.yartu.Contract;
      reader.readMessage(value,proto.yartu.Contract.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaid(value);
      break;
    case 5:
      var value = new common_grpc_definitions_pb.Realm;
      reader.readMessage(value,common_grpc_definitions_pb.Realm.deserializeBinaryFromReader);
      msg.setRealm(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserCount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxUserCount(value);
      break;
    case 8:
      var value = new proto.yartu.Warning;
      reader.readMessage(value,proto.yartu.Warning.deserializeBinaryFromReader);
      msg.addWarning(value);
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
proto.yartu.CustomerRealm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CustomerRealm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CustomerRealm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CustomerRealm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPackageDetail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.Package.serializeBinaryToWriter
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.Contract.serializeBinaryToWriter
    );
  }
  f = message.getIsPaid();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRealm();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_grpc_definitions_pb.Realm.serializeBinaryToWriter
    );
  }
  f = message.getUserCount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMaxUserCount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getWarningList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yartu.Warning.serializeBinaryToWriter
    );
  }
};


/**
 * optional string role = 1;
 * @return {string}
 */
proto.yartu.CustomerRealm.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Package package_detail = 2;
 * @return {?proto.Package}
 */
proto.yartu.CustomerRealm.prototype.getPackageDetail = function() {
  return /** @type{?proto.Package} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Package, 2));
};


/**
 * @param {?proto.Package|undefined} value
 * @return {!proto.yartu.CustomerRealm} returns this
*/
proto.yartu.CustomerRealm.prototype.setPackageDetail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.clearPackageDetail = function() {
  return this.setPackageDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CustomerRealm.prototype.hasPackageDetail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Contract contract = 3;
 * @return {?proto.yartu.Contract}
 */
proto.yartu.CustomerRealm.prototype.getContract = function() {
  return /** @type{?proto.yartu.Contract} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Contract, 3));
};


/**
 * @param {?proto.yartu.Contract|undefined} value
 * @return {!proto.yartu.CustomerRealm} returns this
*/
proto.yartu.CustomerRealm.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CustomerRealm.prototype.hasContract = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_paid = 4;
 * @return {boolean}
 */
proto.yartu.CustomerRealm.prototype.getIsPaid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.setIsPaid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Realm realm = 5;
 * @return {?proto.Realm}
 */
proto.yartu.CustomerRealm.prototype.getRealm = function() {
  return /** @type{?proto.Realm} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Realm, 5));
};


/**
 * @param {?proto.Realm|undefined} value
 * @return {!proto.yartu.CustomerRealm} returns this
*/
proto.yartu.CustomerRealm.prototype.setRealm = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.clearRealm = function() {
  return this.setRealm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CustomerRealm.prototype.hasRealm = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 user_count = 6;
 * @return {number}
 */
proto.yartu.CustomerRealm.prototype.getUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.setUserCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 max_user_count = 7;
 * @return {number}
 */
proto.yartu.CustomerRealm.prototype.getMaxUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.setMaxUserCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated Warning warning = 8;
 * @return {!Array<!proto.yartu.Warning>}
 */
proto.yartu.CustomerRealm.prototype.getWarningList = function() {
  return /** @type{!Array<!proto.yartu.Warning>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Warning, 8));
};


/**
 * @param {!Array<!proto.yartu.Warning>} value
 * @return {!proto.yartu.CustomerRealm} returns this
*/
proto.yartu.CustomerRealm.prototype.setWarningList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yartu.Warning=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Warning}
 */
proto.yartu.CustomerRealm.prototype.addWarning = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yartu.Warning, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.CustomerRealm} returns this
 */
proto.yartu.CustomerRealm.prototype.clearWarningList = function() {
  return this.setWarningList([]);
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
proto.yartu.RegisterFormLog.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RegisterFormLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RegisterFormLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RegisterFormLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tabId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    packageDetail: (f = msg.getPackageDetail()) && common_grpc_definitions_pb.Package.toObject(includeInstance, f),
    packagePeriod: jspb.Message.getFieldWithDefault(msg, 4, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    username: jspb.Message.getFieldWithDefault(msg, 9, ""),
    currentEmail: jspb.Message.getFieldWithDefault(msg, 10, ""),
    userCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    taxType: jspb.Message.getFieldWithDefault(msg, 12, ""),
    taxName: jspb.Message.getFieldWithDefault(msg, 13, ""),
    taxSurname: jspb.Message.getFieldWithDefault(msg, 14, ""),
    taxPhone: jspb.Message.getFieldWithDefault(msg, 15, ""),
    taxAddress: jspb.Message.getFieldWithDefault(msg, 16, ""),
    taxLocation: jspb.Message.getFieldWithDefault(msg, 17, ""),
    taxNo: jspb.Message.getFieldWithDefault(msg, 18, ""),
    taxEmail: jspb.Message.getFieldWithDefault(msg, 19, ""),
    lastStep: jspb.Message.getFieldWithDefault(msg, 20, 0),
    actionDateAts: (f = msg.getActionDateAts()) && common_grpc_definitions_pb.JSON.toObject(includeInstance, f),
    taxAddressTitle: jspb.Message.getFieldWithDefault(msg, 22, "")
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
 * @return {!proto.yartu.RegisterFormLog}
 */
proto.yartu.RegisterFormLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RegisterFormLog;
  return proto.yartu.RegisterFormLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RegisterFormLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RegisterFormLog}
 */
proto.yartu.RegisterFormLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabId(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.Package;
      reader.readMessage(value,common_grpc_definitions_pb.Package.deserializeBinaryFromReader);
      msg.setPackageDetail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagePeriod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentEmail(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserCount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxType(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxName(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxSurname(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxPhone(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxAddress(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxLocation(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxNo(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxEmail(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastStep(value);
      break;
    case 21:
      var value = new common_grpc_definitions_pb.JSON;
      reader.readMessage(value,common_grpc_definitions_pb.JSON.deserializeBinaryFromReader);
      msg.setActionDateAts(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxAddressTitle(value);
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
proto.yartu.RegisterFormLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RegisterFormLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RegisterFormLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RegisterFormLog.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPackageDetail();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.Package.serializeBinaryToWriter
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
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getActionDateAts();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      common_grpc_definitions_pb.JSON.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setDomain = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearDomain = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasDomain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tab_id = 2;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTabId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTabId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTabId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTabId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Package package_detail = 3;
 * @return {?proto.Package}
 */
proto.yartu.RegisterFormLog.prototype.getPackageDetail = function() {
  return /** @type{?proto.Package} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Package, 3));
};


/**
 * @param {?proto.Package|undefined} value
 * @return {!proto.yartu.RegisterFormLog} returns this
*/
proto.yartu.RegisterFormLog.prototype.setPackageDetail = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearPackageDetail = function() {
  return this.setPackageDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasPackageDetail = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string package_period = 4;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getPackagePeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setPackagePeriod = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearPackagePeriod = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasPackagePeriod = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string currency = 5;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setCurrency = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearCurrency = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string surname = 7;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setSurname = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearSurname = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasSurname = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setPhone = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearPhone = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string username = 9;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string current_email = 10;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getCurrentEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setCurrentEmail = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearCurrentEmail = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasCurrentEmail = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 user_count = 11;
 * @return {number}
 */
proto.yartu.RegisterFormLog.prototype.getUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setUserCount = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearUserCount = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasUserCount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string tax_type = 12;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxType = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxType = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxType = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string tax_name = 13;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxName = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxName = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxName = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string tax_surname = 14;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxSurname = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxSurname = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxSurname = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string tax_phone = 15;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxPhone = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxPhone = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxPhone = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string tax_address = 16;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxAddress = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxAddress = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxAddress = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string tax_location = 17;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxLocation = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxLocation = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxLocation = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string tax_no = 18;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxNo = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxNo = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxNo = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string tax_email = 19;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxEmail = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxEmail = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxEmail = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int64 last_step = 20;
 * @return {number}
 */
proto.yartu.RegisterFormLog.prototype.getLastStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setLastStep = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearLastStep = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasLastStep = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional JSON action_date_ats = 21;
 * @return {?proto.JSON}
 */
proto.yartu.RegisterFormLog.prototype.getActionDateAts = function() {
  return /** @type{?proto.JSON} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.JSON, 21));
};


/**
 * @param {?proto.JSON|undefined} value
 * @return {!proto.yartu.RegisterFormLog} returns this
*/
proto.yartu.RegisterFormLog.prototype.setActionDateAts = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearActionDateAts = function() {
  return this.setActionDateAts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasActionDateAts = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string tax_address_title = 22;
 * @return {string}
 */
proto.yartu.RegisterFormLog.prototype.getTaxAddressTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.setTaxAddressTitle = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RegisterFormLog} returns this
 */
proto.yartu.RegisterFormLog.prototype.clearTaxAddressTitle = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RegisterFormLog.prototype.hasTaxAddressTitle = function() {
  return jspb.Message.getField(this, 22) != null;
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
proto.yartu.GetCustomerRealmResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetCustomerRealmResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetCustomerRealmResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customerRealm: (f = msg.getCustomerRealm()) && proto.yartu.CustomerRealm.toObject(includeInstance, f),
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
 * @return {!proto.yartu.GetCustomerRealmResponse}
 */
proto.yartu.GetCustomerRealmResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetCustomerRealmResponse;
  return proto.yartu.GetCustomerRealmResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetCustomerRealmResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetCustomerRealmResponse}
 */
proto.yartu.GetCustomerRealmResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.CustomerRealm;
      reader.readMessage(value,proto.yartu.CustomerRealm.deserializeBinaryFromReader);
      msg.setCustomerRealm(value);
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
proto.yartu.GetCustomerRealmResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetCustomerRealmResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetCustomerRealmResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerRealmResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCustomerRealm();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.CustomerRealm.serializeBinaryToWriter
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
proto.yartu.GetCustomerRealmResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetCustomerRealmResponse} returns this
 */
proto.yartu.GetCustomerRealmResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CustomerRealm customer_realm = 2;
 * @return {?proto.yartu.CustomerRealm}
 */
proto.yartu.GetCustomerRealmResponse.prototype.getCustomerRealm = function() {
  return /** @type{?proto.yartu.CustomerRealm} */ (
    jspb.Message.getWrapperField(this, proto.yartu.CustomerRealm, 2));
};


/**
 * @param {?proto.yartu.CustomerRealm|undefined} value
 * @return {!proto.yartu.GetCustomerRealmResponse} returns this
*/
proto.yartu.GetCustomerRealmResponse.prototype.setCustomerRealm = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetCustomerRealmResponse} returns this
 */
proto.yartu.GetCustomerRealmResponse.prototype.clearCustomerRealm = function() {
  return this.setCustomerRealm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetCustomerRealmResponse.prototype.hasCustomerRealm = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetCustomerRealmResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetCustomerRealmResponse} returns this
 */
proto.yartu.GetCustomerRealmResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetCustomerRealmResponse} returns this
 */
proto.yartu.GetCustomerRealmResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetCustomerRealmResponse.prototype.hasMessage = function() {
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
proto.yartu.ListCustomerMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.yartu.ListCustomerMemberRequest}
 */
proto.yartu.ListCustomerMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerMemberRequest;
  return proto.yartu.ListCustomerMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerMemberRequest}
 */
proto.yartu.ListCustomerMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
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
proto.yartu.ListCustomerMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.ListCustomerMemberRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerMemberRequest} returns this
 */
proto.yartu.ListCustomerMemberRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListCustomerMemberResponse.repeatedFields_ = [2];



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
proto.yartu.ListCustomerMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userList: jspb.Message.toObjectList(msg.getUserList(),
    common_grpc_definitions_pb.User.toObject, includeInstance),
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
 * @return {!proto.yartu.ListCustomerMemberResponse}
 */
proto.yartu.ListCustomerMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerMemberResponse;
  return proto.yartu.ListCustomerMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerMemberResponse}
 */
proto.yartu.ListCustomerMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.addUser(value);
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
proto.yartu.ListCustomerMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
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
proto.yartu.ListCustomerMemberResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerMemberResponse} returns this
 */
proto.yartu.ListCustomerMemberResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated User user = 2;
 * @return {!Array<!proto.User>}
 */
proto.yartu.ListCustomerMemberResponse.prototype.getUserList = function() {
  return /** @type{!Array<!proto.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.User, 2));
};


/**
 * @param {!Array<!proto.User>} value
 * @return {!proto.yartu.ListCustomerMemberResponse} returns this
*/
proto.yartu.ListCustomerMemberResponse.prototype.setUserList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.User}
 */
proto.yartu.ListCustomerMemberResponse.prototype.addUser = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListCustomerMemberResponse} returns this
 */
proto.yartu.ListCustomerMemberResponse.prototype.clearUserList = function() {
  return this.setUserList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListCustomerMemberResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListCustomerMemberResponse} returns this
 */
proto.yartu.ListCustomerMemberResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListCustomerMemberResponse} returns this
 */
proto.yartu.ListCustomerMemberResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerMemberResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertCustomerMemberRequest.repeatedFields_ = [7];



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
proto.yartu.UpsertCustomerMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    password: jspb.Message.getFieldWithDefault(msg, 6, ""),
    serviceList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isPrivate: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    driveQuota: jspb.Message.getFieldWithDefault(msg, 10, 0),
    emailQuota: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.yartu.UpsertCustomerMemberRequest}
 */
proto.yartu.UpsertCustomerMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerMemberRequest;
  return proto.yartu.UpsertCustomerMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerMemberRequest}
 */
proto.yartu.UpsertCustomerMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addService(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPrivate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDriveQuota(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEmailQuota(value);
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
proto.yartu.UpsertCustomerMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSurname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
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
  f = message.getServiceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string surname = 4;
 * @return {string}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setSurname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string service = 7;
 * @return {!Array<string>}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getServiceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setServiceList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.addService = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.clearServiceList = function() {
  return this.setServiceList([]);
};


/**
 * optional bool is_active = 8;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.clearIsActive = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.hasIsActive = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool is_private = 9;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getIsPrivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setIsPrivate = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.clearIsPrivate = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.hasIsPrivate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 drive_quota = 10;
 * @return {number}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getDriveQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setDriveQuota = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.clearDriveQuota = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.hasDriveQuota = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 email_quota = 11;
 * @return {number}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.getEmailQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.setEmailQuota = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerMemberRequest} returns this
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.clearEmailQuota = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberRequest.prototype.hasEmailQuota = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.yartu.UpsertCustomerMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerMemberResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertCustomerMemberResponse}
 */
proto.yartu.UpsertCustomerMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerMemberResponse;
  return proto.yartu.UpsertCustomerMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerMemberResponse}
 */
proto.yartu.UpsertCustomerMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertCustomerMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerMemberResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertCustomerMemberResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerMemberResponse} returns this
 */
proto.yartu.UpsertCustomerMemberResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertCustomerMemberResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerMemberResponse} returns this
 */
proto.yartu.UpsertCustomerMemberResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerMemberResponse} returns this
 */
proto.yartu.UpsertCustomerMemberResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerMemberResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DeleteCustomerMemberRequest.repeatedFields_ = [2];



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
proto.yartu.DeleteCustomerMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    idList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yartu.DeleteCustomerMemberRequest}
 */
proto.yartu.DeleteCustomerMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerMemberRequest;
  return proto.yartu.DeleteCustomerMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerMemberRequest}
 */
proto.yartu.DeleteCustomerMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addId(values[i]);
      }
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
proto.yartu.DeleteCustomerMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIdList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.DeleteCustomerMemberRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerMemberRequest} returns this
 */
proto.yartu.DeleteCustomerMemberRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int64 id = 2;
 * @return {!Array<number>}
 */
proto.yartu.DeleteCustomerMemberRequest.prototype.getIdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.DeleteCustomerMemberRequest} returns this
 */
proto.yartu.DeleteCustomerMemberRequest.prototype.setIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.DeleteCustomerMemberRequest} returns this
 */
proto.yartu.DeleteCustomerMemberRequest.prototype.addId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DeleteCustomerMemberRequest} returns this
 */
proto.yartu.DeleteCustomerMemberRequest.prototype.clearIdList = function() {
  return this.setIdList([]);
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
proto.yartu.DeleteCustomerMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerMemberResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteCustomerMemberResponse}
 */
proto.yartu.DeleteCustomerMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerMemberResponse;
  return proto.yartu.DeleteCustomerMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerMemberResponse}
 */
proto.yartu.DeleteCustomerMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteCustomerMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerMemberResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteCustomerMemberResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerMemberResponse} returns this
 */
proto.yartu.DeleteCustomerMemberResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteCustomerMemberResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteCustomerMemberResponse} returns this
 */
proto.yartu.DeleteCustomerMemberResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteCustomerMemberResponse} returns this
 */
proto.yartu.DeleteCustomerMemberResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteCustomerMemberResponse.prototype.hasMessage = function() {
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
proto.yartu.GetCustomerMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetCustomerMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetCustomerMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yartu.GetCustomerMemberRequest}
 */
proto.yartu.GetCustomerMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetCustomerMemberRequest;
  return proto.yartu.GetCustomerMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetCustomerMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetCustomerMemberRequest}
 */
proto.yartu.GetCustomerMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
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
proto.yartu.GetCustomerMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetCustomerMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetCustomerMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.GetCustomerMemberRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetCustomerMemberRequest} returns this
 */
proto.yartu.GetCustomerMemberRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.yartu.GetCustomerMemberRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetCustomerMemberRequest} returns this
 */
proto.yartu.GetCustomerMemberRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.yartu.GetCustomerMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetCustomerMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetCustomerMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
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
 * @return {!proto.yartu.GetCustomerMemberResponse}
 */
proto.yartu.GetCustomerMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetCustomerMemberResponse;
  return proto.yartu.GetCustomerMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetCustomerMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetCustomerMemberResponse}
 */
proto.yartu.GetCustomerMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.yartu.GetCustomerMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetCustomerMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetCustomerMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetCustomerMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
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
proto.yartu.GetCustomerMemberResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetCustomerMemberResponse} returns this
 */
proto.yartu.GetCustomerMemberResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional User user = 2;
 * @return {?proto.User}
 */
proto.yartu.GetCustomerMemberResponse.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 2));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.GetCustomerMemberResponse} returns this
*/
proto.yartu.GetCustomerMemberResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetCustomerMemberResponse} returns this
 */
proto.yartu.GetCustomerMemberResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetCustomerMemberResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetCustomerMemberResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetCustomerMemberResponse} returns this
 */
proto.yartu.GetCustomerMemberResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetCustomerMemberResponse} returns this
 */
proto.yartu.GetCustomerMemberResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetCustomerMemberResponse.prototype.hasMessage = function() {
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
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ResetCustomerMemberPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ResetCustomerMemberPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ResetCustomerMemberPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    password: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.ResetCustomerMemberPasswordRequest}
 */
proto.yartu.ResetCustomerMemberPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ResetCustomerMemberPasswordRequest;
  return proto.yartu.ResetCustomerMemberPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ResetCustomerMemberPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ResetCustomerMemberPasswordRequest}
 */
proto.yartu.ResetCustomerMemberPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ResetCustomerMemberPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ResetCustomerMemberPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ResetCustomerMemberPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ResetCustomerMemberPasswordRequest} returns this
 */
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ResetCustomerMemberPasswordRequest} returns this
 */
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ResetCustomerMemberPasswordRequest} returns this
 */
proto.yartu.ResetCustomerMemberPasswordRequest.prototype.setPassword = function(value) {
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
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ResetCustomerMemberPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ResetCustomerMemberPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ResetCustomerMemberPasswordResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ResetCustomerMemberPasswordResponse}
 */
proto.yartu.ResetCustomerMemberPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ResetCustomerMemberPasswordResponse;
  return proto.yartu.ResetCustomerMemberPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ResetCustomerMemberPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ResetCustomerMemberPasswordResponse}
 */
proto.yartu.ResetCustomerMemberPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ResetCustomerMemberPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ResetCustomerMemberPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ResetCustomerMemberPasswordResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ResetCustomerMemberPasswordResponse} returns this
 */
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ResetCustomerMemberPasswordResponse} returns this
 */
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ResetCustomerMemberPasswordResponse} returns this
 */
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ResetCustomerMemberPasswordResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ChangeCustomerMemberStatusRequest.repeatedFields_ = [2];



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
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ChangeCustomerMemberStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ChangeCustomerMemberStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ChangeCustomerMemberStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    idList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isPrivate: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ChangeCustomerMemberStatusRequest;
  return proto.yartu.ChangeCustomerMemberStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ChangeCustomerMemberStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addId(values[i]);
      }
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPrivate(value);
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
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ChangeCustomerMemberStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ChangeCustomerMemberStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ChangeCustomerMemberStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIdList();
  if (f.length > 0) {
    writer.writePackedInt64(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int64 id = 2;
 * @return {!Array<number>}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.getIdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.setIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.addId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.clearIdList = function() {
  return this.setIdList([]);
};


/**
 * optional bool is_active = 3;
 * @return {boolean}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.clearIsActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.hasIsActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_private = 4;
 * @return {boolean}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.getIsPrivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.setIsPrivate = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ChangeCustomerMemberStatusRequest} returns this
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.clearIsPrivate = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ChangeCustomerMemberStatusRequest.prototype.hasIsPrivate = function() {
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
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ChangeCustomerMemberStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ChangeCustomerMemberStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ChangeCustomerMemberStatusResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ChangeCustomerMemberStatusResponse}
 */
proto.yartu.ChangeCustomerMemberStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ChangeCustomerMemberStatusResponse;
  return proto.yartu.ChangeCustomerMemberStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ChangeCustomerMemberStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ChangeCustomerMemberStatusResponse}
 */
proto.yartu.ChangeCustomerMemberStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ChangeCustomerMemberStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ChangeCustomerMemberStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ChangeCustomerMemberStatusResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ChangeCustomerMemberStatusResponse} returns this
 */
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ChangeCustomerMemberStatusResponse} returns this
 */
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ChangeCustomerMemberStatusResponse} returns this
 */
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ChangeCustomerMemberStatusResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertCustomerGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hasEmailAlias: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    emailAlias: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isPrivate: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    hasAddressbook: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    hasCalendar: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    hasDrive: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    driveQuota: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.yartu.UpsertCustomerGroupRequest}
 */
proto.yartu.UpsertCustomerGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerGroupRequest;
  return proto.yartu.UpsertCustomerGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerGroupRequest}
 */
proto.yartu.UpsertCustomerGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasEmailAlias(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAlias(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPrivate(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasAddressbook(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasCalendar(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDrive(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDriveQuota(value);
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
proto.yartu.UpsertCustomerGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool has_email_alias = 4;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getHasEmailAlias = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setHasEmailAlias = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearHasEmailAlias = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasHasEmailAlias = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string email_alias = 5;
 * @return {string}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getEmailAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setEmailAlias = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearEmailAlias = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasEmailAlias = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_private = 6;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getIsPrivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setIsPrivate = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearIsPrivate = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasIsPrivate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_active = 7;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setIsActive = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearIsActive = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasIsActive = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool has_addressbook = 8;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getHasAddressbook = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setHasAddressbook = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearHasAddressbook = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasHasAddressbook = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool has_calendar = 9;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getHasCalendar = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setHasCalendar = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearHasCalendar = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasHasCalendar = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool has_drive = 10;
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getHasDrive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setHasDrive = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearHasDrive = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasHasDrive = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 drive_quota = 11;
 * @return {number}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.getDriveQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.setDriveQuota = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupRequest} returns this
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.clearDriveQuota = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupRequest.prototype.hasDriveQuota = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.yartu.UpsertCustomerGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && common_grpc_definitions_pb.GroupAdmin.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertCustomerGroupResponse}
 */
proto.yartu.UpsertCustomerGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerGroupResponse;
  return proto.yartu.UpsertCustomerGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerGroupResponse}
 */
proto.yartu.UpsertCustomerGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.GroupAdmin;
      reader.readMessage(value,common_grpc_definitions_pb.GroupAdmin.deserializeBinaryFromReader);
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
proto.yartu.UpsertCustomerGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupResponse.serializeBinaryToWriter = function(message, writer) {
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
      common_grpc_definitions_pb.GroupAdmin.serializeBinaryToWriter
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
proto.yartu.UpsertCustomerGroupResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerGroupResponse} returns this
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GroupAdmin data = 2;
 * @return {?proto.GroupAdmin}
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.getData = function() {
  return /** @type{?proto.GroupAdmin} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.GroupAdmin, 2));
};


/**
 * @param {?proto.GroupAdmin|undefined} value
 * @return {!proto.yartu.UpsertCustomerGroupResponse} returns this
*/
proto.yartu.UpsertCustomerGroupResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupResponse} returns this
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerGroupResponse} returns this
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupResponse} returns this
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupResponse.prototype.hasMessage = function() {
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
proto.yartu.DeleteCustomerGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yartu.DeleteCustomerGroupRequest}
 */
proto.yartu.DeleteCustomerGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerGroupRequest;
  return proto.yartu.DeleteCustomerGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerGroupRequest}
 */
proto.yartu.DeleteCustomerGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
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
proto.yartu.DeleteCustomerGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.DeleteCustomerGroupRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerGroupRequest} returns this
 */
proto.yartu.DeleteCustomerGroupRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 group_id = 2;
 * @return {number}
 */
proto.yartu.DeleteCustomerGroupRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerGroupRequest} returns this
 */
proto.yartu.DeleteCustomerGroupRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.yartu.DeleteCustomerGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteCustomerGroupResponse}
 */
proto.yartu.DeleteCustomerGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerGroupResponse;
  return proto.yartu.DeleteCustomerGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerGroupResponse}
 */
proto.yartu.DeleteCustomerGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteCustomerGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteCustomerGroupResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerGroupResponse} returns this
 */
proto.yartu.DeleteCustomerGroupResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteCustomerGroupResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteCustomerGroupResponse} returns this
 */
proto.yartu.DeleteCustomerGroupResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteCustomerGroupResponse} returns this
 */
proto.yartu.DeleteCustomerGroupResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteCustomerGroupResponse.prototype.hasMessage = function() {
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
proto.yartu.ListCustomerGroupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerGroupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerGroupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.yartu.ListCustomerGroupsRequest}
 */
proto.yartu.ListCustomerGroupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerGroupsRequest;
  return proto.yartu.ListCustomerGroupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerGroupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerGroupsRequest}
 */
proto.yartu.ListCustomerGroupsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
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
proto.yartu.ListCustomerGroupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerGroupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerGroupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.ListCustomerGroupsRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerGroupsRequest} returns this
 */
proto.yartu.ListCustomerGroupsRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Query query = 2;
 * @return {?proto.Query}
 */
proto.yartu.ListCustomerGroupsRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 2));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListCustomerGroupsRequest} returns this
*/
proto.yartu.ListCustomerGroupsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerGroupsRequest} returns this
 */
proto.yartu.ListCustomerGroupsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerGroupsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListCustomerGroupsResponse.repeatedFields_ = [2];



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
proto.yartu.ListCustomerGroupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerGroupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerGroupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    common_grpc_definitions_pb.GroupAdmin.toObject, includeInstance),
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
 * @return {!proto.yartu.ListCustomerGroupsResponse}
 */
proto.yartu.ListCustomerGroupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerGroupsResponse;
  return proto.yartu.ListCustomerGroupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerGroupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerGroupsResponse}
 */
proto.yartu.ListCustomerGroupsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.GroupAdmin;
      reader.readMessage(value,common_grpc_definitions_pb.GroupAdmin.deserializeBinaryFromReader);
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
proto.yartu.ListCustomerGroupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerGroupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerGroupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupsResponse.serializeBinaryToWriter = function(message, writer) {
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
      common_grpc_definitions_pb.GroupAdmin.serializeBinaryToWriter
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
proto.yartu.ListCustomerGroupsResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerGroupsResponse} returns this
 */
proto.yartu.ListCustomerGroupsResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated GroupAdmin data = 2;
 * @return {!Array<!proto.GroupAdmin>}
 */
proto.yartu.ListCustomerGroupsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.GroupAdmin>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.GroupAdmin, 2));
};


/**
 * @param {!Array<!proto.GroupAdmin>} value
 * @return {!proto.yartu.ListCustomerGroupsResponse} returns this
*/
proto.yartu.ListCustomerGroupsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.GroupAdmin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.GroupAdmin}
 */
proto.yartu.ListCustomerGroupsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.GroupAdmin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListCustomerGroupsResponse} returns this
 */
proto.yartu.ListCustomerGroupsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListCustomerGroupsResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListCustomerGroupsResponse} returns this
*/
proto.yartu.ListCustomerGroupsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerGroupsResponse} returns this
 */
proto.yartu.ListCustomerGroupsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerGroupsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListCustomerGroupsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListCustomerGroupsResponse} returns this
 */
proto.yartu.ListCustomerGroupsResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListCustomerGroupsResponse} returns this
 */
proto.yartu.ListCustomerGroupsResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerGroupsResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertCustomerGroupMemberRequest.repeatedFields_ = [3];



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
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerGroupMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerGroupMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.yartu.UpsertCustomerGroupMemberRequest}
 */
proto.yartu.UpsertCustomerGroupMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerGroupMemberRequest;
  return proto.yartu.UpsertCustomerGroupMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerGroupMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerGroupMemberRequest}
 */
proto.yartu.UpsertCustomerGroupMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addUser(value);
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
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerGroupMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerGroupMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUserList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerGroupMemberRequest} returns this
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerGroupMemberRequest} returns this
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string user = 3;
 * @return {!Array<string>}
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.getUserList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UpsertCustomerGroupMemberRequest} returns this
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.setUserList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertCustomerGroupMemberRequest} returns this
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.addUser = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertCustomerGroupMemberRequest} returns this
 */
proto.yartu.UpsertCustomerGroupMemberRequest.prototype.clearUserList = function() {
  return this.setUserList([]);
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
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerGroupMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerGroupMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupMemberResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertCustomerGroupMemberResponse}
 */
proto.yartu.UpsertCustomerGroupMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerGroupMemberResponse;
  return proto.yartu.UpsertCustomerGroupMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerGroupMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerGroupMemberResponse}
 */
proto.yartu.UpsertCustomerGroupMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerGroupMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerGroupMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerGroupMemberResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerGroupMemberResponse} returns this
 */
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerGroupMemberResponse} returns this
 */
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerGroupMemberResponse} returns this
 */
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerGroupMemberResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DeleteCustomerGroupMemberRequest.repeatedFields_ = [3];



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
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerGroupMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerGroupMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.yartu.DeleteCustomerGroupMemberRequest}
 */
proto.yartu.DeleteCustomerGroupMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerGroupMemberRequest;
  return proto.yartu.DeleteCustomerGroupMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerGroupMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerGroupMemberRequest}
 */
proto.yartu.DeleteCustomerGroupMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addUser(value);
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
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerGroupMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerGroupMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUserList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerGroupMemberRequest} returns this
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerGroupMemberRequest} returns this
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string user = 3;
 * @return {!Array<string>}
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.getUserList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.DeleteCustomerGroupMemberRequest} returns this
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.setUserList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.DeleteCustomerGroupMemberRequest} returns this
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.addUser = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DeleteCustomerGroupMemberRequest} returns this
 */
proto.yartu.DeleteCustomerGroupMemberRequest.prototype.clearUserList = function() {
  return this.setUserList([]);
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
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerGroupMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerGroupMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupMemberResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteCustomerGroupMemberResponse}
 */
proto.yartu.DeleteCustomerGroupMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerGroupMemberResponse;
  return proto.yartu.DeleteCustomerGroupMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerGroupMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerGroupMemberResponse}
 */
proto.yartu.DeleteCustomerGroupMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerGroupMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerGroupMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerGroupMemberResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerGroupMemberResponse} returns this
 */
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteCustomerGroupMemberResponse} returns this
 */
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteCustomerGroupMemberResponse} returns this
 */
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteCustomerGroupMemberResponse.prototype.hasMessage = function() {
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
proto.yartu.ListCustomerGroupMembersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerGroupMembersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerGroupMembersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupMembersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupId: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.yartu.ListCustomerGroupMembersRequest}
 */
proto.yartu.ListCustomerGroupMembersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerGroupMembersRequest;
  return proto.yartu.ListCustomerGroupMembersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerGroupMembersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerGroupMembersRequest}
 */
proto.yartu.ListCustomerGroupMembersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 3:
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
proto.yartu.ListCustomerGroupMembersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerGroupMembersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerGroupMembersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupMembersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.ListCustomerGroupMembersRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerGroupMembersRequest} returns this
 */
proto.yartu.ListCustomerGroupMembersRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 group_id = 2;
 * @return {number}
 */
proto.yartu.ListCustomerGroupMembersRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerGroupMembersRequest} returns this
 */
proto.yartu.ListCustomerGroupMembersRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Query query = 3;
 * @return {?proto.Query}
 */
proto.yartu.ListCustomerGroupMembersRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 3));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListCustomerGroupMembersRequest} returns this
*/
proto.yartu.ListCustomerGroupMembersRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerGroupMembersRequest} returns this
 */
proto.yartu.ListCustomerGroupMembersRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerGroupMembersRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListCustomerGroupMembersResponse.repeatedFields_ = [3];



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
proto.yartu.ListCustomerGroupMembersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerGroupMembersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerGroupMembersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupMembersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    group: (f = msg.getGroup()) && common_grpc_definitions_pb.GroupAdmin.toObject(includeInstance, f),
    userList: jspb.Message.toObjectList(msg.getUserList(),
    common_grpc_definitions_pb.User.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && common_grpc_definitions_pb.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListCustomerGroupMembersResponse}
 */
proto.yartu.ListCustomerGroupMembersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerGroupMembersResponse;
  return proto.yartu.ListCustomerGroupMembersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerGroupMembersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerGroupMembersResponse}
 */
proto.yartu.ListCustomerGroupMembersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.GroupAdmin;
      reader.readMessage(value,common_grpc_definitions_pb.GroupAdmin.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.addUser(value);
      break;
    case 4:
      var value = new common_grpc_definitions_pb.PaginationMeta;
      reader.readMessage(value,common_grpc_definitions_pb.PaginationMeta.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.yartu.ListCustomerGroupMembersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerGroupMembersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerGroupMembersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerGroupMembersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.GroupAdmin.serializeBinaryToWriter
    );
  }
  f = message.getUserList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_grpc_definitions_pb.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListCustomerGroupMembersResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GroupAdmin group = 2;
 * @return {?proto.GroupAdmin}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.getGroup = function() {
  return /** @type{?proto.GroupAdmin} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.GroupAdmin, 2));
};


/**
 * @param {?proto.GroupAdmin|undefined} value
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
*/
proto.yartu.ListCustomerGroupMembersResponse.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated User user = 3;
 * @return {!Array<!proto.User>}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.getUserList = function() {
  return /** @type{!Array<!proto.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {!Array<!proto.User>} value
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
*/
proto.yartu.ListCustomerGroupMembersResponse.prototype.setUserList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.User}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.addUser = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.clearUserList = function() {
  return this.setUserList([]);
};


/**
 * optional PaginationMeta pagination = 4;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 4));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
*/
proto.yartu.ListCustomerGroupMembersResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListCustomerGroupMembersResponse} returns this
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerGroupMembersResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.yartu.ListCustomerEmailAliasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerEmailAliasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerEmailAliasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.yartu.ListCustomerEmailAliasRequest}
 */
proto.yartu.ListCustomerEmailAliasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerEmailAliasRequest;
  return proto.yartu.ListCustomerEmailAliasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerEmailAliasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerEmailAliasRequest}
 */
proto.yartu.ListCustomerEmailAliasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
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
proto.yartu.ListCustomerEmailAliasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerEmailAliasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerEmailAliasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.ListCustomerEmailAliasRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerEmailAliasRequest} returns this
 */
proto.yartu.ListCustomerEmailAliasRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Query query = 2;
 * @return {?proto.Query}
 */
proto.yartu.ListCustomerEmailAliasRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 2));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListCustomerEmailAliasRequest} returns this
*/
proto.yartu.ListCustomerEmailAliasRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerEmailAliasRequest} returns this
 */
proto.yartu.ListCustomerEmailAliasRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerEmailAliasRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListCustomerEmailAliasResponse.repeatedFields_ = [2];



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
proto.yartu.ListCustomerEmailAliasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerEmailAliasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerEmailAliasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    aliasList: jspb.Message.toObjectList(msg.getAliasList(),
    common_grpc_definitions_pb.MailAlias.toObject, includeInstance),
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
 * @return {!proto.yartu.ListCustomerEmailAliasResponse}
 */
proto.yartu.ListCustomerEmailAliasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerEmailAliasResponse;
  return proto.yartu.ListCustomerEmailAliasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerEmailAliasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerEmailAliasResponse}
 */
proto.yartu.ListCustomerEmailAliasResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.MailAlias;
      reader.readMessage(value,common_grpc_definitions_pb.MailAlias.deserializeBinaryFromReader);
      msg.addAlias(value);
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
proto.yartu.ListCustomerEmailAliasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerEmailAliasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerEmailAliasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_grpc_definitions_pb.MailAlias.serializeBinaryToWriter
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
proto.yartu.ListCustomerEmailAliasResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerEmailAliasResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MailAlias alias = 2;
 * @return {!Array<!proto.MailAlias>}
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.getAliasList = function() {
  return /** @type{!Array<!proto.MailAlias>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.MailAlias, 2));
};


/**
 * @param {!Array<!proto.MailAlias>} value
 * @return {!proto.yartu.ListCustomerEmailAliasResponse} returns this
*/
proto.yartu.ListCustomerEmailAliasResponse.prototype.setAliasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MailAlias=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MailAlias}
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.addAlias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MailAlias, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListCustomerEmailAliasResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListCustomerEmailAliasResponse} returns this
*/
proto.yartu.ListCustomerEmailAliasResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerEmailAliasResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListCustomerEmailAliasResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListCustomerEmailAliasResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerEmailAliasResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerEmailAliasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerEmailAliasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    realmId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isActive: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.yartu.UpsertCustomerEmailAliasRequest}
 */
proto.yartu.UpsertCustomerEmailAliasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerEmailAliasRequest;
  return proto.yartu.UpsertCustomerEmailAliasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerEmailAliasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerEmailAliasRequest}
 */
proto.yartu.UpsertCustomerEmailAliasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
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
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerEmailAliasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerEmailAliasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsActive();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 realm_id = 1;
 * @return {number}
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasRequest} returns this
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasRequest} returns this
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasRequest} returns this
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 is_active = 4;
 * @return {number}
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.getIsActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasRequest} returns this
 */
proto.yartu.UpsertCustomerEmailAliasRequest.prototype.setIsActive = function(value) {
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
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerEmailAliasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerEmailAliasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    alias: (f = msg.getAlias()) && common_grpc_definitions_pb.MailAlias.toObject(includeInstance, f)
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
 * @return {!proto.yartu.UpsertCustomerEmailAliasResponse}
 */
proto.yartu.UpsertCustomerEmailAliasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerEmailAliasResponse;
  return proto.yartu.UpsertCustomerEmailAliasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerEmailAliasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerEmailAliasResponse}
 */
proto.yartu.UpsertCustomerEmailAliasResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.MailAlias;
      reader.readMessage(value,common_grpc_definitions_pb.MailAlias.deserializeBinaryFromReader);
      msg.setAlias(value);
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
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerEmailAliasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerEmailAliasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAlias();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.MailAlias.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasResponse} returns this
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasResponse} returns this
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerEmailAliasResponse} returns this
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MailAlias alias = 3;
 * @return {?proto.MailAlias}
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.getAlias = function() {
  return /** @type{?proto.MailAlias} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.MailAlias, 3));
};


/**
 * @param {?proto.MailAlias|undefined} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasResponse} returns this
*/
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.setAlias = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertCustomerEmailAliasResponse} returns this
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.clearAlias = function() {
  return this.setAlias(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerEmailAliasResponse.prototype.hasAlias = function() {
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
proto.yartu.DeleteCustomerEmailAliasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerEmailAliasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerEmailAliasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    realmId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yartu.DeleteCustomerEmailAliasRequest}
 */
proto.yartu.DeleteCustomerEmailAliasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerEmailAliasRequest;
  return proto.yartu.DeleteCustomerEmailAliasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerEmailAliasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerEmailAliasRequest}
 */
proto.yartu.DeleteCustomerEmailAliasRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
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
proto.yartu.DeleteCustomerEmailAliasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerEmailAliasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerEmailAliasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.DeleteCustomerEmailAliasRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasRequest} returns this
 */
proto.yartu.DeleteCustomerEmailAliasRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 realm_id = 2;
 * @return {number}
 */
proto.yartu.DeleteCustomerEmailAliasRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasRequest} returns this
 */
proto.yartu.DeleteCustomerEmailAliasRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerEmailAliasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerEmailAliasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteCustomerEmailAliasResponse}
 */
proto.yartu.DeleteCustomerEmailAliasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerEmailAliasResponse;
  return proto.yartu.DeleteCustomerEmailAliasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerEmailAliasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerEmailAliasResponse}
 */
proto.yartu.DeleteCustomerEmailAliasResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerEmailAliasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerEmailAliasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasResponse} returns this
 */
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasResponse} returns this
 */
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteCustomerEmailAliasResponse} returns this
 */
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteCustomerEmailAliasResponse.prototype.hasMessage = function() {
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
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerEmailAliasAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerEmailAliasAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    realmId: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.yartu.ListCustomerEmailAliasAddressRequest}
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerEmailAliasAddressRequest;
  return proto.yartu.ListCustomerEmailAliasAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerEmailAliasAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerEmailAliasAddressRequest}
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 3:
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
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerEmailAliasAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerEmailAliasAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 realm_id = 2;
 * @return {number}
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Query query = 3;
 * @return {?proto.Query}
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 3));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListCustomerEmailAliasAddressRequest} returns this
*/
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerEmailAliasAddressRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.repeatedFields_ = [4];



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
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListCustomerEmailAliasAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListCustomerEmailAliasAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    toList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse}
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListCustomerEmailAliasAddressResponse;
  return proto.yartu.ListCustomerEmailAliasAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListCustomerEmailAliasAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse}
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTo(value);
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
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListCustomerEmailAliasAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListCustomerEmailAliasAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string to = 4;
 * @return {!Array<string>}
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.getToList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.setToList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.addTo = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.ListCustomerEmailAliasAddressResponse.prototype.clearToList = function() {
  return this.setToList([]);
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
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerEmailAliasAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    realmId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    email: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressRequest}
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerEmailAliasAddressRequest;
  return proto.yartu.DeleteCustomerEmailAliasAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressRequest}
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
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
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerEmailAliasAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
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
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 realm_id = 2;
 * @return {number}
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.DeleteCustomerEmailAliasAddressRequest.prototype.setEmail = function(value) {
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
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteCustomerEmailAliasAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressResponse}
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteCustomerEmailAliasAddressResponse;
  return proto.yartu.DeleteCustomerEmailAliasAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressResponse}
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteCustomerEmailAliasAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteCustomerEmailAliasAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteCustomerEmailAliasAddressResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerEmailAliasAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    realmId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    email: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressRequest}
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerEmailAliasAddressRequest;
  return proto.yartu.UpsertCustomerEmailAliasAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressRequest}
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealmId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
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
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerEmailAliasAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRealmId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
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
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 realm_id = 2;
 * @return {number}
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.getRealmId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.setRealmId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressRequest} returns this
 */
proto.yartu.UpsertCustomerEmailAliasAddressRequest.prototype.setEmail = function(value) {
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
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertCustomerEmailAliasAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressResponse}
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertCustomerEmailAliasAddressResponse;
  return proto.yartu.UpsertCustomerEmailAliasAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressResponse}
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertCustomerEmailAliasAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertCustomerEmailAliasAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertCustomerEmailAliasAddressResponse} returns this
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertCustomerEmailAliasAddressResponse.prototype.hasMessage = function() {
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
proto.yartu.CheckDomainAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CheckDomainAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CheckDomainAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckDomainAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.CheckDomainAddressRequest}
 */
proto.yartu.CheckDomainAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CheckDomainAddressRequest;
  return proto.yartu.CheckDomainAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CheckDomainAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CheckDomainAddressRequest}
 */
proto.yartu.CheckDomainAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
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
proto.yartu.CheckDomainAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CheckDomainAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CheckDomainAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckDomainAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.CheckDomainAddressRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CheckDomainAddressRequest} returns this
 */
proto.yartu.CheckDomainAddressRequest.prototype.setDomain = function(value) {
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
proto.yartu.CheckDomainAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CheckDomainAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CheckDomainAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckDomainAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isAvailable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isRegistered: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
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
 * @return {!proto.yartu.CheckDomainAddressResponse}
 */
proto.yartu.CheckDomainAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CheckDomainAddressResponse;
  return proto.yartu.CheckDomainAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CheckDomainAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CheckDomainAddressResponse}
 */
proto.yartu.CheckDomainAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setIsAvailable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRegistered(value);
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
proto.yartu.CheckDomainAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CheckDomainAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CheckDomainAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CheckDomainAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsAvailable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsRegistered();
  if (f) {
    writer.writeBool(
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
proto.yartu.CheckDomainAddressResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CheckDomainAddressResponse} returns this
 */
proto.yartu.CheckDomainAddressResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_available = 2;
 * @return {boolean}
 */
proto.yartu.CheckDomainAddressResponse.prototype.getIsAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.CheckDomainAddressResponse} returns this
 */
proto.yartu.CheckDomainAddressResponse.prototype.setIsAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_registered = 3;
 * @return {boolean}
 */
proto.yartu.CheckDomainAddressResponse.prototype.getIsRegistered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.CheckDomainAddressResponse} returns this
 */
proto.yartu.CheckDomainAddressResponse.prototype.setIsRegistered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.CheckDomainAddressResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CheckDomainAddressResponse} returns this
 */
proto.yartu.CheckDomainAddressResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.CheckDomainAddressResponse} returns this
 */
proto.yartu.CheckDomainAddressResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CheckDomainAddressResponse.prototype.hasMessage = function() {
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
proto.yartu.GetRegisterFormRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRegisterFormRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRegisterFormRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRegisterFormRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.GetRegisterFormRequest}
 */
proto.yartu.GetRegisterFormRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRegisterFormRequest;
  return proto.yartu.GetRegisterFormRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRegisterFormRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRegisterFormRequest}
 */
proto.yartu.GetRegisterFormRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
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
proto.yartu.GetRegisterFormRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRegisterFormRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRegisterFormRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRegisterFormRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.GetRegisterFormRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRegisterFormRequest} returns this
 */
proto.yartu.GetRegisterFormRequest.prototype.setDomain = function(value) {
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
proto.yartu.GetRegisterFormResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRegisterFormResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRegisterFormResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRegisterFormResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    form: (f = msg.getForm()) && proto.yartu.RegisterFormLog.toObject(includeInstance, f),
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
 * @return {!proto.yartu.GetRegisterFormResponse}
 */
proto.yartu.GetRegisterFormResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRegisterFormResponse;
  return proto.yartu.GetRegisterFormResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRegisterFormResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRegisterFormResponse}
 */
proto.yartu.GetRegisterFormResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.RegisterFormLog;
      reader.readMessage(value,proto.yartu.RegisterFormLog.deserializeBinaryFromReader);
      msg.setForm(value);
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
proto.yartu.GetRegisterFormResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRegisterFormResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRegisterFormResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRegisterFormResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getForm();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.RegisterFormLog.serializeBinaryToWriter
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
proto.yartu.GetRegisterFormResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetRegisterFormResponse} returns this
 */
proto.yartu.GetRegisterFormResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional RegisterFormLog form = 2;
 * @return {?proto.yartu.RegisterFormLog}
 */
proto.yartu.GetRegisterFormResponse.prototype.getForm = function() {
  return /** @type{?proto.yartu.RegisterFormLog} */ (
    jspb.Message.getWrapperField(this, proto.yartu.RegisterFormLog, 2));
};


/**
 * @param {?proto.yartu.RegisterFormLog|undefined} value
 * @return {!proto.yartu.GetRegisterFormResponse} returns this
*/
proto.yartu.GetRegisterFormResponse.prototype.setForm = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetRegisterFormResponse} returns this
 */
proto.yartu.GetRegisterFormResponse.prototype.clearForm = function() {
  return this.setForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRegisterFormResponse.prototype.hasForm = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetRegisterFormResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRegisterFormResponse} returns this
 */
proto.yartu.GetRegisterFormResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetRegisterFormResponse} returns this
 */
proto.yartu.GetRegisterFormResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRegisterFormResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertRegisterFormRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertRegisterFormRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertRegisterFormRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRegisterFormRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    packageId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    packagePeriod: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 6, ""),
    username: jspb.Message.getFieldWithDefault(msg, 7, ""),
    password: jspb.Message.getFieldWithDefault(msg, 8, ""),
    currentEmail: jspb.Message.getFieldWithDefault(msg, 9, ""),
    userCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    taxType: jspb.Message.getFieldWithDefault(msg, 11, ""),
    taxName: jspb.Message.getFieldWithDefault(msg, 12, ""),
    taxSurname: jspb.Message.getFieldWithDefault(msg, 13, ""),
    taxPhone: jspb.Message.getFieldWithDefault(msg, 14, ""),
    taxAddress: jspb.Message.getFieldWithDefault(msg, 15, ""),
    taxNo: jspb.Message.getFieldWithDefault(msg, 16, ""),
    taxLocation: jspb.Message.getFieldWithDefault(msg, 17, ""),
    taxEmail: jspb.Message.getFieldWithDefault(msg, 18, ""),
    step: jspb.Message.getFieldWithDefault(msg, 19, 0),
    taxAddressTitle: jspb.Message.getFieldWithDefault(msg, 20, "")
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
 * @return {!proto.yartu.UpsertRegisterFormRequest}
 */
proto.yartu.UpsertRegisterFormRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertRegisterFormRequest;
  return proto.yartu.UpsertRegisterFormRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertRegisterFormRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertRegisterFormRequest}
 */
proto.yartu.UpsertRegisterFormRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackageId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagePeriod(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentEmail(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserCount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxType(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxName(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxSurname(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxPhone(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxAddress(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxNo(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxLocation(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxEmail(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStep(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaxAddressTitle(value);
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
proto.yartu.UpsertRegisterFormRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertRegisterFormRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertRegisterFormRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRegisterFormRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setDomain = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearDomain = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasDomain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string package_id = 2;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getPackageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setPackageId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearPackageId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasPackageId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string package_period = 3;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getPackagePeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setPackagePeriod = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearPackagePeriod = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasPackagePeriod = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string surname = 5;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setSurname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearSurname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasSurname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string phone = 6;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setPhone = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearPhone = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string username = 7;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string password = 8;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string current_email = 9;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getCurrentEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setCurrentEmail = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearCurrentEmail = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasCurrentEmail = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 user_count = 10;
 * @return {number}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setUserCount = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearUserCount = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasUserCount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string tax_type = 11;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxType = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxType = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxType = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string tax_name = 12;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxName = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxName = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxName = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string tax_surname = 13;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxSurname = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxSurname = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxSurname = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string tax_phone = 14;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxPhone = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxPhone = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxPhone = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string tax_address = 15;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxAddress = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxAddress = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxAddress = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string tax_no = 16;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxNo = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxNo = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxNo = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string tax_location = 17;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxLocation = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxLocation = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxLocation = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string tax_email = 18;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxEmail = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxEmail = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxEmail = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int64 step = 19;
 * @return {number}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setStep = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearStep = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasStep = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string tax_address_title = 20;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.getTaxAddressTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.setTaxAddressTitle = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormRequest} returns this
 */
proto.yartu.UpsertRegisterFormRequest.prototype.clearTaxAddressTitle = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormRequest.prototype.hasTaxAddressTitle = function() {
  return jspb.Message.getField(this, 20) != null;
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
proto.yartu.UpsertRegisterFormResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertRegisterFormResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertRegisterFormResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRegisterFormResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertRegisterFormResponse}
 */
proto.yartu.UpsertRegisterFormResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertRegisterFormResponse;
  return proto.yartu.UpsertRegisterFormResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertRegisterFormResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertRegisterFormResponse}
 */
proto.yartu.UpsertRegisterFormResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertRegisterFormResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertRegisterFormResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertRegisterFormResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRegisterFormResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertRegisterFormResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertRegisterFormResponse} returns this
 */
proto.yartu.UpsertRegisterFormResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertRegisterFormResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRegisterFormResponse} returns this
 */
proto.yartu.UpsertRegisterFormResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRegisterFormResponse} returns this
 */
proto.yartu.UpsertRegisterFormResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRegisterFormResponse.prototype.hasMessage = function() {
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
proto.yartu.GetPackageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPackageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPackageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    packageId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.yartu.GetPackageRequest}
 */
proto.yartu.GetPackageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPackageRequest;
  return proto.yartu.GetPackageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPackageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPackageRequest}
 */
proto.yartu.GetPackageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPackageId(value);
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
proto.yartu.GetPackageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPackageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPackageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackageId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 package_id = 1;
 * @return {number}
 */
proto.yartu.GetPackageRequest.prototype.getPackageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageRequest} returns this
 */
proto.yartu.GetPackageRequest.prototype.setPackageId = function(value) {
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
proto.yartu.GetPackageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPackageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPackageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pb_package: (f = msg.getPackage()) && common_grpc_definitions_pb.Package.toObject(includeInstance, f),
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
 * @return {!proto.yartu.GetPackageResponse}
 */
proto.yartu.GetPackageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPackageResponse;
  return proto.yartu.GetPackageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPackageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPackageResponse}
 */
proto.yartu.GetPackageResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Package;
      reader.readMessage(value,common_grpc_definitions_pb.Package.deserializeBinaryFromReader);
      msg.setPackage(value);
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
proto.yartu.GetPackageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPackageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPackageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPackage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.Package.serializeBinaryToWriter
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
proto.yartu.GetPackageResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageResponse} returns this
 */
proto.yartu.GetPackageResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Package package = 2;
 * @return {?proto.Package}
 */
proto.yartu.GetPackageResponse.prototype.getPackage = function() {
  return /** @type{?proto.Package} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Package, 2));
};


/**
 * @param {?proto.Package|undefined} value
 * @return {!proto.yartu.GetPackageResponse} returns this
*/
proto.yartu.GetPackageResponse.prototype.setPackage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetPackageResponse} returns this
 */
proto.yartu.GetPackageResponse.prototype.clearPackage = function() {
  return this.setPackage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPackageResponse.prototype.hasPackage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetPackageResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPackageResponse} returns this
 */
proto.yartu.GetPackageResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetPackageResponse} returns this
 */
proto.yartu.GetPackageResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPackageResponse.prototype.hasMessage = function() {
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
proto.yartu.ListPackagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListPackagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListPackagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPackagesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListPackagesRequest}
 */
proto.yartu.ListPackagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListPackagesRequest;
  return proto.yartu.ListPackagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListPackagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListPackagesRequest}
 */
proto.yartu.ListPackagesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListPackagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListPackagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListPackagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPackagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListPackagesResponse.repeatedFields_ = [2];



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
proto.yartu.ListPackagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListPackagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListPackagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPackagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    yartuPackageList: jspb.Message.toObjectList(msg.getYartuPackageList(),
    common_grpc_definitions_pb.Package.toObject, includeInstance),
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
 * @return {!proto.yartu.ListPackagesResponse}
 */
proto.yartu.ListPackagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListPackagesResponse;
  return proto.yartu.ListPackagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListPackagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListPackagesResponse}
 */
proto.yartu.ListPackagesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Package;
      reader.readMessage(value,common_grpc_definitions_pb.Package.deserializeBinaryFromReader);
      msg.addYartuPackage(value);
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
proto.yartu.ListPackagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListPackagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListPackagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPackagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getYartuPackageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_grpc_definitions_pb.Package.serializeBinaryToWriter
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
proto.yartu.ListPackagesResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListPackagesResponse} returns this
 */
proto.yartu.ListPackagesResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Package yartu_package = 2;
 * @return {!Array<!proto.Package>}
 */
proto.yartu.ListPackagesResponse.prototype.getYartuPackageList = function() {
  return /** @type{!Array<!proto.Package>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Package, 2));
};


/**
 * @param {!Array<!proto.Package>} value
 * @return {!proto.yartu.ListPackagesResponse} returns this
*/
proto.yartu.ListPackagesResponse.prototype.setYartuPackageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Package=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Package}
 */
proto.yartu.ListPackagesResponse.prototype.addYartuPackage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Package, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListPackagesResponse} returns this
 */
proto.yartu.ListPackagesResponse.prototype.clearYartuPackageList = function() {
  return this.setYartuPackageList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListPackagesResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListPackagesResponse} returns this
 */
proto.yartu.ListPackagesResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListPackagesResponse} returns this
 */
proto.yartu.ListPackagesResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListPackagesResponse.prototype.hasMessage = function() {
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
proto.yartu.GetPaymentSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPaymentSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPaymentSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPaymentSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maskedPan: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cvv: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.GetPaymentSessionRequest}
 */
proto.yartu.GetPaymentSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPaymentSessionRequest;
  return proto.yartu.GetPaymentSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPaymentSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPaymentSessionRequest}
 */
proto.yartu.GetPaymentSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaskedPan(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCvv(value);
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
proto.yartu.GetPaymentSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPaymentSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPaymentSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPaymentSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaskedPan();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCvv();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.GetPaymentSessionRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPaymentSessionRequest} returns this
 */
proto.yartu.GetPaymentSessionRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string masked_pan = 2;
 * @return {string}
 */
proto.yartu.GetPaymentSessionRequest.prototype.getMaskedPan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPaymentSessionRequest} returns this
 */
proto.yartu.GetPaymentSessionRequest.prototype.setMaskedPan = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cvv = 3;
 * @return {string}
 */
proto.yartu.GetPaymentSessionRequest.prototype.getCvv = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPaymentSessionRequest} returns this
 */
proto.yartu.GetPaymentSessionRequest.prototype.setCvv = function(value) {
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
proto.yartu.GetPaymentSessionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPaymentSessionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPaymentSessionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPaymentSessionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    sessionToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.yartu.GetPaymentSessionResponse}
 */
proto.yartu.GetPaymentSessionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPaymentSessionResponse;
  return proto.yartu.GetPaymentSessionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPaymentSessionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPaymentSessionResponse}
 */
proto.yartu.GetPaymentSessionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setIsSuccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionToken(value);
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
proto.yartu.GetPaymentSessionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPaymentSessionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPaymentSessionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPaymentSessionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSessionToken();
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
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetPaymentSessionResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPaymentSessionResponse} returns this
 */
proto.yartu.GetPaymentSessionResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_success = 2;
 * @return {boolean}
 */
proto.yartu.GetPaymentSessionResponse.prototype.getIsSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetPaymentSessionResponse} returns this
 */
proto.yartu.GetPaymentSessionResponse.prototype.setIsSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string session_token = 3;
 * @return {string}
 */
proto.yartu.GetPaymentSessionResponse.prototype.getSessionToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPaymentSessionResponse} returns this
 */
proto.yartu.GetPaymentSessionResponse.prototype.setSessionToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.GetPaymentSessionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPaymentSessionResponse} returns this
 */
proto.yartu.GetPaymentSessionResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetPaymentSessionResponse} returns this
 */
proto.yartu.GetPaymentSessionResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPaymentSessionResponse.prototype.hasMessage = function() {
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
proto.yartu.ListInvoiceTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListInvoiceTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListInvoiceTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoiceTemplateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListInvoiceTemplateRequest}
 */
proto.yartu.ListInvoiceTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListInvoiceTemplateRequest;
  return proto.yartu.ListInvoiceTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListInvoiceTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListInvoiceTemplateRequest}
 */
proto.yartu.ListInvoiceTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListInvoiceTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListInvoiceTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListInvoiceTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoiceTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListInvoiceTemplateResponse.repeatedFields_ = [3];



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
proto.yartu.ListInvoiceTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListInvoiceTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListInvoiceTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoiceTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.InvoiceTemplate.toObject, includeInstance)
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
 * @return {!proto.yartu.ListInvoiceTemplateResponse}
 */
proto.yartu.ListInvoiceTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListInvoiceTemplateResponse;
  return proto.yartu.ListInvoiceTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListInvoiceTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListInvoiceTemplateResponse}
 */
proto.yartu.ListInvoiceTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.InvoiceTemplate;
      reader.readMessage(value,proto.yartu.InvoiceTemplate.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.yartu.ListInvoiceTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListInvoiceTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListInvoiceTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoiceTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.InvoiceTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListInvoiceTemplateResponse} returns this
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListInvoiceTemplateResponse} returns this
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListInvoiceTemplateResponse} returns this
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated InvoiceTemplate data = 3;
 * @return {!Array<!proto.yartu.InvoiceTemplate>}
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.InvoiceTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.InvoiceTemplate, 3));
};


/**
 * @param {!Array<!proto.yartu.InvoiceTemplate>} value
 * @return {!proto.yartu.ListInvoiceTemplateResponse} returns this
*/
proto.yartu.ListInvoiceTemplateResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.InvoiceTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.InvoiceTemplate}
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.InvoiceTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListInvoiceTemplateResponse} returns this
 */
proto.yartu.ListInvoiceTemplateResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
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
proto.yartu.GetDebtAmountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetDebtAmountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetDebtAmountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDebtAmountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.GetDebtAmountRequest}
 */
proto.yartu.GetDebtAmountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetDebtAmountRequest;
  return proto.yartu.GetDebtAmountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetDebtAmountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetDebtAmountRequest}
 */
proto.yartu.GetDebtAmountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
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
proto.yartu.GetDebtAmountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetDebtAmountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetDebtAmountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDebtAmountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.GetDebtAmountRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetDebtAmountRequest} returns this
 */
proto.yartu.GetDebtAmountRequest.prototype.setDomain = function(value) {
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
proto.yartu.GetDebtAmountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetDebtAmountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetDebtAmountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDebtAmountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && common_grpc_definitions_pb.Package.toObject(includeInstance, f)
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
 * @return {!proto.yartu.GetDebtAmountResponse}
 */
proto.yartu.GetDebtAmountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetDebtAmountResponse;
  return proto.yartu.GetDebtAmountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetDebtAmountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetDebtAmountResponse}
 */
proto.yartu.GetDebtAmountResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Package;
      reader.readMessage(value,common_grpc_definitions_pb.Package.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.yartu.GetDebtAmountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetDebtAmountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetDebtAmountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDebtAmountResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.Package.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetDebtAmountResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetDebtAmountResponse} returns this
 */
proto.yartu.GetDebtAmountResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.GetDebtAmountResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetDebtAmountResponse} returns this
 */
proto.yartu.GetDebtAmountResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetDebtAmountResponse} returns this
 */
proto.yartu.GetDebtAmountResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetDebtAmountResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Package data = 3;
 * @return {?proto.Package}
 */
proto.yartu.GetDebtAmountResponse.prototype.getData = function() {
  return /** @type{?proto.Package} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Package, 3));
};


/**
 * @param {?proto.Package|undefined} value
 * @return {!proto.yartu.GetDebtAmountResponse} returns this
*/
proto.yartu.GetDebtAmountResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetDebtAmountResponse} returns this
 */
proto.yartu.GetDebtAmountResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetDebtAmountResponse.prototype.hasData = function() {
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
proto.yartu.GetPackageChangeDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPackageChangeDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPackageChangeDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageChangeDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toPackage: jspb.Message.getFieldWithDefault(msg, 2, 0),
    newMaxUserCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    packagePeriod: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yartu.GetPackageChangeDataRequest}
 */
proto.yartu.GetPackageChangeDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPackageChangeDataRequest;
  return proto.yartu.GetPackageChangeDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPackageChangeDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPackageChangeDataRequest}
 */
proto.yartu.GetPackageChangeDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToPackage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewMaxUserCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagePeriod(value);
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
proto.yartu.GetPackageChangeDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPackageChangeDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPackageChangeDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageChangeDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToPackage();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNewMaxUserCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPackagePeriod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.GetPackageChangeDataRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPackageChangeDataRequest} returns this
 */
proto.yartu.GetPackageChangeDataRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 to_package = 2;
 * @return {number}
 */
proto.yartu.GetPackageChangeDataRequest.prototype.getToPackage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageChangeDataRequest} returns this
 */
proto.yartu.GetPackageChangeDataRequest.prototype.setToPackage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 new_max_user_count = 3;
 * @return {number}
 */
proto.yartu.GetPackageChangeDataRequest.prototype.getNewMaxUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageChangeDataRequest} returns this
 */
proto.yartu.GetPackageChangeDataRequest.prototype.setNewMaxUserCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string package_period = 4;
 * @return {string}
 */
proto.yartu.GetPackageChangeDataRequest.prototype.getPackagePeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPackageChangeDataRequest} returns this
 */
proto.yartu.GetPackageChangeDataRequest.prototype.setPackagePeriod = function(value) {
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
proto.yartu.GetPackageChangeDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPackageChangeDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPackageChangeDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageChangeDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastPaidPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    packagePrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.yartu.GetPackageChangeDataResponse}
 */
proto.yartu.GetPackageChangeDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPackageChangeDataResponse;
  return proto.yartu.GetPackageChangeDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPackageChangeDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPackageChangeDataResponse}
 */
proto.yartu.GetPackageChangeDataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLastPaidPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPackagePrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
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
proto.yartu.GetPackageChangeDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPackageChangeDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPackageChangeDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPackageChangeDataResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLastPaidPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getPackagePrice();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetPackageChangeDataResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageChangeDataResponse} returns this
 */
proto.yartu.GetPackageChangeDataResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.GetPackageChangeDataResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPackageChangeDataResponse} returns this
 */
proto.yartu.GetPackageChangeDataResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetPackageChangeDataResponse} returns this
 */
proto.yartu.GetPackageChangeDataResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPackageChangeDataResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float last_paid_price = 3;
 * @return {number}
 */
proto.yartu.GetPackageChangeDataResponse.prototype.getLastPaidPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageChangeDataResponse} returns this
 */
proto.yartu.GetPackageChangeDataResponse.prototype.setLastPaidPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float package_price = 4;
 * @return {number}
 */
proto.yartu.GetPackageChangeDataResponse.prototype.getPackagePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageChangeDataResponse} returns this
 */
proto.yartu.GetPackageChangeDataResponse.prototype.setPackagePrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float amount = 5;
 * @return {number}
 */
proto.yartu.GetPackageChangeDataResponse.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPackageChangeDataResponse} returns this
 */
proto.yartu.GetPackageChangeDataResponse.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
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
proto.yartu.ListInvoicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListInvoicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListInvoicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.ListInvoicesRequest}
 */
proto.yartu.ListInvoicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListInvoicesRequest;
  return proto.yartu.ListInvoicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListInvoicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListInvoicesRequest}
 */
proto.yartu.ListInvoicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
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
proto.yartu.ListInvoicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListInvoicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListInvoicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.yartu.ListInvoicesRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListInvoicesRequest} returns this
 */
proto.yartu.ListInvoicesRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListInvoicesResponse.repeatedFields_ = [3];



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
proto.yartu.ListInvoicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListInvoicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListInvoicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Invoice.toObject, includeInstance)
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
 * @return {!proto.yartu.ListInvoicesResponse}
 */
proto.yartu.ListInvoicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListInvoicesResponse;
  return proto.yartu.ListInvoicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListInvoicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListInvoicesResponse}
 */
proto.yartu.ListInvoicesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Invoice;
      reader.readMessage(value,proto.yartu.Invoice.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.yartu.ListInvoicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListInvoicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListInvoicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListInvoicesResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.Invoice.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListInvoicesResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListInvoicesResponse} returns this
 */
proto.yartu.ListInvoicesResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ListInvoicesResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListInvoicesResponse} returns this
 */
proto.yartu.ListInvoicesResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListInvoicesResponse} returns this
 */
proto.yartu.ListInvoicesResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListInvoicesResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Invoice data = 3;
 * @return {!Array<!proto.yartu.Invoice>}
 */
proto.yartu.ListInvoicesResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Invoice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Invoice, 3));
};


/**
 * @param {!Array<!proto.yartu.Invoice>} value
 * @return {!proto.yartu.ListInvoicesResponse} returns this
*/
proto.yartu.ListInvoicesResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.Invoice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Invoice}
 */
proto.yartu.ListInvoicesResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.Invoice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListInvoicesResponse} returns this
 */
proto.yartu.ListInvoicesResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


goog.object.extend(module.exports, proto.yartu);

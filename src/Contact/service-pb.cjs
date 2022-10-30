// source: contact/grpc/service.proto
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

goog.exportSymbol('proto.yartu.Address', null, global);
goog.exportSymbol('proto.yartu.AddressBook', null, global);
goog.exportSymbol('proto.yartu.CloneContactRequest', null, global);
goog.exportSymbol('proto.yartu.CloneContactResponse', null, global);
goog.exportSymbol('proto.yartu.Contact', null, global);
goog.exportSymbol('proto.yartu.ContactMetaQuery', null, global);
goog.exportSymbol('proto.yartu.DeleteAddressBookRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteAddressBookResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteContactRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteContactResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteLabelRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteLabelResponse', null, global);
goog.exportSymbol('proto.yartu.DuplicateContact', null, global);
goog.exportSymbol('proto.yartu.DuplicateList', null, global);
goog.exportSymbol('proto.yartu.ExportContactRequest', null, global);
goog.exportSymbol('proto.yartu.ExportContactResponse', null, global);
goog.exportSymbol('proto.yartu.GetAddressBookRequest', null, global);
goog.exportSymbol('proto.yartu.GetAddressBookResponse', null, global);
goog.exportSymbol('proto.yartu.GetContactRequest', null, global);
goog.exportSymbol('proto.yartu.GetContactResponse', null, global);
goog.exportSymbol('proto.yartu.GetLabelRequest', null, global);
goog.exportSymbol('proto.yartu.GetLabelResponse', null, global);
goog.exportSymbol('proto.yartu.ImportContactRequest', null, global);
goog.exportSymbol('proto.yartu.ImportContactResponse', null, global);
goog.exportSymbol('proto.yartu.Label', null, global);
goog.exportSymbol('proto.yartu.ListAddressBookRequest', null, global);
goog.exportSymbol('proto.yartu.ListAddressBookResponse', null, global);
goog.exportSymbol('proto.yartu.ListContactRequest', null, global);
goog.exportSymbol('proto.yartu.ListContactResponse', null, global);
goog.exportSymbol('proto.yartu.ListDuplicateContactRequest', null, global);
goog.exportSymbol('proto.yartu.ListDuplicateContactResponse', null, global);
goog.exportSymbol('proto.yartu.ListEmailContactRequest', null, global);
goog.exportSymbol('proto.yartu.ListEmailContactResponse', null, global);
goog.exportSymbol('proto.yartu.ListFavoriteContactRequest', null, global);
goog.exportSymbol('proto.yartu.ListFavoriteContactResponse', null, global);
goog.exportSymbol('proto.yartu.ListLabelRequest', null, global);
goog.exportSymbol('proto.yartu.ListLabelResponse', null, global);
goog.exportSymbol('proto.yartu.ListPublicContactRequest', null, global);
goog.exportSymbol('proto.yartu.ListPublicContactResponse', null, global);
goog.exportSymbol('proto.yartu.PaginationMeta', null, global);
goog.exportSymbol('proto.yartu.Query', null, global);
goog.exportSymbol('proto.yartu.ShareAddressBookRequest', null, global);
goog.exportSymbol('proto.yartu.ShareAddressBookResponse', null, global);
goog.exportSymbol('proto.yartu.UnshareAddressBookRequest', null, global);
goog.exportSymbol('proto.yartu.UnshareAddressBookResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertAddressBookRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertAddressBookResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertContactLabelRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertContactLabelResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertContactRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertContactResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertContactStarRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertContactStarResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertFavoriteContactRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertFavoriteContactResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertLabelRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertLabelResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertMergeContactRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertMergeContactResponse', null, global);
goog.exportSymbol('proto.yartu.UserSharePermissionMeta', null, global);
goog.exportSymbol('proto.yartu.UserSharePermissionResult', null, global);
goog.exportSymbol('proto.yartu.davType', null, global);
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
proto.yartu.Query = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.Query.repeatedFields_, null);
};
goog.inherits(proto.yartu.Query, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Query.displayName = 'proto.yartu.Query';
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
proto.yartu.PaginationMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.PaginationMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.PaginationMeta.displayName = 'proto.yartu.PaginationMeta';
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
proto.yartu.UserSharePermissionMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UserSharePermissionMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UserSharePermissionMeta.displayName = 'proto.yartu.UserSharePermissionMeta';
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
proto.yartu.UserSharePermissionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UserSharePermissionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UserSharePermissionResult.displayName = 'proto.yartu.UserSharePermissionResult';
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
proto.yartu.AddressBook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.AddressBook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.AddressBook.displayName = 'proto.yartu.AddressBook';
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
proto.yartu.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Label.displayName = 'proto.yartu.Label';
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
proto.yartu.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Address.displayName = 'proto.yartu.Address';
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
proto.yartu.davType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.davType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.davType.displayName = 'proto.yartu.davType';
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
proto.yartu.ContactMetaQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ContactMetaQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ContactMetaQuery.displayName = 'proto.yartu.ContactMetaQuery';
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
proto.yartu.Contact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.Contact.repeatedFields_, null);
};
goog.inherits(proto.yartu.Contact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Contact.displayName = 'proto.yartu.Contact';
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
proto.yartu.GetAddressBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetAddressBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetAddressBookRequest.displayName = 'proto.yartu.GetAddressBookRequest';
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
proto.yartu.GetAddressBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetAddressBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetAddressBookResponse.displayName = 'proto.yartu.GetAddressBookResponse';
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
proto.yartu.UpsertAddressBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertAddressBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertAddressBookRequest.displayName = 'proto.yartu.UpsertAddressBookRequest';
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
proto.yartu.UpsertAddressBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertAddressBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertAddressBookResponse.displayName = 'proto.yartu.UpsertAddressBookResponse';
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
proto.yartu.DeleteAddressBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteAddressBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteAddressBookRequest.displayName = 'proto.yartu.DeleteAddressBookRequest';
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
proto.yartu.DeleteAddressBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteAddressBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteAddressBookResponse.displayName = 'proto.yartu.DeleteAddressBookResponse';
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
proto.yartu.ListAddressBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListAddressBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListAddressBookRequest.displayName = 'proto.yartu.ListAddressBookRequest';
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
proto.yartu.ListAddressBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListAddressBookResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListAddressBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListAddressBookResponse.displayName = 'proto.yartu.ListAddressBookResponse';
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
proto.yartu.ShareAddressBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ShareAddressBookRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.ShareAddressBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ShareAddressBookRequest.displayName = 'proto.yartu.ShareAddressBookRequest';
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
proto.yartu.ShareAddressBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ShareAddressBookResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ShareAddressBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ShareAddressBookResponse.displayName = 'proto.yartu.ShareAddressBookResponse';
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
proto.yartu.UnshareAddressBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UnshareAddressBookRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UnshareAddressBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnshareAddressBookRequest.displayName = 'proto.yartu.UnshareAddressBookRequest';
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
proto.yartu.UnshareAddressBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UnshareAddressBookResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.UnshareAddressBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnshareAddressBookResponse.displayName = 'proto.yartu.UnshareAddressBookResponse';
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
proto.yartu.UpsertContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertContactRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertContactRequest.displayName = 'proto.yartu.UpsertContactRequest';
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
proto.yartu.UpsertContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertContactResponse.displayName = 'proto.yartu.UpsertContactResponse';
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
proto.yartu.GetContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetContactRequest.displayName = 'proto.yartu.GetContactRequest';
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
proto.yartu.GetContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetContactResponse.displayName = 'proto.yartu.GetContactResponse';
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
proto.yartu.DeleteContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DeleteContactRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.DeleteContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteContactRequest.displayName = 'proto.yartu.DeleteContactRequest';
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
proto.yartu.DeleteContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteContactResponse.displayName = 'proto.yartu.DeleteContactResponse';
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
proto.yartu.ListContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListContactRequest.displayName = 'proto.yartu.ListContactRequest';
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
proto.yartu.ListContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListContactResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListContactResponse.displayName = 'proto.yartu.ListContactResponse';
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
proto.yartu.UpsertLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertLabelRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertLabelRequest.displayName = 'proto.yartu.UpsertLabelRequest';
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
proto.yartu.UpsertLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertLabelResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertLabelResponse.displayName = 'proto.yartu.UpsertLabelResponse';
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
proto.yartu.ListLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListLabelRequest.displayName = 'proto.yartu.ListLabelRequest';
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
proto.yartu.ListLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListLabelResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListLabelResponse.displayName = 'proto.yartu.ListLabelResponse';
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
proto.yartu.GetLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetLabelRequest.displayName = 'proto.yartu.GetLabelRequest';
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
proto.yartu.GetLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetLabelResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetLabelResponse.displayName = 'proto.yartu.GetLabelResponse';
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
proto.yartu.DeleteLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteLabelRequest.displayName = 'proto.yartu.DeleteLabelRequest';
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
proto.yartu.DeleteLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteLabelResponse.displayName = 'proto.yartu.DeleteLabelResponse';
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
proto.yartu.UpsertContactLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertContactLabelRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertContactLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertContactLabelRequest.displayName = 'proto.yartu.UpsertContactLabelRequest';
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
proto.yartu.UpsertContactLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertContactLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertContactLabelResponse.displayName = 'proto.yartu.UpsertContactLabelResponse';
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
proto.yartu.ListEmailContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListEmailContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailContactRequest.displayName = 'proto.yartu.ListEmailContactRequest';
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
proto.yartu.ListEmailContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListEmailContactResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListEmailContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListEmailContactResponse.displayName = 'proto.yartu.ListEmailContactResponse';
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
proto.yartu.ListFavoriteContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListFavoriteContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListFavoriteContactRequest.displayName = 'proto.yartu.ListFavoriteContactRequest';
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
proto.yartu.ListFavoriteContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListFavoriteContactResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListFavoriteContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListFavoriteContactResponse.displayName = 'proto.yartu.ListFavoriteContactResponse';
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
proto.yartu.UpsertFavoriteContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertFavoriteContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertFavoriteContactRequest.displayName = 'proto.yartu.UpsertFavoriteContactRequest';
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
proto.yartu.UpsertFavoriteContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertFavoriteContactResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertFavoriteContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertFavoriteContactResponse.displayName = 'proto.yartu.UpsertFavoriteContactResponse';
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
proto.yartu.ListPublicContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListPublicContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListPublicContactRequest.displayName = 'proto.yartu.ListPublicContactRequest';
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
proto.yartu.ListPublicContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListPublicContactResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListPublicContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListPublicContactResponse.displayName = 'proto.yartu.ListPublicContactResponse';
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
proto.yartu.ListDuplicateContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListDuplicateContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListDuplicateContactRequest.displayName = 'proto.yartu.ListDuplicateContactRequest';
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
proto.yartu.DuplicateContact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DuplicateContact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DuplicateContact.displayName = 'proto.yartu.DuplicateContact';
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
proto.yartu.DuplicateList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DuplicateList.repeatedFields_, null);
};
goog.inherits(proto.yartu.DuplicateList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DuplicateList.displayName = 'proto.yartu.DuplicateList';
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
proto.yartu.ListDuplicateContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListDuplicateContactResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListDuplicateContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListDuplicateContactResponse.displayName = 'proto.yartu.ListDuplicateContactResponse';
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
proto.yartu.UpsertMergeContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertMergeContactRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertMergeContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertMergeContactRequest.displayName = 'proto.yartu.UpsertMergeContactRequest';
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
proto.yartu.UpsertMergeContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertMergeContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertMergeContactResponse.displayName = 'proto.yartu.UpsertMergeContactResponse';
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
proto.yartu.ExportContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ExportContactRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.ExportContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ExportContactRequest.displayName = 'proto.yartu.ExportContactRequest';
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
proto.yartu.ExportContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ExportContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ExportContactResponse.displayName = 'proto.yartu.ExportContactResponse';
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
proto.yartu.ImportContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ImportContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ImportContactRequest.displayName = 'proto.yartu.ImportContactRequest';
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
proto.yartu.ImportContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ImportContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ImportContactResponse.displayName = 'proto.yartu.ImportContactResponse';
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
proto.yartu.CloneContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CloneContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CloneContactRequest.displayName = 'proto.yartu.CloneContactRequest';
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
proto.yartu.CloneContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CloneContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CloneContactResponse.displayName = 'proto.yartu.CloneContactResponse';
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
proto.yartu.UpsertContactStarRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertContactStarRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertContactStarRequest.displayName = 'proto.yartu.UpsertContactStarRequest';
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
proto.yartu.UpsertContactStarResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertContactStarResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertContactStarResponse.displayName = 'proto.yartu.UpsertContactStarResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.Query.repeatedFields_ = [5];



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
proto.yartu.Query.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Query.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Query} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Query.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    perPage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sortBy: jspb.Message.getFieldWithDefault(msg, 4, ""),
    searchFieldsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.yartu.Query}
 */
proto.yartu.Query.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Query;
  return proto.yartu.Query.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Query} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Query}
 */
proto.yartu.Query.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPerPage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSortBy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSearchFields(value);
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
proto.yartu.Query.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Query.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Query} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Query.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPerPage();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSortBy();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSearchFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.yartu.Query.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Query} returns this
 */
proto.yartu.Query.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page = 2;
 * @return {number}
 */
proto.yartu.Query.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Query} returns this
 */
proto.yartu.Query.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 per_page = 3;
 * @return {number}
 */
proto.yartu.Query.prototype.getPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Query} returns this
 */
proto.yartu.Query.prototype.setPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string sort_by = 4;
 * @return {string}
 */
proto.yartu.Query.prototype.getSortBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Query} returns this
 */
proto.yartu.Query.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string search_fields = 5;
 * @return {!Array<string>}
 */
proto.yartu.Query.prototype.getSearchFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.Query} returns this
 */
proto.yartu.Query.prototype.setSearchFieldsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.Query} returns this
 */
proto.yartu.Query.prototype.addSearchFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Query} returns this
 */
proto.yartu.Query.prototype.clearSearchFieldsList = function() {
  return this.setSearchFieldsList([]);
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
proto.yartu.PaginationMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.PaginationMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.PaginationMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PaginationMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentPage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    perPage: jspb.Message.getFieldWithDefault(msg, 2, 0),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.yartu.PaginationMeta}
 */
proto.yartu.PaginationMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.PaginationMeta;
  return proto.yartu.PaginationMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.PaginationMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.PaginationMeta}
 */
proto.yartu.PaginationMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPerPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
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
proto.yartu.PaginationMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.PaginationMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.PaginationMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PaginationMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentPage();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPerPage();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 current_page = 1;
 * @return {number}
 */
proto.yartu.PaginationMeta.prototype.getCurrentPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PaginationMeta} returns this
 */
proto.yartu.PaginationMeta.prototype.setCurrentPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 per_page = 2;
 * @return {number}
 */
proto.yartu.PaginationMeta.prototype.getPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PaginationMeta} returns this
 */
proto.yartu.PaginationMeta.prototype.setPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.yartu.PaginationMeta.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PaginationMeta} returns this
 */
proto.yartu.PaginationMeta.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 total_count = 4;
 * @return {number}
 */
proto.yartu.PaginationMeta.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PaginationMeta} returns this
 */
proto.yartu.PaginationMeta.prototype.setTotalCount = function(value) {
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
proto.yartu.UserSharePermissionMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UserSharePermissionMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UserSharePermissionMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UserSharePermissionMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.yartu.UserSharePermissionMeta}
 */
proto.yartu.UserSharePermissionMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UserSharePermissionMeta;
  return proto.yartu.UserSharePermissionMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UserSharePermissionMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UserSharePermissionMeta}
 */
proto.yartu.UserSharePermissionMeta.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UserSharePermissionMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UserSharePermissionMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UserSharePermissionMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UserSharePermissionMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
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
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.yartu.UserSharePermissionMeta.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UserSharePermissionMeta} returns this
 */
proto.yartu.UserSharePermissionMeta.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.yartu.UserSharePermissionMeta.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UserSharePermissionMeta} returns this
 */
proto.yartu.UserSharePermissionMeta.prototype.setPermission = function(value) {
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
proto.yartu.UserSharePermissionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UserSharePermissionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UserSharePermissionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UserSharePermissionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    username: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.UserSharePermissionResult}
 */
proto.yartu.UserSharePermissionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UserSharePermissionResult;
  return proto.yartu.UserSharePermissionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UserSharePermissionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UserSharePermissionResult}
 */
proto.yartu.UserSharePermissionResult.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
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
proto.yartu.UserSharePermissionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UserSharePermissionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UserSharePermissionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UserSharePermissionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUsername();
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
proto.yartu.UserSharePermissionResult.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UserSharePermissionResult} returns this
 */
proto.yartu.UserSharePermissionResult.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.yartu.UserSharePermissionResult.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UserSharePermissionResult} returns this
 */
proto.yartu.UserSharePermissionResult.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.yartu.UserSharePermissionResult.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UserSharePermissionResult} returns this
 */
proto.yartu.UserSharePermissionResult.prototype.setUsername = function(value) {
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
proto.yartu.AddressBook.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.AddressBook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.AddressBook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.AddressBook.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    groupId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    principaluri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    displayname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 6, ""),
    description: jspb.Message.getFieldWithDefault(msg, 7, ""),
    synctoken: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pb_default: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.yartu.AddressBook}
 */
proto.yartu.AddressBook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.AddressBook;
  return proto.yartu.AddressBook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.AddressBook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.AddressBook}
 */
proto.yartu.AddressBook.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrincipaluri(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSynctoken(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefault(value);
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
proto.yartu.AddressBook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.AddressBook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.AddressBook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.AddressBook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPrincipaluri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSynctoken();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getDefault();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.AddressBook.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.yartu.AddressBook.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 group_id = 3;
 * @return {number}
 */
proto.yartu.AddressBook.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string principaluri = 4;
 * @return {string}
 */
proto.yartu.AddressBook.prototype.getPrincipaluri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setPrincipaluri = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string displayname = 5;
 * @return {string}
 */
proto.yartu.AddressBook.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string uri = 6;
 * @return {string}
 */
proto.yartu.AddressBook.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.yartu.AddressBook.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 synctoken = 8;
 * @return {number}
 */
proto.yartu.AddressBook.prototype.getSynctoken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setSynctoken = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 default = 9;
 * @return {number}
 */
proto.yartu.AddressBook.prototype.getDefault = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.AddressBook} returns this
 */
proto.yartu.AddressBook.prototype.setDefault = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
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
proto.yartu.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    color: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.Label}
 */
proto.yartu.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Label;
  return proto.yartu.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Label}
 */
proto.yartu.Label.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setColor(value);
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
proto.yartu.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Label.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getColor();
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
proto.yartu.Label.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Label} returns this
 */
proto.yartu.Label.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.Label.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Label} returns this
 */
proto.yartu.Label.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string color = 3;
 * @return {string}
 */
proto.yartu.Label.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Label} returns this
 */
proto.yartu.Label.prototype.setColor = function(value) {
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
proto.yartu.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    street: jspb.Message.getFieldWithDefault(msg, 2, ""),
    city: jspb.Message.getFieldWithDefault(msg, 3, ""),
    region: jspb.Message.getFieldWithDefault(msg, 4, ""),
    postalcode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    country: jspb.Message.getFieldWithDefault(msg, 6, ""),
    pb_default: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.yartu.Address}
 */
proto.yartu.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Address;
  return proto.yartu.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Address}
 */
proto.yartu.Address.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStreet(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalcode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefault(value);
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
proto.yartu.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
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
  f = message.getDefault();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.yartu.Address.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string street = 2;
 * @return {string}
 */
proto.yartu.Address.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.setStreet = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.clearStreet = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Address.prototype.hasStreet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string city = 3;
 * @return {string}
 */
proto.yartu.Address.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.setCity = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.clearCity = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Address.prototype.hasCity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string region = 4;
 * @return {string}
 */
proto.yartu.Address.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Address.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string postalcode = 5;
 * @return {string}
 */
proto.yartu.Address.prototype.getPostalcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.setPostalcode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.clearPostalcode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Address.prototype.hasPostalcode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string country = 6;
 * @return {string}
 */
proto.yartu.Address.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.setCountry = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.clearCountry = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Address.prototype.hasCountry = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool default = 7;
 * @return {boolean}
 */
proto.yartu.Address.prototype.getDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Address} returns this
 */
proto.yartu.Address.prototype.setDefault = function(value) {
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
proto.yartu.davType.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.davType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.davType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.davType.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pb_default: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.davType}
 */
proto.yartu.davType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.davType;
  return proto.yartu.davType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.davType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.davType}
 */
proto.yartu.davType.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefault(value);
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
proto.yartu.davType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.davType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.davType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.davType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
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
  f = message.getDefault();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.yartu.davType.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.davType} returns this
 */
proto.yartu.davType.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.yartu.davType.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.davType} returns this
 */
proto.yartu.davType.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool default = 3;
 * @return {boolean}
 */
proto.yartu.davType.prototype.getDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.davType} returns this
 */
proto.yartu.davType.prototype.setDefault = function(value) {
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
proto.yartu.ContactMetaQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ContactMetaQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ContactMetaQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ContactMetaQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
    starred: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    frequently: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.ContactMetaQuery}
 */
proto.yartu.ContactMetaQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ContactMetaQuery;
  return proto.yartu.ContactMetaQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ContactMetaQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ContactMetaQuery}
 */
proto.yartu.ContactMetaQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStarred(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrequently(value);
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
proto.yartu.ContactMetaQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ContactMetaQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ContactMetaQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ContactMetaQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
 * optional string label = 1;
 * @return {string}
 */
proto.yartu.ContactMetaQuery.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ContactMetaQuery} returns this
 */
proto.yartu.ContactMetaQuery.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContactMetaQuery} returns this
 */
proto.yartu.ContactMetaQuery.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContactMetaQuery.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool starred = 2;
 * @return {boolean}
 */
proto.yartu.ContactMetaQuery.prototype.getStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ContactMetaQuery} returns this
 */
proto.yartu.ContactMetaQuery.prototype.setStarred = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContactMetaQuery} returns this
 */
proto.yartu.ContactMetaQuery.prototype.clearStarred = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContactMetaQuery.prototype.hasStarred = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool frequently = 3;
 * @return {boolean}
 */
proto.yartu.ContactMetaQuery.prototype.getFrequently = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ContactMetaQuery} returns this
 */
proto.yartu.ContactMetaQuery.prototype.setFrequently = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ContactMetaQuery} returns this
 */
proto.yartu.ContactMetaQuery.prototype.clearFrequently = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ContactMetaQuery.prototype.hasFrequently = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.Contact.repeatedFields_ = [9,19,20,21,22];



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
proto.yartu.Contact.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Contact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Contact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Contact.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    addressBook: (f = msg.getAddressBook()) && proto.yartu.AddressBook.toObject(includeInstance, f),
    carddata: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    etag: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lastmodified: jspb.Message.getFieldWithDefault(msg, 7, 0),
    contactType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    proto.yartu.Label.toObject, includeInstance),
    isStarred: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    uid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    photo: jspb.Message.getFieldWithDefault(msg, 12, ""),
    title: jspb.Message.getFieldWithDefault(msg, 13, ""),
    company: jspb.Message.getFieldWithDefault(msg, 14, ""),
    name: jspb.Message.getFieldWithDefault(msg, 15, ""),
    middleName: jspb.Message.getFieldWithDefault(msg, 16, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 17, ""),
    birthday: jspb.Message.getFieldWithDefault(msg, 18, 0),
    emailList: jspb.Message.toObjectList(msg.getEmailList(),
    proto.yartu.davType.toObject, includeInstance),
    phoneList: jspb.Message.toObjectList(msg.getPhoneList(),
    proto.yartu.davType.toObject, includeInstance),
    webList: jspb.Message.toObjectList(msg.getWebList(),
    proto.yartu.davType.toObject, includeInstance),
    addressList: jspb.Message.toObjectList(msg.getAddressList(),
    proto.yartu.Address.toObject, includeInstance),
    note: jspb.Message.getFieldWithDefault(msg, 23, ""),
    sharedWithMe: jspb.Message.getBooleanFieldWithDefault(msg, 24, false)
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
 * @return {!proto.yartu.Contact}
 */
proto.yartu.Contact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Contact;
  return proto.yartu.Contact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Contact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Contact}
 */
proto.yartu.Contact.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.AddressBook;
      reader.readMessage(value,proto.yartu.AddressBook.deserializeBinaryFromReader);
      msg.setAddressBook(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCarddata(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastmodified(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactType(value);
      break;
    case 9:
      var value = new proto.yartu.Label;
      reader.readMessage(value,proto.yartu.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStarred(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoto(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompany(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiddleName(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBirthday(value);
      break;
    case 19:
      var value = new proto.yartu.davType;
      reader.readMessage(value,proto.yartu.davType.deserializeBinaryFromReader);
      msg.addEmail(value);
      break;
    case 20:
      var value = new proto.yartu.davType;
      reader.readMessage(value,proto.yartu.davType.deserializeBinaryFromReader);
      msg.addPhone(value);
      break;
    case 21:
      var value = new proto.yartu.davType;
      reader.readMessage(value,proto.yartu.davType.deserializeBinaryFromReader);
      msg.addWeb(value);
      break;
    case 22:
      var value = new proto.yartu.Address;
      reader.readMessage(value,proto.yartu.Address.deserializeBinaryFromReader);
      msg.addAddress(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSharedWithMe(value);
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
proto.yartu.Contact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Contact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Contact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Contact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAddressBook();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.AddressBook.serializeBinaryToWriter
    );
  }
  f = message.getCarddata();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getLastmodified();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getContactType();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yartu.Label.serializeBinaryToWriter
    );
  }
  f = message.getIsStarred();
  if (f) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getEmailList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.yartu.davType.serializeBinaryToWriter
    );
  }
  f = message.getPhoneList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.yartu.davType.serializeBinaryToWriter
    );
  }
  f = message.getWebList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.yartu.davType.serializeBinaryToWriter
    );
  }
  f = message.getAddressList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.yartu.Address.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeString(
      23,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeBool(
      24,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.Contact.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional AddressBook address_book = 2;
 * @return {?proto.yartu.AddressBook}
 */
proto.yartu.Contact.prototype.getAddressBook = function() {
  return /** @type{?proto.yartu.AddressBook} */ (
    jspb.Message.getWrapperField(this, proto.yartu.AddressBook, 2));
};


/**
 * @param {?proto.yartu.AddressBook|undefined} value
 * @return {!proto.yartu.Contact} returns this
*/
proto.yartu.Contact.prototype.setAddressBook = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearAddressBook = function() {
  return this.setAddressBook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasAddressBook = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string carddata = 3;
 * @return {string}
 */
proto.yartu.Contact.prototype.getCarddata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setCarddata = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string uri = 4;
 * @return {string}
 */
proto.yartu.Contact.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string etag = 5;
 * @return {string}
 */
proto.yartu.Contact.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 size = 6;
 * @return {number}
 */
proto.yartu.Contact.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 lastmodified = 7;
 * @return {number}
 */
proto.yartu.Contact.prototype.getLastmodified = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setLastmodified = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 contact_type = 8;
 * @return {number}
 */
proto.yartu.Contact.prototype.getContactType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setContactType = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated Label labels = 9;
 * @return {!Array<!proto.yartu.Label>}
 */
proto.yartu.Contact.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.yartu.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Label, 9));
};


/**
 * @param {!Array<!proto.yartu.Label>} value
 * @return {!proto.yartu.Contact} returns this
*/
proto.yartu.Contact.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yartu.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Label}
 */
proto.yartu.Contact.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yartu.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional bool is_starred = 10;
 * @return {boolean}
 */
proto.yartu.Contact.prototype.getIsStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setIsStarred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string uid = 11;
 * @return {string}
 */
proto.yartu.Contact.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setUid = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearUid = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasUid = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string photo = 12;
 * @return {string}
 */
proto.yartu.Contact.prototype.getPhoto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setPhoto = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearPhoto = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasPhoto = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string title = 13;
 * @return {string}
 */
proto.yartu.Contact.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string company = 14;
 * @return {string}
 */
proto.yartu.Contact.prototype.getCompany = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setCompany = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearCompany = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasCompany = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string name = 15;
 * @return {string}
 */
proto.yartu.Contact.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setName = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearName = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasName = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string middle_name = 16;
 * @return {string}
 */
proto.yartu.Contact.prototype.getMiddleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setMiddleName = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearMiddleName = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasMiddleName = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string surname = 17;
 * @return {string}
 */
proto.yartu.Contact.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setSurname = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearSurname = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasSurname = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int64 birthday = 18;
 * @return {number}
 */
proto.yartu.Contact.prototype.getBirthday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setBirthday = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearBirthday = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasBirthday = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * repeated davType email = 19;
 * @return {!Array<!proto.yartu.davType>}
 */
proto.yartu.Contact.prototype.getEmailList = function() {
  return /** @type{!Array<!proto.yartu.davType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.davType, 19));
};


/**
 * @param {!Array<!proto.yartu.davType>} value
 * @return {!proto.yartu.Contact} returns this
*/
proto.yartu.Contact.prototype.setEmailList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.yartu.davType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.davType}
 */
proto.yartu.Contact.prototype.addEmail = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.yartu.davType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearEmailList = function() {
  return this.setEmailList([]);
};


/**
 * repeated davType phone = 20;
 * @return {!Array<!proto.yartu.davType>}
 */
proto.yartu.Contact.prototype.getPhoneList = function() {
  return /** @type{!Array<!proto.yartu.davType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.davType, 20));
};


/**
 * @param {!Array<!proto.yartu.davType>} value
 * @return {!proto.yartu.Contact} returns this
*/
proto.yartu.Contact.prototype.setPhoneList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.yartu.davType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.davType}
 */
proto.yartu.Contact.prototype.addPhone = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.yartu.davType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearPhoneList = function() {
  return this.setPhoneList([]);
};


/**
 * repeated davType web = 21;
 * @return {!Array<!proto.yartu.davType>}
 */
proto.yartu.Contact.prototype.getWebList = function() {
  return /** @type{!Array<!proto.yartu.davType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.davType, 21));
};


/**
 * @param {!Array<!proto.yartu.davType>} value
 * @return {!proto.yartu.Contact} returns this
*/
proto.yartu.Contact.prototype.setWebList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.yartu.davType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.davType}
 */
proto.yartu.Contact.prototype.addWeb = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.yartu.davType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearWebList = function() {
  return this.setWebList([]);
};


/**
 * repeated Address address = 22;
 * @return {!Array<!proto.yartu.Address>}
 */
proto.yartu.Contact.prototype.getAddressList = function() {
  return /** @type{!Array<!proto.yartu.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Address, 22));
};


/**
 * @param {!Array<!proto.yartu.Address>} value
 * @return {!proto.yartu.Contact} returns this
*/
proto.yartu.Contact.prototype.setAddressList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.yartu.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Address}
 */
proto.yartu.Contact.prototype.addAddress = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.yartu.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearAddressList = function() {
  return this.setAddressList([]);
};


/**
 * optional string note = 23;
 * @return {string}
 */
proto.yartu.Contact.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setNote = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearNote = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasNote = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bool shared_with_me = 24;
 * @return {boolean}
 */
proto.yartu.Contact.prototype.getSharedWithMe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.setSharedWithMe = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Contact} returns this
 */
proto.yartu.Contact.prototype.clearSharedWithMe = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Contact.prototype.hasSharedWithMe = function() {
  return jspb.Message.getField(this, 24) != null;
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
proto.yartu.GetAddressBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetAddressBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetAddressBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetAddressBookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GetAddressBookRequest}
 */
proto.yartu.GetAddressBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetAddressBookRequest;
  return proto.yartu.GetAddressBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetAddressBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetAddressBookRequest}
 */
proto.yartu.GetAddressBookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GetAddressBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetAddressBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetAddressBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetAddressBookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.GetAddressBookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetAddressBookRequest} returns this
 */
proto.yartu.GetAddressBookRequest.prototype.setId = function(value) {
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
proto.yartu.GetAddressBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetAddressBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetAddressBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetAddressBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.yartu.AddressBook.toObject(includeInstance, f)
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
 * @return {!proto.yartu.GetAddressBookResponse}
 */
proto.yartu.GetAddressBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetAddressBookResponse;
  return proto.yartu.GetAddressBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetAddressBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetAddressBookResponse}
 */
proto.yartu.GetAddressBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.AddressBook;
      reader.readMessage(value,proto.yartu.AddressBook.deserializeBinaryFromReader);
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
proto.yartu.GetAddressBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetAddressBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetAddressBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetAddressBookResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.AddressBook.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetAddressBookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetAddressBookResponse} returns this
 */
proto.yartu.GetAddressBookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.GetAddressBookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetAddressBookResponse} returns this
 */
proto.yartu.GetAddressBookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetAddressBookResponse} returns this
 */
proto.yartu.GetAddressBookResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetAddressBookResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AddressBook data = 3;
 * @return {?proto.yartu.AddressBook}
 */
proto.yartu.GetAddressBookResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.AddressBook} */ (
    jspb.Message.getWrapperField(this, proto.yartu.AddressBook, 3));
};


/**
 * @param {?proto.yartu.AddressBook|undefined} value
 * @return {!proto.yartu.GetAddressBookResponse} returns this
*/
proto.yartu.GetAddressBookResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetAddressBookResponse} returns this
 */
proto.yartu.GetAddressBookResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetAddressBookResponse.prototype.hasData = function() {
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
proto.yartu.UpsertAddressBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertAddressBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertAddressBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAddressBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.UpsertAddressBookRequest}
 */
proto.yartu.UpsertAddressBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertAddressBookRequest;
  return proto.yartu.UpsertAddressBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertAddressBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertAddressBookRequest}
 */
proto.yartu.UpsertAddressBookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
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
proto.yartu.UpsertAddressBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertAddressBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertAddressBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAddressBookRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDescription();
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
proto.yartu.UpsertAddressBookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertAddressBookRequest} returns this
 */
proto.yartu.UpsertAddressBookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.UpsertAddressBookRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAddressBookRequest} returns this
 */
proto.yartu.UpsertAddressBookRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yartu.UpsertAddressBookRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAddressBookRequest} returns this
 */
proto.yartu.UpsertAddressBookRequest.prototype.setDescription = function(value) {
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
proto.yartu.UpsertAddressBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertAddressBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertAddressBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAddressBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addressBook: (f = msg.getAddressBook()) && proto.yartu.AddressBook.toObject(includeInstance, f)
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
 * @return {!proto.yartu.UpsertAddressBookResponse}
 */
proto.yartu.UpsertAddressBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertAddressBookResponse;
  return proto.yartu.UpsertAddressBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertAddressBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertAddressBookResponse}
 */
proto.yartu.UpsertAddressBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.AddressBook;
      reader.readMessage(value,proto.yartu.AddressBook.deserializeBinaryFromReader);
      msg.setAddressBook(value);
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
proto.yartu.UpsertAddressBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertAddressBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertAddressBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertAddressBookResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAddressBook();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.AddressBook.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertAddressBookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertAddressBookResponse} returns this
 */
proto.yartu.UpsertAddressBookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertAddressBookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertAddressBookResponse} returns this
 */
proto.yartu.UpsertAddressBookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertAddressBookResponse} returns this
 */
proto.yartu.UpsertAddressBookResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAddressBookResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AddressBook address_book = 3;
 * @return {?proto.yartu.AddressBook}
 */
proto.yartu.UpsertAddressBookResponse.prototype.getAddressBook = function() {
  return /** @type{?proto.yartu.AddressBook} */ (
    jspb.Message.getWrapperField(this, proto.yartu.AddressBook, 3));
};


/**
 * @param {?proto.yartu.AddressBook|undefined} value
 * @return {!proto.yartu.UpsertAddressBookResponse} returns this
*/
proto.yartu.UpsertAddressBookResponse.prototype.setAddressBook = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertAddressBookResponse} returns this
 */
proto.yartu.UpsertAddressBookResponse.prototype.clearAddressBook = function() {
  return this.setAddressBook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertAddressBookResponse.prototype.hasAddressBook = function() {
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
proto.yartu.DeleteAddressBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteAddressBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteAddressBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteAddressBookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteAddressBookRequest}
 */
proto.yartu.DeleteAddressBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteAddressBookRequest;
  return proto.yartu.DeleteAddressBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteAddressBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteAddressBookRequest}
 */
proto.yartu.DeleteAddressBookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteAddressBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteAddressBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteAddressBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteAddressBookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteAddressBookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteAddressBookRequest} returns this
 */
proto.yartu.DeleteAddressBookRequest.prototype.setId = function(value) {
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
proto.yartu.DeleteAddressBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteAddressBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteAddressBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteAddressBookResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteAddressBookResponse}
 */
proto.yartu.DeleteAddressBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteAddressBookResponse;
  return proto.yartu.DeleteAddressBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteAddressBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteAddressBookResponse}
 */
proto.yartu.DeleteAddressBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteAddressBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteAddressBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteAddressBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteAddressBookResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteAddressBookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteAddressBookResponse} returns this
 */
proto.yartu.DeleteAddressBookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteAddressBookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteAddressBookResponse} returns this
 */
proto.yartu.DeleteAddressBookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteAddressBookResponse} returns this
 */
proto.yartu.DeleteAddressBookResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteAddressBookResponse.prototype.hasMessage = function() {
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
proto.yartu.ListAddressBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListAddressBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListAddressBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListAddressBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.yartu.Query.toObject(includeInstance, f)
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
 * @return {!proto.yartu.ListAddressBookRequest}
 */
proto.yartu.ListAddressBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListAddressBookRequest;
  return proto.yartu.ListAddressBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListAddressBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListAddressBookRequest}
 */
proto.yartu.ListAddressBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yartu.Query;
      reader.readMessage(value,proto.yartu.Query.deserializeBinaryFromReader);
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
proto.yartu.ListAddressBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListAddressBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListAddressBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListAddressBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yartu.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.yartu.Query}
 */
proto.yartu.ListAddressBookRequest.prototype.getQuery = function() {
  return /** @type{?proto.yartu.Query} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Query, 1));
};


/**
 * @param {?proto.yartu.Query|undefined} value
 * @return {!proto.yartu.ListAddressBookRequest} returns this
*/
proto.yartu.ListAddressBookRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListAddressBookRequest} returns this
 */
proto.yartu.ListAddressBookRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListAddressBookRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListAddressBookResponse.repeatedFields_ = [2];



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
proto.yartu.ListAddressBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListAddressBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListAddressBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListAddressBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.AddressBook.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListAddressBookResponse}
 */
proto.yartu.ListAddressBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListAddressBookResponse;
  return proto.yartu.ListAddressBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListAddressBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListAddressBookResponse}
 */
proto.yartu.ListAddressBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.AddressBook;
      reader.readMessage(value,proto.yartu.AddressBook.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.ListAddressBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListAddressBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListAddressBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListAddressBookResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.AddressBook.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListAddressBookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListAddressBookResponse} returns this
 */
proto.yartu.ListAddressBookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AddressBook data = 2;
 * @return {!Array<!proto.yartu.AddressBook>}
 */
proto.yartu.ListAddressBookResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.AddressBook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.AddressBook, 2));
};


/**
 * @param {!Array<!proto.yartu.AddressBook>} value
 * @return {!proto.yartu.ListAddressBookResponse} returns this
*/
proto.yartu.ListAddressBookResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.AddressBook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.AddressBook}
 */
proto.yartu.ListAddressBookResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.AddressBook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListAddressBookResponse} returns this
 */
proto.yartu.ListAddressBookResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.ListAddressBookResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListAddressBookResponse} returns this
*/
proto.yartu.ListAddressBookResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListAddressBookResponse} returns this
 */
proto.yartu.ListAddressBookResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListAddressBookResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListAddressBookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListAddressBookResponse} returns this
 */
proto.yartu.ListAddressBookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListAddressBookResponse} returns this
 */
proto.yartu.ListAddressBookResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListAddressBookResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ShareAddressBookRequest.repeatedFields_ = [2];



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
proto.yartu.ShareAddressBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ShareAddressBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ShareAddressBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareAddressBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.yartu.UserSharePermissionMeta.toObject, includeInstance)
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
 * @return {!proto.yartu.ShareAddressBookRequest}
 */
proto.yartu.ShareAddressBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ShareAddressBookRequest;
  return proto.yartu.ShareAddressBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ShareAddressBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ShareAddressBookRequest}
 */
proto.yartu.ShareAddressBookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UserSharePermissionMeta;
      reader.readMessage(value,proto.yartu.UserSharePermissionMeta.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.yartu.ShareAddressBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ShareAddressBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ShareAddressBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareAddressBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.UserSharePermissionMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.ShareAddressBookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ShareAddressBookRequest} returns this
 */
proto.yartu.ShareAddressBookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserSharePermissionMeta permissions = 2;
 * @return {!Array<!proto.yartu.UserSharePermissionMeta>}
 */
proto.yartu.ShareAddressBookRequest.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.yartu.UserSharePermissionMeta>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.UserSharePermissionMeta, 2));
};


/**
 * @param {!Array<!proto.yartu.UserSharePermissionMeta>} value
 * @return {!proto.yartu.ShareAddressBookRequest} returns this
*/
proto.yartu.ShareAddressBookRequest.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.UserSharePermissionMeta=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.UserSharePermissionMeta}
 */
proto.yartu.ShareAddressBookRequest.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.UserSharePermissionMeta, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ShareAddressBookRequest} returns this
 */
proto.yartu.ShareAddressBookRequest.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ShareAddressBookResponse.repeatedFields_ = [2];



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
proto.yartu.ShareAddressBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ShareAddressBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ShareAddressBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareAddressBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.UserSharePermissionResult.toObject, includeInstance),
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
 * @return {!proto.yartu.ShareAddressBookResponse}
 */
proto.yartu.ShareAddressBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ShareAddressBookResponse;
  return proto.yartu.ShareAddressBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ShareAddressBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ShareAddressBookResponse}
 */
proto.yartu.ShareAddressBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UserSharePermissionResult;
      reader.readMessage(value,proto.yartu.UserSharePermissionResult.deserializeBinaryFromReader);
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
proto.yartu.ShareAddressBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ShareAddressBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ShareAddressBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareAddressBookResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.UserSharePermissionResult.serializeBinaryToWriter
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
proto.yartu.ShareAddressBookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ShareAddressBookResponse} returns this
 */
proto.yartu.ShareAddressBookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserSharePermissionResult data = 2;
 * @return {!Array<!proto.yartu.UserSharePermissionResult>}
 */
proto.yartu.ShareAddressBookResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.UserSharePermissionResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.UserSharePermissionResult, 2));
};


/**
 * @param {!Array<!proto.yartu.UserSharePermissionResult>} value
 * @return {!proto.yartu.ShareAddressBookResponse} returns this
*/
proto.yartu.ShareAddressBookResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.UserSharePermissionResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.UserSharePermissionResult}
 */
proto.yartu.ShareAddressBookResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.UserSharePermissionResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ShareAddressBookResponse} returns this
 */
proto.yartu.ShareAddressBookResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ShareAddressBookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ShareAddressBookResponse} returns this
 */
proto.yartu.ShareAddressBookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ShareAddressBookResponse} returns this
 */
proto.yartu.ShareAddressBookResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ShareAddressBookResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UnshareAddressBookRequest.repeatedFields_ = [2];



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
proto.yartu.UnshareAddressBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnshareAddressBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnshareAddressBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareAddressBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.yartu.UserSharePermissionMeta.toObject, includeInstance),
    exit: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.UnshareAddressBookRequest}
 */
proto.yartu.UnshareAddressBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnshareAddressBookRequest;
  return proto.yartu.UnshareAddressBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnshareAddressBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnshareAddressBookRequest}
 */
proto.yartu.UnshareAddressBookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UserSharePermissionMeta;
      reader.readMessage(value,proto.yartu.UserSharePermissionMeta.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExit(value);
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
proto.yartu.UnshareAddressBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnshareAddressBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnshareAddressBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareAddressBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.UserSharePermissionMeta.serializeBinaryToWriter
    );
  }
  f = message.getExit();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UnshareAddressBookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UnshareAddressBookRequest} returns this
 */
proto.yartu.UnshareAddressBookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserSharePermissionMeta permissions = 2;
 * @return {!Array<!proto.yartu.UserSharePermissionMeta>}
 */
proto.yartu.UnshareAddressBookRequest.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.yartu.UserSharePermissionMeta>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.UserSharePermissionMeta, 2));
};


/**
 * @param {!Array<!proto.yartu.UserSharePermissionMeta>} value
 * @return {!proto.yartu.UnshareAddressBookRequest} returns this
*/
proto.yartu.UnshareAddressBookRequest.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.UserSharePermissionMeta=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.UserSharePermissionMeta}
 */
proto.yartu.UnshareAddressBookRequest.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.UserSharePermissionMeta, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UnshareAddressBookRequest} returns this
 */
proto.yartu.UnshareAddressBookRequest.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional bool exit = 3;
 * @return {boolean}
 */
proto.yartu.UnshareAddressBookRequest.prototype.getExit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UnshareAddressBookRequest} returns this
 */
proto.yartu.UnshareAddressBookRequest.prototype.setExit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UnshareAddressBookResponse.repeatedFields_ = [2];



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
proto.yartu.UnshareAddressBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnshareAddressBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnshareAddressBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareAddressBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.UserSharePermissionResult.toObject, includeInstance),
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
 * @return {!proto.yartu.UnshareAddressBookResponse}
 */
proto.yartu.UnshareAddressBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnshareAddressBookResponse;
  return proto.yartu.UnshareAddressBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnshareAddressBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnshareAddressBookResponse}
 */
proto.yartu.UnshareAddressBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UserSharePermissionResult;
      reader.readMessage(value,proto.yartu.UserSharePermissionResult.deserializeBinaryFromReader);
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
proto.yartu.UnshareAddressBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnshareAddressBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnshareAddressBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareAddressBookResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.UserSharePermissionResult.serializeBinaryToWriter
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
proto.yartu.UnshareAddressBookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UnshareAddressBookResponse} returns this
 */
proto.yartu.UnshareAddressBookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserSharePermissionResult data = 2;
 * @return {!Array<!proto.yartu.UserSharePermissionResult>}
 */
proto.yartu.UnshareAddressBookResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.UserSharePermissionResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.UserSharePermissionResult, 2));
};


/**
 * @param {!Array<!proto.yartu.UserSharePermissionResult>} value
 * @return {!proto.yartu.UnshareAddressBookResponse} returns this
*/
proto.yartu.UnshareAddressBookResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.UserSharePermissionResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.UserSharePermissionResult}
 */
proto.yartu.UnshareAddressBookResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.UserSharePermissionResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UnshareAddressBookResponse} returns this
 */
proto.yartu.UnshareAddressBookResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UnshareAddressBookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnshareAddressBookResponse} returns this
 */
proto.yartu.UnshareAddressBookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UnshareAddressBookResponse} returns this
 */
proto.yartu.UnshareAddressBookResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UnshareAddressBookResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertContactRequest.repeatedFields_ = [2];



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
proto.yartu.UpsertContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contact: (f = msg.getContact()) && proto.yartu.Contact.toObject(includeInstance, f),
    labelsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yartu.UpsertContactRequest}
 */
proto.yartu.UpsertContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertContactRequest;
  return proto.yartu.UpsertContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertContactRequest}
 */
proto.yartu.UpsertContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLabels(values[i]);
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
proto.yartu.UpsertContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional Contact contact = 1;
 * @return {?proto.yartu.Contact}
 */
proto.yartu.UpsertContactRequest.prototype.getContact = function() {
  return /** @type{?proto.yartu.Contact} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Contact, 1));
};


/**
 * @param {?proto.yartu.Contact|undefined} value
 * @return {!proto.yartu.UpsertContactRequest} returns this
*/
proto.yartu.UpsertContactRequest.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertContactRequest} returns this
 */
proto.yartu.UpsertContactRequest.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertContactRequest.prototype.hasContact = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 labels = 2;
 * @return {!Array<number>}
 */
proto.yartu.UpsertContactRequest.prototype.getLabelsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.UpsertContactRequest} returns this
 */
proto.yartu.UpsertContactRequest.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertContactRequest} returns this
 */
proto.yartu.UpsertContactRequest.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertContactRequest} returns this
 */
proto.yartu.UpsertContactRequest.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
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
proto.yartu.UpsertContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contact: (f = msg.getContact()) && proto.yartu.Contact.toObject(includeInstance, f)
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
 * @return {!proto.yartu.UpsertContactResponse}
 */
proto.yartu.UpsertContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertContactResponse;
  return proto.yartu.UpsertContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertContactResponse}
 */
proto.yartu.UpsertContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
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
proto.yartu.UpsertContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.UpsertContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertContactResponse} returns this
 */
proto.yartu.UpsertContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertContactResponse} returns this
 */
proto.yartu.UpsertContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertContactResponse} returns this
 */
proto.yartu.UpsertContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertContactResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Contact contact = 3;
 * @return {?proto.yartu.Contact}
 */
proto.yartu.UpsertContactResponse.prototype.getContact = function() {
  return /** @type{?proto.yartu.Contact} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Contact, 3));
};


/**
 * @param {?proto.yartu.Contact|undefined} value
 * @return {!proto.yartu.UpsertContactResponse} returns this
*/
proto.yartu.UpsertContactResponse.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertContactResponse} returns this
 */
proto.yartu.UpsertContactResponse.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertContactResponse.prototype.hasContact = function() {
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
proto.yartu.GetContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetContactRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GetContactRequest}
 */
proto.yartu.GetContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetContactRequest;
  return proto.yartu.GetContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetContactRequest}
 */
proto.yartu.GetContactRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GetContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetContactRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.GetContactRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetContactRequest} returns this
 */
proto.yartu.GetContactRequest.prototype.setId = function(value) {
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
proto.yartu.GetContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.yartu.Contact.toObject(includeInstance, f)
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
 * @return {!proto.yartu.GetContactResponse}
 */
proto.yartu.GetContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetContactResponse;
  return proto.yartu.GetContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetContactResponse}
 */
proto.yartu.GetContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
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
proto.yartu.GetContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetContactResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetContactResponse} returns this
 */
proto.yartu.GetContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.GetContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetContactResponse} returns this
 */
proto.yartu.GetContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetContactResponse} returns this
 */
proto.yartu.GetContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetContactResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Contact data = 3;
 * @return {?proto.yartu.Contact}
 */
proto.yartu.GetContactResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.Contact} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Contact, 3));
};


/**
 * @param {?proto.yartu.Contact|undefined} value
 * @return {!proto.yartu.GetContactResponse} returns this
*/
proto.yartu.GetContactResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetContactResponse} returns this
 */
proto.yartu.GetContactResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetContactResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DeleteContactRequest.repeatedFields_ = [2];



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
proto.yartu.DeleteContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    idsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yartu.DeleteContactRequest}
 */
proto.yartu.DeleteContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteContactRequest;
  return proto.yartu.DeleteContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteContactRequest}
 */
proto.yartu.DeleteContactRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIds(values[i]);
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
proto.yartu.DeleteContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.DeleteContactRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteContactRequest} returns this
 */
proto.yartu.DeleteContactRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int64 ids = 2;
 * @return {!Array<number>}
 */
proto.yartu.DeleteContactRequest.prototype.getIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.DeleteContactRequest} returns this
 */
proto.yartu.DeleteContactRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.DeleteContactRequest} returns this
 */
proto.yartu.DeleteContactRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DeleteContactRequest} returns this
 */
proto.yartu.DeleteContactRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
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
proto.yartu.DeleteContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteContactResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteContactResponse}
 */
proto.yartu.DeleteContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteContactResponse;
  return proto.yartu.DeleteContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteContactResponse}
 */
proto.yartu.DeleteContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteContactResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteContactResponse} returns this
 */
proto.yartu.DeleteContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteContactResponse} returns this
 */
proto.yartu.DeleteContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteContactResponse} returns this
 */
proto.yartu.DeleteContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteContactResponse.prototype.hasMessage = function() {
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
proto.yartu.ListContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBookId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    query: (f = msg.getQuery()) && proto.yartu.Query.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && proto.yartu.ContactMetaQuery.toObject(includeInstance, f)
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
 * @return {!proto.yartu.ListContactRequest}
 */
proto.yartu.ListContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListContactRequest;
  return proto.yartu.ListContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListContactRequest}
 */
proto.yartu.ListContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAddressBookId(value);
      break;
    case 2:
      var value = new proto.yartu.Query;
      reader.readMessage(value,proto.yartu.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 3:
      var value = new proto.yartu.ContactMetaQuery;
      reader.readMessage(value,proto.yartu.ContactMetaQuery.deserializeBinaryFromReader);
      msg.setMeta(value);
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
proto.yartu.ListContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBookId();
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
      proto.yartu.Query.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.ContactMetaQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 address_book_id = 1;
 * @return {number}
 */
proto.yartu.ListContactRequest.prototype.getAddressBookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListContactRequest} returns this
 */
proto.yartu.ListContactRequest.prototype.setAddressBookId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Query query = 2;
 * @return {?proto.yartu.Query}
 */
proto.yartu.ListContactRequest.prototype.getQuery = function() {
  return /** @type{?proto.yartu.Query} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Query, 2));
};


/**
 * @param {?proto.yartu.Query|undefined} value
 * @return {!proto.yartu.ListContactRequest} returns this
*/
proto.yartu.ListContactRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListContactRequest} returns this
 */
proto.yartu.ListContactRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListContactRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContactMetaQuery meta = 3;
 * @return {?proto.yartu.ContactMetaQuery}
 */
proto.yartu.ListContactRequest.prototype.getMeta = function() {
  return /** @type{?proto.yartu.ContactMetaQuery} */ (
    jspb.Message.getWrapperField(this, proto.yartu.ContactMetaQuery, 3));
};


/**
 * @param {?proto.yartu.ContactMetaQuery|undefined} value
 * @return {!proto.yartu.ListContactRequest} returns this
*/
proto.yartu.ListContactRequest.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListContactRequest} returns this
 */
proto.yartu.ListContactRequest.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListContactRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListContactResponse.repeatedFields_ = [2];



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
proto.yartu.ListContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Contact.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListContactResponse}
 */
proto.yartu.ListContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListContactResponse;
  return proto.yartu.ListContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListContactResponse}
 */
proto.yartu.ListContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.ListContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListContactResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListContactResponse} returns this
 */
proto.yartu.ListContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Contact data = 2;
 * @return {!Array<!proto.yartu.Contact>}
 */
proto.yartu.ListContactResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Contact, 2));
};


/**
 * @param {!Array<!proto.yartu.Contact>} value
 * @return {!proto.yartu.ListContactResponse} returns this
*/
proto.yartu.ListContactResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Contact}
 */
proto.yartu.ListContactResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListContactResponse} returns this
 */
proto.yartu.ListContactResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.ListContactResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListContactResponse} returns this
*/
proto.yartu.ListContactResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListContactResponse} returns this
 */
proto.yartu.ListContactResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListContactResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListContactResponse} returns this
 */
proto.yartu.ListContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListContactResponse} returns this
 */
proto.yartu.ListContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListContactResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertLabelRequest.repeatedFields_ = [2];



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
proto.yartu.UpsertLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: (f = msg.getLabel()) && proto.yartu.Label.toObject(includeInstance, f),
    contacsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yartu.UpsertLabelRequest}
 */
proto.yartu.UpsertLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertLabelRequest;
  return proto.yartu.UpsertLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertLabelRequest}
 */
proto.yartu.UpsertLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yartu.Label;
      reader.readMessage(value,proto.yartu.Label.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addContacs(value);
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
proto.yartu.UpsertLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yartu.Label.serializeBinaryToWriter
    );
  }
  f = message.getContacsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Label label = 1;
 * @return {?proto.yartu.Label}
 */
proto.yartu.UpsertLabelRequest.prototype.getLabel = function() {
  return /** @type{?proto.yartu.Label} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Label, 1));
};


/**
 * @param {?proto.yartu.Label|undefined} value
 * @return {!proto.yartu.UpsertLabelRequest} returns this
*/
proto.yartu.UpsertLabelRequest.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertLabelRequest} returns this
 */
proto.yartu.UpsertLabelRequest.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertLabelRequest.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string contacs = 2;
 * @return {!Array<string>}
 */
proto.yartu.UpsertLabelRequest.prototype.getContacsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UpsertLabelRequest} returns this
 */
proto.yartu.UpsertLabelRequest.prototype.setContacsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertLabelRequest} returns this
 */
proto.yartu.UpsertLabelRequest.prototype.addContacs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertLabelRequest} returns this
 */
proto.yartu.UpsertLabelRequest.prototype.clearContacsList = function() {
  return this.setContacsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertLabelResponse.repeatedFields_ = [2];



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
proto.yartu.UpsertLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Label.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertLabelResponse}
 */
proto.yartu.UpsertLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertLabelResponse;
  return proto.yartu.UpsertLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertLabelResponse}
 */
proto.yartu.UpsertLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Label;
      reader.readMessage(value,proto.yartu.Label.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.UpsertLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Label.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.UpsertLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertLabelResponse} returns this
 */
proto.yartu.UpsertLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Label data = 2;
 * @return {!Array<!proto.yartu.Label>}
 */
proto.yartu.UpsertLabelResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Label, 2));
};


/**
 * @param {!Array<!proto.yartu.Label>} value
 * @return {!proto.yartu.UpsertLabelResponse} returns this
*/
proto.yartu.UpsertLabelResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Label}
 */
proto.yartu.UpsertLabelResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertLabelResponse} returns this
 */
proto.yartu.UpsertLabelResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.UpsertLabelResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.UpsertLabelResponse} returns this
*/
proto.yartu.UpsertLabelResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertLabelResponse} returns this
 */
proto.yartu.UpsertLabelResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertLabelResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.UpsertLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertLabelResponse} returns this
 */
proto.yartu.UpsertLabelResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertLabelResponse} returns this
 */
proto.yartu.UpsertLabelResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertLabelResponse.prototype.hasMessage = function() {
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
proto.yartu.ListLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBookId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    query: (f = msg.getQuery()) && proto.yartu.Query.toObject(includeInstance, f)
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
 * @return {!proto.yartu.ListLabelRequest}
 */
proto.yartu.ListLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListLabelRequest;
  return proto.yartu.ListLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListLabelRequest}
 */
proto.yartu.ListLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAddressBookId(value);
      break;
    case 2:
      var value = new proto.yartu.Query;
      reader.readMessage(value,proto.yartu.Query.deserializeBinaryFromReader);
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
proto.yartu.ListLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBookId();
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
      proto.yartu.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 address_book_id = 1;
 * @return {number}
 */
proto.yartu.ListLabelRequest.prototype.getAddressBookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListLabelRequest} returns this
 */
proto.yartu.ListLabelRequest.prototype.setAddressBookId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Query query = 2;
 * @return {?proto.yartu.Query}
 */
proto.yartu.ListLabelRequest.prototype.getQuery = function() {
  return /** @type{?proto.yartu.Query} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Query, 2));
};


/**
 * @param {?proto.yartu.Query|undefined} value
 * @return {!proto.yartu.ListLabelRequest} returns this
*/
proto.yartu.ListLabelRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListLabelRequest} returns this
 */
proto.yartu.ListLabelRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListLabelRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListLabelResponse.repeatedFields_ = [2];



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
proto.yartu.ListLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Label.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListLabelResponse}
 */
proto.yartu.ListLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListLabelResponse;
  return proto.yartu.ListLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListLabelResponse}
 */
proto.yartu.ListLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Label;
      reader.readMessage(value,proto.yartu.Label.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.ListLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListLabelResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Label.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListLabelResponse} returns this
 */
proto.yartu.ListLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Label data = 2;
 * @return {!Array<!proto.yartu.Label>}
 */
proto.yartu.ListLabelResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Label, 2));
};


/**
 * @param {!Array<!proto.yartu.Label>} value
 * @return {!proto.yartu.ListLabelResponse} returns this
*/
proto.yartu.ListLabelResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Label}
 */
proto.yartu.ListLabelResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListLabelResponse} returns this
 */
proto.yartu.ListLabelResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.ListLabelResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListLabelResponse} returns this
*/
proto.yartu.ListLabelResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListLabelResponse} returns this
 */
proto.yartu.ListLabelResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListLabelResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListLabelResponse} returns this
 */
proto.yartu.ListLabelResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListLabelResponse} returns this
 */
proto.yartu.ListLabelResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListLabelResponse.prototype.hasMessage = function() {
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
proto.yartu.GetLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hasContacts: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.yartu.GetLabelRequest}
 */
proto.yartu.GetLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetLabelRequest;
  return proto.yartu.GetLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetLabelRequest}
 */
proto.yartu.GetLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setHasContacts(value);
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
proto.yartu.GetLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHasContacts();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.GetLabelRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetLabelRequest} returns this
 */
proto.yartu.GetLabelRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool has_contacts = 2;
 * @return {boolean}
 */
proto.yartu.GetLabelRequest.prototype.getHasContacts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetLabelRequest} returns this
 */
proto.yartu.GetLabelRequest.prototype.setHasContacts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetLabelResponse.repeatedFields_ = [3];



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
proto.yartu.GetLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    label: (f = msg.getLabel()) && proto.yartu.Label.toObject(includeInstance, f),
    contactsList: jspb.Message.toObjectList(msg.getContactsList(),
    proto.yartu.Contact.toObject, includeInstance),
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
 * @return {!proto.yartu.GetLabelResponse}
 */
proto.yartu.GetLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetLabelResponse;
  return proto.yartu.GetLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetLabelResponse}
 */
proto.yartu.GetLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Label;
      reader.readMessage(value,proto.yartu.Label.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    case 3:
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
      msg.addContacts(value);
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
proto.yartu.GetLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetLabelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Label.serializeBinaryToWriter
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.Contact.serializeBinaryToWriter
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
proto.yartu.GetLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetLabelResponse} returns this
 */
proto.yartu.GetLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Label label = 2;
 * @return {?proto.yartu.Label}
 */
proto.yartu.GetLabelResponse.prototype.getLabel = function() {
  return /** @type{?proto.yartu.Label} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Label, 2));
};


/**
 * @param {?proto.yartu.Label|undefined} value
 * @return {!proto.yartu.GetLabelResponse} returns this
*/
proto.yartu.GetLabelResponse.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetLabelResponse} returns this
 */
proto.yartu.GetLabelResponse.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetLabelResponse.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Contact contacts = 3;
 * @return {!Array<!proto.yartu.Contact>}
 */
proto.yartu.GetLabelResponse.prototype.getContactsList = function() {
  return /** @type{!Array<!proto.yartu.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Contact, 3));
};


/**
 * @param {!Array<!proto.yartu.Contact>} value
 * @return {!proto.yartu.GetLabelResponse} returns this
*/
proto.yartu.GetLabelResponse.prototype.setContactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Contact}
 */
proto.yartu.GetLabelResponse.prototype.addContacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetLabelResponse} returns this
 */
proto.yartu.GetLabelResponse.prototype.clearContactsList = function() {
  return this.setContactsList([]);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.GetLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetLabelResponse} returns this
 */
proto.yartu.GetLabelResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetLabelResponse} returns this
 */
proto.yartu.GetLabelResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetLabelResponse.prototype.hasMessage = function() {
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
proto.yartu.DeleteLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteLabelRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteLabelRequest}
 */
proto.yartu.DeleteLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteLabelRequest;
  return proto.yartu.DeleteLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteLabelRequest}
 */
proto.yartu.DeleteLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteLabelRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteLabelRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteLabelRequest} returns this
 */
proto.yartu.DeleteLabelRequest.prototype.setId = function(value) {
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
proto.yartu.DeleteLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteLabelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteLabelResponse}
 */
proto.yartu.DeleteLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteLabelResponse;
  return proto.yartu.DeleteLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteLabelResponse}
 */
proto.yartu.DeleteLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteLabelResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteLabelResponse} returns this
 */
proto.yartu.DeleteLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteLabelResponse} returns this
 */
proto.yartu.DeleteLabelResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteLabelResponse} returns this
 */
proto.yartu.DeleteLabelResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteLabelResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertContactLabelRequest.repeatedFields_ = [2];



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
proto.yartu.UpsertContactLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertContactLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertContactLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    labelsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yartu.UpsertContactLabelRequest}
 */
proto.yartu.UpsertContactLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertContactLabelRequest;
  return proto.yartu.UpsertContactLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertContactLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertContactLabelRequest}
 */
proto.yartu.UpsertContactLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactId(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLabels(values[i]);
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
proto.yartu.UpsertContactLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertContactLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertContactLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 contact_id = 1;
 * @return {number}
 */
proto.yartu.UpsertContactLabelRequest.prototype.getContactId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertContactLabelRequest} returns this
 */
proto.yartu.UpsertContactLabelRequest.prototype.setContactId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int64 labels = 2;
 * @return {!Array<number>}
 */
proto.yartu.UpsertContactLabelRequest.prototype.getLabelsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.UpsertContactLabelRequest} returns this
 */
proto.yartu.UpsertContactLabelRequest.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertContactLabelRequest} returns this
 */
proto.yartu.UpsertContactLabelRequest.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertContactLabelRequest} returns this
 */
proto.yartu.UpsertContactLabelRequest.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
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
proto.yartu.UpsertContactLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertContactLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertContactLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactLabelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertContactLabelResponse}
 */
proto.yartu.UpsertContactLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertContactLabelResponse;
  return proto.yartu.UpsertContactLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertContactLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertContactLabelResponse}
 */
proto.yartu.UpsertContactLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertContactLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertContactLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertContactLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactLabelResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertContactLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertContactLabelResponse} returns this
 */
proto.yartu.UpsertContactLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertContactLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertContactLabelResponse} returns this
 */
proto.yartu.UpsertContactLabelResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertContactLabelResponse} returns this
 */
proto.yartu.UpsertContactLabelResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertContactLabelResponse.prototype.hasMessage = function() {
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
proto.yartu.ListEmailContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.yartu.Query.toObject(includeInstance, f)
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
 * @return {!proto.yartu.ListEmailContactRequest}
 */
proto.yartu.ListEmailContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailContactRequest;
  return proto.yartu.ListEmailContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailContactRequest}
 */
proto.yartu.ListEmailContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yartu.Query;
      reader.readMessage(value,proto.yartu.Query.deserializeBinaryFromReader);
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
proto.yartu.ListEmailContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yartu.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.yartu.Query}
 */
proto.yartu.ListEmailContactRequest.prototype.getQuery = function() {
  return /** @type{?proto.yartu.Query} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Query, 1));
};


/**
 * @param {?proto.yartu.Query|undefined} value
 * @return {!proto.yartu.ListEmailContactRequest} returns this
*/
proto.yartu.ListEmailContactRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailContactRequest} returns this
 */
proto.yartu.ListEmailContactRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailContactRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListEmailContactResponse.repeatedFields_ = [2];



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
proto.yartu.ListEmailContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListEmailContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListEmailContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Contact.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListEmailContactResponse}
 */
proto.yartu.ListEmailContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListEmailContactResponse;
  return proto.yartu.ListEmailContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListEmailContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListEmailContactResponse}
 */
proto.yartu.ListEmailContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.ListEmailContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListEmailContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListEmailContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListEmailContactResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListEmailContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListEmailContactResponse} returns this
 */
proto.yartu.ListEmailContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Contact data = 2;
 * @return {!Array<!proto.yartu.Contact>}
 */
proto.yartu.ListEmailContactResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Contact, 2));
};


/**
 * @param {!Array<!proto.yartu.Contact>} value
 * @return {!proto.yartu.ListEmailContactResponse} returns this
*/
proto.yartu.ListEmailContactResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Contact}
 */
proto.yartu.ListEmailContactResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListEmailContactResponse} returns this
 */
proto.yartu.ListEmailContactResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.ListEmailContactResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListEmailContactResponse} returns this
*/
proto.yartu.ListEmailContactResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListEmailContactResponse} returns this
 */
proto.yartu.ListEmailContactResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailContactResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListEmailContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListEmailContactResponse} returns this
 */
proto.yartu.ListEmailContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListEmailContactResponse} returns this
 */
proto.yartu.ListEmailContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListEmailContactResponse.prototype.hasMessage = function() {
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
proto.yartu.ListFavoriteContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListFavoriteContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListFavoriteContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListFavoriteContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.yartu.Query.toObject(includeInstance, f)
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
 * @return {!proto.yartu.ListFavoriteContactRequest}
 */
proto.yartu.ListFavoriteContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListFavoriteContactRequest;
  return proto.yartu.ListFavoriteContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListFavoriteContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListFavoriteContactRequest}
 */
proto.yartu.ListFavoriteContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yartu.Query;
      reader.readMessage(value,proto.yartu.Query.deserializeBinaryFromReader);
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
proto.yartu.ListFavoriteContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListFavoriteContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListFavoriteContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListFavoriteContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yartu.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.yartu.Query}
 */
proto.yartu.ListFavoriteContactRequest.prototype.getQuery = function() {
  return /** @type{?proto.yartu.Query} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Query, 1));
};


/**
 * @param {?proto.yartu.Query|undefined} value
 * @return {!proto.yartu.ListFavoriteContactRequest} returns this
*/
proto.yartu.ListFavoriteContactRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListFavoriteContactRequest} returns this
 */
proto.yartu.ListFavoriteContactRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListFavoriteContactRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListFavoriteContactResponse.repeatedFields_ = [2];



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
proto.yartu.ListFavoriteContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListFavoriteContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListFavoriteContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListFavoriteContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Contact.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListFavoriteContactResponse}
 */
proto.yartu.ListFavoriteContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListFavoriteContactResponse;
  return proto.yartu.ListFavoriteContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListFavoriteContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListFavoriteContactResponse}
 */
proto.yartu.ListFavoriteContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.ListFavoriteContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListFavoriteContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListFavoriteContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListFavoriteContactResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListFavoriteContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListFavoriteContactResponse} returns this
 */
proto.yartu.ListFavoriteContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Contact data = 2;
 * @return {!Array<!proto.yartu.Contact>}
 */
proto.yartu.ListFavoriteContactResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Contact, 2));
};


/**
 * @param {!Array<!proto.yartu.Contact>} value
 * @return {!proto.yartu.ListFavoriteContactResponse} returns this
*/
proto.yartu.ListFavoriteContactResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Contact}
 */
proto.yartu.ListFavoriteContactResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListFavoriteContactResponse} returns this
 */
proto.yartu.ListFavoriteContactResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.ListFavoriteContactResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListFavoriteContactResponse} returns this
*/
proto.yartu.ListFavoriteContactResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListFavoriteContactResponse} returns this
 */
proto.yartu.ListFavoriteContactResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListFavoriteContactResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListFavoriteContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListFavoriteContactResponse} returns this
 */
proto.yartu.ListFavoriteContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListFavoriteContactResponse} returns this
 */
proto.yartu.ListFavoriteContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListFavoriteContactResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertFavoriteContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertFavoriteContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertFavoriteContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFavoriteContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contactType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yartu.UpsertFavoriteContactRequest}
 */
proto.yartu.UpsertFavoriteContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertFavoriteContactRequest;
  return proto.yartu.UpsertFavoriteContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertFavoriteContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertFavoriteContactRequest}
 */
proto.yartu.UpsertFavoriteContactRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContactType(value);
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
proto.yartu.UpsertFavoriteContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertFavoriteContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertFavoriteContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFavoriteContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getContactType();
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
proto.yartu.UpsertFavoriteContactRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertFavoriteContactRequest} returns this
 */
proto.yartu.UpsertFavoriteContactRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 contact_type = 2;
 * @return {number}
 */
proto.yartu.UpsertFavoriteContactRequest.prototype.getContactType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertFavoriteContactRequest} returns this
 */
proto.yartu.UpsertFavoriteContactRequest.prototype.setContactType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertFavoriteContactResponse.repeatedFields_ = [2];



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
proto.yartu.UpsertFavoriteContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertFavoriteContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertFavoriteContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFavoriteContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Contact.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertFavoriteContactResponse}
 */
proto.yartu.UpsertFavoriteContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertFavoriteContactResponse;
  return proto.yartu.UpsertFavoriteContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertFavoriteContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertFavoriteContactResponse}
 */
proto.yartu.UpsertFavoriteContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.UpsertFavoriteContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertFavoriteContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertFavoriteContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFavoriteContactResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.UpsertFavoriteContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertFavoriteContactResponse} returns this
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Contact data = 2;
 * @return {!Array<!proto.yartu.Contact>}
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Contact, 2));
};


/**
 * @param {!Array<!proto.yartu.Contact>} value
 * @return {!proto.yartu.UpsertFavoriteContactResponse} returns this
*/
proto.yartu.UpsertFavoriteContactResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Contact}
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertFavoriteContactResponse} returns this
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.UpsertFavoriteContactResponse} returns this
*/
proto.yartu.UpsertFavoriteContactResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertFavoriteContactResponse} returns this
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFavoriteContactResponse} returns this
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertFavoriteContactResponse} returns this
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFavoriteContactResponse.prototype.hasMessage = function() {
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
proto.yartu.ListPublicContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListPublicContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListPublicContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicContactRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListPublicContactRequest}
 */
proto.yartu.ListPublicContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListPublicContactRequest;
  return proto.yartu.ListPublicContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListPublicContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListPublicContactRequest}
 */
proto.yartu.ListPublicContactRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListPublicContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListPublicContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListPublicContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicContactRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ListPublicContactRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListPublicContactRequest} returns this
 */
proto.yartu.ListPublicContactRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListPublicContactResponse.repeatedFields_ = [2];



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
proto.yartu.ListPublicContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListPublicContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListPublicContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Contact.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListPublicContactResponse}
 */
proto.yartu.ListPublicContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListPublicContactResponse;
  return proto.yartu.ListPublicContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListPublicContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListPublicContactResponse}
 */
proto.yartu.ListPublicContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Contact;
      reader.readMessage(value,proto.yartu.Contact.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.ListPublicContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListPublicContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListPublicContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicContactResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Contact.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListPublicContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListPublicContactResponse} returns this
 */
proto.yartu.ListPublicContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Contact data = 2;
 * @return {!Array<!proto.yartu.Contact>}
 */
proto.yartu.ListPublicContactResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Contact, 2));
};


/**
 * @param {!Array<!proto.yartu.Contact>} value
 * @return {!proto.yartu.ListPublicContactResponse} returns this
*/
proto.yartu.ListPublicContactResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Contact}
 */
proto.yartu.ListPublicContactResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListPublicContactResponse} returns this
 */
proto.yartu.ListPublicContactResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.ListPublicContactResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListPublicContactResponse} returns this
*/
proto.yartu.ListPublicContactResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListPublicContactResponse} returns this
 */
proto.yartu.ListPublicContactResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListPublicContactResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListPublicContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListPublicContactResponse} returns this
 */
proto.yartu.ListPublicContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListPublicContactResponse} returns this
 */
proto.yartu.ListPublicContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListPublicContactResponse.prototype.hasMessage = function() {
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
proto.yartu.ListDuplicateContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListDuplicateContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListDuplicateContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDuplicateContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.yartu.Query.toObject(includeInstance, f)
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
 * @return {!proto.yartu.ListDuplicateContactRequest}
 */
proto.yartu.ListDuplicateContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListDuplicateContactRequest;
  return proto.yartu.ListDuplicateContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListDuplicateContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListDuplicateContactRequest}
 */
proto.yartu.ListDuplicateContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yartu.Query;
      reader.readMessage(value,proto.yartu.Query.deserializeBinaryFromReader);
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
proto.yartu.ListDuplicateContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListDuplicateContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListDuplicateContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDuplicateContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yartu.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.yartu.Query}
 */
proto.yartu.ListDuplicateContactRequest.prototype.getQuery = function() {
  return /** @type{?proto.yartu.Query} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Query, 1));
};


/**
 * @param {?proto.yartu.Query|undefined} value
 * @return {!proto.yartu.ListDuplicateContactRequest} returns this
*/
proto.yartu.ListDuplicateContactRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListDuplicateContactRequest} returns this
 */
proto.yartu.ListDuplicateContactRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListDuplicateContactRequest.prototype.hasQuery = function() {
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
proto.yartu.DuplicateContact.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DuplicateContact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DuplicateContact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateContact.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    company: jspb.Message.getFieldWithDefault(msg, 6, ""),
    title: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.yartu.DuplicateContact}
 */
proto.yartu.DuplicateContact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DuplicateContact;
  return proto.yartu.DuplicateContact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DuplicateContact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DuplicateContact}
 */
proto.yartu.DuplicateContact.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSurname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompany(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
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
proto.yartu.DuplicateContact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DuplicateContact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DuplicateContact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateContact.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSurname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCompany();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.DuplicateContact.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DuplicateContact} returns this
 */
proto.yartu.DuplicateContact.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.DuplicateContact.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateContact} returns this
 */
proto.yartu.DuplicateContact.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string surname = 3;
 * @return {string}
 */
proto.yartu.DuplicateContact.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateContact} returns this
 */
proto.yartu.DuplicateContact.prototype.setSurname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.yartu.DuplicateContact.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateContact} returns this
 */
proto.yartu.DuplicateContact.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string phone = 5;
 * @return {string}
 */
proto.yartu.DuplicateContact.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateContact} returns this
 */
proto.yartu.DuplicateContact.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string company = 6;
 * @return {string}
 */
proto.yartu.DuplicateContact.prototype.getCompany = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateContact} returns this
 */
proto.yartu.DuplicateContact.prototype.setCompany = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.yartu.DuplicateContact.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateContact} returns this
 */
proto.yartu.DuplicateContact.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DuplicateList.repeatedFields_ = [8];



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
proto.yartu.DuplicateList.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DuplicateList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DuplicateList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateList.toObject = function(includeInstance, msg) {
  var f, obj = {
    phone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.yartu.DuplicateContact.toObject, includeInstance)
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
 * @return {!proto.yartu.DuplicateList}
 */
proto.yartu.DuplicateList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DuplicateList;
  return proto.yartu.DuplicateList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DuplicateList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DuplicateList}
 */
proto.yartu.DuplicateList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 8:
      var value = new proto.yartu.DuplicateContact;
      reader.readMessage(value,proto.yartu.DuplicateContact.deserializeBinaryFromReader);
      msg.addChildren(value);
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
proto.yartu.DuplicateList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DuplicateList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DuplicateList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yartu.DuplicateContact.serializeBinaryToWriter
    );
  }
};


/**
 * optional string phone = 5;
 * @return {string}
 */
proto.yartu.DuplicateList.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateList} returns this
 */
proto.yartu.DuplicateList.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated DuplicateContact children = 8;
 * @return {!Array<!proto.yartu.DuplicateContact>}
 */
proto.yartu.DuplicateList.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.yartu.DuplicateContact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.DuplicateContact, 8));
};


/**
 * @param {!Array<!proto.yartu.DuplicateContact>} value
 * @return {!proto.yartu.DuplicateList} returns this
*/
proto.yartu.DuplicateList.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yartu.DuplicateContact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.DuplicateContact}
 */
proto.yartu.DuplicateList.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yartu.DuplicateContact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DuplicateList} returns this
 */
proto.yartu.DuplicateList.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListDuplicateContactResponse.repeatedFields_ = [2];



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
proto.yartu.ListDuplicateContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListDuplicateContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListDuplicateContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDuplicateContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.DuplicateList.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.yartu.PaginationMeta.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ListDuplicateContactResponse}
 */
proto.yartu.ListDuplicateContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListDuplicateContactResponse;
  return proto.yartu.ListDuplicateContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListDuplicateContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListDuplicateContactResponse}
 */
proto.yartu.ListDuplicateContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.DuplicateList;
      reader.readMessage(value,proto.yartu.DuplicateList.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.PaginationMeta;
      reader.readMessage(value,proto.yartu.PaginationMeta.deserializeBinaryFromReader);
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
proto.yartu.ListDuplicateContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListDuplicateContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListDuplicateContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDuplicateContactResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.DuplicateList.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.PaginationMeta.serializeBinaryToWriter
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
proto.yartu.ListDuplicateContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListDuplicateContactResponse} returns this
 */
proto.yartu.ListDuplicateContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DuplicateList data = 2;
 * @return {!Array<!proto.yartu.DuplicateList>}
 */
proto.yartu.ListDuplicateContactResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.DuplicateList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.DuplicateList, 2));
};


/**
 * @param {!Array<!proto.yartu.DuplicateList>} value
 * @return {!proto.yartu.ListDuplicateContactResponse} returns this
*/
proto.yartu.ListDuplicateContactResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.DuplicateList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.DuplicateList}
 */
proto.yartu.ListDuplicateContactResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.DuplicateList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListDuplicateContactResponse} returns this
 */
proto.yartu.ListDuplicateContactResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.yartu.PaginationMeta}
 */
proto.yartu.ListDuplicateContactResponse.prototype.getPagination = function() {
  return /** @type{?proto.yartu.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PaginationMeta, 3));
};


/**
 * @param {?proto.yartu.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListDuplicateContactResponse} returns this
*/
proto.yartu.ListDuplicateContactResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListDuplicateContactResponse} returns this
 */
proto.yartu.ListDuplicateContactResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListDuplicateContactResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListDuplicateContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListDuplicateContactResponse} returns this
 */
proto.yartu.ListDuplicateContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListDuplicateContactResponse} returns this
 */
proto.yartu.ListDuplicateContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListDuplicateContactResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertMergeContactRequest.repeatedFields_ = [2];



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
proto.yartu.UpsertMergeContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertMergeContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertMergeContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertMergeContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    duplicatesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yartu.UpsertMergeContactRequest}
 */
proto.yartu.UpsertMergeContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertMergeContactRequest;
  return proto.yartu.UpsertMergeContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertMergeContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertMergeContactRequest}
 */
proto.yartu.UpsertMergeContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactId(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDuplicates(values[i]);
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
proto.yartu.UpsertMergeContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertMergeContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertMergeContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertMergeContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDuplicatesList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 contact_id = 1;
 * @return {number}
 */
proto.yartu.UpsertMergeContactRequest.prototype.getContactId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertMergeContactRequest} returns this
 */
proto.yartu.UpsertMergeContactRequest.prototype.setContactId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int64 duplicates = 2;
 * @return {!Array<number>}
 */
proto.yartu.UpsertMergeContactRequest.prototype.getDuplicatesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.UpsertMergeContactRequest} returns this
 */
proto.yartu.UpsertMergeContactRequest.prototype.setDuplicatesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertMergeContactRequest} returns this
 */
proto.yartu.UpsertMergeContactRequest.prototype.addDuplicates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertMergeContactRequest} returns this
 */
proto.yartu.UpsertMergeContactRequest.prototype.clearDuplicatesList = function() {
  return this.setDuplicatesList([]);
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
proto.yartu.UpsertMergeContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertMergeContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertMergeContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertMergeContactResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertMergeContactResponse}
 */
proto.yartu.UpsertMergeContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertMergeContactResponse;
  return proto.yartu.UpsertMergeContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertMergeContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertMergeContactResponse}
 */
proto.yartu.UpsertMergeContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertMergeContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertMergeContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertMergeContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertMergeContactResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertMergeContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertMergeContactResponse} returns this
 */
proto.yartu.UpsertMergeContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertMergeContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertMergeContactResponse} returns this
 */
proto.yartu.UpsertMergeContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertMergeContactResponse} returns this
 */
proto.yartu.UpsertMergeContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertMergeContactResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ExportContactRequest.repeatedFields_ = [2];



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
proto.yartu.ExportContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ExportContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ExportContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ExportContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBookId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contactListList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    mode: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.ExportContactRequest}
 */
proto.yartu.ExportContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ExportContactRequest;
  return proto.yartu.ExportContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ExportContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ExportContactRequest}
 */
proto.yartu.ExportContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAddressBookId(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addContactList(values[i]);
      }
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
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
proto.yartu.ExportContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ExportContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ExportContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ExportContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getContactListList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 address_book_id = 1;
 * @return {number}
 */
proto.yartu.ExportContactRequest.prototype.getAddressBookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ExportContactRequest} returns this
 */
proto.yartu.ExportContactRequest.prototype.setAddressBookId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ExportContactRequest} returns this
 */
proto.yartu.ExportContactRequest.prototype.clearAddressBookId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ExportContactRequest.prototype.hasAddressBookId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 contact_list = 2;
 * @return {!Array<number>}
 */
proto.yartu.ExportContactRequest.prototype.getContactListList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.ExportContactRequest} returns this
 */
proto.yartu.ExportContactRequest.prototype.setContactListList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.ExportContactRequest} returns this
 */
proto.yartu.ExportContactRequest.prototype.addContactList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ExportContactRequest} returns this
 */
proto.yartu.ExportContactRequest.prototype.clearContactListList = function() {
  return this.setContactListList([]);
};


/**
 * optional string mode = 3;
 * @return {string}
 */
proto.yartu.ExportContactRequest.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ExportContactRequest} returns this
 */
proto.yartu.ExportContactRequest.prototype.setMode = function(value) {
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
proto.yartu.ExportContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ExportContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ExportContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ExportContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    file: msg.getFile_asB64(),
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
 * @return {!proto.yartu.ExportContactResponse}
 */
proto.yartu.ExportContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ExportContactResponse;
  return proto.yartu.ExportContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ExportContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ExportContactResponse}
 */
proto.yartu.ExportContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFile(value);
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
proto.yartu.ExportContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ExportContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ExportContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ExportContactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
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
proto.yartu.ExportContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ExportContactResponse} returns this
 */
proto.yartu.ExportContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes file = 2;
 * @return {string}
 */
proto.yartu.ExportContactResponse.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes file = 2;
 * This is a type-conversion wrapper around `getFile()`
 * @return {string}
 */
proto.yartu.ExportContactResponse.prototype.getFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFile()));
};


/**
 * optional bytes file = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFile()`
 * @return {!Uint8Array}
 */
proto.yartu.ExportContactResponse.prototype.getFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.yartu.ExportContactResponse} returns this
 */
proto.yartu.ExportContactResponse.prototype.setFile = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ExportContactResponse} returns this
 */
proto.yartu.ExportContactResponse.prototype.clearFile = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ExportContactResponse.prototype.hasFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ExportContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ExportContactResponse} returns this
 */
proto.yartu.ExportContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ExportContactResponse} returns this
 */
proto.yartu.ExportContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ExportContactResponse.prototype.hasMessage = function() {
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
proto.yartu.ImportContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ImportContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ImportContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ImportContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBookId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    keys: jspb.Message.getFieldWithDefault(msg, 2, ""),
    file: msg.getFile_asB64()
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
 * @return {!proto.yartu.ImportContactRequest}
 */
proto.yartu.ImportContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ImportContactRequest;
  return proto.yartu.ImportContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ImportContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ImportContactRequest}
 */
proto.yartu.ImportContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAddressBookId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeys(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFile(value);
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
proto.yartu.ImportContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ImportContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ImportContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ImportContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBookId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getKeys();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional int64 address_book_id = 1;
 * @return {number}
 */
proto.yartu.ImportContactRequest.prototype.getAddressBookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ImportContactRequest} returns this
 */
proto.yartu.ImportContactRequest.prototype.setAddressBookId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string keys = 2;
 * @return {string}
 */
proto.yartu.ImportContactRequest.prototype.getKeys = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ImportContactRequest} returns this
 */
proto.yartu.ImportContactRequest.prototype.setKeys = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes file = 3;
 * @return {string}
 */
proto.yartu.ImportContactRequest.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes file = 3;
 * This is a type-conversion wrapper around `getFile()`
 * @return {string}
 */
proto.yartu.ImportContactRequest.prototype.getFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFile()));
};


/**
 * optional bytes file = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFile()`
 * @return {!Uint8Array}
 */
proto.yartu.ImportContactRequest.prototype.getFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.yartu.ImportContactRequest} returns this
 */
proto.yartu.ImportContactRequest.prototype.setFile = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.yartu.ImportContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ImportContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ImportContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ImportContactResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ImportContactResponse}
 */
proto.yartu.ImportContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ImportContactResponse;
  return proto.yartu.ImportContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ImportContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ImportContactResponse}
 */
proto.yartu.ImportContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ImportContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ImportContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ImportContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ImportContactResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ImportContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ImportContactResponse} returns this
 */
proto.yartu.ImportContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ImportContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ImportContactResponse} returns this
 */
proto.yartu.ImportContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ImportContactResponse} returns this
 */
proto.yartu.ImportContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ImportContactResponse.prototype.hasMessage = function() {
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
proto.yartu.CloneContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CloneContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CloneContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CloneContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contactType: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.CloneContactRequest}
 */
proto.yartu.CloneContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CloneContactRequest;
  return proto.yartu.CloneContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CloneContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CloneContactRequest}
 */
proto.yartu.CloneContactRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContactType(value);
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
proto.yartu.CloneContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CloneContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CloneContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CloneContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getContactType();
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
proto.yartu.CloneContactRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CloneContactRequest} returns this
 */
proto.yartu.CloneContactRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string contact_type = 2;
 * @return {string}
 */
proto.yartu.CloneContactRequest.prototype.getContactType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CloneContactRequest} returns this
 */
proto.yartu.CloneContactRequest.prototype.setContactType = function(value) {
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
proto.yartu.CloneContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CloneContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CloneContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CloneContactResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.CloneContactResponse}
 */
proto.yartu.CloneContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CloneContactResponse;
  return proto.yartu.CloneContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CloneContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CloneContactResponse}
 */
proto.yartu.CloneContactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.CloneContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CloneContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CloneContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CloneContactResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.CloneContactResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CloneContactResponse} returns this
 */
proto.yartu.CloneContactResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.CloneContactResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CloneContactResponse} returns this
 */
proto.yartu.CloneContactResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.CloneContactResponse} returns this
 */
proto.yartu.CloneContactResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.CloneContactResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertContactStarRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertContactStarRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertContactStarRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactStarRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    starred: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.yartu.UpsertContactStarRequest}
 */
proto.yartu.UpsertContactStarRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertContactStarRequest;
  return proto.yartu.UpsertContactStarRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertContactStarRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertContactStarRequest}
 */
proto.yartu.UpsertContactStarRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStarred(value);
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
proto.yartu.UpsertContactStarRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertContactStarRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertContactStarRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactStarRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStarred();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertContactStarRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertContactStarRequest} returns this
 */
proto.yartu.UpsertContactStarRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool starred = 2;
 * @return {boolean}
 */
proto.yartu.UpsertContactStarRequest.prototype.getStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertContactStarRequest} returns this
 */
proto.yartu.UpsertContactStarRequest.prototype.setStarred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.yartu.UpsertContactStarResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertContactStarResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertContactStarResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactStarResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertContactStarResponse}
 */
proto.yartu.UpsertContactStarResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertContactStarResponse;
  return proto.yartu.UpsertContactStarResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertContactStarResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertContactStarResponse}
 */
proto.yartu.UpsertContactStarResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertContactStarResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertContactStarResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertContactStarResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertContactStarResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertContactStarResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertContactStarResponse} returns this
 */
proto.yartu.UpsertContactStarResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertContactStarResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertContactStarResponse} returns this
 */
proto.yartu.UpsertContactStarResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertContactStarResponse} returns this
 */
proto.yartu.UpsertContactStarResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertContactStarResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(module.exports, proto.yartu);

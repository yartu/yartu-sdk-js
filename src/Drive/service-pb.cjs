// source: drive/grpc/service.proto
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
goog.exportSymbol('proto.yartu.AccessToken', null, global);
goog.exportSymbol('proto.yartu.DeletePublicShareRequest', null, global);
goog.exportSymbol('proto.yartu.DeletePublicShareResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteRepoRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteRepoResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteShareRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteShareResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteUploadPointRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteUploadPointResponse', null, global);
goog.exportSymbol('proto.yartu.DirInfo', null, global);
goog.exportSymbol('proto.yartu.Dirent', null, global);
goog.exportSymbol('proto.yartu.Dirent.InfoCase', null, global);
goog.exportSymbol('proto.yartu.Dirent.OwnerCase', null, global);
goog.exportSymbol('proto.yartu.DownloadDirentRequest', null, global);
goog.exportSymbol('proto.yartu.DownloadDirentResponse', null, global);
goog.exportSymbol('proto.yartu.DownloadFileRequest', null, global);
goog.exportSymbol('proto.yartu.DownloadFileResponse', null, global);
goog.exportSymbol('proto.yartu.DriveClient', null, global);
goog.exportSymbol('proto.yartu.DriveSharedObject', null, global);
goog.exportSymbol('proto.yartu.DriveSharedObject.DataCase', null, global);
goog.exportSymbol('proto.yartu.FileHistoryEntry', null, global);
goog.exportSymbol('proto.yartu.FileInfo', null, global);
goog.exportSymbol('proto.yartu.GetDirentRequest', null, global);
goog.exportSymbol('proto.yartu.GetDirentResponse', null, global);
goog.exportSymbol('proto.yartu.GetFileHistoryRequest', null, global);
goog.exportSymbol('proto.yartu.GetFileHistoryResponse', null, global);
goog.exportSymbol('proto.yartu.GetOfficeFileRequest', null, global);
goog.exportSymbol('proto.yartu.GetOfficeFileResponse', null, global);
goog.exportSymbol('proto.yartu.GetPublicShareDownloadRequest', null, global);
goog.exportSymbol('proto.yartu.GetPublicShareDownloadResponse', null, global);
goog.exportSymbol('proto.yartu.GetPublicShareRequest', null, global);
goog.exportSymbol('proto.yartu.GetPublicShareResponse', null, global);
goog.exportSymbol('proto.yartu.GetQuotaRequest', null, global);
goog.exportSymbol('proto.yartu.GetQuotaResponse', null, global);
goog.exportSymbol('proto.yartu.GetRecentRequest', null, global);
goog.exportSymbol('proto.yartu.GetRecentResponse', null, global);
goog.exportSymbol('proto.yartu.GetRepoHistoryRequest', null, global);
goog.exportSymbol('proto.yartu.GetRepoHistoryResponse', null, global);
goog.exportSymbol('proto.yartu.GetRepoRequest', null, global);
goog.exportSymbol('proto.yartu.GetRepoResponse', null, global);
goog.exportSymbol('proto.yartu.GetRepoTrashRequest', null, global);
goog.exportSymbol('proto.yartu.GetRepoTrashResponse', null, global);
goog.exportSymbol('proto.yartu.GetUploadPointRequest', null, global);
goog.exportSymbol('proto.yartu.GetUploadPointResponse', null, global);
goog.exportSymbol('proto.yartu.GroupBasic', null, global);
goog.exportSymbol('proto.yartu.ListConnectedClientRequest', null, global);
goog.exportSymbol('proto.yartu.ListConnectedClientResponse', null, global);
goog.exportSymbol('proto.yartu.ListDirentRequest', null, global);
goog.exportSymbol('proto.yartu.ListDirentResponse', null, global);
goog.exportSymbol('proto.yartu.ListPublicShareRequest', null, global);
goog.exportSymbol('proto.yartu.ListPublicShareResponse', null, global);
goog.exportSymbol('proto.yartu.ListRepoRequest', null, global);
goog.exportSymbol('proto.yartu.ListRepoResponse', null, global);
goog.exportSymbol('proto.yartu.ListSharePermissionTemplateRequest', null, global);
goog.exportSymbol('proto.yartu.ListSharePermissionTemplateResponse', null, global);
goog.exportSymbol('proto.yartu.ListShareRequest', null, global);
goog.exportSymbol('proto.yartu.ListShareResponse', null, global);
goog.exportSymbol('proto.yartu.ListUploadPointRequest', null, global);
goog.exportSymbol('proto.yartu.ListUploadPointResponse', null, global);
goog.exportSymbol('proto.yartu.LockDirentRequest', null, global);
goog.exportSymbol('proto.yartu.LockDirentResponse', null, global);
goog.exportSymbol('proto.yartu.LockInfo', null, global);
goog.exportSymbol('proto.yartu.PublicShare', null, global);
goog.exportSymbol('proto.yartu.PublicShareDirent', null, global);
goog.exportSymbol('proto.yartu.QueryZipProgressRequest', null, global);
goog.exportSymbol('proto.yartu.QueryZipProgressResponse', null, global);
goog.exportSymbol('proto.yartu.Repo', null, global);
goog.exportSymbol('proto.yartu.Repo.OwnerCase', null, global);
goog.exportSymbol('proto.yartu.RepoHistoryEntry', null, global);
goog.exportSymbol('proto.yartu.RepoHistoryTag', null, global);
goog.exportSymbol('proto.yartu.RepoTrashEntry', null, global);
goog.exportSymbol('proto.yartu.RevertDirentTrashRequest', null, global);
goog.exportSymbol('proto.yartu.RevertDirentTrashResponse', null, global);
goog.exportSymbol('proto.yartu.RevertRepoRequest', null, global);
goog.exportSymbol('proto.yartu.RevertRepoResponse', null, global);
goog.exportSymbol('proto.yartu.SaveEmailAttachmentToDriveRequest', null, global);
goog.exportSymbol('proto.yartu.SaveEmailAttachmentToDriveResponse', null, global);
goog.exportSymbol('proto.yartu.SetRepoPasswordRequest', null, global);
goog.exportSymbol('proto.yartu.SetRepoPasswordResponse', null, global);
goog.exportSymbol('proto.yartu.SharePermissionTemplate', null, global);
goog.exportSymbol('proto.yartu.ShareRequest', null, global);
goog.exportSymbol('proto.yartu.ShareResponse', null, global);
goog.exportSymbol('proto.yartu.ShareResult', null, global);
goog.exportSymbol('proto.yartu.ShareResult.ToCase', null, global);
goog.exportSymbol('proto.yartu.SharedByMeRequest', null, global);
goog.exportSymbol('proto.yartu.SharedByMeResponse', null, global);
goog.exportSymbol('proto.yartu.SharedWithMeRequest', null, global);
goog.exportSymbol('proto.yartu.SharedWithMeResponse', null, global);
goog.exportSymbol('proto.yartu.SignOutClientRequest', null, global);
goog.exportSymbol('proto.yartu.SignOutClientResponse', null, global);
goog.exportSymbol('proto.yartu.StarDirentRequest', null, global);
goog.exportSymbol('proto.yartu.StarDirentResponse', null, global);
goog.exportSymbol('proto.yartu.TransferRepoRequest', null, global);
goog.exportSymbol('proto.yartu.TransferRepoResponse', null, global);
goog.exportSymbol('proto.yartu.UnlockDirentRequest', null, global);
goog.exportSymbol('proto.yartu.UnlockDirentResponse', null, global);
goog.exportSymbol('proto.yartu.UnshareRequest', null, global);
goog.exportSymbol('proto.yartu.UnshareResponse', null, global);
goog.exportSymbol('proto.yartu.UploadFileRequest', null, global);
goog.exportSymbol('proto.yartu.UploadFileResponse', null, global);
goog.exportSymbol('proto.yartu.UploadPoint', null, global);
goog.exportSymbol('proto.yartu.UploadToken', null, global);
goog.exportSymbol('proto.yartu.UpsertDirectoryRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertDirectoryResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertDirentError', null, global);
goog.exportSymbol('proto.yartu.UpsertDirentRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertDirentResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertFileRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertFileResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertPublicShareRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertPublicShareResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertRepoRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertRepoResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertUploadPointRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertUploadPointResponse', null, global);
goog.exportSymbol('proto.yartu.UserBasic', null, global);
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
proto.yartu.UserBasic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UserBasic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UserBasic.displayName = 'proto.yartu.UserBasic';
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
proto.yartu.GroupBasic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GroupBasic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GroupBasic.displayName = 'proto.yartu.GroupBasic';
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
proto.yartu.DirInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DirInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DirInfo.displayName = 'proto.yartu.DirInfo';
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
proto.yartu.FileInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.FileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.FileInfo.displayName = 'proto.yartu.FileInfo';
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
proto.yartu.LockInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.LockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.LockInfo.displayName = 'proto.yartu.LockInfo';
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
proto.yartu.Repo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yartu.Repo.oneofGroups_);
};
goog.inherits(proto.yartu.Repo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Repo.displayName = 'proto.yartu.Repo';
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
proto.yartu.Dirent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yartu.Dirent.oneofGroups_);
};
goog.inherits(proto.yartu.Dirent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Dirent.displayName = 'proto.yartu.Dirent';
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
proto.yartu.UpsertDirentError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertDirentError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertDirentError.displayName = 'proto.yartu.UpsertDirentError';
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
proto.yartu.RepoHistoryTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RepoHistoryTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RepoHistoryTag.displayName = 'proto.yartu.RepoHistoryTag';
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
proto.yartu.RepoHistoryEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.RepoHistoryEntry.repeatedFields_, null);
};
goog.inherits(proto.yartu.RepoHistoryEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RepoHistoryEntry.displayName = 'proto.yartu.RepoHistoryEntry';
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
proto.yartu.RepoTrashEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RepoTrashEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RepoTrashEntry.displayName = 'proto.yartu.RepoTrashEntry';
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
proto.yartu.FileHistoryEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.FileHistoryEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.FileHistoryEntry.displayName = 'proto.yartu.FileHistoryEntry';
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
proto.yartu.AccessToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.AccessToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.AccessToken.displayName = 'proto.yartu.AccessToken';
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
proto.yartu.SharePermissionTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SharePermissionTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharePermissionTemplate.displayName = 'proto.yartu.SharePermissionTemplate';
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
proto.yartu.GetRecentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetRecentRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetRecentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRecentRequest.displayName = 'proto.yartu.GetRecentRequest';
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
proto.yartu.GetRecentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetRecentResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetRecentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRecentResponse.displayName = 'proto.yartu.GetRecentResponse';
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
proto.yartu.GetQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetQuotaRequest.displayName = 'proto.yartu.GetQuotaRequest';
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
proto.yartu.GetQuotaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetQuotaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetQuotaResponse.displayName = 'proto.yartu.GetQuotaResponse';
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
proto.yartu.GetRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRepoRequest.displayName = 'proto.yartu.GetRepoRequest';
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
proto.yartu.GetRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRepoResponse.displayName = 'proto.yartu.GetRepoResponse';
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
proto.yartu.UpsertRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertRepoRequest.displayName = 'proto.yartu.UpsertRepoRequest';
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
proto.yartu.UpsertRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertRepoResponse.displayName = 'proto.yartu.UpsertRepoResponse';
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
proto.yartu.DeleteRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteRepoRequest.displayName = 'proto.yartu.DeleteRepoRequest';
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
proto.yartu.DeleteRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteRepoResponse.displayName = 'proto.yartu.DeleteRepoResponse';
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
proto.yartu.ListRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListRepoRequest.displayName = 'proto.yartu.ListRepoRequest';
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
proto.yartu.ListRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListRepoResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListRepoResponse.displayName = 'proto.yartu.ListRepoResponse';
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
proto.yartu.GetRepoHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetRepoHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRepoHistoryRequest.displayName = 'proto.yartu.GetRepoHistoryRequest';
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
proto.yartu.GetRepoHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetRepoHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetRepoHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRepoHistoryResponse.displayName = 'proto.yartu.GetRepoHistoryResponse';
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
proto.yartu.GetRepoTrashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetRepoTrashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRepoTrashRequest.displayName = 'proto.yartu.GetRepoTrashRequest';
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
proto.yartu.GetRepoTrashResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetRepoTrashResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetRepoTrashResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetRepoTrashResponse.displayName = 'proto.yartu.GetRepoTrashResponse';
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
proto.yartu.RevertRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RevertRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RevertRepoRequest.displayName = 'proto.yartu.RevertRepoRequest';
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
proto.yartu.RevertRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RevertRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RevertRepoResponse.displayName = 'proto.yartu.RevertRepoResponse';
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
proto.yartu.SetRepoPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SetRepoPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SetRepoPasswordRequest.displayName = 'proto.yartu.SetRepoPasswordRequest';
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
proto.yartu.SetRepoPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SetRepoPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SetRepoPasswordResponse.displayName = 'proto.yartu.SetRepoPasswordResponse';
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
proto.yartu.TransferRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.TransferRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.TransferRepoRequest.displayName = 'proto.yartu.TransferRepoRequest';
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
proto.yartu.TransferRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.TransferRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.TransferRepoResponse.displayName = 'proto.yartu.TransferRepoResponse';
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
proto.yartu.GetDirentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetDirentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetDirentRequest.displayName = 'proto.yartu.GetDirentRequest';
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
proto.yartu.GetDirentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetDirentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetDirentResponse.displayName = 'proto.yartu.GetDirentResponse';
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
proto.yartu.ListDirentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListDirentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListDirentRequest.displayName = 'proto.yartu.ListDirentRequest';
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
proto.yartu.ListDirentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListDirentResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListDirentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListDirentResponse.displayName = 'proto.yartu.ListDirentResponse';
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
proto.yartu.StarDirentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.StarDirentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.StarDirentRequest.displayName = 'proto.yartu.StarDirentRequest';
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
proto.yartu.StarDirentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.StarDirentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.StarDirentResponse.displayName = 'proto.yartu.StarDirentResponse';
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
proto.yartu.UpsertDirentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertDirentRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertDirentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertDirentRequest.displayName = 'proto.yartu.UpsertDirentRequest';
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
proto.yartu.UpsertDirentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertDirentResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertDirentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertDirentResponse.displayName = 'proto.yartu.UpsertDirentResponse';
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
proto.yartu.UpsertDirectoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertDirectoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertDirectoryRequest.displayName = 'proto.yartu.UpsertDirectoryRequest';
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
proto.yartu.UpsertDirectoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertDirectoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertDirectoryResponse.displayName = 'proto.yartu.UpsertDirectoryResponse';
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
proto.yartu.UpsertFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertFileRequest.displayName = 'proto.yartu.UpsertFileRequest';
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
proto.yartu.UpsertFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertFileResponse.displayName = 'proto.yartu.UpsertFileResponse';
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
proto.yartu.UploadToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UploadToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UploadToken.displayName = 'proto.yartu.UploadToken';
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
proto.yartu.UploadFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UploadFileRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UploadFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UploadFileRequest.displayName = 'proto.yartu.UploadFileRequest';
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
proto.yartu.UploadFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UploadFileResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.UploadFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UploadFileResponse.displayName = 'proto.yartu.UploadFileResponse';
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
proto.yartu.DownloadFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DownloadFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DownloadFileRequest.displayName = 'proto.yartu.DownloadFileRequest';
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
proto.yartu.DownloadFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DownloadFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DownloadFileResponse.displayName = 'proto.yartu.DownloadFileResponse';
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
proto.yartu.GetFileHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetFileHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetFileHistoryRequest.displayName = 'proto.yartu.GetFileHistoryRequest';
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
proto.yartu.GetFileHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetFileHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetFileHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetFileHistoryResponse.displayName = 'proto.yartu.GetFileHistoryResponse';
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
proto.yartu.GetOfficeFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetOfficeFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetOfficeFileRequest.displayName = 'proto.yartu.GetOfficeFileRequest';
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
proto.yartu.GetOfficeFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetOfficeFileResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetOfficeFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetOfficeFileResponse.displayName = 'proto.yartu.GetOfficeFileResponse';
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
proto.yartu.SaveEmailAttachmentToDriveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SaveEmailAttachmentToDriveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SaveEmailAttachmentToDriveRequest.displayName = 'proto.yartu.SaveEmailAttachmentToDriveRequest';
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
proto.yartu.SaveEmailAttachmentToDriveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SaveEmailAttachmentToDriveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SaveEmailAttachmentToDriveResponse.displayName = 'proto.yartu.SaveEmailAttachmentToDriveResponse';
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
proto.yartu.DownloadDirentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DownloadDirentRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.DownloadDirentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DownloadDirentRequest.displayName = 'proto.yartu.DownloadDirentRequest';
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
proto.yartu.DownloadDirentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DownloadDirentResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.DownloadDirentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DownloadDirentResponse.displayName = 'proto.yartu.DownloadDirentResponse';
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
proto.yartu.QueryZipProgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.QueryZipProgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.QueryZipProgressRequest.displayName = 'proto.yartu.QueryZipProgressRequest';
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
proto.yartu.QueryZipProgressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.QueryZipProgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.QueryZipProgressResponse.displayName = 'proto.yartu.QueryZipProgressResponse';
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
proto.yartu.LockDirentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.LockDirentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.LockDirentRequest.displayName = 'proto.yartu.LockDirentRequest';
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
proto.yartu.LockDirentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.LockDirentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.LockDirentResponse.displayName = 'proto.yartu.LockDirentResponse';
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
proto.yartu.UnlockDirentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UnlockDirentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnlockDirentRequest.displayName = 'proto.yartu.UnlockDirentRequest';
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
proto.yartu.UnlockDirentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UnlockDirentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnlockDirentResponse.displayName = 'proto.yartu.UnlockDirentResponse';
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
proto.yartu.RevertDirentTrashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RevertDirentTrashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RevertDirentTrashRequest.displayName = 'proto.yartu.RevertDirentTrashRequest';
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
proto.yartu.RevertDirentTrashResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RevertDirentTrashResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RevertDirentTrashResponse.displayName = 'proto.yartu.RevertDirentTrashResponse';
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
proto.yartu.ShareResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yartu.ShareResult.oneofGroups_);
};
goog.inherits(proto.yartu.ShareResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ShareResult.displayName = 'proto.yartu.ShareResult';
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
proto.yartu.DriveSharedObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DriveSharedObject.repeatedFields_, proto.yartu.DriveSharedObject.oneofGroups_);
};
goog.inherits(proto.yartu.DriveSharedObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DriveSharedObject.displayName = 'proto.yartu.DriveSharedObject';
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
proto.yartu.ListShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListShareRequest.displayName = 'proto.yartu.ListShareRequest';
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
proto.yartu.ListShareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListShareResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListShareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListShareResponse.displayName = 'proto.yartu.ListShareResponse';
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
proto.yartu.ShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ShareRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.ShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ShareRequest.displayName = 'proto.yartu.ShareRequest';
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
proto.yartu.ShareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ShareResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ShareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ShareResponse.displayName = 'proto.yartu.ShareResponse';
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
proto.yartu.UnshareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UnshareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnshareRequest.displayName = 'proto.yartu.UnshareRequest';
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
proto.yartu.UnshareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UnshareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnshareResponse.displayName = 'proto.yartu.UnshareResponse';
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
proto.yartu.DeleteShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DeleteShareRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.DeleteShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteShareRequest.displayName = 'proto.yartu.DeleteShareRequest';
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
proto.yartu.DeleteShareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.DeleteShareResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.DeleteShareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteShareResponse.displayName = 'proto.yartu.DeleteShareResponse';
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
proto.yartu.ListSharePermissionTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListSharePermissionTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharePermissionTemplateRequest.displayName = 'proto.yartu.ListSharePermissionTemplateRequest';
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
proto.yartu.ListSharePermissionTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListSharePermissionTemplateResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListSharePermissionTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharePermissionTemplateResponse.displayName = 'proto.yartu.ListSharePermissionTemplateResponse';
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
proto.yartu.SharedWithMeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SharedWithMeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharedWithMeRequest.displayName = 'proto.yartu.SharedWithMeRequest';
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
proto.yartu.SharedWithMeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.SharedWithMeResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.SharedWithMeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharedWithMeResponse.displayName = 'proto.yartu.SharedWithMeResponse';
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
proto.yartu.SharedByMeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SharedByMeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharedByMeRequest.displayName = 'proto.yartu.SharedByMeRequest';
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
proto.yartu.SharedByMeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.SharedByMeResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.SharedByMeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharedByMeResponse.displayName = 'proto.yartu.SharedByMeResponse';
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
proto.yartu.PublicShare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.PublicShare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.PublicShare.displayName = 'proto.yartu.PublicShare';
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
proto.yartu.PublicShareDirent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.PublicShareDirent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.PublicShareDirent.displayName = 'proto.yartu.PublicShareDirent';
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
proto.yartu.ListPublicShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListPublicShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListPublicShareRequest.displayName = 'proto.yartu.ListPublicShareRequest';
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
proto.yartu.ListPublicShareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListPublicShareResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListPublicShareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListPublicShareResponse.displayName = 'proto.yartu.ListPublicShareResponse';
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
proto.yartu.UpsertPublicShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertPublicShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertPublicShareRequest.displayName = 'proto.yartu.UpsertPublicShareRequest';
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
proto.yartu.UpsertPublicShareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertPublicShareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertPublicShareResponse.displayName = 'proto.yartu.UpsertPublicShareResponse';
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
proto.yartu.DeletePublicShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeletePublicShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeletePublicShareRequest.displayName = 'proto.yartu.DeletePublicShareRequest';
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
proto.yartu.DeletePublicShareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeletePublicShareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeletePublicShareResponse.displayName = 'proto.yartu.DeletePublicShareResponse';
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
proto.yartu.GetPublicShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPublicShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPublicShareRequest.displayName = 'proto.yartu.GetPublicShareRequest';
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
proto.yartu.GetPublicShareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.GetPublicShareResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.GetPublicShareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPublicShareResponse.displayName = 'proto.yartu.GetPublicShareResponse';
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
proto.yartu.GetPublicShareDownloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPublicShareDownloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPublicShareDownloadRequest.displayName = 'proto.yartu.GetPublicShareDownloadRequest';
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
proto.yartu.GetPublicShareDownloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetPublicShareDownloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetPublicShareDownloadResponse.displayName = 'proto.yartu.GetPublicShareDownloadResponse';
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
proto.yartu.UploadPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UploadPoint.repeatedFields_, null);
};
goog.inherits(proto.yartu.UploadPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UploadPoint.displayName = 'proto.yartu.UploadPoint';
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
proto.yartu.ListUploadPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListUploadPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListUploadPointRequest.displayName = 'proto.yartu.ListUploadPointRequest';
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
proto.yartu.ListUploadPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListUploadPointResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListUploadPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListUploadPointResponse.displayName = 'proto.yartu.ListUploadPointResponse';
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
proto.yartu.UpsertUploadPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertUploadPointRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertUploadPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertUploadPointRequest.displayName = 'proto.yartu.UpsertUploadPointRequest';
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
proto.yartu.UpsertUploadPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertUploadPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertUploadPointResponse.displayName = 'proto.yartu.UpsertUploadPointResponse';
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
proto.yartu.DeleteUploadPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteUploadPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteUploadPointRequest.displayName = 'proto.yartu.DeleteUploadPointRequest';
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
proto.yartu.DeleteUploadPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteUploadPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteUploadPointResponse.displayName = 'proto.yartu.DeleteUploadPointResponse';
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
proto.yartu.GetUploadPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetUploadPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetUploadPointRequest.displayName = 'proto.yartu.GetUploadPointRequest';
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
proto.yartu.GetUploadPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetUploadPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetUploadPointResponse.displayName = 'proto.yartu.GetUploadPointResponse';
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
proto.yartu.DriveClient = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DriveClient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DriveClient.displayName = 'proto.yartu.DriveClient';
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
proto.yartu.ListConnectedClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListConnectedClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListConnectedClientRequest.displayName = 'proto.yartu.ListConnectedClientRequest';
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
proto.yartu.ListConnectedClientResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListConnectedClientResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListConnectedClientResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListConnectedClientResponse.displayName = 'proto.yartu.ListConnectedClientResponse';
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
proto.yartu.SignOutClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SignOutClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SignOutClientRequest.displayName = 'proto.yartu.SignOutClientRequest';
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
proto.yartu.SignOutClientResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SignOutClientResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SignOutClientResponse.displayName = 'proto.yartu.SignOutClientResponse';
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
proto.yartu.UserBasic.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UserBasic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UserBasic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UserBasic.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yartu.UserBasic}
 */
proto.yartu.UserBasic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UserBasic;
  return proto.yartu.UserBasic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UserBasic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UserBasic}
 */
proto.yartu.UserBasic.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
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
proto.yartu.UserBasic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UserBasic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UserBasic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UserBasic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsername();
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
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UserBasic.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UserBasic} returns this
 */
proto.yartu.UserBasic.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.yartu.UserBasic.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UserBasic} returns this
 */
proto.yartu.UserBasic.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yartu.UserBasic.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UserBasic} returns this
 */
proto.yartu.UserBasic.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string surname = 4;
 * @return {string}
 */
proto.yartu.UserBasic.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UserBasic} returns this
 */
proto.yartu.UserBasic.prototype.setSurname = function(value) {
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
proto.yartu.GroupBasic.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GroupBasic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GroupBasic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GroupBasic.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GroupBasic}
 */
proto.yartu.GroupBasic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GroupBasic;
  return proto.yartu.GroupBasic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GroupBasic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GroupBasic}
 */
proto.yartu.GroupBasic.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GroupBasic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GroupBasic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GroupBasic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GroupBasic.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.GroupBasic.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GroupBasic} returns this
 */
proto.yartu.GroupBasic.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.GroupBasic.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GroupBasic} returns this
 */
proto.yartu.GroupBasic.prototype.setName = function(value) {
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
proto.yartu.DirInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DirInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DirInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DirInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dirCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yartu.DirInfo}
 */
proto.yartu.DirInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DirInfo;
  return proto.yartu.DirInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DirInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DirInfo}
 */
proto.yartu.DirInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDirCount(value);
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
proto.yartu.DirInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DirInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DirInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DirInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDirCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 file_count = 1;
 * @return {number}
 */
proto.yartu.DirInfo.prototype.getFileCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DirInfo} returns this
 */
proto.yartu.DirInfo.prototype.setFileCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 dir_count = 2;
 * @return {number}
 */
proto.yartu.DirInfo.prototype.getDirCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DirInfo} returns this
 */
proto.yartu.DirInfo.prototype.setDirCount = function(value) {
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
proto.yartu.FileInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.FileInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.FileInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.FileInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileext: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filetype: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.FileInfo}
 */
proto.yartu.FileInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.FileInfo;
  return proto.yartu.FileInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.FileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.FileInfo}
 */
proto.yartu.FileInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFiletype(value);
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
proto.yartu.FileInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.FileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.FileInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.FileInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileext();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFiletype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string fileext = 1;
 * @return {string}
 */
proto.yartu.FileInfo.prototype.getFileext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.FileInfo} returns this
 */
proto.yartu.FileInfo.prototype.setFileext = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filetype = 2;
 * @return {string}
 */
proto.yartu.FileInfo.prototype.getFiletype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.FileInfo} returns this
 */
proto.yartu.FileInfo.prototype.setFiletype = function(value) {
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
proto.yartu.LockInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.LockInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.LockInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.LockInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    comment: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yartu.LockInfo}
 */
proto.yartu.LockInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.LockInfo;
  return proto.yartu.LockInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.LockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.LockInfo}
 */
proto.yartu.LockInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
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
proto.yartu.LockInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.LockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.LockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.LockInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.yartu.LockInfo.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.LockInfo} returns this
 */
proto.yartu.LockInfo.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string time = 2;
 * @return {string}
 */
proto.yartu.LockInfo.prototype.getTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.LockInfo} returns this
 */
proto.yartu.LockInfo.prototype.setTime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 type = 3;
 * @return {number}
 */
proto.yartu.LockInfo.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.LockInfo} returns this
 */
proto.yartu.LockInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string comment = 4;
 * @return {string}
 */
proto.yartu.LockInfo.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.LockInfo} returns this
 */
proto.yartu.LockInfo.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yartu.Repo.oneofGroups_ = [[8,9]];

/**
 * @enum {number}
 */
proto.yartu.Repo.OwnerCase = {
  OWNER_NOT_SET: 0,
  OWNER_USER: 8,
  OWNER_GROUP: 9
};

/**
 * @return {proto.yartu.Repo.OwnerCase}
 */
proto.yartu.Repo.prototype.getOwnerCase = function() {
  return /** @type {proto.yartu.Repo.OwnerCase} */(jspb.Message.computeOneofCase(this, proto.yartu.Repo.oneofGroups_[0]));
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
proto.yartu.Repo.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Repo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Repo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Repo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    headCommitId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    version: jspb.Message.getFieldWithDefault(msg, 5, 0),
    mtime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    size: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ownerUser: (f = msg.getOwnerUser()) && proto.yartu.UserBasic.toObject(includeInstance, f),
    ownerGroup: (f = msg.getOwnerGroup()) && proto.yartu.GroupBasic.toObject(includeInstance, f),
    modifier: (f = msg.getModifier()) && proto.yartu.UserBasic.toObject(includeInstance, f),
    permission: jspb.Message.getFieldWithDefault(msg, 11, ""),
    customPermissionMap: (f = msg.getCustomPermissionMap()) ? f.toObject(includeInstance, undefined) : [],
    root: jspb.Message.getFieldWithDefault(msg, 13, ""),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    isVirtual: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    isEncrypted: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    isStarred: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    type: jspb.Message.getFieldWithDefault(msg, 18, ""),
    shareFrom: jspb.Message.getFieldWithDefault(msg, 19, ""),
    shareType: jspb.Message.getFieldWithDefault(msg, 20, ""),
    encVersion: jspb.Message.getFieldWithDefault(msg, 21, 0),
    salt: jspb.Message.getFieldWithDefault(msg, 22, ""),
    groupId: jspb.Message.getFieldWithDefault(msg, 23, 0),
    groupName: jspb.Message.getFieldWithDefault(msg, 24, ""),
    fileCount: jspb.Message.getFieldWithDefault(msg, 25, 0),
    dirCount: jspb.Message.getFieldWithDefault(msg, 26, 0)
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
 * @return {!proto.yartu.Repo}
 */
proto.yartu.Repo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Repo;
  return proto.yartu.Repo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Repo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Repo}
 */
proto.yartu.Repo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadCommitId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMtime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 8:
      var value = new proto.yartu.UserBasic;
      reader.readMessage(value,proto.yartu.UserBasic.deserializeBinaryFromReader);
      msg.setOwnerUser(value);
      break;
    case 9:
      var value = new proto.yartu.GroupBasic;
      reader.readMessage(value,proto.yartu.GroupBasic.deserializeBinaryFromReader);
      msg.setOwnerGroup(value);
      break;
    case 10:
      var value = new proto.yartu.UserBasic;
      reader.readMessage(value,proto.yartu.UserBasic.deserializeBinaryFromReader);
      msg.setModifier(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 12:
      var value = msg.getCustomPermissionMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoot(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVirtual(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEncrypted(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStarred(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setShareFrom(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setShareType(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEncVersion(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setSalt(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileCount(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDirCount(value);
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
proto.yartu.Repo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Repo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Repo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Repo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeadCommitId();
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
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMtime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getOwnerUser();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yartu.UserBasic.serializeBinaryToWriter
    );
  }
  f = message.getOwnerGroup();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yartu.GroupBasic.serializeBinaryToWriter
    );
  }
  f = message.getModifier();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.yartu.UserBasic.serializeBinaryToWriter
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCustomPermissionMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getRoot();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIsVirtual();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getIsEncrypted();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getIsStarred();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getShareFrom();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getShareType();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getEncVersion();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getSalt();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getFileCount();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getDirCount();
  if (f !== 0) {
    writer.writeInt64(
      26,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yartu.Repo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string head_commit_id = 2;
 * @return {string}
 */
proto.yartu.Repo.prototype.getHeadCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setHeadCommitId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yartu.Repo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.yartu.Repo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 version = 5;
 * @return {number}
 */
proto.yartu.Repo.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 mtime = 6;
 * @return {number}
 */
proto.yartu.Repo.prototype.getMtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setMtime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 size = 7;
 * @return {number}
 */
proto.yartu.Repo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional UserBasic owner_user = 8;
 * @return {?proto.yartu.UserBasic}
 */
proto.yartu.Repo.prototype.getOwnerUser = function() {
  return /** @type{?proto.yartu.UserBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UserBasic, 8));
};


/**
 * @param {?proto.yartu.UserBasic|undefined} value
 * @return {!proto.yartu.Repo} returns this
*/
proto.yartu.Repo.prototype.setOwnerUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.yartu.Repo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.clearOwnerUser = function() {
  return this.setOwnerUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Repo.prototype.hasOwnerUser = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional GroupBasic owner_group = 9;
 * @return {?proto.yartu.GroupBasic}
 */
proto.yartu.Repo.prototype.getOwnerGroup = function() {
  return /** @type{?proto.yartu.GroupBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.GroupBasic, 9));
};


/**
 * @param {?proto.yartu.GroupBasic|undefined} value
 * @return {!proto.yartu.Repo} returns this
*/
proto.yartu.Repo.prototype.setOwnerGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.yartu.Repo.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.clearOwnerGroup = function() {
  return this.setOwnerGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Repo.prototype.hasOwnerGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional UserBasic modifier = 10;
 * @return {?proto.yartu.UserBasic}
 */
proto.yartu.Repo.prototype.getModifier = function() {
  return /** @type{?proto.yartu.UserBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UserBasic, 10));
};


/**
 * @param {?proto.yartu.UserBasic|undefined} value
 * @return {!proto.yartu.Repo} returns this
*/
proto.yartu.Repo.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Repo.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string permission = 11;
 * @return {string}
 */
proto.yartu.Repo.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * map<string, bool> custom_permission = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.yartu.Repo.prototype.getCustomPermissionMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.clearCustomPermissionMap = function() {
  this.getCustomPermissionMap().clear();
  return this;
};


/**
 * optional string root = 13;
 * @return {string}
 */
proto.yartu.Repo.prototype.getRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setRoot = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool is_default = 14;
 * @return {boolean}
 */
proto.yartu.Repo.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool is_virtual = 15;
 * @return {boolean}
 */
proto.yartu.Repo.prototype.getIsVirtual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setIsVirtual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool is_encrypted = 16;
 * @return {boolean}
 */
proto.yartu.Repo.prototype.getIsEncrypted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setIsEncrypted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool is_starred = 17;
 * @return {boolean}
 */
proto.yartu.Repo.prototype.getIsStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setIsStarred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional string type = 18;
 * @return {string}
 */
proto.yartu.Repo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string share_from = 19;
 * @return {string}
 */
proto.yartu.Repo.prototype.getShareFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setShareFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string share_type = 20;
 * @return {string}
 */
proto.yartu.Repo.prototype.getShareType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setShareType = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int64 enc_version = 21;
 * @return {number}
 */
proto.yartu.Repo.prototype.getEncVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setEncVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional string salt = 22;
 * @return {string}
 */
proto.yartu.Repo.prototype.getSalt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setSalt = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional int64 group_id = 23;
 * @return {number}
 */
proto.yartu.Repo.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional string group_name = 24;
 * @return {string}
 */
proto.yartu.Repo.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional int64 file_count = 25;
 * @return {number}
 */
proto.yartu.Repo.prototype.getFileCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setFileCount = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional int64 dir_count = 26;
 * @return {number}
 */
proto.yartu.Repo.prototype.getDirCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Repo} returns this
 */
proto.yartu.Repo.prototype.setDirCount = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yartu.Dirent.oneofGroups_ = [[15,16],[17,18]];

/**
 * @enum {number}
 */
proto.yartu.Dirent.OwnerCase = {
  OWNER_NOT_SET: 0,
  OWNER_USER: 15,
  OWNER_GROUP: 16
};

/**
 * @return {proto.yartu.Dirent.OwnerCase}
 */
proto.yartu.Dirent.prototype.getOwnerCase = function() {
  return /** @type {proto.yartu.Dirent.OwnerCase} */(jspb.Message.computeOneofCase(this, proto.yartu.Dirent.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.yartu.Dirent.InfoCase = {
  INFO_NOT_SET: 0,
  DIR_INFO: 17,
  FILE_INFO: 18
};

/**
 * @return {proto.yartu.Dirent.InfoCase}
 */
proto.yartu.Dirent.prototype.getInfoCase = function() {
  return /** @type {proto.yartu.Dirent.InfoCase} */(jspb.Message.computeOneofCase(this, proto.yartu.Dirent.oneofGroups_[1]));
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
proto.yartu.Dirent.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Dirent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Dirent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Dirent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    repoId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parentDir: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    mtime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ctime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    encVersion: jspb.Message.getFieldWithDefault(msg, 9, 0),
    isShared: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    isStarred: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    permission: jspb.Message.getFieldWithDefault(msg, 12, ""),
    customPermissionMap: (f = msg.getCustomPermissionMap()) ? f.toObject(includeInstance, undefined) : [],
    modifier: (f = msg.getModifier()) && proto.yartu.UserBasic.toObject(includeInstance, f),
    ownerUser: (f = msg.getOwnerUser()) && proto.yartu.UserBasic.toObject(includeInstance, f),
    ownerGroup: (f = msg.getOwnerGroup()) && proto.yartu.GroupBasic.toObject(includeInstance, f),
    dirInfo: (f = msg.getDirInfo()) && proto.yartu.DirInfo.toObject(includeInstance, f),
    fileInfo: (f = msg.getFileInfo()) && proto.yartu.FileInfo.toObject(includeInstance, f),
    lock: (f = msg.getLock()) && proto.yartu.LockInfo.toObject(includeInstance, f),
    deletedTime: jspb.Message.getFieldWithDefault(msg, 20, 0),
    scanStat: jspb.Message.getFieldWithDefault(msg, 21, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 22, "")
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
 * @return {!proto.yartu.Dirent}
 */
proto.yartu.Dirent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Dirent;
  return proto.yartu.Dirent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Dirent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Dirent}
 */
proto.yartu.Dirent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentDir(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMtime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEncVersion(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsShared(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStarred(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 13:
      var value = msg.getCustomPermissionMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    case 14:
      var value = new proto.yartu.UserBasic;
      reader.readMessage(value,proto.yartu.UserBasic.deserializeBinaryFromReader);
      msg.setModifier(value);
      break;
    case 15:
      var value = new proto.yartu.UserBasic;
      reader.readMessage(value,proto.yartu.UserBasic.deserializeBinaryFromReader);
      msg.setOwnerUser(value);
      break;
    case 16:
      var value = new proto.yartu.GroupBasic;
      reader.readMessage(value,proto.yartu.GroupBasic.deserializeBinaryFromReader);
      msg.setOwnerGroup(value);
      break;
    case 17:
      var value = new proto.yartu.DirInfo;
      reader.readMessage(value,proto.yartu.DirInfo.deserializeBinaryFromReader);
      msg.setDirInfo(value);
      break;
    case 18:
      var value = new proto.yartu.FileInfo;
      reader.readMessage(value,proto.yartu.FileInfo.deserializeBinaryFromReader);
      msg.setFileInfo(value);
      break;
    case 19:
      var value = new proto.yartu.LockInfo;
      reader.readMessage(value,proto.yartu.LockInfo.deserializeBinaryFromReader);
      msg.setLock(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeletedTime(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanStat(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
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
proto.yartu.Dirent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Dirent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Dirent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Dirent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParentDir();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
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
  f = message.getMtime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCtime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getEncVersion();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getIsShared();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIsStarred();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCustomPermissionMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getModifier();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.yartu.UserBasic.serializeBinaryToWriter
    );
  }
  f = message.getOwnerUser();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.yartu.UserBasic.serializeBinaryToWriter
    );
  }
  f = message.getOwnerGroup();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.yartu.GroupBasic.serializeBinaryToWriter
    );
  }
  f = message.getDirInfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.yartu.DirInfo.serializeBinaryToWriter
    );
  }
  f = message.getFileInfo();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.yartu.FileInfo.serializeBinaryToWriter
    );
  }
  f = message.getLock();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.yartu.LockInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeString(
      21,
      f
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
 * optional string id = 1;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string repo_id = 3;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string parent_dir = 4;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getParentDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setParentDir = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 size = 6;
 * @return {number}
 */
proto.yartu.Dirent.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 mtime = 7;
 * @return {number}
 */
proto.yartu.Dirent.prototype.getMtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setMtime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 ctime = 8;
 * @return {number}
 */
proto.yartu.Dirent.prototype.getCtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setCtime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 enc_version = 9;
 * @return {number}
 */
proto.yartu.Dirent.prototype.getEncVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setEncVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool is_shared = 10;
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.getIsShared = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setIsShared = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool is_starred = 11;
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.getIsStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setIsStarred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string permission = 12;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * map<string, bool> custom_permission = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.yartu.Dirent.prototype.getCustomPermissionMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearCustomPermissionMap = function() {
  this.getCustomPermissionMap().clear();
  return this;
};


/**
 * optional UserBasic modifier = 14;
 * @return {?proto.yartu.UserBasic}
 */
proto.yartu.Dirent.prototype.getModifier = function() {
  return /** @type{?proto.yartu.UserBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UserBasic, 14));
};


/**
 * @param {?proto.yartu.UserBasic|undefined} value
 * @return {!proto.yartu.Dirent} returns this
*/
proto.yartu.Dirent.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional UserBasic owner_user = 15;
 * @return {?proto.yartu.UserBasic}
 */
proto.yartu.Dirent.prototype.getOwnerUser = function() {
  return /** @type{?proto.yartu.UserBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UserBasic, 15));
};


/**
 * @param {?proto.yartu.UserBasic|undefined} value
 * @return {!proto.yartu.Dirent} returns this
*/
proto.yartu.Dirent.prototype.setOwnerUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.yartu.Dirent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearOwnerUser = function() {
  return this.setOwnerUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasOwnerUser = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional GroupBasic owner_group = 16;
 * @return {?proto.yartu.GroupBasic}
 */
proto.yartu.Dirent.prototype.getOwnerGroup = function() {
  return /** @type{?proto.yartu.GroupBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.GroupBasic, 16));
};


/**
 * @param {?proto.yartu.GroupBasic|undefined} value
 * @return {!proto.yartu.Dirent} returns this
*/
proto.yartu.Dirent.prototype.setOwnerGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.yartu.Dirent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearOwnerGroup = function() {
  return this.setOwnerGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasOwnerGroup = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional DirInfo dir_info = 17;
 * @return {?proto.yartu.DirInfo}
 */
proto.yartu.Dirent.prototype.getDirInfo = function() {
  return /** @type{?proto.yartu.DirInfo} */ (
    jspb.Message.getWrapperField(this, proto.yartu.DirInfo, 17));
};


/**
 * @param {?proto.yartu.DirInfo|undefined} value
 * @return {!proto.yartu.Dirent} returns this
*/
proto.yartu.Dirent.prototype.setDirInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.yartu.Dirent.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearDirInfo = function() {
  return this.setDirInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasDirInfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional FileInfo file_info = 18;
 * @return {?proto.yartu.FileInfo}
 */
proto.yartu.Dirent.prototype.getFileInfo = function() {
  return /** @type{?proto.yartu.FileInfo} */ (
    jspb.Message.getWrapperField(this, proto.yartu.FileInfo, 18));
};


/**
 * @param {?proto.yartu.FileInfo|undefined} value
 * @return {!proto.yartu.Dirent} returns this
*/
proto.yartu.Dirent.prototype.setFileInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.yartu.Dirent.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearFileInfo = function() {
  return this.setFileInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasFileInfo = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional LockInfo lock = 19;
 * @return {?proto.yartu.LockInfo}
 */
proto.yartu.Dirent.prototype.getLock = function() {
  return /** @type{?proto.yartu.LockInfo} */ (
    jspb.Message.getWrapperField(this, proto.yartu.LockInfo, 19));
};


/**
 * @param {?proto.yartu.LockInfo|undefined} value
 * @return {!proto.yartu.Dirent} returns this
*/
proto.yartu.Dirent.prototype.setLock = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearLock = function() {
  return this.setLock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasLock = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int64 deleted_time = 20;
 * @return {number}
 */
proto.yartu.Dirent.prototype.getDeletedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setDeletedTime = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearDeletedTime = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasDeletedTime = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string scan_stat = 21;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getScanStat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setScanStat = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearScanStat = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasScanStat = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string commit_id = 22;
 * @return {string}
 */
proto.yartu.Dirent.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.setCommitId = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Dirent} returns this
 */
proto.yartu.Dirent.prototype.clearCommitId = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Dirent.prototype.hasCommitId = function() {
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
proto.yartu.UpsertDirentError.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertDirentError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertDirentError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirentError.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.yartu.UpsertDirentError}
 */
proto.yartu.UpsertDirentError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertDirentError;
  return proto.yartu.UpsertDirentError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertDirentError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertDirentError}
 */
proto.yartu.UpsertDirentError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
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
proto.yartu.UpsertDirentError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertDirentError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertDirentError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirentError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
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
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.yartu.UpsertDirentError.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentError} returns this
 */
proto.yartu.UpsertDirentError.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 code = 2;
 * @return {number}
 */
proto.yartu.UpsertDirentError.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertDirentError} returns this
 */
proto.yartu.UpsertDirentError.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UpsertDirentError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentError} returns this
 */
proto.yartu.UpsertDirentError.prototype.setMessage = function(value) {
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
proto.yartu.RepoHistoryTag.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RepoHistoryTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RepoHistoryTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RepoHistoryTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.RepoHistoryTag}
 */
proto.yartu.RepoHistoryTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RepoHistoryTag;
  return proto.yartu.RepoHistoryTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RepoHistoryTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RepoHistoryTag}
 */
proto.yartu.RepoHistoryTag.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPath(value);
      break;
    case 3:
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
proto.yartu.RepoHistoryTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RepoHistoryTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RepoHistoryTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RepoHistoryTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPath();
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
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.RepoHistoryTag.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RepoHistoryTag} returns this
 */
proto.yartu.RepoHistoryTag.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.RepoHistoryTag.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryTag} returns this
 */
proto.yartu.RepoHistoryTag.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yartu.RepoHistoryTag.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryTag} returns this
 */
proto.yartu.RepoHistoryTag.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.RepoHistoryEntry.repeatedFields_ = [9];



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
proto.yartu.RepoHistoryEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RepoHistoryEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RepoHistoryEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RepoHistoryEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: (f = msg.getUser()) && proto.yartu.UserBasic.toObject(includeInstance, f),
    ctime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    secondParentId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.yartu.RepoHistoryTag.toObject, includeInstance)
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
 * @return {!proto.yartu.RepoHistoryEntry}
 */
proto.yartu.RepoHistoryEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RepoHistoryEntry;
  return proto.yartu.RepoHistoryEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RepoHistoryEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RepoHistoryEntry}
 */
proto.yartu.RepoHistoryEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 3:
      var value = new proto.yartu.UserBasic;
      reader.readMessage(value,proto.yartu.UserBasic.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondParentId(value);
      break;
    case 9:
      var value = new proto.yartu.RepoHistoryTag;
      reader.readMessage(value,proto.yartu.RepoHistoryTag.deserializeBinaryFromReader);
      msg.addTags(value);
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
proto.yartu.RepoHistoryEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RepoHistoryEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RepoHistoryEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RepoHistoryEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommitId();
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
      proto.yartu.UserBasic.serializeBinaryToWriter
    );
  }
  f = message.getCtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSecondParentId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yartu.RepoHistoryTag.serializeBinaryToWriter
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.RepoHistoryEntry.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit_id = 2;
 * @return {string}
 */
proto.yartu.RepoHistoryEntry.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.setCommitId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UserBasic user = 3;
 * @return {?proto.yartu.UserBasic}
 */
proto.yartu.RepoHistoryEntry.prototype.getUser = function() {
  return /** @type{?proto.yartu.UserBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UserBasic, 3));
};


/**
 * @param {?proto.yartu.UserBasic|undefined} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
*/
proto.yartu.RepoHistoryEntry.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RepoHistoryEntry.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 ctime = 4;
 * @return {number}
 */
proto.yartu.RepoHistoryEntry.prototype.getCtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.setCtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yartu.RepoHistoryEntry.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string client_version = 6;
 * @return {string}
 */
proto.yartu.RepoHistoryEntry.prototype.getClientVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.setClientVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string device_name = 7;
 * @return {string}
 */
proto.yartu.RepoHistoryEntry.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.setDeviceName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string second_parent_id = 8;
 * @return {string}
 */
proto.yartu.RepoHistoryEntry.prototype.getSecondParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.setSecondParentId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated RepoHistoryTag tags = 9;
 * @return {!Array<!proto.yartu.RepoHistoryTag>}
 */
proto.yartu.RepoHistoryEntry.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.yartu.RepoHistoryTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.RepoHistoryTag, 9));
};


/**
 * @param {!Array<!proto.yartu.RepoHistoryTag>} value
 * @return {!proto.yartu.RepoHistoryEntry} returns this
*/
proto.yartu.RepoHistoryEntry.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yartu.RepoHistoryTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.RepoHistoryTag}
 */
proto.yartu.RepoHistoryEntry.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yartu.RepoHistoryTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.RepoHistoryEntry} returns this
 */
proto.yartu.RepoHistoryEntry.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.yartu.RepoTrashEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RepoTrashEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RepoTrashEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RepoTrashEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    objId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parentDir: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    dtime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    isFile: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    scanStat: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.yartu.RepoTrashEntry}
 */
proto.yartu.RepoTrashEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RepoTrashEntry;
  return proto.yartu.RepoTrashEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RepoTrashEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RepoTrashEntry}
 */
proto.yartu.RepoTrashEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentDir(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDtime(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFile(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanStat(value);
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
proto.yartu.RepoTrashEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RepoTrashEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RepoTrashEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RepoTrashEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommitId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getObjId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParentDir();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
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
  f = message.getDtime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getIsFile();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getScanStat();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.RepoTrashEntry.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit_id = 2;
 * @return {string}
 */
proto.yartu.RepoTrashEntry.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setCommitId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string obj_id = 3;
 * @return {string}
 */
proto.yartu.RepoTrashEntry.prototype.getObjId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setObjId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string parent_dir = 4;
 * @return {string}
 */
proto.yartu.RepoTrashEntry.prototype.getParentDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setParentDir = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.yartu.RepoTrashEntry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 size = 6;
 * @return {number}
 */
proto.yartu.RepoTrashEntry.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 dtime = 7;
 * @return {number}
 */
proto.yartu.RepoTrashEntry.prototype.getDtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setDtime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool is_file = 8;
 * @return {boolean}
 */
proto.yartu.RepoTrashEntry.prototype.getIsFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setIsFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string scan_stat = 9;
 * @return {string}
 */
proto.yartu.RepoTrashEntry.prototype.getScanStat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RepoTrashEntry} returns this
 */
proto.yartu.RepoTrashEntry.prototype.setScanStat = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.yartu.FileHistoryEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.FileHistoryEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.FileHistoryEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.FileHistoryEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: (f = msg.getUser()) && proto.yartu.UserBasic.toObject(includeInstance, f),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ctime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    revFileId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    revRenamedOldPath: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.yartu.FileHistoryEntry}
 */
proto.yartu.FileHistoryEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.FileHistoryEntry;
  return proto.yartu.FileHistoryEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.FileHistoryEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.FileHistoryEntry}
 */
proto.yartu.FileHistoryEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 2:
      var value = new proto.yartu.UserBasic;
      reader.readMessage(value,proto.yartu.UserBasic.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevFileId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevRenamedOldPath(value);
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
proto.yartu.FileHistoryEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.FileHistoryEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.FileHistoryEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.FileHistoryEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.UserBasic.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRevFileId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRevRenamedOldPath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string commit_id = 1;
 * @return {string}
 */
proto.yartu.FileHistoryEntry.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.FileHistoryEntry} returns this
 */
proto.yartu.FileHistoryEntry.prototype.setCommitId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UserBasic user = 2;
 * @return {?proto.yartu.UserBasic}
 */
proto.yartu.FileHistoryEntry.prototype.getUser = function() {
  return /** @type{?proto.yartu.UserBasic} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UserBasic, 2));
};


/**
 * @param {?proto.yartu.UserBasic|undefined} value
 * @return {!proto.yartu.FileHistoryEntry} returns this
*/
proto.yartu.FileHistoryEntry.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.FileHistoryEntry} returns this
 */
proto.yartu.FileHistoryEntry.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.FileHistoryEntry.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 size = 3;
 * @return {number}
 */
proto.yartu.FileHistoryEntry.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.FileHistoryEntry} returns this
 */
proto.yartu.FileHistoryEntry.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 ctime = 4;
 * @return {number}
 */
proto.yartu.FileHistoryEntry.prototype.getCtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.FileHistoryEntry} returns this
 */
proto.yartu.FileHistoryEntry.prototype.setCtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yartu.FileHistoryEntry.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.FileHistoryEntry} returns this
 */
proto.yartu.FileHistoryEntry.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string rev_file_id = 6;
 * @return {string}
 */
proto.yartu.FileHistoryEntry.prototype.getRevFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.FileHistoryEntry} returns this
 */
proto.yartu.FileHistoryEntry.prototype.setRevFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string rev_renamed_old_path = 7;
 * @return {string}
 */
proto.yartu.FileHistoryEntry.prototype.getRevRenamedOldPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.FileHistoryEntry} returns this
 */
proto.yartu.FileHistoryEntry.prototype.setRevRenamedOldPath = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.yartu.AccessToken.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.AccessToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.AccessToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.AccessToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isZip: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.yartu.AccessToken}
 */
proto.yartu.AccessToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.AccessToken;
  return proto.yartu.AccessToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.AccessToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.AccessToken}
 */
proto.yartu.AccessToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsZip(value);
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
proto.yartu.AccessToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.AccessToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.AccessToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.AccessToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsZip();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.AccessToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.AccessToken} returns this
 */
proto.yartu.AccessToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_zip = 2;
 * @return {boolean}
 */
proto.yartu.AccessToken.prototype.getIsZip = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.AccessToken} returns this
 */
proto.yartu.AccessToken.prototype.setIsZip = function(value) {
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
proto.yartu.SharePermissionTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharePermissionTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharePermissionTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharePermissionTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permissionMap: (f = msg.getPermissionMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.yartu.SharePermissionTemplate}
 */
proto.yartu.SharePermissionTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharePermissionTemplate;
  return proto.yartu.SharePermissionTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharePermissionTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharePermissionTemplate}
 */
proto.yartu.SharePermissionTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = msg.getPermissionMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
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
proto.yartu.SharePermissionTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharePermissionTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharePermissionTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharePermissionTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getPermissionMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yartu.SharePermissionTemplate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharePermissionTemplate} returns this
 */
proto.yartu.SharePermissionTemplate.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.SharePermissionTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharePermissionTemplate} returns this
 */
proto.yartu.SharePermissionTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, bool> permission = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.yartu.SharePermissionTemplate.prototype.getPermissionMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yartu.SharePermissionTemplate} returns this
 */
proto.yartu.SharePermissionTemplate.prototype.clearPermissionMap = function() {
  this.getPermissionMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetRecentRequest.repeatedFields_ = [2];



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
proto.yartu.GetRecentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRecentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRecentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRecentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recentTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yartu.GetRecentRequest}
 */
proto.yartu.GetRecentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRecentRequest;
  return proto.yartu.GetRecentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRecentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRecentRequest}
 */
proto.yartu.GetRecentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecentTypes(value);
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
proto.yartu.GetRecentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRecentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRecentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRecentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecentTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.yartu.GetRecentRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRecentRequest} returns this
 */
proto.yartu.GetRecentRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetRecentRequest} returns this
 */
proto.yartu.GetRecentRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRecentRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string recent_types = 2;
 * @return {!Array<string>}
 */
proto.yartu.GetRecentRequest.prototype.getRecentTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.GetRecentRequest} returns this
 */
proto.yartu.GetRecentRequest.prototype.setRecentTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.GetRecentRequest} returns this
 */
proto.yartu.GetRecentRequest.prototype.addRecentTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetRecentRequest} returns this
 */
proto.yartu.GetRecentRequest.prototype.clearRecentTypesList = function() {
  return this.setRecentTypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetRecentResponse.repeatedFields_ = [2,3,4];



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
proto.yartu.GetRecentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRecentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRecentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRecentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    viewedList: jspb.Message.toObjectList(msg.getViewedList(),
    proto.yartu.Dirent.toObject, includeInstance),
    updatedList: jspb.Message.toObjectList(msg.getUpdatedList(),
    proto.yartu.Dirent.toObject, includeInstance),
    starredList: jspb.Message.toObjectList(msg.getStarredList(),
    proto.yartu.Dirent.toObject, includeInstance),
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
 * @return {!proto.yartu.GetRecentResponse}
 */
proto.yartu.GetRecentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRecentResponse;
  return proto.yartu.GetRecentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRecentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRecentResponse}
 */
proto.yartu.GetRecentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.addViewed(value);
      break;
    case 3:
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.addUpdated(value);
      break;
    case 4:
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.addStarred(value);
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
proto.yartu.GetRecentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRecentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRecentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRecentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getViewedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.Dirent.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.Dirent.serializeBinaryToWriter
    );
  }
  f = message.getStarredList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.yartu.Dirent.serializeBinaryToWriter
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
proto.yartu.GetRecentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetRecentResponse} returns this
 */
proto.yartu.GetRecentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Dirent viewed = 2;
 * @return {!Array<!proto.yartu.Dirent>}
 */
proto.yartu.GetRecentResponse.prototype.getViewedList = function() {
  return /** @type{!Array<!proto.yartu.Dirent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {!Array<!proto.yartu.Dirent>} value
 * @return {!proto.yartu.GetRecentResponse} returns this
*/
proto.yartu.GetRecentResponse.prototype.setViewedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Dirent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Dirent}
 */
proto.yartu.GetRecentResponse.prototype.addViewed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Dirent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetRecentResponse} returns this
 */
proto.yartu.GetRecentResponse.prototype.clearViewedList = function() {
  return this.setViewedList([]);
};


/**
 * repeated Dirent updated = 3;
 * @return {!Array<!proto.yartu.Dirent>}
 */
proto.yartu.GetRecentResponse.prototype.getUpdatedList = function() {
  return /** @type{!Array<!proto.yartu.Dirent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Dirent, 3));
};


/**
 * @param {!Array<!proto.yartu.Dirent>} value
 * @return {!proto.yartu.GetRecentResponse} returns this
*/
proto.yartu.GetRecentResponse.prototype.setUpdatedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.Dirent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Dirent}
 */
proto.yartu.GetRecentResponse.prototype.addUpdated = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.Dirent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetRecentResponse} returns this
 */
proto.yartu.GetRecentResponse.prototype.clearUpdatedList = function() {
  return this.setUpdatedList([]);
};


/**
 * repeated Dirent starred = 4;
 * @return {!Array<!proto.yartu.Dirent>}
 */
proto.yartu.GetRecentResponse.prototype.getStarredList = function() {
  return /** @type{!Array<!proto.yartu.Dirent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Dirent, 4));
};


/**
 * @param {!Array<!proto.yartu.Dirent>} value
 * @return {!proto.yartu.GetRecentResponse} returns this
*/
proto.yartu.GetRecentResponse.prototype.setStarredList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.yartu.Dirent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Dirent}
 */
proto.yartu.GetRecentResponse.prototype.addStarred = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.yartu.Dirent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetRecentResponse} returns this
 */
proto.yartu.GetRecentResponse.prototype.clearStarredList = function() {
  return this.setStarredList([]);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.yartu.GetRecentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRecentResponse} returns this
 */
proto.yartu.GetRecentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetRecentResponse} returns this
 */
proto.yartu.GetRecentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRecentResponse.prototype.hasMessage = function() {
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
proto.yartu.GetQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetQuotaRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GetQuotaRequest}
 */
proto.yartu.GetQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetQuotaRequest;
  return proto.yartu.GetQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetQuotaRequest}
 */
proto.yartu.GetQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GetQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetQuotaRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.GetQuotaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetQuotaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetQuotaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetQuotaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    usage: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.yartu.GetQuotaResponse}
 */
proto.yartu.GetQuotaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetQuotaResponse;
  return proto.yartu.GetQuotaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetQuotaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetQuotaResponse}
 */
proto.yartu.GetQuotaResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsage(value);
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
proto.yartu.GetQuotaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetQuotaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetQuotaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetQuotaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUsage();
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
proto.yartu.GetQuotaResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetQuotaResponse} returns this
 */
proto.yartu.GetQuotaResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.yartu.GetQuotaResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetQuotaResponse} returns this
 */
proto.yartu.GetQuotaResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 usage = 3;
 * @return {number}
 */
proto.yartu.GetQuotaResponse.prototype.getUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetQuotaResponse} returns this
 */
proto.yartu.GetQuotaResponse.prototype.setUsage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.GetQuotaResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetQuotaResponse} returns this
 */
proto.yartu.GetQuotaResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetQuotaResponse} returns this
 */
proto.yartu.GetQuotaResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetQuotaResponse.prototype.hasMessage = function() {
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
proto.yartu.GetRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GetRepoRequest}
 */
proto.yartu.GetRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRepoRequest;
  return proto.yartu.GetRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRepoRequest}
 */
proto.yartu.GetRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GetRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.GetRepoRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetRepoRequest} returns this
 */
proto.yartu.GetRepoRequest.prototype.setId = function(value) {
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
proto.yartu.GetRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.yartu.Repo.toObject(includeInstance, f)
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
 * @return {!proto.yartu.GetRepoResponse}
 */
proto.yartu.GetRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRepoResponse;
  return proto.yartu.GetRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRepoResponse}
 */
proto.yartu.GetRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Repo;
      reader.readMessage(value,proto.yartu.Repo.deserializeBinaryFromReader);
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
proto.yartu.GetRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Repo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetRepoResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetRepoResponse} returns this
 */
proto.yartu.GetRepoResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.GetRepoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoResponse} returns this
 */
proto.yartu.GetRepoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetRepoResponse} returns this
 */
proto.yartu.GetRepoResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRepoResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Repo data = 3;
 * @return {?proto.yartu.Repo}
 */
proto.yartu.GetRepoResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.Repo} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Repo, 3));
};


/**
 * @param {?proto.yartu.Repo|undefined} value
 * @return {!proto.yartu.GetRepoResponse} returns this
*/
proto.yartu.GetRepoResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetRepoResponse} returns this
 */
proto.yartu.GetRepoResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRepoResponse.prototype.hasData = function() {
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
proto.yartu.UpsertRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isNew: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    encVersion: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    encMagic: jspb.Message.getFieldWithDefault(msg, 7, ""),
    encRandomKey: jspb.Message.getFieldWithDefault(msg, 8, ""),
    encSalt: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.yartu.UpsertRepoRequest}
 */
proto.yartu.UpsertRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertRepoRequest;
  return proto.yartu.UpsertRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertRepoRequest}
 */
proto.yartu.UpsertRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNew(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEncVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncMagic(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncRandomKey(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncSalt(value);
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
proto.yartu.UpsertRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsNew();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getEncVersion();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getEncMagic();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEncRandomKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEncSalt();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yartu.UpsertRepoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.UpsertRepoRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yartu.UpsertRepoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.yartu.UpsertRepoRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_new = 5;
 * @return {boolean}
 */
proto.yartu.UpsertRepoRequest.prototype.getIsNew = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setIsNew = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool enc_version = 6;
 * @return {boolean}
 */
proto.yartu.UpsertRepoRequest.prototype.getEncVersion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setEncVersion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string enc_magic = 7;
 * @return {string}
 */
proto.yartu.UpsertRepoRequest.prototype.getEncMagic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setEncMagic = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string enc_random_key = 8;
 * @return {string}
 */
proto.yartu.UpsertRepoRequest.prototype.getEncRandomKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setEncRandomKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string enc_salt = 9;
 * @return {string}
 */
proto.yartu.UpsertRepoRequest.prototype.getEncSalt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoRequest} returns this
 */
proto.yartu.UpsertRepoRequest.prototype.setEncSalt = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.yartu.UpsertRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRepoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    repo: (f = msg.getRepo()) && proto.yartu.Repo.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertRepoResponse}
 */
proto.yartu.UpsertRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertRepoResponse;
  return proto.yartu.UpsertRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertRepoResponse}
 */
proto.yartu.UpsertRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Repo;
      reader.readMessage(value,proto.yartu.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
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
proto.yartu.UpsertRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertRepoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Repo.serializeBinaryToWriter
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
proto.yartu.UpsertRepoResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertRepoResponse} returns this
 */
proto.yartu.UpsertRepoResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Repo repo = 2;
 * @return {?proto.yartu.Repo}
 */
proto.yartu.UpsertRepoResponse.prototype.getRepo = function() {
  return /** @type{?proto.yartu.Repo} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Repo, 2));
};


/**
 * @param {?proto.yartu.Repo|undefined} value
 * @return {!proto.yartu.UpsertRepoResponse} returns this
*/
proto.yartu.UpsertRepoResponse.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertRepoResponse} returns this
 */
proto.yartu.UpsertRepoResponse.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRepoResponse.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UpsertRepoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertRepoResponse} returns this
 */
proto.yartu.UpsertRepoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertRepoResponse} returns this
 */
proto.yartu.UpsertRepoResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertRepoResponse.prototype.hasMessage = function() {
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
proto.yartu.DeleteRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.DeleteRepoRequest}
 */
proto.yartu.DeleteRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteRepoRequest;
  return proto.yartu.DeleteRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteRepoRequest}
 */
proto.yartu.DeleteRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.yartu.DeleteRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yartu.DeleteRepoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteRepoRequest} returns this
 */
proto.yartu.DeleteRepoRequest.prototype.setId = function(value) {
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
proto.yartu.DeleteRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteRepoResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteRepoResponse}
 */
proto.yartu.DeleteRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteRepoResponse;
  return proto.yartu.DeleteRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteRepoResponse}
 */
proto.yartu.DeleteRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteRepoResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteRepoResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteRepoResponse} returns this
 */
proto.yartu.DeleteRepoResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteRepoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteRepoResponse} returns this
 */
proto.yartu.DeleteRepoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteRepoResponse} returns this
 */
proto.yartu.DeleteRepoResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteRepoResponse.prototype.hasMessage = function() {
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
proto.yartu.ListRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && common_grpc_definitions_pb.Query.toObject(includeInstance, f),
    repoType: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.ListRepoRequest}
 */
proto.yartu.ListRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListRepoRequest;
  return proto.yartu.ListRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListRepoRequest}
 */
proto.yartu.ListRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoType(value);
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
proto.yartu.ListRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
  f = message.getRepoType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.Query}
 */
proto.yartu.ListRepoRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 1));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListRepoRequest} returns this
*/
proto.yartu.ListRepoRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListRepoRequest} returns this
 */
proto.yartu.ListRepoRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListRepoRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string repo_type = 2;
 * @return {string}
 */
proto.yartu.ListRepoRequest.prototype.getRepoType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListRepoRequest} returns this
 */
proto.yartu.ListRepoRequest.prototype.setRepoType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListRepoResponse.repeatedFields_ = [2];



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
proto.yartu.ListRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListRepoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Repo.toObject, includeInstance),
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
 * @return {!proto.yartu.ListRepoResponse}
 */
proto.yartu.ListRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListRepoResponse;
  return proto.yartu.ListRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListRepoResponse}
 */
proto.yartu.ListRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Repo;
      reader.readMessage(value,proto.yartu.Repo.deserializeBinaryFromReader);
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
proto.yartu.ListRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListRepoResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Repo.serializeBinaryToWriter
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
proto.yartu.ListRepoResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListRepoResponse} returns this
 */
proto.yartu.ListRepoResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Repo data = 2;
 * @return {!Array<!proto.yartu.Repo>}
 */
proto.yartu.ListRepoResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Repo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Repo, 2));
};


/**
 * @param {!Array<!proto.yartu.Repo>} value
 * @return {!proto.yartu.ListRepoResponse} returns this
*/
proto.yartu.ListRepoResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Repo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Repo}
 */
proto.yartu.ListRepoResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Repo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListRepoResponse} returns this
 */
proto.yartu.ListRepoResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListRepoResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListRepoResponse} returns this
*/
proto.yartu.ListRepoResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListRepoResponse} returns this
 */
proto.yartu.ListRepoResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListRepoResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListRepoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListRepoResponse} returns this
 */
proto.yartu.ListRepoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListRepoResponse} returns this
 */
proto.yartu.ListRepoResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListRepoResponse.prototype.hasMessage = function() {
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
proto.yartu.GetRepoHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRepoHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRepoHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.yartu.GetRepoHistoryRequest}
 */
proto.yartu.GetRepoHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRepoHistoryRequest;
  return proto.yartu.GetRepoHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRepoHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRepoHistoryRequest}
 */
proto.yartu.GetRepoHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
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
proto.yartu.GetRepoHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRepoHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRepoHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.GetRepoHistoryRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoHistoryRequest} returns this
 */
proto.yartu.GetRepoHistoryRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Query query = 2;
 * @return {?proto.Query}
 */
proto.yartu.GetRepoHistoryRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 2));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.GetRepoHistoryRequest} returns this
*/
proto.yartu.GetRepoHistoryRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetRepoHistoryRequest} returns this
 */
proto.yartu.GetRepoHistoryRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRepoHistoryRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetRepoHistoryResponse.repeatedFields_ = [2];



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
proto.yartu.GetRepoHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRepoHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRepoHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.RepoHistoryEntry.toObject, includeInstance),
    more: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
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
 * @return {!proto.yartu.GetRepoHistoryResponse}
 */
proto.yartu.GetRepoHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRepoHistoryResponse;
  return proto.yartu.GetRepoHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRepoHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRepoHistoryResponse}
 */
proto.yartu.GetRepoHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.RepoHistoryEntry;
      reader.readMessage(value,proto.yartu.RepoHistoryEntry.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMore(value);
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
proto.yartu.GetRepoHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRepoHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRepoHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoHistoryResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.RepoHistoryEntry.serializeBinaryToWriter
    );
  }
  f = message.getMore();
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
proto.yartu.GetRepoHistoryResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetRepoHistoryResponse} returns this
 */
proto.yartu.GetRepoHistoryResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RepoHistoryEntry data = 2;
 * @return {!Array<!proto.yartu.RepoHistoryEntry>}
 */
proto.yartu.GetRepoHistoryResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.RepoHistoryEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.RepoHistoryEntry, 2));
};


/**
 * @param {!Array<!proto.yartu.RepoHistoryEntry>} value
 * @return {!proto.yartu.GetRepoHistoryResponse} returns this
*/
proto.yartu.GetRepoHistoryResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.RepoHistoryEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.RepoHistoryEntry}
 */
proto.yartu.GetRepoHistoryResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.RepoHistoryEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetRepoHistoryResponse} returns this
 */
proto.yartu.GetRepoHistoryResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional bool more = 3;
 * @return {boolean}
 */
proto.yartu.GetRepoHistoryResponse.prototype.getMore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetRepoHistoryResponse} returns this
 */
proto.yartu.GetRepoHistoryResponse.prototype.setMore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.GetRepoHistoryResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoHistoryResponse} returns this
 */
proto.yartu.GetRepoHistoryResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetRepoHistoryResponse} returns this
 */
proto.yartu.GetRepoHistoryResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRepoHistoryResponse.prototype.hasMessage = function() {
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
proto.yartu.GetRepoTrashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRepoTrashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRepoTrashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoTrashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    showDays: jspb.Message.getFieldWithDefault(msg, 4, 0),
    scanStat: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.yartu.GetRepoTrashRequest}
 */
proto.yartu.GetRepoTrashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRepoTrashRequest;
  return proto.yartu.GetRepoTrashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRepoTrashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRepoTrashRequest}
 */
proto.yartu.GetRepoTrashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShowDays(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanStat(value);
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
proto.yartu.GetRepoTrashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRepoTrashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRepoTrashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoTrashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommitId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getShowDays();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getScanStat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.GetRepoTrashRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoTrashRequest} returns this
 */
proto.yartu.GetRepoTrashRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.GetRepoTrashRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoTrashRequest} returns this
 */
proto.yartu.GetRepoTrashRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string commit_id = 3;
 * @return {string}
 */
proto.yartu.GetRepoTrashRequest.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoTrashRequest} returns this
 */
proto.yartu.GetRepoTrashRequest.prototype.setCommitId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 show_days = 4;
 * @return {number}
 */
proto.yartu.GetRepoTrashRequest.prototype.getShowDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetRepoTrashRequest} returns this
 */
proto.yartu.GetRepoTrashRequest.prototype.setShowDays = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string scan_stat = 5;
 * @return {string}
 */
proto.yartu.GetRepoTrashRequest.prototype.getScanStat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoTrashRequest} returns this
 */
proto.yartu.GetRepoTrashRequest.prototype.setScanStat = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetRepoTrashResponse.repeatedFields_ = [2];



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
proto.yartu.GetRepoTrashResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetRepoTrashResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetRepoTrashResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoTrashResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.RepoTrashEntry.toObject, includeInstance),
    more: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    scanStat: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.yartu.GetRepoTrashResponse}
 */
proto.yartu.GetRepoTrashResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetRepoTrashResponse;
  return proto.yartu.GetRepoTrashResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetRepoTrashResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetRepoTrashResponse}
 */
proto.yartu.GetRepoTrashResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.RepoTrashEntry;
      reader.readMessage(value,proto.yartu.RepoTrashEntry.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMore(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanStat(value);
      break;
    case 6:
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
proto.yartu.GetRepoTrashResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetRepoTrashResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetRepoTrashResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetRepoTrashResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.RepoTrashEntry.serializeBinaryToWriter
    );
  }
  f = message.getMore();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getScanStat();
  if (f.length > 0) {
    writer.writeString(
      4,
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
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetRepoTrashResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetRepoTrashResponse} returns this
 */
proto.yartu.GetRepoTrashResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RepoTrashEntry data = 2;
 * @return {!Array<!proto.yartu.RepoTrashEntry>}
 */
proto.yartu.GetRepoTrashResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.RepoTrashEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.RepoTrashEntry, 2));
};


/**
 * @param {!Array<!proto.yartu.RepoTrashEntry>} value
 * @return {!proto.yartu.GetRepoTrashResponse} returns this
*/
proto.yartu.GetRepoTrashResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.RepoTrashEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.RepoTrashEntry}
 */
proto.yartu.GetRepoTrashResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.RepoTrashEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetRepoTrashResponse} returns this
 */
proto.yartu.GetRepoTrashResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional bool more = 3;
 * @return {boolean}
 */
proto.yartu.GetRepoTrashResponse.prototype.getMore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetRepoTrashResponse} returns this
 */
proto.yartu.GetRepoTrashResponse.prototype.setMore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string scan_stat = 4;
 * @return {string}
 */
proto.yartu.GetRepoTrashResponse.prototype.getScanStat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoTrashResponse} returns this
 */
proto.yartu.GetRepoTrashResponse.prototype.setScanStat = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.yartu.GetRepoTrashResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetRepoTrashResponse} returns this
 */
proto.yartu.GetRepoTrashResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetRepoTrashResponse} returns this
 */
proto.yartu.GetRepoTrashResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetRepoTrashResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.yartu.RevertRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RevertRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RevertRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.RevertRepoRequest}
 */
proto.yartu.RevertRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RevertRepoRequest;
  return proto.yartu.RevertRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RevertRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RevertRepoRequest}
 */
proto.yartu.RevertRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
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
proto.yartu.RevertRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RevertRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RevertRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommitId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.RevertRepoRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RevertRepoRequest} returns this
 */
proto.yartu.RevertRepoRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit_id = 2;
 * @return {string}
 */
proto.yartu.RevertRepoRequest.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RevertRepoRequest} returns this
 */
proto.yartu.RevertRepoRequest.prototype.setCommitId = function(value) {
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
proto.yartu.RevertRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RevertRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RevertRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertRepoResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.RevertRepoResponse}
 */
proto.yartu.RevertRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RevertRepoResponse;
  return proto.yartu.RevertRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RevertRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RevertRepoResponse}
 */
proto.yartu.RevertRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.RevertRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RevertRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RevertRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertRepoResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.RevertRepoResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RevertRepoResponse} returns this
 */
proto.yartu.RevertRepoResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.RevertRepoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RevertRepoResponse} returns this
 */
proto.yartu.RevertRepoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RevertRepoResponse} returns this
 */
proto.yartu.RevertRepoResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RevertRepoResponse.prototype.hasMessage = function() {
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
proto.yartu.SetRepoPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SetRepoPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SetRepoPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetRepoPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.SetRepoPasswordRequest}
 */
proto.yartu.SetRepoPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SetRepoPasswordRequest;
  return proto.yartu.SetRepoPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SetRepoPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SetRepoPasswordRequest}
 */
proto.yartu.SetRepoPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
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
proto.yartu.SetRepoPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SetRepoPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SetRepoPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetRepoPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.SetRepoPasswordRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetRepoPasswordRequest} returns this
 */
proto.yartu.SetRepoPasswordRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.yartu.SetRepoPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetRepoPasswordRequest} returns this
 */
proto.yartu.SetRepoPasswordRequest.prototype.setPassword = function(value) {
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
proto.yartu.SetRepoPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SetRepoPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SetRepoPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetRepoPasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
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
 * @return {!proto.yartu.SetRepoPasswordResponse}
 */
proto.yartu.SetRepoPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SetRepoPasswordResponse;
  return proto.yartu.SetRepoPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SetRepoPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SetRepoPasswordResponse}
 */
proto.yartu.SetRepoPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStatus(value);
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
proto.yartu.SetRepoPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SetRepoPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SetRepoPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SetRepoPasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f) {
    writer.writeBool(
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
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.SetRepoPasswordResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SetRepoPasswordResponse} returns this
 */
proto.yartu.SetRepoPasswordResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool status = 2;
 * @return {boolean}
 */
proto.yartu.SetRepoPasswordResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SetRepoPasswordResponse} returns this
 */
proto.yartu.SetRepoPasswordResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.SetRepoPasswordResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SetRepoPasswordResponse} returns this
 */
proto.yartu.SetRepoPasswordResponse.prototype.setMessage = function(value) {
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
proto.yartu.TransferRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.TransferRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.TransferRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.TransferRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    to: (f = msg.getTo()) && common_grpc_definitions_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.yartu.TransferRepoRequest}
 */
proto.yartu.TransferRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.TransferRepoRequest;
  return proto.yartu.TransferRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.TransferRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.TransferRepoRequest}
 */
proto.yartu.TransferRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setTo(value);
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
proto.yartu.TransferRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.TransferRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.TransferRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.TransferRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.TransferRepoRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.TransferRepoRequest} returns this
 */
proto.yartu.TransferRepoRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User to = 2;
 * @return {?proto.User}
 */
proto.yartu.TransferRepoRequest.prototype.getTo = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 2));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.TransferRepoRequest} returns this
*/
proto.yartu.TransferRepoRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.TransferRepoRequest} returns this
 */
proto.yartu.TransferRepoRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.TransferRepoRequest.prototype.hasTo = function() {
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
proto.yartu.TransferRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.TransferRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.TransferRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.TransferRepoResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.TransferRepoResponse}
 */
proto.yartu.TransferRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.TransferRepoResponse;
  return proto.yartu.TransferRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.TransferRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.TransferRepoResponse}
 */
proto.yartu.TransferRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.TransferRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.TransferRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.TransferRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.TransferRepoResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.TransferRepoResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.TransferRepoResponse} returns this
 */
proto.yartu.TransferRepoResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.TransferRepoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.TransferRepoResponse} returns this
 */
proto.yartu.TransferRepoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.TransferRepoResponse} returns this
 */
proto.yartu.TransferRepoResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.TransferRepoResponse.prototype.hasMessage = function() {
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
proto.yartu.GetDirentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetDirentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetDirentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDirentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    downloadLink: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.GetDirentRequest}
 */
proto.yartu.GetDirentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetDirentRequest;
  return proto.yartu.GetDirentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetDirentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetDirentRequest}
 */
proto.yartu.GetDirentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDownloadLink(value);
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
proto.yartu.GetDirentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetDirentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetDirentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDirentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDownloadLink();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.GetDirentRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetDirentRequest} returns this
 */
proto.yartu.GetDirentRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.GetDirentRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetDirentRequest} returns this
 */
proto.yartu.GetDirentRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool download_link = 3;
 * @return {boolean}
 */
proto.yartu.GetDirentRequest.prototype.getDownloadLink = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetDirentRequest} returns this
 */
proto.yartu.GetDirentRequest.prototype.setDownloadLink = function(value) {
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
proto.yartu.GetDirentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetDirentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetDirentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDirentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.Dirent.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.yartu.GetDirentResponse}
 */
proto.yartu.GetDirentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetDirentResponse;
  return proto.yartu.GetDirentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetDirentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetDirentResponse}
 */
proto.yartu.GetDirentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.yartu.GetDirentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetDirentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetDirentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetDirentResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Dirent.serializeBinaryToWriter
    );
  }
  f = message.getToken();
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
proto.yartu.GetDirentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetDirentResponse} returns this
 */
proto.yartu.GetDirentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Dirent data = 2;
 * @return {?proto.yartu.Dirent}
 */
proto.yartu.GetDirentResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.Dirent} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {?proto.yartu.Dirent|undefined} value
 * @return {!proto.yartu.GetDirentResponse} returns this
*/
proto.yartu.GetDirentResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetDirentResponse} returns this
 */
proto.yartu.GetDirentResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetDirentResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.yartu.GetDirentResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetDirentResponse} returns this
 */
proto.yartu.GetDirentResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.GetDirentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetDirentResponse} returns this
 */
proto.yartu.GetDirentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetDirentResponse} returns this
 */
proto.yartu.GetDirentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetDirentResponse.prototype.hasMessage = function() {
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
proto.yartu.ListDirentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListDirentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListDirentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDirentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recursive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    withParents: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
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
 * @return {!proto.yartu.ListDirentRequest}
 */
proto.yartu.ListDirentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListDirentRequest;
  return proto.yartu.ListDirentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListDirentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListDirentRequest}
 */
proto.yartu.ListDirentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecursive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithParents(value);
      break;
    case 6:
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
proto.yartu.ListDirentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListDirentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListDirentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDirentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecursive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getWithParents();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.ListDirentRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListDirentRequest} returns this
 */
proto.yartu.ListDirentRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.ListDirentRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListDirentRequest} returns this
 */
proto.yartu.ListDirentRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.yartu.ListDirentRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListDirentRequest} returns this
 */
proto.yartu.ListDirentRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool recursive = 4;
 * @return {boolean}
 */
proto.yartu.ListDirentRequest.prototype.getRecursive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ListDirentRequest} returns this
 */
proto.yartu.ListDirentRequest.prototype.setRecursive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool with_parents = 5;
 * @return {boolean}
 */
proto.yartu.ListDirentRequest.prototype.getWithParents = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ListDirentRequest} returns this
 */
proto.yartu.ListDirentRequest.prototype.setWithParents = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional Query query = 6;
 * @return {?proto.Query}
 */
proto.yartu.ListDirentRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 6));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListDirentRequest} returns this
*/
proto.yartu.ListDirentRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListDirentRequest} returns this
 */
proto.yartu.ListDirentRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListDirentRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListDirentResponse.repeatedFields_ = [2];



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
proto.yartu.ListDirentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListDirentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListDirentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDirentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Dirent.toObject, includeInstance),
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
 * @return {!proto.yartu.ListDirentResponse}
 */
proto.yartu.ListDirentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListDirentResponse;
  return proto.yartu.ListDirentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListDirentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListDirentResponse}
 */
proto.yartu.ListDirentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
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
proto.yartu.ListDirentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListDirentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListDirentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListDirentResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Dirent.serializeBinaryToWriter
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
proto.yartu.ListDirentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListDirentResponse} returns this
 */
proto.yartu.ListDirentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Dirent data = 2;
 * @return {!Array<!proto.yartu.Dirent>}
 */
proto.yartu.ListDirentResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Dirent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {!Array<!proto.yartu.Dirent>} value
 * @return {!proto.yartu.ListDirentResponse} returns this
*/
proto.yartu.ListDirentResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Dirent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Dirent}
 */
proto.yartu.ListDirentResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Dirent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListDirentResponse} returns this
 */
proto.yartu.ListDirentResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListDirentResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListDirentResponse} returns this
*/
proto.yartu.ListDirentResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListDirentResponse} returns this
 */
proto.yartu.ListDirentResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListDirentResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListDirentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListDirentResponse} returns this
 */
proto.yartu.ListDirentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListDirentResponse} returns this
 */
proto.yartu.ListDirentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListDirentResponse.prototype.hasMessage = function() {
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
proto.yartu.StarDirentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.StarDirentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.StarDirentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarDirentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    star: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.StarDirentRequest}
 */
proto.yartu.StarDirentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.StarDirentRequest;
  return proto.yartu.StarDirentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.StarDirentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.StarDirentRequest}
 */
proto.yartu.StarDirentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStar(value);
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
proto.yartu.StarDirentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.StarDirentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.StarDirentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarDirentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStar();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.StarDirentRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.StarDirentRequest} returns this
 */
proto.yartu.StarDirentRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.StarDirentRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.StarDirentRequest} returns this
 */
proto.yartu.StarDirentRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool star = 3;
 * @return {boolean}
 */
proto.yartu.StarDirentRequest.prototype.getStar = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.StarDirentRequest} returns this
 */
proto.yartu.StarDirentRequest.prototype.setStar = function(value) {
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
proto.yartu.StarDirentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.StarDirentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.StarDirentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarDirentResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.StarDirentResponse}
 */
proto.yartu.StarDirentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.StarDirentResponse;
  return proto.yartu.StarDirentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.StarDirentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.StarDirentResponse}
 */
proto.yartu.StarDirentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.StarDirentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.StarDirentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.StarDirentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarDirentResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.StarDirentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.StarDirentResponse} returns this
 */
proto.yartu.StarDirentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.StarDirentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.StarDirentResponse} returns this
 */
proto.yartu.StarDirentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.StarDirentResponse} returns this
 */
proto.yartu.StarDirentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.StarDirentResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertDirentRequest.repeatedFields_ = [3];



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
proto.yartu.UpsertDirentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertDirentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertDirentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repoId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pathList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    force: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isDraft: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    dstRepoId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    dstDir: jspb.Message.getFieldWithDefault(msg, 7, ""),
    newName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createParents: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    commitId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    expire: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.yartu.UpsertDirentRequest}
 */
proto.yartu.UpsertDirentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertDirentRequest;
  return proto.yartu.UpsertDirentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertDirentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertDirentRequest}
 */
proto.yartu.UpsertDirentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPath(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDraft(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstRepoId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstDir(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateParents(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpire(value);
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
proto.yartu.UpsertDirentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertDirentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertDirentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsDraft();
  if (f) {
    writer.writeBool(
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
  f = message.getNewName();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional string operation = 1;
 * @return {string}
 */
proto.yartu.UpsertDirentRequest.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo_id = 2;
 * @return {string}
 */
proto.yartu.UpsertDirentRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string path = 3;
 * @return {!Array<string>}
 */
proto.yartu.UpsertDirentRequest.prototype.getPathList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setPathList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.addPath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * optional bool force = 4;
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_draft = 5;
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.getIsDraft = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setIsDraft = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string dst_repo_id = 6;
 * @return {string}
 */
proto.yartu.UpsertDirentRequest.prototype.getDstRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setDstRepoId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.clearDstRepoId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.hasDstRepoId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string dst_dir = 7;
 * @return {string}
 */
proto.yartu.UpsertDirentRequest.prototype.getDstDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setDstDir = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.clearDstDir = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.hasDstDir = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string new_name = 8;
 * @return {string}
 */
proto.yartu.UpsertDirentRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setNewName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool create_parents = 9;
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.getCreateParents = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setCreateParents = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.clearCreateParents = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.hasCreateParents = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string commit_id = 10;
 * @return {string}
 */
proto.yartu.UpsertDirentRequest.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setCommitId = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.clearCommitId = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.hasCommitId = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 expire = 11;
 * @return {number}
 */
proto.yartu.UpsertDirentRequest.prototype.getExpire = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.setExpire = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirentRequest} returns this
 */
proto.yartu.UpsertDirentRequest.prototype.clearExpire = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirentRequest.prototype.hasExpire = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertDirentResponse.repeatedFields_ = [2,3];



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
proto.yartu.UpsertDirentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertDirentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertDirentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Dirent.toObject, includeInstance),
    errorList: jspb.Message.toObjectList(msg.getErrorList(),
    proto.yartu.UpsertDirentError.toObject, includeInstance),
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
 * @return {!proto.yartu.UpsertDirentResponse}
 */
proto.yartu.UpsertDirentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertDirentResponse;
  return proto.yartu.UpsertDirentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertDirentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertDirentResponse}
 */
proto.yartu.UpsertDirentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.yartu.UpsertDirentError;
      reader.readMessage(value,proto.yartu.UpsertDirentError.deserializeBinaryFromReader);
      msg.addError(value);
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
proto.yartu.UpsertDirentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertDirentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertDirentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirentResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Dirent.serializeBinaryToWriter
    );
  }
  f = message.getErrorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.UpsertDirentError.serializeBinaryToWriter
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
proto.yartu.UpsertDirentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertDirentResponse} returns this
 */
proto.yartu.UpsertDirentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Dirent data = 2;
 * @return {!Array<!proto.yartu.Dirent>}
 */
proto.yartu.UpsertDirentResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Dirent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {!Array<!proto.yartu.Dirent>} value
 * @return {!proto.yartu.UpsertDirentResponse} returns this
*/
proto.yartu.UpsertDirentResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Dirent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Dirent}
 */
proto.yartu.UpsertDirentResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Dirent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertDirentResponse} returns this
 */
proto.yartu.UpsertDirentResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * repeated UpsertDirentError error = 3;
 * @return {!Array<!proto.yartu.UpsertDirentError>}
 */
proto.yartu.UpsertDirentResponse.prototype.getErrorList = function() {
  return /** @type{!Array<!proto.yartu.UpsertDirentError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.UpsertDirentError, 3));
};


/**
 * @param {!Array<!proto.yartu.UpsertDirentError>} value
 * @return {!proto.yartu.UpsertDirentResponse} returns this
*/
proto.yartu.UpsertDirentResponse.prototype.setErrorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.UpsertDirentError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertDirentError}
 */
proto.yartu.UpsertDirentResponse.prototype.addError = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.UpsertDirentError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertDirentResponse} returns this
 */
proto.yartu.UpsertDirentResponse.prototype.clearErrorList = function() {
  return this.setErrorList([]);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.UpsertDirentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirentResponse} returns this
 */
proto.yartu.UpsertDirentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirentResponse} returns this
 */
proto.yartu.UpsertDirentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirentResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertDirectoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertDirectoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertDirectoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirectoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dstRepoId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dstDir: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createParents: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.yartu.UpsertDirectoryRequest}
 */
proto.yartu.UpsertDirectoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertDirectoryRequest;
  return proto.yartu.UpsertDirectoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertDirectoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertDirectoryRequest}
 */
proto.yartu.UpsertDirectoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstRepoId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstDir(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateParents(value);
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
proto.yartu.UpsertDirectoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertDirectoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertDirectoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirectoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperation();
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
  f = message.getCreateParents();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.UpsertDirectoryRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.UpsertDirectoryRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation = 3;
 * @return {string}
 */
proto.yartu.UpsertDirectoryRequest.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_name = 4;
 * @return {string}
 */
proto.yartu.UpsertDirectoryRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.setNewName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.clearNewName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirectoryRequest.prototype.hasNewName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string dst_repo_id = 5;
 * @return {string}
 */
proto.yartu.UpsertDirectoryRequest.prototype.getDstRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.setDstRepoId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.clearDstRepoId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirectoryRequest.prototype.hasDstRepoId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string dst_dir = 6;
 * @return {string}
 */
proto.yartu.UpsertDirectoryRequest.prototype.getDstDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.setDstDir = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.clearDstDir = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirectoryRequest.prototype.hasDstDir = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool create_parents = 7;
 * @return {boolean}
 */
proto.yartu.UpsertDirectoryRequest.prototype.getCreateParents = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertDirectoryRequest} returns this
 */
proto.yartu.UpsertDirectoryRequest.prototype.setCreateParents = function(value) {
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
proto.yartu.UpsertDirectoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertDirectoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertDirectoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirectoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.Dirent.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertDirectoryResponse}
 */
proto.yartu.UpsertDirectoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertDirectoryResponse;
  return proto.yartu.UpsertDirectoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertDirectoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertDirectoryResponse}
 */
proto.yartu.UpsertDirectoryResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.yartu.UpsertDirectoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertDirectoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertDirectoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertDirectoryResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Dirent.serializeBinaryToWriter
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
proto.yartu.UpsertDirectoryResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertDirectoryResponse} returns this
 */
proto.yartu.UpsertDirectoryResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Dirent data = 2;
 * @return {?proto.yartu.Dirent}
 */
proto.yartu.UpsertDirectoryResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.Dirent} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {?proto.yartu.Dirent|undefined} value
 * @return {!proto.yartu.UpsertDirectoryResponse} returns this
*/
proto.yartu.UpsertDirectoryResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertDirectoryResponse} returns this
 */
proto.yartu.UpsertDirectoryResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirectoryResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.UpsertDirectoryResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertDirectoryResponse} returns this
 */
proto.yartu.UpsertDirectoryResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertDirectoryResponse} returns this
 */
proto.yartu.UpsertDirectoryResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertDirectoryResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isDraft: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    newName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dstRepoId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    dstDir: jspb.Message.getFieldWithDefault(msg, 7, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    expire: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.yartu.UpsertFileRequest}
 */
proto.yartu.UpsertFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertFileRequest;
  return proto.yartu.UpsertFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertFileRequest}
 */
proto.yartu.UpsertFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDraft(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstRepoId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstDir(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpire(value);
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
proto.yartu.UpsertFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsDraft();
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
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.UpsertFileRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.UpsertFileRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation = 3;
 * @return {string}
 */
proto.yartu.UpsertFileRequest.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_draft = 4;
 * @return {boolean}
 */
proto.yartu.UpsertFileRequest.prototype.getIsDraft = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setIsDraft = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string new_name = 5;
 * @return {string}
 */
proto.yartu.UpsertFileRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setNewName = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.clearNewName = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFileRequest.prototype.hasNewName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string dst_repo_id = 6;
 * @return {string}
 */
proto.yartu.UpsertFileRequest.prototype.getDstRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setDstRepoId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.clearDstRepoId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFileRequest.prototype.hasDstRepoId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string dst_dir = 7;
 * @return {string}
 */
proto.yartu.UpsertFileRequest.prototype.getDstDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setDstDir = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.clearDstDir = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFileRequest.prototype.hasDstDir = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string commit_id = 8;
 * @return {string}
 */
proto.yartu.UpsertFileRequest.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setCommitId = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.clearCommitId = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFileRequest.prototype.hasCommitId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 expire = 9;
 * @return {number}
 */
proto.yartu.UpsertFileRequest.prototype.getExpire = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.setExpire = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertFileRequest} returns this
 */
proto.yartu.UpsertFileRequest.prototype.clearExpire = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFileRequest.prototype.hasExpire = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.yartu.UpsertFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.Dirent.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertFileResponse}
 */
proto.yartu.UpsertFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertFileResponse;
  return proto.yartu.UpsertFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertFileResponse}
 */
proto.yartu.UpsertFileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.yartu.UpsertFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertFileResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Dirent.serializeBinaryToWriter
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
proto.yartu.UpsertFileResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertFileResponse} returns this
 */
proto.yartu.UpsertFileResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Dirent data = 2;
 * @return {?proto.yartu.Dirent}
 */
proto.yartu.UpsertFileResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.Dirent} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {?proto.yartu.Dirent|undefined} value
 * @return {!proto.yartu.UpsertFileResponse} returns this
*/
proto.yartu.UpsertFileResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertFileResponse} returns this
 */
proto.yartu.UpsertFileResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFileResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.UpsertFileResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertFileResponse} returns this
 */
proto.yartu.UpsertFileResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertFileResponse} returns this
 */
proto.yartu.UpsertFileResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertFileResponse.prototype.hasMessage = function() {
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
proto.yartu.UploadToken.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UploadToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UploadToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.UploadToken}
 */
proto.yartu.UploadToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UploadToken;
  return proto.yartu.UploadToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UploadToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UploadToken}
 */
proto.yartu.UploadToken.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setToken(value);
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
proto.yartu.UploadToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UploadToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UploadToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yartu.UploadToken.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadToken} returns this
 */
proto.yartu.UploadToken.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.yartu.UploadToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadToken} returns this
 */
proto.yartu.UploadToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UploadFileRequest.repeatedFields_ = [3];



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
proto.yartu.UploadFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UploadFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UploadFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileNameList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.yartu.UploadFileRequest}
 */
proto.yartu.UploadFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UploadFileRequest;
  return proto.yartu.UploadFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UploadFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UploadFileRequest}
 */
proto.yartu.UploadFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileName(value);
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
proto.yartu.UploadFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UploadFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UploadFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.UploadFileRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadFileRequest} returns this
 */
proto.yartu.UploadFileRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.UploadFileRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadFileRequest} returns this
 */
proto.yartu.UploadFileRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string file_name = 3;
 * @return {!Array<string>}
 */
proto.yartu.UploadFileRequest.prototype.getFileNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UploadFileRequest} returns this
 */
proto.yartu.UploadFileRequest.prototype.setFileNameList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UploadFileRequest} returns this
 */
proto.yartu.UploadFileRequest.prototype.addFileName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UploadFileRequest} returns this
 */
proto.yartu.UploadFileRequest.prototype.clearFileNameList = function() {
  return this.setFileNameList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UploadFileResponse.repeatedFields_ = [2];



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
proto.yartu.UploadFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UploadFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UploadFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tokenList: jspb.Message.toObjectList(msg.getTokenList(),
    proto.yartu.UploadToken.toObject, includeInstance),
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
 * @return {!proto.yartu.UploadFileResponse}
 */
proto.yartu.UploadFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UploadFileResponse;
  return proto.yartu.UploadFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UploadFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UploadFileResponse}
 */
proto.yartu.UploadFileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UploadToken;
      reader.readMessage(value,proto.yartu.UploadToken.deserializeBinaryFromReader);
      msg.addToken(value);
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
proto.yartu.UploadFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UploadFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UploadFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTokenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.UploadToken.serializeBinaryToWriter
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
proto.yartu.UploadFileResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadFileResponse} returns this
 */
proto.yartu.UploadFileResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UploadToken token = 2;
 * @return {!Array<!proto.yartu.UploadToken>}
 */
proto.yartu.UploadFileResponse.prototype.getTokenList = function() {
  return /** @type{!Array<!proto.yartu.UploadToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.UploadToken, 2));
};


/**
 * @param {!Array<!proto.yartu.UploadToken>} value
 * @return {!proto.yartu.UploadFileResponse} returns this
*/
proto.yartu.UploadFileResponse.prototype.setTokenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.UploadToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.UploadToken}
 */
proto.yartu.UploadFileResponse.prototype.addToken = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.UploadToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UploadFileResponse} returns this
 */
proto.yartu.UploadFileResponse.prototype.clearTokenList = function() {
  return this.setTokenList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UploadFileResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadFileResponse} returns this
 */
proto.yartu.UploadFileResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UploadFileResponse} returns this
 */
proto.yartu.UploadFileResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UploadFileResponse.prototype.hasMessage = function() {
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
proto.yartu.DownloadFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DownloadFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DownloadFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    op: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.DownloadFileRequest}
 */
proto.yartu.DownloadFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DownloadFileRequest;
  return proto.yartu.DownloadFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DownloadFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DownloadFileRequest}
 */
proto.yartu.DownloadFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOp(value);
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
proto.yartu.DownloadFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DownloadFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DownloadFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
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
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.DownloadFileRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DownloadFileRequest} returns this
 */
proto.yartu.DownloadFileRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.DownloadFileRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DownloadFileRequest} returns this
 */
proto.yartu.DownloadFileRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string op = 3;
 * @return {string}
 */
proto.yartu.DownloadFileRequest.prototype.getOp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DownloadFileRequest} returns this
 */
proto.yartu.DownloadFileRequest.prototype.setOp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DownloadFileRequest} returns this
 */
proto.yartu.DownloadFileRequest.prototype.clearOp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DownloadFileRequest.prototype.hasOp = function() {
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
proto.yartu.DownloadFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DownloadFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DownloadFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.yartu.DownloadFileResponse}
 */
proto.yartu.DownloadFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DownloadFileResponse;
  return proto.yartu.DownloadFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DownloadFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DownloadFileResponse}
 */
proto.yartu.DownloadFileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DownloadFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DownloadFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DownloadFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadFileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DownloadFileResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DownloadFileResponse} returns this
 */
proto.yartu.DownloadFileResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.yartu.DownloadFileResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DownloadFileResponse} returns this
 */
proto.yartu.DownloadFileResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.DownloadFileResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DownloadFileResponse} returns this
 */
proto.yartu.DownloadFileResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DownloadFileResponse} returns this
 */
proto.yartu.DownloadFileResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DownloadFileResponse.prototype.hasMessage = function() {
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
proto.yartu.GetFileHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetFileHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetFileHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetFileHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.yartu.GetFileHistoryRequest}
 */
proto.yartu.GetFileHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetFileHistoryRequest;
  return proto.yartu.GetFileHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetFileHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetFileHistoryRequest}
 */
proto.yartu.GetFileHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
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
proto.yartu.GetFileHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetFileHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetFileHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetFileHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommitId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.GetFileHistoryRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetFileHistoryRequest} returns this
 */
proto.yartu.GetFileHistoryRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.GetFileHistoryRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetFileHistoryRequest} returns this
 */
proto.yartu.GetFileHistoryRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string commit_id = 3;
 * @return {string}
 */
proto.yartu.GetFileHistoryRequest.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetFileHistoryRequest} returns this
 */
proto.yartu.GetFileHistoryRequest.prototype.setCommitId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 limit = 4;
 * @return {number}
 */
proto.yartu.GetFileHistoryRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetFileHistoryRequest} returns this
 */
proto.yartu.GetFileHistoryRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetFileHistoryResponse.repeatedFields_ = [2];



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
proto.yartu.GetFileHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetFileHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetFileHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetFileHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.FileHistoryEntry.toObject, includeInstance),
    more: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    nextCommitId: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.yartu.GetFileHistoryResponse}
 */
proto.yartu.GetFileHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetFileHistoryResponse;
  return proto.yartu.GetFileHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetFileHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetFileHistoryResponse}
 */
proto.yartu.GetFileHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.FileHistoryEntry;
      reader.readMessage(value,proto.yartu.FileHistoryEntry.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMore(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextCommitId(value);
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
proto.yartu.GetFileHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetFileHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetFileHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetFileHistoryResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.FileHistoryEntry.serializeBinaryToWriter
    );
  }
  f = message.getMore();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNextCommitId();
  if (f.length > 0) {
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
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetFileHistoryResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetFileHistoryResponse} returns this
 */
proto.yartu.GetFileHistoryResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated FileHistoryEntry data = 2;
 * @return {!Array<!proto.yartu.FileHistoryEntry>}
 */
proto.yartu.GetFileHistoryResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.FileHistoryEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.FileHistoryEntry, 2));
};


/**
 * @param {!Array<!proto.yartu.FileHistoryEntry>} value
 * @return {!proto.yartu.GetFileHistoryResponse} returns this
*/
proto.yartu.GetFileHistoryResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.FileHistoryEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.FileHistoryEntry}
 */
proto.yartu.GetFileHistoryResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.FileHistoryEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetFileHistoryResponse} returns this
 */
proto.yartu.GetFileHistoryResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional bool more = 3;
 * @return {boolean}
 */
proto.yartu.GetFileHistoryResponse.prototype.getMore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetFileHistoryResponse} returns this
 */
proto.yartu.GetFileHistoryResponse.prototype.setMore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string next_commit_id = 4;
 * @return {string}
 */
proto.yartu.GetFileHistoryResponse.prototype.getNextCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetFileHistoryResponse} returns this
 */
proto.yartu.GetFileHistoryResponse.prototype.setNextCommitId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.yartu.GetFileHistoryResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetFileHistoryResponse} returns this
 */
proto.yartu.GetFileHistoryResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetFileHistoryResponse} returns this
 */
proto.yartu.GetFileHistoryResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetFileHistoryResponse.prototype.hasMessage = function() {
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
proto.yartu.GetOfficeFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetOfficeFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetOfficeFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetOfficeFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.GetOfficeFileRequest}
 */
proto.yartu.GetOfficeFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetOfficeFileRequest;
  return proto.yartu.GetOfficeFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetOfficeFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetOfficeFileRequest}
 */
proto.yartu.GetOfficeFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.yartu.GetOfficeFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetOfficeFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetOfficeFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetOfficeFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.GetOfficeFileRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileRequest} returns this
 */
proto.yartu.GetOfficeFileRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.GetOfficeFileRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileRequest} returns this
 */
proto.yartu.GetOfficeFileRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.yartu.GetOfficeFileRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileRequest} returns this
 */
proto.yartu.GetOfficeFileRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetOfficeFileResponse.repeatedFields_ = [7];



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
proto.yartu.GetOfficeFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetOfficeFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetOfficeFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetOfficeFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    file: (f = msg.getFile()) && proto.yartu.Dirent.toObject(includeInstance, f),
    fileType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    officeToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fileToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    jwtToken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    shareList: jspb.Message.toObjectList(msg.getShareList(),
    common_grpc_definitions_pb.Shared.toObject, includeInstance),
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
 * @return {!proto.yartu.GetOfficeFileResponse}
 */
proto.yartu.GetOfficeFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetOfficeFileResponse;
  return proto.yartu.GetOfficeFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetOfficeFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetOfficeFileResponse}
 */
proto.yartu.GetOfficeFileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfficeToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwtToken(value);
      break;
    case 7:
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShare(value);
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
proto.yartu.GetOfficeFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetOfficeFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetOfficeFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetOfficeFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Dirent.serializeBinaryToWriter
    );
  }
  f = message.getFileType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOfficeToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFileToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getJwtToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getShareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
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
proto.yartu.GetOfficeFileResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Dirent file = 2;
 * @return {?proto.yartu.Dirent}
 */
proto.yartu.GetOfficeFileResponse.prototype.getFile = function() {
  return /** @type{?proto.yartu.Dirent} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {?proto.yartu.Dirent|undefined} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
*/
proto.yartu.GetOfficeFileResponse.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetOfficeFileResponse.prototype.hasFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string file_type = 3;
 * @return {string}
 */
proto.yartu.GetOfficeFileResponse.prototype.getFileType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.setFileType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string office_token = 4;
 * @return {string}
 */
proto.yartu.GetOfficeFileResponse.prototype.getOfficeToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.setOfficeToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string file_token = 5;
 * @return {string}
 */
proto.yartu.GetOfficeFileResponse.prototype.getFileToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.setFileToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string jwt_token = 6;
 * @return {string}
 */
proto.yartu.GetOfficeFileResponse.prototype.getJwtToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.setJwtToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Shared share = 7;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.GetOfficeFileResponse.prototype.getShareList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 7));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
*/
proto.yartu.GetOfficeFileResponse.prototype.setShareList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.GetOfficeFileResponse.prototype.addShare = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.clearShareList = function() {
  return this.setShareList([]);
};


/**
 * optional string message = 8;
 * @return {string}
 */
proto.yartu.GetOfficeFileResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetOfficeFileResponse} returns this
 */
proto.yartu.GetOfficeFileResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetOfficeFileResponse.prototype.hasMessage = function() {
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
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SaveEmailAttachmentToDriveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SaveEmailAttachmentToDriveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filePlace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    repoId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parentPath: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.yartu.SaveEmailAttachmentToDriveRequest}
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SaveEmailAttachmentToDriveRequest;
  return proto.yartu.SaveEmailAttachmentToDriveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SaveEmailAttachmentToDriveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SaveEmailAttachmentToDriveRequest}
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilePlace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentPath(value);
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
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SaveEmailAttachmentToDriveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SaveEmailAttachmentToDriveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilePlace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParentPath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string email_uuid = 1;
 * @return {string}
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.getEmailUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SaveEmailAttachmentToDriveRequest} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.setEmailUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string file_place = 2;
 * @return {string}
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.getFilePlace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SaveEmailAttachmentToDriveRequest} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.setFilePlace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string file_name = 3;
 * @return {string}
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SaveEmailAttachmentToDriveRequest} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string repo_id = 4;
 * @return {string}
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SaveEmailAttachmentToDriveRequest} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string parent_path = 5;
 * @return {string}
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.getParentPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SaveEmailAttachmentToDriveRequest} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveRequest.prototype.setParentPath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SaveEmailAttachmentToDriveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SaveEmailAttachmentToDriveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.SaveEmailAttachmentToDriveResponse}
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SaveEmailAttachmentToDriveResponse;
  return proto.yartu.SaveEmailAttachmentToDriveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SaveEmailAttachmentToDriveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SaveEmailAttachmentToDriveResponse}
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SaveEmailAttachmentToDriveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SaveEmailAttachmentToDriveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SaveEmailAttachmentToDriveResponse} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SaveEmailAttachmentToDriveResponse} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SaveEmailAttachmentToDriveResponse} returns this
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SaveEmailAttachmentToDriveResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DownloadDirentRequest.repeatedFields_ = [2];



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
proto.yartu.DownloadDirentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DownloadDirentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DownloadDirentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadDirentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pathList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    asList: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.DownloadDirentRequest}
 */
proto.yartu.DownloadDirentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DownloadDirentRequest;
  return proto.yartu.DownloadDirentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DownloadDirentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DownloadDirentRequest}
 */
proto.yartu.DownloadDirentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPath(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAsList(value);
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
proto.yartu.DownloadDirentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DownloadDirentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DownloadDirentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadDirentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAsList();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.DownloadDirentRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DownloadDirentRequest} returns this
 */
proto.yartu.DownloadDirentRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string path = 2;
 * @return {!Array<string>}
 */
proto.yartu.DownloadDirentRequest.prototype.getPathList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.DownloadDirentRequest} returns this
 */
proto.yartu.DownloadDirentRequest.prototype.setPathList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.DownloadDirentRequest} returns this
 */
proto.yartu.DownloadDirentRequest.prototype.addPath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DownloadDirentRequest} returns this
 */
proto.yartu.DownloadDirentRequest.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * optional bool as_list = 3;
 * @return {boolean}
 */
proto.yartu.DownloadDirentRequest.prototype.getAsList = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.DownloadDirentRequest} returns this
 */
proto.yartu.DownloadDirentRequest.prototype.setAsList = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DownloadDirentResponse.repeatedFields_ = [2];



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
proto.yartu.DownloadDirentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DownloadDirentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DownloadDirentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadDirentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tokenList: jspb.Message.toObjectList(msg.getTokenList(),
    proto.yartu.AccessToken.toObject, includeInstance),
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
 * @return {!proto.yartu.DownloadDirentResponse}
 */
proto.yartu.DownloadDirentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DownloadDirentResponse;
  return proto.yartu.DownloadDirentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DownloadDirentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DownloadDirentResponse}
 */
proto.yartu.DownloadDirentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.AccessToken;
      reader.readMessage(value,proto.yartu.AccessToken.deserializeBinaryFromReader);
      msg.addToken(value);
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
proto.yartu.DownloadDirentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DownloadDirentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DownloadDirentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DownloadDirentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTokenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.AccessToken.serializeBinaryToWriter
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
proto.yartu.DownloadDirentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DownloadDirentResponse} returns this
 */
proto.yartu.DownloadDirentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AccessToken token = 2;
 * @return {!Array<!proto.yartu.AccessToken>}
 */
proto.yartu.DownloadDirentResponse.prototype.getTokenList = function() {
  return /** @type{!Array<!proto.yartu.AccessToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.AccessToken, 2));
};


/**
 * @param {!Array<!proto.yartu.AccessToken>} value
 * @return {!proto.yartu.DownloadDirentResponse} returns this
*/
proto.yartu.DownloadDirentResponse.prototype.setTokenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.AccessToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.AccessToken}
 */
proto.yartu.DownloadDirentResponse.prototype.addToken = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.AccessToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DownloadDirentResponse} returns this
 */
proto.yartu.DownloadDirentResponse.prototype.clearTokenList = function() {
  return this.setTokenList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.DownloadDirentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DownloadDirentResponse} returns this
 */
proto.yartu.DownloadDirentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DownloadDirentResponse} returns this
 */
proto.yartu.DownloadDirentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DownloadDirentResponse.prototype.hasMessage = function() {
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
proto.yartu.QueryZipProgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.QueryZipProgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.QueryZipProgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.QueryZipProgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.QueryZipProgressRequest}
 */
proto.yartu.QueryZipProgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.QueryZipProgressRequest;
  return proto.yartu.QueryZipProgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.QueryZipProgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.QueryZipProgressRequest}
 */
proto.yartu.QueryZipProgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.yartu.QueryZipProgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.QueryZipProgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.QueryZipProgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.QueryZipProgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.QueryZipProgressRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.QueryZipProgressRequest} returns this
 */
proto.yartu.QueryZipProgressRequest.prototype.setToken = function(value) {
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
proto.yartu.QueryZipProgressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.QueryZipProgressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.QueryZipProgressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.QueryZipProgressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    progress: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.yartu.QueryZipProgressResponse}
 */
proto.yartu.QueryZipProgressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.QueryZipProgressResponse;
  return proto.yartu.QueryZipProgressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.QueryZipProgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.QueryZipProgressResponse}
 */
proto.yartu.QueryZipProgressResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProgress(value);
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
proto.yartu.QueryZipProgressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.QueryZipProgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.QueryZipProgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.QueryZipProgressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt64(
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
proto.yartu.QueryZipProgressResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.QueryZipProgressResponse} returns this
 */
proto.yartu.QueryZipProgressResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 progress = 2;
 * @return {number}
 */
proto.yartu.QueryZipProgressResponse.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.QueryZipProgressResponse} returns this
 */
proto.yartu.QueryZipProgressResponse.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.QueryZipProgressResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.QueryZipProgressResponse} returns this
 */
proto.yartu.QueryZipProgressResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.QueryZipProgressResponse} returns this
 */
proto.yartu.QueryZipProgressResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.QueryZipProgressResponse.prototype.hasMessage = function() {
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
proto.yartu.LockDirentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.LockDirentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.LockDirentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.LockDirentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 3, ""),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.yartu.LockDirentRequest}
 */
proto.yartu.LockDirentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.LockDirentRequest;
  return proto.yartu.LockDirentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.LockDirentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.LockDirentRequest}
 */
proto.yartu.LockDirentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
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
proto.yartu.LockDirentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.LockDirentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.LockDirentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.LockDirentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.LockDirentRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.LockDirentRequest} returns this
 */
proto.yartu.LockDirentRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.LockDirentRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.LockDirentRequest} returns this
 */
proto.yartu.LockDirentRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.yartu.LockDirentRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.LockDirentRequest} returns this
 */
proto.yartu.LockDirentRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool force = 4;
 * @return {boolean}
 */
proto.yartu.LockDirentRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.LockDirentRequest} returns this
 */
proto.yartu.LockDirentRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.yartu.LockDirentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.LockDirentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.LockDirentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.LockDirentResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.LockDirentResponse}
 */
proto.yartu.LockDirentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.LockDirentResponse;
  return proto.yartu.LockDirentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.LockDirentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.LockDirentResponse}
 */
proto.yartu.LockDirentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.LockDirentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.LockDirentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.LockDirentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.LockDirentResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.LockDirentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.LockDirentResponse} returns this
 */
proto.yartu.LockDirentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.LockDirentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.LockDirentResponse} returns this
 */
proto.yartu.LockDirentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.LockDirentResponse} returns this
 */
proto.yartu.LockDirentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.LockDirentResponse.prototype.hasMessage = function() {
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
proto.yartu.UnlockDirentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnlockDirentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnlockDirentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnlockDirentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.UnlockDirentRequest}
 */
proto.yartu.UnlockDirentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnlockDirentRequest;
  return proto.yartu.UnlockDirentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnlockDirentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnlockDirentRequest}
 */
proto.yartu.UnlockDirentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
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
proto.yartu.UnlockDirentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnlockDirentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnlockDirentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnlockDirentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.UnlockDirentRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnlockDirentRequest} returns this
 */
proto.yartu.UnlockDirentRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.UnlockDirentRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnlockDirentRequest} returns this
 */
proto.yartu.UnlockDirentRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool force = 3;
 * @return {boolean}
 */
proto.yartu.UnlockDirentRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UnlockDirentRequest} returns this
 */
proto.yartu.UnlockDirentRequest.prototype.setForce = function(value) {
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
proto.yartu.UnlockDirentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnlockDirentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnlockDirentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnlockDirentResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UnlockDirentResponse}
 */
proto.yartu.UnlockDirentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnlockDirentResponse;
  return proto.yartu.UnlockDirentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnlockDirentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnlockDirentResponse}
 */
proto.yartu.UnlockDirentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UnlockDirentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnlockDirentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnlockDirentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnlockDirentResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UnlockDirentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UnlockDirentResponse} returns this
 */
proto.yartu.UnlockDirentResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UnlockDirentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnlockDirentResponse} returns this
 */
proto.yartu.UnlockDirentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UnlockDirentResponse} returns this
 */
proto.yartu.UnlockDirentResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UnlockDirentResponse.prototype.hasMessage = function() {
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
proto.yartu.RevertDirentTrashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RevertDirentTrashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RevertDirentTrashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertDirentTrashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commitId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.RevertDirentTrashRequest}
 */
proto.yartu.RevertDirentTrashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RevertDirentTrashRequest;
  return proto.yartu.RevertDirentTrashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RevertDirentTrashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RevertDirentTrashRequest}
 */
proto.yartu.RevertDirentTrashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
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
proto.yartu.RevertDirentTrashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RevertDirentTrashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RevertDirentTrashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertDirentTrashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommitId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.RevertDirentTrashRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RevertDirentTrashRequest} returns this
 */
proto.yartu.RevertDirentTrashRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.RevertDirentTrashRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RevertDirentTrashRequest} returns this
 */
proto.yartu.RevertDirentTrashRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string commit_id = 3;
 * @return {string}
 */
proto.yartu.RevertDirentTrashRequest.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RevertDirentTrashRequest} returns this
 */
proto.yartu.RevertDirentTrashRequest.prototype.setCommitId = function(value) {
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
proto.yartu.RevertDirentTrashResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RevertDirentTrashResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RevertDirentTrashResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertDirentTrashResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.Dirent.toObject(includeInstance, f),
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
 * @return {!proto.yartu.RevertDirentTrashResponse}
 */
proto.yartu.RevertDirentTrashResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RevertDirentTrashResponse;
  return proto.yartu.RevertDirentTrashResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RevertDirentTrashResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RevertDirentTrashResponse}
 */
proto.yartu.RevertDirentTrashResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
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
proto.yartu.RevertDirentTrashResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RevertDirentTrashResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RevertDirentTrashResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RevertDirentTrashResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Dirent.serializeBinaryToWriter
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
proto.yartu.RevertDirentTrashResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RevertDirentTrashResponse} returns this
 */
proto.yartu.RevertDirentTrashResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Dirent data = 2;
 * @return {?proto.yartu.Dirent}
 */
proto.yartu.RevertDirentTrashResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.Dirent} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {?proto.yartu.Dirent|undefined} value
 * @return {!proto.yartu.RevertDirentTrashResponse} returns this
*/
proto.yartu.RevertDirentTrashResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.RevertDirentTrashResponse} returns this
 */
proto.yartu.RevertDirentTrashResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RevertDirentTrashResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.RevertDirentTrashResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RevertDirentTrashResponse} returns this
 */
proto.yartu.RevertDirentTrashResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.RevertDirentTrashResponse} returns this
 */
proto.yartu.RevertDirentTrashResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.RevertDirentTrashResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yartu.ShareResult.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.yartu.ShareResult.ToCase = {
  TO_NOT_SET: 0,
  USER: 2,
  GROUP: 3,
  REALM: 4
};

/**
 * @return {proto.yartu.ShareResult.ToCase}
 */
proto.yartu.ShareResult.prototype.getToCase = function() {
  return /** @type {proto.yartu.ShareResult.ToCase} */(jspb.Message.computeOneofCase(this, proto.yartu.ShareResult.oneofGroups_[0]));
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
proto.yartu.ShareResult.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ShareResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ShareResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    group: (f = msg.getGroup()) && common_grpc_definitions_pb.Group.toObject(includeInstance, f),
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
 * @return {!proto.yartu.ShareResult}
 */
proto.yartu.ShareResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ShareResult;
  return proto.yartu.ShareResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ShareResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ShareResult}
 */
proto.yartu.ShareResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.Group;
      reader.readMessage(value,common_grpc_definitions_pb.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 4:
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
proto.yartu.ShareResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ShareResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ShareResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.Group.serializeBinaryToWriter
    );
  }
  f = message.getRealm();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_grpc_definitions_pb.Realm.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.yartu.ShareResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ShareResult} returns this
 */
proto.yartu.ShareResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User user = 2;
 * @return {?proto.User}
 */
proto.yartu.ShareResult.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 2));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.ShareResult} returns this
*/
proto.yartu.ShareResult.prototype.setUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yartu.ShareResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ShareResult} returns this
 */
proto.yartu.ShareResult.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ShareResult.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Group group = 3;
 * @return {?proto.Group}
 */
proto.yartu.ShareResult.prototype.getGroup = function() {
  return /** @type{?proto.Group} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Group, 3));
};


/**
 * @param {?proto.Group|undefined} value
 * @return {!proto.yartu.ShareResult} returns this
*/
proto.yartu.ShareResult.prototype.setGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yartu.ShareResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ShareResult} returns this
 */
proto.yartu.ShareResult.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ShareResult.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Realm realm = 4;
 * @return {?proto.Realm}
 */
proto.yartu.ShareResult.prototype.getRealm = function() {
  return /** @type{?proto.Realm} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Realm, 4));
};


/**
 * @param {?proto.Realm|undefined} value
 * @return {!proto.yartu.ShareResult} returns this
*/
proto.yartu.ShareResult.prototype.setRealm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yartu.ShareResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ShareResult} returns this
 */
proto.yartu.ShareResult.prototype.clearRealm = function() {
  return this.setRealm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ShareResult.prototype.hasRealm = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DriveSharedObject.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yartu.DriveSharedObject.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.yartu.DriveSharedObject.DataCase = {
  DATA_NOT_SET: 0,
  REPO: 1,
  DIRENT: 2
};

/**
 * @return {proto.yartu.DriveSharedObject.DataCase}
 */
proto.yartu.DriveSharedObject.prototype.getDataCase = function() {
  return /** @type {proto.yartu.DriveSharedObject.DataCase} */(jspb.Message.computeOneofCase(this, proto.yartu.DriveSharedObject.oneofGroups_[0]));
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
proto.yartu.DriveSharedObject.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DriveSharedObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DriveSharedObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DriveSharedObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.yartu.Repo.toObject(includeInstance, f),
    dirent: (f = msg.getDirent()) && proto.yartu.Dirent.toObject(includeInstance, f),
    owner: (f = msg.getOwner()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    shareList: jspb.Message.toObjectList(msg.getShareList(),
    common_grpc_definitions_pb.Shared.toObject, includeInstance)
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
 * @return {!proto.yartu.DriveSharedObject}
 */
proto.yartu.DriveSharedObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DriveSharedObject;
  return proto.yartu.DriveSharedObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DriveSharedObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DriveSharedObject}
 */
proto.yartu.DriveSharedObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yartu.Repo;
      reader.readMessage(value,proto.yartu.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = new proto.yartu.Dirent;
      reader.readMessage(value,proto.yartu.Dirent.deserializeBinaryFromReader);
      msg.setDirent(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 4:
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShare(value);
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
proto.yartu.DriveSharedObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DriveSharedObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DriveSharedObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DriveSharedObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yartu.Repo.serializeBinaryToWriter
    );
  }
  f = message.getDirent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Dirent.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getShareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.yartu.Repo}
 */
proto.yartu.DriveSharedObject.prototype.getRepo = function() {
  return /** @type{?proto.yartu.Repo} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Repo, 1));
};


/**
 * @param {?proto.yartu.Repo|undefined} value
 * @return {!proto.yartu.DriveSharedObject} returns this
*/
proto.yartu.DriveSharedObject.prototype.setRepo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yartu.DriveSharedObject.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.DriveSharedObject} returns this
 */
proto.yartu.DriveSharedObject.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DriveSharedObject.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Dirent dirent = 2;
 * @return {?proto.yartu.Dirent}
 */
proto.yartu.DriveSharedObject.prototype.getDirent = function() {
  return /** @type{?proto.yartu.Dirent} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Dirent, 2));
};


/**
 * @param {?proto.yartu.Dirent|undefined} value
 * @return {!proto.yartu.DriveSharedObject} returns this
*/
proto.yartu.DriveSharedObject.prototype.setDirent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yartu.DriveSharedObject.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.DriveSharedObject} returns this
 */
proto.yartu.DriveSharedObject.prototype.clearDirent = function() {
  return this.setDirent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DriveSharedObject.prototype.hasDirent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional User owner = 3;
 * @return {?proto.User}
 */
proto.yartu.DriveSharedObject.prototype.getOwner = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.DriveSharedObject} returns this
*/
proto.yartu.DriveSharedObject.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.DriveSharedObject} returns this
 */
proto.yartu.DriveSharedObject.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DriveSharedObject.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Shared share = 4;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.DriveSharedObject.prototype.getShareList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 4));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.DriveSharedObject} returns this
*/
proto.yartu.DriveSharedObject.prototype.setShareList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.DriveSharedObject.prototype.addShare = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DriveSharedObject} returns this
 */
proto.yartu.DriveSharedObject.prototype.clearShareList = function() {
  return this.setShareList([]);
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
proto.yartu.ListShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.ListShareRequest}
 */
proto.yartu.ListShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListShareRequest;
  return proto.yartu.ListShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListShareRequest}
 */
proto.yartu.ListShareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.yartu.ListShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
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
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.ListShareRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListShareRequest} returns this
 */
proto.yartu.ListShareRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.ListShareRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListShareRequest} returns this
 */
proto.yartu.ListShareRequest.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListShareRequest} returns this
 */
proto.yartu.ListShareRequest.prototype.clearPath = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListShareRequest.prototype.hasPath = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListShareResponse.repeatedFields_ = [4];



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
proto.yartu.ListShareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListShareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListShareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListShareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shareList: jspb.Message.toObjectList(msg.getShareList(),
    common_grpc_definitions_pb.Shared.toObject, includeInstance),
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
 * @return {!proto.yartu.ListShareResponse}
 */
proto.yartu.ListShareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListShareResponse;
  return proto.yartu.ListShareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListShareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListShareResponse}
 */
proto.yartu.ListShareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 4:
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShare(value);
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
proto.yartu.ListShareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListShareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListShareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListShareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
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
proto.yartu.ListShareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListShareResponse} returns this
 */
proto.yartu.ListShareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.yartu.ListShareResponse.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListShareResponse} returns this
 */
proto.yartu.ListShareResponse.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Shared share = 4;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.ListShareResponse.prototype.getShareList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 4));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.ListShareResponse} returns this
*/
proto.yartu.ListShareResponse.prototype.setShareList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.ListShareResponse.prototype.addShare = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListShareResponse} returns this
 */
proto.yartu.ListShareResponse.prototype.clearShareList = function() {
  return this.setShareList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListShareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListShareResponse} returns this
 */
proto.yartu.ListShareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListShareResponse} returns this
 */
proto.yartu.ListShareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListShareResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ShareRequest.repeatedFields_ = [3];



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
proto.yartu.ShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shareList: jspb.Message.toObjectList(msg.getShareList(),
    common_grpc_definitions_pb.Shared.toObject, includeInstance),
    description: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yartu.ShareRequest}
 */
proto.yartu.ShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ShareRequest;
  return proto.yartu.ShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ShareRequest}
 */
proto.yartu.ShareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShare(value);
      break;
    case 4:
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
proto.yartu.ShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
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
  f = message.getShareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.ShareRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ShareRequest} returns this
 */
proto.yartu.ShareRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.ShareRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ShareRequest} returns this
 */
proto.yartu.ShareRequest.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ShareRequest} returns this
 */
proto.yartu.ShareRequest.prototype.clearPath = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ShareRequest.prototype.hasPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Shared share = 3;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.ShareRequest.prototype.getShareList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 3));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.ShareRequest} returns this
*/
proto.yartu.ShareRequest.prototype.setShareList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.ShareRequest.prototype.addShare = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ShareRequest} returns this
 */
proto.yartu.ShareRequest.prototype.clearShareList = function() {
  return this.setShareList([]);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.yartu.ShareRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ShareRequest} returns this
 */
proto.yartu.ShareRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ShareResponse.repeatedFields_ = [2,3];



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
proto.yartu.ShareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ShareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ShareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    successList: jspb.Message.toObjectList(msg.getSuccessList(),
    proto.yartu.ShareResult.toObject, includeInstance),
    failedList: jspb.Message.toObjectList(msg.getFailedList(),
    proto.yartu.ShareResult.toObject, includeInstance),
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
 * @return {!proto.yartu.ShareResponse}
 */
proto.yartu.ShareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ShareResponse;
  return proto.yartu.ShareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ShareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ShareResponse}
 */
proto.yartu.ShareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.ShareResult;
      reader.readMessage(value,proto.yartu.ShareResult.deserializeBinaryFromReader);
      msg.addSuccess(value);
      break;
    case 3:
      var value = new proto.yartu.ShareResult;
      reader.readMessage(value,proto.yartu.ShareResult.deserializeBinaryFromReader);
      msg.addFailed(value);
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
proto.yartu.ShareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ShareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ShareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSuccessList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.ShareResult.serializeBinaryToWriter
    );
  }
  f = message.getFailedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.ShareResult.serializeBinaryToWriter
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
proto.yartu.ShareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ShareResponse} returns this
 */
proto.yartu.ShareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ShareResult success = 2;
 * @return {!Array<!proto.yartu.ShareResult>}
 */
proto.yartu.ShareResponse.prototype.getSuccessList = function() {
  return /** @type{!Array<!proto.yartu.ShareResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.ShareResult, 2));
};


/**
 * @param {!Array<!proto.yartu.ShareResult>} value
 * @return {!proto.yartu.ShareResponse} returns this
*/
proto.yartu.ShareResponse.prototype.setSuccessList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.ShareResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.ShareResult}
 */
proto.yartu.ShareResponse.prototype.addSuccess = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.ShareResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ShareResponse} returns this
 */
proto.yartu.ShareResponse.prototype.clearSuccessList = function() {
  return this.setSuccessList([]);
};


/**
 * repeated ShareResult failed = 3;
 * @return {!Array<!proto.yartu.ShareResult>}
 */
proto.yartu.ShareResponse.prototype.getFailedList = function() {
  return /** @type{!Array<!proto.yartu.ShareResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.ShareResult, 3));
};


/**
 * @param {!Array<!proto.yartu.ShareResult>} value
 * @return {!proto.yartu.ShareResponse} returns this
*/
proto.yartu.ShareResponse.prototype.setFailedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.ShareResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.ShareResult}
 */
proto.yartu.ShareResponse.prototype.addFailed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.ShareResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ShareResponse} returns this
 */
proto.yartu.ShareResponse.prototype.clearFailedList = function() {
  return this.setFailedList([]);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ShareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ShareResponse} returns this
 */
proto.yartu.ShareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ShareResponse} returns this
 */
proto.yartu.ShareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ShareResponse.prototype.hasMessage = function() {
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
proto.yartu.UnshareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnshareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnshareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.UnshareRequest}
 */
proto.yartu.UnshareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnshareRequest;
  return proto.yartu.UnshareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnshareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnshareRequest}
 */
proto.yartu.UnshareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.yartu.UnshareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnshareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnshareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
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
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.UnshareRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnshareRequest} returns this
 */
proto.yartu.UnshareRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.UnshareRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnshareRequest} returns this
 */
proto.yartu.UnshareRequest.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UnshareRequest} returns this
 */
proto.yartu.UnshareRequest.prototype.clearPath = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UnshareRequest.prototype.hasPath = function() {
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
proto.yartu.UnshareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnshareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnshareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.yartu.UnshareResponse}
 */
proto.yartu.UnshareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnshareResponse;
  return proto.yartu.UnshareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnshareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnshareResponse}
 */
proto.yartu.UnshareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UnshareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnshareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnshareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
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
proto.yartu.UnshareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UnshareResponse} returns this
 */
proto.yartu.UnshareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UnshareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnshareResponse} returns this
 */
proto.yartu.UnshareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UnshareResponse} returns this
 */
proto.yartu.UnshareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UnshareResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DeleteShareRequest.repeatedFields_ = [3];



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
proto.yartu.DeleteShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shareList: jspb.Message.toObjectList(msg.getShareList(),
    common_grpc_definitions_pb.Shared.toObject, includeInstance),
    description: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yartu.DeleteShareRequest}
 */
proto.yartu.DeleteShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteShareRequest;
  return proto.yartu.DeleteShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteShareRequest}
 */
proto.yartu.DeleteShareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShare(value);
      break;
    case 4:
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
proto.yartu.DeleteShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
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
  f = message.getShareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.DeleteShareRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteShareRequest} returns this
 */
proto.yartu.DeleteShareRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.DeleteShareRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteShareRequest} returns this
 */
proto.yartu.DeleteShareRequest.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteShareRequest} returns this
 */
proto.yartu.DeleteShareRequest.prototype.clearPath = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteShareRequest.prototype.hasPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Shared share = 3;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.DeleteShareRequest.prototype.getShareList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 3));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.DeleteShareRequest} returns this
*/
proto.yartu.DeleteShareRequest.prototype.setShareList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.DeleteShareRequest.prototype.addShare = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DeleteShareRequest} returns this
 */
proto.yartu.DeleteShareRequest.prototype.clearShareList = function() {
  return this.setShareList([]);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.yartu.DeleteShareRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteShareRequest} returns this
 */
proto.yartu.DeleteShareRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.DeleteShareResponse.repeatedFields_ = [2,3];



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
proto.yartu.DeleteShareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteShareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteShareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteShareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    successList: jspb.Message.toObjectList(msg.getSuccessList(),
    proto.yartu.ShareResult.toObject, includeInstance),
    failedList: jspb.Message.toObjectList(msg.getFailedList(),
    proto.yartu.ShareResult.toObject, includeInstance),
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
 * @return {!proto.yartu.DeleteShareResponse}
 */
proto.yartu.DeleteShareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteShareResponse;
  return proto.yartu.DeleteShareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteShareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteShareResponse}
 */
proto.yartu.DeleteShareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.ShareResult;
      reader.readMessage(value,proto.yartu.ShareResult.deserializeBinaryFromReader);
      msg.addSuccess(value);
      break;
    case 3:
      var value = new proto.yartu.ShareResult;
      reader.readMessage(value,proto.yartu.ShareResult.deserializeBinaryFromReader);
      msg.addFailed(value);
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
proto.yartu.DeleteShareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteShareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteShareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteShareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSuccessList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.ShareResult.serializeBinaryToWriter
    );
  }
  f = message.getFailedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.ShareResult.serializeBinaryToWriter
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
proto.yartu.DeleteShareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteShareResponse} returns this
 */
proto.yartu.DeleteShareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ShareResult success = 2;
 * @return {!Array<!proto.yartu.ShareResult>}
 */
proto.yartu.DeleteShareResponse.prototype.getSuccessList = function() {
  return /** @type{!Array<!proto.yartu.ShareResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.ShareResult, 2));
};


/**
 * @param {!Array<!proto.yartu.ShareResult>} value
 * @return {!proto.yartu.DeleteShareResponse} returns this
*/
proto.yartu.DeleteShareResponse.prototype.setSuccessList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.ShareResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.ShareResult}
 */
proto.yartu.DeleteShareResponse.prototype.addSuccess = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.ShareResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DeleteShareResponse} returns this
 */
proto.yartu.DeleteShareResponse.prototype.clearSuccessList = function() {
  return this.setSuccessList([]);
};


/**
 * repeated ShareResult failed = 3;
 * @return {!Array<!proto.yartu.ShareResult>}
 */
proto.yartu.DeleteShareResponse.prototype.getFailedList = function() {
  return /** @type{!Array<!proto.yartu.ShareResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.ShareResult, 3));
};


/**
 * @param {!Array<!proto.yartu.ShareResult>} value
 * @return {!proto.yartu.DeleteShareResponse} returns this
*/
proto.yartu.DeleteShareResponse.prototype.setFailedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.ShareResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.ShareResult}
 */
proto.yartu.DeleteShareResponse.prototype.addFailed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.ShareResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.DeleteShareResponse} returns this
 */
proto.yartu.DeleteShareResponse.prototype.clearFailedList = function() {
  return this.setFailedList([]);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.DeleteShareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteShareResponse} returns this
 */
proto.yartu.DeleteShareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteShareResponse} returns this
 */
proto.yartu.DeleteShareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteShareResponse.prototype.hasMessage = function() {
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
proto.yartu.ListSharePermissionTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharePermissionTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharePermissionTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharePermissionTemplateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListSharePermissionTemplateRequest}
 */
proto.yartu.ListSharePermissionTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharePermissionTemplateRequest;
  return proto.yartu.ListSharePermissionTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharePermissionTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharePermissionTemplateRequest}
 */
proto.yartu.ListSharePermissionTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListSharePermissionTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharePermissionTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharePermissionTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharePermissionTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListSharePermissionTemplateResponse.repeatedFields_ = [2];



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
proto.yartu.ListSharePermissionTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharePermissionTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharePermissionTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharePermissionTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.SharePermissionTemplate.toObject, includeInstance),
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
 * @return {!proto.yartu.ListSharePermissionTemplateResponse}
 */
proto.yartu.ListSharePermissionTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharePermissionTemplateResponse;
  return proto.yartu.ListSharePermissionTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharePermissionTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharePermissionTemplateResponse}
 */
proto.yartu.ListSharePermissionTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.SharePermissionTemplate;
      reader.readMessage(value,proto.yartu.SharePermissionTemplate.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.yartu.ListSharePermissionTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharePermissionTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharePermissionTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharePermissionTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.SharePermissionTemplate.serializeBinaryToWriter
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
proto.yartu.ListSharePermissionTemplateResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListSharePermissionTemplateResponse} returns this
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated SharePermissionTemplate data = 2;
 * @return {!Array<!proto.yartu.SharePermissionTemplate>}
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.SharePermissionTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.SharePermissionTemplate, 2));
};


/**
 * @param {!Array<!proto.yartu.SharePermissionTemplate>} value
 * @return {!proto.yartu.ListSharePermissionTemplateResponse} returns this
*/
proto.yartu.ListSharePermissionTemplateResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.SharePermissionTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.SharePermissionTemplate}
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.SharePermissionTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListSharePermissionTemplateResponse} returns this
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListSharePermissionTemplateResponse} returns this
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListSharePermissionTemplateResponse} returns this
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListSharePermissionTemplateResponse.prototype.hasMessage = function() {
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
proto.yartu.SharedWithMeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharedWithMeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharedWithMeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedWithMeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.SharedWithMeRequest}
 */
proto.yartu.SharedWithMeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharedWithMeRequest;
  return proto.yartu.SharedWithMeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharedWithMeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharedWithMeRequest}
 */
proto.yartu.SharedWithMeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.SharedWithMeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharedWithMeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharedWithMeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedWithMeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.SharedWithMeResponse.repeatedFields_ = [2];



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
proto.yartu.SharedWithMeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharedWithMeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharedWithMeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedWithMeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.DriveSharedObject.toObject, includeInstance),
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
 * @return {!proto.yartu.SharedWithMeResponse}
 */
proto.yartu.SharedWithMeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharedWithMeResponse;
  return proto.yartu.SharedWithMeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharedWithMeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharedWithMeResponse}
 */
proto.yartu.SharedWithMeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.DriveSharedObject;
      reader.readMessage(value,proto.yartu.DriveSharedObject.deserializeBinaryFromReader);
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
proto.yartu.SharedWithMeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharedWithMeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharedWithMeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedWithMeResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.DriveSharedObject.serializeBinaryToWriter
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
proto.yartu.SharedWithMeResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SharedWithMeResponse} returns this
 */
proto.yartu.SharedWithMeResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DriveSharedObject data = 2;
 * @return {!Array<!proto.yartu.DriveSharedObject>}
 */
proto.yartu.SharedWithMeResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.DriveSharedObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.DriveSharedObject, 2));
};


/**
 * @param {!Array<!proto.yartu.DriveSharedObject>} value
 * @return {!proto.yartu.SharedWithMeResponse} returns this
*/
proto.yartu.SharedWithMeResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.DriveSharedObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.DriveSharedObject}
 */
proto.yartu.SharedWithMeResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.DriveSharedObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.SharedWithMeResponse} returns this
 */
proto.yartu.SharedWithMeResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.SharedWithMeResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedWithMeResponse} returns this
 */
proto.yartu.SharedWithMeResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharedWithMeResponse} returns this
 */
proto.yartu.SharedWithMeResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedWithMeResponse.prototype.hasMessage = function() {
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
proto.yartu.SharedByMeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharedByMeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharedByMeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedByMeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.SharedByMeRequest}
 */
proto.yartu.SharedByMeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharedByMeRequest;
  return proto.yartu.SharedByMeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharedByMeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharedByMeRequest}
 */
proto.yartu.SharedByMeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.SharedByMeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharedByMeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharedByMeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedByMeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.SharedByMeResponse.repeatedFields_ = [2];



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
proto.yartu.SharedByMeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharedByMeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharedByMeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedByMeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.DriveSharedObject.toObject, includeInstance),
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
 * @return {!proto.yartu.SharedByMeResponse}
 */
proto.yartu.SharedByMeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharedByMeResponse;
  return proto.yartu.SharedByMeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharedByMeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharedByMeResponse}
 */
proto.yartu.SharedByMeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.DriveSharedObject;
      reader.readMessage(value,proto.yartu.DriveSharedObject.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.yartu.SharedByMeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharedByMeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharedByMeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedByMeResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.DriveSharedObject.serializeBinaryToWriter
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
proto.yartu.SharedByMeResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SharedByMeResponse} returns this
 */
proto.yartu.SharedByMeResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DriveSharedObject data = 2;
 * @return {!Array<!proto.yartu.DriveSharedObject>}
 */
proto.yartu.SharedByMeResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.DriveSharedObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.DriveSharedObject, 2));
};


/**
 * @param {!Array<!proto.yartu.DriveSharedObject>} value
 * @return {!proto.yartu.SharedByMeResponse} returns this
*/
proto.yartu.SharedByMeResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.DriveSharedObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.DriveSharedObject}
 */
proto.yartu.SharedByMeResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.DriveSharedObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.SharedByMeResponse} returns this
 */
proto.yartu.SharedByMeResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.SharedByMeResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedByMeResponse} returns this
 */
proto.yartu.SharedByMeResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharedByMeResponse} returns this
 */
proto.yartu.SharedByMeResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedByMeResponse.prototype.hasMessage = function() {
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
proto.yartu.PublicShare.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.PublicShare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.PublicShare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PublicShare.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repoName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    token: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
    expireDate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    passwordNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    isFile: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    viewCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    downloadCount: jspb.Message.getFieldWithDefault(msg, 13, 0),
    downloadCountLimit: jspb.Message.getFieldWithDefault(msg, 14, 0),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 15, ""),
    expired: jspb.Message.getBooleanFieldWithDefault(msg, 16, false)
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
 * @return {!proto.yartu.PublicShare}
 */
proto.yartu.PublicShare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.PublicShare;
  return proto.yartu.PublicShare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.PublicShare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.PublicShare}
 */
proto.yartu.PublicShare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpireDate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordNeeded(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFile(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setViewCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDownloadCount(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDownloadCountLimit(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpired(value);
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
proto.yartu.PublicShare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.PublicShare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.PublicShare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PublicShare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepoName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExpireDate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPasswordNeeded();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIsFile();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getViewCount();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getDownloadCount();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getDownloadCountLimit();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getExpired();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo_name = 2;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getRepoName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setRepoName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.yartu.PublicShare.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string token = 6;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string created_at = 7;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string expire_date = 8;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getExpireDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setExpireDate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool password_needed = 10;
 * @return {boolean}
 */
proto.yartu.PublicShare.prototype.getPasswordNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setPasswordNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool is_file = 11;
 * @return {boolean}
 */
proto.yartu.PublicShare.prototype.getIsFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setIsFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int64 view_count = 12;
 * @return {number}
 */
proto.yartu.PublicShare.prototype.getViewCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setViewCount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 download_count = 13;
 * @return {number}
 */
proto.yartu.PublicShare.prototype.getDownloadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setDownloadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 download_count_limit = 14;
 * @return {number}
 */
proto.yartu.PublicShare.prototype.getDownloadCountLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setDownloadCountLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string ipaddress = 15;
 * @return {string}
 */
proto.yartu.PublicShare.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setIpaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional bool expired = 16;
 * @return {boolean}
 */
proto.yartu.PublicShare.prototype.getExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.PublicShare} returns this
 */
proto.yartu.PublicShare.prototype.setExpired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
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
proto.yartu.PublicShareDirent.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.PublicShareDirent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.PublicShareDirent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PublicShareDirent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentDir: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isFile: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    mtime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ctime: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.yartu.PublicShareDirent}
 */
proto.yartu.PublicShareDirent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.PublicShareDirent;
  return proto.yartu.PublicShareDirent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.PublicShareDirent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.PublicShareDirent}
 */
proto.yartu.PublicShareDirent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentDir(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFile(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMtime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtime(value);
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
proto.yartu.PublicShareDirent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.PublicShareDirent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.PublicShareDirent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PublicShareDirent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentDir();
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
  f = message.getIsFile();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMtime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCtime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yartu.PublicShareDirent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShareDirent} returns this
 */
proto.yartu.PublicShareDirent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent_dir = 2;
 * @return {string}
 */
proto.yartu.PublicShareDirent.prototype.getParentDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShareDirent} returns this
 */
proto.yartu.PublicShareDirent.prototype.setParentDir = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yartu.PublicShareDirent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PublicShareDirent} returns this
 */
proto.yartu.PublicShareDirent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_file = 4;
 * @return {boolean}
 */
proto.yartu.PublicShareDirent.prototype.getIsFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.PublicShareDirent} returns this
 */
proto.yartu.PublicShareDirent.prototype.setIsFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.yartu.PublicShareDirent.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PublicShareDirent} returns this
 */
proto.yartu.PublicShareDirent.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 mtime = 6;
 * @return {number}
 */
proto.yartu.PublicShareDirent.prototype.getMtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PublicShareDirent} returns this
 */
proto.yartu.PublicShareDirent.prototype.setMtime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 ctime = 7;
 * @return {number}
 */
proto.yartu.PublicShareDirent.prototype.getCtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PublicShareDirent} returns this
 */
proto.yartu.PublicShareDirent.prototype.setCtime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.yartu.ListPublicShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListPublicShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListPublicShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    showExpired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.ListPublicShareRequest}
 */
proto.yartu.ListPublicShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListPublicShareRequest;
  return proto.yartu.ListPublicShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListPublicShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListPublicShareRequest}
 */
proto.yartu.ListPublicShareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowExpired(value);
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
proto.yartu.ListPublicShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListPublicShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListPublicShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShowExpired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.ListPublicShareRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListPublicShareRequest} returns this
 */
proto.yartu.ListPublicShareRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.ListPublicShareRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListPublicShareRequest} returns this
 */
proto.yartu.ListPublicShareRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool show_expired = 3;
 * @return {boolean}
 */
proto.yartu.ListPublicShareRequest.prototype.getShowExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ListPublicShareRequest} returns this
 */
proto.yartu.ListPublicShareRequest.prototype.setShowExpired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListPublicShareResponse.repeatedFields_ = [2];



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
proto.yartu.ListPublicShareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListPublicShareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListPublicShareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicShareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.PublicShare.toObject, includeInstance),
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
 * @return {!proto.yartu.ListPublicShareResponse}
 */
proto.yartu.ListPublicShareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListPublicShareResponse;
  return proto.yartu.ListPublicShareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListPublicShareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListPublicShareResponse}
 */
proto.yartu.ListPublicShareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.PublicShare;
      reader.readMessage(value,proto.yartu.PublicShare.deserializeBinaryFromReader);
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
proto.yartu.ListPublicShareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListPublicShareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListPublicShareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListPublicShareResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.PublicShare.serializeBinaryToWriter
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
proto.yartu.ListPublicShareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListPublicShareResponse} returns this
 */
proto.yartu.ListPublicShareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PublicShare data = 2;
 * @return {!Array<!proto.yartu.PublicShare>}
 */
proto.yartu.ListPublicShareResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.PublicShare>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.PublicShare, 2));
};


/**
 * @param {!Array<!proto.yartu.PublicShare>} value
 * @return {!proto.yartu.ListPublicShareResponse} returns this
*/
proto.yartu.ListPublicShareResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.PublicShare=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.PublicShare}
 */
proto.yartu.ListPublicShareResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.PublicShare, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListPublicShareResponse} returns this
 */
proto.yartu.ListPublicShareResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListPublicShareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListPublicShareResponse} returns this
 */
proto.yartu.ListPublicShareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListPublicShareResponse} returns this
 */
proto.yartu.ListPublicShareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListPublicShareResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertPublicShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertPublicShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertPublicShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertPublicShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repoId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    password: jspb.Message.getFieldWithDefault(msg, 5, ""),
    expireDate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    downloadCountLimit: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.yartu.UpsertPublicShareRequest}
 */
proto.yartu.UpsertPublicShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertPublicShareRequest;
  return proto.yartu.UpsertPublicShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertPublicShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertPublicShareRequest}
 */
proto.yartu.UpsertPublicShareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpireDate(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDownloadCountLimit(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
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
proto.yartu.UpsertPublicShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertPublicShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertPublicShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertPublicShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
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
  f = message.getExpireDate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDownloadCountLimit();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo_id = 2;
 * @return {string}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertPublicShareRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string expire_date = 6;
 * @return {string}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getExpireDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setExpireDate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 download_count_limit = 7;
 * @return {number}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getDownloadCountLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setDownloadCountLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string ipaddress = 8;
 * @return {string}
 */
proto.yartu.UpsertPublicShareRequest.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareRequest} returns this
 */
proto.yartu.UpsertPublicShareRequest.prototype.setIpaddress = function(value) {
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
proto.yartu.UpsertPublicShareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertPublicShareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertPublicShareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertPublicShareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.PublicShare.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertPublicShareResponse}
 */
proto.yartu.UpsertPublicShareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertPublicShareResponse;
  return proto.yartu.UpsertPublicShareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertPublicShareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertPublicShareResponse}
 */
proto.yartu.UpsertPublicShareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.PublicShare;
      reader.readMessage(value,proto.yartu.PublicShare.deserializeBinaryFromReader);
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
proto.yartu.UpsertPublicShareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertPublicShareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertPublicShareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertPublicShareResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.PublicShare.serializeBinaryToWriter
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
proto.yartu.UpsertPublicShareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertPublicShareResponse} returns this
 */
proto.yartu.UpsertPublicShareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PublicShare data = 2;
 * @return {?proto.yartu.PublicShare}
 */
proto.yartu.UpsertPublicShareResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.PublicShare} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PublicShare, 2));
};


/**
 * @param {?proto.yartu.PublicShare|undefined} value
 * @return {!proto.yartu.UpsertPublicShareResponse} returns this
*/
proto.yartu.UpsertPublicShareResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertPublicShareResponse} returns this
 */
proto.yartu.UpsertPublicShareResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertPublicShareResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UpsertPublicShareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertPublicShareResponse} returns this
 */
proto.yartu.UpsertPublicShareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertPublicShareResponse} returns this
 */
proto.yartu.UpsertPublicShareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertPublicShareResponse.prototype.hasMessage = function() {
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
proto.yartu.DeletePublicShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeletePublicShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeletePublicShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeletePublicShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.DeletePublicShareRequest}
 */
proto.yartu.DeletePublicShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeletePublicShareRequest;
  return proto.yartu.DeletePublicShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeletePublicShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeletePublicShareRequest}
 */
proto.yartu.DeletePublicShareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.yartu.DeletePublicShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeletePublicShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeletePublicShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeletePublicShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.DeletePublicShareRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeletePublicShareRequest} returns this
 */
proto.yartu.DeletePublicShareRequest.prototype.setToken = function(value) {
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
proto.yartu.DeletePublicShareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeletePublicShareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeletePublicShareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeletePublicShareResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeletePublicShareResponse}
 */
proto.yartu.DeletePublicShareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeletePublicShareResponse;
  return proto.yartu.DeletePublicShareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeletePublicShareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeletePublicShareResponse}
 */
proto.yartu.DeletePublicShareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeletePublicShareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeletePublicShareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeletePublicShareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeletePublicShareResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeletePublicShareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeletePublicShareResponse} returns this
 */
proto.yartu.DeletePublicShareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeletePublicShareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeletePublicShareResponse} returns this
 */
proto.yartu.DeletePublicShareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeletePublicShareResponse} returns this
 */
proto.yartu.DeletePublicShareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeletePublicShareResponse.prototype.hasMessage = function() {
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
proto.yartu.GetPublicShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPublicShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPublicShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.GetPublicShareRequest}
 */
proto.yartu.GetPublicShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPublicShareRequest;
  return proto.yartu.GetPublicShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPublicShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPublicShareRequest}
 */
proto.yartu.GetPublicShareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.yartu.GetPublicShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPublicShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPublicShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
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
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.GetPublicShareRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareRequest} returns this
 */
proto.yartu.GetPublicShareRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.yartu.GetPublicShareRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareRequest} returns this
 */
proto.yartu.GetPublicShareRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetPublicShareRequest} returns this
 */
proto.yartu.GetPublicShareRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPublicShareRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.yartu.GetPublicShareRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareRequest} returns this
 */
proto.yartu.GetPublicShareRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.GetPublicShareResponse.repeatedFields_ = [3];



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
proto.yartu.GetPublicShareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPublicShareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPublicShareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.yartu.PublicShare.toObject(includeInstance, f),
    direntList: jspb.Message.toObjectList(msg.getDirentList(),
    proto.yartu.PublicShareDirent.toObject, includeInstance),
    passwordNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    viewToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    message: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.yartu.GetPublicShareResponse}
 */
proto.yartu.GetPublicShareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPublicShareResponse;
  return proto.yartu.GetPublicShareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPublicShareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPublicShareResponse}
 */
proto.yartu.GetPublicShareResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.PublicShare;
      reader.readMessage(value,proto.yartu.PublicShare.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.yartu.PublicShareDirent;
      reader.readMessage(value,proto.yartu.PublicShareDirent.deserializeBinaryFromReader);
      msg.addDirent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordNeeded(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewToken(value);
      break;
    case 6:
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
proto.yartu.GetPublicShareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPublicShareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPublicShareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.PublicShare.serializeBinaryToWriter
    );
  }
  f = message.getDirentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yartu.PublicShareDirent.serializeBinaryToWriter
    );
  }
  f = message.getPasswordNeeded();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getViewToken();
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
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetPublicShareResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPublicShareResponse} returns this
 */
proto.yartu.GetPublicShareResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PublicShare info = 2;
 * @return {?proto.yartu.PublicShare}
 */
proto.yartu.GetPublicShareResponse.prototype.getInfo = function() {
  return /** @type{?proto.yartu.PublicShare} */ (
    jspb.Message.getWrapperField(this, proto.yartu.PublicShare, 2));
};


/**
 * @param {?proto.yartu.PublicShare|undefined} value
 * @return {!proto.yartu.GetPublicShareResponse} returns this
*/
proto.yartu.GetPublicShareResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetPublicShareResponse} returns this
 */
proto.yartu.GetPublicShareResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPublicShareResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PublicShareDirent dirent = 3;
 * @return {!Array<!proto.yartu.PublicShareDirent>}
 */
proto.yartu.GetPublicShareResponse.prototype.getDirentList = function() {
  return /** @type{!Array<!proto.yartu.PublicShareDirent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.PublicShareDirent, 3));
};


/**
 * @param {!Array<!proto.yartu.PublicShareDirent>} value
 * @return {!proto.yartu.GetPublicShareResponse} returns this
*/
proto.yartu.GetPublicShareResponse.prototype.setDirentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yartu.PublicShareDirent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.PublicShareDirent}
 */
proto.yartu.GetPublicShareResponse.prototype.addDirent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yartu.PublicShareDirent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.GetPublicShareResponse} returns this
 */
proto.yartu.GetPublicShareResponse.prototype.clearDirentList = function() {
  return this.setDirentList([]);
};


/**
 * optional bool password_needed = 4;
 * @return {boolean}
 */
proto.yartu.GetPublicShareResponse.prototype.getPasswordNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetPublicShareResponse} returns this
 */
proto.yartu.GetPublicShareResponse.prototype.setPasswordNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string view_token = 5;
 * @return {string}
 */
proto.yartu.GetPublicShareResponse.prototype.getViewToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareResponse} returns this
 */
proto.yartu.GetPublicShareResponse.prototype.setViewToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.yartu.GetPublicShareResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareResponse} returns this
 */
proto.yartu.GetPublicShareResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetPublicShareResponse} returns this
 */
proto.yartu.GetPublicShareResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPublicShareResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.yartu.GetPublicShareDownloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPublicShareDownloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPublicShareDownloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareDownloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yartu.GetPublicShareDownloadRequest}
 */
proto.yartu.GetPublicShareDownloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPublicShareDownloadRequest;
  return proto.yartu.GetPublicShareDownloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPublicShareDownloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPublicShareDownloadRequest}
 */
proto.yartu.GetPublicShareDownloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.yartu.GetPublicShareDownloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPublicShareDownloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPublicShareDownloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareDownloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
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
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareDownloadRequest} returns this
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareDownloadRequest} returns this
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetPublicShareDownloadRequest} returns this
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareDownloadRequest} returns this
 */
proto.yartu.GetPublicShareDownloadRequest.prototype.setPath = function(value) {
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
proto.yartu.GetPublicShareDownloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetPublicShareDownloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetPublicShareDownloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareDownloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isZip: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    passwordNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
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
 * @return {!proto.yartu.GetPublicShareDownloadResponse}
 */
proto.yartu.GetPublicShareDownloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetPublicShareDownloadResponse;
  return proto.yartu.GetPublicShareDownloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetPublicShareDownloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetPublicShareDownloadResponse}
 */
proto.yartu.GetPublicShareDownloadResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsZip(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordNeeded(value);
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
proto.yartu.GetPublicShareDownloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetPublicShareDownloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetPublicShareDownloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetPublicShareDownloadResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIsZip();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPasswordNeeded();
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
proto.yartu.GetPublicShareDownloadResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetPublicShareDownloadResponse} returns this
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareDownloadResponse} returns this
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_zip = 3;
 * @return {boolean}
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.getIsZip = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetPublicShareDownloadResponse} returns this
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.setIsZip = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool password_needed = 4;
 * @return {boolean}
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.getPasswordNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetPublicShareDownloadResponse} returns this
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.setPasswordNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetPublicShareDownloadResponse} returns this
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetPublicShareDownloadResponse} returns this
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetPublicShareDownloadResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UploadPoint.repeatedFields_ = [14];



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
proto.yartu.UploadPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UploadPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UploadPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repoName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    token: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    expireDate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    title: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    fileCountLimit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    fileCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    fileSizeLimit: jspb.Message.getFieldWithDefault(msg, 12, 0),
    usedSize: jspb.Message.getFieldWithDefault(msg, 13, 0),
    extensionList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    passwordNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    viewCount: jspb.Message.getFieldWithDefault(msg, 16, 0),
    uploadCount: jspb.Message.getFieldWithDefault(msg, 17, 0),
    expired: jspb.Message.getBooleanFieldWithDefault(msg, 18, false)
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
 * @return {!proto.yartu.UploadPoint}
 */
proto.yartu.UploadPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UploadPoint;
  return proto.yartu.UploadPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UploadPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UploadPoint}
 */
proto.yartu.UploadPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpireDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileCountLimit(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileCount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileSizeLimit(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsedSize(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtension$(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordNeeded(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setViewCount(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUploadCount(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpired(value);
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
proto.yartu.UploadPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UploadPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UploadPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UploadPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepoName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getExpireDate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getFileCountLimit();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getFileCount();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getFileSizeLimit();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getUsedSize();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getPasswordNeeded();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getViewCount();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getUploadCount();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getExpired();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo_name = 2;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getRepoName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setRepoName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string created_at = 6;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string expire_date = 7;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getExpireDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setExpireDate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string title = 8;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.yartu.UploadPoint.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 file_count_limit = 10;
 * @return {number}
 */
proto.yartu.UploadPoint.prototype.getFileCountLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setFileCountLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 file_count = 11;
 * @return {number}
 */
proto.yartu.UploadPoint.prototype.getFileCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setFileCount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 file_size_limit = 12;
 * @return {number}
 */
proto.yartu.UploadPoint.prototype.getFileSizeLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setFileSizeLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 used_size = 13;
 * @return {number}
 */
proto.yartu.UploadPoint.prototype.getUsedSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setUsedSize = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated string extension = 14;
 * @return {!Array<string>}
 */
proto.yartu.UploadPoint.prototype.getExtensionList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setExtensionList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.addExtension$ = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional bool password_needed = 15;
 * @return {boolean}
 */
proto.yartu.UploadPoint.prototype.getPasswordNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setPasswordNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional int64 view_count = 16;
 * @return {number}
 */
proto.yartu.UploadPoint.prototype.getViewCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setViewCount = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 upload_count = 17;
 * @return {number}
 */
proto.yartu.UploadPoint.prototype.getUploadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setUploadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional bool expired = 18;
 * @return {boolean}
 */
proto.yartu.UploadPoint.prototype.getExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UploadPoint} returns this
 */
proto.yartu.UploadPoint.prototype.setExpired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
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
proto.yartu.ListUploadPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListUploadPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListUploadPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListUploadPointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.ListUploadPointRequest}
 */
proto.yartu.ListUploadPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListUploadPointRequest;
  return proto.yartu.ListUploadPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListUploadPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListUploadPointRequest}
 */
proto.yartu.ListUploadPointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.yartu.ListUploadPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListUploadPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListUploadPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListUploadPointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string repo_id = 1;
 * @return {string}
 */
proto.yartu.ListUploadPointRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListUploadPointRequest} returns this
 */
proto.yartu.ListUploadPointRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yartu.ListUploadPointRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListUploadPointRequest} returns this
 */
proto.yartu.ListUploadPointRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListUploadPointResponse.repeatedFields_ = [2];



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
proto.yartu.ListUploadPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListUploadPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListUploadPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListUploadPointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.UploadPoint.toObject, includeInstance),
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
 * @return {!proto.yartu.ListUploadPointResponse}
 */
proto.yartu.ListUploadPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListUploadPointResponse;
  return proto.yartu.ListUploadPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListUploadPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListUploadPointResponse}
 */
proto.yartu.ListUploadPointResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UploadPoint;
      reader.readMessage(value,proto.yartu.UploadPoint.deserializeBinaryFromReader);
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
proto.yartu.ListUploadPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListUploadPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListUploadPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListUploadPointResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.UploadPoint.serializeBinaryToWriter
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
proto.yartu.ListUploadPointResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListUploadPointResponse} returns this
 */
proto.yartu.ListUploadPointResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UploadPoint data = 2;
 * @return {!Array<!proto.yartu.UploadPoint>}
 */
proto.yartu.ListUploadPointResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.UploadPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.UploadPoint, 2));
};


/**
 * @param {!Array<!proto.yartu.UploadPoint>} value
 * @return {!proto.yartu.ListUploadPointResponse} returns this
*/
proto.yartu.ListUploadPointResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.UploadPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.UploadPoint}
 */
proto.yartu.ListUploadPointResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.UploadPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListUploadPointResponse} returns this
 */
proto.yartu.ListUploadPointResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListUploadPointResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListUploadPointResponse} returns this
 */
proto.yartu.ListUploadPointResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListUploadPointResponse} returns this
 */
proto.yartu.ListUploadPointResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListUploadPointResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertUploadPointRequest.repeatedFields_ = [11];



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
proto.yartu.UpsertUploadPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertUploadPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertUploadPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertUploadPointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repoId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: jspb.Message.getFieldWithDefault(msg, 3, ""),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    password: jspb.Message.getFieldWithDefault(msg, 6, ""),
    expireDate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fileCountLimit: jspb.Message.getFieldWithDefault(msg, 8, 0),
    fileSizeLimit: jspb.Message.getFieldWithDefault(msg, 9, 0),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 10, ""),
    extensionListList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.yartu.UpsertUploadPointRequest}
 */
proto.yartu.UpsertUploadPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertUploadPointRequest;
  return proto.yartu.UpsertUploadPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertUploadPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertUploadPointRequest}
 */
proto.yartu.UpsertUploadPointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpireDate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileCountLimit(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileSizeLimit(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtensionList(value);
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
proto.yartu.UpsertUploadPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertUploadPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertUploadPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertUploadPointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepoId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getExpireDate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFileCountLimit();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getFileSizeLimit();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getExtensionListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo_id = 2;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getRepoId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setRepoId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string expire_date = 7;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getExpireDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setExpireDate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 file_count_limit = 8;
 * @return {number}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getFileCountLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setFileCountLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 file_size_limit = 9;
 * @return {number}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getFileSizeLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setFileSizeLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string ipaddress = 10;
 * @return {string}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setIpaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string extension_list = 11;
 * @return {!Array<string>}
 */
proto.yartu.UpsertUploadPointRequest.prototype.getExtensionListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.setExtensionListList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.addExtensionList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertUploadPointRequest} returns this
 */
proto.yartu.UpsertUploadPointRequest.prototype.clearExtensionListList = function() {
  return this.setExtensionListList([]);
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
proto.yartu.UpsertUploadPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertUploadPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertUploadPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertUploadPointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.UploadPoint.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertUploadPointResponse}
 */
proto.yartu.UpsertUploadPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertUploadPointResponse;
  return proto.yartu.UpsertUploadPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertUploadPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertUploadPointResponse}
 */
proto.yartu.UpsertUploadPointResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UploadPoint;
      reader.readMessage(value,proto.yartu.UploadPoint.deserializeBinaryFromReader);
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
proto.yartu.UpsertUploadPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertUploadPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertUploadPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertUploadPointResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.UploadPoint.serializeBinaryToWriter
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
proto.yartu.UpsertUploadPointResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertUploadPointResponse} returns this
 */
proto.yartu.UpsertUploadPointResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional UploadPoint data = 2;
 * @return {?proto.yartu.UploadPoint}
 */
proto.yartu.UpsertUploadPointResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.UploadPoint} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UploadPoint, 2));
};


/**
 * @param {?proto.yartu.UploadPoint|undefined} value
 * @return {!proto.yartu.UpsertUploadPointResponse} returns this
*/
proto.yartu.UpsertUploadPointResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertUploadPointResponse} returns this
 */
proto.yartu.UpsertUploadPointResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertUploadPointResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UpsertUploadPointResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertUploadPointResponse} returns this
 */
proto.yartu.UpsertUploadPointResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertUploadPointResponse} returns this
 */
proto.yartu.UpsertUploadPointResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertUploadPointResponse.prototype.hasMessage = function() {
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
proto.yartu.DeleteUploadPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteUploadPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteUploadPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteUploadPointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yartu.DeleteUploadPointRequest}
 */
proto.yartu.DeleteUploadPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteUploadPointRequest;
  return proto.yartu.DeleteUploadPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteUploadPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteUploadPointRequest}
 */
proto.yartu.DeleteUploadPointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.yartu.DeleteUploadPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteUploadPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteUploadPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteUploadPointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.DeleteUploadPointRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteUploadPointRequest} returns this
 */
proto.yartu.DeleteUploadPointRequest.prototype.setToken = function(value) {
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
proto.yartu.DeleteUploadPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteUploadPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteUploadPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteUploadPointResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteUploadPointResponse}
 */
proto.yartu.DeleteUploadPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteUploadPointResponse;
  return proto.yartu.DeleteUploadPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteUploadPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteUploadPointResponse}
 */
proto.yartu.DeleteUploadPointResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteUploadPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteUploadPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteUploadPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteUploadPointResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteUploadPointResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteUploadPointResponse} returns this
 */
proto.yartu.DeleteUploadPointResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteUploadPointResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteUploadPointResponse} returns this
 */
proto.yartu.DeleteUploadPointResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.DeleteUploadPointResponse} returns this
 */
proto.yartu.DeleteUploadPointResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.DeleteUploadPointResponse.prototype.hasMessage = function() {
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
proto.yartu.GetUploadPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetUploadPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetUploadPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetUploadPointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yartu.GetUploadPointRequest}
 */
proto.yartu.GetUploadPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetUploadPointRequest;
  return proto.yartu.GetUploadPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetUploadPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetUploadPointRequest}
 */
proto.yartu.GetUploadPointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
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
proto.yartu.GetUploadPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetUploadPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetUploadPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetUploadPointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
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
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.yartu.GetUploadPointRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetUploadPointRequest} returns this
 */
proto.yartu.GetUploadPointRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.yartu.GetUploadPointRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetUploadPointRequest} returns this
 */
proto.yartu.GetUploadPointRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetUploadPointRequest} returns this
 */
proto.yartu.GetUploadPointRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetUploadPointRequest.prototype.hasPassword = function() {
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
proto.yartu.GetUploadPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetUploadPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetUploadPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetUploadPointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.UploadPoint.toObject(includeInstance, f),
    passwordNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    uploadKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.yartu.GetUploadPointResponse}
 */
proto.yartu.GetUploadPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetUploadPointResponse;
  return proto.yartu.GetUploadPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetUploadPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetUploadPointResponse}
 */
proto.yartu.GetUploadPointResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.UploadPoint;
      reader.readMessage(value,proto.yartu.UploadPoint.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordNeeded(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadKey(value);
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
proto.yartu.GetUploadPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetUploadPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetUploadPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetUploadPointResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.UploadPoint.serializeBinaryToWriter
    );
  }
  f = message.getPasswordNeeded();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUploadKey();
  if (f.length > 0) {
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
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.GetUploadPointResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetUploadPointResponse} returns this
 */
proto.yartu.GetUploadPointResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional UploadPoint data = 2;
 * @return {?proto.yartu.UploadPoint}
 */
proto.yartu.GetUploadPointResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.UploadPoint} */ (
    jspb.Message.getWrapperField(this, proto.yartu.UploadPoint, 2));
};


/**
 * @param {?proto.yartu.UploadPoint|undefined} value
 * @return {!proto.yartu.GetUploadPointResponse} returns this
*/
proto.yartu.GetUploadPointResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetUploadPointResponse} returns this
 */
proto.yartu.GetUploadPointResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetUploadPointResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool password_needed = 3;
 * @return {boolean}
 */
proto.yartu.GetUploadPointResponse.prototype.getPasswordNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.GetUploadPointResponse} returns this
 */
proto.yartu.GetUploadPointResponse.prototype.setPasswordNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string upload_key = 4;
 * @return {string}
 */
proto.yartu.GetUploadPointResponse.prototype.getUploadKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetUploadPointResponse} returns this
 */
proto.yartu.GetUploadPointResponse.prototype.setUploadKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.yartu.GetUploadPointResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetUploadPointResponse} returns this
 */
proto.yartu.GetUploadPointResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetUploadPointResponse} returns this
 */
proto.yartu.GetUploadPointResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetUploadPointResponse.prototype.hasMessage = function() {
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
proto.yartu.DriveClient.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DriveClient.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DriveClient} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DriveClient.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    platformVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    lastAccessed: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lastLoginIp: jspb.Message.getFieldWithDefault(msg, 8, ""),
    wipedAt: jspb.Message.getFieldWithDefault(msg, 9, ""),
    isDesktop: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.yartu.DriveClient}
 */
proto.yartu.DriveClient.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DriveClient;
  return proto.yartu.DriveClient.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DriveClient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DriveClient}
 */
proto.yartu.DriveClient.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastAccessed(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastLoginIp(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWipedAt(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDesktop(value);
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
proto.yartu.DriveClient.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DriveClient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DriveClient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DriveClient.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPlatformVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLastAccessed();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastLoginIp();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getWipedAt();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsDesktop();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform = 2;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_id = 3;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string device_name = 4;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setDeviceName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string client_version = 5;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getClientVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setClientVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string platform_version = 6;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getPlatformVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setPlatformVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string last_accessed = 7;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getLastAccessed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setLastAccessed = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string last_login_ip = 8;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getLastLoginIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setLastLoginIp = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string wiped_at = 9;
 * @return {string}
 */
proto.yartu.DriveClient.prototype.getWipedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setWipedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool is_desktop = 10;
 * @return {boolean}
 */
proto.yartu.DriveClient.prototype.getIsDesktop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.DriveClient} returns this
 */
proto.yartu.DriveClient.prototype.setIsDesktop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
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
proto.yartu.ListConnectedClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListConnectedClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListConnectedClientRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListConnectedClientRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListConnectedClientRequest}
 */
proto.yartu.ListConnectedClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListConnectedClientRequest;
  return proto.yartu.ListConnectedClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListConnectedClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListConnectedClientRequest}
 */
proto.yartu.ListConnectedClientRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListConnectedClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListConnectedClientRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListConnectedClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListConnectedClientRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListConnectedClientResponse.repeatedFields_ = [2];



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
proto.yartu.ListConnectedClientResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListConnectedClientResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListConnectedClientResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListConnectedClientResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.DriveClient.toObject, includeInstance),
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
 * @return {!proto.yartu.ListConnectedClientResponse}
 */
proto.yartu.ListConnectedClientResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListConnectedClientResponse;
  return proto.yartu.ListConnectedClientResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListConnectedClientResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListConnectedClientResponse}
 */
proto.yartu.ListConnectedClientResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.DriveClient;
      reader.readMessage(value,proto.yartu.DriveClient.deserializeBinaryFromReader);
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
proto.yartu.ListConnectedClientResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListConnectedClientResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListConnectedClientResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListConnectedClientResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.DriveClient.serializeBinaryToWriter
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
proto.yartu.ListConnectedClientResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListConnectedClientResponse} returns this
 */
proto.yartu.ListConnectedClientResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DriveClient data = 2;
 * @return {!Array<!proto.yartu.DriveClient>}
 */
proto.yartu.ListConnectedClientResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.DriveClient>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.DriveClient, 2));
};


/**
 * @param {!Array<!proto.yartu.DriveClient>} value
 * @return {!proto.yartu.ListConnectedClientResponse} returns this
*/
proto.yartu.ListConnectedClientResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.DriveClient=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.DriveClient}
 */
proto.yartu.ListConnectedClientResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.DriveClient, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListConnectedClientResponse} returns this
 */
proto.yartu.ListConnectedClientResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListConnectedClientResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListConnectedClientResponse} returns this
 */
proto.yartu.ListConnectedClientResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListConnectedClientResponse} returns this
 */
proto.yartu.ListConnectedClientResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListConnectedClientResponse.prototype.hasMessage = function() {
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
proto.yartu.SignOutClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SignOutClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SignOutClientRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SignOutClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 2, ""),
    wipe: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yartu.SignOutClientRequest}
 */
proto.yartu.SignOutClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SignOutClientRequest;
  return proto.yartu.SignOutClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SignOutClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SignOutClientRequest}
 */
proto.yartu.SignOutClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWipe(value);
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
proto.yartu.SignOutClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SignOutClientRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SignOutClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SignOutClientRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWipe();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.yartu.SignOutClientRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SignOutClientRequest} returns this
 */
proto.yartu.SignOutClientRequest.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform = 2;
 * @return {string}
 */
proto.yartu.SignOutClientRequest.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SignOutClientRequest} returns this
 */
proto.yartu.SignOutClientRequest.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool wipe = 3;
 * @return {boolean}
 */
proto.yartu.SignOutClientRequest.prototype.getWipe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SignOutClientRequest} returns this
 */
proto.yartu.SignOutClientRequest.prototype.setWipe = function(value) {
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
proto.yartu.SignOutClientResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SignOutClientResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SignOutClientResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SignOutClientResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.SignOutClientResponse}
 */
proto.yartu.SignOutClientResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SignOutClientResponse;
  return proto.yartu.SignOutClientResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SignOutClientResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SignOutClientResponse}
 */
proto.yartu.SignOutClientResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.SignOutClientResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SignOutClientResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SignOutClientResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SignOutClientResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.SignOutClientResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SignOutClientResponse} returns this
 */
proto.yartu.SignOutClientResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.SignOutClientResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SignOutClientResponse} returns this
 */
proto.yartu.SignOutClientResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SignOutClientResponse} returns this
 */
proto.yartu.SignOutClientResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SignOutClientResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(module.exports, proto.yartu);

// source: note/grpc/service.proto
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
goog.exportSymbol('proto.yartu.ArchiveNoteRequest', null, global);
goog.exportSymbol('proto.yartu.ArchiveNoteResponse', null, global);
goog.exportSymbol('proto.yartu.CompleteTaskRequest', null, global);
goog.exportSymbol('proto.yartu.CompleteTaskResponse', null, global);
goog.exportSymbol('proto.yartu.ConvertNoteRequest', null, global);
goog.exportSymbol('proto.yartu.ConvertNoteResponse', null, global);
goog.exportSymbol('proto.yartu.CopyNoteRequest', null, global);
goog.exportSymbol('proto.yartu.CopyNoteResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteNoteLabelRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteNoteLabelResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteNoteRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteNoteResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteSharedNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteSharedNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.DeleteTaskRequest', null, global);
goog.exportSymbol('proto.yartu.DeleteTaskResponse', null, global);
goog.exportSymbol('proto.yartu.DuplicateNoteRequest', null, global);
goog.exportSymbol('proto.yartu.DuplicateNoteResponse', null, global);
goog.exportSymbol('proto.yartu.GetNoteRequest', null, global);
goog.exportSymbol('proto.yartu.GetNoteResponse', null, global);
goog.exportSymbol('proto.yartu.GetNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.GetNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.GetTaskRequest', null, global);
goog.exportSymbol('proto.yartu.GetTaskResponse', null, global);
goog.exportSymbol('proto.yartu.ListNoteLabelRequest', null, global);
goog.exportSymbol('proto.yartu.ListNoteLabelResponse', null, global);
goog.exportSymbol('proto.yartu.ListNoteRequest', null, global);
goog.exportSymbol('proto.yartu.ListNoteResponse', null, global);
goog.exportSymbol('proto.yartu.ListNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.ListNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.ListSharedNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.ListSharedNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.ListTaskRequest', null, global);
goog.exportSymbol('proto.yartu.ListTaskResponse', null, global);
goog.exportSymbol('proto.yartu.MoveNoteRequest', null, global);
goog.exportSymbol('proto.yartu.MoveNoteResponse', null, global);
goog.exportSymbol('proto.yartu.Note', null, global);
goog.exportSymbol('proto.yartu.NoteLabel', null, global);
goog.exportSymbol('proto.yartu.NoteMetaQuery', null, global);
goog.exportSymbol('proto.yartu.Notebook', null, global);
goog.exportSymbol('proto.yartu.PinNoteRequest', null, global);
goog.exportSymbol('proto.yartu.PinNoteResponse', null, global);
goog.exportSymbol('proto.yartu.RemindNoteRequest', null, global);
goog.exportSymbol('proto.yartu.RemindNoteResponse', null, global);
goog.exportSymbol('proto.yartu.ShareNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.ShareNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.SharedNotebook', null, global);
goog.exportSymbol('proto.yartu.StarNoteRequest', null, global);
goog.exportSymbol('proto.yartu.StarNoteResponse', null, global);
goog.exportSymbol('proto.yartu.Task', null, global);
goog.exportSymbol('proto.yartu.UnshareNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.UnshareNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertLabelToNoteRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertLabelToNoteResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertNoteLabelRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertNoteLabelResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertNoteRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertNoteResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertSharedNotebookRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertSharedNotebookResponse', null, global);
goog.exportSymbol('proto.yartu.UpsertTaskRequest', null, global);
goog.exportSymbol('proto.yartu.UpsertTaskResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.NoteMetaQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.NoteMetaQuery.repeatedFields_, null);
};
goog.inherits(proto.yartu.NoteMetaQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.NoteMetaQuery.displayName = 'proto.yartu.NoteMetaQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.NoteLabel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.NoteLabel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.NoteLabel.displayName = 'proto.yartu.NoteLabel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.Notebook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.Notebook.repeatedFields_, null);
};
goog.inherits(proto.yartu.Notebook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Notebook.displayName = 'proto.yartu.Notebook';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.Note = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.Note.repeatedFields_, null);
};
goog.inherits(proto.yartu.Note, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Note.displayName = 'proto.yartu.Note';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.Task.displayName = 'proto.yartu.Task';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SharedNotebook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.SharedNotebook.repeatedFields_, null);
};
goog.inherits(proto.yartu.SharedNotebook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharedNotebook.displayName = 'proto.yartu.SharedNotebook';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetNotebookRequest.displayName = 'proto.yartu.GetNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetNotebookResponse.displayName = 'proto.yartu.GetNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertNotebookRequest.displayName = 'proto.yartu.UpsertNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertNotebookResponse.displayName = 'proto.yartu.UpsertNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteNotebookRequest.displayName = 'proto.yartu.DeleteNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteNotebookResponse.displayName = 'proto.yartu.DeleteNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListNotebookRequest.displayName = 'proto.yartu.ListNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListNotebookResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListNotebookResponse.displayName = 'proto.yartu.ListNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ShareNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ShareNotebookRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.ShareNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ShareNotebookRequest.displayName = 'proto.yartu.ShareNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ShareNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ShareNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ShareNotebookResponse.displayName = 'proto.yartu.ShareNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UnshareNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UnshareNotebookRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UnshareNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnshareNotebookRequest.displayName = 'proto.yartu.UnshareNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UnshareNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UnshareNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UnshareNotebookResponse.displayName = 'proto.yartu.UnshareNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertSharedNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertSharedNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertSharedNotebookRequest.displayName = 'proto.yartu.UpsertSharedNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertSharedNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertSharedNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertSharedNotebookResponse.displayName = 'proto.yartu.UpsertSharedNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteSharedNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteSharedNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteSharedNotebookRequest.displayName = 'proto.yartu.DeleteSharedNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteSharedNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteSharedNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteSharedNotebookResponse.displayName = 'proto.yartu.DeleteSharedNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSharedNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListSharedNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharedNotebookRequest.displayName = 'proto.yartu.ListSharedNotebookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSharedNotebookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListSharedNotebookResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListSharedNotebookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSharedNotebookResponse.displayName = 'proto.yartu.ListSharedNotebookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListNoteRequest.displayName = 'proto.yartu.ListNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListNoteResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListNoteResponse.displayName = 'proto.yartu.ListNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetNoteRequest.displayName = 'proto.yartu.GetNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetNoteResponse.displayName = 'proto.yartu.GetNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertNoteRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertNoteRequest.displayName = 'proto.yartu.UpsertNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertNoteResponse.displayName = 'proto.yartu.UpsertNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteNoteRequest.displayName = 'proto.yartu.DeleteNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteNoteResponse.displayName = 'proto.yartu.DeleteNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.RemindNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RemindNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RemindNoteRequest.displayName = 'proto.yartu.RemindNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.RemindNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.RemindNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.RemindNoteResponse.displayName = 'proto.yartu.RemindNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DuplicateNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DuplicateNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DuplicateNoteRequest.displayName = 'proto.yartu.DuplicateNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DuplicateNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DuplicateNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DuplicateNoteResponse.displayName = 'proto.yartu.DuplicateNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.PinNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.PinNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.PinNoteRequest.displayName = 'proto.yartu.PinNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.PinNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.PinNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.PinNoteResponse.displayName = 'proto.yartu.PinNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.StarNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.StarNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.StarNoteRequest.displayName = 'proto.yartu.StarNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.StarNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.StarNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.StarNoteResponse.displayName = 'proto.yartu.StarNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ArchiveNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ArchiveNoteRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.ArchiveNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ArchiveNoteRequest.displayName = 'proto.yartu.ArchiveNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ArchiveNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ArchiveNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ArchiveNoteResponse.displayName = 'proto.yartu.ArchiveNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.MoveNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.MoveNoteRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.MoveNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.MoveNoteRequest.displayName = 'proto.yartu.MoveNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.MoveNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.MoveNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.MoveNoteResponse.displayName = 'proto.yartu.MoveNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.CopyNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.CopyNoteRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.CopyNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CopyNoteRequest.displayName = 'proto.yartu.CopyNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.CopyNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CopyNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CopyNoteResponse.displayName = 'proto.yartu.CopyNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListNoteLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListNoteLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListNoteLabelRequest.displayName = 'proto.yartu.ListNoteLabelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListNoteLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListNoteLabelResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListNoteLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListNoteLabelResponse.displayName = 'proto.yartu.ListNoteLabelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertNoteLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertNoteLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertNoteLabelRequest.displayName = 'proto.yartu.UpsertNoteLabelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertNoteLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertNoteLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertNoteLabelResponse.displayName = 'proto.yartu.UpsertNoteLabelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertLabelToNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.UpsertLabelToNoteRequest.repeatedFields_, null);
};
goog.inherits(proto.yartu.UpsertLabelToNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertLabelToNoteRequest.displayName = 'proto.yartu.UpsertLabelToNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertLabelToNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertLabelToNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertLabelToNoteResponse.displayName = 'proto.yartu.UpsertLabelToNoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteNoteLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteNoteLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteNoteLabelRequest.displayName = 'proto.yartu.DeleteNoteLabelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteNoteLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteNoteLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteNoteLabelResponse.displayName = 'proto.yartu.DeleteNoteLabelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetTaskRequest.displayName = 'proto.yartu.GetTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.GetTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.GetTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.GetTaskResponse.displayName = 'proto.yartu.GetTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertTaskRequest.displayName = 'proto.yartu.UpsertTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.UpsertTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.UpsertTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.UpsertTaskResponse.displayName = 'proto.yartu.UpsertTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteTaskRequest.displayName = 'proto.yartu.DeleteTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.DeleteTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.DeleteTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.DeleteTaskResponse.displayName = 'proto.yartu.DeleteTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListTaskRequest.displayName = 'proto.yartu.ListTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListTaskResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListTaskResponse.displayName = 'proto.yartu.ListTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.CompleteTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CompleteTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CompleteTaskRequest.displayName = 'proto.yartu.CompleteTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.CompleteTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.CompleteTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.CompleteTaskResponse.displayName = 'proto.yartu.CompleteTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ConvertNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ConvertNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ConvertNoteRequest.displayName = 'proto.yartu.ConvertNoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ConvertNoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ConvertNoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ConvertNoteResponse.displayName = 'proto.yartu.ConvertNoteResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.NoteMetaQuery.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.NoteMetaQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.NoteMetaQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.NoteMetaQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.NoteMetaQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    noteType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filterType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isArchived: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isStarred: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isPinned: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isSharedWithMe: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isTaskCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    notebookList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.NoteMetaQuery}
 */
proto.yartu.NoteMetaQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.NoteMetaQuery;
  return proto.yartu.NoteMetaQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.NoteMetaQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.NoteMetaQuery}
 */
proto.yartu.NoteMetaQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLabelId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoteType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilterType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArchived(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStarred(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPinned(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSharedWithMe(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTaskCompleted(value);
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNotebook(values[i]);
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
proto.yartu.NoteMetaQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.NoteMetaQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.NoteMetaQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.NoteMetaQuery.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
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
  f = message.getNotebookList();
  if (f.length > 0) {
    writer.writePackedInt64(
      9,
      f
    );
  }
};


/**
 * optional int64 label_id = 1;
 * @return {number}
 */
proto.yartu.NoteMetaQuery.prototype.getLabelId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setLabelId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearLabelId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasLabelId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string note_type = 2;
 * @return {string}
 */
proto.yartu.NoteMetaQuery.prototype.getNoteType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setNoteType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearNoteType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasNoteType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string filter_type = 3;
 * @return {string}
 */
proto.yartu.NoteMetaQuery.prototype.getFilterType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setFilterType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearFilterType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasFilterType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_archived = 4;
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.getIsArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setIsArchived = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearIsArchived = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasIsArchived = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_starred = 5;
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.getIsStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setIsStarred = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearIsStarred = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasIsStarred = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_pinned = 6;
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.getIsPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setIsPinned = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearIsPinned = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasIsPinned = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_shared_with_me = 7;
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.getIsSharedWithMe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setIsSharedWithMe = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearIsSharedWithMe = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasIsSharedWithMe = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_task_completed = 8;
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.getIsTaskCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setIsTaskCompleted = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearIsTaskCompleted = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteMetaQuery.prototype.hasIsTaskCompleted = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated int64 notebook = 9;
 * @return {!Array<number>}
 */
proto.yartu.NoteMetaQuery.prototype.getNotebookList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.setNotebookList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.addNotebook = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.NoteMetaQuery} returns this
 */
proto.yartu.NoteMetaQuery.prototype.clearNotebookList = function() {
  return this.setNotebookList([]);
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
proto.yartu.NoteLabel.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.NoteLabel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.NoteLabel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.NoteLabel.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    color: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.NoteLabel}
 */
proto.yartu.NoteLabel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.NoteLabel;
  return proto.yartu.NoteLabel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.NoteLabel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.NoteLabel}
 */
proto.yartu.NoteLabel.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.NoteLabel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.NoteLabel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.NoteLabel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.NoteLabel.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.NoteLabel.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.NoteLabel} returns this
 */
proto.yartu.NoteLabel.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteLabel} returns this
 */
proto.yartu.NoteLabel.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteLabel.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.NoteLabel.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.NoteLabel} returns this
 */
proto.yartu.NoteLabel.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteLabel} returns this
 */
proto.yartu.NoteLabel.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteLabel.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string color = 3;
 * @return {string}
 */
proto.yartu.NoteLabel.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.NoteLabel} returns this
 */
proto.yartu.NoteLabel.prototype.setColor = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.NoteLabel} returns this
 */
proto.yartu.NoteLabel.prototype.clearColor = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteLabel.prototype.hasColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional User user = 4;
 * @return {?proto.User}
 */
proto.yartu.NoteLabel.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 4));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.NoteLabel} returns this
*/
proto.yartu.NoteLabel.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.NoteLabel} returns this
 */
proto.yartu.NoteLabel.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.NoteLabel.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.Notebook.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.Notebook.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Notebook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Notebook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Notebook.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    sharedCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    permissions: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isSharedWithMe: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    sharedList: jspb.Message.toObjectList(msg.getSharedList(),
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
 * @return {!proto.yartu.Notebook}
 */
proto.yartu.Notebook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Notebook;
  return proto.yartu.Notebook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Notebook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Notebook}
 */
proto.yartu.Notebook.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSharedCount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissions(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSharedWithMe(value);
      break;
    case 9:
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShared(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.Notebook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Notebook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Notebook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Notebook.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getSharedCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPermissions();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getSharedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.Notebook.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.Notebook.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional User user = 3;
 * @return {?proto.User}
 */
proto.yartu.Notebook.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.Notebook} returns this
*/
proto.yartu.Notebook.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Notebook.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 shared_count = 4;
 * @return {number}
 */
proto.yartu.Notebook.prototype.getSharedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.setSharedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string created_at = 5;
 * @return {string}
 */
proto.yartu.Notebook.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string updated_at = 6;
 * @return {string}
 */
proto.yartu.Notebook.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string permissions = 7;
 * @return {string}
 */
proto.yartu.Notebook.prototype.getPermissions = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.setPermissions = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool is_shared_with_me = 8;
 * @return {boolean}
 */
proto.yartu.Notebook.prototype.getIsSharedWithMe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.setIsSharedWithMe = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.clearIsSharedWithMe = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Notebook.prototype.hasIsSharedWithMe = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Shared shared = 9;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.Notebook.prototype.getSharedList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 9));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.Notebook} returns this
*/
proto.yartu.Notebook.prototype.setSharedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.Notebook.prototype.addShared = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Notebook} returns this
 */
proto.yartu.Notebook.prototype.clearSharedList = function() {
  return this.setSharedList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.Note.repeatedFields_ = [16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.Note.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Note.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Note} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Note.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    notebook: (f = msg.getNotebook()) && proto.yartu.Notebook.toObject(includeInstance, f),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    snippet: jspb.Message.getFieldWithDefault(msg, 6, ""),
    color: jspb.Message.getFieldWithDefault(msg, 7, ""),
    reminder: jspb.Message.getFieldWithDefault(msg, 8, ""),
    isPinned: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    isStarred: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    isArchived: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    noteType: jspb.Message.getFieldWithDefault(msg, 12, ""),
    modifiedBy: (f = msg.getModifiedBy()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    createdBy: (f = msg.getCreatedBy()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    conferenceSession: jspb.Message.getFieldWithDefault(msg, 15, 0),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    proto.yartu.NoteLabel.toObject, includeInstance),
    permissions: jspb.Message.getFieldWithDefault(msg, 17, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 18, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 19, ""),
    isSharedWithMe: jspb.Message.getBooleanFieldWithDefault(msg, 20, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.Note}
 */
proto.yartu.Note.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Note;
  return proto.yartu.Note.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Note} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Note}
 */
proto.yartu.Note.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Notebook;
      reader.readMessage(value,proto.yartu.Notebook.deserializeBinaryFromReader);
      msg.setNotebook(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnippet(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReminder(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPinned(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStarred(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArchived(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoteType(value);
      break;
    case 13:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setModifiedBy(value);
      break;
    case 14:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setCreatedBy(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConferenceSession(value);
      break;
    case 16:
      var value = new proto.yartu.NoteLabel;
      reader.readMessage(value,proto.yartu.NoteLabel.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissions(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSharedWithMe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.Note.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Note.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Note} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Note.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNotebook();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Notebook.serializeBinaryToWriter
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
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSnippet();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getReminder();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIsPinned();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIsStarred();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIsArchived();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getNoteType();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getModifiedBy();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.yartu.NoteLabel.serializeBinaryToWriter
    );
  }
  f = message.getPermissions();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getIsSharedWithMe();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.Note.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Notebook notebook = 2;
 * @return {?proto.yartu.Notebook}
 */
proto.yartu.Note.prototype.getNotebook = function() {
  return /** @type{?proto.yartu.Notebook} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Notebook, 2));
};


/**
 * @param {?proto.yartu.Notebook|undefined} value
 * @return {!proto.yartu.Note} returns this
*/
proto.yartu.Note.prototype.setNotebook = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.clearNotebook = function() {
  return this.setNotebook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Note.prototype.hasNotebook = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional User user = 3;
 * @return {?proto.User}
 */
proto.yartu.Note.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.Note} returns this
*/
proto.yartu.Note.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Note.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.yartu.Note.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.yartu.Note.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string snippet = 6;
 * @return {string}
 */
proto.yartu.Note.prototype.getSnippet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setSnippet = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string color = 7;
 * @return {string}
 */
proto.yartu.Note.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string reminder = 8;
 * @return {string}
 */
proto.yartu.Note.prototype.getReminder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setReminder = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool is_pinned = 9;
 * @return {boolean}
 */
proto.yartu.Note.prototype.getIsPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setIsPinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool is_starred = 10;
 * @return {boolean}
 */
proto.yartu.Note.prototype.getIsStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setIsStarred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool is_archived = 11;
 * @return {boolean}
 */
proto.yartu.Note.prototype.getIsArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setIsArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string note_type = 12;
 * @return {string}
 */
proto.yartu.Note.prototype.getNoteType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setNoteType = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional User modified_by = 13;
 * @return {?proto.User}
 */
proto.yartu.Note.prototype.getModifiedBy = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 13));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.Note} returns this
*/
proto.yartu.Note.prototype.setModifiedBy = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.clearModifiedBy = function() {
  return this.setModifiedBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Note.prototype.hasModifiedBy = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional User created_by = 14;
 * @return {?proto.User}
 */
proto.yartu.Note.prototype.getCreatedBy = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 14));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.Note} returns this
*/
proto.yartu.Note.prototype.setCreatedBy = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.clearCreatedBy = function() {
  return this.setCreatedBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Note.prototype.hasCreatedBy = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int64 conference_session = 15;
 * @return {number}
 */
proto.yartu.Note.prototype.getConferenceSession = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setConferenceSession = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.clearConferenceSession = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Note.prototype.hasConferenceSession = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated NoteLabel labels = 16;
 * @return {!Array<!proto.yartu.NoteLabel>}
 */
proto.yartu.Note.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.yartu.NoteLabel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.NoteLabel, 16));
};


/**
 * @param {!Array<!proto.yartu.NoteLabel>} value
 * @return {!proto.yartu.Note} returns this
*/
proto.yartu.Note.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.yartu.NoteLabel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.NoteLabel}
 */
proto.yartu.Note.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.yartu.NoteLabel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional string permissions = 17;
 * @return {string}
 */
proto.yartu.Note.prototype.getPermissions = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setPermissions = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string created_at = 18;
 * @return {string}
 */
proto.yartu.Note.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string updated_at = 19;
 * @return {string}
 */
proto.yartu.Note.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool is_shared_with_me = 20;
 * @return {boolean}
 */
proto.yartu.Note.prototype.getIsSharedWithMe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Note} returns this
 */
proto.yartu.Note.prototype.setIsSharedWithMe = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
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
proto.yartu.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    note: (f = msg.getNote()) && proto.yartu.Note.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    completedAt: jspb.Message.getFieldWithDefault(msg, 4, ""),
    completedBy: (f = msg.getCompletedBy()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    priority: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reminder: jspb.Message.getFieldWithDefault(msg, 7, ""),
    deadline: jspb.Message.getFieldWithDefault(msg, 8, ""),
    order: jspb.Message.getFieldWithDefault(msg, 9, 0),
    isComplete: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.Task}
 */
proto.yartu.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.Task;
  return proto.yartu.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.Task}
 */
proto.yartu.Task.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Note;
      reader.readMessage(value,proto.yartu.Note.deserializeBinaryFromReader);
      msg.setNote(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompletedAt(value);
      break;
    case 5:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setCompletedBy(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriority(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReminder(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeadline(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsComplete(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Note.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompletedAt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCompletedBy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getReminder();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDeadline();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getIsComplete();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.Task.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Note note = 2;
 * @return {?proto.yartu.Note}
 */
proto.yartu.Task.prototype.getNote = function() {
  return /** @type{?proto.yartu.Note} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Note, 2));
};


/**
 * @param {?proto.yartu.Note|undefined} value
 * @return {!proto.yartu.Task} returns this
*/
proto.yartu.Task.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Task.prototype.hasNote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.yartu.Task.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string completed_at = 4;
 * @return {string}
 */
proto.yartu.Task.prototype.getCompletedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setCompletedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional User completed_by = 5;
 * @return {?proto.User}
 */
proto.yartu.Task.prototype.getCompletedBy = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 5));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.Task} returns this
*/
proto.yartu.Task.prototype.setCompletedBy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.clearCompletedBy = function() {
  return this.setCompletedBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.Task.prototype.hasCompletedBy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 priority = 6;
 * @return {number}
 */
proto.yartu.Task.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string reminder = 7;
 * @return {string}
 */
proto.yartu.Task.prototype.getReminder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setReminder = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string deadline = 8;
 * @return {string}
 */
proto.yartu.Task.prototype.getDeadline = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setDeadline = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 order = 9;
 * @return {number}
 */
proto.yartu.Task.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool is_complete = 10;
 * @return {boolean}
 */
proto.yartu.Task.prototype.getIsComplete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.Task} returns this
 */
proto.yartu.Task.prototype.setIsComplete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.SharedNotebook.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SharedNotebook.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharedNotebook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharedNotebook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedNotebook.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    notebook: (f = msg.getNotebook()) && proto.yartu.Notebook.toObject(includeInstance, f),
    user: (f = msg.getUser()) && common_grpc_definitions_pb.User.toObject(includeInstance, f),
    group: (f = msg.getGroup()) && common_grpc_definitions_pb.Group.toObject(includeInstance, f),
    realm: (f = msg.getRealm()) && common_grpc_definitions_pb.Realm.toObject(includeInstance, f),
    excludeUsersList: jspb.Message.toObjectList(msg.getExcludeUsersList(),
    common_grpc_definitions_pb.User.toObject, includeInstance),
    permissions: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SharedNotebook}
 */
proto.yartu.SharedNotebook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharedNotebook;
  return proto.yartu.SharedNotebook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharedNotebook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharedNotebook}
 */
proto.yartu.SharedNotebook.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Notebook;
      reader.readMessage(value,proto.yartu.Notebook.deserializeBinaryFromReader);
      msg.setNotebook(value);
      break;
    case 3:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = new common_grpc_definitions_pb.Group;
      reader.readMessage(value,common_grpc_definitions_pb.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 5:
      var value = new common_grpc_definitions_pb.Realm;
      reader.readMessage(value,common_grpc_definitions_pb.Realm.deserializeBinaryFromReader);
      msg.setRealm(value);
      break;
    case 6:
      var value = new common_grpc_definitions_pb.User;
      reader.readMessage(value,common_grpc_definitions_pb.User.deserializeBinaryFromReader);
      msg.addExcludeUsers(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SharedNotebook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharedNotebook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharedNotebook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharedNotebook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNotebook();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Notebook.serializeBinaryToWriter
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
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_grpc_definitions_pb.Group.serializeBinaryToWriter
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
  f = message.getExcludeUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      common_grpc_definitions_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getPermissions();
  if (f.length > 0) {
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
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.SharedNotebook.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Notebook notebook = 2;
 * @return {?proto.yartu.Notebook}
 */
proto.yartu.SharedNotebook.prototype.getNotebook = function() {
  return /** @type{?proto.yartu.Notebook} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Notebook, 2));
};


/**
 * @param {?proto.yartu.Notebook|undefined} value
 * @return {!proto.yartu.SharedNotebook} returns this
*/
proto.yartu.SharedNotebook.prototype.setNotebook = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.clearNotebook = function() {
  return this.setNotebook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedNotebook.prototype.hasNotebook = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional User user = 3;
 * @return {?proto.User}
 */
proto.yartu.SharedNotebook.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.User, 3));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.yartu.SharedNotebook} returns this
*/
proto.yartu.SharedNotebook.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedNotebook.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Group group = 4;
 * @return {?proto.Group}
 */
proto.yartu.SharedNotebook.prototype.getGroup = function() {
  return /** @type{?proto.Group} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Group, 4));
};


/**
 * @param {?proto.Group|undefined} value
 * @return {!proto.yartu.SharedNotebook} returns this
*/
proto.yartu.SharedNotebook.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedNotebook.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Realm realm = 5;
 * @return {?proto.Realm}
 */
proto.yartu.SharedNotebook.prototype.getRealm = function() {
  return /** @type{?proto.Realm} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Realm, 5));
};


/**
 * @param {?proto.Realm|undefined} value
 * @return {!proto.yartu.SharedNotebook} returns this
*/
proto.yartu.SharedNotebook.prototype.setRealm = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.clearRealm = function() {
  return this.setRealm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedNotebook.prototype.hasRealm = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated User exclude_users = 6;
 * @return {!Array<!proto.User>}
 */
proto.yartu.SharedNotebook.prototype.getExcludeUsersList = function() {
  return /** @type{!Array<!proto.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.User, 6));
};


/**
 * @param {!Array<!proto.User>} value
 * @return {!proto.yartu.SharedNotebook} returns this
*/
proto.yartu.SharedNotebook.prototype.setExcludeUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.User}
 */
proto.yartu.SharedNotebook.prototype.addExcludeUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.clearExcludeUsersList = function() {
  return this.setExcludeUsersList([]);
};


/**
 * optional string permissions = 7;
 * @return {string}
 */
proto.yartu.SharedNotebook.prototype.getPermissions = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.setPermissions = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string created_at = 8;
 * @return {string}
 */
proto.yartu.SharedNotebook.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.setCreatedAt = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.clearCreatedAt = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedNotebook.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string updated_at = 9;
 * @return {string}
 */
proto.yartu.SharedNotebook.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharedNotebook} returns this
 */
proto.yartu.SharedNotebook.prototype.clearUpdatedAt = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharedNotebook.prototype.hasUpdatedAt = function() {
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
proto.yartu.GetNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNotebookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GetNotebookRequest}
 */
proto.yartu.GetNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetNotebookRequest;
  return proto.yartu.GetNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetNotebookRequest}
 */
proto.yartu.GetNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GetNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNotebookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.GetNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetNotebookRequest} returns this
 */
proto.yartu.GetNotebookRequest.prototype.setId = function(value) {
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
proto.yartu.GetNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNotebookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    notebook: (f = msg.getNotebook()) && proto.yartu.Notebook.toObject(includeInstance, f),
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
 * @return {!proto.yartu.GetNotebookResponse}
 */
proto.yartu.GetNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetNotebookResponse;
  return proto.yartu.GetNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetNotebookResponse}
 */
proto.yartu.GetNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Notebook;
      reader.readMessage(value,proto.yartu.Notebook.deserializeBinaryFromReader);
      msg.setNotebook(value);
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
proto.yartu.GetNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNotebookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNotebook();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Notebook.serializeBinaryToWriter
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
proto.yartu.GetNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetNotebookResponse} returns this
 */
proto.yartu.GetNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Notebook notebook = 2;
 * @return {?proto.yartu.Notebook}
 */
proto.yartu.GetNotebookResponse.prototype.getNotebook = function() {
  return /** @type{?proto.yartu.Notebook} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Notebook, 2));
};


/**
 * @param {?proto.yartu.Notebook|undefined} value
 * @return {!proto.yartu.GetNotebookResponse} returns this
*/
proto.yartu.GetNotebookResponse.prototype.setNotebook = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetNotebookResponse} returns this
 */
proto.yartu.GetNotebookResponse.prototype.clearNotebook = function() {
  return this.setNotebook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetNotebookResponse.prototype.hasNotebook = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetNotebookResponse} returns this
 */
proto.yartu.GetNotebookResponse.prototype.setMessage = function(value) {
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
proto.yartu.UpsertNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNotebookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertNotebookRequest}
 */
proto.yartu.UpsertNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertNotebookRequest;
  return proto.yartu.UpsertNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertNotebookRequest}
 */
proto.yartu.UpsertNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNotebookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNotebookRequest} returns this
 */
proto.yartu.UpsertNotebookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.UpsertNotebookRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNotebookRequest} returns this
 */
proto.yartu.UpsertNotebookRequest.prototype.setName = function(value) {
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
proto.yartu.UpsertNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNotebookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    notebook: (f = msg.getNotebook()) && proto.yartu.Notebook.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertNotebookResponse}
 */
proto.yartu.UpsertNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertNotebookResponse;
  return proto.yartu.UpsertNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertNotebookResponse}
 */
proto.yartu.UpsertNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Notebook;
      reader.readMessage(value,proto.yartu.Notebook.deserializeBinaryFromReader);
      msg.setNotebook(value);
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
proto.yartu.UpsertNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNotebookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNotebook();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Notebook.serializeBinaryToWriter
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
proto.yartu.UpsertNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNotebookResponse} returns this
 */
proto.yartu.UpsertNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Notebook notebook = 2;
 * @return {?proto.yartu.Notebook}
 */
proto.yartu.UpsertNotebookResponse.prototype.getNotebook = function() {
  return /** @type{?proto.yartu.Notebook} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Notebook, 2));
};


/**
 * @param {?proto.yartu.Notebook|undefined} value
 * @return {!proto.yartu.UpsertNotebookResponse} returns this
*/
proto.yartu.UpsertNotebookResponse.prototype.setNotebook = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertNotebookResponse} returns this
 */
proto.yartu.UpsertNotebookResponse.prototype.clearNotebook = function() {
  return this.setNotebook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertNotebookResponse.prototype.hasNotebook = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UpsertNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNotebookResponse} returns this
 */
proto.yartu.UpsertNotebookResponse.prototype.setMessage = function(value) {
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
proto.yartu.DeleteNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNotebookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteNotebookRequest}
 */
proto.yartu.DeleteNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteNotebookRequest;
  return proto.yartu.DeleteNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteNotebookRequest}
 */
proto.yartu.DeleteNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNotebookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteNotebookRequest} returns this
 */
proto.yartu.DeleteNotebookRequest.prototype.setId = function(value) {
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
proto.yartu.DeleteNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNotebookResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteNotebookResponse}
 */
proto.yartu.DeleteNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteNotebookResponse;
  return proto.yartu.DeleteNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteNotebookResponse}
 */
proto.yartu.DeleteNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNotebookResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteNotebookResponse} returns this
 */
proto.yartu.DeleteNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteNotebookResponse} returns this
 */
proto.yartu.DeleteNotebookResponse.prototype.setMessage = function(value) {
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
proto.yartu.ListNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNotebookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && common_grpc_definitions_pb.Query.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && proto.yartu.NoteMetaQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListNotebookRequest}
 */
proto.yartu.ListNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListNotebookRequest;
  return proto.yartu.ListNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListNotebookRequest}
 */
proto.yartu.ListNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.NoteMetaQuery;
      reader.readMessage(value,proto.yartu.NoteMetaQuery.deserializeBinaryFromReader);
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
proto.yartu.ListNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNotebookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_grpc_definitions_pb.Query.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.NoteMetaQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.Query}
 */
proto.yartu.ListNotebookRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 1));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListNotebookRequest} returns this
*/
proto.yartu.ListNotebookRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListNotebookRequest} returns this
 */
proto.yartu.ListNotebookRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNotebookRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NoteMetaQuery meta = 2;
 * @return {?proto.yartu.NoteMetaQuery}
 */
proto.yartu.ListNotebookRequest.prototype.getMeta = function() {
  return /** @type{?proto.yartu.NoteMetaQuery} */ (
    jspb.Message.getWrapperField(this, proto.yartu.NoteMetaQuery, 2));
};


/**
 * @param {?proto.yartu.NoteMetaQuery|undefined} value
 * @return {!proto.yartu.ListNotebookRequest} returns this
*/
proto.yartu.ListNotebookRequest.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListNotebookRequest} returns this
 */
proto.yartu.ListNotebookRequest.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNotebookRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListNotebookResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNotebookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Notebook.toObject, includeInstance),
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
 * @return {!proto.yartu.ListNotebookResponse}
 */
proto.yartu.ListNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListNotebookResponse;
  return proto.yartu.ListNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListNotebookResponse}
 */
proto.yartu.ListNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Notebook;
      reader.readMessage(value,proto.yartu.Notebook.deserializeBinaryFromReader);
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
proto.yartu.ListNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNotebookResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Notebook.serializeBinaryToWriter
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
proto.yartu.ListNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListNotebookResponse} returns this
 */
proto.yartu.ListNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Notebook data = 2;
 * @return {!Array<!proto.yartu.Notebook>}
 */
proto.yartu.ListNotebookResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Notebook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Notebook, 2));
};


/**
 * @param {!Array<!proto.yartu.Notebook>} value
 * @return {!proto.yartu.ListNotebookResponse} returns this
*/
proto.yartu.ListNotebookResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Notebook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Notebook}
 */
proto.yartu.ListNotebookResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Notebook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListNotebookResponse} returns this
 */
proto.yartu.ListNotebookResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListNotebookResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListNotebookResponse} returns this
*/
proto.yartu.ListNotebookResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListNotebookResponse} returns this
 */
proto.yartu.ListNotebookResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNotebookResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListNotebookResponse} returns this
 */
proto.yartu.ListNotebookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListNotebookResponse} returns this
 */
proto.yartu.ListNotebookResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNotebookResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ShareNotebookRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ShareNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ShareNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ShareNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareNotebookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sharedList: jspb.Message.toObjectList(msg.getSharedList(),
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
 * @return {!proto.yartu.ShareNotebookRequest}
 */
proto.yartu.ShareNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ShareNotebookRequest;
  return proto.yartu.ShareNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ShareNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ShareNotebookRequest}
 */
proto.yartu.ShareNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShared(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ShareNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ShareNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ShareNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareNotebookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSharedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.ShareNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ShareNotebookRequest} returns this
 */
proto.yartu.ShareNotebookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Shared shared = 2;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.ShareNotebookRequest.prototype.getSharedList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 2));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.ShareNotebookRequest} returns this
*/
proto.yartu.ShareNotebookRequest.prototype.setSharedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.ShareNotebookRequest.prototype.addShared = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ShareNotebookRequest} returns this
 */
proto.yartu.ShareNotebookRequest.prototype.clearSharedList = function() {
  return this.setSharedList([]);
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
proto.yartu.ShareNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ShareNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ShareNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareNotebookResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ShareNotebookResponse}
 */
proto.yartu.ShareNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ShareNotebookResponse;
  return proto.yartu.ShareNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ShareNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ShareNotebookResponse}
 */
proto.yartu.ShareNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ShareNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ShareNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ShareNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ShareNotebookResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ShareNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ShareNotebookResponse} returns this
 */
proto.yartu.ShareNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ShareNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ShareNotebookResponse} returns this
 */
proto.yartu.ShareNotebookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UnshareNotebookRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UnshareNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnshareNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnshareNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareNotebookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sharedList: jspb.Message.toObjectList(msg.getSharedList(),
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
 * @return {!proto.yartu.UnshareNotebookRequest}
 */
proto.yartu.UnshareNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnshareNotebookRequest;
  return proto.yartu.UnshareNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnshareNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnshareNotebookRequest}
 */
proto.yartu.UnshareNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
      msg.addShared(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UnshareNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnshareNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnshareNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareNotebookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSharedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UnshareNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UnshareNotebookRequest} returns this
 */
proto.yartu.UnshareNotebookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Shared shared = 2;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.UnshareNotebookRequest.prototype.getSharedList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 2));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.UnshareNotebookRequest} returns this
*/
proto.yartu.UnshareNotebookRequest.prototype.setSharedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.UnshareNotebookRequest.prototype.addShared = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UnshareNotebookRequest} returns this
 */
proto.yartu.UnshareNotebookRequest.prototype.clearSharedList = function() {
  return this.setSharedList([]);
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
proto.yartu.UnshareNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UnshareNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UnshareNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareNotebookResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UnshareNotebookResponse}
 */
proto.yartu.UnshareNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UnshareNotebookResponse;
  return proto.yartu.UnshareNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UnshareNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UnshareNotebookResponse}
 */
proto.yartu.UnshareNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UnshareNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UnshareNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UnshareNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UnshareNotebookResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UnshareNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UnshareNotebookResponse} returns this
 */
proto.yartu.UnshareNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UnshareNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UnshareNotebookResponse} returns this
 */
proto.yartu.UnshareNotebookResponse.prototype.setMessage = function(value) {
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
proto.yartu.UpsertSharedNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertSharedNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertSharedNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedNotebookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.yartu.UpsertSharedNotebookRequest}
 */
proto.yartu.UpsertSharedNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertSharedNotebookRequest;
  return proto.yartu.UpsertSharedNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertSharedNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertSharedNotebookRequest}
 */
proto.yartu.UpsertSharedNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertSharedNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertSharedNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertSharedNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedNotebookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertSharedNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertSharedNotebookRequest} returns this
 */
proto.yartu.UpsertSharedNotebookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.yartu.UpsertSharedNotebookRequest.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertSharedNotebookRequest} returns this
 */
proto.yartu.UpsertSharedNotebookRequest.prototype.setPermission = function(value) {
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
proto.yartu.UpsertSharedNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertSharedNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertSharedNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedNotebookResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertSharedNotebookResponse}
 */
proto.yartu.UpsertSharedNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertSharedNotebookResponse;
  return proto.yartu.UpsertSharedNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertSharedNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertSharedNotebookResponse}
 */
proto.yartu.UpsertSharedNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertSharedNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertSharedNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertSharedNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertSharedNotebookResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertSharedNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertSharedNotebookResponse} returns this
 */
proto.yartu.UpsertSharedNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertSharedNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertSharedNotebookResponse} returns this
 */
proto.yartu.UpsertSharedNotebookResponse.prototype.setMessage = function(value) {
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
proto.yartu.DeleteSharedNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteSharedNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteSharedNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedNotebookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sharedNotebookId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.DeleteSharedNotebookRequest}
 */
proto.yartu.DeleteSharedNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteSharedNotebookRequest;
  return proto.yartu.DeleteSharedNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteSharedNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteSharedNotebookRequest}
 */
proto.yartu.DeleteSharedNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSharedNotebookId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.DeleteSharedNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteSharedNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteSharedNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedNotebookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSharedNotebookId();
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
proto.yartu.DeleteSharedNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteSharedNotebookRequest} returns this
 */
proto.yartu.DeleteSharedNotebookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 shared_notebook_id = 2;
 * @return {number}
 */
proto.yartu.DeleteSharedNotebookRequest.prototype.getSharedNotebookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteSharedNotebookRequest} returns this
 */
proto.yartu.DeleteSharedNotebookRequest.prototype.setSharedNotebookId = function(value) {
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
proto.yartu.DeleteSharedNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteSharedNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteSharedNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedNotebookResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteSharedNotebookResponse}
 */
proto.yartu.DeleteSharedNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteSharedNotebookResponse;
  return proto.yartu.DeleteSharedNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteSharedNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteSharedNotebookResponse}
 */
proto.yartu.DeleteSharedNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteSharedNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteSharedNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteSharedNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteSharedNotebookResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteSharedNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteSharedNotebookResponse} returns this
 */
proto.yartu.DeleteSharedNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteSharedNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteSharedNotebookResponse} returns this
 */
proto.yartu.DeleteSharedNotebookResponse.prototype.setMessage = function(value) {
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
proto.yartu.ListSharedNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharedNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharedNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedNotebookRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListSharedNotebookRequest}
 */
proto.yartu.ListSharedNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharedNotebookRequest;
  return proto.yartu.ListSharedNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharedNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharedNotebookRequest}
 */
proto.yartu.ListSharedNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListSharedNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharedNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharedNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedNotebookRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ListSharedNotebookRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListSharedNotebookRequest} returns this
 */
proto.yartu.ListSharedNotebookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListSharedNotebookResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListSharedNotebookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSharedNotebookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSharedNotebookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedNotebookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
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
 * @return {!proto.yartu.ListSharedNotebookResponse}
 */
proto.yartu.ListSharedNotebookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSharedNotebookResponse;
  return proto.yartu.ListSharedNotebookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSharedNotebookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSharedNotebookResponse}
 */
proto.yartu.ListSharedNotebookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_grpc_definitions_pb.Shared;
      reader.readMessage(value,common_grpc_definitions_pb.Shared.deserializeBinaryFromReader);
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
proto.yartu.ListSharedNotebookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSharedNotebookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSharedNotebookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSharedNotebookResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_grpc_definitions_pb.Shared.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.yartu.ListSharedNotebookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListSharedNotebookResponse} returns this
 */
proto.yartu.ListSharedNotebookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ListSharedNotebookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListSharedNotebookResponse} returns this
 */
proto.yartu.ListSharedNotebookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Shared data = 3;
 * @return {!Array<!proto.Shared>}
 */
proto.yartu.ListSharedNotebookResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.Shared>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_grpc_definitions_pb.Shared, 3));
};


/**
 * @param {!Array<!proto.Shared>} value
 * @return {!proto.yartu.ListSharedNotebookResponse} returns this
*/
proto.yartu.ListSharedNotebookResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Shared=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Shared}
 */
proto.yartu.ListSharedNotebookResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Shared, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListSharedNotebookResponse} returns this
 */
proto.yartu.ListSharedNotebookResponse.prototype.clearDataList = function() {
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
proto.yartu.ListNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    notebookId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    query: (f = msg.getQuery()) && common_grpc_definitions_pb.Query.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && proto.yartu.NoteMetaQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListNoteRequest}
 */
proto.yartu.ListNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListNoteRequest;
  return proto.yartu.ListNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListNoteRequest}
 */
proto.yartu.ListNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNotebookId(value);
      break;
    case 2:
      var value = new common_grpc_definitions_pb.Query;
      reader.readMessage(value,common_grpc_definitions_pb.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 3:
      var value = new proto.yartu.NoteMetaQuery;
      reader.readMessage(value,proto.yartu.NoteMetaQuery.deserializeBinaryFromReader);
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
proto.yartu.ListNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.NoteMetaQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 notebook_id = 1;
 * @return {number}
 */
proto.yartu.ListNoteRequest.prototype.getNotebookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListNoteRequest} returns this
 */
proto.yartu.ListNoteRequest.prototype.setNotebookId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListNoteRequest} returns this
 */
proto.yartu.ListNoteRequest.prototype.clearNotebookId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNoteRequest.prototype.hasNotebookId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Query query = 2;
 * @return {?proto.Query}
 */
proto.yartu.ListNoteRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 2));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListNoteRequest} returns this
*/
proto.yartu.ListNoteRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListNoteRequest} returns this
 */
proto.yartu.ListNoteRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNoteRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NoteMetaQuery meta = 3;
 * @return {?proto.yartu.NoteMetaQuery}
 */
proto.yartu.ListNoteRequest.prototype.getMeta = function() {
  return /** @type{?proto.yartu.NoteMetaQuery} */ (
    jspb.Message.getWrapperField(this, proto.yartu.NoteMetaQuery, 3));
};


/**
 * @param {?proto.yartu.NoteMetaQuery|undefined} value
 * @return {!proto.yartu.ListNoteRequest} returns this
*/
proto.yartu.ListNoteRequest.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListNoteRequest} returns this
 */
proto.yartu.ListNoteRequest.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNoteRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListNoteResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Note.toObject, includeInstance),
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
 * @return {!proto.yartu.ListNoteResponse}
 */
proto.yartu.ListNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListNoteResponse;
  return proto.yartu.ListNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListNoteResponse}
 */
proto.yartu.ListNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Note;
      reader.readMessage(value,proto.yartu.Note.deserializeBinaryFromReader);
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
proto.yartu.ListNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Note.serializeBinaryToWriter
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
proto.yartu.ListNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListNoteResponse} returns this
 */
proto.yartu.ListNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Note data = 2;
 * @return {!Array<!proto.yartu.Note>}
 */
proto.yartu.ListNoteResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Note>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Note, 2));
};


/**
 * @param {!Array<!proto.yartu.Note>} value
 * @return {!proto.yartu.ListNoteResponse} returns this
*/
proto.yartu.ListNoteResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Note=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Note}
 */
proto.yartu.ListNoteResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Note, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListNoteResponse} returns this
 */
proto.yartu.ListNoteResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional PaginationMeta pagination = 3;
 * @return {?proto.PaginationMeta}
 */
proto.yartu.ListNoteResponse.prototype.getPagination = function() {
  return /** @type{?proto.PaginationMeta} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.PaginationMeta, 3));
};


/**
 * @param {?proto.PaginationMeta|undefined} value
 * @return {!proto.yartu.ListNoteResponse} returns this
*/
proto.yartu.ListNoteResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListNoteResponse} returns this
 */
proto.yartu.ListNoteResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNoteResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.yartu.ListNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListNoteResponse} returns this
 */
proto.yartu.ListNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.GetNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    conferenceSessionId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.GetNoteRequest}
 */
proto.yartu.GetNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetNoteRequest;
  return proto.yartu.GetNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetNoteRequest}
 */
proto.yartu.GetNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setConferenceSessionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.GetNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
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
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.GetNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetNoteRequest} returns this
 */
proto.yartu.GetNoteRequest.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetNoteRequest} returns this
 */
proto.yartu.GetNoteRequest.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetNoteRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 conference_session_id = 2;
 * @return {number}
 */
proto.yartu.GetNoteRequest.prototype.getConferenceSessionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetNoteRequest} returns this
 */
proto.yartu.GetNoteRequest.prototype.setConferenceSessionId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetNoteRequest} returns this
 */
proto.yartu.GetNoteRequest.prototype.clearConferenceSessionId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetNoteRequest.prototype.hasConferenceSessionId = function() {
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
proto.yartu.GetNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && proto.yartu.Note.toObject(includeInstance, f),
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
 * @return {!proto.yartu.GetNoteResponse}
 */
proto.yartu.GetNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetNoteResponse;
  return proto.yartu.GetNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetNoteResponse}
 */
proto.yartu.GetNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Note;
      reader.readMessage(value,proto.yartu.Note.deserializeBinaryFromReader);
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
proto.yartu.GetNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Note.serializeBinaryToWriter
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
proto.yartu.GetNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetNoteResponse} returns this
 */
proto.yartu.GetNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Note data = 2;
 * @return {?proto.yartu.Note}
 */
proto.yartu.GetNoteResponse.prototype.getData = function() {
  return /** @type{?proto.yartu.Note} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Note, 2));
};


/**
 * @param {?proto.yartu.Note|undefined} value
 * @return {!proto.yartu.GetNoteResponse} returns this
*/
proto.yartu.GetNoteResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetNoteResponse} returns this
 */
proto.yartu.GetNoteResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetNoteResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetNoteResponse} returns this
 */
proto.yartu.GetNoteResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertNoteRequest.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    notebookId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    color: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelList: jspb.Message.toObjectList(msg.getLabelList(),
    proto.yartu.NoteLabel.toObject, includeInstance),
    reminder: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isPinned: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isStarred: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    isArchived: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    noteType: jspb.Message.getFieldWithDefault(msg, 11, ""),
    conferenceSessionId: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertNoteRequest}
 */
proto.yartu.UpsertNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertNoteRequest;
  return proto.yartu.UpsertNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertNoteRequest}
 */
proto.yartu.UpsertNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNotebookId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 6:
      var value = new proto.yartu.NoteLabel;
      reader.readMessage(value,proto.yartu.NoteLabel.deserializeBinaryFromReader);
      msg.addLabel(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReminder(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPinned(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStarred(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArchived(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoteType(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConferenceSessionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNotebookId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLabelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.yartu.NoteLabel.serializeBinaryToWriter
    );
  }
  f = message.getReminder();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsPinned();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsStarred();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIsArchived();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getNoteType();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getConferenceSessionId();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 notebook_id = 2;
 * @return {number}
 */
proto.yartu.UpsertNoteRequest.prototype.getNotebookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setNotebookId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.yartu.UpsertNoteRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.yartu.UpsertNoteRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string color = 5;
 * @return {string}
 */
proto.yartu.UpsertNoteRequest.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated NoteLabel label = 6;
 * @return {!Array<!proto.yartu.NoteLabel>}
 */
proto.yartu.UpsertNoteRequest.prototype.getLabelList = function() {
  return /** @type{!Array<!proto.yartu.NoteLabel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.NoteLabel, 6));
};


/**
 * @param {!Array<!proto.yartu.NoteLabel>} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
*/
proto.yartu.UpsertNoteRequest.prototype.setLabelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.yartu.NoteLabel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.NoteLabel}
 */
proto.yartu.UpsertNoteRequest.prototype.addLabel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.yartu.NoteLabel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.clearLabelList = function() {
  return this.setLabelList([]);
};


/**
 * optional string reminder = 7;
 * @return {string}
 */
proto.yartu.UpsertNoteRequest.prototype.getReminder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setReminder = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool is_pinned = 8;
 * @return {boolean}
 */
proto.yartu.UpsertNoteRequest.prototype.getIsPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setIsPinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool is_starred = 9;
 * @return {boolean}
 */
proto.yartu.UpsertNoteRequest.prototype.getIsStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setIsStarred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool is_archived = 10;
 * @return {boolean}
 */
proto.yartu.UpsertNoteRequest.prototype.getIsArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setIsArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string note_type = 11;
 * @return {string}
 */
proto.yartu.UpsertNoteRequest.prototype.getNoteType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setNoteType = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 conference_session_id = 12;
 * @return {number}
 */
proto.yartu.UpsertNoteRequest.prototype.getConferenceSessionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNoteRequest} returns this
 */
proto.yartu.UpsertNoteRequest.prototype.setConferenceSessionId = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
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
proto.yartu.UpsertNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    note: (f = msg.getNote()) && proto.yartu.Note.toObject(includeInstance, f),
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
 * @return {!proto.yartu.UpsertNoteResponse}
 */
proto.yartu.UpsertNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertNoteResponse;
  return proto.yartu.UpsertNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertNoteResponse}
 */
proto.yartu.UpsertNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Note;
      reader.readMessage(value,proto.yartu.Note.deserializeBinaryFromReader);
      msg.setNote(value);
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
proto.yartu.UpsertNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Note.serializeBinaryToWriter
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
proto.yartu.UpsertNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNoteResponse} returns this
 */
proto.yartu.UpsertNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Note note = 2;
 * @return {?proto.yartu.Note}
 */
proto.yartu.UpsertNoteResponse.prototype.getNote = function() {
  return /** @type{?proto.yartu.Note} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Note, 2));
};


/**
 * @param {?proto.yartu.Note|undefined} value
 * @return {!proto.yartu.UpsertNoteResponse} returns this
*/
proto.yartu.UpsertNoteResponse.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.UpsertNoteResponse} returns this
 */
proto.yartu.UpsertNoteResponse.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertNoteResponse.prototype.hasNote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.UpsertNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteResponse} returns this
 */
proto.yartu.UpsertNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.DeleteNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteNoteRequest}
 */
proto.yartu.DeleteNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteNoteRequest;
  return proto.yartu.DeleteNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteNoteRequest}
 */
proto.yartu.DeleteNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteNoteRequest} returns this
 */
proto.yartu.DeleteNoteRequest.prototype.setId = function(value) {
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
proto.yartu.DeleteNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteNoteResponse}
 */
proto.yartu.DeleteNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteNoteResponse;
  return proto.yartu.DeleteNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteNoteResponse}
 */
proto.yartu.DeleteNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteNoteResponse} returns this
 */
proto.yartu.DeleteNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteNoteResponse} returns this
 */
proto.yartu.DeleteNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.RemindNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RemindNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RemindNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RemindNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    date: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.RemindNoteRequest}
 */
proto.yartu.RemindNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RemindNoteRequest;
  return proto.yartu.RemindNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RemindNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RemindNoteRequest}
 */
proto.yartu.RemindNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.RemindNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RemindNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RemindNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RemindNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDate();
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
proto.yartu.RemindNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RemindNoteRequest} returns this
 */
proto.yartu.RemindNoteRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string date = 2;
 * @return {string}
 */
proto.yartu.RemindNoteRequest.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RemindNoteRequest} returns this
 */
proto.yartu.RemindNoteRequest.prototype.setDate = function(value) {
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
proto.yartu.RemindNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.RemindNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.RemindNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RemindNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.RemindNoteResponse}
 */
proto.yartu.RemindNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.RemindNoteResponse;
  return proto.yartu.RemindNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.RemindNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.RemindNoteResponse}
 */
proto.yartu.RemindNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.RemindNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.RemindNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.RemindNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.RemindNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.RemindNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.RemindNoteResponse} returns this
 */
proto.yartu.RemindNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.RemindNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.RemindNoteResponse} returns this
 */
proto.yartu.RemindNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.DuplicateNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DuplicateNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DuplicateNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateNoteRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DuplicateNoteRequest}
 */
proto.yartu.DuplicateNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DuplicateNoteRequest;
  return proto.yartu.DuplicateNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DuplicateNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DuplicateNoteRequest}
 */
proto.yartu.DuplicateNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DuplicateNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DuplicateNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DuplicateNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateNoteRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DuplicateNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DuplicateNoteRequest} returns this
 */
proto.yartu.DuplicateNoteRequest.prototype.setId = function(value) {
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
proto.yartu.DuplicateNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DuplicateNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DuplicateNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DuplicateNoteResponse}
 */
proto.yartu.DuplicateNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DuplicateNoteResponse;
  return proto.yartu.DuplicateNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DuplicateNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DuplicateNoteResponse}
 */
proto.yartu.DuplicateNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DuplicateNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DuplicateNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DuplicateNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DuplicateNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DuplicateNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DuplicateNoteResponse} returns this
 */
proto.yartu.DuplicateNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DuplicateNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DuplicateNoteResponse} returns this
 */
proto.yartu.DuplicateNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.PinNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.PinNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.PinNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PinNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pinned: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.PinNoteRequest}
 */
proto.yartu.PinNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.PinNoteRequest;
  return proto.yartu.PinNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.PinNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.PinNoteRequest}
 */
proto.yartu.PinNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPinned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.PinNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.PinNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.PinNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PinNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPinned();
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
proto.yartu.PinNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PinNoteRequest} returns this
 */
proto.yartu.PinNoteRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool pinned = 2;
 * @return {boolean}
 */
proto.yartu.PinNoteRequest.prototype.getPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.PinNoteRequest} returns this
 */
proto.yartu.PinNoteRequest.prototype.setPinned = function(value) {
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
proto.yartu.PinNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.PinNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.PinNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PinNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.PinNoteResponse}
 */
proto.yartu.PinNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.PinNoteResponse;
  return proto.yartu.PinNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.PinNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.PinNoteResponse}
 */
proto.yartu.PinNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.PinNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.PinNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.PinNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.PinNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.PinNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.PinNoteResponse} returns this
 */
proto.yartu.PinNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.PinNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.PinNoteResponse} returns this
 */
proto.yartu.PinNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.StarNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.StarNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.StarNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isStarred: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.StarNoteRequest}
 */
proto.yartu.StarNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.StarNoteRequest;
  return proto.yartu.StarNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.StarNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.StarNoteRequest}
 */
proto.yartu.StarNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setIsStarred(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.StarNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.StarNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.StarNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsStarred();
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
proto.yartu.StarNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.StarNoteRequest} returns this
 */
proto.yartu.StarNoteRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_starred = 2;
 * @return {boolean}
 */
proto.yartu.StarNoteRequest.prototype.getIsStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.StarNoteRequest} returns this
 */
proto.yartu.StarNoteRequest.prototype.setIsStarred = function(value) {
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
proto.yartu.StarNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.StarNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.StarNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.StarNoteResponse}
 */
proto.yartu.StarNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.StarNoteResponse;
  return proto.yartu.StarNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.StarNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.StarNoteResponse}
 */
proto.yartu.StarNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.StarNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.StarNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.StarNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.StarNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.StarNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.StarNoteResponse} returns this
 */
proto.yartu.StarNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.StarNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.StarNoteResponse} returns this
 */
proto.yartu.StarNoteResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ArchiveNoteRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ArchiveNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ArchiveNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ArchiveNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ArchiveNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    isArchived: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ArchiveNoteRequest}
 */
proto.yartu.ArchiveNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ArchiveNoteRequest;
  return proto.yartu.ArchiveNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ArchiveNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ArchiveNoteRequest}
 */
proto.yartu.ArchiveNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNoteId(values[i]);
      }
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArchived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ArchiveNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ArchiveNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ArchiveNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ArchiveNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteIdList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getIsArchived();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated int64 note_id = 1;
 * @return {!Array<number>}
 */
proto.yartu.ArchiveNoteRequest.prototype.getNoteIdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.ArchiveNoteRequest} returns this
 */
proto.yartu.ArchiveNoteRequest.prototype.setNoteIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.ArchiveNoteRequest} returns this
 */
proto.yartu.ArchiveNoteRequest.prototype.addNoteId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ArchiveNoteRequest} returns this
 */
proto.yartu.ArchiveNoteRequest.prototype.clearNoteIdList = function() {
  return this.setNoteIdList([]);
};


/**
 * optional bool is_archived = 2;
 * @return {boolean}
 */
proto.yartu.ArchiveNoteRequest.prototype.getIsArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.ArchiveNoteRequest} returns this
 */
proto.yartu.ArchiveNoteRequest.prototype.setIsArchived = function(value) {
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
proto.yartu.ArchiveNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ArchiveNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ArchiveNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ArchiveNoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messages: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ArchiveNoteResponse}
 */
proto.yartu.ArchiveNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ArchiveNoteResponse;
  return proto.yartu.ArchiveNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ArchiveNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ArchiveNoteResponse}
 */
proto.yartu.ArchiveNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.ArchiveNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ArchiveNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ArchiveNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ArchiveNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ArchiveNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ArchiveNoteResponse} returns this
 */
proto.yartu.ArchiveNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ArchiveNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ArchiveNoteResponse} returns this
 */
proto.yartu.ArchiveNoteResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string messages = 3;
 * @return {string}
 */
proto.yartu.ArchiveNoteResponse.prototype.getMessages = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ArchiveNoteResponse} returns this
 */
proto.yartu.ArchiveNoteResponse.prototype.setMessages = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ArchiveNoteResponse} returns this
 */
proto.yartu.ArchiveNoteResponse.prototype.clearMessages = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ArchiveNoteResponse.prototype.hasMessages = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.MoveNoteRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.MoveNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.MoveNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.MoveNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.MoveNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    targetNotebookId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.MoveNoteRequest}
 */
proto.yartu.MoveNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.MoveNoteRequest;
  return proto.yartu.MoveNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.MoveNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.MoveNoteRequest}
 */
proto.yartu.MoveNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNoteIds(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetNotebookId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.MoveNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.MoveNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.MoveNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.MoveNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getTargetNotebookId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 note_ids = 1;
 * @return {!Array<number>}
 */
proto.yartu.MoveNoteRequest.prototype.getNoteIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.MoveNoteRequest} returns this
 */
proto.yartu.MoveNoteRequest.prototype.setNoteIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.MoveNoteRequest} returns this
 */
proto.yartu.MoveNoteRequest.prototype.addNoteIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.MoveNoteRequest} returns this
 */
proto.yartu.MoveNoteRequest.prototype.clearNoteIdsList = function() {
  return this.setNoteIdsList([]);
};


/**
 * optional int64 target_notebook_id = 2;
 * @return {number}
 */
proto.yartu.MoveNoteRequest.prototype.getTargetNotebookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.MoveNoteRequest} returns this
 */
proto.yartu.MoveNoteRequest.prototype.setTargetNotebookId = function(value) {
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
proto.yartu.MoveNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.MoveNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.MoveNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.MoveNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.MoveNoteResponse}
 */
proto.yartu.MoveNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.MoveNoteResponse;
  return proto.yartu.MoveNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.MoveNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.MoveNoteResponse}
 */
proto.yartu.MoveNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.MoveNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.MoveNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.MoveNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.MoveNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.MoveNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.MoveNoteResponse} returns this
 */
proto.yartu.MoveNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.MoveNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.MoveNoteResponse} returns this
 */
proto.yartu.MoveNoteResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.CopyNoteRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.CopyNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CopyNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CopyNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CopyNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    targetNotebookId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.CopyNoteRequest}
 */
proto.yartu.CopyNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CopyNoteRequest;
  return proto.yartu.CopyNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CopyNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CopyNoteRequest}
 */
proto.yartu.CopyNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNoteIds(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetNotebookId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.CopyNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CopyNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CopyNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CopyNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getTargetNotebookId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 note_ids = 1;
 * @return {!Array<number>}
 */
proto.yartu.CopyNoteRequest.prototype.getNoteIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yartu.CopyNoteRequest} returns this
 */
proto.yartu.CopyNoteRequest.prototype.setNoteIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yartu.CopyNoteRequest} returns this
 */
proto.yartu.CopyNoteRequest.prototype.addNoteIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.CopyNoteRequest} returns this
 */
proto.yartu.CopyNoteRequest.prototype.clearNoteIdsList = function() {
  return this.setNoteIdsList([]);
};


/**
 * optional int64 target_notebook_id = 2;
 * @return {number}
 */
proto.yartu.CopyNoteRequest.prototype.getTargetNotebookId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CopyNoteRequest} returns this
 */
proto.yartu.CopyNoteRequest.prototype.setTargetNotebookId = function(value) {
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
proto.yartu.CopyNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CopyNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CopyNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CopyNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.CopyNoteResponse}
 */
proto.yartu.CopyNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CopyNoteResponse;
  return proto.yartu.CopyNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CopyNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CopyNoteResponse}
 */
proto.yartu.CopyNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.CopyNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CopyNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CopyNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CopyNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.CopyNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CopyNoteResponse} returns this
 */
proto.yartu.CopyNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.CopyNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CopyNoteResponse} returns this
 */
proto.yartu.CopyNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.ListNoteLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListNoteLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListNoteLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteLabelRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListNoteLabelRequest}
 */
proto.yartu.ListNoteLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListNoteLabelRequest;
  return proto.yartu.ListNoteLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListNoteLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListNoteLabelRequest}
 */
proto.yartu.ListNoteLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListNoteLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListNoteLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListNoteLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListNoteLabelResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListNoteLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListNoteLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListNoteLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.NoteLabel.toObject, includeInstance),
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
 * @return {!proto.yartu.ListNoteLabelResponse}
 */
proto.yartu.ListNoteLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListNoteLabelResponse;
  return proto.yartu.ListNoteLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListNoteLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListNoteLabelResponse}
 */
proto.yartu.ListNoteLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.NoteLabel;
      reader.readMessage(value,proto.yartu.NoteLabel.deserializeBinaryFromReader);
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
proto.yartu.ListNoteLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListNoteLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListNoteLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListNoteLabelResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.NoteLabel.serializeBinaryToWriter
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
proto.yartu.ListNoteLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListNoteLabelResponse} returns this
 */
proto.yartu.ListNoteLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated NoteLabel data = 2;
 * @return {!Array<!proto.yartu.NoteLabel>}
 */
proto.yartu.ListNoteLabelResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.NoteLabel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.NoteLabel, 2));
};


/**
 * @param {!Array<!proto.yartu.NoteLabel>} value
 * @return {!proto.yartu.ListNoteLabelResponse} returns this
*/
proto.yartu.ListNoteLabelResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.NoteLabel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.NoteLabel}
 */
proto.yartu.ListNoteLabelResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.NoteLabel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListNoteLabelResponse} returns this
 */
proto.yartu.ListNoteLabelResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListNoteLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListNoteLabelResponse} returns this
 */
proto.yartu.ListNoteLabelResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListNoteLabelResponse} returns this
 */
proto.yartu.ListNoteLabelResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListNoteLabelResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertNoteLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertNoteLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertNoteLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    color: jspb.Message.getFieldWithDefault(msg, 3, ""),
    noteId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertNoteLabelRequest}
 */
proto.yartu.UpsertNoteLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertNoteLabelRequest;
  return proto.yartu.UpsertNoteLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertNoteLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertNoteLabelRequest}
 */
proto.yartu.UpsertNoteLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNoteId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertNoteLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertNoteLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertNoteLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteLabelRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertNoteLabelRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNoteLabelRequest} returns this
 */
proto.yartu.UpsertNoteLabelRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yartu.UpsertNoteLabelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteLabelRequest} returns this
 */
proto.yartu.UpsertNoteLabelRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string color = 3;
 * @return {string}
 */
proto.yartu.UpsertNoteLabelRequest.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteLabelRequest} returns this
 */
proto.yartu.UpsertNoteLabelRequest.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 note_id = 4;
 * @return {number}
 */
proto.yartu.UpsertNoteLabelRequest.prototype.getNoteId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNoteLabelRequest} returns this
 */
proto.yartu.UpsertNoteLabelRequest.prototype.setNoteId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.UpsertNoteLabelRequest} returns this
 */
proto.yartu.UpsertNoteLabelRequest.prototype.clearNoteId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.UpsertNoteLabelRequest.prototype.hasNoteId = function() {
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
proto.yartu.UpsertNoteLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertNoteLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertNoteLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteLabelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertNoteLabelResponse}
 */
proto.yartu.UpsertNoteLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertNoteLabelResponse;
  return proto.yartu.UpsertNoteLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertNoteLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertNoteLabelResponse}
 */
proto.yartu.UpsertNoteLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertNoteLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertNoteLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertNoteLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertNoteLabelResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertNoteLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertNoteLabelResponse} returns this
 */
proto.yartu.UpsertNoteLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertNoteLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertNoteLabelResponse} returns this
 */
proto.yartu.UpsertNoteLabelResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.UpsertLabelToNoteRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.UpsertLabelToNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertLabelToNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertLabelToNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelToNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    proto.yartu.NoteLabel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertLabelToNoteRequest}
 */
proto.yartu.UpsertLabelToNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertLabelToNoteRequest;
  return proto.yartu.UpsertLabelToNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertLabelToNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertLabelToNoteRequest}
 */
proto.yartu.UpsertLabelToNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNoteId(value);
      break;
    case 2:
      var value = new proto.yartu.NoteLabel;
      reader.readMessage(value,proto.yartu.NoteLabel.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertLabelToNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertLabelToNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertLabelToNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelToNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.NoteLabel.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 note_id = 1;
 * @return {number}
 */
proto.yartu.UpsertLabelToNoteRequest.prototype.getNoteId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertLabelToNoteRequest} returns this
 */
proto.yartu.UpsertLabelToNoteRequest.prototype.setNoteId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated NoteLabel labels = 2;
 * @return {!Array<!proto.yartu.NoteLabel>}
 */
proto.yartu.UpsertLabelToNoteRequest.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.yartu.NoteLabel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.NoteLabel, 2));
};


/**
 * @param {!Array<!proto.yartu.NoteLabel>} value
 * @return {!proto.yartu.UpsertLabelToNoteRequest} returns this
*/
proto.yartu.UpsertLabelToNoteRequest.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.NoteLabel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.NoteLabel}
 */
proto.yartu.UpsertLabelToNoteRequest.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.NoteLabel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.UpsertLabelToNoteRequest} returns this
 */
proto.yartu.UpsertLabelToNoteRequest.prototype.clearLabelsList = function() {
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
proto.yartu.UpsertLabelToNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertLabelToNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertLabelToNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelToNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertLabelToNoteResponse}
 */
proto.yartu.UpsertLabelToNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertLabelToNoteResponse;
  return proto.yartu.UpsertLabelToNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertLabelToNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertLabelToNoteResponse}
 */
proto.yartu.UpsertLabelToNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertLabelToNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertLabelToNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertLabelToNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertLabelToNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertLabelToNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertLabelToNoteResponse} returns this
 */
proto.yartu.UpsertLabelToNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertLabelToNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertLabelToNoteResponse} returns this
 */
proto.yartu.UpsertLabelToNoteResponse.prototype.setMessage = function(value) {
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
proto.yartu.DeleteNoteLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteNoteLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteNoteLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteLabelRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteNoteLabelRequest}
 */
proto.yartu.DeleteNoteLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteNoteLabelRequest;
  return proto.yartu.DeleteNoteLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteNoteLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteNoteLabelRequest}
 */
proto.yartu.DeleteNoteLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteNoteLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteNoteLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteNoteLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteLabelRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteNoteLabelRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteNoteLabelRequest} returns this
 */
proto.yartu.DeleteNoteLabelRequest.prototype.setId = function(value) {
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
proto.yartu.DeleteNoteLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteNoteLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteNoteLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteLabelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteNoteLabelResponse}
 */
proto.yartu.DeleteNoteLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteNoteLabelResponse;
  return proto.yartu.DeleteNoteLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteNoteLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteNoteLabelResponse}
 */
proto.yartu.DeleteNoteLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteNoteLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteNoteLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteNoteLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteNoteLabelResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteNoteLabelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteNoteLabelResponse} returns this
 */
proto.yartu.DeleteNoteLabelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteNoteLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteNoteLabelResponse} returns this
 */
proto.yartu.DeleteNoteLabelResponse.prototype.setMessage = function(value) {
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
proto.yartu.GetTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetTaskRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.GetTaskRequest}
 */
proto.yartu.GetTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetTaskRequest;
  return proto.yartu.GetTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetTaskRequest}
 */
proto.yartu.GetTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.GetTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetTaskRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.GetTaskRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetTaskRequest} returns this
 */
proto.yartu.GetTaskRequest.prototype.setId = function(value) {
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
proto.yartu.GetTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.GetTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.GetTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetTaskResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    task: (f = msg.getTask()) && proto.yartu.Task.toObject(includeInstance, f),
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
 * @return {!proto.yartu.GetTaskResponse}
 */
proto.yartu.GetTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.GetTaskResponse;
  return proto.yartu.GetTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.GetTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.GetTaskResponse}
 */
proto.yartu.GetTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Task;
      reader.readMessage(value,proto.yartu.Task.deserializeBinaryFromReader);
      msg.setTask(value);
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
proto.yartu.GetTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.GetTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.GetTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.GetTaskResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yartu.Task.serializeBinaryToWriter
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
proto.yartu.GetTaskResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.GetTaskResponse} returns this
 */
proto.yartu.GetTaskResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Task task = 2;
 * @return {?proto.yartu.Task}
 */
proto.yartu.GetTaskResponse.prototype.getTask = function() {
  return /** @type{?proto.yartu.Task} */ (
    jspb.Message.getWrapperField(this, proto.yartu.Task, 2));
};


/**
 * @param {?proto.yartu.Task|undefined} value
 * @return {!proto.yartu.GetTaskResponse} returns this
*/
proto.yartu.GetTaskResponse.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.GetTaskResponse} returns this
 */
proto.yartu.GetTaskResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetTaskResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.GetTaskResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.GetTaskResponse} returns this
 */
proto.yartu.GetTaskResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.GetTaskResponse} returns this
 */
proto.yartu.GetTaskResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.GetTaskResponse.prototype.hasMessage = function() {
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
proto.yartu.UpsertTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    noteId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    completedAt: jspb.Message.getFieldWithDefault(msg, 4, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 5, 0),
    reminder: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deadline: jspb.Message.getFieldWithDefault(msg, 7, ""),
    order: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isComplete: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.UpsertTaskRequest}
 */
proto.yartu.UpsertTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertTaskRequest;
  return proto.yartu.UpsertTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertTaskRequest}
 */
proto.yartu.UpsertTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNoteId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompletedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriority(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReminder(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeadline(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsComplete(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.UpsertTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNoteId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompletedAt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getReminder();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDeadline();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getIsComplete();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yartu.UpsertTaskRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 note_id = 2;
 * @return {number}
 */
proto.yartu.UpsertTaskRequest.prototype.getNoteId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setNoteId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.yartu.UpsertTaskRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string completed_at = 4;
 * @return {string}
 */
proto.yartu.UpsertTaskRequest.prototype.getCompletedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setCompletedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 priority = 5;
 * @return {number}
 */
proto.yartu.UpsertTaskRequest.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string reminder = 6;
 * @return {string}
 */
proto.yartu.UpsertTaskRequest.prototype.getReminder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setReminder = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string deadline = 7;
 * @return {string}
 */
proto.yartu.UpsertTaskRequest.prototype.getDeadline = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setDeadline = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 order = 8;
 * @return {number}
 */
proto.yartu.UpsertTaskRequest.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool is_complete = 9;
 * @return {boolean}
 */
proto.yartu.UpsertTaskRequest.prototype.getIsComplete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.UpsertTaskRequest} returns this
 */
proto.yartu.UpsertTaskRequest.prototype.setIsComplete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
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
proto.yartu.UpsertTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.UpsertTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.UpsertTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertTaskResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.UpsertTaskResponse}
 */
proto.yartu.UpsertTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.UpsertTaskResponse;
  return proto.yartu.UpsertTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.UpsertTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.UpsertTaskResponse}
 */
proto.yartu.UpsertTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.UpsertTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.UpsertTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.UpsertTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.UpsertTaskResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.UpsertTaskResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.UpsertTaskResponse} returns this
 */
proto.yartu.UpsertTaskResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.UpsertTaskResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.UpsertTaskResponse} returns this
 */
proto.yartu.UpsertTaskResponse.prototype.setMessage = function(value) {
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
proto.yartu.DeleteTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteTaskRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteTaskRequest}
 */
proto.yartu.DeleteTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteTaskRequest;
  return proto.yartu.DeleteTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteTaskRequest}
 */
proto.yartu.DeleteTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteTaskRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteTaskRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteTaskRequest} returns this
 */
proto.yartu.DeleteTaskRequest.prototype.setId = function(value) {
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
proto.yartu.DeleteTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.DeleteTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.DeleteTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteTaskResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.DeleteTaskResponse}
 */
proto.yartu.DeleteTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.DeleteTaskResponse;
  return proto.yartu.DeleteTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.DeleteTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.DeleteTaskResponse}
 */
proto.yartu.DeleteTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.DeleteTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.DeleteTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.DeleteTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.DeleteTaskResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.DeleteTaskResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.DeleteTaskResponse} returns this
 */
proto.yartu.DeleteTaskResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.DeleteTaskResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.DeleteTaskResponse} returns this
 */
proto.yartu.DeleteTaskResponse.prototype.setMessage = function(value) {
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
proto.yartu.ListTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListTaskRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ListTaskRequest}
 */
proto.yartu.ListTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListTaskRequest;
  return proto.yartu.ListTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListTaskRequest}
 */
proto.yartu.ListTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ListTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListTaskRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ListTaskRequest.prototype.getQuery = function() {
  return /** @type{?proto.Query} */ (
    jspb.Message.getWrapperField(this, common_grpc_definitions_pb.Query, 1));
};


/**
 * @param {?proto.Query|undefined} value
 * @return {!proto.yartu.ListTaskRequest} returns this
*/
proto.yartu.ListTaskRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListTaskRequest} returns this
 */
proto.yartu.ListTaskRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListTaskRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListTaskResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListTaskResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.yartu.Task.toObject, includeInstance),
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
 * @return {!proto.yartu.ListTaskResponse}
 */
proto.yartu.ListTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListTaskResponse;
  return proto.yartu.ListTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListTaskResponse}
 */
proto.yartu.ListTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.Task;
      reader.readMessage(value,proto.yartu.Task.deserializeBinaryFromReader);
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
proto.yartu.ListTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListTaskResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.yartu.Task.serializeBinaryToWriter
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
proto.yartu.ListTaskResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListTaskResponse} returns this
 */
proto.yartu.ListTaskResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Task data = 2;
 * @return {!Array<!proto.yartu.Task>}
 */
proto.yartu.ListTaskResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.yartu.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.Task, 2));
};


/**
 * @param {!Array<!proto.yartu.Task>} value
 * @return {!proto.yartu.ListTaskResponse} returns this
*/
proto.yartu.ListTaskResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.Task}
 */
proto.yartu.ListTaskResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListTaskResponse} returns this
 */
proto.yartu.ListTaskResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListTaskResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListTaskResponse} returns this
 */
proto.yartu.ListTaskResponse.prototype.setMessage = function(value) {
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
proto.yartu.CompleteTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CompleteTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CompleteTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CompleteTaskRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.CompleteTaskRequest}
 */
proto.yartu.CompleteTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CompleteTaskRequest;
  return proto.yartu.CompleteTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CompleteTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CompleteTaskRequest}
 */
proto.yartu.CompleteTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.CompleteTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CompleteTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CompleteTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CompleteTaskRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.CompleteTaskRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CompleteTaskRequest} returns this
 */
proto.yartu.CompleteTaskRequest.prototype.setId = function(value) {
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
proto.yartu.CompleteTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.CompleteTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.CompleteTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CompleteTaskResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.CompleteTaskResponse}
 */
proto.yartu.CompleteTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.CompleteTaskResponse;
  return proto.yartu.CompleteTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.CompleteTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.CompleteTaskResponse}
 */
proto.yartu.CompleteTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.CompleteTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.CompleteTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.CompleteTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.CompleteTaskResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.CompleteTaskResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.CompleteTaskResponse} returns this
 */
proto.yartu.CompleteTaskResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.CompleteTaskResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.CompleteTaskResponse} returns this
 */
proto.yartu.CompleteTaskResponse.prototype.setMessage = function(value) {
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
proto.yartu.ConvertNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ConvertNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ConvertNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ConvertNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    to: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ConvertNoteRequest}
 */
proto.yartu.ConvertNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ConvertNoteRequest;
  return proto.yartu.ConvertNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ConvertNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ConvertNoteRequest}
 */
proto.yartu.ConvertNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ConvertNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ConvertNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ConvertNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ConvertNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTo();
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
proto.yartu.ConvertNoteRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ConvertNoteRequest} returns this
 */
proto.yartu.ConvertNoteRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 to = 2;
 * @return {number}
 */
proto.yartu.ConvertNoteRequest.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ConvertNoteRequest} returns this
 */
proto.yartu.ConvertNoteRequest.prototype.setTo = function(value) {
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
proto.yartu.ConvertNoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ConvertNoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ConvertNoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ConvertNoteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yartu.ConvertNoteResponse}
 */
proto.yartu.ConvertNoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ConvertNoteResponse;
  return proto.yartu.ConvertNoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ConvertNoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ConvertNoteResponse}
 */
proto.yartu.ConvertNoteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yartu.ConvertNoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ConvertNoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ConvertNoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ConvertNoteResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yartu.ConvertNoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ConvertNoteResponse} returns this
 */
proto.yartu.ConvertNoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yartu.ConvertNoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ConvertNoteResponse} returns this
 */
proto.yartu.ConvertNoteResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(module.exports, proto.yartu);

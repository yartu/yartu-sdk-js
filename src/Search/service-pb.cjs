// source: search/grpc/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.yartu.ListSearchShareablePeopleRequest', null, global);
goog.exportSymbol('proto.yartu.ListSearchShareablePeopleResponse', null, global);
goog.exportSymbol('proto.yartu.SharablePeople', null, global);
goog.exportSymbol('proto.yartu.SharableQuery', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SharablePeople = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SharablePeople, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharablePeople.displayName = 'proto.yartu.SharablePeople';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.SharableQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.SharableQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.SharableQuery.displayName = 'proto.yartu.SharableQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSearchShareablePeopleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yartu.ListSearchShareablePeopleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSearchShareablePeopleRequest.displayName = 'proto.yartu.ListSearchShareablePeopleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yartu.ListSearchShareablePeopleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yartu.ListSearchShareablePeopleResponse.repeatedFields_, null);
};
goog.inherits(proto.yartu.ListSearchShareablePeopleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yartu.ListSearchShareablePeopleResponse.displayName = 'proto.yartu.ListSearchShareablePeopleResponse';
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
proto.yartu.SharablePeople.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharablePeople.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharablePeople} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharablePeople.toObject = function(includeInstance, msg) {
  var f, obj = {
    isGroup: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isContact: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isYartuUser: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    photo: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    email: jspb.Message.getFieldWithDefault(msg, 8, ""),
    text: jspb.Message.getFieldWithDefault(msg, 9, ""),
    subtext: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SharablePeople}
 */
proto.yartu.SharablePeople.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharablePeople;
  return proto.yartu.SharablePeople.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharablePeople} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharablePeople}
 */
proto.yartu.SharablePeople.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGroup(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsContact(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsYartuUser(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoto(value);
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
      msg.setEmail(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SharablePeople.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharablePeople.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharablePeople} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharablePeople.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsGroup();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIsContact();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsYartuUser();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
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
};


/**
 * optional bool is_group = 1;
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.getIsGroup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setIsGroup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool is_contact = 2;
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.getIsContact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setIsContact = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_yartu_user = 3;
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.getIsYartuUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setIsYartuUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 id = 4;
 * @return {number}
 */
proto.yartu.SharablePeople.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string photo = 5;
 * @return {string}
 */
proto.yartu.SharablePeople.prototype.getPhoto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setPhoto = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.clearPhoto = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.hasPhoto = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.yartu.SharablePeople.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.clearName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string surname = 7;
 * @return {string}
 */
proto.yartu.SharablePeople.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setSurname = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.clearSurname = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.hasSurname = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string email = 8;
 * @return {string}
 */
proto.yartu.SharablePeople.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string text = 9;
 * @return {string}
 */
proto.yartu.SharablePeople.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setText = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.clearText = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.hasText = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string subtext = 10;
 * @return {string}
 */
proto.yartu.SharablePeople.prototype.getSubtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.setSubtext = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.SharablePeople} returns this
 */
proto.yartu.SharablePeople.prototype.clearSubtext = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.SharablePeople.prototype.hasSubtext = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.SharableQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.SharableQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.SharableQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharableQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    order: jspb.Message.getFieldWithDefault(msg, 2, ""),
    includesContact: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.SharableQuery}
 */
proto.yartu.SharableQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.SharableQuery;
  return proto.yartu.SharableQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.SharableQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.SharableQuery}
 */
proto.yartu.SharableQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludesContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yartu.SharableQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.SharableQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.SharableQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.SharableQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludesContact();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int64 limit = 1;
 * @return {number}
 */
proto.yartu.SharableQuery.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.SharableQuery} returns this
 */
proto.yartu.SharableQuery.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string order = 2;
 * @return {string}
 */
proto.yartu.SharableQuery.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.SharableQuery} returns this
 */
proto.yartu.SharableQuery.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool includes_contact = 3;
 * @return {boolean}
 */
proto.yartu.SharableQuery.prototype.getIncludesContact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yartu.SharableQuery} returns this
 */
proto.yartu.SharableQuery.prototype.setIncludesContact = function(value) {
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
proto.yartu.ListSearchShareablePeopleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSearchShareablePeopleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSearchShareablePeopleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSearchShareablePeopleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    search: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    query: (f = msg.getQuery()) && proto.yartu.SharableQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yartu.ListSearchShareablePeopleRequest}
 */
proto.yartu.ListSearchShareablePeopleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSearchShareablePeopleRequest;
  return proto.yartu.ListSearchShareablePeopleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSearchShareablePeopleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSearchShareablePeopleRequest}
 */
proto.yartu.ListSearchShareablePeopleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearch(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.yartu.SharableQuery;
      reader.readMessage(value,proto.yartu.SharableQuery.deserializeBinaryFromReader);
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
proto.yartu.ListSearchShareablePeopleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSearchShareablePeopleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSearchShareablePeopleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSearchShareablePeopleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearch();
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
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yartu.SharableQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string search = 1;
 * @return {string}
 */
proto.yartu.ListSearchShareablePeopleRequest.prototype.getSearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListSearchShareablePeopleRequest} returns this
 */
proto.yartu.ListSearchShareablePeopleRequest.prototype.setSearch = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.yartu.ListSearchShareablePeopleRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListSearchShareablePeopleRequest} returns this
 */
proto.yartu.ListSearchShareablePeopleRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SharableQuery query = 3;
 * @return {?proto.yartu.SharableQuery}
 */
proto.yartu.ListSearchShareablePeopleRequest.prototype.getQuery = function() {
  return /** @type{?proto.yartu.SharableQuery} */ (
    jspb.Message.getWrapperField(this, proto.yartu.SharableQuery, 3));
};


/**
 * @param {?proto.yartu.SharableQuery|undefined} value
 * @return {!proto.yartu.ListSearchShareablePeopleRequest} returns this
*/
proto.yartu.ListSearchShareablePeopleRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yartu.ListSearchShareablePeopleRequest} returns this
 */
proto.yartu.ListSearchShareablePeopleRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListSearchShareablePeopleRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yartu.ListSearchShareablePeopleResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yartu.ListSearchShareablePeopleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yartu.ListSearchShareablePeopleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSearchShareablePeopleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    peopleList: jspb.Message.toObjectList(msg.getPeopleList(),
    proto.yartu.SharablePeople.toObject, includeInstance),
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
 * @return {!proto.yartu.ListSearchShareablePeopleResponse}
 */
proto.yartu.ListSearchShareablePeopleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yartu.ListSearchShareablePeopleResponse;
  return proto.yartu.ListSearchShareablePeopleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yartu.ListSearchShareablePeopleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yartu.ListSearchShareablePeopleResponse}
 */
proto.yartu.ListSearchShareablePeopleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yartu.SharablePeople;
      reader.readMessage(value,proto.yartu.SharablePeople.deserializeBinaryFromReader);
      msg.addPeople(value);
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
proto.yartu.ListSearchShareablePeopleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yartu.ListSearchShareablePeopleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yartu.ListSearchShareablePeopleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yartu.ListSearchShareablePeopleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPeopleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yartu.SharablePeople.serializeBinaryToWriter
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
proto.yartu.ListSearchShareablePeopleResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yartu.ListSearchShareablePeopleResponse} returns this
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated SharablePeople people = 2;
 * @return {!Array<!proto.yartu.SharablePeople>}
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.getPeopleList = function() {
  return /** @type{!Array<!proto.yartu.SharablePeople>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yartu.SharablePeople, 2));
};


/**
 * @param {!Array<!proto.yartu.SharablePeople>} value
 * @return {!proto.yartu.ListSearchShareablePeopleResponse} returns this
*/
proto.yartu.ListSearchShareablePeopleResponse.prototype.setPeopleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yartu.SharablePeople=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yartu.SharablePeople}
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.addPeople = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yartu.SharablePeople, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yartu.ListSearchShareablePeopleResponse} returns this
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.clearPeopleList = function() {
  return this.setPeopleList([]);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yartu.ListSearchShareablePeopleResponse} returns this
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yartu.ListSearchShareablePeopleResponse} returns this
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yartu.ListSearchShareablePeopleResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.yartu);

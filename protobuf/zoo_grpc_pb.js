// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var protobuf_zoo_pb = require("../protobuf/zoo_pb.js");

function serialize_zoo_GetBirdByNameRequest(arg) {
  if (!(arg instanceof protobuf_zoo_pb.GetBirdByNameRequest)) {
    throw new Error("Expected argument of type zoo.GetBirdByNameRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zoo_GetBirdByNameRequest(buffer_arg) {
  return protobuf_zoo_pb.GetBirdByNameRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_zoo_GetBirdByNameResponse(arg) {
  if (!(arg instanceof protobuf_zoo_pb.GetBirdByNameResponse)) {
    throw new Error("Expected argument of type zoo.GetBirdByNameResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zoo_GetBirdByNameResponse(buffer_arg) {
  return protobuf_zoo_pb.GetBirdByNameResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_zoo_GetBirdByWingspanRequest(arg) {
  if (!(arg instanceof protobuf_zoo_pb.GetBirdByWingspanRequest)) {
    throw new Error("Expected argument of type zoo.GetBirdByWingspanRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zoo_GetBirdByWingspanRequest(buffer_arg) {
  return protobuf_zoo_pb.GetBirdByWingspanRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_zoo_GetBirdByWingspanResponse(arg) {
  if (!(arg instanceof protobuf_zoo_pb.GetBirdByWingspanResponse)) {
    throw new Error("Expected argument of type zoo.GetBirdByWingspanResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zoo_GetBirdByWingspanResponse(buffer_arg) {
  return protobuf_zoo_pb.GetBirdByWingspanResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_zoo_GetBirdsRequest(arg) {
  if (!(arg instanceof protobuf_zoo_pb.GetBirdsRequest)) {
    throw new Error("Expected argument of type zoo.GetBirdsRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zoo_GetBirdsRequest(buffer_arg) {
  return protobuf_zoo_pb.GetBirdsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_zoo_GetBirdsResponse(arg) {
  if (!(arg instanceof protobuf_zoo_pb.GetBirdsResponse)) {
    throw new Error("Expected argument of type zoo.GetBirdsResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zoo_GetBirdsResponse(buffer_arg) {
  return protobuf_zoo_pb.GetBirdsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var ZooService = (exports.ZooService = {
  getBirdByName: {
    path: "/zoo.Zoo/GetBirdByName",
    requestStream: false,
    responseStream: false,
    requestType: protobuf_zoo_pb.GetBirdByNameRequest,
    responseType: protobuf_zoo_pb.GetBirdByNameResponse,
    requestSerialize: serialize_zoo_GetBirdByNameRequest,
    requestDeserialize: deserialize_zoo_GetBirdByNameRequest,
    responseSerialize: serialize_zoo_GetBirdByNameResponse,
    responseDeserialize: deserialize_zoo_GetBirdByNameResponse,
  },
  getBirdByWingspan: {
    path: "/zoo.Zoo/GetBirdByWingspan",
    requestStream: false,
    responseStream: false,
    requestType: protobuf_zoo_pb.GetBirdByWingspanRequest,
    responseType: protobuf_zoo_pb.GetBirdByWingspanResponse,
    requestSerialize: serialize_zoo_GetBirdByWingspanRequest,
    requestDeserialize: deserialize_zoo_GetBirdByWingspanRequest,
    responseSerialize: serialize_zoo_GetBirdByWingspanResponse,
    responseDeserialize: deserialize_zoo_GetBirdByWingspanResponse,
  },
  getBirds: {
    path: "/zoo.Zoo/GetBirds",
    requestStream: false,
    responseStream: false,
    requestType: protobuf_zoo_pb.GetBirdsRequest,
    responseType: protobuf_zoo_pb.GetBirdsResponse,
    requestSerialize: serialize_zoo_GetBirdsRequest,
    requestDeserialize: deserialize_zoo_GetBirdsRequest,
    responseSerialize: serialize_zoo_GetBirdsResponse,
    responseDeserialize: deserialize_zoo_GetBirdsResponse,
  },
});

exports.ZooClient = grpc.makeGenericClientConstructor(ZooService);

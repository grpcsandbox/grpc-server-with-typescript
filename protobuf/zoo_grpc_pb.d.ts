// package: zoo
// file: protobuf/zoo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_zoo_pb from "../protobuf/zoo_pb";

interface IZooService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBirdByName: IZooService_IGetBirdByName;
  getBirdByWingspan: IZooService_IGetBirdByWingspan;
  getBirds: IZooService_IGetBirds;
}

interface IZooService_IGetBirdByName
  extends grpc.MethodDefinition<
    protobuf_zoo_pb.GetBirdByNameRequest,
    protobuf_zoo_pb.GetBirdByNameResponse
  > {
  path: "/zoo.Zoo/GetBirdByName";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<protobuf_zoo_pb.GetBirdByNameRequest>;
  requestDeserialize: grpc.deserialize<protobuf_zoo_pb.GetBirdByNameRequest>;
  responseSerialize: grpc.serialize<protobuf_zoo_pb.GetBirdByNameResponse>;
  responseDeserialize: grpc.deserialize<protobuf_zoo_pb.GetBirdByNameResponse>;
}
interface IZooService_IGetBirdByWingspan
  extends grpc.MethodDefinition<
    protobuf_zoo_pb.GetBirdByWingspanRequest,
    protobuf_zoo_pb.GetBirdByWingspanResponse
  > {
  path: "/zoo.Zoo/GetBirdByWingspan";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<protobuf_zoo_pb.GetBirdByWingspanRequest>;
  requestDeserialize: grpc.deserialize<protobuf_zoo_pb.GetBirdByWingspanRequest>;
  responseSerialize: grpc.serialize<protobuf_zoo_pb.GetBirdByWingspanResponse>;
  responseDeserialize: grpc.deserialize<protobuf_zoo_pb.GetBirdByWingspanResponse>;
}
interface IZooService_IGetBirds
  extends grpc.MethodDefinition<
    protobuf_zoo_pb.GetBirdsRequest,
    protobuf_zoo_pb.GetBirdsResponse
  > {
  path: "/zoo.Zoo/GetBirds";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<protobuf_zoo_pb.GetBirdsRequest>;
  requestDeserialize: grpc.deserialize<protobuf_zoo_pb.GetBirdsRequest>;
  responseSerialize: grpc.serialize<protobuf_zoo_pb.GetBirdsResponse>;
  responseDeserialize: grpc.deserialize<protobuf_zoo_pb.GetBirdsResponse>;
}

export const ZooService: IZooService;

export interface IZooServer {
  getBirdByName: grpc.handleUnaryCall<
    protobuf_zoo_pb.GetBirdByNameRequest,
    protobuf_zoo_pb.GetBirdByNameResponse
  >;
  getBirdByWingspan: grpc.handleUnaryCall<
    protobuf_zoo_pb.GetBirdByWingspanRequest,
    protobuf_zoo_pb.GetBirdByWingspanResponse
  >;
  getBirds: grpc.handleUnaryCall<
    protobuf_zoo_pb.GetBirdsRequest,
    protobuf_zoo_pb.GetBirdsResponse
  >;
}

export interface IZooClient {
  getBirdByName(
    request: protobuf_zoo_pb.GetBirdByNameRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByNameResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirdByName(
    request: protobuf_zoo_pb.GetBirdByNameRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByNameResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirdByName(
    request: protobuf_zoo_pb.GetBirdByNameRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByNameResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirdByWingspan(
    request: protobuf_zoo_pb.GetBirdByWingspanRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByWingspanResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirdByWingspan(
    request: protobuf_zoo_pb.GetBirdByWingspanRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByWingspanResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirdByWingspan(
    request: protobuf_zoo_pb.GetBirdByWingspanRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByWingspanResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirds(
    request: protobuf_zoo_pb.GetBirdsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirds(
    request: protobuf_zoo_pb.GetBirdsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getBirds(
    request: protobuf_zoo_pb.GetBirdsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdsResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class ZooClient extends grpc.Client implements IZooClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public getBirdByName(
    request: protobuf_zoo_pb.GetBirdByNameRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByNameResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirdByName(
    request: protobuf_zoo_pb.GetBirdByNameRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByNameResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirdByName(
    request: protobuf_zoo_pb.GetBirdByNameRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByNameResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirdByWingspan(
    request: protobuf_zoo_pb.GetBirdByWingspanRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByWingspanResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirdByWingspan(
    request: protobuf_zoo_pb.GetBirdByWingspanRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByWingspanResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirdByWingspan(
    request: protobuf_zoo_pb.GetBirdByWingspanRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdByWingspanResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirds(
    request: protobuf_zoo_pb.GetBirdsRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirds(
    request: protobuf_zoo_pb.GetBirdsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdsResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getBirds(
    request: protobuf_zoo_pb.GetBirdsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: protobuf_zoo_pb.GetBirdsResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

// package: zoo
// file: zoo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as zoo_pb from "./zoo_pb";

interface IZooService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBirdByName: IZooService_IGetBirdByName;
    getBirdByWingspan: IZooService_IGetBirdByWingspan;
    getBirds: IZooService_IGetBirds;
}

interface IZooService_IGetBirdByName extends grpc.MethodDefinition<zoo_pb.GetBirdByNameRequest, zoo_pb.GetBirdByNameResponse> {
    path: "/zoo.Zoo/GetBirdByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<zoo_pb.GetBirdByNameRequest>;
    requestDeserialize: grpc.deserialize<zoo_pb.GetBirdByNameRequest>;
    responseSerialize: grpc.serialize<zoo_pb.GetBirdByNameResponse>;
    responseDeserialize: grpc.deserialize<zoo_pb.GetBirdByNameResponse>;
}
interface IZooService_IGetBirdByWingspan extends grpc.MethodDefinition<zoo_pb.GetBirdByWingspanRequest, zoo_pb.GetBirdByWingspanResponse> {
    path: "/zoo.Zoo/GetBirdByWingspan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<zoo_pb.GetBirdByWingspanRequest>;
    requestDeserialize: grpc.deserialize<zoo_pb.GetBirdByWingspanRequest>;
    responseSerialize: grpc.serialize<zoo_pb.GetBirdByWingspanResponse>;
    responseDeserialize: grpc.deserialize<zoo_pb.GetBirdByWingspanResponse>;
}
interface IZooService_IGetBirds extends grpc.MethodDefinition<zoo_pb.GetBirdsRequest, zoo_pb.GetBirdsResponse> {
    path: "/zoo.Zoo/GetBirds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<zoo_pb.GetBirdsRequest>;
    requestDeserialize: grpc.deserialize<zoo_pb.GetBirdsRequest>;
    responseSerialize: grpc.serialize<zoo_pb.GetBirdsResponse>;
    responseDeserialize: grpc.deserialize<zoo_pb.GetBirdsResponse>;
}

export const ZooService: IZooService;

export interface IZooServer {
    getBirdByName: grpc.handleUnaryCall<zoo_pb.GetBirdByNameRequest, zoo_pb.GetBirdByNameResponse>;
    getBirdByWingspan: grpc.handleUnaryCall<zoo_pb.GetBirdByWingspanRequest, zoo_pb.GetBirdByWingspanResponse>;
    getBirds: grpc.handleUnaryCall<zoo_pb.GetBirdsRequest, zoo_pb.GetBirdsResponse>;
}

export interface IZooClient {
    getBirdByName(request: zoo_pb.GetBirdByNameRequest, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByNameResponse) => void): grpc.ClientUnaryCall;
    getBirdByName(request: zoo_pb.GetBirdByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByNameResponse) => void): grpc.ClientUnaryCall;
    getBirdByName(request: zoo_pb.GetBirdByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByNameResponse) => void): grpc.ClientUnaryCall;
    getBirdByWingspan(request: zoo_pb.GetBirdByWingspanRequest, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByWingspanResponse) => void): grpc.ClientUnaryCall;
    getBirdByWingspan(request: zoo_pb.GetBirdByWingspanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByWingspanResponse) => void): grpc.ClientUnaryCall;
    getBirdByWingspan(request: zoo_pb.GetBirdByWingspanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByWingspanResponse) => void): grpc.ClientUnaryCall;
    getBirds(request: zoo_pb.GetBirdsRequest, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdsResponse) => void): grpc.ClientUnaryCall;
    getBirds(request: zoo_pb.GetBirdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdsResponse) => void): grpc.ClientUnaryCall;
    getBirds(request: zoo_pb.GetBirdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdsResponse) => void): grpc.ClientUnaryCall;
}

export class ZooClient extends grpc.Client implements IZooClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getBirdByName(request: zoo_pb.GetBirdByNameRequest, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByNameResponse) => void): grpc.ClientUnaryCall;
    public getBirdByName(request: zoo_pb.GetBirdByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByNameResponse) => void): grpc.ClientUnaryCall;
    public getBirdByName(request: zoo_pb.GetBirdByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByNameResponse) => void): grpc.ClientUnaryCall;
    public getBirdByWingspan(request: zoo_pb.GetBirdByWingspanRequest, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByWingspanResponse) => void): grpc.ClientUnaryCall;
    public getBirdByWingspan(request: zoo_pb.GetBirdByWingspanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByWingspanResponse) => void): grpc.ClientUnaryCall;
    public getBirdByWingspan(request: zoo_pb.GetBirdByWingspanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdByWingspanResponse) => void): grpc.ClientUnaryCall;
    public getBirds(request: zoo_pb.GetBirdsRequest, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdsResponse) => void): grpc.ClientUnaryCall;
    public getBirds(request: zoo_pb.GetBirdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdsResponse) => void): grpc.ClientUnaryCall;
    public getBirds(request: zoo_pb.GetBirdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: zoo_pb.GetBirdsResponse) => void): grpc.ClientUnaryCall;
}

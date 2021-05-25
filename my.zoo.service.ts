import grpc, {sendUnaryData, ServerUnaryCall} from "grpc";
import {
    IZooServer,
    ZooService
} from "./proto/zoo_grpc_pb";
import {
    Bird,
    GetBirdByNameRequest,
    GetBirdByNameResponse,
    GetBirdByWingspanRequest,
    GetBirdByWingspanResponse,
    GetBirdsRequest,
    GetBirdsResponse
} from "./proto/zoo_pb";

const birds: Bird.AsObject[] = [
        {
            "name": "Mourning Dove",
            "wingspan": 18
        },
        {
            "name": "California Condor",
            "wingspan": 108
        },
        {
            "name": "House Sparrow",
            "wingspan": 9
        },
    ]
;

class MyZooService implements IZooServer {
    getBirdByWingspan(call: ServerUnaryCall<GetBirdByWingspanRequest>, callback: sendUnaryData<GetBirdByWingspanResponse>): void {}

    getBirds(call: ServerUnaryCall<GetBirdsRequest>, callback: sendUnaryData<GetBirdsResponse>): void {}

    getBirdByName(call: ServerUnaryCall<GetBirdByNameRequest>, callback: sendUnaryData<GetBirdByNameResponse>): void {}
}

const myZooService = new grpc.Server();
myZooService.addService<IZooServer>(ZooService, new MyZooService());
myZooService.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
myZooService.start();

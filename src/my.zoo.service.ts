import grpc, { sendUnaryData, ServerUnaryCall } from "grpc";
import { IZooServer, ZooService } from "../protobuf/zoo_grpc_pb";
import {
  Bird,
  GetBirdByNameRequest,
  GetBirdByNameResponse,
  GetBirdByWingspanRequest,
  GetBirdByWingspanResponse,
  GetBirdsRequest,
  GetBirdsResponse,
} from "../protobuf/zoo_pb";
import data from "./birds.json";

const seed: Bird.AsObject[] = data;
enum Wingspan {
  U = 0,
  S = 1,
  M = 2,
  L = 3,
}

class MyZooService implements IZooServer {
  getBirdByName(
    call: ServerUnaryCall<GetBirdByNameRequest>,
    callback: sendUnaryData<GetBirdByNameResponse>
  ): void {
    const request = call.request;

    const birdsByName: Bird.AsObject[] = seed.filter(
      (bird) => request.getName() === bird.name
    );
    const birds: Array<Bird> = new Array<Bird>();
    if (birdsByName) {
      const b: Bird = new Bird();
      birdsByName.forEach((bird) => {
        b.setName(bird.name);
        b.setWingspan(bird.wingspan);
        birds.push(b);
      });
    }

    const response = new GetBirdByNameResponse();
    response.setBirdsList(birds);
    callback(null, response);
  }

  getBirdByWingspan(
    call: ServerUnaryCall<GetBirdByWingspanRequest>,
    callback: sendUnaryData<GetBirdByWingspanResponse>
  ): void {
    const request = call.request;
    const size: Wingspan = request.getWingspan();
    const bySize: Bird.AsObject[] = seed.filter((bird) => {
      switch (size.valueOf()) {
        case Wingspan.S.valueOf():
          return bird.wingspan > 0 && bird.wingspan < 10;
        case Wingspan.M.valueOf():
          return bird.wingspan >= 10 && bird.wingspan <= 75;
        case Wingspan.L.valueOf():
          return bird.wingspan > 75;
      }
    });

    const birds: Array<Bird> = new Array<Bird>();
    if (bySize) {
      const b: Bird = new Bird();
      bySize.forEach((bird) => {
        b.setName(bird.name);
        b.setWingspan(bird.wingspan);
        birds.push(b);
      });
    }

    const response = new GetBirdByWingspanResponse();
    response.setBirdsList(birds);
    callback(null, response);
  }

  getBirds(
    call: ServerUnaryCall<GetBirdsRequest>,
    callback: sendUnaryData<GetBirdsResponse>
  ): void {
    const birds: Array<Bird> = new Array<Bird>();
    seed.forEach((s) => {
      const b: Bird = new Bird();
      b.setName(s.name);
      b.setWingspan(s.wingspan);
      birds.push(b);
    });

    const response = new GetBirdsResponse();
    response.setBirdsList(birds);
    callback(null, response);
  }
}

function serve() {
  const myZooService = new grpc.Server();
  myZooService.addService<IZooServer>(ZooService, new MyZooService());
  myZooService.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  myZooService.start();
}

serve();

# gRPC Server with TypeScript

Basic gRPC server with TypeScript. 

A zoo service where you can search for birds by their common name or wingspan.

## Usage
    npm run proto:clear

    npm run proto:generate

    npm run start

## Query gRPC services
To query install [bloomrpc](https://github.com/uw-labs/bloomrpc) using `brew install --cask bloomrp`.
Once it is installed, add `protobuf/zoo.proto` file by clicking the green plus button and change the address to 
`0.0.0.0:50051`. 

<img width="1146" alt="Screen Shot 2021-05-26 at 12 59 35 AM" src="https://user-images.githubusercontent.com/5876481/119604846-bb133980-bdbd-11eb-83af-b0b6f06fc37c.png">



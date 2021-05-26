// package: zoo
// file: zoo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Bird extends jspb.Message { 
    getName(): string;
    setName(value: string): Bird;
    getWingspan(): number;
    setWingspan(value: number): Bird;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bird.AsObject;
    static toObject(includeInstance: boolean, msg: Bird): Bird.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bird, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bird;
    static deserializeBinaryFromReader(message: Bird, reader: jspb.BinaryReader): Bird;
}

export namespace Bird {
    export type AsObject = {
        name: string,
        wingspan: number,
    }
}

export class GetBirdByNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetBirdByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBirdByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBirdByNameRequest): GetBirdByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBirdByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBirdByNameRequest;
    static deserializeBinaryFromReader(message: GetBirdByNameRequest, reader: jspb.BinaryReader): GetBirdByNameRequest;
}

export namespace GetBirdByNameRequest {
    export type AsObject = {
        name: string,
    }
}

export class GetBirdByNameResponse extends jspb.Message { 
    clearBirdsList(): void;
    getBirdsList(): Array<Bird>;
    setBirdsList(value: Array<Bird>): GetBirdByNameResponse;
    addBirds(value?: Bird, index?: number): Bird;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBirdByNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBirdByNameResponse): GetBirdByNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBirdByNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBirdByNameResponse;
    static deserializeBinaryFromReader(message: GetBirdByNameResponse, reader: jspb.BinaryReader): GetBirdByNameResponse;
}

export namespace GetBirdByNameResponse {
    export type AsObject = {
        birdsList: Array<Bird.AsObject>,
    }
}

export class GetBirdByWingspanRequest extends jspb.Message { 
    getWingspan(): Wingspan;
    setWingspan(value: Wingspan): GetBirdByWingspanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBirdByWingspanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBirdByWingspanRequest): GetBirdByWingspanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBirdByWingspanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBirdByWingspanRequest;
    static deserializeBinaryFromReader(message: GetBirdByWingspanRequest, reader: jspb.BinaryReader): GetBirdByWingspanRequest;
}

export namespace GetBirdByWingspanRequest {
    export type AsObject = {
        wingspan: Wingspan,
    }
}

export class GetBirdByWingspanResponse extends jspb.Message { 
    clearBirdsList(): void;
    getBirdsList(): Array<Bird>;
    setBirdsList(value: Array<Bird>): GetBirdByWingspanResponse;
    addBirds(value?: Bird, index?: number): Bird;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBirdByWingspanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBirdByWingspanResponse): GetBirdByWingspanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBirdByWingspanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBirdByWingspanResponse;
    static deserializeBinaryFromReader(message: GetBirdByWingspanResponse, reader: jspb.BinaryReader): GetBirdByWingspanResponse;
}

export namespace GetBirdByWingspanResponse {
    export type AsObject = {
        birdsList: Array<Bird.AsObject>,
    }
}

export class GetBirdsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBirdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBirdsRequest): GetBirdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBirdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBirdsRequest;
    static deserializeBinaryFromReader(message: GetBirdsRequest, reader: jspb.BinaryReader): GetBirdsRequest;
}

export namespace GetBirdsRequest {
    export type AsObject = {
    }
}

export class GetBirdsResponse extends jspb.Message { 
    clearBirdsList(): void;
    getBirdsList(): Array<Bird>;
    setBirdsList(value: Array<Bird>): GetBirdsResponse;
    addBirds(value?: Bird, index?: number): Bird;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBirdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBirdsResponse): GetBirdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBirdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBirdsResponse;
    static deserializeBinaryFromReader(message: GetBirdsResponse, reader: jspb.BinaryReader): GetBirdsResponse;
}

export namespace GetBirdsResponse {
    export type AsObject = {
        birdsList: Array<Bird.AsObject>,
    }
}

export enum Wingspan {
    U = 0,
    S = 1,
    M = 2,
    L = 3,
}

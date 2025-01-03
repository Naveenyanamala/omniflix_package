/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.11.7
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or npm scripts command that is used to regenerate this bundle.
*/
export declare enum WireType {
    Varint = 0,
    Fixed64 = 1,
    Bytes = 2,
    Fixed32 = 5
}
export interface IBinaryReader {
    buf: Uint8Array;
    pos: number;
    type: number;
    len: number;
    tag(): [number, WireType, number];
    skip(length?: number): this;
    skipType(wireType: number): this;
    uint32(): number;
    int32(): number;
    sint32(): number;
    fixed32(): number;
    sfixed32(): number;
    int64(): bigint;
    uint64(): bigint;
    sint64(): bigint;
    fixed64(): bigint;
    sfixed64(): bigint;
    float(): number;
    double(): number;
    bool(): boolean;
    bytes(): Uint8Array;
    string(): string;
}
export declare class BinaryReader implements IBinaryReader {
    buf: Uint8Array;
    pos: number;
    type: number;
    len: number;
    assertBounds(): void;
    constructor(buf?: ArrayLike<number>);
    tag(): [number, WireType, number];
    skip(length?: number): this;
    skipType(wireType: number): this;
    uint32(): number;
    int32(): number;
    sint32(): number;
    fixed32(): number;
    sfixed32(): number;
    int64(): bigint;
    uint64(): bigint;
    sint64(): bigint;
    fixed64(): bigint;
    sfixed64(): bigint;
    float(): number;
    double(): number;
    bool(): boolean;
    bytes(): Uint8Array;
    string(): string;
}
export interface IBinaryWriter {
    len: number;
    head: IOp;
    tail: IOp;
    states: State | null;
    finish(): Uint8Array;
    fork(): IBinaryWriter;
    reset(): IBinaryWriter;
    ldelim(): IBinaryWriter;
    tag(fieldNo: number, type: WireType): IBinaryWriter;
    uint32(value: number): IBinaryWriter;
    int32(value: number): IBinaryWriter;
    sint32(value: number): IBinaryWriter;
    int64(value: string | number | bigint): IBinaryWriter;
    uint64: (value: string | number | bigint) => IBinaryWriter;
    sint64(value: string | number | bigint): IBinaryWriter;
    fixed64(value: string | number | bigint): IBinaryWriter;
    sfixed64: (value: string | number | bigint) => IBinaryWriter;
    bool(value: boolean): IBinaryWriter;
    fixed32(value: number): IBinaryWriter;
    sfixed32: (value: number) => IBinaryWriter;
    float(value: number): IBinaryWriter;
    double(value: number): IBinaryWriter;
    bytes(value: Uint8Array): IBinaryWriter;
    string(value: string): IBinaryWriter;
}
interface IOp {
    len: number;
    next?: IOp;
    proceed(buf: Uint8Array | number[], pos: number): void;
}
declare class State {
    head: IOp;
    tail: IOp;
    len: number;
    next: State | null;
    constructor(writer: BinaryWriter);
}
export declare class BinaryWriter implements IBinaryWriter {
    len: number;
    head: IOp;
    tail: IOp;
    states: State | null;
    constructor();
    static create(): BinaryWriter;
    static alloc(size: number): Uint8Array | number[];
    private _push;
    finish(): Uint8Array;
    fork(): BinaryWriter;
    reset(): BinaryWriter;
    ldelim(): BinaryWriter;
    tag(fieldNo: number, type: WireType): BinaryWriter;
    uint32(value: number): BinaryWriter;
    int32(value: number): BinaryWriter;
    sint32(value: number): BinaryWriter;
    int64(value: string | number | bigint): BinaryWriter;
    uint64: (value: string | number | bigint) => BinaryWriter;
    sint64(value: string | number | bigint): BinaryWriter;
    fixed64(value: string | number | bigint): BinaryWriter;
    sfixed64: (value: string | number | bigint) => BinaryWriter;
    bool(value: boolean): BinaryWriter;
    fixed32(value: number): BinaryWriter;
    sfixed32: (value: number) => BinaryWriter;
    float(value: number): BinaryWriter;
    double(value: number): BinaryWriter;
    bytes(value: Uint8Array): BinaryWriter;
    string(value: string): BinaryWriter;
}
export {};

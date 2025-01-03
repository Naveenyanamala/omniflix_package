/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.11.7
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or npm scripts command that is used to regenerate this bundle.
*/
/**
 * Read a 64 bit varint as two JS numbers.
 *
 * Returns tuple:
 * [0]: low bits
 * [1]: high bits
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
 */
export declare function varint64read(this: ReaderLike): [number, number];
/**
 * Write a 64 bit varint, given as two JS numbers, to the given bytes array.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/writer.js#L344
 */
export declare function varint64write(lo: number, hi: number, bytes: number[]): void;
/**
 * Parse decimal string of 64 bit integer value as two JS numbers.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */
export declare function int64FromString(dec: string): {
    lo: number;
    hi: number;
};
/**
 * Losslessly converts a 64-bit signed integer in 32:32 split representation
 * into a decimal string.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */
export declare function int64ToString(lo: number, hi: number): string;
/**
 * Losslessly converts a 64-bit unsigned integer in 32:32 split representation
 * into a decimal string.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
 */
export declare function uInt64ToString(lo: number, hi: number): string;
/**
 * Write a 32 bit varint, signed or unsigned. Same as `varint64write(0, value, bytes)`
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/1b18833f4f2a2f681f4e4a25cdf3b0a43115ec26/js/binary/encoder.js#L144
 */
export declare function varint32write(value: number, bytes: number[]): void;
/**
 * Read an unsigned 32 bit varint.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L220
 */
export declare function varint32read(this: ReaderLike): number;
type ReaderLike = {
    buf: Uint8Array;
    pos: number;
    len: number;
    assertBounds(): void;
};
/**
 * encode zig zag
 */
export declare function zzEncode(lo: number, hi: number): number[];
/**
 * decode zig zag
 */
export declare function zzDecode(lo: number, hi: number): number[];
/**
 * unsigned int32 without moving pos.
 */
export declare function readUInt32(buf: Uint8Array, pos: number): number;
/**
 * signed int32 without moving pos.
 */
export declare function readInt32(buf: Uint8Array, pos: number): number;
/**
 * writing varint32 to pos
 */
export declare function writeVarint32(val: number, buf: Uint8Array | number[], pos: number): void;
/**
 * writing varint64 to pos
 */
export declare function writeVarint64(val: {
    lo: number;
    hi: number;
}, buf: Uint8Array | number[], pos: number): void;
export declare function int64Length(lo: number, hi: number): 1 | 2 | 4 | 3 | 6 | 7 | 10 | 8 | 9 | 5;
export declare function writeFixed32(val: number, buf: Uint8Array | number[], pos: number): void;
export declare function writeByte(val: number, buf: Uint8Array | number[], pos: number): void;
export {};

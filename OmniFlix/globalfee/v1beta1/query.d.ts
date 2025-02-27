import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/OmniFlix.globalfee.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/OmniFlix.globalfee.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/OmniFlix.globalfee.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/OmniFlix.globalfee.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};

import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-params-request",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-params-response",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denom-authority-metadata-request",
            value: QueryDenomAuthorityMetadataRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
            value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: DenomAuthorityMetadata.fromPartial({})
    };
}
export const QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authorityMetadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denom-authority-metadata-response",
            value: QueryDenomAuthorityMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
            value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: ""
    };
}
export const QueryDenomsFromCreatorRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denoms-from-creator-request",
            value: QueryDenomsFromCreatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
            value: QueryDenomsFromCreatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: []
    };
}
export const QueryDenomsFromCreatorResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = message.denoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denoms-from-creator-response",
            value: QueryDenomsFromCreatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
            value: QueryDenomsFromCreatorResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
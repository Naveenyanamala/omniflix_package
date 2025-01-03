import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Collection, Denom, ONFT, Owner } from "./onft";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryCollectionRequest() {
    return {
        denomId: "",
        pagination: undefined
    };
}
export const QueryCollectionRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionRequest();
        message.denomId = object.denomId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCollectionRequest();
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCollectionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCollectionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCollectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest",
            value: QueryCollectionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCollectionResponse() {
    return {
        collection: undefined,
        pagination: undefined
    };
}
export const QueryCollectionResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.collection !== undefined) {
            Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = Collection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResponse();
        message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCollectionResponse();
        if (object.collection !== undefined && object.collection !== null) {
            message.collection = Collection.fromAmino(object.collection);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.collection = message.collection ? Collection.toAmino(message.collection) : undefined;
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCollectionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCollectionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCollectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse",
            value: QueryCollectionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIBCCollectionRequest() {
    return {
        hash: "",
        pagination: undefined
    };
}
export const QueryIBCCollectionRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIBCCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIBCCollectionRequest();
        message.hash = object.hash ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIBCCollectionRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIBCCollectionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIBCCollectionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIBCCollectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest",
            value: QueryIBCCollectionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomRequest() {
    return {
        denomId: ""
    };
}
export const QueryDenomRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomRequest();
        message.denomId = object.denomId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomRequest();
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest",
            value: QueryDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomResponse() {
    return {
        denom: undefined
    };
}
export const QueryDenomResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== undefined) {
            Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = Denom.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomResponse();
        message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomResponse();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = Denom.fromAmino(object.denom);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse",
            value: QueryDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIBCDenomRequest() {
    return {
        hash: ""
    };
}
export const QueryIBCDenomRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIBCDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIBCDenomRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIBCDenomRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIBCDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIBCDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIBCDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest",
            value: QueryIBCDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsRequest() {
    return {
        pagination: undefined,
        owner: ""
    };
}
export const QueryDenomsRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest",
            value: QueryDenomsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsResponse() {
    return {
        denoms: [],
        pagination: undefined
    };
}
export const QueryDenomsResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denoms) {
            Denom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(Denom.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsResponse();
        message.denoms = object.denoms?.map(e => Denom.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsResponse();
        message.denoms = object.denoms?.map(e => Denom.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e ? Denom.toAmino(e) : undefined);
        }
        else {
            obj.denoms = message.denoms;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse",
            value: QueryDenomsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryONFTRequest() {
    return {
        denomId: "",
        id: ""
    };
}
export const QueryONFTRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryONFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryONFTRequest();
        message.denomId = object.denomId ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryONFTRequest();
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.id = message.id === "" ? undefined : message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryONFTRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryONFTRequest.decode(message.value);
    },
    toProto(message) {
        return QueryONFTRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest",
            value: QueryONFTRequest.encode(message).finish()
        };
    }
};
function createBaseQueryONFTResponse() {
    return {
        onft: undefined
    };
}
export const QueryONFTResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.onft !== undefined) {
            ONFT.encode(message.onft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryONFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.onft = ONFT.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryONFTResponse();
        message.onft = object.onft !== undefined && object.onft !== null ? ONFT.fromPartial(object.onft) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryONFTResponse();
        if (object.onft !== undefined && object.onft !== null) {
            message.onft = ONFT.fromAmino(object.onft);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.onft = message.onft ? ONFT.toAmino(message.onft) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryONFTResponse.decode(message.value);
    },
    toProto(message) {
        return QueryONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse",
            value: QueryONFTResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIBCDenomONFTRequest() {
    return {
        hash: "",
        id: ""
    };
}
export const QueryIBCDenomONFTRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIBCDenomONFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIBCDenomONFTRequest();
        message.hash = object.hash ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIBCDenomONFTRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.id = message.id === "" ? undefined : message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIBCDenomONFTRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIBCDenomONFTRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIBCDenomONFTRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest",
            value: QueryIBCDenomONFTRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerONFTsRequest() {
    return {
        denomId: "",
        owner: "",
        pagination: undefined
    };
}
export const QueryOwnerONFTsRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerONFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerONFTsRequest();
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwnerONFTsRequest();
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwnerONFTsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOwnerONFTsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOwnerONFTsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest",
            value: QueryOwnerONFTsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerONFTsResponse() {
    return {
        owner: undefined,
        pagination: undefined
    };
}
export const QueryOwnerONFTsResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== undefined) {
            Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerONFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = Owner.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerONFTsResponse();
        message.owner = object.owner !== undefined && object.owner !== null ? Owner.fromPartial(object.owner) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwnerONFTsResponse();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = Owner.fromAmino(object.owner);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ? Owner.toAmino(message.owner) : undefined;
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwnerONFTsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOwnerONFTsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOwnerONFTsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse",
            value: QueryOwnerONFTsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerIBCDenomONFTsRequest() {
    return {
        hash: "",
        owner: "",
        pagination: undefined
    };
}
export const QueryOwnerIBCDenomONFTsRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerIBCDenomONFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerIBCDenomONFTsRequest();
        message.hash = object.hash ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwnerIBCDenomONFTsRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwnerIBCDenomONFTsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOwnerIBCDenomONFTsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOwnerIBCDenomONFTsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest",
            value: QueryOwnerIBCDenomONFTsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        denomId: "",
        owner: ""
    };
}
export const QuerySupplyRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyRequest();
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyRequest();
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest",
            value: QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        amount: BigInt(0)
    };
}
export const QuerySupplyResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== BigInt(0)) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse",
            value: QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIBCDenomSupplyRequest() {
    return {
        hash: "",
        owner: ""
    };
}
export const QueryIBCDenomSupplyRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIBCDenomSupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIBCDenomSupplyRequest();
        message.hash = object.hash ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIBCDenomSupplyRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIBCDenomSupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIBCDenomSupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIBCDenomSupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest",
            value: QueryIBCDenomSupplyRequest.encode(message).finish()
        };
    }
};
function createBaseOwnerONFTCollection() {
    return {
        denom: Denom.fromPartial({}),
        onfts: []
    };
}
export const OwnerONFTCollection = {
    typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== undefined) {
            Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.onfts) {
            ONFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwnerONFTCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = Denom.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.onfts.push(ONFT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOwnerONFTCollection();
        message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
        message.onfts = object.onfts?.map(e => ONFT.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseOwnerONFTCollection();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = Denom.fromAmino(object.denom);
        }
        message.onfts = object.onfts?.map(e => ONFT.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
        if (message.onfts) {
            obj.onfts = message.onfts.map(e => e ? ONFT.toAmino(e) : undefined);
        }
        else {
            obj.onfts = message.onfts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return OwnerONFTCollection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OwnerONFTCollection.decode(message.value);
    },
    toProto(message) {
        return OwnerONFTCollection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection",
            value: OwnerONFTCollection.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest",
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
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest",
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
    typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse",
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
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
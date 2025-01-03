import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { WeightedAddress, Metadata } from "./onft.js";
import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { Decimal } from "@cosmjs/math";
function createBaseMsgCreateDenom() {
    return {
        id: "",
        symbol: "",
        name: "",
        description: "",
        previewUri: "",
        schema: "",
        sender: "",
        creationFee: Coin.fromPartial({}),
        uri: "",
        uriHash: "",
        data: "",
        royaltyReceivers: []
    };
}
export const MsgCreateDenom = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(42).string(message.previewUri);
        }
        if (message.schema !== "") {
            writer.uint32(50).string(message.schema);
        }
        if (message.sender !== "") {
            writer.uint32(58).string(message.sender);
        }
        if (message.creationFee !== undefined) {
            Coin.encode(message.creationFee, writer.uint32(66).fork()).ldelim();
        }
        if (message.uri !== "") {
            writer.uint32(74).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(82).string(message.uriHash);
        }
        if (message.data !== "") {
            writer.uint32(90).string(message.data);
        }
        for (const v of message.royaltyReceivers) {
            WeightedAddress.encode(v, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.previewUri = reader.string();
                    break;
                case 6:
                    message.schema = reader.string();
                    break;
                case 7:
                    message.sender = reader.string();
                    break;
                case 8:
                    message.creationFee = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.uri = reader.string();
                    break;
                case 10:
                    message.uriHash = reader.string();
                    break;
                case 11:
                    message.data = reader.string();
                    break;
                case 12:
                    message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.id = object.id ?? "";
        message.symbol = object.symbol ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        message.schema = object.schema ?? "";
        message.sender = object.sender ?? "";
        message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        message.data = object.data ?? "";
        message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDenom();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.preview_uri !== undefined && object.preview_uri !== null) {
            message.previewUri = object.preview_uri;
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.creation_fee !== undefined && object.creation_fee !== null) {
            message.creationFee = Coin.fromAmino(object.creation_fee);
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        message.royaltyReceivers = object.royalty_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.name = message.name === "" ? undefined : message.name;
        obj.description = message.description === "" ? undefined : message.description;
        obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
        obj.schema = message.schema === "" ? undefined : message.schema;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
        obj.uri = message.uri === "" ? undefined : message.uri;
        obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
        obj.data = message.data === "" ? undefined : message.data;
        if (message.royaltyReceivers) {
            obj.royalty_receivers = message.royaltyReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.royalty_receivers = message.royaltyReceivers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/onft/MsgCreateDenom",
            value: MsgCreateDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
            value: MsgCreateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDenomResponse() {
    return {};
}
export const MsgCreateDenomResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
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
        const message = createBaseMsgCreateDenomResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateDenomResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse",
            value: MsgCreateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDenom() {
    return {
        id: "",
        name: "",
        description: "",
        previewUri: "",
        sender: "",
        royaltyReceivers: []
    };
}
export const MsgUpdateDenom = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(34).string(message.previewUri);
        }
        if (message.sender !== "") {
            writer.uint32(42).string(message.sender);
        }
        for (const v of message.royaltyReceivers) {
            WeightedAddress.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.previewUri = reader.string();
                    break;
                case 5:
                    message.sender = reader.string();
                    break;
                case 6:
                    message.royaltyReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDenom();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        message.sender = object.sender ?? "";
        message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateDenom();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.preview_uri !== undefined && object.preview_uri !== null) {
            message.previewUri = object.preview_uri;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.royaltyReceivers = object.royalty_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.name = message.name === "" ? undefined : message.name;
        obj.description = message.description === "" ? undefined : message.description;
        obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.royaltyReceivers) {
            obj.royalty_receivers = message.royaltyReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.royalty_receivers = message.royaltyReceivers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/onft/MsgUpdateDenom",
            value: MsgUpdateDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
            value: MsgUpdateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDenomResponse() {
    return {};
}
export const MsgUpdateDenomResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenomResponse();
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
        const message = createBaseMsgUpdateDenomResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateDenomResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse",
            value: MsgUpdateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgPurgeDenom() {
    return {
        id: "",
        sender: ""
    };
}
export const MsgPurgeDenom = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPurgeDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPurgeDenom();
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPurgeDenom();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPurgeDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/onft/MsgPurgeDenom",
            value: MsgPurgeDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgPurgeDenom.decode(message.value);
    },
    toProto(message) {
        return MsgPurgeDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
            value: MsgPurgeDenom.encode(message).finish()
        };
    }
};
function createBaseMsgPurgeDenomResponse() {
    return {};
}
export const MsgPurgeDenomResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPurgeDenomResponse();
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
        const message = createBaseMsgPurgeDenomResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgPurgeDenomResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPurgeDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPurgeDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgPurgeDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse",
            value: MsgPurgeDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransferDenom() {
    return {
        id: "",
        sender: "",
        recipient: ""
    };
}
export const MsgTransferDenom = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferDenom();
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransferDenom();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/onft/MsgTransferDenom",
            value: MsgTransferDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransferDenom.decode(message.value);
    },
    toProto(message) {
        return MsgTransferDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
            value: MsgTransferDenom.encode(message).finish()
        };
    }
};
function createBaseMsgTransferDenomResponse() {
    return {};
}
export const MsgTransferDenomResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferDenomResponse();
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
        const message = createBaseMsgTransferDenomResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTransferDenomResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse",
            value: MsgTransferDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMintONFT() {
    return {
        id: "",
        denomId: "",
        metadata: Metadata.fromPartial({}),
        data: "",
        transferable: false,
        extensible: false,
        nsfw: false,
        royaltyShare: "",
        sender: "",
        recipient: ""
    };
}
export const MsgMintONFT = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        if (message.transferable === true) {
            writer.uint32(40).bool(message.transferable);
        }
        if (message.extensible === true) {
            writer.uint32(48).bool(message.extensible);
        }
        if (message.nsfw === true) {
            writer.uint32(56).bool(message.nsfw);
        }
        if (message.royaltyShare !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.royaltyShare, 18).atomics);
        }
        if (message.sender !== "") {
            writer.uint32(74).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(82).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                case 5:
                    message.transferable = reader.bool();
                    break;
                case 6:
                    message.extensible = reader.bool();
                    break;
                case 7:
                    message.nsfw = reader.bool();
                    break;
                case 8:
                    message.royaltyShare = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.sender = reader.string();
                    break;
                case 10:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMintONFT();
        message.id = object.id ?? "";
        message.denomId = object.denomId ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        message.data = object.data ?? "";
        message.transferable = object.transferable ?? false;
        message.extensible = object.extensible ?? false;
        message.nsfw = object.nsfw ?? false;
        message.royaltyShare = object.royaltyShare ?? "";
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMintONFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromAmino(object.metadata);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.transferable !== undefined && object.transferable !== null) {
            message.transferable = object.transferable;
        }
        if (object.extensible !== undefined && object.extensible !== null) {
            message.extensible = object.extensible;
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = object.nsfw;
        }
        if (object.royalty_share !== undefined && object.royalty_share !== null) {
            message.royaltyShare = object.royalty_share;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        obj.data = message.data === "" ? undefined : message.data;
        obj.transferable = message.transferable === false ? undefined : message.transferable;
        obj.extensible = message.extensible === false ? undefined : message.extensible;
        obj.nsfw = message.nsfw === false ? undefined : message.nsfw;
        obj.royalty_share = message.royaltyShare === "" ? undefined : message.royaltyShare;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintONFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/onft/MsgMintONFT",
            value: MsgMintONFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMintONFT.decode(message.value);
    },
    toProto(message) {
        return MsgMintONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
            value: MsgMintONFT.encode(message).finish()
        };
    }
};
function createBaseMsgMintONFTResponse() {
    return {};
}
export const MsgMintONFTResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintONFTResponse();
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
        const message = createBaseMsgMintONFTResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgMintONFTResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMintONFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse",
            value: MsgMintONFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransferONFT() {
    return {
        id: "",
        denomId: "",
        sender: "",
        recipient: ""
    };
}
export const MsgTransferONFT = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                case 4:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferONFT();
        message.id = object.id ?? "";
        message.denomId = object.denomId ?? "";
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransferONFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferONFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/onft/MsgTransferONFT",
            value: MsgTransferONFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransferONFT.decode(message.value);
    },
    toProto(message) {
        return MsgTransferONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
            value: MsgTransferONFT.encode(message).finish()
        };
    }
};
function createBaseMsgTransferONFTResponse() {
    return {};
}
export const MsgTransferONFTResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferONFTResponse();
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
        const message = createBaseMsgTransferONFTResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTransferONFTResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferONFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse",
            value: MsgTransferONFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurnONFT() {
    return {
        id: "",
        denomId: "",
        sender: ""
    };
}
export const MsgBurnONFT = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBurnONFT();
        message.id = object.id ?? "";
        message.denomId = object.denomId ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBurnONFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurnONFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/onft/MsgBurnONFT",
            value: MsgBurnONFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBurnONFT.decode(message.value);
    },
    toProto(message) {
        return MsgBurnONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
            value: MsgBurnONFT.encode(message).finish()
        };
    }
};
function createBaseMsgBurnONFTResponse() {
    return {};
}
export const MsgBurnONFTResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnONFTResponse();
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
        const message = createBaseMsgBurnONFTResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBurnONFTResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurnONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBurnONFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBurnONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse",
            value: MsgBurnONFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
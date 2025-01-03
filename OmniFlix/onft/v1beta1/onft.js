import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { toTimestamp, fromTimestamp } from "../../../helpers.js";
import { Decimal } from "@cosmjs/math";
function createBaseCollection() {
    return {
        denom: Denom.fromPartial({}),
        onfts: []
    };
}
export const Collection = {
    typeUrl: "/OmniFlix.onft.v1beta1.Collection",
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
        const message = createBaseCollection();
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
        const message = createBaseCollection();
        message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
        message.onfts = object.onfts?.map(e => ONFT.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCollection();
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
        return Collection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Collection.decode(message.value);
    },
    toProto(message) {
        return Collection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Collection",
            value: Collection.encode(message).finish()
        };
    }
};
function createBaseIDCollection() {
    return {
        denomId: "",
        onftIds: []
    };
}
export const IDCollection = {
    typeUrl: "/OmniFlix.onft.v1beta1.IDCollection",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        for (const v of message.onftIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.onftIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIDCollection();
        message.denomId = object.denomId ?? "";
        message.onftIds = object.onftIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseIDCollection();
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        message.onftIds = object.onft_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        if (message.onftIds) {
            obj.onft_ids = message.onftIds.map(e => e);
        }
        else {
            obj.onft_ids = message.onftIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return IDCollection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IDCollection.decode(message.value);
    },
    toProto(message) {
        return IDCollection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.IDCollection",
            value: IDCollection.encode(message).finish()
        };
    }
};
function createBaseDenom() {
    return {
        id: "",
        symbol: "",
        name: "",
        schema: "",
        creator: "",
        description: "",
        previewUri: "",
        uri: "",
        uriHash: "",
        data: "",
        royaltyReceivers: []
    };
}
export const Denom = {
    typeUrl: "/OmniFlix.onft.v1beta1.Denom",
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
        if (message.schema !== "") {
            writer.uint32(34).string(message.schema);
        }
        if (message.creator !== "") {
            writer.uint32(42).string(message.creator);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(58).string(message.previewUri);
        }
        if (message.uri !== "") {
            writer.uint32(66).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(74).string(message.uriHash);
        }
        if (message.data !== "") {
            writer.uint32(82).string(message.data);
        }
        for (const v of message.royaltyReceivers) {
            WeightedAddress.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenom();
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
                    message.schema = reader.string();
                    break;
                case 5:
                    message.creator = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.previewUri = reader.string();
                    break;
                case 8:
                    message.uri = reader.string();
                    break;
                case 9:
                    message.uriHash = reader.string();
                    break;
                case 10:
                    message.data = reader.string();
                    break;
                case 11:
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
        const message = createBaseDenom();
        message.id = object.id ?? "";
        message.symbol = object.symbol ?? "";
        message.name = object.name ?? "";
        message.schema = object.schema ?? "";
        message.creator = object.creator ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        message.data = object.data ?? "";
        message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenom();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.preview_uri !== undefined && object.preview_uri !== null) {
            message.previewUri = object.preview_uri;
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
        obj.schema = message.schema === "" ? undefined : message.schema;
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.description = message.description === "" ? undefined : message.description;
        obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
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
        return Denom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Denom.decode(message.value);
    },
    toProto(message) {
        return Denom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Denom",
            value: Denom.encode(message).finish()
        };
    }
};
function createBaseDenomMetadata() {
    return {
        creator: "",
        schema: "",
        description: "",
        previewUri: "",
        data: "",
        uriHash: "",
        royaltyReceivers: []
    };
}
export const DenomMetadata = {
    typeUrl: "/OmniFlix.onft.v1beta1.DenomMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.schema !== "") {
            writer.uint32(18).string(message.schema);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(34).string(message.previewUri);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.uriHash !== "") {
            writer.uint32(50).string(message.uriHash);
        }
        for (const v of message.royaltyReceivers) {
            WeightedAddress.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.schema = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.previewUri = reader.string();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.uriHash = reader.string();
                    break;
                case 7:
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
        const message = createBaseDenomMetadata();
        message.creator = object.creator ?? "";
        message.schema = object.schema ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        message.data = object.data ?? "";
        message.uriHash = object.uriHash ?? "";
        message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomMetadata();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.preview_uri !== undefined && object.preview_uri !== null) {
            message.previewUri = object.preview_uri;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        message.royaltyReceivers = object.royalty_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.schema = message.schema === "" ? undefined : message.schema;
        obj.description = message.description === "" ? undefined : message.description;
        obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
        obj.data = message.data === "" ? undefined : message.data;
        obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
        if (message.royaltyReceivers) {
            obj.royalty_receivers = message.royaltyReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.royalty_receivers = message.royaltyReceivers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DenomMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DenomMetadata.decode(message.value);
    },
    toProto(message) {
        return DenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.DenomMetadata",
            value: DenomMetadata.encode(message).finish()
        };
    }
};
function createBaseONFT() {
    return {
        id: "",
        metadata: Metadata.fromPartial({}),
        data: "",
        owner: "",
        transferable: false,
        extensible: false,
        createdAt: new Date(),
        nsfw: false,
        royaltyShare: ""
    };
}
export const ONFT = {
    typeUrl: "/OmniFlix.onft.v1beta1.ONFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.transferable === true) {
            writer.uint32(40).bool(message.transferable);
        }
        if (message.extensible === true) {
            writer.uint32(48).bool(message.extensible);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.nsfw === true) {
            writer.uint32(64).bool(message.nsfw);
        }
        if (message.royaltyShare !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.royaltyShare, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.transferable = reader.bool();
                    break;
                case 6:
                    message.extensible = reader.bool();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nsfw = reader.bool();
                    break;
                case 9:
                    message.royaltyShare = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseONFT();
        message.id = object.id ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        message.data = object.data ?? "";
        message.owner = object.owner ?? "";
        message.transferable = object.transferable ?? false;
        message.extensible = object.extensible ?? false;
        message.createdAt = object.createdAt ?? undefined;
        message.nsfw = object.nsfw ?? false;
        message.royaltyShare = object.royaltyShare ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseONFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromAmino(object.metadata);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.transferable !== undefined && object.transferable !== null) {
            message.transferable = object.transferable;
        }
        if (object.extensible !== undefined && object.extensible !== null) {
            message.extensible = object.extensible;
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = object.nsfw;
        }
        if (object.royalty_share !== undefined && object.royalty_share !== null) {
            message.royaltyShare = object.royalty_share;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        obj.data = message.data === "" ? undefined : message.data;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.transferable = message.transferable === false ? undefined : message.transferable;
        obj.extensible = message.extensible === false ? undefined : message.extensible;
        obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
        obj.nsfw = message.nsfw === false ? undefined : message.nsfw;
        obj.royalty_share = message.royaltyShare === "" ? undefined : message.royaltyShare;
        return obj;
    },
    fromAminoMsg(object) {
        return ONFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ONFT.decode(message.value);
    },
    toProto(message) {
        return ONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.ONFT",
            value: ONFT.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        name: "",
        description: "",
        mediaUri: "",
        previewUri: "",
        uriHash: ""
    };
}
export const Metadata = {
    typeUrl: "/OmniFlix.onft.v1beta1.Metadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.mediaUri !== "") {
            writer.uint32(26).string(message.mediaUri);
        }
        if (message.previewUri !== "") {
            writer.uint32(34).string(message.previewUri);
        }
        if (message.uriHash !== "") {
            writer.uint32(42).string(message.uriHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.mediaUri = reader.string();
                    break;
                case 4:
                    message.previewUri = reader.string();
                    break;
                case 5:
                    message.uriHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.mediaUri = object.mediaUri ?? "";
        message.previewUri = object.previewUri ?? "";
        message.uriHash = object.uriHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMetadata();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.media_uri !== undefined && object.media_uri !== null) {
            message.mediaUri = object.media_uri;
        }
        if (object.preview_uri !== undefined && object.preview_uri !== null) {
            message.previewUri = object.preview_uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.description = message.description === "" ? undefined : message.description;
        obj.media_uri = message.mediaUri === "" ? undefined : message.mediaUri;
        obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
        obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
        return obj;
    },
    fromAminoMsg(object) {
        return Metadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Metadata",
            value: Metadata.encode(message).finish()
        };
    }
};
function createBaseONFTMetadata() {
    return {
        name: "",
        description: "",
        previewUri: "",
        data: "",
        transferable: false,
        extensible: false,
        createdAt: new Date(),
        nsfw: false,
        royaltyShare: "",
        uriHash: ""
    };
}
export const ONFTMetadata = {
    typeUrl: "/OmniFlix.onft.v1beta1.ONFTMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(26).string(message.previewUri);
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
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.nsfw === true) {
            writer.uint32(64).bool(message.nsfw);
        }
        if (message.royaltyShare !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.royaltyShare, 18).atomics);
        }
        if (message.uriHash !== "") {
            writer.uint32(82).string(message.uriHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseONFTMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.previewUri = reader.string();
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nsfw = reader.bool();
                    break;
                case 9:
                    message.royaltyShare = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.uriHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseONFTMetadata();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        message.data = object.data ?? "";
        message.transferable = object.transferable ?? false;
        message.extensible = object.extensible ?? false;
        message.createdAt = object.createdAt ?? undefined;
        message.nsfw = object.nsfw ?? false;
        message.royaltyShare = object.royaltyShare ?? "";
        message.uriHash = object.uriHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseONFTMetadata();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.preview_uri !== undefined && object.preview_uri !== null) {
            message.previewUri = object.preview_uri;
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
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = object.nsfw;
        }
        if (object.royalty_share !== undefined && object.royalty_share !== null) {
            message.royaltyShare = object.royalty_share;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.description = message.description === "" ? undefined : message.description;
        obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
        obj.data = message.data === "" ? undefined : message.data;
        obj.transferable = message.transferable === false ? undefined : message.transferable;
        obj.extensible = message.extensible === false ? undefined : message.extensible;
        obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
        obj.nsfw = message.nsfw === false ? undefined : message.nsfw;
        obj.royalty_share = message.royaltyShare === "" ? undefined : message.royaltyShare;
        obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
        return obj;
    },
    fromAminoMsg(object) {
        return ONFTMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ONFTMetadata.decode(message.value);
    },
    toProto(message) {
        return ONFTMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.ONFTMetadata",
            value: ONFTMetadata.encode(message).finish()
        };
    }
};
function createBaseOwner() {
    return {
        address: "",
        idCollections: []
    };
}
export const Owner = {
    typeUrl: "/OmniFlix.onft.v1beta1.Owner",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.idCollections) {
            IDCollection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.idCollections.push(IDCollection.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOwner();
        message.address = object.address ?? "";
        message.idCollections = object.idCollections?.map(e => IDCollection.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseOwner();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.idCollections = object.id_collections?.map(e => IDCollection.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.idCollections) {
            obj.id_collections = message.idCollections.map(e => e ? IDCollection.toAmino(e) : undefined);
        }
        else {
            obj.id_collections = message.idCollections;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Owner.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Owner.decode(message.value);
    },
    toProto(message) {
        return Owner.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Owner",
            value: Owner.encode(message).finish()
        };
    }
};
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
export const WeightedAddress = {
    typeUrl: "/OmniFlix.onft.v1beta1.WeightedAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return WeightedAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.WeightedAddress",
            value: WeightedAddress.encode(message).finish()
        };
    }
};
//# sourceMappingURL=onft.js.map
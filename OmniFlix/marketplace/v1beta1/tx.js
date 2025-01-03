import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { WeightedAddress } from "./listing";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "./params";
import { AuctionListing } from "./auction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
function createBaseMsgListNFT() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        price: Coin.fromPartial({}),
        owner: "",
        splitShares: []
    };
}
export const MsgListNFT = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.nftId !== "") {
            writer.uint32(18).string(message.nftId);
        }
        if (message.denomId !== "") {
            writer.uint32(26).string(message.denomId);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        for (const v of message.splitShares) {
            WeightedAddress.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgListNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.nftId = reader.string();
                    break;
                case 3:
                    message.denomId = reader.string();
                    break;
                case 4:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.splitShares.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgListNFT();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
        message.owner = object.owner ?? "";
        message.splitShares = object.splitShares?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgListNFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromAmino(object.price);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.splitShares = object.split_shares?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.price = message.price ? Coin.toAmino(message.price) : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        if (message.splitShares) {
            obj.split_shares = message.splitShares.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.split_shares = message.splitShares;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgListNFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/marketplace/MsgListNFT",
            value: MsgListNFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgListNFT.decode(message.value);
    },
    toProto(message) {
        return MsgListNFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
            value: MsgListNFT.encode(message).finish()
        };
    }
};
function createBaseMsgListNFTResponse() {
    return {};
}
export const MsgListNFTResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgListNFTResponse();
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
        const message = createBaseMsgListNFTResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgListNFTResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgListNFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgListNFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgListNFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse",
            value: MsgListNFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgEditListing() {
    return {
        id: "",
        price: Coin.fromPartial({}),
        owner: ""
    };
}
export const MsgEditListing = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditListing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = createBaseMsgEditListing();
        message.id = object.id ?? "";
        message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEditListing();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromAmino(object.price);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.price = message.price ? Coin.toAmino(message.price) : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEditListing.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/marketplace/MsgEditListing",
            value: MsgEditListing.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgEditListing.decode(message.value);
    },
    toProto(message) {
        return MsgEditListing.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
            value: MsgEditListing.encode(message).finish()
        };
    }
};
function createBaseMsgEditListingResponse() {
    return {};
}
export const MsgEditListingResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditListingResponse();
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
        const message = createBaseMsgEditListingResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgEditListingResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEditListingResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgEditListingResponse.decode(message.value);
    },
    toProto(message) {
        return MsgEditListingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse",
            value: MsgEditListingResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeListNFT() {
    return {
        id: "",
        owner: ""
    };
}
export const MsgDeListNFT = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeListNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
        const message = createBaseMsgDeListNFT();
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeListNFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeListNFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/marketplace/MsgDeListNFT",
            value: MsgDeListNFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDeListNFT.decode(message.value);
    },
    toProto(message) {
        return MsgDeListNFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
            value: MsgDeListNFT.encode(message).finish()
        };
    }
};
function createBaseMsgDeListNFTResponse() {
    return {};
}
export const MsgDeListNFTResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeListNFTResponse();
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
        const message = createBaseMsgDeListNFTResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDeListNFTResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeListNFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeListNFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeListNFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse",
            value: MsgDeListNFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBuyNFT() {
    return {
        id: "",
        price: Coin.fromPartial({}),
        buyer: ""
    };
}
export const MsgBuyNFT = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
        }
        if (message.buyer !== "") {
            writer.uint32(26).string(message.buyer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.buyer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyNFT();
        message.id = object.id ?? "";
        message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
        message.buyer = object.buyer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBuyNFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromAmino(object.price);
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.price = message.price ? Coin.toAmino(message.price) : undefined;
        obj.buyer = message.buyer === "" ? undefined : message.buyer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBuyNFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/marketplace/MsgBuyNFT",
            value: MsgBuyNFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBuyNFT.decode(message.value);
    },
    toProto(message) {
        return MsgBuyNFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
            value: MsgBuyNFT.encode(message).finish()
        };
    }
};
function createBaseMsgBuyNFTResponse() {
    return {};
}
export const MsgBuyNFTResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyNFTResponse();
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
        const message = createBaseMsgBuyNFTResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBuyNFTResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBuyNFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBuyNFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBuyNFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse",
            value: MsgBuyNFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateAuction() {
    return {
        nftId: "",
        denomId: "",
        startTime: new Date(),
        startPrice: Coin.fromPartial({}),
        duration: undefined,
        incrementPercentage: "",
        whitelistAccounts: [],
        splitShares: [],
        owner: ""
    };
}
export const MsgCreateAuction = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nftId !== "") {
            writer.uint32(10).string(message.nftId);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.startPrice !== undefined) {
            Coin.encode(message.startPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
        }
        if (message.incrementPercentage !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.incrementPercentage, 18).atomics);
        }
        for (const v of message.whitelistAccounts) {
            writer.uint32(58).string(v);
        }
        for (const v of message.splitShares) {
            WeightedAddress.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(74).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftId = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startPrice = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.incrementPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.whitelistAccounts.push(reader.string());
                    break;
                case 8:
                    message.splitShares.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                case 9:
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
        const message = createBaseMsgCreateAuction();
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.startTime = object.startTime ?? undefined;
        message.startPrice = object.startPrice !== undefined && object.startPrice !== null ? Coin.fromPartial(object.startPrice) : undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.incrementPercentage = object.incrementPercentage ?? "";
        message.whitelistAccounts = object.whitelistAccounts?.map(e => e) || [];
        message.splitShares = object.splitShares?.map(e => WeightedAddress.fromPartial(e)) || [];
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateAuction();
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.start_price !== undefined && object.start_price !== null) {
            message.startPrice = Coin.fromAmino(object.start_price);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        if (object.increment_percentage !== undefined && object.increment_percentage !== null) {
            message.incrementPercentage = object.increment_percentage;
        }
        message.whitelistAccounts = object.whitelist_accounts?.map(e => e) || [];
        message.splitShares = object.split_shares?.map(e => WeightedAddress.fromAmino(e)) || [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.start_price = message.startPrice ? Coin.toAmino(message.startPrice) : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.increment_percentage = message.incrementPercentage === "" ? undefined : message.incrementPercentage;
        if (message.whitelistAccounts) {
            obj.whitelist_accounts = message.whitelistAccounts.map(e => e);
        }
        else {
            obj.whitelist_accounts = message.whitelistAccounts;
        }
        if (message.splitShares) {
            obj.split_shares = message.splitShares.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.split_shares = message.splitShares;
        }
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateAuction.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/marketplace/MsgCreateAuction",
            value: MsgCreateAuction.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateAuction.decode(message.value);
    },
    toProto(message) {
        return MsgCreateAuction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
            value: MsgCreateAuction.encode(message).finish()
        };
    }
};
function createBaseMsgCreateAuctionResponse() {
    return {
        auction: undefined
    };
}
export const MsgCreateAuctionResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auction !== undefined) {
            AuctionListing.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateAuctionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction = AuctionListing.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateAuctionResponse();
        message.auction = object.auction !== undefined && object.auction !== null ? AuctionListing.fromPartial(object.auction) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateAuctionResponse();
        if (object.auction !== undefined && object.auction !== null) {
            message.auction = AuctionListing.fromAmino(object.auction);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auction = message.auction ? AuctionListing.toAmino(message.auction) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateAuctionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateAuctionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateAuctionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse",
            value: MsgCreateAuctionResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelAuction() {
    return {
        auctionId: BigInt(0),
        owner: ""
    };
}
export const MsgCancelAuction = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auctionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
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
        const message = createBaseMsgCancelAuction();
        message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelAuction();
        if (object.auction_id !== undefined && object.auction_id !== null) {
            message.auctionId = BigInt(object.auction_id);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelAuction.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/marketplace/MsgCancelAuction",
            value: MsgCancelAuction.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCancelAuction.decode(message.value);
    },
    toProto(message) {
        return MsgCancelAuction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
            value: MsgCancelAuction.encode(message).finish()
        };
    }
};
function createBaseMsgCancelAuctionResponse() {
    return {};
}
export const MsgCancelAuctionResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelAuctionResponse();
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
        const message = createBaseMsgCancelAuctionResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelAuctionResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelAuctionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelAuctionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelAuctionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse",
            value: MsgCancelAuctionResponse.encode(message).finish()
        };
    }
};
function createBaseMsgPlaceBid() {
    return {
        auctionId: BigInt(0),
        amount: Coin.fromPartial({}),
        bidder: ""
    };
}
export const MsgPlaceBid = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auctionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.bidder !== "") {
            writer.uint32(26).string(message.bidder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bidder = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPlaceBid();
        message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.bidder = object.bidder ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPlaceBid();
        if (object.auction_id !== undefined && object.auction_id !== null) {
            message.auctionId = BigInt(object.auction_id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.bidder !== undefined && object.bidder !== null) {
            message.bidder = object.bidder;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.bidder = message.bidder === "" ? undefined : message.bidder;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPlaceBid.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/marketplace/MsgPlaceBid",
            value: MsgPlaceBid.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgPlaceBid.decode(message.value);
    },
    toProto(message) {
        return MsgPlaceBid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
            value: MsgPlaceBid.encode(message).finish()
        };
    }
};
function createBaseMsgPlaceBidResponse() {
    return {};
}
export const MsgPlaceBidResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceBidResponse();
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
        const message = createBaseMsgPlaceBidResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgPlaceBidResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPlaceBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPlaceBidResponse.decode(message.value);
    },
    toProto(message) {
        return MsgPlaceBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse",
            value: MsgPlaceBidResponse.encode(message).finish()
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
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
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
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse",
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
            typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
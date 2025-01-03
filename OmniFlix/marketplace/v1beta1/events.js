import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEventListNFT() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        owner: ""
    };
}
export const EventListNFT = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT",
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
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventListNFT();
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
        const message = createBaseEventListNFT();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventListNFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
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
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventListNFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventListNFT.decode(message.value);
    },
    toProto(message) {
        return EventListNFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT",
            value: EventListNFT.encode(message).finish()
        };
    }
};
function createBaseEventEditListing() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        owner: ""
    };
}
export const EventEditListing = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing",
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
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEditListing();
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
        const message = createBaseEventEditListing();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventEditListing();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
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
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventEditListing.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventEditListing.decode(message.value);
    },
    toProto(message) {
        return EventEditListing.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing",
            value: EventEditListing.encode(message).finish()
        };
    }
};
function createBaseEventDeListNFT() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        owner: ""
    };
}
export const EventDeListNFT = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT",
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
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDeListNFT();
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
        const message = createBaseEventDeListNFT();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDeListNFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
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
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventDeListNFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventDeListNFT.decode(message.value);
    },
    toProto(message) {
        return EventDeListNFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT",
            value: EventDeListNFT.encode(message).finish()
        };
    }
};
function createBaseEventBuyNFT() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        owner: "",
        buyer: ""
    };
}
export const EventBuyNFT = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT",
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
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.buyer !== "") {
            writer.uint32(42).string(message.buyer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBuyNFT();
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
                    message.owner = reader.string();
                    break;
                case 5:
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
        const message = createBaseEventBuyNFT();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        message.buyer = object.buyer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBuyNFT();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.buyer = message.buyer === "" ? undefined : message.buyer;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBuyNFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBuyNFT.decode(message.value);
    },
    toProto(message) {
        return EventBuyNFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT",
            value: EventBuyNFT.encode(message).finish()
        };
    }
};
function createBaseEventCreateAuction() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        owner: "",
        minPrice: ""
    };
}
export const EventCreateAuction = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction",
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
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.minPrice !== "") {
            writer.uint32(42).string(message.minPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateAuction();
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
                    message.owner = reader.string();
                    break;
                case 5:
                    message.minPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreateAuction();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        message.minPrice = object.minPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateAuction();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.min_price !== undefined && object.min_price !== null) {
            message.minPrice = object.min_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.min_price = message.minPrice === "" ? undefined : message.minPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateAuction.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateAuction.decode(message.value);
    },
    toProto(message) {
        return EventCreateAuction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction",
            value: EventCreateAuction.encode(message).finish()
        };
    }
};
function createBaseEventCancelAuction() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        owner: ""
    };
}
export const EventCancelAuction = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction",
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
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelAuction();
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
        const message = createBaseEventCancelAuction();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelAuction();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
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
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancelAuction.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancelAuction.decode(message.value);
    },
    toProto(message) {
        return EventCancelAuction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction",
            value: EventCancelAuction.encode(message).finish()
        };
    }
};
function createBaseEventPlaceBid() {
    return {
        auctionId: "",
        nftId: "",
        denomId: "",
        bidder: "",
        amount: ""
    };
}
export const EventPlaceBid = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auctionId !== "") {
            writer.uint32(10).string(message.auctionId);
        }
        if (message.nftId !== "") {
            writer.uint32(18).string(message.nftId);
        }
        if (message.denomId !== "") {
            writer.uint32(26).string(message.denomId);
        }
        if (message.bidder !== "") {
            writer.uint32(34).string(message.bidder);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventPlaceBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.string();
                    break;
                case 2:
                    message.nftId = reader.string();
                    break;
                case 3:
                    message.denomId = reader.string();
                    break;
                case 4:
                    message.bidder = reader.string();
                    break;
                case 5:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventPlaceBid();
        message.auctionId = object.auctionId ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.bidder = object.bidder ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventPlaceBid();
        if (object.auction_id !== undefined && object.auction_id !== null) {
            message.auctionId = object.auction_id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.bidder !== undefined && object.bidder !== null) {
            message.bidder = object.bidder;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auction_id = message.auctionId === "" ? undefined : message.auctionId;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.bidder = message.bidder === "" ? undefined : message.bidder;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventPlaceBid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventPlaceBid.decode(message.value);
    },
    toProto(message) {
        return EventPlaceBid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid",
            value: EventPlaceBid.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { WeightedAddress } from "./listing.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { toTimestamp, fromTimestamp } from "../../../helpers.js";
import { Decimal } from "@cosmjs/math";
export var AuctionStatus;
(function (AuctionStatus) {
    AuctionStatus[AuctionStatus["AUCTION_STATUS_UNSPECIFIED"] = 0] = "AUCTION_STATUS_UNSPECIFIED";
    AuctionStatus[AuctionStatus["AUCTION_STATUS_INACTIVE"] = 1] = "AUCTION_STATUS_INACTIVE";
    AuctionStatus[AuctionStatus["AUCTION_STATUS_ACTIVE"] = 2] = "AUCTION_STATUS_ACTIVE";
    AuctionStatus[AuctionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuctionStatus || (AuctionStatus = {}));
export const AuctionStatusSDKType = AuctionStatus;
export const AuctionStatusAmino = AuctionStatus;
export function auctionStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "AUCTION_STATUS_UNSPECIFIED":
            return AuctionStatus.AUCTION_STATUS_UNSPECIFIED;
        case 1:
        case "AUCTION_STATUS_INACTIVE":
            return AuctionStatus.AUCTION_STATUS_INACTIVE;
        case 2:
        case "AUCTION_STATUS_ACTIVE":
            return AuctionStatus.AUCTION_STATUS_ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuctionStatus.UNRECOGNIZED;
    }
}
export function auctionStatusToJSON(object) {
    switch (object) {
        case AuctionStatus.AUCTION_STATUS_UNSPECIFIED:
            return "AUCTION_STATUS_UNSPECIFIED";
        case AuctionStatus.AUCTION_STATUS_INACTIVE:
            return "AUCTION_STATUS_INACTIVE";
        case AuctionStatus.AUCTION_STATUS_ACTIVE:
            return "AUCTION_STATUS_ACTIVE";
        case AuctionStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAuctionListing() {
    return {
        id: BigInt(0),
        nftId: "",
        denomId: "",
        startPrice: Coin.fromPartial({}),
        startTime: new Date(),
        endTime: undefined,
        owner: "",
        incrementPercentage: "",
        whitelistAccounts: [],
        splitShares: []
    };
}
export const AuctionListing = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.AuctionListing",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.nftId !== "") {
            writer.uint32(18).string(message.nftId);
        }
        if (message.denomId !== "") {
            writer.uint32(26).string(message.denomId);
        }
        if (message.startPrice !== undefined) {
            Coin.encode(message.startPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(58).string(message.owner);
        }
        if (message.incrementPercentage !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.incrementPercentage, 18).atomics);
        }
        for (const v of message.whitelistAccounts) {
            writer.uint32(74).string(v);
        }
        for (const v of message.splitShares) {
            WeightedAddress.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionListing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.nftId = reader.string();
                    break;
                case 3:
                    message.denomId = reader.string();
                    break;
                case 4:
                    message.startPrice = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.owner = reader.string();
                    break;
                case 8:
                    message.incrementPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.whitelistAccounts.push(reader.string());
                    break;
                case 10:
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
        const message = createBaseAuctionListing();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.startPrice = object.startPrice !== undefined && object.startPrice !== null ? Coin.fromPartial(object.startPrice) : undefined;
        message.startTime = object.startTime ?? undefined;
        message.endTime = object.endTime ?? undefined;
        message.owner = object.owner ?? "";
        message.incrementPercentage = object.incrementPercentage ?? "";
        message.whitelistAccounts = object.whitelistAccounts?.map(e => e) || [];
        message.splitShares = object.splitShares?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuctionListing();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.start_price !== undefined && object.start_price !== null) {
            message.startPrice = Coin.fromAmino(object.start_price);
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.increment_percentage !== undefined && object.increment_percentage !== null) {
            message.incrementPercentage = object.increment_percentage;
        }
        message.whitelistAccounts = object.whitelist_accounts?.map(e => e) || [];
        message.splitShares = object.split_shares?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.start_price = message.startPrice ? Coin.toAmino(message.startPrice) : undefined;
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
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
        return obj;
    },
    fromAminoMsg(object) {
        return AuctionListing.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AuctionListing.decode(message.value);
    },
    toProto(message) {
        return AuctionListing.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.AuctionListing",
            value: AuctionListing.encode(message).finish()
        };
    }
};
function createBaseBid() {
    return {
        auctionId: BigInt(0),
        bidder: "",
        amount: Coin.fromPartial({}),
        time: new Date()
    };
}
export const Bid = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Bid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auctionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.bidder !== "") {
            writer.uint32(18).string(message.bidder);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.bidder = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBid();
        message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
        message.bidder = object.bidder ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.time = object.time ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBid();
        if (object.auction_id !== undefined && object.auction_id !== null) {
            message.auctionId = BigInt(object.auction_id);
        }
        if (object.bidder !== undefined && object.bidder !== null) {
            message.bidder = object.bidder;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
        obj.bidder = message.bidder === "" ? undefined : message.bidder;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Bid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Bid.decode(message.value);
    },
    toProto(message) {
        return Bid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.Bid",
            value: Bid.encode(message).finish()
        };
    }
};
//# sourceMappingURL=auction.js.map
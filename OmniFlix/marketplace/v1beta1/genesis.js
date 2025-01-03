import { Listing } from "./listing";
import { Params } from "./params";
import { AuctionListing, Bid } from "./auction";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        listings: [],
        listingCount: BigInt(0),
        params: Params.fromPartial({}),
        auctions: [],
        bids: [],
        nextAuctionNumber: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.listings) {
            Listing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.listingCount !== BigInt(0)) {
            writer.uint32(16).uint64(message.listingCount);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.auctions) {
            AuctionListing.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.bids) {
            Bid.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.nextAuctionNumber !== BigInt(0)) {
            writer.uint32(48).uint64(message.nextAuctionNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.listings.push(Listing.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.listingCount = reader.uint64();
                    break;
                case 3:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.auctions.push(AuctionListing.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.bids.push(Bid.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.nextAuctionNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
        message.listingCount = object.listingCount !== undefined && object.listingCount !== null ? BigInt(object.listingCount.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.auctions = object.auctions?.map(e => AuctionListing.fromPartial(e)) || [];
        message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
        message.nextAuctionNumber = object.nextAuctionNumber !== undefined && object.nextAuctionNumber !== null ? BigInt(object.nextAuctionNumber.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
        if (object.ListingCount !== undefined && object.ListingCount !== null) {
            message.listingCount = BigInt(object.ListingCount);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.auctions = object.auctions?.map(e => AuctionListing.fromAmino(e)) || [];
        message.bids = object.bids?.map(e => Bid.fromAmino(e)) || [];
        if (object.next_auction_number !== undefined && object.next_auction_number !== null) {
            message.nextAuctionNumber = BigInt(object.next_auction_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.listings) {
            obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
        }
        else {
            obj.listings = message.listings;
        }
        obj.ListingCount = message.listingCount !== BigInt(0) ? message.listingCount?.toString() : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.auctions) {
            obj.auctions = message.auctions.map(e => e ? AuctionListing.toAmino(e) : undefined);
        }
        else {
            obj.auctions = message.auctions;
        }
        if (message.bids) {
            obj.bids = message.bids.map(e => e ? Bid.toAmino(e) : undefined);
        }
        else {
            obj.bids = message.bids;
        }
        obj.next_auction_number = message.nextAuctionNumber !== BigInt(0) ? message.nextAuctionNumber?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map